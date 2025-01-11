import {ContentEditable} from '@lexical/react/LexicalContentEditable';
import styled from "styled-components";

export const NoteEditorContainer = styled.div`
  height: 100%;
  margin: 5px;
  border-radius: 18px;
  padding: 10px;
  background-color: ${({theme}) => theme.colors.card};
  /* background-color: red; */
`

export const NoteEditorInputFieldWrapper = styled.div`
  position: relative;
`

export const NoteEditorInputField = styled(ContentEditable)`
  min-height: 200px;
  width: 100%;
  background-color: pink;
  padding: 0 8px;
  border-radius: 5px;
  padding-top: 2px;
  position: relative;
  outline: none;
  border: 1px solid #2A3942;
  position: relative;
  color: ${({ theme }) => theme.colors.text };
  background-color: ${({theme}) => theme.colors.card};
`

export const NoteEditorPlaceholder = styled.div`
  position: absolute;
  color: black;
  z-index: 1000;
  top: 0;
` 