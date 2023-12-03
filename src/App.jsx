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

function App() {

  return (
    <>
      <AnimatePresence>
        <Navbar />
        <HeroSidebar />
        <Hero />
        <InfoBoxes />
        <About />
        <AboutLisa />
        <Create />
        <Projects />
        <MoreProjects />
        <EvenMoreProjects />
        <FinalProjects />
        <Customers />
        <Testimonials />
      </AnimatePresence>

    </>
  )
}

export default App
