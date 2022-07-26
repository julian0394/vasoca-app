import { createSlice } from "@reduxjs/toolkit";

// const initialState = [];

const productSlice = createSlice({
  name: 'products',
  initialState: [],
  reducers: {
    initState: (state, action) => {
      state.push(...action.payload.reverse());  
    }
  }
});

export const { initState } = productSlice.actions;
export default productSlice.reducer;