import Image from 'next/image'
import styled from 'styled-components'
import { FaUserCircle } from "react-icons/fa";

export const Nav = styled.nav`
  padding: 10px;
  background-color: lightblue;
  display: flex;
  justify-content: space-between;
  margin: 5px;
  border-radius: 18px;
`

export const LogoImg = styled(Image)`
  width: 35px;
  height: 35px;
  background-color: #ddd;
  border-radius: 50%;
  object-fit: contain;
`

export const SearchBar = styled.div`
  max-width: 80%;
  width: 60%;
  height: 35px;
  background-color: red;
  border-radius: 5px;
`

export const SearchBarInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 5px;
  padding: 10px 8px;
  &:focus {
    outline: none;
  }
`

export const UserProfile = styled.span`
  width: 35px;
  height: 35px;
  background-color: #ddd;
  display: flex;
  align-items: center;
  border-radius: 50%
`

export const UserProfileImage = styled(Image)`
  width: 35px;
  height: 35px;
  font-size: 2rem;
  border-radius: 50%;
  color: white;
  background-color: red;
`

export const UserProfilePlaceholderIcon = styled(FaUserCircle)`
  width: 35px;
  height: 35px;
  font-size: 2rem;
  border-radius: 50%;
  color: white;
`

// Eg of dynamic style for img tag
/* 
  const MyIcon = styled.img.attrs(props => ({
    src: props.Img || Myimg,
  }))`
    width: 100px;
  `;
*/