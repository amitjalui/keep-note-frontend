import styled, { css } from "styled-components";

export const LeftDrawerContainer = styled.div`
  position: fixed;
  top: 0;
  width: 300px;
  height: 100%;
  background-color: red;
  
  @media (max-width: 430px) {
    width: 80%;
  }
`