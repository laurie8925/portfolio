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
    <div>WorkDetail
        {selectedWork && (
        <div>
          <article>
            <div className="relative md:w-1/2">
              <img src={selectedWork.image.desktop} alt={`${selectedWork.name} desktop`} className='block h-auto w-full object-contain rounded-md'/>
            </div>

            <div>
              <h2>{selectedWork.name}</h2>
              <p>{selectedWork.detailOverview}</p>
            </div>
          </article>

          <div className='work-feature'>
            {selectedWork.tech
            .map((tech, index) => (
              <span key={index}> {tech}</span>))
            .reduce((prev, curr) => [prev, ', ', curr])
            }

          </div>
        </div>
        

        
      )}
    </div>
  )
}

export default WorkDetail