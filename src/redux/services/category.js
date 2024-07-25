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
      invalidatesTags: ["Categories", "Shop", "Dashboard"],
    }),

    getCategory: build.query({
      query: (id) => ({ url: `admin/api/get-category/${id}` }),
    }),

    getCategories: build.query({
      query: ({ page = 1, limit = 1 }) => ({
        url: `admin/api/get-categories?page=${page}&limit=${limit}`,
      }),
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
        "Dashboard",
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
        "Dashboard",
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
