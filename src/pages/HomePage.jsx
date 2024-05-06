import { useEffect, useState } from 'react'; 
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';

//components
import Intro from '../components/Intro';
import Feature from '../components/Feature';
import About from "../components/About"; 
import Contact from '../components/Contact';



import logo from '../medias/portfolio-logo-final.svg'; 


function HomePage() {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [aboutSectionLoaded, setAboutSectionLoaded] = useState(false); // New state
  const location = useLocation();

  useEffect(() => {
    // Simulate loading data
    setTimeout(() => {
      setDataLoaded(true);
    }, 50); // Simulate loading delay
  }, []);

  useEffect(() => {
    // Scroll to the about section if the URL contains the hash fragment '#about' and the data is loaded
    if (dataLoaded && location.hash === '#about' && !aboutSectionLoaded) {
      console.log("Scrolling to about section...");
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
        setAboutSectionLoaded(true); // Set about section loaded
      }
    }
  }, [dataLoaded, location.hash, aboutSectionLoaded]);


  return (
    <body className='relative'>
      
        <img src={logo} alt="Logo" className='logo lg:w-1/12'/>
      
      
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