using MWStat.API.Domain.Dtos;
using MWStat.API.Domain.Enums;
using MWStat.API.Domain.Models;

namespace MWStat.API.BusinessServices.Mappers
{
    public static class InstagramRunDetailsMapper
    {
        public static InstagramRunDetails Map(this InstagramRunDetailsDto dto)
        {
            var list = new List<InstagramRunDetailsToInstagramUser>();
            if (dto.LinkedAccounts != null)
            {
                foreach (var acc in dto.LinkedAccounts)
                {
                    list.Add(acc.Map());
                }
            }
            return new InstagramRunDetails
            {
                Id = dto.Id,
                InstagramUserId = dto.InstagramUserId,
                InstagramUser = dto.InstagramUser?.Map(),
                StampDateTime = dto.StampDateTime,
                LinkedAccounts = list
            };
        }

        public static InstagramAccounts MapToInstagramAccounts(this InstagramRunDetailsDto dto)
        {
            var relations = dto.LinkedAccounts.Where(o => o.RelationToUser == RelationToUserEnum.NewFollower || o.RelationToUser == RelationToUserEnum.LostFollower
                || o.RelationToUser == RelationToUserEnum.NewFollowing || o.RelationToUser == RelationToUserEnum.LostFollowing);
            var accounts = new List<InstagramAccount>();
            foreach (var account in relations)
            {
                accounts.Add(new InstagramAccount
                {
                    Username = account.InstagramUser.Username,
                    ProfilePicUrl = account.InstagramUser.ProfilePicUrl,
                    Relation = account.RelationToUser
                });
            }
            return new InstagramAccounts
            {
                StampDateTime = dto.StampDateTime,
                FollowersCount = dto.LinkedAccounts.Where(o => o.RelationToUser == RelationToUserEnum.Follower).Count(),
                FollowingCount = dto.LinkedAccounts.Where(o => o.RelationToUser == RelationToUserEnum.Following).Count(),
                Accounts = accounts
            };
        }

        public static InstagramRunDetailsDto Map(this InstagramRunDetails model)
        {
            var list = new List<InstagramRunDetailsToInstagramUserDto>();
            if (model.LinkedAccounts != null)
            {
                foreach (var acc in model.LinkedAccounts)
                {
                    list.Add(acc.Map());
                }
            }
            return new InstagramRunDetailsDto
            {
                Id = model.Id,
                InstagramUserId = model.InstagramUserId,
                InstagramUser = model.InstagramUser?.Map(),
                StampDateTime = model.StampDateTime,
                LinkedAccounts = list
            };
        }
    }
}
