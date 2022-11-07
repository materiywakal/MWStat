using Microsoft.EntityFrameworkCore;
using MWStat.API.Domain.Dtos;
using MWStat.API.ORM.Interfaces;
using System.Linq.Expressions;

namespace MWStat.API.ORM.Implementations
{
    public class InstagramRunDetailsToInstagramUserRepository : IRepository<InstagramRunDetailsToInstagramUserDto>
    {
        private readonly DbSet<InstagramRunDetailsToInstagramUserDto> dbSet;
        public InstagramRunDetailsToInstagramUserRepository(MWStatContext context)
        {
            dbSet = context.InstagramRunDetailsToInstagramUser;
        }
        public async Task<IEnumerable<InstagramRunDetailsToInstagramUserDto>> Get(Expression<Func<InstagramRunDetailsToInstagramUserDto, bool>> filter)
        {
            return dbSet.Where(filter);
        }
        public async Task<InstagramRunDetailsToInstagramUserDto> Get(int id)
        {
            return await dbSet.FirstOrDefaultAsync(x => x.Id == id);
        }
        public async Task Create(InstagramRunDetailsToInstagramUserDto entity)
        {
            dbSet.Entry(entity).State = EntityState.Modified;

            await dbSet.AddAsync(entity);
        }
        public async Task Update(InstagramRunDetailsToInstagramUserDto entity)
        {
            dbSet.Update(entity);
        }
        public async Task Delete(InstagramRunDetailsToInstagramUserDto entity)
        {
            dbSet.Remove(entity);
        }
    }
}
