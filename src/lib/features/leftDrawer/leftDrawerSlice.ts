import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { RootState } from "@/lib/store"
import { DrawerType } from "@/types/leftDrawer"
import { defaultDrawerValue } from "@/const/drawer"

type LeftDrawerState = {
  isOpen: DrawerType
}

const initialState: LeftDrawerState = {
  isOpen: defaultDrawerValue
}

const leftDrawerSlice = createSlice({
  name: 'leftDrawer',
  initialState,
  reducers: {
    toggleLeftDrawer(state) {
      state.isOpen = !state.isOpen
    }
  }
})

// selectors
export const selectLeftDrawerIsOpen = (state: RootState) => state.leftDrawer.isOpen;

// reducer
export default leftDrawerSlice.reducer;

// actions
export const { toggleLeftDrawer } = leftDrawerSlice.actions;