import {useRouter} from "next/router"
import {FormikValues} from "formik"
import {ICategory} from "@/types/category"
import {useGetCategoryQuery, useUpdateCategoryMutation} from "@/store/category/categoryApi"

import AddUpdateForm from "@/components/pages/Categories/AddUpdateForm"

const UpdateCategory = () => {
  const router = useRouter()
  const {data: category, isLoading, error, isError} = useGetCategoryQuery(router.query.id as string)
  const [updateCategory, { isLoading: isUpdateLoading, error: updateError, isError: isUpdateError, data }] = useUpdateCategoryMutation()

  const handleSubmit = (values: FormikValues) => {
    updateCategory(values as ICategory)
  }

  return (
    <div className="card">
      <div className="card-body">
        {
          isLoading ? "Загрузка" : <AddUpdateForm formState={category} onSubmit={handleSubmit} />
        }
      </div>
    </div>
  )
}

export default UpdateCategory
