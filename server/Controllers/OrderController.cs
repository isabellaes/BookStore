using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using models;
using repository;


[ApiController]
[Route("[controller]")]
public class OrderController : ControllerBase
{
    private readonly IOrderRepository _repository;
    public OrderController(IOrderRepository repository)
    {
        _repository = repository;
    }

    [HttpPost("Create")]
    public async Task<ActionResult> CreateOrder(Order order)
    {
        try
        {
            var result = await _repository.CreateOrder(order);
            if (result)
            {
                return Ok(result);
            }
            else
            {
                return NotFound();
            }
        }
        catch (System.Exception)
        {
            return NotFound();
            throw;
        }

    }


}