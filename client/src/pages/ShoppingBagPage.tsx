import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity, clearCart } from "../store/cartSlice";
import { RootState } from "../store/store";
import { Product } from "../types";
import { useNavigate } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import CartItemCard from "../components/cartItemCard";

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
    <div className="container-shoppingcart">
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Link underline="hover" color="inherit">
          Cart
        </Link>
      </Breadcrumbs>
      <h2>Shopping Cart</h2>
      <div className="cart-items">
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            {cartItems.map((item) => (
              <CartItemCard
                key={item.product.id}
                item={item}
                handleUpdateQuantity={handleUpdateQuantity}
                handleRemoveFromCart={handleRemoveFromCart}
              ></CartItemCard>
            ))}

            <p>Total: ${totalCost.toFixed(2)}</p>
            <div className="cart-btns">
              <button className="btn-cart" onClick={handleClearCart}>
                Clear Cart
              </button>
              <button
                className="btn-cart"
                onClick={() => navigate("/CheckoutPage")}
              >
                Go to checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShoppingbagPage;
