import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { CartItem, Order } from "../types";
import { createOrder } from "../store/orderSlice";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../store/cartSlice";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import CartItemCard from "../components/cartItemCard";

const CheckoutPage: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [adress, setAdress] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [city, setCity] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
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
    if (expirationDate) {
      const order: Order = {
        cartItems: cartItems,
        date: new Date(),
        id: 0,
        payment: {
          card: {
            cardnumber: Number(cardNumber),
            name: firstName + " " + lastName,
            expirationDate: new Date(expirationDate),
          },
        },
        user: {
          firstName: firstName,
          lastName: lastName,
          adress: adress,
          zipCode: zipCode,
          city: city,
          email: email,
          phoneNumber: phoneNumber,
        },
      };
      handleCreateOrder(order);
    }

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
      <div>
        {cartItems.map((item) => (
          <CartItemCard key={item.product.id} item={item}></CartItemCard>
        ))}
      </div>
      <h3>Total: ${totalCost.toFixed(2)}</h3>
      <div className="shipping">
        <form onSubmit={onsubmit}>
          <h3>Shipping</h3>
          <label htmlFor="FirstName">Firstname:</label>
          <input
            type="text"
            id="FirstName"
            placeholder="FirstName"
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
          <label htmlFor="LastName">Lastname:</label>
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
          <label htmlFor="PhoneNumber">Phonenumber:</label>
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
          <h3>Payment</h3>
          <label htmlFor="Card">Cardnumber:</label>
          <input
            type="text"
            id="Card"
            placeholder="CardNumber"
            onChange={(e) => setCardNumber(e.target.value)}
          />
          <label htmlFor="expiration-date">Expiration date:</label>
          <input
            type="date"
            id="expiration-date"
            placeholder="Date"
            onChange={(e) => setExpirationDate(e.target.value)}
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;
