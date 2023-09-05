using Microsoft.EntityFrameworkCore;
using MWStat.API.Domain.Dtos;

namespace MWStat.API.ORM
{
    public class MWStatContext : DbContext
    {
        public DbSet<InstagramUserDto> InstagramUser { get; set; }
        public DbSet<InstagramSessionDataDto> InstagramSessionData { get; set; }
        public DbSet<InstagramRunDetailsDto> InstagramRunDetails { get; set; }
        public DbSet<InstagramRunDetailsToInstagramUserDto> InstagramRunDetailsToInstagramUser { get; set; }

        public MWStatContext(DbContextOptions<MWStatContext> options) : base(options)
        {
            Database.EnsureCreated();
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Server=MWStation;Database=MWStat;Trusted_Connection=True;Encrypt=False;MultipleActiveResultSets=True;");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<InstagramRunDetailsToInstagramUserDto>(e => {
                e.HasKey(o => o.Id);
                e.HasOne(o => o.InstagramRunDetails)
                .WithMany(o => o.LinkedAccounts)
                .HasForeignKey(o=>o.InstagramRunDetailsId);
                e.HasOne(o => o.InstagramUser)
                .WithMany(o => o.LinkedRunDetails)
                .HasForeignKey(o => o.InstagramUserId);
            });

            modelBuilder.Entity<InstagramRunDetailsDto>(e => {
                e.HasOne(o => o.InstagramUser)
                .WithMany()
                .HasForeignKey(o => o.InstagramUserId)
                .OnDelete(DeleteBehavior.NoAction);
            });

            modelBuilder.Entity<InstagramSessionDataDto>(e => {
                e.HasOne(o => o.InstagramUser)
                .WithMany()
                .HasForeignKey(o => o.InstagramUserId)
                .OnDelete(DeleteBehavior.NoAction);
            });
        }
    }
}
