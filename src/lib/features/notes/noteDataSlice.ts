import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "@/lib/store";
import dumData from "@/db/dummyNoteData.json"
import type { Note } from "@/types/notes";

type NotesDataState = {
  notes: Note[]
}

const initialState: NotesDataState = {
  notes: dumData.notes
}

const notesDataSlice = createSlice({
  name: 'notesData',
  initialState,
  reducers: {
    notesData(state) {
      return state
    }
  }

})

// selectors
export const selectNotesData = (state: RootState) => state.notesData.notes;

// reducer
export default notesDataSlice.reducer;

// actions
export const { notesData } = notesDataSlice.actions