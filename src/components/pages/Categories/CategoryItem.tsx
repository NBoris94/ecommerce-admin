import Link from "next/link"
import {FC} from "react"
import {ICategory} from "@/types/category"

interface CategoryItemProps extends ICategory {
  handleDelete: (id :string) => void
}

const CategoryItem: FC<CategoryItemProps> = ({ id, name, children_categories, handleDelete }) => {
  return (
    <>
      <tr>
        <td>{name}</td>
        <td>
          <div className="btn-group btn-group-sm">
            <Link className="btn btn-warning" href={`/categories/edit/${id}`}>
              <i className="bi bi-pencil-fill"></i>
            </Link>
            <button className="btn btn-danger" onClick={() => handleDelete(id)}>
              <i className="bi bi-trash2-fill"></i>
            </button>
          </div>
        </td>
      </tr>
    </>
  )
}

export default CategoryItem
