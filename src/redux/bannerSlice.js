import { createSlice } from "@reduxjs/toolkit";
import { getData } from "../services/apis";

const bannerSlice = createSlice({
  name: "banner",
  initialState: {
    bannerList: [],
  },
  reducers: {
    addBannerList(state, action) {
      state.bannerList = action.payload;
    },
  },
});

export const { addBannerList, addSelectedBanner, editBanner, deleteBanner } =
  bannerSlice.actions;

export const getBannersAsync = (url) => async (dispatch) => {
  const response = await getData(url);
  dispatch(addBannerList(response));
};

export const bannerList = (state) => state.banners.bannerList;

export default bannerSlice.reducer;
