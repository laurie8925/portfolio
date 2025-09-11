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
              passion for technology and decided to dive give it try by
              completing BrainStation’s Software Engineering Bootcamp and BCIT’s
              Front-End Web Development Program. Now, I’m excited to bring
              together my science background and new tech skills to build
              creative and impactful digital apps.
            </p>

            <br />

            <p data-aos="fade-up">
              I enjoy turning user-friendly webpages and aesthetic designs into
              reality, and I am fascinated by the interaction between technology
              and creativity The process of bringing concepts and ideas to life,
              shaping them into interactive and visually appealing websites,
              motivates me to continue doing what I love.
            </p>

            <br />

            <p data-aos="fade-up">
              Aside from coding, I enjoy going on walks, going to networking
              events to meet new people in the field, trying out local food and
              dessert 🍰, and on a journey to find all the good Matcha place 🍵
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
