import { createSlice } from "@reduxjs/toolkit";
import { fashionShopApi } from "./services/api";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    profile: {
      status: "failed",
      msg: "",
      user: {
        email: "",
        firstname: "",
        lastname: "",
        role: "",
      },
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        fashionShopApi.endpoints.login.matchFulfilled,
        (state, { payload }) => {
          state.profile = payload;
        }
      )
      .addMatcher(fashionShopApi.endpoints.logout.matchFulfilled, (state) => {
        state.profile = {
          status: "failed",
          msg: "",
          user: {
            email: "",
            firstname: "",
            lastname: "",
            role: "",
          },
        };
      });
  },
});

export default authSlice.reducer;

export const selectCurrentUser = (state) => state.auth.profile;
