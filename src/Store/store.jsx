import { configureStore } from "@reduxjs/toolkit";
import productApiSlice from "./productApiSlice";
import cartSlice from "./cartSlice";
import uiSlice from "./uiSlice";
import orderSlice from "./orderSlice";

const store = configureStore({
  reducer: {
    productApi: productApiSlice.reducer,
    cart: cartSlice.reducer,
    ui: uiSlice.reducer,
    order: orderSlice.reducer,
  },
});

export default store;
