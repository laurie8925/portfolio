import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import work from '../global/work.json'

//inview
import { InView } from 'react-intersection-observer';

//animation 
import AOS from 'aos';
import 'aos/dist/aos.css';


const Feature = () => {
    const[workData, setWorkData] = useState(null); 

    useEffect(() => { 
      setWorkData(work);       
    },[]); 

    // function to check feature 
    const filterFeature = () => { 
        if (workData) {
            return workData.filter(obj => obj.hasOwnProperty('feature'));
            }
            return [];
    };

    //aos 
    useEffect(() => {
      AOS.init();
    }, [])
    
  return (
    <section className='feature-section flex flex-col items-center justify-center overflow-hidden' id="features">
        <h2 className=' py-3 md:py-4 lg:py-10'>Feature</h2>
        
        <div className='grid gap-4'>
          {filterFeature().map((obj, index) => (
            <div key={obj.id}>
              <InView as="div" onChange={(inView, entry) => console.log('Inview:', inView)}>
                {InView ? (
                  <article
                    
                    className={`single-project flex flex-col flex-nowrap justify-between gap-1 py-2 px-4 max-w-sm md:flex-row md:gap-x-5 md:max-w-5xl ${index % 2 === 0 ? '' : 'rounded-xl bg-lightpink'}`}
                  >
                    <div className="relative md:w-1/2">
                      <img src={obj.image.desktop} alt={`${obj.name} desktop`} className='block h-auto w-full object-contain rounded-md'/>
                    </div>

                    <div className='md:w-1/2 md:flex md:flex-col md:justify-evenly'>
                      <h3 >{obj.name}</h3>
                      <p className='md:text-lg'>{obj.overview}</p>
                      <Link className='flex flex-row items-center justify-center bg-theme text-white max-w-32 py-1 px-3 rounded-full mx-auto md:py-2 md:px-6 md:max-w-80 md:text-lg ' to={`/work/${obj.id}`}>
                        View Work 
                      </Link>
                    </div>
                  </article>
                ) : ''}
              </InView>
            </div>
          ))}
        </div>

      
    </section>
  )
}; 

export default Feature 