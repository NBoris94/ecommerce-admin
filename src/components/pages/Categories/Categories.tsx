import Link from "next/link"
import Pagination from "@/components/ui/Pagination"
import {useDeleteCategoryMutation, useGetCategoriesQuery} from "@/store/category/categoryApi"
import CategoryItem from "@/components/pages/Categories/CategoryItem"

const Categories = () => {
  const {data: categories, isLoading, error, isError} = useGetCategoriesQuery()
  const [deleteCategory, { isLoading: isDeleteLoading, error: deleteError, isError: isDeleteError, data: deleteData }] = useDeleteCategoryMutation()

  const handleDelete = (id: string) => {
    deleteCategory(id)
  }

  return (
    <div className="card">
      <div className="card-body">
        <table className="table table-striped table-bordered table-hover" data-bs-theme="dark">
          <thead>
          <tr>
            <th>Название</th>
            <th>Действия</th>
          </tr>
          </thead>
          <tbody>
            {categories && categories.map(category => <CategoryItem key={category.id} {...category} handleDelete={handleDelete} />)}
          </tbody>
        </table>
        <Pagination />
      </div>
    </div>
  )
}

export default Categories
