import {RefObject, MouseEvent, KeyboardEvent} from "react"
import {BtnRef, MainChildren, ModalSize} from "@/types/modal"

export interface ModalContentProps {
  ariaLabel?: string
  buttonRef: BtnRef
  center: boolean
  footerChildren?: MainChildren
  open: boolean
  mainChildren: MainChildren
  modalRef: RefObject<HTMLDivElement>
  onClickAway: (event: MouseEvent<HTMLDivElement>) => void
  onClose: () => void
  onKeyDown: ((event: KeyboardEvent<HTMLDivElement>) => void) | undefined
  size: ModalSize
  scrollable: boolean
  staticBackdrop: boolean
  title?: string
}
