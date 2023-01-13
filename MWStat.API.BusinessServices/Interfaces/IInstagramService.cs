using MWStat.API.Domain.Models;

namespace MWStat.API.BusinessServices.Interfaces
{
    public interface IInstagramService
    {
        Task<IEnumerable<InstagramAccounts>> GetFollowersAndFollowing(DateTime from, DateTime to);
        Task UpdateFollowersAndFollowing();
        Task FollowUser(long pk);
        Task UnfollowUser(long pk);
    }
}
