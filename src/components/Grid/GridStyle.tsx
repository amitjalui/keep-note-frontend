import Link  from 'next/link'; 
import styled, { css } from "styled-components";

export const gridColumns = () => css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 10px;
`;

export const GridContainer = styled.div`
  ${gridColumns()};
  background-color: ${({ theme }) => theme.colors.baseBgLevel1};
  padding: 10px;
  grid-auto-rows: 150px 200px;
`;
