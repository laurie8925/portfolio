import { useEffect } from 'react';

import { InView } from 'react-intersection-observer';

import { Skills } from './Skills';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    useEffect(() => {
        AOS.init({ 
            duration: 1000, 
            disable: function() {
                var maxHeight = 700;
                return window.innerHeight < maxHeight;
              }
        });
    }, []);

    return (
        <section className='about flex flex-col items-center justify-center  overflow-hidden py-20 md:py-40' id="about">
            <InView as="div"oonChange={(inView, entry) => {}}>
                {InView ? (
                <article className='max-w-sm md:max-w-5xl text-pretty md:text-lg lg:text-xl' >
                

                <p className='font-semibold' data-aos="fade-up"  >
                    Hello 👋 Welcome to my corner of the web! <br/>
                    My name is Laurie, and I’m a Front End Web Developer and UX Designer.
                </p>

                <br/>

                <p data-aos="fade-up"  >
                    I recently graduated from BCIT’s Front End Web Development Program after I finished my Bachelor of Science Degree from University of Toronto.
                </p>

                <br/>

                <p data-aos="fade-up"  >
                    I enjoy the idea of being capable of turning user-friendly webpages and aesthetic designs into reality. I am fascinated by the interaction between technology and creativity. The process of bringing concepts and ideas to life, shaping them into interactive and visually appealing websites, motivates me to continue doing what I love.
                </p>

                <br/>

                <p data-aos="fade-up"  >
                    Aside from coding, I enjoy going on walks, trying out local food and dessert 🍰, on a journey to find all the good Matcha place 🍵, and look at cat memes😹.
                </p>

                <Skills />
            </article>
            
                ) : ""}
           
            </InView>
        </section>
    );
}

export default About;
