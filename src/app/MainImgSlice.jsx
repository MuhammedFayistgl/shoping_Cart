import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Axios from "axios";

export const fecthData = createAsyncThunk("Data/mainimgData", async () => {
  const response = await Axios.get("https://dummyjson.com/products");
  return response.data;
});

const initialState = {
  DATA: [],
};

const MainImg = createSlice({
  name: "mainImgData",
  initialState,
  //````````````````````````

  extraReducers: {
    [fecthData.pending]: () => {
      console.log("feching start");
    },

    //``````````````````````````
    [fecthData.fulfilled]: (state, action) => {
      if (state.DATA.length === 0) {
        state.DATA.push([action.payload.products[0].images]);
      }
      return
    },

    //````````````````
    [fecthData.rejected]: () => {
      console.log("rejected");
    },
  },
});
fecthData()
export default MainImg.reducer;
export const { getImgData } = MainImg.actions;
