import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      let newItem = action.payload;
      let existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalPrice += newItem.price;

      state.totalQuantity++;

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          totalPrice: newItem.price,
          image: newItem.image,
          title: newItem.title,
          quantity: 1,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      state.totalPrice -= existingItem.price;

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
    promotionDiscount(state) {
      state.totalPrice -= 15;
    },
    addShippingCost(state) {
      state.totalPrice += 15.69;
    },
    cleanData(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});
export const cartActions = cartSlice.actions;
export default cartSlice;
