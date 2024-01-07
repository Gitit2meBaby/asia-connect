import { useState, useEffect, forwardRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import PropTypes from 'prop-types';
import { growX, growXmob, textFadeVariants02, textFadeVariants04, textFadeVariants06, textFadeVariants08, textFadeVariants1, textFadeVariants12, textFadeInDelay24, textFadeInDelay26, textFadeInDelay265, textFadeInDelay275, textFadeInDelay28, textFadeInDelay27, textFadeInDelay29, textFadeInDelay285, textFadeInDelay295, textFadeInDelay3, } from '../animations'

const HeroSidebar = forwardRef(({ scrollToAboutRef, scrollToDesignRef, scrollToProjectsRef, scrollToTestimonialsRef, scrollToContactFormRef, isMobile, scrollToMobProjectsRef,
    scrollToMoreProjectsRef,
    scrollToMobMoreProjectsRef,
    scrollToEvenMoreProjectsRef,
    scrollToMobEvenMoreProjectsRef,
    scrollToFinalProjectsRef,
    scrollToMobFinalProjectsRef,
    scrollToMobTestimonialsRef,
    scrollToFrontendRef,
    scrollToButtonRowRef,
    setEcommerce,
    setFullStack,
    setWebApps,
    setUi,
    isMobOpen,
    setIsMobOpen }, ref) => {
    const [designDropdown, setDesignDropdown] = useState(false)
    const [projectsDropdown, setProjectsDropdown] = useState(false)
    const [growVariant, setGrowVariant] = useState(growX)
    const { scrollY } = useScroll();
    const sidebarOpacity = useTransform(scrollY, [0, 400], [1, 0]);

    useEffect(() => {
        return scrollY.onChange(() => {
        });
    }, [scrollY]);

    useEffect(() => {
        setGrowVariant(isMobile ? growXmob : growX);
    }, [isMobile]);

    useEffect(() => {
        const handleScroll = () => {
            setDesignDropdown(false)
            setProjectsDropdown(false)
            setIsMobOpen(false)
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleDesignClick = () => {
        if (!isMobile) {
            scrollToDesignRef();
        } else {
            setDesignDropdown(prevState => !prevState);
            setIsMobOpen(prevState => !prevState);
        }
    };

    const handleDesignMouseOver = () => {
        if (!isMobile) {
            setDesignDropdown(!designDropdown)
            setIsMobOpen(!isMobOpen)
        }
    }

    const handleProjectsClick = () => {
        if (!isMobile) {
            scrollToProjectsRef();
        } else {
            setIsMobOpen(prevState => !prevState);
            setProjectsDropdown(prevState => !prevState)
        }
    }

    const handleProjectsMouseOver = () => {
        if (!isMobile) {
            setProjectsDropdown(!projectsDropdown)
            setIsMobOpen(!isMobOpen)
        }
    }

    const handleScrollToFrontendRef = () => {
        scrollToFrontendRef()
        setDesignDropdown(prevState => !prevState);
    }

    const handleScrollToEcommerceRef = () => {
        scrollToButtonRowRef()
        setEcommerce(true)
        setFullStack(false)
        setWebApps(false)
        setUi(false)
        setDesignDropdown(prevState => !prevState);
    }
    const handleScrollToFullStackRef = () => {
        scrollToButtonRowRef()
        setEcommerce(false)
        setFullStack(true)
        setWebApps(false)
        setUi(false)
        setDesignDropdown(prevState => !prevState);
    }
    const handleScrollToWebAppsRef = () => {
        scrollToButtonRowRef()
        setEcommerce(false)
        setFullStack(false)
        setWebApps(true)
        setUi(false)
        setDesignDropdown(prevState => !prevState);
    }
    const handleScrollToUiRef = () => {
        scrollToButtonRowRef()
        setEcommerce(false)
        setFullStack(false)
        setWebApps(false)
        setUi(true)
        setDesignDropdown(prevState => !prevState);
    }

    const handleScrollToAboutRef = () => {
        scrollToAboutRef()
    }

    return (
        <motion.aside className='hero-sidebar'
            style={{ opacity: sidebarOpacity }}
        >
            <motion.div
                className='sidebar-title'
                variants={growVariant}>
                <motion.h3
                    {...textFadeInDelay24}>
                    Explore
                </motion.h3>
            </motion.div>

            <motion.div
                className={!projectsDropdown ? 'sidebar-item' : 'sidebar-item subtle-overlay'}
                onMouseEnter={() => handleDesignMouseOver()}
                onMouseLeave={() => handleDesignMouseOver()}>
                <motion.h3
                    {...textFadeInDelay26}
                    onClick={() => handleDesignClick()}>

                    Design
                </motion.h3>
                <div className={designDropdown ? "sidebar-dropdown" : "hidden"}
                >
                    <motion.p
                        variants={textFadeVariants02}
                        initial='hidden'
                        animate={designDropdown ? 'visible' : 'hidden'}
                        exit='exit'
                        onClick={() => scrollToDesignRef()}
                    >
                        WordPress / CMS
                    </motion.p>
                    <motion.p
                        variants={textFadeVariants04}
                        initial='hidden'
                        animate={designDropdown ? 'visible' : 'hidden'}
                        exit='exit'
                        onClick={() => handleScrollToFrontendRef()}
                    >
                        FrontEnd Development
                    </motion.p>
                    <motion.p
                        variants={textFadeVariants06}
                        initial='hidden'
                        animate={designDropdown ? 'visible' : 'hidden'}
                        exit='exit'
                        onClick={() => handleScrollToEcommerceRef()}
                    >E-commerce</motion.p>
                    <motion.p
                        variants={textFadeVariants08}
                        initial='hidden'
                        animate={designDropdown ? 'visible' : 'hidden'}
                        exit='exit'
                        onClick={() => handleScrollToFullStackRef()}
                    >Full Stack</motion.p>
                    <motion.p
                        variants={textFadeVariants1}
                        initial='hidden'
                        animate={designDropdown ? 'visible' : 'hidden'}
                        exit='exit'
                        onClick={() => handleScrollToWebAppsRef()}
                    >Web Applications</motion.p>
                    <motion.p
                        variants={textFadeVariants12}
                        initial='hidden'
                        animate={designDropdown ? 'visible' : 'hidden'}
                        exit='exit'
                        onClick={() => handleScrollToUiRef()}
                    >UI/UX Design</motion.p>
                </div>
            </motion.div>

            <motion.div
                className={projectsDropdown || designDropdown ? 'sidebar-item subtle-overlay' : 'sidebar-item'}

                {...textFadeInDelay265}>
                <motion.h3
                    {...textFadeInDelay27}
                    onClick={() => handleScrollToAboutRef()}>
                    About
                </motion.h3>
            </motion.div>

            <motion.div
                className={designDropdown ? 'sidebar-item subtle-overlay' : 'sidebar-item'} onMouseEnter={() => handleProjectsMouseOver()}
                onMouseLeave={() => handleProjectsMouseOver()}
                {...textFadeInDelay275}>
                <motion.h3
                    {...textFadeInDelay28}
                    onClick={() => handleProjectsClick()}>
                    Projects
                </motion.h3>

                <div className={projectsDropdown ? "sidebar-dropdown" : "hidden"}
                >
                    <motion.p
                        variants={textFadeVariants02}
                        initial='hidden'
                        animate={projectsDropdown ? 'visible' : 'hidden'}
                        exit='exit'
                        onClick={!isMobile ? scrollToProjectsRef : scrollToMobProjectsRef}
                    >
                        Canguu Cafe
                    </motion.p>
                    <motion.p
                        variants={textFadeVariants04}
                        initial='hidden'
                        animate={projectsDropdown ? 'visible' : 'hidden'}
                        exit='exit'
                        onClick={!isMobile ? scrollToProjectsRef : scrollToMobProjectsRef}
                    >
                        Studio Shodwe
                    </motion.p>
                    <motion.p
                        variants={textFadeVariants06}
                        initial='hidden'
                        animate={projectsDropdown ? 'visible' : 'hidden'}
                        exit='exit'
                        onClick={!isMobile ? scrollToMoreProjectsRef : scrollToMobMoreProjectsRef}
                    >XMAX Thai Boxing Club</motion.p>
                    <motion.p
                        variants={textFadeVariants08}
                        initial='hidden'
                        animate={projectsDropdown ? 'visible' : 'hidden'}
                        exit='exit'
                        onClick={!isMobile ? scrollToMoreProjectsRef : scrollToMobMoreProjectsRef}
                    >Thamel Dentistry</motion.p>
                    <motion.p
                        variants={textFadeVariants1}
                        initial='hidden'
                        animate={projectsDropdown ? 'visible' : 'hidden'}
                        exit='exit'
                        onClick={!isMobile ? scrollToEvenMoreProjectsRef : scrollToMobEvenMoreProjectsRef}
                    >Ask</motion.p>
                    <motion.p
                        variants={textFadeVariants12}
                        initial='hidden'
                        animate={projectsDropdown ? 'visible' : 'hidden'}
                        exit='exit'
                        onClick={!isMobile ? scrollToFinalProjectsRef : scrollToMobFinalProjectsRef}
                    >more...</motion.p>
                </div>
            </motion.div>

            <motion.div
                className={projectsDropdown || designDropdown ? 'sidebar-item subtle-overlay' : 'sidebar-item'}
                {...textFadeInDelay285}>
                <motion.h3
                    {...textFadeInDelay29}
                    onClick={!isMobile ? scrollToTestimonialsRef : scrollToMobTestimonialsRef}>
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
    scrollToContactFormRef: PropTypes.func,
    isMobile: PropTypes.bool,
    scrollToMobProjectsRef: PropTypes.func,
    scrollToMoreProjectsRef: PropTypes.func,
    scrollToMobMoreProjectsRef: PropTypes.func,
    scrollToEvenMoreProjectsRef: PropTypes.func,
    scrollToMobEvenMoreProjectsRef: PropTypes.func,
    scrollToFinalProjectsRef: PropTypes.func,
    scrollToMobFinalProjectsRef: PropTypes.func,
    scrollToMobTestimonialsRef: PropTypes.func,
    scrollToInfoBoxesRef: PropTypes.func,
    scrollToFrontendRef: PropTypes.func,
};


export default HeroSidebar