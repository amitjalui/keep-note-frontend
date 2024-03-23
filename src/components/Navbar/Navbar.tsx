"use client"

import React from 'react'
import {
  NavWrapper,
  LogoWrapper,
  LogoImg,
  SearchBarWrapper,
  SearchBarInput,
  RightSideColumn,
  UserProfileWrapper,
  UserProfileImage,
  UserProfilePlaceholderIcon,
  RightMenuWrapper,
  RightMenuIcon
} from "./Navbar.styles";
import { logo } from '@/assets';
import { customIcons } from '@/assets';
import DarkModeToggleSwitch from '../DarkModeToggleSwitch';

const Navbar = () => {
  const tempUserEmptyData = "";
  
  return (
    <NavWrapper>
      {/* LOGO OR HAMBURGER ICON */}
      <LogoWrapper>
        <LogoImg 
          src={logo.logo3_3}
          alt='logo'
          priority 
        />
      </LogoWrapper>

      {/* SEARCH BAR */}
      <SearchBarWrapper>
        <SearchBarInput 
          type='search' 
          placeholder='Search'
        />
      </SearchBarWrapper>

      {/* Navbar Right Column */}
      <RightSideColumn>
        {/* USER PROFILE ICON */}
        <UserProfileWrapper >
          {
            tempUserEmptyData 
            ? <UserProfileImage 
                src={logo.logo3_3} 
                alt=""
                priority
              />
            : <customIcons.ProfileIcon  />
          }
        </UserProfileWrapper>

        {/* Menu */}
        <RightMenuWrapper>
          <customIcons.KebabMenuIcon />
        </RightMenuWrapper>
      </RightSideColumn>

    </NavWrapper>
  )
}

export default Navbar