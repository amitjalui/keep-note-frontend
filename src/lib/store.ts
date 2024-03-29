import { configureStore } from '@reduxjs/toolkit';
import colorThemeSlice from './features/theme/colorThemeSlice';
import leftDrawerSlice from './features/leftDrawer/leftDrawerSlice';
import notesDataSlice from '@/lib/features/notes/noteDataSlice'

// reducers
export const makeStore = () => configureStore({
  reducer: {
    colorTheme: colorThemeSlice,
    leftDrawer: leftDrawerSlice,
    notesData: notesDataSlice,
  }
});

// Infer the type of store
export type AppStore = ReturnType<typeof makeStore>

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']