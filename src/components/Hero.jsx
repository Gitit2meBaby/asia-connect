import { useEffect, useState } from 'react';
import { textFadeInDelay1, textFadeInDelay12, textFadeInDelay14, textFadeInDelay16, textFadeInDelay18, textFadeInDelay2, textSize, textSize1, textSize2, slideInDown } from '../animations';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = ({ scrollToDesignRef, isMobile, isMobOpen,
    setIsMobOpen }) => {
    const { scrollY } = useScroll();
    const x = useTransform(scrollY, [0, 500], [0, -500]);
    const xReverse = useTransform(scrollY, [0, 500], [0, 300]);
    const opacityRemove = useTransform(scrollY, [0, 30], [1, 0]); // Website
    const opacity = useTransform(scrollY, [30, 100, 130], [0, 1, 0]); // Design
    const opacityDelay = useTransform(scrollY, [130, 180], [0, 1]); // conversion

    const [overlay, setOverlay] = useState(false)
    const [scrollIcon, setScrollIcon] = useState(false)
    const [heroPosition, setHeroPosition] = useState(false)

    useEffect(() => {
        const timeout = setTimeout(() => {
            setOverlay(true);
        }, 1000);
        return () => {
            clearTimeout(timeout);
        };
    }, [])

    useEffect(() => {
        let timeout;
        let initialScroll = true;

        // Function to handle scroll event
        const handleScroll = () => {
            if (initialScroll) {
                clearTimeout(timeout);
                initialScroll = false;
                setScrollIcon(false);
            }
            if (!initialScroll) {
                const scrollPosition = window.scrollY;
                if (scrollPosition > 500)
                    setHeroPosition(true);

                window.removeEventListener('scroll', handleScroll);
            }
        };

        timeout = setTimeout(() => {
            setScrollIcon(true);
            window.addEventListener('scroll', handleScroll);
        }, 3000);

        return () => {
            clearTimeout(timeout);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section>
            <div className="hero-section">
                <h2 className={`${overlay ? "overlay-effect" : ""} ${heroPosition ? "absolute" : "fixed"}`}>
                    <motion.span {...(!isMobile ? textSize : {})} className='asia-text'
                    >Asia</motion.span>
                    <br />
                    <motion.span {...(!isMobile ? textSize : {})}  >Tourist</motion.span>
                    <br />
                    <motion.span {...(!isMobile ? textSize : {})}  >Connect</motion.span>
                </h2>

                <motion.div
                    className="text-container off-left"
                    style={{ x }}
                    {...textFadeInDelay16}
                >
                    <h1>Professional</h1>
                </motion.div>

                <motion.div
                    className="text-container x-reverse"
                    style={{ x: xReverse }}
                    {...textFadeInDelay18}
                >
                    <motion.h1 style={{ opacity: opacityDelay }}>Conversion</motion.h1>
                    <motion.h1 style={{ opacity }}>Design</motion.h1>
                    <motion.h1 style={{ opacity: opacityRemove }}>Website</motion.h1>
                </motion.div>

                <motion.div
                    className="text-container off-left"
                    style={{ x }}
                    {...textFadeInDelay2}
                >
                    <h1>Solutions</h1>
                </motion.div>

                <div className="mob-hero-text" style={isMobOpen ? { opacity: 0.2, transition: 'all 1s ease' } : { opacity: 1, transition: 'all 1s ease' }}>
                    <motion.div
                        {...textFadeInDelay1}>
                        <h1>Professional</h1>
                    </motion.div>
                    <motion.div
                        {...textFadeInDelay12}>
                        <h1>Website</h1>
                    </motion.div>
                    <motion.div
                        {...textFadeInDelay14}>
                        <h1>Solutions</h1>
                    </motion.div>
                </div>
            </div>

            {scrollIcon && (
                <motion.div
                    {...slideInDown}
                    onClick={() => scrollToDesignRef()}
                    className='scroll-icon'>
                    <svg stroke="#040303" fill="#040303" strokeWidth="1.2" viewBox="0 0 16 16" height="3em" width="3em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z" clipRule="evenodd"></path></svg>
                </motion.div>
            )}
        </section>
    );
};

export default Hero;
