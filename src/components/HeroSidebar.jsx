import { useState, useEffect, forwardRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import PropTypes from 'prop-types';
import { growX, textFadeVariants02, textFadeVariants04, textFadeVariants06, textFadeVariants08, textFadeVariants1, textFadeVariants12, textFadeInDelay24, textFadeInDelay26, textFadeInDelay265, textFadeInDelay275, textFadeInDelay28, textFadeInDelay27, textFadeInDelay29, textFadeInDelay285, textFadeInDelay295, textFadeInDelay3 } from '../animations'

const HeroSidebar = forwardRef(({ scrollToAboutRef, scrollToDesignRef, scrollToProjectsRef, scrollToTestimonialsRef, scrollToContactFormRef }, ref) => {
    const [designDropdown, setDesignDropdown] = useState(false)
    const [projectsDropdown, setProjectsDropdown] = useState(false)
    const { scrollY } = useScroll();
    const sidebarOpacity = useTransform(scrollY, [0, 400], [1, 0]);

    useEffect(() => {
        return scrollY.onChange(() => {
        });
    }, [scrollY]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDesignDropdown(true);

            const interval = setInterval(() => {
                setDesignDropdown(false);
            }, 2000);

            setTimeout(() => {
                clearInterval(interval);
            }, 2000);
        }, 4200);

        return () => {
            clearTimeout(timeout);
            setDesignDropdown(false);
        };
    }, []);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setProjectsDropdown(true);

            const interval = setInterval(() => {
                setProjectsDropdown(false);
            }, 2000);

            setTimeout(() => {
                clearInterval(interval);
            }, 2000);
        }, 6200);

        return () => {
            clearTimeout(timeout);
            setProjectsDropdown(false);
        };
    }, []);

    return (
        <motion.aside className='hero-sidebar'
            style={{ opacity: sidebarOpacity }}
        >
            <motion.div
                className='sidebar-title'
                {...growX}>
                <motion.h3
                    {...textFadeInDelay24}>
                    Explore
                </motion.h3>
            </motion.div>

            <motion.div
                className={!projectsDropdown ? 'sidebar-item' : 'sidebar-item subtle-overlay'}
                onMouseEnter={() => setDesignDropdown(true)}
                onMouseLeave={() => setDesignDropdown(false)}>
                <motion.h3
                    {...textFadeInDelay26}
                    onClick={() => scrollToDesignRef()}>

                    Design
                </motion.h3>
                <div className={designDropdown ? "sidebar-dropdown" : "hidden"}
                >
                    <motion.p
                        variants={textFadeVariants02}
                        initial='hidden'
                        animate={designDropdown ? 'visible' : 'hidden'}
                        exit='exit'
                    >
                        WordPress / CMS
                    </motion.p>
                    <motion.p
                        variants={textFadeVariants04}
                        initial='hidden'
                        animate={designDropdown ? 'visible' : 'hidden'}
                        exit='exit'
                    >
                        E-commerce
                    </motion.p>
                    <motion.p
                        variants={textFadeVariants06}
                        initial='hidden'
                        animate={designDropdown ? 'visible' : 'hidden'}
                        exit='exit'
                    >FrontEnd Development</motion.p>
                    <motion.p
                        variants={textFadeVariants08}
                        initial='hidden'
                        animate={designDropdown ? 'visible' : 'hidden'}
                        exit='exit'
                    >Full Stack</motion.p>
                    <motion.p
                        variants={textFadeVariants1}
                        initial='hidden'
                        animate={designDropdown ? 'visible' : 'hidden'}
                        exit='exit'
                    >Web Applications</motion.p>
                    <motion.p
                        variants={textFadeVariants12}
                        initial='hidden'
                        animate={designDropdown ? 'visible' : 'hidden'}
                        exit='exit'
                    >UI/UX Design</motion.p>
                </div>
            </motion.div>

            <motion.div
                className={projectsDropdown || designDropdown ? 'sidebar-item subtle-overlay' : 'sidebar-item'}

                {...textFadeInDelay265}>
                <motion.h3
                    {...textFadeInDelay27}
                    onClick={() => scrollToAboutRef()}>
                    About
                </motion.h3>
            </motion.div>

            <motion.div
                className={designDropdown ? 'sidebar-item subtle-overlay' : 'sidebar-item'} onMouseEnter={() => setProjectsDropdown(true)}
                onMouseLeave={() => setProjectsDropdown(false)}
                {...textFadeInDelay275}>
                <motion.h3
                    {...textFadeInDelay28}
                    onClick={() => scrollToProjectsRef()}>
                    Projects
                </motion.h3>

                <div className={projectsDropdown ? "sidebar-dropdown" : "hidden"}
                >
                    <motion.p
                        variants={textFadeVariants02}
                        initial='hidden'
                        animate={projectsDropdown ? 'visible' : 'hidden'}
                        exit='exit'
                    >
                        Studio Shodwe
                    </motion.p>
                    <motion.p
                        variants={textFadeVariants04}
                        initial='hidden'
                        animate={projectsDropdown ? 'visible' : 'hidden'}
                        exit='exit'
                    >
                        Canguu Cafe
                    </motion.p>
                    <motion.p
                        variants={textFadeVariants06}
                        initial='hidden'
                        animate={projectsDropdown ? 'visible' : 'hidden'}
                        exit='exit'
                    >XMAX Thai Boxing Club</motion.p>
                    <motion.p
                        variants={textFadeVariants08}
                        initial='hidden'
                        animate={projectsDropdown ? 'visible' : 'hidden'}
                        exit='exit'
                    >Off Grid Power</motion.p>
                    <motion.p
                        variants={textFadeVariants1}
                        initial='hidden'
                        animate={projectsDropdown ? 'visible' : 'hidden'}
                        exit='exit'
                    >Thamel Dentistry</motion.p>
                    <motion.p
                        variants={textFadeVariants12}
                        initial='hidden'
                        animate={projectsDropdown ? 'visible' : 'hidden'}
                        exit='exit'
                    >Big Bali Burgers</motion.p>
                </div>
            </motion.div>

            <motion.div
                className={projectsDropdown || designDropdown ? 'sidebar-item subtle-overlay' : 'sidebar-item'}
                {...textFadeInDelay285}>
                <motion.h3
                    {...textFadeInDelay29}
                    onClick={() => scrollToTestimonialsRef()}>
                    Testimonials
                </motion.h3>
            </motion.div>

            <motion.div
                className={projectsDropdown || designDropdown ? 'sidebar-item subtle-overlay' : 'sidebar-item'}
                {...textFadeInDelay295}>
                <motion.h3
                    {...textFadeInDelay3}
                    onClick={() => scrollToContactFormRef()}>
                    Contact
                </motion.h3>
            </motion.div>
        </motion.aside>
    )
}
)

HeroSidebar.displayName = 'HeroSidebar'; // Define the display name

HeroSidebar.propTypes = {
    scrollToAboutRef: PropTypes.func,
    scrollToDesignRef: PropTypes.func,
    scrollToProjectsRef: PropTypes.func,
    scrollToTestimonialsRef: PropTypes.func,
    scrollToContactFormRef: PropTypes.func
};

export default HeroSidebar