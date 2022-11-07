using InstagramApiSharp.API;
using InstagramApiSharp.API.Builder;
using InstagramApiSharp.Classes;
using Microsoft.AspNetCore.Http;
using MWStat.API.BusinessServices.Interfaces;

namespace MWStat.API.BusinessServices.Implementations
{
    public class InstagramApiBuilder : IInstagramApiBuilder
    {
        private readonly IInstagramAuthService authService;
        private readonly IHttpContextAccessor httpContextAccessor;
        public InstagramApiBuilder(IInstagramAuthService authService, IHttpContextAccessor httpContextAccessor)
        {
            this.authService = authService ?? throw new ArgumentNullException(nameof(authService));
            this.httpContextAccessor = httpContextAccessor ?? throw new ArgumentNullException(nameof(httpContextAccessor));
        }

        public async Task<IInstaApi> Build()
        {
            var pk = httpContextAccessor.HttpContext.Request.Cookies["pk"];
            var authToken = httpContextAccessor.HttpContext.Request.Cookies["authToken"];

            if (pk != null && authToken != null)
            {
                var sessionData = await authService.LoadSessionData(pk, authToken);

                if (sessionData == null)
                {
                    throw new Exception("SessionData not found in db");
                }

                var api = InstaApiBuilder.CreateBuilder()
                    .SetUser(new UserSessionData { UserName = string.Empty, Password = string.Empty })
                    .Build();

                api.LoadStateDataFromString(sessionData.SessionData);

                return api;
            }

            throw new Exception("redirect to login");
        }
    }
}
