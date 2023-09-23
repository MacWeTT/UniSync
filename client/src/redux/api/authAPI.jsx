import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const { VITE_API_URL } = import.meta.env;

export const authAPI = createApi({
  reducerPath: "authAPI",
  baseQuery: fetchBaseQuery({
    prepareHeaders: (headers, { getState }) => {
      const token = getState().access_token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
    baseUrl: `${VITE_API_URL}/users/`,
  }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (credentials) => ({
        url: "login/",
        method: "POST",
        body: credentials,
      }),
    }),
    registerUser: builder.mutation({
      query(credentials) {
        return {
          url: "register/",
          method: "POST",
          body: credentials,
        };
      },
    }),
    refreshUser: builder.mutation({
      query(refresh) {
        return {
          url: "token/refresh/",
          method: "POST",
          body: refresh,
        };
      },
    }),
    editUserProfile: builder.mutation({
      query: (user) => ({
        url: "profile/",
        method: "PATCH",
        body: user,
      }),
    }),
    changePassword: builder.mutation({
      query: (passwords) => ({
        url: "change-password/",
        method: "POST",
        body: passwords,
      }),
    }),
  }),
});

export const {
  useLoginUserMutation,
  useRegisterUserMutation,
  useRefreshUserMutation,
  useEditUserProfileMutation,
  useChangePasswordMutation,
} = authAPI;
