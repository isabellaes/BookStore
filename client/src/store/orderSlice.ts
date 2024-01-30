import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Order } from "../types";

const initialState: Order = {
  id: 0,
  date: new Date(),
  payment: "",
  cartItems: [],
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
