import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import {AppDispatch, AppState} from "@/store/index"
import { useFocusTrap } from './useFocusTrap'

const useAppDispatch = () => useDispatch<AppDispatch>()

const useAppSelector: TypedUseSelectorHook<AppState> = useSelector

export { useAppDispatch, useAppSelector, useFocusTrap }
