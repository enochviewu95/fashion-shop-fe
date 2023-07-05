import { getData } from "../services/apis";

const { createSlice } = require("@reduxjs/toolkit");

const userSlice = createSlice({
    name: "user",
    initialState:{
        userDetails: null,
    },
    reducers: {
        login(state, action){
            state.userDetails = action.payload;
        },
        logout(state, action){
            state.userDetails = null
        }
    }
});

export const {login, logout} = userSlice.actions;

export const loginUserAsync = (url)=> async(dispatch) =>{
    const response = await getData(url);
    dispatch(login(response));
}

export const logoutUserAsync = (url) => async(dispatch) =>{
    dispatch(logout());
}

export const userDetails = (state) => state.user.userDetails

export default userSlice.reducer;