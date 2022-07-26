import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  totalPrice: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
      state.totalPrice += action.payload.subtotal;
      console.log('addProdduct:', state);
    },
    removeProduct: (state, action) => { //FIXME:
      state.products = state.products.filter( item => item.id !== action.payload.id);
    },
    resetCart: (state, action) => {
      state = initialState;
    },
  }
});

export const { addProduct, removeProduct, resetCart } = cartSlice.actions;
export default cartSlice.reducer;
