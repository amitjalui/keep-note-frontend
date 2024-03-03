import styled from "styled-components";

interface CardContainerProps {
  $cardHeight: number;
}

export const CardContainer = styled.div<CardContainerProps>`
  margin: 0;
  border-radius: 10px;
  padding: 0;
  padding: 5px;
  background-color: ${({ theme }) => theme.colors.card};
  overflow: hidden;
  cursor: pointer;
  background-color: green;
  word-wrap: break-word;
  
  grid-row: ${({$cardHeight}) => `span ${calculateGridSpan($cardHeight)}`};
`;

const calculateGridSpan = (height: number) => {
  if (height > 562) {
    return 3;
  } else if (height > 413) {
    return 2;
  } else {
    return 1;
  }
}

export const CardHeader = styled.div`

`