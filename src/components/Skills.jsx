import {useState, useEffect} from 'react'

import skills from "../global/techstack.json"
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Skills = () => {

    const[skilslData, setSkillskData] = useState(null); 
    const [showing, setShowing] = useState(false)
    const onClick = () => (showing) ? setShowing(false) : setShowing(true)
    

    useEffect(() => { 
        setSkillskData(skills);       
    },[]); 

    useEffect(() => {
        AOS.init({
            duration: 1000, 
        });
    }, []);

  return (
    <div className='pt-10'>
    <div data-aos="fade-up" >
       
            {showing ?
            <div>
             <button onClick={onClick} className='plus-icon flex items-center justify-center pb-5 cross'>
            
             <h3 className='font-semibold text-theme' >Click to look at some of the Tools I use!</h3>
                 <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plus pl-2" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                 <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                 <path d="M12 5l0 14" className='stroke-theme'/>
                 <path d="M5 12l14 0" className='stroke-theme'/>
                 </svg>
             </button>
             </div>
             : 
             <button onClick={onClick} className='plus-icon flex items-center justify-center pb-5 plus'>
            
             <h3 className='font-semibold' >Click to look at some of the Tools I use!</h3>
                 <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plus pl-2" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                 <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                 <path d="M12 5l0 14" />
                 <path d="M5 12l14 0" />
                 </svg>
             </button>
             }
            
        
       
        { showing ? 
        <div data-aos="fade-down ">
            {/* Development Skills */}
            <div className='w-full pb-5' >
                <h3>Development</h3>
                <div className='flex flex-wrap flex-row gap-2 pt-2 w-full'>
                    {skills.map((skill, index) => (
                        skill.type === "dev" && (
                            <div key={index} className='flex flex-wrap flex-row items-center w-full h-auto skill-card'>
                                <img src={`/medias/logos/${skill.id}-logo.png`} alt={skill.title} className='w-8 h-8 md:w-16 md:h-16 block object-contain p-2'/>
                                <p className='text-sm'>{skill.title}</p>
                            </div>
                        )
                    ))}
                </div>
            </div>

            {/* Design Skills */}
            <div className='w-full'  >
                <h3>Design</h3>
                <div className='flex flex-wrap flex-row gap-5 pt-2 w-full'>
                    {skills.map((skill, index) => (
                        skill.type === "design" && (
                            <div key={index} className='flex flex-wrap flex-row items-center w-full h-auto skill-card'>
                                <img src={`/medias/logos/${skill.id}-logo.png`} alt={skill.title} className='w-8 h-8 md:w-16 md:h-16 block object-contain p-2'/>
                                <p className='text-sm'>{skill.title}</p>
                            </div>
                        )
                    ))}
                </div>
            </div>
        </div>
        : null
        }
     
    </div>
</div>

    )
}
