import { createSlice } from "@reduxjs/toolkit";

const productApiSlice = createSlice({
  name: "productApi",
  initialState: {
    apiData: [],
  },
  reducers: {
    apiData(state, action) {
      state.apiData = action.payload.items;
    },
  },
});

export const apiActions = productApiSlice.actions;
export default productApiSlice;
