import React from 'react'; 

//components
import Intro from '../components/Intro';
import Feature from '../components/Feature';
import About from "../components/About"; 
import Contact from '../components/Contact';

import logo from '../medias/portfolio-logo-final.svg'; 


function HomePage() {
  return (
    <body className='relative'>
      <header>
        <img src={logo} alt="Logo" className='logo lg:w-1/12'/>
      </header>
      
      <main className='px-5'>
        <Intro /> 
        <Feature /> 
        <About /> 
        <Contact />
      </main>
    </body>
   
  )
};

export default HomePage