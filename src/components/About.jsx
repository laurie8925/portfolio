import { useEffect } from 'react';

import { InView } from 'react-intersection-observer';

import { Skills } from './Skills';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    useEffect(() => {
        AOS.init({
            duration: 800, // Set the duration of AOS animations to 800ms
        });
    }, []);

    return (
        <section className='about flex flex-col items-center justify-center h-screen overflow-hidden' id="about"
       >
            <InView as="div"oonChange={(inView, entry) => {}}>
                {InView ? (
                     <article className='max-w-sm md:max-w-5xl text-pretty md:text-lg lg:text-xl' >
                

                <p className='font-semibold' data-aos="fade-up"  data-aos-duration="20000">
                    Hello 👋 Welcome to my corner of the web! <br/>
                    My name is Laurie, and I’m a Front End Web Developer and UX Designer.
                </p>

                <br/>

                <p data-aos="fade-up"  data-aos-duration="20000">
                    I recently graduated from BCIT’s Front End Web Development Program after I finished my Bachelor of Science Degree from University of Toronto.
                </p>

                <br/>

                <p data-aos="fade-up"  data-aos-duration="20000">
                    I enjoy the idea of being capable of turning user-friendly webpages and aesthetic designs into reality. I am fascinated by the interaction between technology and creativity. The process of bringing concepts and ideas to life, shaping them into interactive and visually appealing websites, motivates me to continue doing what I love.
                </p>

                <br/>

                <p data-aos="fade-up"  data-aos-duration="20000">
                    Aside from coding, I enjoy going on walks, trying out local food and dessert, on a journey to find all the good Matcha place, and look at cat memes.
                </p>
            </article>
            
                ) : ""}
           
            </InView>
        </section>
    );
}

export default About;
