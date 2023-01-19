import {FC} from "react"

import {TableFooterProps} from "../Table.interfaces"

import styles from '../Table.module.scss'

const TableFooter: FC<TableFooterProps> = (
  {
    children
  }
) => {
  return (
    <tfoot className={styles.table__footer}>
      {children}
    </tfoot>
  )
}

export default TableFooter
