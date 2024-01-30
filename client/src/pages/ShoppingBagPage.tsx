import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
} from "../store/cartSlice";
import { RootState } from "../store/store";
import { CartItem } from "../types";
import { useNavigate } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const ShoppingbagPage: React.FC = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId: string) => {
    dispatch(removeFromCart(productId));
  };

  const handleIncreaseQuantity = (productId: string) => {
    dispatch(increaseQuantity({ productId }));
  };

  const handleDecreaseQuantity = (productId: string) => {
    dispatch(decreaseQuantity({ productId }));
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

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div className="cart-item">
              <div className="left">
                <img src={item.product.img} alt="" />
              </div>
              <div className="rigth">
                <div className="product">
                  <h3>{item.product.name}</h3>
                  <p>Price: ${item.product.price.toFixed(2)}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>

                <div className="update-cartitem-btn">
                  <button
                    onClick={() => handleIncreaseQuantity(item.product.id)}
                  >
                    <AddCircleOutlineIcon></AddCircleOutlineIcon>
                  </button>
                  <p className="item-quantity"> {item.quantity}</p>

                  <button
                    onClick={() => handleDecreaseQuantity(item.product.id)}
                  >
                    <RemoveCircleOutlineIcon></RemoveCircleOutlineIcon>
                  </button>
                </div>
              </div>
              <button
                className="remove-button"
                onClick={() => handleRemoveFromCart(item.product.id)}
              >
                <DeleteForeverIcon></DeleteForeverIcon>
              </button>
            </div>
          ))}

          <h3 className="total-cost">Total: ${totalCost.toFixed(2)}</h3>
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
  );
};

export default ShoppingbagPage;
