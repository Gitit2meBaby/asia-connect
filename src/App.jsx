import { useState, useRef, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

import { AnimatePresence } from 'framer-motion'
import './main.css';
import Navbar from './components/Navbar'
import Hero from './components/hero'
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
import MobProjects from './components/MobProjects';
import MobMoreProjects from './components/MobMoreProjects';
import MobEvenMoreProjects from './components/MobEvenMoreProjects';
import MobFinalProjects from './components/MobFinalProjects';
import TestimonialsSlider from './components/TestimonialSlider';
import MobileNav from './components/MobileNav';
import WordPress from './components/WordPress';
import Frontend from './components/Frontend';

function App() {
  const [eCommerce, setEcommerce] = useState(false)
  const [fullStack, setFullStack] = useState(false)
  const [webApps, setWebApps] = useState(false)
  const [ui, setUi] = useState(false)
  const [isMobOpen, setIsMobOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(() => {
    return window.innerWidth < 900;
  });

  const heroRef = useRef(null)
  const infoBoxesRef = useRef(null)
  const frontendRef = useRef(null)
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
  const mobProjectsRef = useRef(null);
  const mobMoreProjectsRef = useRef(null);
  const mobEvenMoreProjectsRef = useRef(null);
  const mobFinalProjectsRef = useRef(null);
  const customersRef = useRef(null);
  const testimonialsRef = useRef(null);
  const mobTestimonialsRef = useRef(null);
  const contactFormRef = useRef(null);

  const scrollToRef = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Set initial state based on screen width and device orientation
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 900);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        <Navbar key="navbar" />
        <HeroSidebar key="heroSidebar"
          scrollToAboutRef={() => scrollToRef(aboutRef)}
          scrollToDesignRef={() => scrollToRef(infoBoxesRef)}
          scrollToFrontendRef={() => scrollToRef(frontendRef)}
          scrollToButtonRowRef={() => scrollToRef(buttonRowRef)}
          scrollToProjectsRef={() => scrollToRef(projectsRef)}
          scrollToMobProjectsRef={() => scrollToRef(mobProjectsRef)}
          scrollToMoreProjectsRef={() => scrollToRef(moreProjectsRef)}
          scrollToMobMoreProjectsRef={() => scrollToRef(mobMoreProjectsRef)}
          scrollToEvenMoreProjectsRef={() => scrollToRef(evenMoreProjectsRef)}
          scrollToMobEvenMoreProjectsRef={() => scrollToRef(mobEvenMoreProjectsRef)}
          scrollToFinalProjectsRef={() => scrollToRef(finalProjectsRef)}
          scrollToMobFinalProjectsRef={() => scrollToRef(mobFinalProjectsRef)}
          scrollToTestimonialsRef={() => scrollToRef(testimonialsRef)}
          scrollToMobTestimonialsRef={() => scrollToRef(mobTestimonialsRef)}
          scrollToContactFormRef={() => scrollToRef(contactFormRef)}
          isMobOpen={isMobOpen}
          setIsMobOpen={setIsMobOpen}
          isMobile={isMobile}
          setEcommerce={setEcommerce}
          setFullStack={setFullStack}
          setWebApps={setWebApps}
          setUi={setUi}
        />
        <Hero key="hero" refProp={heroRef}
          scrollToDesignRef={() => scrollToRef(infoBoxesRef)}
          isMobOpen={isMobOpen}
          setIsMobOpen={setIsMobOpen}
          isMobile={isMobile}
        />
        <MobileNav key="mobileNav"
          scrollToDesignRef={() => scrollToRef(infoBoxesRef)}
          scrollToFrontendRef={() => scrollToRef(frontendRef)}
          scrollToButtonRowRef={() => scrollToRef(buttonRowRef)}
          scrollToAboutRef={() => scrollToRef(aboutRef)}
          scrollToMobProjectsRef={() => scrollToRef(mobProjectsRef)}
          scrollToMobMoreProjectsRef={() => scrollToRef(mobMoreProjectsRef)}
          scrollToMobEvenMoreProjectsRef={() => scrollToRef(mobEvenMoreProjectsRef)}
          scrollToMobFinalProjectsRef={() => scrollToRef(mobFinalProjectsRef)}
          scrollToMobTestimonialsRef={() => scrollToRef(mobTestimonialsRef)}
          scrollToContactFormRef={() => scrollToRef(contactFormRef)}
          setEcommerce={setEcommerce}
          setFullStack={setFullStack}
          setWebApps={setWebApps}
          setUi={setUi} />

        <WordPress key="wordpress" refProp={infoBoxesRef}
          isMobile={isMobile} />
        <Frontend key='frontend' refProp={frontendRef}
          isMobile={isMobile} />
        <ButtonRow setEcommerce={setEcommerce}
          setFullStack={setFullStack}
          setWebApps={setWebApps}
          setUi={setUi}
          key="buttonRowKey"
          refProp={buttonRowRef}
          isMobile={isMobile}
        />
        {eCommerce && <Ecommerce setEcommerce={setEcommerce} isMobile={isMobile}
          key="eCommerceKey"
          refProp={eCommerceRef} />}
        {fullStack && <FullStack setFullStack={setFullStack} isMobile={isMobile}
          key="fullStackKey"
          refProp={fullStackRef} />}
        {webApps && <WebApps setWebApps={setWebApps} isMobile={isMobile}
          key="webAppsKey"
          refProp={webAppsRef} />}
        {ui && <Ui setUi={setUi} isMobile={isMobile}
          key="uiKey"
          refProp={uiRef} />}

        <Create key="create" refProp={createRef}
          isMobile={isMobile} />

        {isMobile && <MobProjects key="Mobprojects" refProp={mobProjectsRef} />}
        {!isMobile && <Projects key="projects" refProp={projectsRef} />}

        {!isMobile && <MoreProjects key="moreProjects" refProp={moreProjectsRef} />}
        {isMobile && <MobMoreProjects key="MobMoreProjects" refProp={mobMoreProjectsRef} />}

        {!isMobile && <EvenMoreProjects key="evenMoreProjects" refProp={evenMoreProjectsRef} />}
        {isMobile && <MobEvenMoreProjects key="MobEvenMoreProjects" refProp={mobEvenMoreProjectsRef} />}

        {!isMobile && <FinalProjects key="finalProjects" refProp={finalProjectsRef} />}
        {isMobile && <MobFinalProjects key="MobFinalProjects" refProp={mobFinalProjectsRef} />}


        <About key="about" refProp={aboutRef} isMobile={isMobile} />
        <AboutLisa key="aboutLisa" refProp={aboutLisaRef} />

        <Customers key="customers" refProp={customersRef}
          isMobile={isMobile} />


        {!isMobile && <Testimonials key="testimonials" refProp={testimonialsRef}
        />}
        {isMobile && <TestimonialsSlider key="testimonialsSlider" />}

        <ContactForm key="contactForm" refProp={contactFormRef} />
        <Footer key="footer"
          scrollToAboutRef={() => scrollToRef(aboutRef)}
          scrollToDesignRef={() => scrollToRef(infoBoxesRef)}
          scrollToProjectsRef={() => scrollToRef(projectsRef)}
          scrollToTestimonialsRef={() => scrollToRef(testimonialsRef)}
          scrollToContactFormRef={() => scrollToRef(contactFormRef)}
          isMobile={isMobile} />
      </AnimatePresence>
    </>
  )
}

export default App
