import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_BASE_URL,
  credentials: "include",
});

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 2 });

export const fashionShopApi = createApi({
  reducerPath: "fashionShopApi",
  baseQuery: baseQueryWithRetry,
  tagTypes: [
    "Banners",
    "Categories",
    "Products",
    "Collections",
    "Shop",
    "User",
    "Dashboard",
    "CategoryProducts",
  ],
  endpoints: () => ({}),
});
