using MWStat.API.Domain.Dtos;
using MWStat.API.Domain.Models;

namespace MWStat.API.BusinessServices.Mappers
{
    public static class InstagramUserMapper
    {
        public static InstagramUser Map(this InstagramUserDto dto)
        {
            return new InstagramUser
            {
                Id = dto.Id,
                Username = dto.Username,
                ProfilePicUrl = dto.ProfilePicUrl
            };
        }

        public static InstagramUserDto Map(this InstagramUser model)
        {
            return new InstagramUserDto
            {
                Id = model.Id,
                Username = model.Username,
                ProfilePicUrl = model.ProfilePicUrl
            };
        }
    }
}
