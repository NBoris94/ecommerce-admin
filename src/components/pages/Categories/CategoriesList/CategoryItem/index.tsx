import Link from "next/link"
import {FC} from "react"
import {CategoryItemProps} from "@/components/pages/Categories/Categories.interfaces";

const CategoryItem: FC<CategoryItemProps> = (
  {
    id,
    name,
    checked,
    toggleSelect
  }
) => {

  return (
    <>
      <tr>
        <td>
          <input
            className="form-check-input"
            type="checkbox"
            checked={checked}
            onChange={toggleSelect}
          />
        </td>
        <td>{name}</td>
        <td>
          <div className="btn-group btn-group-sm">
            <Link className="btn btn-warning" href={`/categories/edit/${id}`}>
              <i className="bi bi-pencil-fill"></i>
            </Link>
          </div>
        </td>
      </tr>
    </>
  )
}

export default CategoryItem
