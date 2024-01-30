import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from "../types";

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(
        (item) => item.product.id === action.payload.product.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          product: action.payload.product,
          quantity: action.payload.quantity,
        });
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(
        (item) => item.product.id !== action.payload
      );
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ productId: string; quantity: number }>
    ) => {
      const itemToUpdate = state.items.find(
        (item) => item.product.id === action.payload.productId
      );

      if (itemToUpdate) {
        itemToUpdate.quantity = action.payload.quantity;
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
