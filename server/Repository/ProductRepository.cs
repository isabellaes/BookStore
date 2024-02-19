using System.Collections;
using Microsoft.EntityFrameworkCore;
using models;
using context;
using repository;

public class ProductRepository : IProductRepository
{
    private readonly Context _context;

    public ProductRepository(Context context)
    {
        _context = context;
    }

    public async Task<IEnumerable<Product>> GetAllProducts()
    {
        var products = await _context.Product.ToListAsync();
        return products;
    }
}