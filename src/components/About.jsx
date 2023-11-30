import React from 'react'
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';

const About = () => {
    const { scrollY } = useScroll();
    const x = useTransform(scrollY, [0, 500], [0, -500]);
    const xReverse = useTransform(scrollY, [0, 500], [0, 300]);
    return (
        <section className='about'>
            <motion.div
                className="about-heading off-left"
                style={{ x }}
            >
                <h1>About</h1>
            </motion.div>

            <motion.div
                className="about-heading off-right"
                style={{ x: xReverse }}
            >
                <motion.h1>US</motion.h1>

            </motion.div>
        </section>
    )
}

export default About