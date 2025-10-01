import { useEffect } from "react";

import { InView } from "react-intersection-observer";

import { Skills } from "./Skills";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      disable: function () {
        var maxHeight = 700;
        return window.innerHeight < maxHeight;
      },
    });
  }, []);

  return (
    <section
      className="about flex flex-col items-center justify-center  overflow-hidden py-20 md:py-40"
      id="about"
    >
      <InView as="div" onChange={(inView, entry) => {}}>
        {InView ? (
          <article className="max-w-sm md:max-w-5xl text-pretty md:text-lg lg:text-xl text-textprimary">
            <p className="font-semibold" data-aos="fade-up">
              Hello 👋 Welcome to my corner of the web! <br />
              My name is Laurie, and I’m a Fullstack, Frontend Developer with
              passion for design!
            </p>

            <br />

            <p data-aos="fade-up">
              I’m a recent graduate from the University of Toronto with a
              Bachelor of Science in Molecular Biology and minors in Psychology
              and Environmental Science. During my studies, I discovered a
              passion for technology and decided to give it a try by completing
              BrainStation’s Software Engineering Bootcamp and BCIT’s Front-End
              Web Development Program. Now, I’m excited to combine my science
              background with my new tech skills to create innovative and
              impactful digital applications.
            </p>

            <br />

            <p data-aos="fade-up">
              I’m especially passionate about designing interfaces that feel
              intuitive and building accessible, easy-to-use applications. The
              process of bringing concepts to life—transforming ideas into
              interactive, visually appealing websites that people can use and
              enjoy—motivates me to keep learning and creating.
            </p>

            <br />

            <p data-aos="fade-up">
              Aside from coding, I enjoy going on walks, attending networking
              events to meet new people, discovering local hidden gems, and
              exploring all the best Matcha spots 🍵
            </p>

            <Skills />
          </article>
        ) : (
          ""
        )}
      </InView>
    </section>
  );
};

export default About;
