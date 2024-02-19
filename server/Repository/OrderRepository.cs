using models;
using context;
using repository;

public class OrderRepository : IOrderRepository
{
    private readonly Context _context;

    public OrderRepository(Context context)
    {
        _context = context;
    }

    public async Task<bool> CreateOrder(Order order)
    {
        try
        {
            _context.Order.AddAsync(order);
            await _context.SaveChangesAsync();
            return true;
        }
        catch (System.Exception)
        {
            return false;
            throw;
        }

    }
}