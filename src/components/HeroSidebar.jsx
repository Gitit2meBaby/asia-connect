import { useState, useEffect } from 'react'
import { motion, useViewportScroll, useTransform } from 'framer-motion'
import { growX, textFadeVariants02, textFadeVariants04, textFadeVariants06, textFadeVariants08, textFadeVariants1, textFadeVariants12, textFadeInDelay24, textFadeInDelay26, textFadeInDelay265, textFadeInDelay275, textFadeInDelay28, textFadeInDelay27, textFadeInDelay29, textFadeInDelay285, textFadeInDelay295, textFadeInDelay3 } from '../animations'

const HeroSidebar = () => {
    const [designDropdown, setDesignDropdown] = useState(false)
    const [projectsDropdown, setProjectsDropdown] = useState(false)
    const { scrollY } = useViewportScroll();
    const sidebarOpacity = useTransform(scrollY, [0, 700], [1, 0]);

    useEffect(() => {
        return scrollY.onChange(() => {
            // Here, you can access the updated scrollY value if needed
        });
    }, [scrollY]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDesignDropdown(true);

            const interval = setInterval(() => {
                setDesignDropdown(false);
            }, 2000); // Set interval to change state back to false after 1000ms

            setTimeout(() => {
                clearInterval(interval);
            }, 2000);
        }, 4500);

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
            }, 2000); // Set interval to change state back to false after 1000ms

            setTimeout(() => {
                clearInterval(interval);
            }, 2000);
        }, 6500);

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
                    {...textFadeInDelay26}>
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
                        WordPress
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
                    {...textFadeInDelay27}>
                    About
                </motion.h3>
            </motion.div>

            <motion.div
                className={designDropdown ? 'sidebar-item subtle-overlay' : 'sidebar-item'} onMouseEnter={() => setProjectsDropdown(true)}
                onMouseLeave={() => setProjectsDropdown(false)}
                {...textFadeInDelay275}>
                <motion.h3
                    {...textFadeInDelay28}>
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
                    {...textFadeInDelay29}>
                    Testimonials
                </motion.h3>
            </motion.div>

            <motion.div
                className={projectsDropdown || designDropdown ? 'sidebar-item subtle-overlay' : 'sidebar-item'}
                {...textFadeInDelay295}>
                <motion.h3
                    {...textFadeInDelay3}>
                    Contact
                </motion.h3>
            </motion.div>
        </motion.aside>
    )
}

export default HeroSidebar