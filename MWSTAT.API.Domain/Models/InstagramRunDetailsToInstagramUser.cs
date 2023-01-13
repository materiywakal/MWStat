using MWStat.API.Domain.Enums;

namespace MWStat.API.Domain.Models
{
    public class InstagramRunDetailsToInstagramUser
    {
        public int Id { get; set; }
        public int InstagramRunDetailsId { get; set; }
        public InstagramRunDetails InstagramRunDetails { get; set; }
        public long InstagramUserId { get; set; }
        public InstagramUser InstagramUser { get; set; }
        public RelationToUserEnum RelationToUser { get; set; }
    }
}
