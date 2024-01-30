import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Order } from "../types";

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
