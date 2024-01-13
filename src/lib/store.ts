import { configureStore } from '@reduxjs/toolkit';
import colorThemeSlice from './features/theme/colorThemeSlice';

// reducers
export const makeStore = () => configureStore({
  reducer: {
    colorTheme: colorThemeSlice
  }
});

// Infer the type of store
export type AppStore = ReturnType<typeof makeStore>

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']