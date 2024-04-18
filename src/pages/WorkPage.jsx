import React, {useEffect, useState} from 'react'

//components
import Header from '../components/Header'; 
import Footer from '../components/Footer'; 

import WorkList from '../components/WorkList'; 

//data
import work from '../global/work.json'

function WorkPage() {

  const[workData, setWorkData] = useState(null); 

    useEffect(() => { 
      setWorkData(work);  
    },[]); 

  return (
    <>
    <Header />
      <h1>Work Page</h1>
    <WorkList works={work}/> 
    <Footer />
    </>
  )
}

export default WorkPage