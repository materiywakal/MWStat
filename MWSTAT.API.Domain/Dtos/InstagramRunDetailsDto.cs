
namespace MWStat.API.Domain.Dtos
{
    public class InstagramRunDetailsDto
    {
        public int Id { get; set; }
        public int InstagramUserId { get; set; }
        public virtual InstagramUserDto InstagramUser { get; set; }
        public DateTime StampDateTime { get; set; } = DateTime.Now;
        public virtual ICollection<InstagramRunDetailsToInstagramUserDto> LinkedAccounts { get; set; }
    }
}
