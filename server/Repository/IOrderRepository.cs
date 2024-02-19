using models;
namespace repository;
public interface IOrderRepository
{
    public Task<bool> CreateOrder(Order order);

}