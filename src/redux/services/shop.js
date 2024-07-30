import { fashionShopApi } from "./api";

const shopApi = fashionShopApi.injectEndpoints({
  endpoints: (build) => ({
    getShop: build.query({
      query: () => "shop/api/get-shop",
      providesTags: ["Shop"],
    }),

    getCategoryProducts: build.query({
      query: ({ id, page, limit, createdAt, price }) => {
        return {
          url: `shop/api/get-category-product/${id}?page=${page}&limit=${limit}&created_at=${createdAt}&price=${price}`,
          method: "GET",
        };
      },
      providesTags: ["CategoryProducts"],
    }),

    getCollectionProducts: build.query({
      query: ({ id, page, limit, createdAt, price }) => {
        return {
          url: `shop/api/get-collection-product/${id}?page=${page}&limit=${limit}&created_at=${createdAt}&price=${price}`,
          method: "GET",
        };
      },
      providesTags: ["CollectionProducts"],
    }),
  }),
});

export const { useGetShopQuery, useGetCategoryProductsQuery,useGetCollectionProductsQuery } = shopApi;
