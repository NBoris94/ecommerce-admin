import {api} from "@/store/api";
import {ICategory} from "@/types/category"
import {CategoryRequest, CategoryResponse} from "@/store/types";

export const categoryApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCategories: build.query<CategoryResponse, CategoryRequest>({
      query: ({ page, search }) => `categories/getCategories?page=${page}&search=${search}&debugbar=off`,
      providesTags: (result) =>
        result
          ? [
            ...result.categories.data.map(({ id }) => ({ type: 'Category' as const, id })),
            { type: 'Category', id: 'LIST' },
          ]
          : [{ type: 'Category', id: 'LIST' }],
    }),
    getCategory: build.query<ICategory, string>({
      query: (id) => `categories/getCategory/${id}?debugbar=off`,
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
  useDeleteCategoriesMutation,
} = categoryApi
