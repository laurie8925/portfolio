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
          <h2>{selectedWork.name}</h2>
          <p>{selectedWork.overview}</p>
        </div>
      )}
    </div>
  )
}

export default WorkDetail