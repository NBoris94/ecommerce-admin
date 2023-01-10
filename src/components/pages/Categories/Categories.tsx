import Link from "next/link"
import Pagination from "@/components/ui/Pagination"
import {useDeleteCategoryMutation, useGetCategoriesQuery} from "@/store/category/categoryApi"
import CategoryItem from "@/components/pages/Categories/CategoryItem"

const categoriesList = [
  {
    id: '1',
    title: 'Категория 1',
  },
  {
    id: '2',
    title: 'Категория 2',
  },
  {
    id: '3',
    title: 'Категория 3',
  },
  {
    id: '4',
    title: 'Категория 4',
  },
]

const Categories = () => {
  const {data: categories, isLoading, error} = useGetCategoriesQuery()
  const [deleteCategory, { isLoading: isDeleteLoading, error: deleteError }] = useDeleteCategoryMutation()

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
