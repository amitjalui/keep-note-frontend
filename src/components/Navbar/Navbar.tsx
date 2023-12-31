import React from 'react'
import {
  Nav,
  LogoImg,
  SearchBar,
  SearchBarInput,
  UserProfile,
  UserProfileImage,
  UserProfilePlaceholderIcon,
} from "./NavbarStyle";
import { logo } from '@/assets';


const Navbar = () => {
  const tempUserEmptyData = "";
  
  return (
    <Nav>
      {/* LOGO OR HAMBURGER ICON */}
      <div className="logo">
        <LogoImg 
          src={logo.logo3_3}
          alt='logo'
          priority 
        />
      </div>

      {/* SEARCH BAR */}
      <SearchBar>
        <SearchBarInput 
          type='search' 
          placeholder='Search' 
        />
      </SearchBar>

      {/* USER PROFILE ICON */}
      <UserProfile >
        {
          tempUserEmptyData 
          ? <UserProfileImage 
              src={logo.logo3_3} 
              alt=""
              priority
            />
          : <UserProfilePlaceholderIcon />
        }
      </UserProfile>
    </Nav>
  )
}

export default Navbar