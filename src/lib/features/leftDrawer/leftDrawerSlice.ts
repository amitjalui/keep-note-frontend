import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { RootState } from "@/lib/store";

type LeftDrawerState = {
  isOpen: boolean
}

const initialState: LeftDrawerState = {
  isOpen: false
}


