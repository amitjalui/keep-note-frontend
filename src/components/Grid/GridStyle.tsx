import styled, { css } from "styled-components";

export const gridColumns = () => css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  grid-gap: 10px;
`;

// export const GridContainer = styled.div`
//   ${gridColumns()};
//   background-color: ${({theme}) => theme.colors.baseBgLevel1};
//   padding: 10px;

//   @media (max-width: 768px) {
//     ${gridColumns()}
//     grid-template-columns: repeat(2, 1fr);
//   }

//   @media (max-width: 480px) {
//     ${gridColumns()}
//     grid-template-columns: 1fr;
//   }
// `


// export const GridContainer = styled.div`
//   ${gridColumns()};
//   background-color: ${({ theme }) => theme.colors.baseBgLevel1};
//   padding: 10px;

//   /* Media queries for responsiveness */
//   @media (max-width: 768px) {
//     ${gridColumns()}
//     grid-template-columns: repeat(2, 1fr);
//   }

//   @media (max-width: 480px) {
//     ${gridColumns()}
//     grid-template-columns: 1fr;
//   }
// `;


export const GridContainer = styled.div`
  margin: 0;
  padding: 0;
  width: 80vw;
  background-color: red;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: grid;
  grid-template-columns: repeat(auto-fill, 250px);
  grid-auto-rows: 10px;
`;