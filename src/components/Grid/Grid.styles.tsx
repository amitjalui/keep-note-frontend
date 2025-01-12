import Link  from 'next/link'; 
import styled, { css } from "styled-components";
import { layoutStyles } from '@/styles';

export const gridColumns = () => css`
  ${layoutStyles.grid.base}
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 10px;

  @media (min-width: 412px) and (max-width: 1247px) {
    grid-template-columns: repeat(auto-fit, minmax(191px, 1fr));
  }
`;

export const GridContainer = styled.div`
  ${gridColumns()};
  background-color: ${({ theme }) => theme.colors.baseBgLevel1};
  padding: 4px 10px 10px;
  grid-auto-rows: 150px 200px;
`;
