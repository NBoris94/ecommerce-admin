import {IBaseEntity, Img} from "@/types/index"
import {IFilter} from "@/types/filter"

export interface ICategory extends IBaseEntity {
  description?: string | null
  img?: Img
  category_id?: number | string | null
  children_categories?: ICategory[]
  filters: IFilter[]
  isHidden: boolean
}
