using Microsoft.AspNetCore.Mvc;
using Models;
using Microsoft.EntityFrameworkCore;
using models;


[ApiController]
[Route("[controller]")]
public class OrderController : ControllerBase
{
    private readonly Context _context;
    public OrderController(Context context)
    {
        _context = context;
    }

    [HttpPost("Create")]
    public async Task<ActionResult> CreateOrder(Order order)
    {
        try
        {
            _context.Order.AddAsync(order);
            await _context.SaveChangesAsync();

            return Ok();
        }
        catch (System.Exception)
        {
            return NotFound();
            throw;
        }

    }


}