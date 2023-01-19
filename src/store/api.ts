import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.API_URL
  }),
  tagTypes: ['Category', 'Filter'],
  endpoints: () => ({}),
})
