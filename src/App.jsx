import { useState } from 'react'
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

function App() {

  return (
    <>
      <AnimatePresence>
        <Navbar />
        <HeroSidebar />
        <Hero />
        <InfoBoxes />
        <ButtonRow />
        <About />
        <AboutLisa />
        <Create />
        <Projects />
        <MoreProjects />
        <EvenMoreProjects />
        <FinalProjects />
        <Customers />
        <Testimonials />
        <ContactForm />
        <Footer />
      </AnimatePresence>

    </>
  )
}

export default App
