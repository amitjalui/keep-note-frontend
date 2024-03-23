import React, { useState } from 'react'
import { EditNoteContainer } from './EditNote.styles'

const EditNote = () => { 

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