import { createSlice } from "@reduxjs/toolkit";
import { getData } from "../services/apis";

const bannerSlice = createSlice({
  name: "banner",
  initialState: {
    bannerList: [],
    selectedBanner: null,
  },
  reducers: {
    addBannerList(state, action) {
      state.bannerList = action.payload;
    },

    addSelectedBanner(state, action) {
      state.selectedBanner = action.payload;
    },

    deleteBanner(state, action) {},

    editBanner(state, action) {},
  },
});

export const { addBannerList, addSelectedBanner, editBanner, deleteBanner } =
  bannerSlice.actions;

export const getBannersAsync = (url) => async (dispatch) => {
  const response = await getData(url);
  // if (response.data.length > 0) {
  //   dispatch(addBannerList(response));
  // }
  dispatch(addBannerList(response));
};

export const getSelectedBannerAsync = (url) => async (dispatch) => {
  const response = await getData(url);
  dispatch(addSelectedBanner(response));
};

export const bannerList = (state) => state.banners.bannerList;
export const selectedBanner = (state) => state.banners.selectedBanner;

export default bannerSlice.reducer;
