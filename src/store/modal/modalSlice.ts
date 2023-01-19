import {createSlice} from "@reduxjs/toolkit"
import {toggleScrollLock} from "@/utils/modal";

export interface IModalState {
  isOpen: boolean
}

const initialState: IModalState = {
  isOpen: false
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers : {
    openModal: (state) =>  {
      state.isOpen = true
      toggleScrollLock()
    },
    closeModal: (state) =>  {
      state.isOpen = false
      toggleScrollLock()
    }
  }
})

export const  { openModal, closeModal } = modalSlice.actions

export default modalSlice.reducer
