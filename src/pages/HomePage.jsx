import React from 'react'; 

//components
import Intro from '../components/Intro';
import Feature from '../components/Feature';
import About from "../components/About"; 
import Contact from '../components/Contact';


function HomePage() {
  return (
    <main >
    <Intro /> 
    <Feature /> 
    <About /> 
    <Contact />
    </main>
  )
};

export default HomePage