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
        itmeExist.count++;
      } else {
        state.Cart_itm.push({
          ...action.payload,
          count: 1,
        });
      }
      state.Cart_cont = state.Cart_itm.length;
    },
    CartContIngres: (state, action) => {
      const id = action.payload;
      state.Cart_itm.forEach((itm) => {
        if (itm.id === id) {
          itm.count++;
        }
      });
    },
    CartContDicreas(state, action) {
      console.log(state.Cart_itm.id);
      const id = action.payload;
      state.Cart_itm.forEach((itm) => {
        if (itm.id === id && itm.count > 1) {
          itm.count--;
        }
      });
    },
    CartItemRemove(state, action) {
      state.Cart_itm.forEach((itm, index) => {
        if (action.payload.id === itm.id) {
          state.Cart_itm.splice(index, 1);
        }
      });
    },
   
  },
});

export default cartSlice.reducer;
export const { addToCart, CartContIngres, CartContDicreas, CartItemRemove  } =
  cartSlice.actions;
