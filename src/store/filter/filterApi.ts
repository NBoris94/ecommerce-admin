import {api} from "@/store/api";
import {IFilterGroup} from "@/types/filter";
import {FilterRequest, FilterResponse} from "@/store/types";

export const filterApi = api.injectEndpoints({
  endpoints: (build) => ({
    getFilters: build.query<FilterResponse, FilterRequest>({
      query: ({ page, search }) => `filters/getCategories?page=${page}&search=${search}&debugbar=off`,
      providesTags: (result) =>
        result
          ? [
            ...result.filters.data.map(({ id }) => ({ type: 'Filter' as const, id })),
            { type: 'Filter', id: 'LIST' },
          ]
          : [{ type: 'Filter', id: 'LIST' }],
    }),
    getFilter: build.query<IFilterGroup, string>({
      query: (id) => `filters/getCategory/${id}?debugbar=off`,
      providesTags: (result, error, id) => [{ type: 'Filter', id }],
    }),
    addFilter: build.mutation<IFilterGroup, Partial<IFilterGroup>>({
      query: (body) => ({
        url: `filters/create`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: [{ type: 'Filter', id: 'LIST' }],
    }),
    updateFilter: build.mutation<void, Pick<IFilterGroup, 'id'> & Partial<IFilterGroup>>({
      query: ({ id, ...patch }) => ({
        url: `filters/update`,
        method: 'PATCH',
        body: { id, ...patch },
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'Filter', id }],
    }),
    deleteFilters: build.mutation<{ success: boolean; id: number }, number[]>({
      query(ids) {
        return {
          url: `filters/destroy`,
          method: 'DELETE',
          body: { id: ids }
        }
      },
      invalidatesTags: (result, error, ids) => [{ type: 'Filter', id: 'LIST' }],
    }),
  }),
})

export const {
  useGetFiltersQuery,
  useGetFilterQuery,
  useAddFilterMutation,
  useUpdateFilterMutation,
  useDeleteFiltersMutation,
} = filterApi
