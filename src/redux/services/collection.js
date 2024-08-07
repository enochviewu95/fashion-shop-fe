import { fashionShopApi } from "./api";

const collectionApi = fashionShopApi.injectEndpoints({
  endpoints: (build) => ({
    addCollection: build.mutation({
      query: (payload) => {
        return {
          url: "/admin/api/add-collection",
          method: "POST",
          body: payload,
        };
      },
      invalidatesTags: ["Collections", "Shop", "Dashboard"],
    }),
    getCollection: build.query({
      query: (id) => ({ url: `admin/api/get-collection/${id}` }),
    }),
    getCollections: build.query({
      query: ({ page = 1, limit = 1 }) => ({
        url: `admin/api/get-collections?page=${page}&limit=${limit}`,
      }),
      providesTags: ["Collections"],
    }),
    updateCollection: build.mutation({
      query: ({ id, payload }) => {
        return {
          url: `admin/api/edit-collection/${id}`,
          method: "PUT",
          body: payload,
        };
      },
      invalidatesTags: (collection) => [
        { type: "Collections", id: collection.id },
        { type: "Shop" },
        "Dashboard",
      ],
    }),
    deleteCollection: build.mutation({
      query: (collectionId) => {
        return {
          url: `admin/api/delete-collection/${collectionId}`,
          method: "DELETE",
        };
      },
      invalidatesTags: (collection) => [
        { type: "Collections", id: collection.id },
        { type: "Shop" },
        "Dashboard",
      ],
    }),
  }),
});

export const {
  useGetCollectionsQuery,
  useAddCollectionMutation,
  useDeleteCollectionMutation,
  useGetCollectionQuery,
  useUpdateCollectionMutation,
} = collectionApi;
