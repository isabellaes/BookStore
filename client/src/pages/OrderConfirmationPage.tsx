import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { CartItem } from "../types";
import CartItemCard from "../components/cartItemCard";

const OrderConfirmationPage = () => {
  const order = useSelector((state: RootState) => state.order);
  console.log(order);
  function calculateTotal(cartItems: CartItem[]): number {
    return cartItems.reduce((total, cartItem) => {
      return total + cartItem.product.price * cartItem.quantity;
    }, 0);
  }

  let totalCost;
  if (order.order) {
    totalCost = calculateTotal(order.order.cartItems);
  }

  return (
    <div className="container-orderConfirmation">
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Link underline="hover" color="inherit">
          Order
        </Link>
      </Breadcrumbs>

      <h1>Thank you for your order!</h1>
      <h4>Products</h4>
      <div>
        {order.order?.cartItems.map((item) => (
          <CartItemCard key={item.product.id} item={item}></CartItemCard>
        ))}
      </div>
      <h2>Total: ${totalCost?.toFixed(2)}</h2>

      <p>
        An Email is sent to
        <span> {order.order?.user.email}</span> with your orderconfirmation.
      </p>
      <p>
        If you have any questions please contact us at
        <span> info@posterstore.se</span>
      </p>
      <h2>
        You will recieve your order in 1-3 days. <br />
        Welcome back!
      </h2>
    </div>
  );
};

export default OrderConfirmationPage;
