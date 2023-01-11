import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {ICategory} from "@/types/category"
import {IListResponse} from "@/store/types"

interface CategoryResponse {
  categories: IListResponse<ICategory>
  ids: number[]
}

export const categoryApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.API_URL
  }),
  tagTypes: ['Category'],
  endpoints: (build) => ({
    getCategories: build.query<CategoryResponse, number | void>({
      query: (page = 1) => `categories/getAllCategoriesWithChildren?page=${page}`,
      providesTags: (result) =>
        result
          ? [
            ...result.categories.data.map(({ id }) => ({ type: 'Category' as const, id })),
            { type: 'Category', id: 'LIST' },
          ]
          : [{ type: 'Category', id: 'LIST' }],
    }),
    getCategory: build.query<ICategory, string>({
      query: (id) => `categories/getCategory/${id}`,
      providesTags: (result, error, id) => [{ type: 'Category', id }],
    }),
    addCategory: build.mutation<ICategory, Partial<ICategory>>({
      query: (body) => ({
        url: `categories/create`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: [{ type: 'Category', id: 'LIST' }],
    }),
    updateCategory: build.mutation<void, Pick<ICategory, 'id'> & Partial<ICategory>>({
      query: ({ id, ...patch }) => ({
        url: `categories/update`,
        method: 'PATCH',
        body: { id, ...patch },
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'Category', id }],
    }),
    deleteCategory: build.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `categories/destroy`,
          method: 'DELETE',
          body: { id }
        }
      },
      invalidatesTags: (result, error, id) => [{ type: 'Category', id }],
    }),
    deleteCategories: build.mutation<{ success: boolean; id: number }, number[]>({
      query(ids) {
        return {
          url: `categories/destroy`,
          method: 'DELETE',
          body: { id: ids }
        }
      },
      invalidatesTags: (result, error, ids) => [{ type: 'Category', id: 'LIST' }],
    }),
  }),
})

export const {
  useGetCategoriesQuery,
  useGetCategoryQuery,
  useAddCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
  useDeleteCategoriesMutation
} = categoryApi
