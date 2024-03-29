import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// "type" is needed. If no "type", circular dependency error arise
// https://stackoverflow.com/questions/63923025/how-to-fix-circular-dependencies-of-slices-with-the-rootstate

import type { RootState } from "@/lib/store";
import { ColorThemeName } from "@/types/colorTheme";
import { defaultColorThemeName } from "@/const/colorTheme";

type ColorThemeState = {
  theme: ColorThemeName
}

const initialState: ColorThemeState = {
  theme: defaultColorThemeName,
}

const colorThemeSlice = createSlice({
  name: 'colorTheme',
  initialState,
  reducers: {
    updateColorTheme(state, action: PayloadAction<ColorThemeName>) {
      state.theme = action.payload
    }
  }
})

export default colorThemeSlice.reducer;

// selectors
export const selectColorTheme = (state: RootState) => state.colorTheme.theme;

// actions
export const { updateColorTheme } = colorThemeSlice.actions;
