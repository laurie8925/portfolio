import { useEffect, useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import ThemeContext from "../global/ThemeContext";

//components
import Intro from "../components/Intro";
import Feature from "../components/Feature";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

import logo from "../medias/portfolio-logo.svg";

function HomePage() {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [aboutSectionLoaded, setAboutSectionLoaded] = useState(false); // New state
  const location = useLocation();
  const theme = useContext(ThemeContext);

  useEffect(() => {
    // Simulate loading data
    setTimeout(() => {
      setDataLoaded(true);
    }, 50); // Simulate loading delay
  }, []);

  useEffect(() => {
    // Scroll to the about section if the URL contains the hash fragment '#about' and the data is loaded
    if (dataLoaded && location.hash === "#about" && !aboutSectionLoaded) {
      console.log("Scrolling to about section...");
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
        setAboutSectionLoaded(true); // Set about section loaded
      }
    }
  }, [dataLoaded, location.hash, aboutSectionLoaded]);

  useEffect(() => {
    document.body.className = `relative ${theme}`;
  }, [theme]);

  console.log(theme);

  return (
    <>
      <img src={logo} alt="Logo" className="logo lg:w-1/12" />

      <main className="px-5  bg-background">
        <Intro />
        <Feature />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
