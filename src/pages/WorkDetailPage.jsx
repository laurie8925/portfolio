import React, {useState, useEffect} from 'react' 
import Header from '../components/Header'; 
import WorkDetail from '../components/WorkDetail';
import Footer from '../components/Footer'; 
import work from '../global/work.json'




function WorkDetailPage() {
  const[workData, setWorkData] = useState(null); 

    useEffect(() => { 
      setWorkData(work);  
    },[]); 

  return (
    <div>
      <Header />
      <main>
        <h1>Work Detail Page</h1>
        <WorkDetail works={work}/> 
      </main>
        
      <Footer /> 
    </div>
  )
}

export default WorkDetailPage; 