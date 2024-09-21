import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:8000/api/'}),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => `stickers`
        }),
        getProduct: builder.query({
            query: (productId) => `stickers/${productId}`
        })
    })
})

export const {useGetProductsQuery, useGetProductQuery} = productApi