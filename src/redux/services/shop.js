import { fashionShopApi } from "./api";

const shopApi = fashionShopApi.injectEndpoints({
  endpoints: (build) => ({
    getShop: build.query({
      query: () => "shop/api/get-shop",
      providesTags: ["Shop"],
    }),
  }),
});

export const {useGetShopQuery} = shopApi