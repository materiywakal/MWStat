using MWStat.API.Domain.Enums;

namespace MWStat.API.Domain.Models
{
    public class InstagramAccount
    {
        public string Username { get; set; }
        public string ProfilePicUrl { get; set; }
        public RelationToUserEnum Relation { get; set; }
    }
}
