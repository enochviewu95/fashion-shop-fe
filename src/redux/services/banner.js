import { fashionShopApi } from "./api";

const bannerApi = fashionShopApi.injectEndpoints({
  endpoints: (build) => ({
    addBanner: build.mutation({
      query(payload) {
        return {
          url: "admin/api/add-banner",
          method: "POST",
          body: { payload },
        };
      },
      transformResponse: (response, meta, arg) => response.data,
      transformErrorResponse: (response, meta, arg) => response.status,
      invalidatesTags: ["Banner"],
    }),
    getBanners: build.query({
      query: () => ({ url: "admin/api/get-banners" }),
      providesTags: ["Banners"],
    }),
    getBanner: build.query({
      query: (bannerId) => `admin/api/get-banner/${bannerId}`,
      providesTags: ["Banners"],
    }),
    updateBanner: build.mutation({
      query(bannerId, payload) {
        return {
          url: `admin/api/edit-banner/${bannerId}`,
          method: "PUT",
          body: { payload },
        };
      },
      invalidatesTags: (banner) => [{ type: "Banners", id: banner.id }],
    }),
    deleteBanner: build.mutation({
      query(bannerId) {
        return {
          url: `admin/api/delete-banner/${bannerId}`,
          method: "DELETE",
        };
      },
      invalidatesTags: (banner) => [{ type: "Banners", id: banner.id }],
    }),
  }),
});

export const {
  useAddBannerMutation,
  useGetBannersQuery,
  useGetBannerQuery,
  useUpdateBannerMutation,
  useDeleteBannerMutation,
} = bannerApi;
