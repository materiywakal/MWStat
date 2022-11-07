using Microsoft.EntityFrameworkCore;
using MWStat.API.Domain.Dtos;
using MWStat.API.ORM.Interfaces;
using System.Linq.Expressions;

namespace MWStat.API.ORM.Implementations
{
    public class InstagramUserRepository : IRepository<InstagramUserDto>
    {
        private readonly DbSet<InstagramUserDto> dbSet;
        public InstagramUserRepository(MWStatContext context)
        {
            dbSet = context.InstagramUser;
        }
        public async Task<IEnumerable<InstagramUserDto>> Get(Expression<Func<InstagramUserDto, bool>> filter)
        {
            return dbSet.Where(filter);
        }
        public async Task<InstagramUserDto> Get(int id)
        {
            return await dbSet.FirstOrDefaultAsync(x => x.Id == id);
        }
        public async Task Create(InstagramUserDto entity)
        {
            dbSet.Entry(entity).State = EntityState.Modified;

            await dbSet.AddAsync(entity);
        }
        public async Task Update(InstagramUserDto entity)
        {
            dbSet.Update(entity);
        }
        public async Task Delete(InstagramUserDto entity)
        {
            dbSet.Remove(entity);
        }
    }
}
