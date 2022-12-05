using MWStat.API.Domain.Dtos;
using MWStat.API.Domain.Models;

namespace MWStat.API.BusinessServices.Interfaces
{
    public interface IInstagramService
    {
        Task<IEnumerable<InstagramAccounts>> GetFollowersAndFollowing(DateTime from, DateTime to);
        Task UpdateFollowersAndFollowing();
    }
}
