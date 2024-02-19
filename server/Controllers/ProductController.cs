using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using models;
using context;
using repository;

[ApiController]
[Route("[controller]")]
public class ProductController : ControllerBase
{
    private readonly IProductRepository _repository;
    public ProductController(IProductRepository repository)
    {

        _repository = repository;
    }

    [HttpGet("Get")]
    public async Task<IEnumerable<Product>> GetAllProducts()
    {
        return await _repository.GetAllProducts();

    }
}