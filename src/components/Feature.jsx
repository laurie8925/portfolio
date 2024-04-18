import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import work from '../global/work.json'


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

    
  return (
    <section className='feature-section flex flex-col items-center justify-center overflow-hidden'>
        <h1>Feature</h1>
        
        <div>
          {filterFeature().map((obj) => (
            <div key={obj.id} className='flex flex-col items-center justify-center'>
              <article className='single-project flex flex-col items-center justify-center h-80 w-80 border-orange-400'> 
                <div className="feature-img">
                  <img src={obj.image.desktop} alt={`${obj.name} desktop`} className='w-48 h-auto'/>
                </div>

                <p>{obj.name}</p>
                <p>{obj.overview}</p>
                <Link to={`/work/${obj.id}`}>{obj.name} link </Link>
              </article>
              
            </div>
          ))}
        </div>
      
    </section>
  )
}; 

export default Feature 