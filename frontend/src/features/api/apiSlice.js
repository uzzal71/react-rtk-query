import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3003',
    }),
    endpoints: (builder) => ({
        getEmployees: builder.query({
            query: () => "/employees"
        })
    })
});

export const { useGetEmployeesQuery } = apiSlice;