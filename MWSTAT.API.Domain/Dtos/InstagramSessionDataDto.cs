namespace MWStat.API.Domain.Dtos
{
    public class InstagramSessionDataDto
    {
        public int Id { get; set; }
        public long InstagramUserId { get; set; }
        public virtual InstagramUserDto InstagramUser { get; set; }
        public string AuthToken { get; set; }
        public string SessionData { get; set; }
    }
}
