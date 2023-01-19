import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import {AppDispatch, AppState} from "@/store/index"
import { useFocusTrap } from './useFocusTrap'
import { useDebounce } from './useDebounce'
import { useSelectAll } from './useSelectAll'

const useAppDispatch = () => useDispatch<AppDispatch>()

const useAppSelector: TypedUseSelectorHook<AppState> = useSelector

export {
  useAppDispatch,
  useAppSelector,
  useFocusTrap,
  useDebounce,
  useSelectAll
}
