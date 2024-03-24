import React, { useState } from 'react'
import { EditNoteContainer } from './EditNote.styles'
import { selectNotesData, notesData } from '@/lib/features/notes/noteDataSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';

const EditNote = () => { 
  const currentNotesData = useAppSelector(selectNotesData);

  console.log(currentNotesData)
  const dispatch = useAppDispatch();

  return (
    <EditNoteContainer>
      <textarea > 

      </textarea>
      <button>
        Save
      </button>
      <button>
        Cancel
      </button>
    </EditNoteContainer>
  )
}

export default EditNote