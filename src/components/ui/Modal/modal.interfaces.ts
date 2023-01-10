import {ReactNode} from "react"
import {MainChildren, ModalSize} from "@/types/modal"

export interface ModalProps {
  ariaLabel: string
  btnClassName?: string
  btnContent: ReactNode
  center?: boolean
  children: MainChildren
  footerChildren?: MainChildren
  size?: ModalSize
  scrollable?: boolean
  staticBackdrop?: boolean
  title?: string
}
