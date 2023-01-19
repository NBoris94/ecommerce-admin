import {FormikValues} from "formik"
import {useAddCategoryMutation} from "@/store/category/categoryApi"
import AddUpdateForm from "@/components/pages/Categories/AddUpdateForm"

const AddCategory = () => {
  const [addCategory, { isLoading, error, data, isError }] = useAddCategoryMutation()

  const handleSubmit = (values: FormikValues) => {
    addCategory(values)
  }

  return (
    <div className="card">
      <div className="card-body">
        <AddUpdateForm onSubmit={handleSubmit} />
      </div>
    </div>
  )
}

export default AddCategory
