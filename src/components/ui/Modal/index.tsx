import {FC} from "react"
import {createPortal} from "react-dom"
import {useA11yDialog} from "react-a11y-dialog";
import {ModalProps} from "@/components/ui/Modal/modal.interfaces"

import Button from "@/components/ui/Button";

import styles from './Modal.module.scss'

const Modal: FC<ModalProps> = (
  {
    id,
    title,
    btn,
    children,
    footer,
    showCancelBtn = false,
  }
) => {
  const [instance, attr] = useA11yDialog({
    id,
    role: 'dialog',
    title,
  })

  const dialog =  createPortal(
    <div {...attr.container} className={styles.dialog}>
      <div {...attr.overlay} className={styles.dialog__overlay} />

      <div {...attr.dialog} className={styles.dialog__wrapper}>
        <button {...attr.closeButton} className={styles.dialog__close}>
          Закрыть
        </button>

        <p {...attr.title} className={styles.dialog__title}>
          {title}
        </p>

        <div className={styles.dialog__content}>
          {children}
        </div>

        <div className={styles.dialog__footer}>
          {footer}
          {!showCancelBtn ? null : (
            <Button
              type="button"
              onClick={() => instance.hide()}
            >
              Отмена
            </Button>
          )}
        </div>
      </div>
    </div>,
    document.body
  )

  return (
    <>
      <Button
        type={btn.type}
        onClick={() => instance.show()}
      >
        {btn.text}
      </Button>
      {dialog}
    </>
  )
}

export default Modal
