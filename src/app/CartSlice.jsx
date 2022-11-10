import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  Cart_itm: [],
  Cart_cont: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.Cart_itm.push(action.payload);
      state.Cart_cont = state.Cart_itm.length;
      
    },
  },
});

console.log(initialState, "initialState==");

export default cartSlice.reducer;
export const { addToCart } = cartSlice.actions;
