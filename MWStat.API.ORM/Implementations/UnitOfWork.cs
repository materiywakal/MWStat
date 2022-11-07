using MWStat.API.Domain.Dtos;
using MWStat.API.ORM.Interfaces;

namespace MWStat.API.ORM.Implementations
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly MWStatContext context;
        public IRepository<InstagramSessionDataDto> InstagramSessionData { get; }
        public IRepository<InstagramUserDto> InstagramUser { get; }
        public IRepository<InstagramRunDetailsDto> InstagramRunDetails { get; }
        public IRepository<InstagramRunDetailsToInstagramUserDto> InstagramRunDetailsToInstagramUser { get; }
        public UnitOfWork(MWStatContext context, IRepository<InstagramSessionDataDto> instagramSessionData,
            IRepository<InstagramUserDto> instagramUser, IRepository<InstagramRunDetailsDto> instagramRunDetails,
            IRepository<InstagramRunDetailsToInstagramUserDto> instagramRunDetailsToInstagramUser)
        {
            this.context = context ?? throw new ArgumentNullException(nameof(context));
            InstagramSessionData = instagramSessionData ?? throw new ArgumentNullException(nameof(instagramSessionData));
            InstagramUser = instagramUser ?? throw new ArgumentNullException(nameof(instagramUser));
            InstagramRunDetails = instagramRunDetails ?? throw new ArgumentNullException(nameof(instagramRunDetails));
            InstagramRunDetailsToInstagramUser = instagramRunDetailsToInstagramUser ?? throw new ArgumentNullException(nameof(instagramRunDetailsToInstagramUser));
        }

        public async Task Save()
        {
            await context.SaveChangesAsync();
        }
    }
}
