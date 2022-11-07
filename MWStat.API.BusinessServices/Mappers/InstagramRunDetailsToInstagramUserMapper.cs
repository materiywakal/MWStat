using MWStat.API.Domain.Dtos;
using MWStat.API.Domain.Models;

namespace MWStat.API.BusinessServices.Mappers
{
    public static class InstagramRunDetailsToInstagramUserMapper
    {
        public static InstagramRunDetailsToInstagramUser Map(this InstagramRunDetailsToInstagramUserDto dto)
        {
            return new InstagramRunDetailsToInstagramUser
            {
                Id = dto.Id,
                InstagramUserId = dto.InstagramUserId,
                InstagramUser = dto.InstagramUser?.Map(),
                InstagramRunDetailsId = dto.InstagramRunDetailsId,
                InstagramRunDetails = dto.InstagramRunDetails?.Map(),
                RelationToUser = dto.RelationToUser
            };
        }

        public static InstagramRunDetailsToInstagramUserDto Map(this InstagramRunDetailsToInstagramUser model)
        {
            return new InstagramRunDetailsToInstagramUserDto
            {
                Id = model.Id,
                InstagramUserId = model.InstagramUserId,
                InstagramUser = model.InstagramUser?.Map(),
                InstagramRunDetailsId = model.InstagramRunDetailsId,
                InstagramRunDetails = model.InstagramRunDetails?.Map(),
                RelationToUser = model.RelationToUser
            };
        }
    }
}
