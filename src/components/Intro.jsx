import React from 'react'
import { NavLink } from 'react-router-dom'
import pinkStarSvgUrl from '../medias/pinkstar.svg'
import Sparkle from '../components/Sparkle'


const Intro = () => {
  return (
    <div className='intro-section relative '>
      <Sparkle />
      <div className='flex flex-col items-center justify-center h-screen z-50 overflow-hidden'>
        <h1 className='z-30 text-5xl font-normal sm:text-7xl xl:text-9xl'>Laurie Yeh</h1>
        <p className='z-30 text-lg uppercase text-pretty tracking-wide sm:text-xl sm:tracking-wider text-center'> Front End Web Developer <span > | </span> UX Designer</p>

        <div className='w-full absolute bottom-1/4 left-1/2 transform -translate-x-1/2'>
            <ul className='flex flex-wrap justify-evenly w-full gap-4 items-center'>
                <li><NavLink to="/work" className='flex flex-wrap flex-row gap-x-1.5'>
                  <img src={pinkStarSvgUrl} alt="Pink Star" />
                  WORK
                  <img src={pinkStarSvgUrl} alt="Pink Star" /></NavLink></li>
                <li><NavLink to="/#about" className='flex flex-wrap flex-row gap-x-2'>
                  <img src={pinkStarSvgUrl} alt="Pink Star" />ABOUT<img src={pinkStarSvgUrl} alt="Pink Star" /></NavLink></li>
            </ul>
        </div>
      </div>
      
    </div>
  )
}

export default Intro