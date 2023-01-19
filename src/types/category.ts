import {IBaseEntity, Img} from "@/types/index"
import {IFilterGroup} from "@/types/filter"

export interface ICategory extends IBaseEntity {
  description?: string | null
  img?: Img
  category_id?: number | string | null
  children_categories?: ICategory[]
  filters: IFilterGroup[]
  isHidden: boolean
}
