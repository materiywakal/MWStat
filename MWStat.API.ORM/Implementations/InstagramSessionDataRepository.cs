using Microsoft.EntityFrameworkCore;
using MWStat.API.Domain.Dtos;
using MWStat.API.ORM.Interfaces;
using System.Linq.Expressions;

namespace MWStat.API.ORM.Implementations
{
    public class InstagramSessionDataRepository : IRepository<InstagramSessionDataDto>
    {
        private readonly DbSet<InstagramSessionDataDto> dbSet;
        public InstagramSessionDataRepository(MWStatContext context)
        {
            dbSet = context.InstagramSessionData;
        }
        public async Task<IEnumerable<InstagramSessionDataDto>> Get(Expression<Func<InstagramSessionDataDto, bool>> filter)
        {
            return dbSet.Where(filter);
        }
        public async Task<InstagramSessionDataDto> Get(int id)
        {
            return await dbSet.FirstOrDefaultAsync(x => x.Id == id);
        }
        public async Task Create(InstagramSessionDataDto entity)
        {
            dbSet.Entry(entity).State = EntityState.Modified;

            await dbSet.AddAsync(entity);
        }
        public async Task Update(InstagramSessionDataDto entity)
        {
            dbSet.Update(entity);
        }
        public async Task Delete(InstagramSessionDataDto entity)
        {
            dbSet.Remove(entity);
        }
    }
}
