import React, { useEffect, useState } from 'react'
import { NoteEditorContainer, NoteEditorInputFieldWrapper, NoteEditorInputField, NoteEditorPlaceholder } from './EditNote.styles'
import { selectNotesData, notesData } from '@/lib/features/notes/noteDataSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import Toolbar from '../Toolbar/Toolbar';

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
    <NoteEditorContainer>
      <LexicalComposer initialConfig={initialConfig}>
        <Toolbar />
        <NoteEditorInputFieldWrapper>
          <RichTextPlugin
            contentEditable={<NoteEditorInputField />}
            placeholder={<NoteEditorPlaceholder>Enter some text...</NoteEditorPlaceholder>}
            ErrorBoundary={LexicalErrorBoundary}
          />
          <HistoryPlugin />
          <AutoFocusPlugin />
        </NoteEditorInputFieldWrapper>
      </LexicalComposer>
      <button>
        Save
      </button>
      <button>
        Cancel
      </button>
    </NoteEditorContainer>
  )
}

export default EditNote