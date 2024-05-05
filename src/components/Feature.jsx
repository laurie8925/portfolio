import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import work from '../global/work.json'

//inview
import { InView } from 'react-intersection-observer';

//animation 
import AOS from 'aos';
import 'aos/dist/aos.css';

import  Loading  from '../components/Loading';



const Feature = () => {
    const[workData, setWorkData] = useState(null); 
    const [isLoaded, setLoadStatus] = useState(false)

    useEffect(() => {
      let url = "/src/global/work.json";
      const fetchData = async () => {
        try {
          const res = await fetch(url);
          const workData = await res.json();
          setWorkData(workData);
          console.log(workData);
          if (workData) {
            setTimeout(() => {
              setLoadStatus(true);
            }, 1000);
            console.log("loaded");
          } else {
            console.log("not loaded");
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchData();
    }, []);
      
        // if(setWorkData(workData)){ 
        //   // setLoadStatus(true);
        //   console.log("loaded");
        // }else{ 
        //   // setLoadStatus(false); 
        //   console.log("not loaded");
        // }; 
        // console.log(isLoaded)
           


    // function to check feature 
    const filterFeature = () => { 
        if (workData) {
            return workData.filter(obj => obj.hasOwnProperty('feature'));
            }
            return [work];
    };

    //aos 
    useEffect(() => {
      AOS.init();
    }, [])
    
  return (
    <div className='pb-5'>
      {isLoaded ? 
        <section className='feature-section flex flex-col items-center justify-center overflow-hidden' id="features">
        <h2 className=' py-3 md:py-4 lg:py-10'>Feature</h2>
        
        <div className='grid gap-4'>
          {filterFeature().map((obj, index) => (
            <div key={obj.id}>
              <InView as="div" onChange={(inView, entry) => {}}>
                {InView ? (
                 
                  <article  data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
                    
                    className={`single-project flex flex-col flex-nowrap justify-between gap-1 py-3 px-4 max-w-sm md:flex-row md:gap-x-5 md:max-w-5xl ${index % 2 === 0 ? '' : 'rounded-xl bg-lightpink'}`}
                  >

                    
                    <div className="relative md:w-1/2 md:p-2">
                      <img src={obj.image.desktop} alt={`${obj.name} desktop`} className='block h-auto w-full object-contain rounded-md'/>
                    </div>

                    <div className='md:w-1/2 flex flex-col justify-evenly gap-y-2'>
                      <h3 >{obj.name}</h3>
                      <p className='md:text-lg'>{obj.overview}</p>
                      <Link className='flex flex-row items-center justify-center bg-theme text-white max-w-32 py-1 px-3 rounded-full mx-auto md:py-2 md:px-6 md:max-w-80 md:text-lg button_slide
                      focus:ring-4 focus:ring-theme focus:bg-white focus:text-theme' to={`/work/${obj.id}`}>
                      View Work 
                      </Link>
                    </div>
                  </article>
                ) : ''}
              </InView>
            </div>
          ))}
        </div>

        <Link className='flex flex-row items-center justify-center bg-theme text-white text-sm mt-5 md:mt-8 md:mb-2
        max-w-52 py-2 px-3 rounded-full mx-auto md:py-2 md:px-6 md:max-w-80 md:text-lg button_slide
        focus:ring-4 focus:ring-theme focus:bg-white focus:text-theme' 
        to='/work'
        data-aos="fade-right"
        >
        View All Work →
        </Link>
      
    </section>

    : 
    <Loading />
    
    }
    </div>

  )
}; 

export default Feature 