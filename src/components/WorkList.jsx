import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';

//animation 
import AOS from 'aos';
import 'aos/dist/aos.css';

//size
import { tabletWidth } from "../global/variables"; 
import useWindowDimensions from '../components/ScreenSize'

//loading
import  Loading  from '../components/Loading';

const WorkList = ({works}) => {

  const [isLoaded, setLoadStatus] = useState(false)

   //aos 
   useEffect(() => {
    AOS.init();
  }, [])

  //size 
  const dimensions = useWindowDimensions();
  const isTablet = dimensions.width > tabletWidth;

  //loading
  useEffect(() => {
    setTimeout(() => {
      setLoadStatus(true);
    }, 1000);
  }, []);

  return (
    <div className='w-full overflow-hidden pb-10'>
      {/* 5-> 20px, 1.25rem  */}
    <h2 className='text-center p-10 md:pt-24 md:p-10'>Work</h2>

    {!isLoaded ? (
      <section className='loading'>
        <Loading />
      </section>
    ):
    <div>
      {isTablet ? (
        // tablet & desktop
        <div className='flex flex-wrap justify-center mx-auto my-0 md:gap-4 md: max-w-full lg:max-w-5xl w-full'>
        {works.map((obj, index) => (
          <div key={obj.id}>
            <article  data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}  
              className={`single-project gap-1 py-3 px-4 max-w-xs lg:max-w-md
              flex flex-col justify-center rounded-xl w-full ${index % 3 === 0 ? '' : 'bg-lightpink'}`}>
              <div className="relative md:w-full ">
                <img src={obj.image.desktop} alt={`${obj.name} desktop`} className='block h-auto w-full object-contain rounded-md'/>
              </div>
    
              <div className='md:w-full md:gap-y-3 flex flex-col justify-evenly gap-y-2'>
                <h3 className='md:pt-4'>{obj.name}</h3>
                <p className='lg:text-lg'>{obj.overview}</p>
                <Link className='flex flex-row items-center justify-center bg-theme text-white max-w-32 py-1 px-3 rounded-full mx-auto md:py-2 md:px-6 md:max-w-80 md:text-lg button_slide
                focus:ring-4 focus:ring-theme focus:bg-white focus:text-theme' to={`/work/${obj.id}`}>
                View Work 
                </Link>
              </div>
            </article>
          </div>
          ))}
        </div>
      ):(
        // mobile
        <div className='flex flex-wrap justify-center md:mx-auto md:my-0'>
        {works.map((obj, index) => (
          <div key={obj.id}>
            <article  data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}  
              className={`single-project gap-1 py-3 px-4 max-w-sm 
              flex flex-col justify-center rounded-xl ${index % 2 === 0 ? '' : 'bg-lightpink '}`}
              >

            
              <div className="relative md:w-full ">
                <img src={obj.image.desktop} alt={`${obj.name} desktop`} className='block h-auto w-full object-contain rounded-md'/>
              </div>

              <div className='md:w-full md:gap-y-3 flex flex-col justify-evenly gap-y-2'>
                <h3 className='md:pt-4'>{obj.name}</h3>
                <p className='md:text-lg'>{obj.overview}</p>
                <Link className='flex flex-row items-center justify-center bg-theme text-white max-w-32 py-1 px-3 rounded-full mx-auto md:py-2 md:px-6 md:max-w-80 md:text-lg button_slide
                focus:ring-4 focus:ring-theme focus:bg-white focus:text-theme' to={`/work/${obj.id}`}>
                View Work 
                </Link>
              </div>
            </article>
          </div>
        ))}
        </div>
      )}
    </div>}
    
  
    </div>
    
  )
}

export default WorkList