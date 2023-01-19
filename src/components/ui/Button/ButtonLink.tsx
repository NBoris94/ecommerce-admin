import {FC} from "react"
import Link from "next/link"
import classNames from "classnames"
import {ButtonLinkProps} from "./Button.interfaces"
import styles from "./Button.module.scss"

const ButtonLink: FC<ButtonLinkProps> = (
  {
    isOuter = false,
    className,
    href = '',
    children,
    ...rest
  }
) => {
  const classes = classNames(styles.btn, className)

  if (isOuter) {
    return (
      <a
        className={classes}
        href={href}
        {...rest}
      >
        {children}
      </a>
    )
  }

  return (
    <Link
      className={classes}
      href={href}
      {...rest}
    >
      {children}
    </Link>
  )
}

export default ButtonLink
