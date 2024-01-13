import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    // font-family: 'Your preferred font stack', sans-serif;
    margin: 0;
    padding: 0;
  }
`

export default GlobalStyles