using models;
namespace repository;

public interface IProductRepository
{
    public Task<IEnumerable<Product>> GetAllProducts();
}