import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const singleProductApi = createApi({
    reducerPath: 'singleProductApi',
    baseQuery: fetchBaseQuery({ baseUrl: `https://api.escuelajs.co/api/v1/products/${id}` }),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => '/',
        }),
    }),
});

export const { useGetAllProductsQuery } = singleProductApi

