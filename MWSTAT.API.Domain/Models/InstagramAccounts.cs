namespace MWStat.API.Domain.Models
{
    public class InstagramAccounts
    {
        public DateTime StampDateTime { get; set; }
        public int FollowersCount { get; set; }
        public int FollowingCount { get; set; }
        public List<InstagramAccount> Accounts { get; set; }
    }
}
