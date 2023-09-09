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
      invalidatesTags: ["Collections", "Shop"],
    }),
    getCollections: build.query({
      query: () => ({ url: "admin/api/get-collections" }),
      providesTags: ["Collections"],
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
      ],
    }),
  }),
});

export const {
  useGetCollectionsQuery,
  useAddCollectionMutation,
  useDeleteCollectionMutation,
} = collectionApi;
