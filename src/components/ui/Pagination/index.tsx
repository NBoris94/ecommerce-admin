import {FC, useEffect, useState} from "react"
import classNames from "classnames"
import {useRouter} from "next/router";
import {PaginationProps} from "./Pagination.interfaces";

const Pagination: FC<PaginationProps> = (
  {
    currentPage,
    pagesCount,
  }
) => {
  const router = useRouter()

  const handleChangePage = (page: number) => {
    router.push({pathname: router.pathname, query: { ...router.query, page }})
  }

  return (
    <ul className="pagination flex-wrap">
      <li className="page-item">
        <button
          className="page-link"
          aria-label="Previous"
          onClick={() => handleChangePage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <span aria-hidden="true">&laquo;</span>
        </button>
      </li>
      {new Array(pagesCount).fill('').map((i, index) => {
        return (
          <li
            className={classNames('page-item', { 'active': currentPage === index + 1 })}
            key={index + 1}
          >
            <button
              className="page-link"
              onClick={() => handleChangePage(index + 1)}
            >
              {index + 1}
            </button>
          </li>
        )
      })}
      <li className="page-item">
        <button
          className="page-link"
          aria-label="Next"
          onClick={() => handleChangePage(currentPage + 1)}
          disabled={currentPage === pagesCount}
        >
          <span aria-hidden="true">&raquo;</span>
        </button>
      </li>
    </ul>
  )
}

export default Pagination
