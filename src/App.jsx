import { useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

import { AnimatePresence } from 'framer-motion'
import './main.css';
import Navbar from './components/Navbar'
import Hero from './components/hero'
import InfoBoxes from './components/InfoBoxes'
import HeroSidebar from './components/HeroSidebar'
import About from './components/About'
function App() {

  return (
    <>
      <AnimatePresence>
        <Navbar />
        <HeroSidebar />
        <Hero />
        <InfoBoxes />
        <About />
      </AnimatePresence>

    </>
  )
}

export default App
