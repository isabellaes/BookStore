using Microsoft.EntityFrameworkCore;
using models;
namespace context;

public class Context : DbContext
{
    public Context(DbContextOptions<Context> options)
        : base(options)
    {
    }

    public DbSet<Product> Product { get; set; } = null!;
    public DbSet<Order> Order { get; set; } = null!;
    public DbSet<User> User { get; set; } = null!;

}