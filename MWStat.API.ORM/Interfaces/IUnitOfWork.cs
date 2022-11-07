using MWStat.API.Domain.Dtos;

namespace MWStat.API.ORM.Interfaces
{
    public interface IUnitOfWork
    {
        IRepository<InstagramSessionDataDto> InstagramSessionData { get; }
        IRepository<InstagramUserDto> InstagramUser { get; }
        IRepository<InstagramRunDetailsDto> InstagramRunDetails { get; }
        IRepository<InstagramRunDetailsToInstagramUserDto> InstagramRunDetailsToInstagramUser { get; }
        Task Save();
    }
}
