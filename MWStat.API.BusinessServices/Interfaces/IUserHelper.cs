using MWStat.API.Domain.Models;

namespace MWStat.API.BusinessServices.Interfaces
{
    public interface IUserHelper
    {
        Task<string> GetCurrentUserName();
        Task<string> GetCurrentUserPk();
        Task<InstagramUser> GetCurrentUser();
        Task<string> GetUserPhotoUrl();
    }
}
