namespace models;
public class Order
{
    public int Id { get; set; }
    public string? Date { get; set; }
    public List<CartItem>? CartItems { get; set; }
    public User? User { get; set; }

}