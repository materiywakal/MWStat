using Microsoft.EntityFrameworkCore;
using MWStat.API.Domain.Dtos;
using MWStat.API.ORM.Interfaces;
using System.Linq.Expressions;

namespace MWStat.API.ORM.Implementations
{
    public class InstagramRunDetailsRepository : IRepository<InstagramRunDetailsDto>
    {
        private readonly DbSet<InstagramRunDetailsDto> dbSet;
        public InstagramRunDetailsRepository(MWStatContext context)
        {
            dbSet = context.InstagramRunDetails;
        }
        public async Task<IEnumerable<InstagramRunDetailsDto>> Get(Expression<Func<InstagramRunDetailsDto, bool>> filter)
        {
            return dbSet.Where(filter);
        }
        public async Task<InstagramRunDetailsDto> Get(int id)
        {
            return await dbSet.FirstOrDefaultAsync(x => x.Id == id);
        }
        public async Task Create(InstagramRunDetailsDto entity)
        {
            dbSet.Entry(entity).State = EntityState.Modified;
            var item = await dbSet.AddAsync(entity);            
        }
        public async Task Update(InstagramRunDetailsDto entity)
        {
            dbSet.Update(entity);
        }
        public async Task Delete(InstagramRunDetailsDto entity)
        {
            dbSet.Remove(entity);
        }
    }
}
