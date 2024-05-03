import React from 'react'
import Nav from './Nav'


import { tabletWidth } from "../global/variables"; 
import useWindowDimensions from '../components/ScreenSize'


import { NavLink } from 'react-router-dom';
import logo from '../medias/portfolio-logo-finalv2.svg'; 


function Header() {

  const dimensions = useWindowDimensions();
  const isTablet = dimensions.width > tabletWidth;

  return (
    <>
      {isTablet ? 
      <div className='nav-header bg-transparent absolute inset-x-0 flex justify-center'>
         <NavLink to="/"> <img src={logo} alt="Logo" className='logo-nav px-4 lg:p-0'/> </NavLink>
         <Nav /> 
      </div>
       
        :
        <header>
          <Nav /> 
        </header>
      }
      
    </>
  )
}

export default Header