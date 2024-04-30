import {useState, useEffect} from 'react'

import skills from "../global/techstack.json"

export const Skills = () => {

    const[skilslData, setSkillskData] = useState(null); 

    useEffect(() => { 
        setSkillskData(skills);       
    },[]); 

  return (
    <div>Skills
        {skills.map((skills, index) => (
            <div key={index}>
                <p>{skills.title}</p>
            </div>
        ))}
    </div>
  )
}
