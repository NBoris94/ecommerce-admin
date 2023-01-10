import {configureStore, ThunkAction, Action, ConfigureStoreOptions} from '@reduxjs/toolkit'
import {categoryApi} from "@/store/category/categoryApi"

export const createStore = (options?: ConfigureStoreOptions['preloadedState'] | undefined) => {
  return configureStore({
    reducer: {
      [categoryApi.reducerPath]: categoryApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(categoryApi.middleware),
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
