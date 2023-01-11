import {FC} from "react"
import classNames from "classnames"

interface PaginationProps {
  page: number,
  last_page: number,
  setPage: (value: number | ((prev: number) => number)) => void,
}

const Pagination: FC<PaginationProps> = ({ page, last_page, setPage }) => {
  let pages: number[] = []
  for (let i = 1; i <= last_page; i++) {
    pages.push(i)
  }

  return (
    <ul className="pagination">
      <li className="page-item">
        <button
          className="page-link"
          aria-label="Previous"
          onClick={() => setPage(prev => prev - 1)}
          disabled={page === 1}
        >
          <span aria-hidden="true">&laquo;</span>
        </button>
      </li>
      {pages?.map(pageItem => {
        return (
          <li
            className={classNames('page-item', { 'active': page === pageItem })}
            key={pageItem}
          >
            <button
              className="page-link"
              onClick={() => setPage(pageItem)}
            >
              {pageItem}
            </button>
          </li>
        )
      })}
      <li className="page-item">
        <button
          className="page-link"
          aria-label="Next"
          onClick={() => setPage(prev => prev + 1)}
          disabled={page === last_page}
        >
          <span aria-hidden="true">&raquo;</span>
        </button>
      </li>
    </ul>
  )
}

export default Pagination
