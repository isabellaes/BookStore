import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Order } from "../types";

interface OrderState {
  order: Order | null;
}

const initialState: OrderState = {
  order: null,
};
const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    createOrder: (state, action: PayloadAction<Order>) => {
      state.order = action.payload;
    },
  },
});

export const { createOrder } = orderSlice.actions;
export default orderSlice.reducer;
