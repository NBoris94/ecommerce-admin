import {FC} from "react"
import {ModalButtonProps} from "@/components/ui/Modal/ModalButton/ModalButton.interfaces"

const ModalButton: FC<ModalButtonProps> = (
  {
    buttonRef,
    type = 'button',
    children,
    ...rest
  }) => {
  return (
    <button ref={buttonRef} type={type} {...rest}>
      {children}
    </button>
  )
}

export default ModalButton
