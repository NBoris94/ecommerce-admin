import {ButtonHTMLAttributes} from "react"
import {BtnRef} from "@/types/modal"

export interface ModalButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonRef: BtnRef
}
