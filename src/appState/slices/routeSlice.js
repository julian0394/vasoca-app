import { createSlice } from "@reduxjs/toolkit";

const routeSlice = createSlice({
  name: 'route',
  initialState: {route: 'infoPanel'},
  reducers: {
    routeChanged: (state, action) => {
      state.value = action.payload.route
    }
  }
});

export const { routeChanged } = routeSlice.actions;
export default routeSlice.reducer;
