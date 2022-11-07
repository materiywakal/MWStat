using System.Linq.Expressions;

namespace MWStat.API.ORM.Interfaces
{
    public interface IRepository<T>
    {
        public Task<IEnumerable<T>> Get(Expression<Func<T, bool>> filter);
        public Task<T> Get(int id);
        public Task Create(T entity);
        public Task Delete(T entity);
        public Task Update(T entity);
    }
}
