import { createSlice } from "@reduxjs/toolkit";
import { getData, saveData } from "../services/apis";

const bannerSlice = createSlice({
  name: "banner",
  initialState: {
    value: [],
  },
  reducers: {
    addBanner(state, action) {
      state.value = action.payload;
    },

    deleteBanner(state, action) {},

    editBanner(state, action) {},
  },
});

export const { getBanner, addBanner, editBanner, deleteBanner } =
  bannerSlice.actions;

export const getBannersAsync = (url) => async (dispatch) => {
  const response = await getData(url);
  console.log('Response',response)
  dispatch(addBanner(response));
};


export const bannerData = (state) => state.banners.value;
export default bannerSlice.reducer;
