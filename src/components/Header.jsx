import React from 'react'
import Nav from './Nav'


import { tabletWidth } from "../global/variables"; 
import useWindowDimensions from '../components/ScreenSize'


import { NavLink } from 'react-router-dom';
import logo from '../medias/portfolio-logo-final.svg'; 


function Header() {

  const dimensions = useWindowDimensions();
  const isTablet = dimensions.width > tabletWidth;

  return (
    <>
      {isTablet ? 
      <header>
         <NavLink to="/"> <img src={logo} alt="Logo" className='logo-nav'/> </NavLink>
         <Nav /> 
      </header>
       
        :
        <header>
          <Nav /> 
        </header>
      }
      
    </>
  )
}

export default Header