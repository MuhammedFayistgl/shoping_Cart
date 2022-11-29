import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    Falashdata:[]
}
const FlashData = createSlice({
    name:'flashDelasData',
    initialState,
    reducers:{
        fetchData:()=>{

        }
    }
})
export default FlashData.reducer
export const {} = FlashData.actions



