import { createSlice } from "@reduxjs/toolkit";
import { getData } from "../services/apis";

const categorySlice = createSlice({
    name:"category",
    initialState:{
        categoryList:[]
    },
    reducers:{
        addCategoryList(state,action){
            state.categoryList = action.payload;
        },
    }
});

export const {addCategoryList} = categorySlice.actions;

export const getCategoriesAsync = (url) => async (dispatch) =>{
    const response = await getData(url);
    dispatch(addCategoryList(response));
}

export const categoryList = (state)=> state.categories.categoryList;

export  default categorySlice.reducer;