import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Order {
  firstName: string;
  lastName: string;
  adress: string;
  zipCode: string;
  city: string;
  phoneNumber: string;
  email: string;
  cardNumber: string;
  date: Date;
  cartItems: CartItem[];
}
interface CartItem {
  product: Product;
  quantity: number;
}

interface Product {
  id: string;
  name: string;
  price: number;
}
const initialState: Order = {
  firstName: "",
  lastName: "",
  adress: "",
  zipCode: "",
  city: "",
  phoneNumber: "",
  email: "",
  cardNumber: "",
  cartItems: [],
  date: new Date(),
};
const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    createOrder: (state, action: PayloadAction<Order>) => {
      return action.payload;
    },
  },
});

export const { createOrder } = orderSlice.actions;
export default orderSlice.reducer;
