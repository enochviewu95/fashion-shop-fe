import { createSlice } from "@reduxjs/toolkit";
import { getData } from "../services/apis";

const shopSlice = createSlice({
    name:"shop",
    initialState:{
        shopData:null,
    },
    reducers:{
        addShop(state,action){
            state.shopData = action.payload;
        }
    }
});


export const getShopAsync = (url)=>async (dispatch)=>{
    const response = await getData(url);
    dispatch(addShop(response))
}
export const {addShop} = shopSlice.actions;
export const shopData = (state) => state.shop.shopData
export default shopSlice.reducer;