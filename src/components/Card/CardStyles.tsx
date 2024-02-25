import styled from "styled-components";

// export const CardContainer = styled.div`
//   width: 100%;
//   min-height: 180px;
//   max-height: 280px;
//   border: none;
//   border-radius: 10px;
//   padding: 5px;
//   background-color: ${({theme}) => theme.colors.card};
//   overflow: hidden;
//   cursor: pointer;
// `

export const CardHeader = styled.div`

`

// export const CardContainer = styled.div`
//   width: 260px; /* Consistent card width */
//   min-height: 30px; /* Adjust minimum height as needed */
//   max-height: 476px;
//   border-radius: 10px;
//   padding: 5px;
//   background-color: ${({ theme }) => theme.colors.card};
//   overflow: hidden;
//   cursor: pointer;

//   /* ... other card styles */
// `;

interface CardContainerProps {
  $cardHeight: number;
}

export const CardContainer = styled.div<CardContainerProps>`
  margin: 0;
  padding: 0;
  border-radius: 16px;
  background-color: green;

  grid-row-end: ${({$cardHeight}) => ($cardHeight)};
`;