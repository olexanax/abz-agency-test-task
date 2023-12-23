import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({
        credentials: "same-origin",
        prepareHeaders: (headers) => {
            return headers;
        },
        baseUrl: "https://frontend-test-assignment-api.abz.agency/api/v1",
    }),
    tagTypes: ["Users"],
    endpoints: (_) => ({}),
});
