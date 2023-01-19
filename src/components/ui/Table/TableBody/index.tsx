import {FC} from "react"

import {TableBodyProps} from "../Table.interfaces"

import styles from '../Table.module.scss'

const TableBody: FC<TableBodyProps> = (
  {
    children
  }
) => {
  return (
    <tbody className={styles.table__body}>
      {children}
    </tbody>
  )
}

export default TableBody
