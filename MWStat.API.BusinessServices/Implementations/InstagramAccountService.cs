using InstagramApiSharp.API.Builder;
using InstagramApiSharp.Classes;
using Microsoft.AspNetCore.Http;
using MWStat.API.BusinessServices.Interfaces;
using MWStat.API.BusinessServices.Mappers;
using MWStat.API.Domain.Models;
using MWStat.API.ORM.Interfaces;

namespace MWStat.API.BusinessServices.Implementations
{
    public class InstagramAccountService : IInstagramAccountService
    {
        private readonly IUnitOfWork unitOfWork;
        private readonly IHttpContextAccessor httpContextAccessor;

        public InstagramAccountService(IUnitOfWork unitOfWork, IHttpContextAccessor httpContextAccessor)
        {
            this.unitOfWork = unitOfWork ?? throw new ArgumentNullException(nameof(unitOfWork));
            this.httpContextAccessor = httpContextAccessor ?? throw new ArgumentNullException(nameof(httpContextAccessor));
        }

        public async Task SaveSessionData(InstagramSessionData stateData)
        {
            var dto = stateData.Map();
            await unitOfWork.InstagramUser.Create(dto.InstagramUser);
            await unitOfWork.InstagramSessionData.Create(dto);
            try
            {
                await unitOfWork.Save();
            } 
            catch(Exception e)
            {
                var b = e;
            }
        }

        public async Task<InstagramSessionData> LoadSessionData(string pk, string authToken)
        {
            var dto = (await unitOfWork.InstagramSessionData.Get(x => x.InstagramUser.Id == long.Parse(pk) && x.AuthToken == authToken)).FirstOrDefault();
            var model = dto?.Map();
            return model;
        }

        public async Task CreateSessionData(string username, string password)
        {
            var api = InstaApiBuilder.CreateBuilder()
                .SetUser(new UserSessionData { UserName = username, Password = password })
                .Build();

            await api.LoginAsync();

            if (!api.IsUserAuthenticated)
                throw new Exception("Invalid credentials");

            var user = api.GetLoggedUser();
            var sessionData = new InstagramSessionData
            {
                InstagramUser = new InstagramUser 
                {
                    Id = user.LoggedInUser.Pk, 
                    Username = user.UserName,
                    ProfilePicUrl = user.LoggedInUser.ProfilePicUrl
                },
                AuthToken = user.Authorization,
                SessionData = api.GetStateDataAsString()
            };

            await SaveSessionData(sessionData);

            httpContextAccessor.HttpContext.Response.Cookies.Append("pk", sessionData.InstagramUser.Id.ToString(), new CookieOptions { Expires = DateTime.Now.AddYears(1), Secure = true });
            httpContextAccessor.HttpContext.Response.Cookies.Append("authToken", sessionData.AuthToken, new CookieOptions { Expires = DateTime.Now.AddYears(1), Secure = true });
        }

        public async Task DeleteSessionData(string pk, string authToken)
        {
            var dto = (await unitOfWork.InstagramSessionData.Get(x => x.InstagramUser.Id == long.Parse(pk) && x.AuthToken == authToken)).FirstOrDefault();
            if (dto == null)
            {
                throw new Exception("No session data found?");
            }
            await unitOfWork.InstagramSessionData.Delete(dto);
            await unitOfWork.Save();
        }        
    }
}
