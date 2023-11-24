import { fashionShopApi } from "./api";

const shopApi = fashionShopApi.injectEndpoints({
  endpoints: (build) => ({
    getShop: build.query({
      query: () => "shop/api/get-shop",
      providesTags: ["Shop"],
    }),

    getCategoryProducts: build.query({
      query: (params) => {
        console.log("Search query", params);
        return {
          url: `shop/api/get-category-product/${params.type}?${params.searchParams}`,
          method: "GET",
        };
      },
      providesTags: ["CategoryProducts"],
    }),
  }),
});

export const { useGetShopQuery, useLazyGetCategoryProductsQuery } = shopApi;
