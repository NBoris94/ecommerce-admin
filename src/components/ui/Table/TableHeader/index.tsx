import {FC} from "react"

import {TableHeaderProps} from "../Table.interfaces"

import styles from '../Table.module.scss'

const TableHeader: FC<TableHeaderProps> = (
  {
    children
  }
) => {
  return (
    <thead className={styles.table__head}>
      {children}
    </thead>
  )
}

export default TableHeader
