import {FC} from "react"
import classNames from "classnames"
import {TableProps} from "./Table.interfaces"
import styles from './Table.module.scss'

const Table: FC<TableProps> = (
  {
    className,
    children,
    ...rest
  }
) => {
  const classes = classNames(styles.table, className)

  return (
    <table
      className={classes}
      {...rest}
    >
      {children}
    </table>
  )
}

export default Table
