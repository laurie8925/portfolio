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

      
      <div>
        <Header />
          <main className={isTablet ? 'md:mx-auto md:my-0 pb-4' : ''}>
            
            <WorkDetail works={work}/> 
          </main>
            
          <Footer /> 
      </div>
      
        
      
      
        
    </>
  )
}

export default WorkDetailPage; 