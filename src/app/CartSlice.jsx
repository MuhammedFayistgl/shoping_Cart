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
      const itmeExist = state.Cart_itm.find(
        (itm) => itm.id === action.payload.id
      );

      if (itmeExist) {
        console.log("cont added");
        itmeExist.count++;
      } else {
        console.log("item pushed");
        state.Cart_itm.push({
          ...action.payload,
          count: 1,
        });
      }

      state.Cart_cont = state.Cart_itm.length;
    },
    CartContIngres: (state, action) => {
      console.log("ingrement");
      const id = action.payload;
      state.Cart_itm.forEach((itm) => {
        if (itm.id === id) {
          itm.count++;
        }
      });
    },
    CartContDicreas(state, action) {
      console.log("dicrement");
      const id = action.payload;
      state.Cart_itm.forEach((itm) => {
        if (itm.id === id && itm.count > 1) {
          itm.count--;
        }
      });
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, CartContIngres, CartContDicreas } = cartSlice.actions;
