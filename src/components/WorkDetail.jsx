import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { tabletWidth } from "../global/variables"; 
import useWindowDimensions from '../components/ScreenSize'

import pinkstar from "../medias/pinkstar.svg"
import  Loading  from '../components/Loading';

const WorkDetail = ({works}) => {
    const { id } = useParams(); //get the id from the url params 
    const [selectedWork, setSelectedWork] = useState(null); 
    const [isLoaded, setLoadStatus] = useState(false)

    useEffect(() => {
      const singleWork = works.find(singleWork => singleWork.id === id);
      
      if (!singleWork) {
        console.error("Single work not found");
        return;
      }
    
      setTimeout(() => {
        setSelectedWork(singleWork);
        setLoadStatus(true);
    }, 1000);
      
    }, [id, works]);

    const dimensions = useWindowDimensions();
    const isTablet = dimensions.width > tabletWidth;

  return (
    <div>
      {!isLoaded ? (
        <section className='loading'>
        
        <Loading />
      </section>
        
          
       
      ) : 
      <div>
  
            {isTablet ? (
              // tablet & desktop
            <div className="w-full" style={{ backgroundColor: selectedWork.theme }}>
              <article className='flex flex-col flex-nowrap justify-between gap-1 py-8 pt-36 md:flex-row md:gap-x-5 md:max-w-5xl  md:mx-auto md:my-0'>
  
            <div className="relative md:w-1/2">
              <img src={selectedWork.image.hero} alt={`${selectedWork.name} hero image`} className='block h-auto w-full object-contain rounded-md'/>
            </div>
  
            <div className='tools md:w-1/2 flex flex-col justify-evenly py-2'>
            <h2 className='text-center py-4 font-semibold'>{selectedWork.name}</h2>
              <p className='py-2'>{selectedWork.overview}</p>
              <div className='work-overview pb-3 pt-2'>
              <p >🛠️ Tools: {selectedWork.tech.join(', ')} </p>
               {/* {selectedWork.tech
              .map((tech, index) => (
                <span key={index}> {tech}</span>))
              .reduce((prev, curr) => [prev, ', ', curr])
              }
              </p> */}
             
              
            </div>
  
              <div>
                <ul className='flex flex-wrap justify-evenly w-full gap-4 items-center'>
                  {selectedWork.repoLink ? 
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
            </div>
            )
            : (
              // mobile 
            <article className='flex flex-col flex-nowrap justify-between gap-1 py-4 pt-10 md:flex-row md:gap-x-5 md:max-w-5xl'>
  
              
              <h2 className='text-center py-4 font-semibold'>{selectedWork.name}</h2>
              <div className="relative md:w-1/2">
                <img src={selectedWork.image.hero} alt={`${selectedWork.name} hero image`} className='block h-auto w-full object-contain rounded-md'/>
              </div>
  
              <div className='tools md:w-1/2 flex flex-col justify-evenly py-2'>
                
                <p className='py-2'>{selectedWork.overview}</p>
                <div>
                  <ul className='flex flex-wrap justify-evenly w-full gap-4 items-center'>
                    {selectedWork.repoLink ? 
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
           
  
            {/* <div className='work-overview pb-3 pt-2'>
              <h4 className='text-2xl text-center'>Tools</h4>
              {selectedWork.tech
              .map((tech, index) => (
                <span key={index}> {tech}</span>))
              .reduce((prev, curr) => [prev, ', ', curr])
              }
              
            </div> */}
  
            <div className='md:max-w-5xl md:mx-auto md:my-0 pt-8 px-5'>
              <p>{selectedWork.detailOverview}</p>
              {selectedWork.featureExplain ? 
              <div className="work-features pb-3">
                <h3 className='text-center py-4 '>Feature</h3>
                {selectedWork.featureImg ? 
                <img src={selectedWork.featureImg} alt={`${selectedWork.name} feature highlight`}className='block h-auto w-full object-contain rounded-lg  md:mx-auto md:my-0'/> : "" }
              
              {selectedWork.featureExplain && selectedWork.featureExplain.split('\n').map((paragraph, index) => (
                <p key={index} className='my-2'>{paragraph}</p>
                ))}
              
                {selectedWork.codeSnippet ? 
                <img src={selectedWork.codeSnippet} alt={`${selectedWork.name} feature code snippet`}className='block h-auto w-full object-contain rounded-md md:w-3/4 md:mx-auto md:my-0'/> : "" }
                
              </div> : ""
            }
           
  
            {selectedWork.designExplain ?
            <div className="work-design pb-3">
              
              <h3 className='text-center py-4 '>Design Insight</h3>
  
              {selectedWork.designImg ? 
              <img src={selectedWork.designImg} alt={`${selectedWork.name} design highlight`}className='block h-auto w-full object-contain rounded-lg  md:mx-auto md:my-0'/> : "" }
              
              {selectedWork.designExplain && selectedWork.designExplain.split('\n').map((paragraph, index) => (
              <p key={index} className='my-2'>{paragraph}</p>
              ))}
            </div> : " " }
  
            <div className="takeaway">
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
            </div> 
            
  
          </div>}
       
    </div>
  )
}

export default WorkDetail