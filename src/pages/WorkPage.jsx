import React, {useEffect, useState} from 'react'

//components
import Header from '../components/Header'; 
import Footer from '../components/Footer'; 

import WorkList from '../components/WorkList'; 
import  Loading  from '../components/Loading';

import { tabletWidth } from "../global/variables"; 
import useWindowDimensions from '../components/ScreenSize';


//data
import work from '../global/work.json'

function WorkPage() {

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
        <h1>Work Page</h1>
        <WorkList works={work}/> 
      <Footer />
    </div>
    :
    <div>
      <Header />
      <h1>Work Page</h1>
      <WorkList works={work}/> 
    </div>
    }
    </>
  )
}

export default WorkPage