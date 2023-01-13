using System.ComponentModel.DataAnnotations.Schema;

namespace MWStat.API.Domain.Dtos
{
    public class InstagramUserDto
    {
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public long Id { get; set; }
        public string Username { get; set; }
        public string ProfilePicUrl { get; set; }
        public virtual ICollection<InstagramRunDetailsToInstagramUserDto> LinkedRunDetails { get; set; }
    }
}
