import React from 'react'
import { NavLink } from 'react-router-dom'; 
import { tabletWidth } from "../global/variables"; 
import useWindowDimensions from '../components/ScreenSize'


const Nav = () => {
    const dimensions = useWindowDimensions();
    const isTablet = dimensions.width > tabletWidth;

    return (
        <div>
            {isTablet ? (
                <ul>
                    <li><NavLink to="/work">WORK</NavLink></li>
                    <li><NavLink to="/#about">ABOUT</NavLink></li>
                </ul>
            ):(
                <ul>
                    <li><NavLink to="/work">WORK</NavLink></li>
                    <li><NavLink to="/"> Home </NavLink></li>
                    <li><NavLink to="/#about">ABOUT</NavLink></li>
                </ul>
            )}
        </div>
    )
}

export default Nav