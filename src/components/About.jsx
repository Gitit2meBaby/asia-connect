import { useRef, useState, useEffect } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import { slideInLeft } from '../animations';
import selfie800 from '../assets/selfie800.webp';

const About = ({ refProp }) => {
    const containerRef = useRef(null);
    const [speechVisible, setSpeechVisible] = useState(false);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"],
    });

    const aboutValue = useTransform(scrollYProgress, [0, 1], ['-100%', '65%']);
    const usValue = useTransform(scrollYProgress, [0.5, 1], ['200%', '20%']);
    const imgValue = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 0.8]);
    const speechVisibility = useTransform(scrollYProgress, [0.8, 1], [false, true]);

    useEffect(() => {
        const unsubscribe = speechVisibility.onChange((value) => {
            setSpeechVisible(value);
        });

        return () => {
            unsubscribe();
        };
    }, [speechVisibility]);

    return (
        <section ref={containerRef} className='about'>
            <div ref={refProp}></div>
            <motion.div className={"about-heading"} style={{ translateX: aboutValue }}>
                <h3>About</h3>
            </motion.div>

            <motion.div className={"about-heading"} style={{ translateX: usValue }}>
                <h3>US</h3>
            </motion.div>

            <motion.div className='selfie-container' style={{ scale: imgValue }}>
                <img src={selfie800} alt="Daniel Thomas, frontend Web Developer" />
            </motion.div>

            {speechVisible && (
                <div className='speech'>
                    <motion.p {...slideInLeft}><span>Dan</span><br /> Frontend Developer</motion.p>
                </div>
            )}
        </section>
    );
};

export default About;
