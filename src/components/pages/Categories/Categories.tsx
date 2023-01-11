import {
  useDeleteCategoriesMutation,
  useDeleteCategoryMutation,
  useGetCategoriesQuery
} from "@/store/category/categoryApi"
import CategoryItem from "@/components/pages/Categories/CategoryItem"
import Pagination from "@/components/ui/Pagination"
import {useEffect, useState} from "react"
import {useRouter} from "next/router"
import * as Url from "url"

const Categories = () => {
  const router = useRouter()
  const [isCheckAll, setIsCheckAll] = useState<boolean>(false)
  const [page, setPage] = useState<number>(1)
  const [checkedCategoryIds, setCheckedCategoryIds] = useState<number[]>([])
  const {data: result, isLoading, error, isError} = useGetCategoriesQuery(page)
  const [deleteCategory, { isLoading: isDeleteLoading, error: deleteError, isError: isDeleteError, data: deleteData }] = useDeleteCategoryMutation()
  const [deleteCategories, { isLoading: isDeleteAllLoading, error: deleteAllError, isError: isDeleteAllError, data: deleteAllData }] = useDeleteCategoriesMutation()

  /*console.log('isDeleteAllLoading => ', isDeleteAllLoading)
  console.log('deleteAllError => ', deleteAllError)
  console.log('isDeleteAllError => ', isDeleteAllError)
  console.log('deleteAllData => ', deleteAllData)*/
  console.log('checkedCategoryIds => ', checkedCategoryIds)

  useEffect(() => {
    router.push({
      pathname: '/categories',
      query: {
        page
      }
    })
  }, [page])

  useEffect(() => {
    if (isCheckAll && result) {
      setCheckedCategoryIds(result.ids)
    }
    else {
      setCheckedCategoryIds([])
    }
  }, [isCheckAll])

  useEffect(() => {
    if (result && checkedCategoryIds === result.ids && !isCheckAll) {
      setIsCheckAll(true)
    }

    if (result && checkedCategoryIds !== result.ids && isCheckAll) {
      setIsCheckAll(false)
    }
  }, [checkedCategoryIds])

  const handleDelete = (id: number) => {
    deleteCategory(id)
  }

  const handleAddToChecked = (id: number) => {
    setCheckedCategoryIds(prev => [...prev, id])
  }

  const handleDeleteFromChecked = (id: number) => {
    setCheckedCategoryIds(prev => prev.filter(item => item !== id))
  }

  const handleDeleteAll = () => {
    deleteCategories(checkedCategoryIds).then(() => setIsCheckAll(false));
  }


  return (
    <div className="card">
      <div className="card-body">
        {
          isLoading
            ? <p>Загрузка</p>
            : result === undefined
              ? (
                <p>Еще не было добавлено ни одной категории</p>
              )
              : (
                <>
                  <button className="btn btn-danger" onClick={handleDeleteAll}>Удалить выбранные</button>
                  <table className="table table-striped table-bordered table-hover" data-bs-theme="dark">
                    <thead>
                    <tr>
                      <th>
                        <input className="form-check-input" type="checkbox" checked={isCheckAll} onChange={() => setIsCheckAll(prev => !prev)} />
                      </th>
                      <th>Название</th>
                      <th>Действия</th>
                    </tr>
                    </thead>
                    <tbody>
                    {result?.categories.data.map(category => (
                      <CategoryItem
                        key={category.id}
                        {...category}
                        checked={checkedCategoryIds.includes(category.id)}
                        handleAddToChecked={handleAddToChecked}
                        handleDeleteFromChecked={handleDeleteFromChecked}
                        handleDelete={handleDelete}
                      />
                    ))}
                    </tbody>
                  </table>
                  <Pagination
                    page={result?.categories.current_page}
                    last_page={result?.categories.last_page}
                    setPage={setPage}
                  />
                </>
              )
        }
      </div>
    </div>
  )
}

export default Categories
