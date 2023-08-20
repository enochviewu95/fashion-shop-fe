import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const fashionShopApi = createApi({
    reducerPath: "fashionShopApi",
    baseQuery: fetchBaseQuery({baseUrl: process.env.REACT_APP_BASE_URL}),
    endpoints : (builder) => ({
        getShop: builder.query({
            query: () => 'shop/api/get-shop'
        }),

    })
})

export const {useGetShopQuery} = fashionShopApi;
