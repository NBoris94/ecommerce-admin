import {FC} from "react"
import classNames from "classnames";

import {ButtonProps} from "./Button.interfaces"

import styles from "./Button.module.scss"
import Link from "next/link";

const Button: FC<ButtonProps> = (
  {
    className,
    type,
    children,
    ...rest
  }
) => {
  const classes = classNames(styles.btn, className)

  return (
    <button
      className={classes}
      type={type}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
