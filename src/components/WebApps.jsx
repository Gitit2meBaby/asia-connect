import { useRef, useState, useEffect } from "react";
import PropTypes from 'prop-types';

import { useInView, motion } from "framer-motion";


const WebAppsData = [
    {
        info: "We leverage cutting-edge technologies and a consultative approach to design and deploy solutions tailored specifically to your unique requirements, fostering innovation and efficiency."
    },
    {
        info: "We analyze business workflows, develop custom automation strategies, and deploy solutions that drive efficiency, reduce errors, and accelerate task completion."
    },
    {
        info: "Collaborating closely with clients across sectors, we design and deliver web applications that are finely tuned to meet the unique demands and functionalities required by different industries."
    },
    {
        info: "Our focus on platform-independent applications ensures seamless accessibility across devices and operating systems. We aim to develop performant applications regardless of the platform"
    },
    {
        info: "Vertically integrated software takes care of CRM, billing, task management, rounds, and more without the added costs of using multiple software providers."
    },
]

const WebApps = ({ setWebApps, isMobile }) => {
    const [hoveredIndex, setHoveredIndex] = useState(0);
    const [infoTitle, setInfoTitle] = useState('Web Applications');
    const [activeDropdown, setActiveDropdown] = useState(null);

    const ref1 = useRef(null);
    const isInView1 = useInView(ref1, { margin: "-600px 0px -200px 0px" });

    // To display information about each topic
    const handleParagraphHover = (index) => {
        if (!isMobile) {
            setInfoTitle(WebAppsData[index].info);
            setHoveredIndex(index);
        }
    };

    // Revert back to the initial state with heading
    const handleParagraphLeave = () => {
        if (!isMobile) {
            setInfoTitle('Web Applications');
            setHoveredIndex(0);
        }
    };

    // Handle mobile dropdown toggle
    const toggleDropdown = (itemId) => {
        if (isMobile) {
            if (activeDropdown === itemId) {
                setActiveDropdown(null);
            } else {
                setActiveDropdown(itemId);
            }
        }
    };

    return (
        <motion.section className="info-boxes"
            initial={{ transform: 'translateY(100%' }}
            animate={{ transform: 'translateY(0%)', transition: { duration: .8 } }}
            exit={{ transform: 'translateY(100%', transition: { duration: .8 } }}
        >
            <div ref={ref1} className='info-box right-box'>
                <div className={`info-content right-content ${!isInView1 && !isMobile ? '' : 'slide-in'}`}>
                    <div onMouseEnter={() => handleParagraphHover(1)} onMouseLeave={handleParagraphLeave}
                        onClick={() => toggleDropdown(1)}
                    >
                        <p>Custom Software Development</p>
                    </div>
                    <div
                        className={activeDropdown === 1 ? 'info-dropdown resize' : 'info-dropdown'}>
                        <p>{WebAppsData[0].info}</p>
                    </div>

                    <div onMouseEnter={() => handleParagraphHover(2)} onMouseLeave={handleParagraphLeave} onClick={() => toggleDropdown(2)}>
                        <p>Business Process Automation</p>
                    </div>
                    <div
                        className={activeDropdown === 2 ? 'info-dropdown resize' : 'info-dropdown'}>
                        <p>{WebAppsData[1].info}</p>
                    </div>

                    <div onMouseEnter={() => handleParagraphHover(3)} onMouseLeave={handleParagraphLeave} onClick={() => toggleDropdown(3)}>
                        <p>Industry-Specific Solutions</p>
                    </div>
                    <div
                        className={activeDropdown === 3 ? 'info-dropdown resize' : 'info-dropdown'}>
                        <p>{WebAppsData[2].info}</p>
                    </div>

                    <div onMouseEnter={() => handleParagraphHover(4)} onMouseLeave={handleParagraphLeave} onClick={() => toggleDropdown(4)}>
                        <p>Platform-Independent Applications</p>
                    </div>
                    <div
                        className={activeDropdown === 4 ? 'info-dropdown resize' : 'info-dropdown'}>
                        <p>{WebAppsData[3].info}</p>
                    </div>

                    <div onMouseEnter={() => handleParagraphHover(5)} onMouseLeave={handleParagraphLeave} onClick={() => toggleDropdown(5)}>
                        <p>Vertical Integration Software</p>
                    </div>
                    <div
                        className={activeDropdown === 5 ? 'info-dropdown resize' : 'info-dropdown'}>
                        <p>{WebAppsData[4].info}</p>
                    </div>

                </div>

                <div className={`${!isInView1 ? "info-title" : "info-title black-white"} ${hoveredIndex >= 1 ? "info-paragraph" : ""}`}>
                    {hoveredIndex === 0 ? (
                        <>
                            <h3 className={!isInView1 ? "" : "black-white-text"}>Web Apps</h3>
                        </>
                    ) : (
                        <p>{infoTitle}</p>
                    )}

                </div>
            </div>
        </motion.section>
    )
}

WebApps.propTypes = {
    setWebApps: PropTypes.func,
};

export default WebApps