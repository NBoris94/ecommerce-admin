import AddUpdateForm from "@/components/pages/Categories/AddUpdateForm"
import {useGetCategoryQuery, useUpdateCategoryMutation} from "@/store/category/categoryApi"
import {useRouter} from "next/router"
import {FormikValues} from "formik"
import {ICategory} from "@/types/category"

const UpdateCategory = () => {
  const router = useRouter()
  const id = router.query.id as string
  const {data: category, isLoading, error, isError} = useGetCategoryQuery(id)
  const [updateCategory, { isLoading: isUpdateLoading, error: updateError, isError: isUpdateError, data }] = useUpdateCategoryMutation()

  console.log("data => ", data)
  console.log("updateError => ", updateError)
  console.log("isUpdateError => ", isUpdateError)

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
