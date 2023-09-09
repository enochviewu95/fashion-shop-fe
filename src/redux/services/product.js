import { fashionShopApi } from "./api";

const productApi = fashionShopApi.injectEndpoints({
  endpoints: (build) => ({
    addProduct: build.mutation({
      query: (payload) => {
        return {
          url: "/admin/api/add-product",
          method: "POST",
          body: payload ,
        };
      },
      invalidatesTags: ["Products","Shop"],
    }),
    getProducts: build.query({
      query: () => ({ url: "admin/api/get-products" }),
      providesTags: ["Products"],
    }),
    deleteProduct: build.mutation({
      query: (productId) => {
        return {
          url: `admin/api/delete-product/${productId}`,
          method: "DELETE",
        };
      },
      invalidatesTags: (product) => [
        { type: "Products", id: product.id },
        { type: "Shop" },
      ],
    }),
  }),
});

export const {
  useAddProductMutation,
  useDeleteProductMutation,
  useGetProductsQuery,
} = productApi;
