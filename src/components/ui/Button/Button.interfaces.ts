import {AnchorHTMLAttributes, ButtonHTMLAttributes} from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
}

export interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  isOuter?: boolean
}
