namespace MWStat.API.Domain.Models
{
    public class InstagramSessionData
    {
        public int Id { get; set; }
        public int InstagramUserId { get; set; }
        public InstagramUser InstagramUser { get; set; }
        public string AuthToken { get; set; }
        public string SessionData { get; set; }
    }
}
