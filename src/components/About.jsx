// About.jsx
import {useEffect} from 'react';

//animation 
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {

      //aos 
      useEffect(() => {
        AOS.init();
      }, [])

  return (
    <div className='about-section flex flex-col items-center justify-center h-screen  overflow-hidden '>
      <article className='max-w-sm md:max-w-5xl text-pretty md:text-lg lg:text-xl' data-aos="fade-up" data-aos-duration="800">
        <p className='font-semibold ' >
        Hello &#128075; Welcome to my corner of the web! <br/>
        My name is Laurie, and I’m a Front End Web Developer and UX Designer. </p>
        
        <br/>

        <p > I recently graduated from BCIT’s Front End Web Development Program after I finished my Bachelor of Science Degree from University of Toronto. </p> <br/>

        <p >I enjoy the idea of being capable of turning user-friendly webpages and aesthetic designs into reality. I am fascinated by the interaction between technology and creativity. The process of bringing concepts and ideas to life, shaping them into interactive and visually appealing websites, motivates me to continue doing what I love. </p> <br/>

          <p > Aside from coding, I enjoy going on walks, trying out local food and dessert, on a journey to find all the good Matcha place, and look at cat memes. </p> 
      </article>
      
    </div>
  );
}

export default About;