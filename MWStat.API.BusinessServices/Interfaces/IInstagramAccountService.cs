using MWStat.API.Domain.Models;

namespace MWStat.API.BusinessServices.Interfaces
{
    public interface IInstagramAccountService
    {
        Task SaveSessionData(InstagramSessionData stateData);
        Task<InstagramSessionData> LoadSessionData(string pk, string authToken);
        Task CreateSessionData(string username, string password);
        Task DeleteSessionData(string pk, string authToken);
    }
}
