import {  configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import FlashDelasSlice from "./FlashDelasSlice";
import MainImgSlice from "./MainImgSlice";

export const store = configureStore({
    reducer:{
        cart :CartSlice,
         Data:MainImgSlice,
         FLSHDATA:FlashDelasSlice
    }
})