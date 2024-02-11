import styled from "styled-components";

export const CardContainer = styled.div`
  width: 100%;
  min-height: 180px;
  max-height: 280px;
  border: none;
  border-radius: 10px;
  padding: 5px;
  background-color: ${({theme}) => theme.colors.card};
  overflow: hidden;
  cursor: pointer;
`

export const CardHeader = styled.div`

`