import { useSelector } from "react-redux";
import { RootState } from "../store/store";
interface CartItem {
  product: Product;
  quantity: number;
}
interface Product {
  id: string;
  name: string;
  price: number;
}
const OrderConfirmationPage = () => {
  const order = useSelector((state: RootState) => state.order);
  console.log(order);
  function calculateTotal(cartItems: CartItem[]): number {
    return cartItems.reduce((total, cartItem) => {
      return total + cartItem.product.price * cartItem.quantity;
    }, 0);
  }
  const totalCost = calculateTotal(order.cartItems);
  return (
    <div>
      <h1>Thank you for your order!</h1>
      <p>Products</p>
      <ul>
        {order.cartItems.map((item) => (
          <li key={item.product.id}>
            {item.product.name} - ${item.product.price.toFixed(2)} - Quantity:{" "}
            {item.quantity}
          </li>
        ))}
        <p>Total: {totalCost}</p>
      </ul>
      <p>Shipping and payment</p>
      <p>{order.firstName}</p>
      <p>{order.lastName}</p>
      <p>{order.adress}</p>
      <p>{order.city}</p>
      <p>{order.zipCode}</p>
      <p>{order.phoneNumber}</p>
      <p>{order.email}</p>
      <p>
        You will recieve your order in 1-3 days. <br />
        Welcome back!
      </p>
    </div>
  );
};

export default OrderConfirmationPage;
