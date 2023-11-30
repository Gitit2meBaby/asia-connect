import React from 'react'
import { motion } from 'framer-motion'
import { fadeScaleIn } from '../animations'
const Navbar = () => {
    return (
        <>
            <div className="nav-btn-container">
                <motion.button
                    {...fadeScaleIn}
                >Book a Consultation</motion.button>
            </div>
        </>
    )
}

export default Navbar