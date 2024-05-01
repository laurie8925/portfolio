import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const WorkDetail = ({works}) => {
    const { id } = useParams(); //get the id from the url params 
    const [selectedWork, setSelectedWork] = useState(null); 

    useEffect(()=> { 
        const singleWork = works.find(singleWork => singleWork.id === id); 
        setSelectedWork(singleWork);
    }, [id, works]); 

  return (
    <div>
        {selectedWork && (
        <div>
          <article>
            <div className="relative md:w-1/2">
              <img src={selectedWork.image.desktop} alt={`${selectedWork.name} desktop`} className='block h-auto w-full object-contain rounded-md'/>
            </div>

            <div className='tools'>
              <h2>{selectedWork.name}</h2>
              <p>{selectedWork.overview}</p>
              <div>
                <ul>
                  {selectedWork.repoLink ? 
                      <li><a href={selectedWork.liveLink}>Live Site</a></li>
                      : 
                      ""
                  }

                  {selectedWork.repoLink ? 
                    <li><a href={selectedWork.repoLink}>Github</a></li>
                    : 
                    ""
                  }
                 
                </ul>
              </div>

              
            </div>
          </article>

          <div className='work-overview'>
            <h4>Tools</h4>
            {selectedWork.tech
            .map((tech, index) => (
              <span key={index}> {tech}</span>))
            .reduce((prev, curr) => [prev, ', ', curr])
            }
            <p>{selectedWork.detailOverview}</p>
          </div>

          <div className="work-features">
            <h3>Feature</h3>
            <img src={selectedWork.featureImg} alt={`${selectedWork.name} feature highlight`}className='block h-auto w-full object-contain rounded-md md:w-1/2'/>
            <p>{selectedWork.featureExplain}</p>
            <img src={selectedWork.codeSnippet} alt={selectedWork.codeSnippetAlt} className='block h-auto w-full object-contain rounded-md md:w-1/2'/>
          </div>

          <div className="work-design">
            <h3>Design Insight</h3>
            {selectedWork.designImg ? 
            <img src={selectedWork.designImg} alt={`${selectedWork.name} design highlight`}className='block h-auto w-full object-contain rounded-md md:w-1/2'/>
            :
            ""
            }
            
          <p>{selectedWork.designExplain}</p>
          </div>

          <div className="takeaway">
            <h3>Takeaways</h3>
            <p>{selectedWork.takeawayOpening}</p>
            <ul className='list-disc list-inside'>
              {selectedWork.takeawayList.map((takeaway, index) => (
                <li key={index}>{takeaway}</li>
              ))}
            </ul>
            <p>{selectedWork.takeawayEnding}</p>
          </div>

        </div>
        

        
      )}
    </div>
  )
}

export default WorkDetail