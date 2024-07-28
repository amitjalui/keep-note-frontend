import React, { useEffect, useState } from 'react'
import { EditNoteContainer } from './EditNote.styles'
import { selectNotesData, notesData } from '@/lib/features/notes/noteDataSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';

import {$getRoot, $getSelection} from 'lexical';

import {AutoFocusPlugin} from '@lexical/react/LexicalAutoFocusPlugin';
import {LexicalComposer} from '@lexical/react/LexicalComposer';
import {RichTextPlugin} from '@lexical/react/LexicalRichTextPlugin';
import {ContentEditable} from '@lexical/react/LexicalContentEditable';
import {HistoryPlugin} from '@lexical/react/LexicalHistoryPlugin';
import {LexicalErrorBoundary} from '@lexical/react/LexicalErrorBoundary';

const theme = {
  // Theme styling goes here
  //...
}

// Catch any errors that occur during Lexical updates and log them
// or throw them as needed. If you don't throw them, Lexical will
// try to recover gracefully without losing user data.
function onError(error: string) {
  console.error(error);
}

const EditNote = () => { 
  const currentNotesData = useAppSelector(selectNotesData);

  const dispatch = useAppDispatch();
  console.log(currentNotesData)

  const initialConfig = {
    namespace: 'MyEditor',
    theme,
    onError,
  };

  return (
    <EditNoteContainer>
      <LexicalComposer initialConfig={initialConfig}>
        <RichTextPlugin
          contentEditable={<ContentEditable />}
          placeholder={<div>Enter some text...</div>}
          ErrorBoundary={LexicalErrorBoundary}
        />
        <HistoryPlugin />
        <AutoFocusPlugin />
      </LexicalComposer>
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