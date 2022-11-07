using InstagramApiSharp.API;

namespace MWStat.API.BusinessServices.Interfaces
{
    public interface IInstagramApiBuilder
    {
        Task<IInstaApi> Build();
    }
}
