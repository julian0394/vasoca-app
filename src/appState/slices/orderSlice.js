import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: 'order',
  initialState: {
    products: [],
    itemsAmount: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
      state.total += action.payload.subtotal;
    }
  }
});

export const { routeChanged } = orderSlice.actions;
export default orderSlice.reducer;
