import {createPortal} from "react-dom"

const ModalOverlay = () => {
  return createPortal(
    <div className='modal-backdrop fade show' />,
    document.body,
  )
}

export default ModalOverlay
