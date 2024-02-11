import styled, { css } from "styled-components";

const gridColumns = () => css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  grid-gap: 10px;
`;

export const GridContainer = styled.div`
  ${gridColumns()};
  background-color: ${({theme}) => theme.colors.baseBgLevel1};
  padding: 10px;

  @media (max-width: 768px) {
    ${gridColumns()}
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    ${gridColumns()}
    grid-template-columns: 1fr;
  }
`