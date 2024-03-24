import styled, { } from "styled-components";
import Link  from 'next/link'; 
import { FlexColumn } from '@/styles/Global.styles';

interface CardContainerProps {
  $cardHeight: number;
}

export const CardContainer = styled.div<CardContainerProps>`
  ${FlexColumn}
  margin: 0;
  border-radius: 10px;
  padding: 0;
  padding: 5px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.baseBgLevel2};
  word-wrap: break-word;
  position: relative;
  
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

export const LinkTag = styled(Link)`
  color: ${({ theme }) => theme.colors.text};
  display: block;
  position: absolute;
  width: 100%;
  left: 0;
  right: 0;
  z-index: 1;
  top: 0;
  bottom: 0;
  background-color: #1b19190;
`;

export const CardHeader = styled.div`
  height: 50px;
`

export const HeaderInput = styled.input.attrs({ 
    type: 'text',
    placeholder: 'Title'
  })`
  
  &::placeholder {
    color: #626060;
  }
  
  width: 100%;
  height: 100%;
  border: none;
  padding: 5px 10px;
  color: ${({ theme }) => theme.colors.text };
  background-color: ${({ theme }) => theme.colors.baseBgLevel2};
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0.9px;
`;

export const CardBody = styled.div`
  background-color: ${({ theme }) => theme.colors.baseBgLevel2};
  padding: 5px 10px;
  height: 100%;
  overflow: hidden;
`

export const CardFooter = styled.div`
  width: 100%;
  height: 20px;
  border: none;
  padding: 5px 10px;
`
