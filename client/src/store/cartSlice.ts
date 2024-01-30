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
    increaseQuantity: (state, action: PayloadAction<{ productId: string }>) => {
      const itemToUpdate = state.items.find(
        (item) => item.product.id === action.payload.productId
      );

      if (itemToUpdate) {
        itemToUpdate.quantity++;
      }
    },
    decreaseQuantity: (state, action: PayloadAction<{ productId: string }>) => {
      const itemToUpdate = state.items.find(
        (item) => item.product.id === action.payload.productId
      );

      if (itemToUpdate) {
        itemToUpdate.quantity--;
        if (itemToUpdate.quantity === 0) {
          state.items = state.items.filter(
            (item) => item.product.id !== action.payload.productId
          );
        }
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
