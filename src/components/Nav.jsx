import React from 'react'
import { NavLink } from 'react-router-dom'; 
import { HashLink } from 'react-router-hash-link';

import { tabletWidth } from "../global/variables"; 
import useWindowDimensions from '../components/ScreenSize'

import logo from '../medias/portfolio-logo-final.svg'; 


const Nav = () => {
    const dimensions = useWindowDimensions();
    const isTablet = dimensions.width > tabletWidth;

    return (
        <div>
            {isTablet ? (
                <ul>
                    <li><NavLink to="/work">WORK</NavLink></li>
                    <li><HashLink smooth to="/#about">ABOUT</HashLink></li>
                </ul>
            ):(
                <ul>
                    <li><NavLink to="/work">WORK</NavLink></li>
                    <li><NavLink to="/"> <img src={logo} alt="Logo" className='logo-nav lg:w-1/12 '/> </NavLink></li>
                    <li><HashLink smooth to="/#about">ABOUT</HashLink></li>
                </ul>
            )}
        </div>
    )
}

export default Nav