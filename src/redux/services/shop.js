import { fashionShopApi } from "./api";

const shopApi = fashionShopApi.injectEndpoints({
  endpoints: (build) => ({
    getShop: build.query({
      query: () => "shop/api/get-shop",
      providesTags: ["Shop"],
    }),

    getCategoryProducts: build.query({
      query: ({id, searchParams}) => {
        console.log("Search query", );
        return {
          url: `shop/api/get-category-product/${id}?${searchParams}`,
          method: "GET",
        };
      },
      providesTags: ["CategoryProducts"],
    }),
  }),
});

export const { useGetShopQuery, useGetCategoryProductsQuery } = shopApi;
