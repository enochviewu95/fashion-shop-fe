import { createSlice } from "@reduxjs/toolkit";
import { fashionShopApi } from "./services/api";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    profile: {
      msg: "failed",
      response: {
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
      .addMatcher(
        fashionShopApi.endpoints.signin.matchFulfilled,
        (state, { payload }) => {
          state.profile = payload;
        }
      )
      .addMatcher(fashionShopApi.endpoints.logout.matchFulfilled, (state) => {
        state.profile = {
          msg: "failed",
          response: {
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
