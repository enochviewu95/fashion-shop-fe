import { fashionShopApi } from "./api";

const categoryApi = fashionShopApi.injectEndpoints({
  endpoints: (build) => ({
    addCategory: build.mutation({
      query: (payload) => {
        return {
          url: "/admin/api/add-category",
          method: "POST",
          body: payload,
        };
      },
      invalidatesTags: ["Categories", "Shop"],
    }),
    getCategories: build.query({
      query: () => ({ url: "admin/api/get-categories" }),
      providesTags: ["Categories"],
    }),
    deleteCategory: build.mutation({
      query: (collectionId) => {
        return {
          url: `admin/api/delete-category/${collectionId}`,
          method: "DELETE",
        };
      },
      invalidatesTags: (category) => [
        { type: "Categories", id: category.id },
        { type: "Shop" },
      ],
    }),
  }),
});

export const {
  useAddCategoryMutation,
  useGetCategoriesQuery,
  useDeleteCategoryMutation,
} = categoryApi;
