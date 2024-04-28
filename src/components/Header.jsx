import React from 'react'
import Nav from './Nav'

import { NavLink } from 'react-router-dom';
import logo from '../medias/portfolio-logo-final.svg'; 


function Header() {
  return (
    <header>
      <NavLink to="/"> <img src={logo} alt="Logo" className='logo-desktop lg:w-1/12'/></NavLink>
      <Nav />
    </header>
  )
}

export default Header