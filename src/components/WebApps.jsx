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

const WebApps = ({ setWebApps }) => {
    const [hoveredIndex, setHoveredIndex] = useState(0);
    const [infoTitle, setInfoTitle] = useState('Web Applications');
    const [hoverEffect, setHoverEffect] = useState(1)
    const [hasRunEffect, setHasRunEffect] = useState(false);

    const buttonRef = useRef(null)
    const ref1 = useRef(null);
    const isInView1 = useInView(ref1, { margin: "-600px 0px -200px 0px" });

    // To display information about each topic
    const handleParagraphHover = (index) => {
        setInfoTitle(WebAppsData[index].info);
        setHoveredIndex(index);
    };

    // Revert back to the initial state with heading
    const handleParagraphLeave = () => {
        setInfoTitle('Web Applications');
        setHoveredIndex(0);
    };

    return (
        <motion.section className="info-boxes"
            initial={{ transform: 'translateY(100%' }}
            animate={{ transform: 'translateY(0%)', transition: { duration: .8 } }}
            exit={{ transform: 'translateY(100%', transition: { duration: .8 } }}
        >
            <div ref={ref1} className='info-box right-box'>
                <div className={!isInView1 ? "info-content right-content" : "info-content right-content slide-in"}>
                    <div onMouseEnter={() => handleParagraphHover(1)} onMouseLeave={handleParagraphLeave}>
                        <p className={hoverEffect === 1 ? 'hover-bright' : ''}>Custom Software Development</p>
                    </div>
                    <div onMouseEnter={() => handleParagraphHover(2)} onMouseLeave={handleParagraphLeave}>
                        <p className={hoverEffect === 2 ? 'hover-bright' : ''}>Business Process Automation</p>
                    </div>
                    <div onMouseEnter={() => handleParagraphHover(3)} onMouseLeave={handleParagraphLeave}>
                        <p className={hoverEffect === 3 ? 'hover-bright' : ''}>Industry-Specific Solutions</p>
                    </div>
                    <div onMouseEnter={() => handleParagraphHover(4)} onMouseLeave={handleParagraphLeave}>
                        <p className={hoverEffect === 4 ? 'hover-bright' : ''}>Platform-Independent Applications</p>
                    </div>
                    <div onMouseEnter={() => handleParagraphHover(5)} onMouseLeave={handleParagraphLeave}>
                        <p className={hoverEffect === 5 ? 'hover-bright' : ''}>Vertical Integration Software</p>
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