import { fashionShopApi } from "./api";

const productApi = fashionShopApi.injectEndpoints({
  endpoints: (build) => ({
    addProduct: build.mutation({
      query: (payload) => {
        return {
          url: "/admin/api/add-product",
          method: "POST",
          body: payload,
        };
      },
      invalidatesTags: ["Products", "Shop", "Dashboard", "CategoryProducts"],
    }),

    getProduct: build.query({
      query: (id) => ({ url: `admin/api/get-product/${id}` }),
    }),

    getProducts: build.query({
      query: (searchParams) => ({
        url: `admin/api/get-products?${searchParams}`,
      }),
      providesTags: ["Products"],
    }),

    updateProduct: build.mutation({
      query: ({ id, payload }) => {
        return {
          url: `admin/api/edit-product/${id}`,
          method: "PUT",
          body: payload,
        };
      },
      invalidatesTags: (product) => [
        { type: "Products", id: product.id },
        { type: "Shop" },
        "Dashboard",
        "CategoryProducts",
      ],
    }),

    getProductDetails: build.query({
      query: (id) => ({ url: `shop/api/get-product/${id}` }),
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
        "Dashboard",
        "CategoryProducts",
      ],
    }),
  }),
});

export const {
  useAddProductMutation,
  useDeleteProductMutation,
  useGetProductsQuery,
  useGetProductDetailsQuery,
  useGetProductQuery,
  useUpdateProductMutation,
} = productApi;
