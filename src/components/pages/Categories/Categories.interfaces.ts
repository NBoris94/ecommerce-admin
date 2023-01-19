import {ICategory} from "@/types/category";
import {FormikValues} from "formik";

export interface CategoriesListProps {
  items: ICategory[]
  selectedItems: number[]
  toggleSelect: (id: number) => void
}

export interface CategoryItemProps extends ICategory {
  checked: boolean
  toggleSelect: () => void
}

export interface AddUpdateFormProps  {
  formState?: ICategory
  onSubmit: (values: FormikValues) => void
}
