using MWStat.API.Domain.Models;

namespace MWStat.API.BusinessServices.Interfaces
{
    public interface IUserHelper
    {
        Task<long> GetCurrentUserPk();
        Task<InstagramUser> GetCurrentUser();
    }
}
