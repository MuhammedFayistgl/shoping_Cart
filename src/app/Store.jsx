import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import MainImgSlice from "./MainImgSlice";

export const store = configureStore({
    reducer:{
        cart :CartSlice,
         Data:MainImgSlice
    },
  
})