import {useRouter} from "next/router"
import {
  useDeleteCategoriesMutation,
  useGetCategoriesQuery
} from "@/store/category/categoryApi"
import {useSelectAll} from "@/hooks/index"

import Pagination from "@/components/ui/Pagination"
import Search from "@/components/ui/Search"
import Button from "@/components/ui/Button"
import Table from "@/components/ui/Table"
import TableHeader from "@/components/ui/Table/TableHeader"
import TableBody from "@/components/ui/Table/TableBody"
import CategoriesList from "@/components/pages/Categories/CategoriesList"

const Categories = () => {
  const router = useRouter()

  const {
    data: result,
    isLoading,
    isFetching,
    isError,
  } = useGetCategoriesQuery({
    page: Number(router.query?.page) || 1,
    search: router.query?.search as string || '',
  })
  const [deleteCategories] = useDeleteCategoriesMutation()

  const {selectedItems, toggleSelectAll, toggleItem} = useSelectAll(result?.ids || [])

  const handleDelete = () => {
    deleteCategories(selectedItems).then(() => toggleSelectAll(false));
  }

  if (isLoading) return <p>Загрузка</p>

  if (isError || result === undefined) return <p>Ошибка</p>

  return (
    <>
      <Search />
      {
        isFetching
          ? <p>Загрузка...</p>
          : result?.categories.data.length === 0
            ? <p>Категорий нет</p>
            : (
              <>
                <Button onClick={handleDelete}>Удалить выбранные</Button>
                <Table>
                  <TableHeader>
                    <tr>
                      <th>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          checked={selectedItems.length === result.ids.length}
                          onChange={(e) => toggleSelectAll(e.target.checked)}
                        />
                      </th>
                      <th>Название</th>
                      <th>Действия</th>
                    </tr>
                  </TableHeader>
                  <TableBody>
                    <CategoriesList
                      items={result.categories.data}
                      selectedItems={selectedItems}
                      toggleSelect={toggleItem}
                    />
                  </TableBody>
                </Table>
              </>
            )
      }
      <Pagination
        currentPage={result.categories.current_page}
        pagesCount={result.categories.last_page}
      />
    </>
  )
}

export default Categories
