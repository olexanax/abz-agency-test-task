import { baseApi } from "../base/slice";
import qs from "query-string";

import type { GetUsersResponse, GetUsersQueryArgs } from "./types/GetUsers";
import type {
    PostUserData,
    PostUserPayload,
    PostUserResponse,
} from "./types/PostUser";

export const usersApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getUsers: builder.query<GetUsersResponse, Partial<GetUsersQueryArgs>>({
            query: ({ page = 1, ...params }) => {
                const query = qs.stringify(params);
                return `/users/?page=${page}&${query}`;
            },
            providesTags: ["Users"],
            transformResponse: (response: GetUsersResponse) => response,
        }),
        getToken: builder.query<{ token: string }, void>({
            query: () => {
                return `/token`;
            },
        }),
        postUser: builder.mutation<PostUserResponse, PostUserPayload>({
            query: ({ formData, token }) => ({
                url: "/users",
                method: "POST",
                body: formData,
                headers: {
                    Token: token,
                },
            }),
            invalidatesTags: [{ type: "Users" }],
        }),
    }),
});

export const { useGetUsersQuery, usePostUserMutation, useLazyGetTokenQuery } =
    usersApi;
