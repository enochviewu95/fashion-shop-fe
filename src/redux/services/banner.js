import { fashionShopApi } from "./api";

const bannerApi = fashionShopApi.injectEndpoints({
  endpoints: (build) => ({
    addBanner: build.mutation({
      query(payload) {
        return {
          url: "admin/api/add-banner",
          method: "POST",
          body: payload,
        };
      },
      invalidatesTags: ["Banners", "Dashboard"],
    }),
    getBanners: build.query({
      query: () => ({ url: "admin/api/get-banners" }),
      providesTags: ["Banners"],
    }),
    getBanner: build.query({
      query: (id) => ({ url: `admin/api/get-banner/${id}` }),
    }),
    updateBanner: build.mutation({
      query({ id, payload }) {
        return {
          url: `admin/api/edit-banner/${id}`,
          method: "PUT",
          body: payload,
        };
      },
      invalidatesTags: (banner) => [
        "Shop",
        { type: "Banners", id: banner.id },
        "Dashboard",
      ],
    }),
    updateSelected: build.mutation({
      query({ selectedHero }) {
        return {
          url: `/admin/api/update-selected/${selectedHero}`,
          method: "PUT",
        };
      },
      invalidatesTags: (banner) => [
        "Shop",
        "Dashboard",
        { type: "Banners", id: banner.id },
      ],
    }),
    deleteBanner: build.mutation({
      query(bannerId) {
        return {
          url: `admin/api/delete-banner/${bannerId}`,
          method: "DELETE",
        };
      },
      invalidatesTags: (banner) => [
        "Dashboard",
        { type: "Banners", id: banner.id },
      ],
    }),
  }),
});

export const {
  useAddBannerMutation,
  useGetBannersQuery,
  useGetBannerQuery,
  useUpdateBannerMutation,
  useDeleteBannerMutation,
  useUpdateSelectedMutation,
} = bannerApi;
