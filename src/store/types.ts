import {IFilterGroup} from "@/types/filter";
import {ICategory} from "@/types/category";

export interface IListResponse<T> {
  current_page: number
  per_page: number
  total: number
  last_page: number
  data: T[]
}

export interface IRequest {
  page: number
  search: string
}

export interface CategoryResponse {
  categories: IListResponse<ICategory>
  ids: number[]
}

export interface CategoryRequest extends IRequest {}

export interface FilterResponse {
  filters: IListResponse<IFilterGroup>
  ids: number[]
}

export interface FilterRequest extends IRequest {}
