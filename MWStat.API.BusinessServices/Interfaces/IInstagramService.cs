using InstagramApiSharp.Classes;
using InstagramApiSharp.Classes.Models;

namespace MWStat.API.BusinessServices.Interfaces
{
    public interface IInstagramService
    {
        Task<IResult<InstaUserInfo>> GetUserInfo(string username);
        Task UpdateFollowersAndFollowing();
    }
}
