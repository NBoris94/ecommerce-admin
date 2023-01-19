import {configureStore, ThunkAction, Action, ConfigureStoreOptions, combineReducers} from '@reduxjs/toolkit'
import {api} from "@/store/api"


const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer
})
export const createStore = (options?: ConfigureStoreOptions['preloadedState'] | undefined) => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
    ...options
  })
}

const store = createStore()

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>

export type RootState = ReturnType<typeof store.getState>

export default store
