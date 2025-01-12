import styled, { createGlobalStyle, css } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.colors.baseBgLevel1};
    color: ${({ theme }) => theme.colors.text};
    font-family: "Google Sans", Roboto, Arial, sans-serif;
  }
`

export const FlexRow = css`
  display: flex;
  flex-direction: row;
`

export const FlexColumn = css`
  display: flex;
  flex-direction: column;
`

export default GlobalStyles;