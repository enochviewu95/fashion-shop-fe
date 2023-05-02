import { createSlice } from "@reduxjs/toolkit";
import {getData} from "../services/apis";

const productSlice = createSlice({
    name: "product",
    initialState:{
        productList: [],
    },
    reducers:{
        addProductList(state,action){
            state.productList = action.payload;
        },

        editProductList(state,action){
        }
    }
});

export const {addProductList} = productSlice.actions;

export const getProductAsync = (url) => async (dispatch) =>{
    const response = await getData(url);
    dispatch(addProductList(response));
}

export const productList = (state) => state.products.productList;

export default productSlice.reducer;