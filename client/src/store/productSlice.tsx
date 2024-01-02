import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface Product {
  id: string;
  name: string;
  price: number;
}

interface ProductState {
  products: Product[];
}

const initialState: ProductState = {
  products: [
    {
      id: "1",
      name: "product1",
      price: 22,
    },
    {
      id: "2",
      name: "product2",
      price: 22,
    },
    {
      id: "3",
      name: "product3",
      price: 22,
    },
    {
      id: "4",
      name: "product4",
      price: 22,
    },
    {
      id: "5",
      name: "product5",
      price: 22,
    },
    {
      id: "6",
      name: "product6",
      price: 22,
    },
    {
      id: "7",
      name: "product7",
      price: 22,
    },
    {
      id: "8",
      name: "product8",
      price: 22,
    },
  ],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
    },
    removeProduct: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
  },
});

export const { addProduct, removeProduct } = productSlice.actions;

export const selectProducts = (state: RootState) =>
  state.product?.products || [];

export default productSlice.reducer;
