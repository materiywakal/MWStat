namespace MWStat.API.Domain.Dtos
{
    public class InstagramUserDto
    {
        public int Id { get; set; }
        public string Pk { get; set; }
        public string Username { get; set; }
        public string ProfilePicUrl { get; set; }
        public virtual ICollection<InstagramRunDetailsToInstagramUserDto> LinkedRunDetails { get; set; }
    }
}
