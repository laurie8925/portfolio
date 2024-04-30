import React from 'react'
import { NavLink } from 'react-router-dom'; 
import { NavHashLink } from 'react-router-hash-link';

import { tabletWidth } from "../global/variables"; 
import useWindowDimensions from '../components/ScreenSize'

import logo from '../medias/portfolio-logo-final.svg'; 


const Nav = () => {
    const dimensions = useWindowDimensions();
    const isTablet = dimensions.width > tabletWidth;

    return (
        <nav className='main-nav'>
            {isTablet ? (
                <ul>
                    <li><NavLink to="/work">WORK</NavLink></li>
                    <li><NavHashLink smooth to="/#about">ABOUT</NavHashLink></li>
                </ul>
            ):(
                <ul>
                    <li><NavLink to="/work">WORK</NavLink></li>
                    <li><NavLink to="/"> <img src={logo} alt="Logo" className='logo-nav lg:w-1/12 '/> </NavLink></li>
                    <li><NavHashLink smooth to="/#about">ABOUT</NavHashLink></li>
                </ul>
            )}
        </nav>
    )
}

export default Nav