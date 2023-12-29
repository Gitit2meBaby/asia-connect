import { useState, useEffect } from 'react'
import PropTypes from 'prop-types';

const MobileNav = ({ scrollToAboutRef, scrollToDesignRef,
    scrollToContactFormRef, scrollToMobProjectsRef,
    scrollToMobMoreProjectsRef,
    scrollToMobEvenMoreProjectsRef,
    scrollToMobFinalProjectsRef,
    scrollToMobTestimonialsRef,
    scrollToFrontendRef,
    scrollToButtonRowRef,
    setEcommerce,
    setFullStack,
    setWebApps,
    setUi, }) => {

    const [isHeaderFixed, setIsHeaderFixed] = useState(false);
    const [navOpen, setNavOpen] = useState(false)
    const [designMobDropdown, setDesignMobDropdown] = useState(false)
    const [projectsMobDropdown, setProjectsMobDropdown] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const headerThreshold = 700;

            if (scrollPosition > headerThreshold) {
                setIsHeaderFixed(true);
            } else {
                setIsHeaderFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleToggleClick = () => {
        setNavOpen(!navOpen)
        console.log(navOpen)
    }

    const handleDesignClick = () => {
        setDesignMobDropdown(!designMobDropdown)
        setProjectsMobDropdown(false)
    }
    const handleProjectsClick = () => {
        setDesignMobDropdown(false)
        setProjectsMobDropdown(!projectsMobDropdown)
    }

    const handleScrollToDesignRef = () => {
        scrollToDesignRef()
        setNavOpen(false)
        setDesignMobDropdown(false)
    }

    const handleScrollToFrontendRef = () => {
        scrollToFrontendRef()
        setNavOpen(false)
        setDesignMobDropdown(false)
    }

    const handleScrollToEcommerceRef = () => {
        scrollToButtonRowRef()
        setNavOpen(false)
        setEcommerce(true)
        setFullStack(false)
        setWebApps(false)
        setUi(false)
    }
    const handleScrollToFullStackRef = () => {
        scrollToButtonRowRef()
        setNavOpen(false)
        setEcommerce(false)
        setFullStack(true)
        setWebApps(false)
        setUi(false)
    }
    const handleScrollToWebAppsRef = () => {
        scrollToButtonRowRef()
        setNavOpen(false)
        setEcommerce(false)
        setFullStack(false)
        setWebApps(true)
        setUi(false)
    }
    const handleScrollToUiRef = () => {
        scrollToButtonRowRef()
        setNavOpen(false)
        setEcommerce(false)
        setFullStack(false)
        setWebApps(false)
        setUi(true)
    }

    const handleScrollToAboutRef = () => {
        scrollToAboutRef()
        setNavOpen(false)
    }

    const handleScrollToMobProjectsRef = () => {
        scrollToMobProjectsRef()
        setNavOpen(false)
        setProjectsMobDropdown(false)
    }

    const handleScrollToMobMoreProjectsRef = () => {
        scrollToMobMoreProjectsRef()
        setNavOpen(false)
        setProjectsMobDropdown(false)
    }

    const handleScrollToMobEvenMoreProjectsRef = () => {
        scrollToMobEvenMoreProjectsRef()
        setNavOpen(false)
        setProjectsMobDropdown(false)
    }

    const handleScrollToMobFinalProjectsRef = () => {
        scrollToMobFinalProjectsRef()
        setNavOpen(false)
        setProjectsMobDropdown(false)
    }

    const handleScrollToMobTestimonialsRef = () => {
        scrollToMobTestimonialsRef()
        setNavOpen(false)
    }

    const handleScrollToContactFormRef = () => {
        scrollToContactFormRef()
        setNavOpen(false)
    }

    return (
        isHeaderFixed && (
            <header style={navOpen ? { width: '66vw' } : {}}>
                <div className="toggle"
                    onClick={() => handleToggleClick()}>
                    <svg className={navOpen ? 'spin-out' : 'spin-in'} stroke="#efefef" fill="#efefef" strokeWidth="0" viewBox="0 0 512 512" height="3em" width="3em" xmlns="http://www.w3.org/2000/svg"><path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"></path></svg>

                    <svg className={!navOpen ? 'spin-out' : 'spin-in'} stroke="#efefef" fill="#efefef" strokeWidth="0" viewBox="0 0 1024 1024" height="3em" width="3em" xmlns="http://www.w3.org/2000/svg"><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg>
                </div>

                {navOpen && (
                    <aside className="mobile-nav">
                        <div
                            className="">
                            <h3 onClick={() => handleDesignClick()}>
                                Design
                            </h3>
                            {designMobDropdown &&
                                <div>
                                    <p onClick={() => handleScrollToDesignRef()}
                                    >WordPress / CMS
                                    </p>
                                    <p onClick={() => handleScrollToFrontendRef()}
                                    >FrontEnd Development</p>
                                    <p onClick={() => handleScrollToEcommerceRef()}>E-commerce</p>
                                    <p onClick={() => handleScrollToFullStackRef()}>Full Stack</p>
                                    <p onClick={() => handleScrollToWebAppsRef}>Web Applications</p>
                                    <p onClick={() => handleScrollToUiRef}>UI/UX Design</p>
                                </div>
                            }
                        </div>

                        <div className="">
                            <h3 onClick={() => handleScrollToAboutRef()}>
                                About
                            </h3>
                        </div>

                        <div
                            className="">
                            <h3 onClick={() => handleProjectsClick()}>
                                Projects
                            </h3>

                            {projectsMobDropdown &&
                                <div>
                                    <p onClick={() => handleScrollToMobProjectsRef()}
                                    >Canguu Cafe
                                    </p>
                                    <p onClick={() => scrollToMobProjectsRef()}
                                    >Studio Shodwe
                                    </p>
                                    <p onClick={() => handleScrollToMobMoreProjectsRef()}
                                    >XMAX Thai Boxing Club</p>
                                    <p onClick={() => handleScrollToMobMoreProjectsRef()}>Thamel Dentistry</p>
                                    <p onClick={() => handleScrollToMobEvenMoreProjectsRef()}
                                    >Ask</p>
                                    <p onClick={() => handleScrollToMobFinalProjectsRef()}
                                    >more...</p>
                                </div>
                            }
                        </div>

                        <div className="">
                            <h3 onClick={() => handleScrollToMobTestimonialsRef()}>
                                Testimonials
                            </h3>
                        </div>

                        <div className="">
                            <h3 onClick={() => handleScrollToContactFormRef()}>
                                Contact
                            </h3>
                        </div>
                    </aside>
                )}
            </header>)
    )
}

MobileNav.propTypes = {
    scrollToAboutRef: PropTypes.func,
    scrollToDesignRef: PropTypes.func,
    scrollToProjectsRef: PropTypes.func,
    scrollToTestimonialsRef: PropTypes.func,
    scrollToContactFormRef: PropTypes.func,
    isMobile: PropTypes.bool,
    scrollToMobProjectsRef: PropTypes.func,
    scrollToMobMoreProjectsRef: PropTypes.func,
    scrollToMobEvenMoreProjectsRef: PropTypes.func,
    scrollToMobFinalProjectsRef: PropTypes.func,
    scrollToMobTestimonialsRef: PropTypes.func,
    scrollToFrontendRef: PropTypes.func,
};
export default MobileNav