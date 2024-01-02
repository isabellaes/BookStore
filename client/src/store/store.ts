import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import orderReducer from "./orderSlice";
import productReducer from "./productSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    order: orderReducer,
    product: productReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
