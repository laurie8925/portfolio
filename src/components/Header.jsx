import React from 'react'
import Nav from './Nav'

import { NavLink } from 'react-router-dom';
import logo from '../medias/portfolio-logo-final.svg'; 


function Header() {
  return (
    <header>
      <Nav />
    </header>
  )
}

export default Header