import { fashionShopApi } from "./api";

const authApi = fashionShopApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation({
      query: (payload) => {
        return {
          url: "auth/signin",
          method: "POST",
          body: payload,
        };
      },
    }),

    signin: build.query({
      query: () => {
        return { url: "auth/login" };
      },
    }),

    logout: build.mutation({
      query: () => {
        return { url: "auth/logout", method: "POST" };
      },
    }),

    signup: build.mutation({
      query: (payload) => {
        return {
          url: "/auth/signup",
          method: "POST",
          body: payload,
        };
      },
    }),

    forgotPassword: build.mutation({
      query(payload) {
        return {
          url: "/auth/set-password",
          method: "POST",
          body: { payload },
        };
      },
    }),
    resetPassword: build.mutation({
      query(payload) {
        return {
          url: "/auth/reset-password",
          method: "POST",
          body: { payload },
        };
      },
    }),
  }),
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useSigninQuery,
  useSignupMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
} = authApi;
