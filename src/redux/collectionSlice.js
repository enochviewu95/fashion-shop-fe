import { createSlice } from "@reduxjs/toolkit";
import { getData } from "../services/apis";

const collectionSlice = createSlice({
    name: "collection",
    initialState: {
        collectionList:[]
    },
    reducers:{
        addCollectionList(state,action){
            state.collectionList = action.payload;
        }
    }
});

export const {addCollectionList} = collectionSlice.actions;

export const getCollectionAsync = (url) => async (dispatch) =>{
    const response = await getData(url);
    dispatch(addCollectionList(response));
}

export const collectionList = (state) => state.collections.collectionList;

export default collectionSlice.reducer;