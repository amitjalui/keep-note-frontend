import Image from 'next/image';
import styled, { css } from 'styled-components';
import { FlexRow } from '@/styles/GlobalStyles';

export const displayFlexRow = css`
  ${FlexRow}
  justify-content: space-between;
  align-items: center;
`

export const circularImageStyles = css`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  object-fit: contain
`

export const NavWrapper = styled.nav`
  ${displayFlexRow}
  margin: 5px;
  border-radius: 18px;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.baseBgLevel2};
`

export const LogoWrapper = styled.div`
  ${displayFlexRow}
  width: 35px;
  height: 35px;
  border: none;
  border-radius: 50%;
  background-color: #ddd;
`

export const LogoImg = styled(Image)`
  ${circularImageStyles}
  background-color: #ddd;
`

export const SearchBarWrapper = styled.div`
  ${displayFlexRow}
  max-width: 80%;
  width: 60%;
  height: 35px;
  border: none;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.baseBgLevel1};
`

export const SearchBarInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 5px;
  padding: 10px 8px;
  background-color: ${({ theme }) => theme.colors.baseBgLevel1};
  color: ${({ theme }) => theme.colors.text};
  &:focus {
    outline: none;
  }
`

export const RightSideColumn = styled.div`
  ${displayFlexRow}
`

export const UserProfileWrapper = styled.span`
  ${displayFlexRow}
  width: 35px;
  height: 35px;
  background-color: #ddd;
  display: flex;
  align-items: center;
  border-radius: 50%;
  svg {
    width: 100%;
    height: 100%;
    color: ${({ theme }) => theme.colors.text};
    cursor: pointer;
  }
`

export const UserProfileImage = styled(Image)`
  ${circularImageStyles}
`

export const RightMenuWrapper = styled.span`
  ${displayFlexRow}
  width: 35px;
  height: 35px;
  margin: 0 5px 0 15px;
  svg {
    width: 85%;
    height: 85%;
    color: ${({ theme }) => theme.colors.text};
    font-size: 1rem;
    cursor: pointer;
  }

  @media (max-width: 430px) {
    display: none
  } 
`

// Eg of dynamic style for img tag
/* 
  const MyIcon = styled.img.attrs(props => ({
    src: props.Img || Myimg,
  }))`
    width: 100px;
  `;
*/