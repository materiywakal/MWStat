namespace MWStat.API.Domain.Models
{
    public class InstagramSessionData
    {
        public int Id { get; set; }
        public long InstagramUserId { get; set; }
        public InstagramUser InstagramUser { get; set; }
        public string AuthToken { get; set; }
        public string SessionData { get; set; }
    }
}
