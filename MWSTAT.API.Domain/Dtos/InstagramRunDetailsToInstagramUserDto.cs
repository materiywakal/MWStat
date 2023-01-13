using MWStat.API.Domain.Enums;

namespace MWStat.API.Domain.Dtos
{
    public class InstagramRunDetailsToInstagramUserDto
    {
        public int Id { get; set; }
        public int InstagramRunDetailsId { get; set; }
        public virtual InstagramRunDetailsDto InstagramRunDetails { get; set; }
        public long InstagramUserId { get; set; }
        public virtual InstagramUserDto InstagramUser { get; set; }
        public RelationToUserEnum RelationToUser { get; set; }
    }
}
