import { useState, useRef } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

import { AnimatePresence } from 'framer-motion'
import './main.css';
import Navbar from './components/Navbar'
import Hero from './components/hero'
import InfoBoxes from './components/InfoBoxes'
import HeroSidebar from './components/HeroSidebar'
import About from './components/About'
import AboutLisa from './components/AboutLisa';
import Create from './components/Create';
import Projects from './components/Projects';
import MoreProjects from './components/MoreProjects';
import EvenMoreProjects from './components/EvenMoreProjects';
import FinalProjects from './components/FinalProjects';
import Customers from './components/Customers';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ButtonRow from './components/ButtonRow';
import Ecommerce from './components/Ecommerce';
import FullStack from './components/FullStack';
import WebApps from './components/WebApps';
import Ui from './components/Ui';

function App() {
  const [eCommerce, setEcommerce] = useState(false)
  const [fullStack, setFullStack] = useState(false)
  const [webApps, setWebApps] = useState(false)
  const [ui, setUi] = useState(false)

  const heroRef = useRef(null)
  const infoBoxesRef = useRef(null)
  const buttonRowRef = useRef(null)
  const eCommerceRef = useRef(null)
  const fullStackRef = useRef(null)
  const webAppsRef = useRef(null)
  const uiRef = useRef(null)
  const aboutRef = useRef(null);
  const aboutLisaRef = useRef(null);
  const createRef = useRef(null);
  const projectsRef = useRef(null);
  const moreProjectsRef = useRef(null);
  const evenMoreProjectsRef = useRef(null);
  const finalProjectsRef = useRef(null);
  const customersRef = useRef(null);
  const testimonialsRef = useRef(null);
  const contactFormRef = useRef(null);

  const scrollToRef = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <AnimatePresence>
        <Navbar key="navbar" />
        <HeroSidebar key="heroSidebar"
          scrollToAboutRef={() => scrollToRef(aboutRef)}
          scrollToDesignRef={() => scrollToRef(infoBoxesRef)}
          scrollToProjectsRef={() => scrollToRef(projectsRef)}
          scrollToTestimonialsRef={() => scrollToRef(testimonialsRef)}
          scrollToContactFormRef={() => scrollToRef(contactFormRef)}
        />
        <Hero key="hero" refProp={heroRef}
          scrollToDesignRef={() => scrollToRef(infoBoxesRef)}
        />
        <InfoBoxes key="infoBoxes" refProp={infoBoxesRef} />
        <ButtonRow setEcommerce={setEcommerce}
          setFullStack={setFullStack}
          setWebApps={setWebApps}
          setUi={setUi}
          key="buttonRowKey"
          refProp={buttonRowRef}
        />
        {eCommerce && <Ecommerce setEcommerce={setEcommerce}
          key="eCommerceKey"
          refProp={eCommerceRef} />}
        {fullStack && <FullStack setFullStack={setFullStack}
          key="fullStackKey"
          refProp={fullStackRef} />}
        {webApps && <WebApps setWebApps={setWebApps}
          key="webAppsKey"
          refProp={webAppsRef} />}
        {ui && <Ui setUi={setUi}
          key="uiKey"
          refProp={uiRef} />}

        <About key="about" refProp={aboutRef} />
        <AboutLisa key="aboutLisa" refProp={aboutLisaRef} />
        <Create key="create" refProp={createRef} />
        <Projects key="projects" refProp={projectsRef} />
        <MoreProjects key="moreProjects" refProp={moreProjectsRef} />
        <EvenMoreProjects key="evenMoreProjects" refProp={evenMoreProjectsRef} />
        <FinalProjects key="finalProjects" refProp={finalProjectsRef} />
        <Customers key="customers" refProp={customersRef} />
        <Testimonials key="testimonials" refProp={testimonialsRef}
        />
        <ContactForm key="contactForm" refProp={contactFormRef} />
        <Footer key="footer"
          scrollToAboutRef={() => scrollToRef(aboutRef)}
          scrollToDesignRef={() => scrollToRef(infoBoxesRef)}
          scrollToProjectsRef={() => scrollToRef(projectsRef)}
          scrollToTestimonialsRef={() => scrollToRef(testimonialsRef)}
          scrollToContactFormRef={() => scrollToRef(contactFormRef)} />
      </AnimatePresence>

    </>
  )
}

export default App
