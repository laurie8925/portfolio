import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { tabletWidth } from "../global/variables"; 
import useWindowDimensions from '../components/ScreenSize'

import pinkstar from "../medias/pinkstar.svg"
import  Loading  from '../components/Loading';

//animation 
import AOS from 'aos';
import 'aos/dist/aos.css';

const WorkDetail = ({works}) => {
  const { id } = useParams(); // Get the id from the URL params 
  const [selectedWork, setSelectedWork] = useState(null); 
  const [isLoaded, setLoadStatus] = useState(false);
  const [suggestWork, setSuggestWork] = useState(null);
  const [isSuggestWorkLoaded, setSuggestWorkLoadStatus] = useState(false);

  useEffect(() => {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
     });
      const singleWork = works.find(singleWork => singleWork.id === id);
      
      if (!singleWork) {
          console.error("Single work not found");
          return;
      }
      
      setTimeout(() => {
          setSelectedWork(singleWork);
          setLoadStatus(true);
          
      }, 1000);

      // Find the index of the selected work in the works array
      const selectedIndex = works.findIndex(work => work.id === id);

      // Set the suggested work to the next index or the first one if there are none
      const nextIndex = (selectedIndex + 1) % works.length; 
      // Get the next index or loop back to the first one 
      // if nextIndex exceed the array length, then itll wrap around to the beginneing of the array 
      setSuggestWork(works[nextIndex]);
      setSuggestWorkLoadStatus(false); // Reset loading state
      
      // Simulate loading of suggested work
      setTimeout(() => {
          setSuggestWorkLoadStatus(true);
      }, 1000);
      
  }, [id, works]);

    const dimensions = useWindowDimensions();
    const isTablet = dimensions.width > tabletWidth;

    //aos 
    useEffect(() => {
      AOS.init({ 
          duration: 2000, 
      });
  }, []);

  return (
    <div>
      {!isLoaded ? 
      ( // not loaded
      <section className='loading'>
        <Loading />
      </section>

      ) : 
      //loaded
      <div>
  
        {isTablet ? 
        (// tablet & desktop
        <div className="w-full z-0" style={{ backgroundColor: selectedWork.theme }}>
          <article className='flex flex-col flex-nowrap justify-between gap-1 py-8 pt-36 md:flex-row md:gap-x-5 md:max-w-5xl  md:mx-auto md:my-0' data-aos="fade-up">

            <div className="relative md:w-1/2">
              <img src={selectedWork.image.hero} alt={`${selectedWork.name} hero image`} className='block h-auto w-full object-contain rounded-md'/>
            </div>

            <div className='tools md:w-1/2 flex flex-col justify-evenly py-2'>
              <h2 className='text-center py-4 font-semibold'>{selectedWork.name}</h2>

              <p className='py-2'>{selectedWork.overview}</p>

              <div className='work-overview pb-3 pt-2'>
                <p >🛠️ Tools: {selectedWork.tech.join(', ')} </p>
              </div>

              <div>
                <ul className='flex flex-wrap justify-evenly w-full gap-4 items-center'>
                  {selectedWork.liveLink ? 
                    <li><a className='
                      flex flex-row items-center justify-center bg-theme text-white rounded-full
                      py-1 px-3 
                      max-w-32  mx-auto md:py-2 md:px-6 md:max-w-80 md:text-lg 
                      button_slide
                      focus:ring-4 focus:ring-theme focus:bg-white focus:text-theme' href={selectedWork.liveLink}>
                      Live Site
                    </a></li>
                    : 
                    ""
                  }
  
                  {selectedWork.repoLink ? 
                    <li><a className='
                    flex flex-row items-center justify-center bg-theme text-white rounded-full
                    py-1 px-3 
                    max-w-32  mx-auto md:py-2 md:px-6 md:max-w-80 md:text-lg 
                    button_slide
                    focus:ring-4 focus:ring-theme focus:bg-white focus:text-theme' href={selectedWork.repoLink}>Github
                    </a></li>
                    : 
                    ""
                  }
                
                </ul>
              </div>

            </div>

          </article>
        </div>
        )
        : 
        ( // mobile 
        <article className='flex flex-col flex-nowrap justify-between gap-1 py-4 pt-10 md:flex-row md:gap-x-5 md:max-w-5xl'>

          
          <h2 className='text-center py-4 font-semibold'>{selectedWork.name}</h2>
          <div className="relative md:w-1/2">
            <img src={selectedWork.image.hero} alt={`${selectedWork.name} hero image`} className='block h-auto w-full object-contain rounded-md'/>
          </div>

          <div className='tools md:w-1/2 flex flex-col justify-evenly py-2'>
            
            <p className='py-2 px-5 md:px-0'>{selectedWork.overview}</p>

            <div className='work-overview px-5 pb-3 pt-2'>
              <p >🛠️ Tools: {selectedWork.tech.join(', ')} </p>
            </div>

            <div>
              <ul className='flex flex-wrap justify-evenly w-full gap-4 items-center'>
                {selectedWork.liveLink ?  
                  <li><a className='
                  flex flex-row items-center justify-center bg-theme text-white rounded-full
                  py-1 px-3 
                  max-w-32  mx-auto md:py-2 md:px-6 md:max-w-80 md:text-lg 
                  button_slide
                  focus:ring-4 focus:ring-theme focus:bg-white focus:text-theme' href={selectedWork.liveLink}>Live Site</a></li>
                  : 
                  ""
                } 

                {selectedWork.repoLink ? 
                  <li><a className='
                  flex flex-row items-center justify-center bg-theme text-white rounded-full
                  py-1 px-3 
                  max-w-32  mx-auto md:py-2 md:px-6 md:max-w-80 md:text-lg 
                  button_slide
                  focus:ring-4 focus:ring-theme focus:bg-white focus:text-theme' href={selectedWork.repoLink}>Github</a></li>
                  : 
                  ""
                }
                
              </ul>
            </div>

            
          </div>
        </article>
        )
        }

        {/* content */}
        <div className='md:max-w-5xl md:mx-auto md:my-0 pt-8 px-5'>

          {/* overview */}
          <p data-aos="fade-up">{selectedWork.detailOverview}</p>

          {/* feature */}
          {selectedWork.featureExplain ? 
          <div className="work-features pb-3" data-aos="fade-up">
            <h3 className='text-center py-4 '>Feature</h3>

            {/* feature image */}
            {selectedWork.featureImg ? 
            <img src={selectedWork.featureImg} alt={`${selectedWork.name} feature highlight`}className='block h-auto w-full object-contain rounded-lg  md:mx-auto md:my-0'/> : "" }
          
            {/* feature text */}
            {selectedWork.featureExplain && selectedWork.featureExplain.split('\n').map((paragraph, index) => (
              <p key={index} className='my-2'>{paragraph}</p>
            ))}

            {/* feature code */}
            {selectedWork.codeSnippet ? 
            <img src={selectedWork.codeSnippet} alt={`${selectedWork.name} feature code snippet`}className='block h-auto w-full object-contain rounded-md md:w-3/4 md:mx-auto md:my-0'/> : "" }
            
          </div> : "" }
        
          {/* design */}
          {selectedWork.designExplain ?
          <div className="work-design pb-3" data-aos="fade-up">

            <h3 className='text-center py-4 '>Design Insight</h3>
            
            {/* design img */}
            {selectedWork.designImg ? 
            <img src={selectedWork.designImg} alt={`${selectedWork.name} design highlight`}className='block h-auto w-full object-contain rounded-lg  md:mx-auto md:my-0'/> : "" }
            
            {/* design text */}
            {selectedWork.designExplain && selectedWork.designExplain.split('\n').map((paragraph, index) => (
            <p key={index} className='my-2'>{paragraph}</p>
            ))}
          </div> : "" }

          {/* takeaway */}
          <div className="takeaway" data-aos="fade-up">
            <h3 className='text-center py-4 '>Takeaways</h3>
            <p>{selectedWork.takeawayOpening}</p>
            
            <ul className='list-disc list-inside py-3'>
              {selectedWork.takeawayList.map((takeaway, index) => (
                <li key={index}>{takeaway}</li>
              ))}
            </ul>
            
            {selectedWork.takeawayEnding && selectedWork.takeawayEnding.split('\n').map((paragraph, index) => (
            <p key={index} className='my-2'>{paragraph}</p>
            ))}
            
          </div>
          
        </div>  {/* end of content */}

        
       {/* suggested work */}
        <div className='px-5 md:px-0' data-aos="fade-up">         
          {!isSuggestWorkLoaded ? (
          // Loading state for suggested work
          <section className='loading'>
              <Loading />
          </section>
          ) : (
          // Loaded state for suggested work
          <div className='px-5 md:py-5 md:px-0 flex flex-col justify-center items-center'>
            <h4 className='text-lg text-center py-2 font-semibold'>Visit my other work</h4>
            <article className='single-project gap-y-3 py-3 px-4 max-w-56 
            flex flex-col justify-center rounded-xl bg-lightpink'>
              <div className="relative md:w-full ">
                  <img src={suggestWork.image.desktop} alt={`${suggestWork.name} desktop`} className='block h-auto w-full object-contain rounded-md'/>
                </div>
              <Link to={`/work/${suggestWork.id}`}
                className='flex flex-row items-center justify-center bg-theme text-white text-sm
                max-w-52 py-1 px-3 rounded-full mx-auto md:py-2 md:px-6 md:max-w-80 md:text-lg button_slide
                focus:ring-4 focus:ring-theme focus:bg-white focus:text-theme'>{suggestWork.name}
              </Link>
            </article>
          </div>
          )}
        </div> {/* end of suggested work */}

      </div> 
      }  {/* end of loaded */}
      
    </div>
  )
}

export default WorkDetail