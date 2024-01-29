import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { Product } from "../types";
import { createOrder } from "../store/orderSlice";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../store/cartSlice";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
interface CartItem {
  product: Product;
  quantity: number;
}
interface Order {
  firstName: string;
  lastName: string;
  adress: string;
  zipCode: string;
  city: string;
  phoneNumber: string;
  email: string;
  cardNumber: string;
  cartItems: CartItem[];
  date: Date;
}
const CheckoutPage: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [adress, setAdress] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [city, setCity] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleCreateOrder = (order: Order) => {
    dispatch(createOrder(order));
  };
  function calculateTotal(cartItems: CartItem[]): number {
    return cartItems.reduce((total, cartItem) => {
      return total + cartItem.product.price * cartItem.quantity;
    }, 0);
  }
  const totalCost = calculateTotal(cartItems);
  function onsubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    const order: Order = {
      firstName: firstName,
      lastName: lastName,
      adress: adress,
      zipCode: zipCode,
      city: city,
      phoneNumber: phoneNumber,
      email: email,
      cardNumber: cardNumber,
      cartItems: cartItems,
      date: new Date(),
    };

    handleCreateOrder(order);
    setTimeout(() => {
      dispatch(clearCart());
      handldeNavigation();
    }, 1000);
  }
  function handldeNavigation() {
    navigate("/OrderConfirmationPage");
  }
  return (
    <div className="container-checkout">
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Link underline="hover" color="inherit" href="/ShoppingBagPage">
          Cart
        </Link>
        <Link underline="hover" color="inherit">
          Checkout
        </Link>
      </Breadcrumbs>
      <h2>Checkout</h2>

      {cartItems.map((item) => (
        <div key={item.product.id} className="cart-item">
          <div className="left">
            <img src={item.product.img} alt="" />
          </div>
          <div className="rigth">
            {item.product.name} - ${item.product.price.toFixed(2)} - Quantity:{" "}
            {item.quantity}
          </div>
        </div>
      ))}
      <p>Total: ${totalCost.toFixed(2)}</p>
      <div className="shipping">
        <h3>Shipping and payment</h3>
        <form onSubmit={onsubmit}>
          <label htmlFor="FirstName">FirstName:</label>
          <input
            type="text"
            id="FirstName"
            placeholder="FirstName"
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
          <label htmlFor="LastName">FirstName:</label>
          <input
            type="text"
            id="LastName"
            placeholder="LastName"
            onChange={(e) => setLastName(e.target.value)}
          />
          <label htmlFor="Adress">Adress:</label>
          <input
            type="text"
            id="Adress"
            placeholder="Adress"
            onChange={(e) => setAdress(e.target.value)}
          />
          <label htmlFor="ZipCode">Zipcode:</label>
          <input
            type="text"
            id="ZipCode"
            placeholder="ZipCode"
            onChange={(e) => setZipCode(e.target.value)}
          />
          <label htmlFor="City">City:</label>
          <input
            type="text"
            id="City"
            placeholder="City"
            onChange={(e) => setCity(e.target.value)}
          />
          <label htmlFor="PhoneNumber">PhoneNumber:</label>
          <input
            type="text"
            id="PhoneNumber"
            placeholder="PhoneNumber"
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <label htmlFor="Email">Email:</label>
          <input
            type="text"
            id="Email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="Card">CardNumber</label>
          <input
            type="text"
            id="Card"
            placeholder="CardNumber"
            onChange={(e) => setCardNumber(e.target.value)}
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;
