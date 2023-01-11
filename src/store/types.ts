export interface IListResponse<T> {
  current_page: number
  per_page: number
  total: number
  last_page: number
  data: T[]
}
