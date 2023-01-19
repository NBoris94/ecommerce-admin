import {ReactNode} from "react"
import {MainChildren, ModalSize} from "@/types/modal"

export interface ModalBtn {
  text: string
  type: 'button' | 'submit' | 'reset' | undefined
}
export interface ModalProps {
  id: string
  children: ReactNode
  title: string
  footer: ReactNode
  btn: ModalBtn
  showCancelBtn?: boolean
}
