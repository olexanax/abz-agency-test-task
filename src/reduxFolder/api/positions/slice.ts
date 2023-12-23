import { baseApi } from "../base/slice";

import type {
    GetPositionsResponse,
    GetPositionsQueryArgs,
} from "./types/GetPositions";

export const usersApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getPositions: builder.query<
            GetPositionsResponse,
            Partial<GetPositionsQueryArgs>
        >({
            query: ({ page = 1, ...params }) => {
                return `/positions`;
            },
            providesTags: [],
            transformResponse: (response: GetPositionsResponse) => response,
        }),
    }),
});

export const { useGetPositionsQuery } = usersApi;
