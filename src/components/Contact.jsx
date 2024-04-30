import {useEffect} from 'react'
import { tabletWidth } from "../global/variables"; 
import useWindowDimensions from '../components/ScreenSize'

//animation 
import AOS from 'aos';
import 'aos/dist/aos.css';
import Sparkle from '../components/Sparkle'


const Contact = () => {

  const dimensions = useWindowDimensions();
  const isTablet = dimensions.width > tabletWidth;

   //aos 
   useEffect(() => {
    AOS.init();
  }, [])


  return (
    <div className='contact-section flex flex-col items-center justify-center h-screen gap-y-4 relative md:gap-y-6' id="contact">
      {isTablet ? <Sparkle />:""}
      
      <h2 className='py-3 font-bold z-30' data-aos="fade-up" data-aos-duration="1000">Let's Connect!  </h2>
      <div className='z-30' data-aos="fade-up" data-aos-duration="1000">
        <h3 className=' text-center py-1 md:py-3'>Chat with me</h3>

        {/* either use div for the slider or use button tag to style the active state. (probably better to use button for mobile) */}
        <button className='
        flex flex-row items-center justify-center bg-theme text-white max-w-32 py-2 px-6 rounded-full mx-auto text-lg w-40 
        md:text-2xl md:py-4 md:px-12 md:max-w-80 button_slide
        focus:ring-4 focus:ring-theme focus:bg-white focus:text-theme'><a href="#" className='text-lg md:text-2xl'>Copy Email</a></button>
      </div>
      
      <div className='z-30' data-aos="fade-up" data-aos-duration="1000">
        <h3 className=' text-center py-1 md:py-3'>Connect with me</h3>
        <button className='flex flex-row items-center justify-center bg-theme text-white max-w-32 py-2 px-6 rounded-full mx-auto text-lg w-40 md:py-4 md:px-12 md:max-w-80 button_slide focus:ring-4 focus:ring-theme focus:bg-white focus:text-theme'><a href="#" className='text-lg md:text-2xl'>Linkedin</a></button>
      </div>

      <div className='z-30' data-aos="fade-up" data-aos-duration="1000">
         <h3 className=' text-center py-1 md:py-3'>Check out my works</h3>
         <button className='flex flex-row items-center justify-center bg-theme text-white max-w-32 py-2 px-6 rounded-full mx-auto text-lg w-40 md:py-4 md:px-12 md:max-w-80 button_slide focus:ring-4 focus:ring-theme focus:bg-white focus:text-theme'><a href="#" className='text-lg md:text-2xl'>Github</a></button>
      </div>
      
     
    </div>
  )
}

export default Contact