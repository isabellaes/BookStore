import "../css/layout.css";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
} from "../cartSlice";
import { RootState } from "../store";
import { Product } from "../types";

const CheckoutPage: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const handleAddToCart = (product: Product) => {
    dispatch(addToCart(product));
  };

  const handleRemoveFromCart = (productId: number) => {
    dispatch(removeFromCart(productId));
  };

  const handleUpdateQuantity = (productId: number, quantity: number) => {
    dispatch(updateQuantity({ productId, quantity }));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="container-checkout">
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
        </ul>
      )}
      <button onClick={handleClearCart}>Clear Cart</button>
    </div>
  );
};

export default CheckoutPage;

/* 
interface Product {
  id: number;
  name: string;
  price: number;
}

interface CartItem {
  product: Product;
  quantity: number;
}

// Example list of products in the cart
const cartItems: CartItem[] = [
  { product: { id: 1, name: 'Product A', price: 10 }, quantity: 2 },
  { product: { id: 2, name: 'Product B', price: 15 }, quantity: 3 },
  // Add more items as needed
];

function calculateTotal(cartItems: CartItem[]): number {
  return cartItems.reduce((total, cartItem) => {
    return total + cartItem.product.price * cartItem.quantity;
  }, 0);
}

// Example usage
const totalCost = calculateTotal(cartItems);
console.log('Total cost:', totalCost);

*/
