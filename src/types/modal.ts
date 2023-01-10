import {ReactNode, RefObject} from "react"

export type BtnRef =
  | string
  | ((instance: HTMLButtonElement | null) => void)
  | RefObject<HTMLButtonElement>
  | null
  | undefined

type CallbackChildren = (close: () => void) => ReactNode
export type MainChildren = ReactNode | CallbackChildren

export type ModalSize = '' | 'sm' | 'lg' | 'xl'
