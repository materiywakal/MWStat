namespace MWStat.API.Domain.Models
{
    public class InstagramRunDetails
    {
        public int Id { get; set; }
        public int InstagramUserId { get; set; }
        public InstagramUser InstagramUser { get; set; }
        public DateTime StampDateTime { get; set; } = DateTime.Now;
        public ICollection<InstagramRunDetailsToInstagramUser> LinkedAccounts { get; set; }

    }
}
