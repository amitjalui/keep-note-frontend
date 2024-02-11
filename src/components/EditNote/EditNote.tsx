import React, { useState } from 'react'
import { EditNoteContainer } from './EditNoteStyles'

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