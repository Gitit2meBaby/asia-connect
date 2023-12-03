import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform, useAnimation, useInView } from 'framer-motion'
import { slideInRight } from '../animations'
import Typewriter from "typewriter-effect";

import lisa800 from '../assets/lisa800.webp'


const AboutLisa = () => {
    const containerRef = useRef(null);
    const textRef = useRef(null)
    const [lisaVisible, setLisaVisible] = useState(false);
    const controls = useAnimation();
    const isInView = useInView(textRef, { margin: '-200px' });


    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"],
    });

    const lisa = useTransform(scrollYProgress, [0, .5], ['-100%', '0%']);
    const lisaOpacity = useTransform(scrollYProgress, [0.2, .8], ['0', '1']);
    const imgOpacity = useTransform(scrollYProgress, [.3, 1], ['0', '1']);

    const lisaVisibility = useTransform(scrollYProgress, [0.6, 1], [false, true]);

    useEffect(() => {
        const unsubscribe = lisaVisibility.onChange((value) => {
            setLisaVisible(value);
        });

        return () => {
            unsubscribe();
        };
    }, [lisaVisibility]);

    const rotate = {
        transform: 'rotate(90deg)'
    }

    return (
        <section ref={containerRef} className="about-lisa">
            <motion.h3
                style={{ translateY: lisa, opacity: lisaOpacity }}>& LISA</motion.h3>

            <motion.div
                style={{ opacity: imgOpacity }}>
                <img src={lisa800} alt="Lisa, full stack web engineer" />
            </motion.div>

            {lisaVisible && (
                <div className='lisa-speech'>
                    <motion.p {...slideInRight}>Full Stack Engineer</motion.p>
                </div>
            )}

            <motion.h3 ref={textRef} className={isInView ? 'rotate together-text' : 'together-text'}>
                <span className={isInView ? 'reverse-rotate' : ''}>T</span>
                <span className={isInView ? 'reverse-rotate' : ''}>o</span>
                <span className={isInView ? 'reverse-rotate' : ''}>g</span>
                <span className={isInView ? 'reverse-rotate' : ''}>e</span>
                <span className={isInView ? 'reverse-rotate' : ''}>t</span>
                <span className={isInView ? 'reverse-rotate' : ''}>h</span>
                <span className={isInView ? 'reverse-rotate' : ''}>e</span>
                <span className={isInView ? 'reverse-rotate' : ''}>r</span>
            </motion.h3>
            {isInView && (
                <div className="we-create">
                    <Typewriter
                        options={{
                            strings: ['We Create'],
                            autoStart: true,
                            loop: true,
                            pause: 8000,
                            delay: 200,
                            cursor: '',
                        }}
                    />
                </div>

            )}

        </section>)
}

export default AboutLisa