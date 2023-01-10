import {FC, KeyboardEvent, useEffect, useRef, useState} from "react"
import {ModalProps} from "@/components/ui/Modal/modal.interfaces"
import ModalContent from "@/components/ui/Modal/ModalContent"
import ModalButton from "@/components/ui/Modal/ModalButton"
import ModalOverlay from "@/components/ui/Modal/ModalOverlay"

const Modal: FC<ModalProps> = (
  {
    ariaLabel,
    btnClassName,
    btnContent,
    center = false,
    children,
    footerChildren,
    size = 'lg',
    scrollable = false,
    staticBackdrop = false,
    title,
  }
) => {
  const [open, setOpen] = useState(false)
  const btnOpenRef = useRef<HTMLButtonElement>(null)
  const btnCloseRef = useRef<HTMLButtonElement>(null)
  const modalNode = useRef<HTMLDivElement>(null)
  const ESCAPE_KEY = 'Escape'

  useEffect(() => {
    if (open) {
      btnCloseRef.current!.focus()
    } else {
      btnOpenRef.current!.focus()
    }
  }, [open])

  function toggleScrollLock() {
    document.querySelector('body')!.classList.toggle('modal-open')
  }

  const onOpen = () => {
    setOpen(true)
    toggleScrollLock()
  }

  const onClose = () => {
    setOpen(false)
    toggleScrollLock()
  }

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === ESCAPE_KEY) {
      onClose()
    }
  }

  const onClickAway = (event: any) => {
    if (modalNode.current && !modalNode.current.contains(event.target)) {
      onClose()
    }
  }

  return (
    <>
      <ModalContent
        ariaLabel={ariaLabel}
        buttonRef={btnCloseRef}
        center={center}
        footerChildren={footerChildren}
        open={open}
        mainChildren={children}
        modalRef={modalNode}
        onClickAway={onClickAway}
        onClose={onClose}
        onKeyDown={onKeyDown}
        size={size}
        scrollable={scrollable}
        staticBackdrop={staticBackdrop}
        title={title}
      />
      {open && <ModalOverlay />}

      <ModalButton
        onClick={onOpen}
        className={btnClassName}
        buttonRef={btnOpenRef}
      >
        {btnContent}
      </ModalButton>
    </>
  )
}

export default Modal
