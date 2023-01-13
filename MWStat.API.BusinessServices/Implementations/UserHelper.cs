using Microsoft.AspNetCore.Http;
using MWStat.API.BusinessServices.Interfaces;
using MWStat.API.BusinessServices.Mappers;
using MWStat.API.Domain.Models;
using MWStat.API.ORM.Interfaces;

namespace MWStat.API.BusinessServices.Implementations
{
    public class UserHelper : IUserHelper
    {
        private readonly IHttpContextAccessor httpContextAccessor;
        private readonly IUnitOfWork unitOfWork;
        public UserHelper(IHttpContextAccessor httpContextAccessor, IUnitOfWork unitOfWork)
        {
            this.httpContextAccessor = httpContextAccessor ?? throw new ArgumentNullException(nameof(httpContextAccessor));
            this.unitOfWork = unitOfWork ?? throw new ArgumentNullException(nameof(unitOfWork));
        }

        public async Task<long> GetCurrentUserPk()
        {
            var pk = httpContextAccessor.HttpContext.Request.Cookies["pk"];
            if (pk == null)
                throw new Exception("redirect to login");
            return long.Parse(pk);
        }

        public async Task<InstagramUser> GetCurrentUser()
        {
            var pk = httpContextAccessor.HttpContext.Request.Cookies["pk"];
            if (pk == null)
                throw new Exception("redirect to login");

            var dto = (await unitOfWork.InstagramUser.Get(x => x.Id == long.Parse(pk))).FirstOrDefault();

            return dto?.Map();
        }
    }
}
