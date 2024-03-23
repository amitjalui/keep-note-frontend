import styled, { css } from "styled-components";

type Custom = {
  $isOpen?: boolean
}

export const LeftDrawerContainer = styled.div<Custom>`
  position: fixed;
  top: 0;
  left: ${({ $isOpen }) => ($isOpen ? '0' : '-300px')};
  width: 300px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.baseBgLevel1};;
  box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.2);
  transition: left 0.3s ease-in-out;
  z-index: 2;
  backdrop-filter: blur(${({ $isOpen }) => ($isOpen ? '5px' : '0')});
  
  @media (max-width: 430px) {
    left: ${({ $isOpen }) => ($isOpen ? '0' : '-90%')};
    width: ${({ $isOpen }) => ($isOpen ? '80% ': '0')};
  }
`

export const Overlay = styled.div<Custom>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  // background-color: green;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  pointer-events: ${({ $isOpen }) => ($isOpen ? 'auto' : 'none')};
  transition: opacity 0.3s ease-in-out;
  z-index: 1;
`;
