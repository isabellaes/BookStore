import "../css/layout.css";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity, clearCart } from "../store/cartSlice";
import { RootState } from "../store/store";
import { Product } from "../types";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

interface CartItem {
  product: Product;
  quantity: number;
}
const ShoppingbagPage: React.FC = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId: string) => {
    dispatch(removeFromCart(productId));
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    dispatch(updateQuantity({ productId, quantity }));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  function calculateTotal(cartItems: CartItem[]): number {
    return cartItems.reduce((total, cartItem) => {
      return total + cartItem.product.price * cartItem.quantity;
    }, 0);
  }
  const totalCost = calculateTotal(cartItems);

  return (
    <div className="container-checkout">
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Link underline="hover" color="inherit">
          Cart
        </Link>
      </Breadcrumbs>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.product.id}>
              {item.product.name} - ${item.product.price.toFixed(2)} - Quantity:{" "}
              {item.quantity}
              <button onClick={() => handleRemoveFromCart(item.product.id)}>
                Remove
              </button>
              <input
                type="number"
                value={item.quantity}
                onChange={(e) =>
                  handleUpdateQuantity(
                    item.product.id,
                    parseInt(e.target.value)
                  )
                }
              />
            </li>
          ))}
          <p>Total: ${totalCost.toFixed(2)}</p>
          <button onClick={handleClearCart}>Clear Cart</button>
          <button onClick={() => navigate("/CheckoutPage")}>
            Go to checkout
          </button>
        </ul>
      )}
    </div>
  );
};

export default ShoppingbagPage;
