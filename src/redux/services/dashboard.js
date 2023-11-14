import { fashionShopApi } from "./api";

const dashboardApi = fashionShopApi.injectEndpoints({
  endpoints: (build) => ({
    getDashboard: build.query({
      query: () => "admin/api/get-dashboard",
    //   providesTags: ["Dashboard"],
    }),
  }),
});

export const { useGetDashboardQuery } = dashboardApi;
