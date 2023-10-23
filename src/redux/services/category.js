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

    getCategory: build.query({
      query: (id) => ({url: `admin/api/get-category/${id}`})
    }),

    getCategories: build.query({
      query: () => ({ url: "admin/api/get-categories", }),
      providesTags: ["Categories"],
    }),
    
    updateCategory: build.mutation({
      query: ({ id, payload }) => {
        return {
          url: `admin/api/edit-category/${id}`,
          method: "PUT",
          body: payload,
        };
      },
      invalidatesTags: (category) => [
        { type: "Categories", id: category.id },
        { type: "Shop" },
      ],
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
  useUpdateCategoryMutation,
  useGetCategoryQuery,
} = categoryApi;