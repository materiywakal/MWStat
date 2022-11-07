using MWStat.API.Domain.Dtos;
using MWStat.API.Domain.Models;
namespace MWStat.API.BusinessServices.Mappers
{
    public static class InstagramSessionDataMapper
    {
        public static InstagramSessionData Map(this InstagramSessionDataDto dto)
        {
            return new InstagramSessionData
            {
                Id = dto.Id,
                AuthToken = dto.AuthToken,
                InstagramUserId = dto.InstagramUserId,
                InstagramUser = dto.InstagramUser?.Map(),
                SessionData = dto.SessionData
            };
        }

        public static InstagramSessionDataDto Map(this InstagramSessionData model)
        {
            return new InstagramSessionDataDto
            {
                Id = model.Id,
                AuthToken = model.AuthToken,
                InstagramUserId = model.InstagramUserId,
                InstagramUser = model.InstagramUser?.Map(),
                SessionData = model.SessionData
            };
        }
    }
}
