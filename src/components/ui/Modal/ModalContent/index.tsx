import {FC, useEffect, useState} from "react"
import kebabCase from 'lodash.kebabcase'
import {useFocusTrap} from "@/hooks/index"
import {ModalContentProps} from "@/components/ui/Modal/ModalContent/ModalContent.interfaces"
import {MainChildren} from "@/types/modal"

const TIMEOUT_VALUE = 300

const ModalContent: FC<ModalContentProps> = (
  {
    ariaLabel,
    buttonRef,
    center,
    footerChildren,
    mainChildren,
    modalRef,
    onClickAway,
    onClose,
    onKeyDown,
    open,
    size,
    scrollable,
    staticBackdrop,
    title,
  }
) => {
  const [staticAnimation, setStaticAnimation] = useState(false)
  const [staticClass, setStaticClass] = useState('')
  const [openClass, setOpenClass] = useState('')
  const dialogRef = useFocusTrap()
  const scrollClass = scrollable ? ' modal-dialog-scrollable' : ''
  const verticalCenterClass = center ? ' modal-dialog-centered' : ''

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpenClass(open ? ' show' : '')
    }, TIMEOUT_VALUE);
    return () => clearTimeout(timer);
  }, [open]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStaticClass(staticAnimation ? ' modal-static' : '')
    }, TIMEOUT_VALUE);
    return () => clearTimeout(timer);
  }, [staticAnimation]);

  const staticOnClick = () => setStaticAnimation(!staticAnimation)

  const render = (content: MainChildren) => typeof content === 'function' ? content(onClose) : content

  return (
    <div
      ref={dialogRef}
      className={`modal fade${staticClass}${openClass}`}
      aria-labelledby={kebabCase(ariaLabel)}
      tabIndex={-1}
      onClick={staticBackdrop ? staticOnClick : onClickAway}
      onKeyDown={onKeyDown}
      style={{
        display: open ? 'block' : 'none',
        ...(openClass && {paddingRight: '15px'}),
        ...(staticAnimation && {overflow: 'hidden'})
      }}
      {...(open ? {'aria-modal': true, role: 'dialog'} : {'aria-hidden': true})}
    >
      <div
        className={`modal-dialog modal-${size}${scrollClass}${verticalCenterClass}`}
        ref={modalRef}
      >
        <div className='modal-content'>
          <div className='modal-header'>
            {title && <h5>{title}</h5>}
            <button
              type='button'
              className='btn-close'
              aria-label='close-modal'
              onClick={onClose}
              ref={buttonRef}
            />
          </div>
          <div className='modal-body'>{render(mainChildren)}</div>
          {footerChildren && (
            <div className='modal-footer'>{render(footerChildren)}</div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ModalContent
