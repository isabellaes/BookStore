using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using models;
using Models;

[ApiController]
[Route("[controller]")]
public class ProductController : ControllerBase
{
    private readonly Context _context;
    public ProductController(Context context)
    {
        _context = context;
    }

    [HttpGet("Get")]
    public async Task<IEnumerable<Product>> GetAllProducts()
    {
        return await _context.Product.ToListAsync();

    }
}