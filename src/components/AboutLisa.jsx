import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform, useAnimation, useInView } from 'framer-motion'
import { slideInRight } from '../animations'
import Typewriter from "typewriter-effect";

import lisa800 from '../assets/lisa800.webp'


const AboutLisa = () => {
    const containerRef = useRef(null);
    const textRef = useRef(null)
    const [lisaVisible, setLisaVisible] = useState(false);
    const [isSmall, setIsSmall] = useState(() => {
        return window.innerWidth < 500
    });
    const controls = useAnimation();
    const isInView = useInView(textRef, { margin: '-200px' });


    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"],
    });

    const lisa = useTransform(scrollYProgress, [0, .5], ['-100%', '0%']);
    const lisaOpacity = useTransform(scrollYProgress, [0.2, .8], ['0', '1']);
    const imgOpacity = useTransform(scrollYProgress, [.3, 1], ['0', '1']);
    const textOpacity = useTransform(scrollYProgress, [.7, 1], ['0', '1'])
    const lisaVisibility = useTransform(scrollYProgress, [0.6, 1], [false, true]);

    useEffect(() => {
        const unsubscribe = lisaVisibility.onChange((value) => {
            setLisaVisible(value);
        });

        return () => {
            unsubscribe();
        };
    }, [lisaVisibility]);

    // Opacity change for paragraph on scroll
    const text = `Our core mission is to spotlight the richness of Asia, attracting the attention of global tourists who rely on their smartphones as their travel compass. Through our platform, we connect millions of visitors to the services they need`;

    // Just to put a line break in the 'full stack engineer' text
    useEffect(() => {
        const handleResize = () => {
            setIsSmall(window.innerWidth > 500);
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('orientationchange', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('orientationchange', handleResize);
        };
    }, []);

    return (
        <section ref={containerRef} className="about-lisa">
            <motion.h3
                style={{ translateY: lisa, opacity: lisaOpacity }}>& LISA</motion.h3>

            {!lisaVisible && (
                <div className='lisa-speech'>
                    <motion.p style={{ opacity: '0' }}>Full Stack{isSmall && <br />} Engineer</motion.p>
                </div>
            )}

            {console.log(isSmall)}

            <motion.div
                style={{ opacity: imgOpacity }}>
                <img src={lisa800} alt="Lisa, full stack web engineer" />
            </motion.div>

            {lisaVisible && (
                <div className='lisa-speech'>
                    <motion.p {...slideInRight}>Full Stack{isSmall && <br />} Engineer</motion.p>
                </div>
            )}

            <motion.div className='opacity-paragraph'
                style={{ opacity: textOpacity }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}>
                {text.split(' ').map((word, index) => (
                    <motion.span
                        key={index}
                        initial={{ opacity: 0.5 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        {`${word} `}
                    </motion.span>
                ))}
            </motion.div>


        </section>)
}

export default AboutLisa