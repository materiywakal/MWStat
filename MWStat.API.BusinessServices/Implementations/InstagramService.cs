using InstagramApiSharp;
using InstagramApiSharp.API;
using MWStat.API.BusinessServices.Interfaces;
using MWStat.API.BusinessServices.Mappers;
using MWStat.API.Domain.Dtos;
using MWStat.API.Domain.Enums;
using MWStat.API.Domain.Models;
using MWStat.API.ORM.Interfaces;

namespace MWStat.API.BusinessServices.Implementations
{
    public class InstagramService : IInstagramService
    {
        private readonly IInstaApi instagramService;
        private readonly IUnitOfWork unitOfWork;
        private readonly IUserHelper userHelper;

        public InstagramService(IInstagramApiBuilder instagramApiBuilder, IUnitOfWork unitOfWork, IUserHelper userHelper)
        {
            if (instagramApiBuilder == null)
                throw new ArgumentNullException(nameof(instagramApiBuilder));
            this.instagramService = instagramApiBuilder.Build().Result;
            this.unitOfWork = unitOfWork ?? throw new ArgumentNullException(nameof(unitOfWork));
            this.userHelper = userHelper ?? throw new ArgumentNullException(nameof(userHelper));
        }

        public async Task<IEnumerable<InstagramAccounts>> GetFollowersAndFollowing(DateTime from, DateTime to)
        {
            var runDetails = await unitOfWork.InstagramRunDetails
                .Get(o => o.StampDateTime >= from && o.StampDateTime <= to && o.InstagramUser.Id == userHelper.GetCurrentUserPk().Result);

            var result = new List<InstagramAccounts>();

            foreach(var runDetail in runDetails)
            {
                result.Add(runDetail.MapToInstagramAccounts());
            }

            return result;
        }

        public async Task UpdateFollowersAndFollowing()
        {
            var runDetails = await GetCurrentFollowersAndFollowing();

            var recentRunDetails = (await unitOfWork.InstagramRunDetails.Get(o => o.InstagramUser.Id == runDetails.InstagramUser.Id))
                .OrderByDescending(o => o.StampDateTime).FirstOrDefault();

            if(recentRunDetails != null)
            {
                runDetails = await CompareAndUpdateRunDetails(runDetails, recentRunDetails);
                if (runDetails.LinkedAccounts == null)
                {
                    return;
                }
            }

            var runToUser = runDetails.LinkedAccounts;
            runDetails.LinkedAccounts = null;

            await unitOfWork.InstagramRunDetails.Create(runDetails);
            await unitOfWork.Save();
            var dbRunDetails = (await unitOfWork.InstagramRunDetails
                .Get(o => o.InstagramUser.Username == runDetails.InstagramUser.Username && o.StampDateTime == runDetails.StampDateTime))
                .FirstOrDefault().Map();

            var users = new List<long>();
            foreach(var i in runToUser)
            {
                users.Add(i.InstagramUser.Id);
            }

            var existingUsers = await unitOfWork.InstagramUser.Get(o => users.Contains(o.Id));

            foreach (var entity in runToUser)
            {
                entity.InstagramRunDetailsId = dbRunDetails.Id;
                var user = existingUsers.FirstOrDefault(o => o.Id == entity.InstagramUser.Id);
                if (user != null)
                {
                    entity.InstagramUser = null;
                    entity.InstagramUserId = user.Id;
                } 
                else
                {
                    await unitOfWork.InstagramUser.Create(entity.InstagramUser);
                }

                await unitOfWork.InstagramRunDetailsToInstagramUser.Create(entity);
                await unitOfWork.Save();
            }
        }

        private async Task<InstagramRunDetailsDto> GetCurrentFollowersAndFollowing()
        {
            var runDetails = new InstagramRunDetailsDto { InstagramUser = (await userHelper.GetCurrentUser()).Map(), StampDateTime = DateTime.Now, LinkedAccounts = new List<InstagramRunDetailsToInstagramUserDto>() };

            var followers = await instagramService.UserProcessor.GetUserFollowersAsync(runDetails.InstagramUser.Username, PaginationParameters.MaxPagesToLoad(Int32.MaxValue));
            foreach (var f in followers.Value)
            {
                var account = new InstagramUserDto
                {
                    Id = f.Pk,
                    Username = f.UserName,
                    ProfilePicUrl = f.ProfilePicUrl
                };

                runDetails.LinkedAccounts.Add(
                    new InstagramRunDetailsToInstagramUserDto
                    {
                        InstagramUser = account,
                        RelationToUser = RelationToUserEnum.Follower
                    }
                );
            }

            var following = await instagramService.UserProcessor.GetUserFollowingAsync(runDetails.InstagramUser.Username, PaginationParameters.MaxPagesToLoad(Int32.MaxValue));
            foreach (var f in following.Value)
            {
                var account = new InstagramUserDto
                {
                    Id = f.Pk,
                    Username = f.UserName,
                    ProfilePicUrl = f.ProfilePicUrl
                };

                runDetails.LinkedAccounts.Add(
                    new InstagramRunDetailsToInstagramUserDto
                    {
                        InstagramUser = account,
                        RelationToUser = RelationToUserEnum.Following
                    }
                );
            }

            return runDetails;
        }

        private Task<InstagramRunDetailsDto> CompareAndUpdateRunDetails(InstagramRunDetailsDto runDetails, InstagramRunDetailsDto recentRunDetails)
        {
            var runDetailsFollowers = runDetails.LinkedAccounts.Where(o => o.RelationToUser == RelationToUserEnum.Follower).ToList();
            var recentRunDetailsFollowers = recentRunDetails.LinkedAccounts.Where(o => o.RelationToUser == RelationToUserEnum.Follower).ToList();
            var anyChange = false;

            foreach (var detailsToUser in runDetailsFollowers)
            {
                if (recentRunDetails.LinkedAccounts
                    .FirstOrDefault(o => o.RelationToUser == RelationToUserEnum.Follower && o.InstagramUser.Id == detailsToUser.InstagramUser.Id) == null)
                {
                    runDetails.LinkedAccounts.Add(new InstagramRunDetailsToInstagramUserDto
                    {
                        InstagramUser = detailsToUser.InstagramUser,
                        RelationToUser = RelationToUserEnum.NewFollower
                    });
                    anyChange = true;
                }
            }

            foreach (var detailsToUser in recentRunDetailsFollowers)
            {
                if (runDetails.LinkedAccounts
                    .FirstOrDefault(o => o.RelationToUser == RelationToUserEnum.Follower && o.InstagramUser.Id == detailsToUser.InstagramUser.Id) == null)
                {
                    runDetails.LinkedAccounts.Add(new InstagramRunDetailsToInstagramUserDto
                    {
                        InstagramUser = detailsToUser.InstagramUser,
                        RelationToUser = RelationToUserEnum.LostFollower
                    });
                    anyChange = true;
                }
            }

            var runDetailsFollowing = runDetails.LinkedAccounts.Where(o => o.RelationToUser == RelationToUserEnum.Following).ToList();
            var recentRunDetailsFollowing = recentRunDetails.LinkedAccounts.Where(o => o.RelationToUser == RelationToUserEnum.Following).ToList();

            foreach (var detailsToUser in runDetailsFollowing)
            {
                if (recentRunDetails.LinkedAccounts
                    .FirstOrDefault(o => o.RelationToUser == RelationToUserEnum.Following && o.InstagramUser.Id == detailsToUser.InstagramUser.Id) == null)
                {
                    runDetails.LinkedAccounts.Add(new InstagramRunDetailsToInstagramUserDto
                    {
                        InstagramUser = detailsToUser.InstagramUser,
                        RelationToUser = RelationToUserEnum.NewFollowing
                    });
                    anyChange = true;
                }
            }

            foreach (var detailsToUser in recentRunDetailsFollowing)
            {
                if (runDetails.LinkedAccounts
                    .FirstOrDefault(o => o.RelationToUser == RelationToUserEnum.Following && o.InstagramUser.Id == detailsToUser.InstagramUser.Id) == null)
                {
                    runDetails.LinkedAccounts.Add(new InstagramRunDetailsToInstagramUserDto
                    {
                        InstagramUser = detailsToUser.InstagramUser,
                        RelationToUser = RelationToUserEnum.LostFollowing
                    });
                    anyChange = true;
                }
            }

            if (anyChange)
            {
                return Task.FromResult(runDetails);
            }
            return Task.FromResult(new InstagramRunDetailsDto());
        }

        public async Task FollowUser(long pk)
        {
            var result = await instagramService.UserProcessor.FollowUserAsync(pk);
            if(!result.Succeeded)
            {
                throw new Exception("Unable to follow user.");
            }
        }

        public async Task UnfollowUser(long pk)
        {
            var result = await instagramService.UserProcessor.UnFollowUserAsync(pk);
            if (!result.Succeeded)
            {
                throw new Exception("Unable to unfollow user.");
            }
        }
    }
}