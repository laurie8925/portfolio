import React, {useState, useEffect} from 'react' 
import Header from '../components/Header'; 
import WorkDetail from '../components/WorkDetail';
import Footer from '../components/Footer'; 
import work from '../global/work.json'

import { tabletWidth } from "../global/variables"; 
import useWindowDimensions from '../components/ScreenSize';


function WorkDetailPage() {
  const[workData, setWorkData] = useState(null); 

    useEffect(() => { 
      setWorkData(work);  
    },[]); 

    const dimensions = useWindowDimensions();
    const isTablet = dimensions.width > tabletWidth;

  return (
    <>

      {isTablet ? 
      <div>
        <Header />
          <main className='px-5'>
            <h1>Work Detail Page</h1>
            <WorkDetail works={work}/> 
          </main>
            
          <Footer /> 
      </div>
      
        
        :
        <div>
        <Header />
          <main className='footer-padding px-5'>
            <h1>Work Detail Page</h1>
            <WorkDetail works={work}/> 
          </main>
            
          
      </div>
      }
      
        
    </>
  )
}

export default WorkDetailPage; 