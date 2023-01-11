import Link from "next/link"
import {FC, useEffect, useState} from "react"
import {ICategory} from "@/types/category"

interface CategoryItemProps extends ICategory {
  checked: boolean
  handleAddToChecked: (id :number) => void
  handleDeleteFromChecked: (id :number) => void
  handleDelete: (id :number) => void
}

const CategoryItem: FC<CategoryItemProps> = (
  {
    id,
    name,
    checked,
    handleAddToChecked,
    handleDeleteFromChecked,
    handleDelete
  }
) => {
  const handleChange = () => {
    if (!checked) {
      handleAddToChecked(id)
    }
    else {
      handleDeleteFromChecked(id)
    }
  }

  return (
    <>
      <tr>
        <td>
          <input className="form-check-input" type="checkbox" checked={checked} onChange={handleChange} />
        </td>
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
