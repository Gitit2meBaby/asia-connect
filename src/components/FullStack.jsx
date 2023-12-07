import { useRef, useState, useEffect } from "react";
import PropTypes from 'prop-types';

import { useInView, motion } from "framer-motion";


const fullStackData = [
    {
        info: "Full Stack Applications rely on smooth integration between front-end interfaces and back-end functionalities. This connection facilitates rapid data exchange and ensures real-time responsiveness for a seamless user experience."
    },
    {
        info: "Robust API development is pivotal in our Full Stack Applications. We craft APIs that serve as reliable conduits, fostering seamless communication and integration between various software systems."
    },
    {
        info: "Scalable architecture is inherent in our Full Stack Applications. With an emphasis on maintainable code and well-documented systems, our designs seamlessly adapt, accommodating future growth effortlessly."
    },
    {
        info: "Server-side rendering optimization is core in our Full Stack Applications. Our strategies prioritise fast content delivery, enhancing user experiences through efficient rendering techniques"
    },
    {
        info: "Advanced caching mechanisms can define an applications performance. Implementing sophisticated techniques, we efficiently manage data, enhancing application speed and responsiveness."
    },
    {
        info: " Industry-standard encryption algorithms secure sensitive information during transmission and storage. Additionally, stringent access controls, multi-factor authentication, and regular security audits ensure continuous protection against potential vulnerabilities."
    },
    {
        info: "Automated test suites and continuous integration pipelines enable efficient code validation, enhancing software reliability and accelerating deployment cycles."
    }
]

const FullStack = ({ setFullStack }) => {
    const [hoveredIndex, setHoveredIndex] = useState(0);
    const [infoTitle, setInfoTitle] = useState('WordPress/ CMS Solutions');
    const [hoverEffect, setHoverEffect] = useState(1)
    const [hasRunEffect, setHasRunEffect] = useState(false);

    const buttonRef = useRef(null)
    const ref1 = useRef(null);
    const isInView1 = useInView(ref1, { margin: "-600px 0px -200px 0px" });

    // To display information about each topic
    const handleParagraphHover = (index) => {
        setInfoTitle(fullStackData[index].info);
        setHoveredIndex(index);
    };

    // Revert back to the initial state with heading
    const handleParagraphLeave = () => {
        setInfoTitle('WordPress/ CMS Solutions');
        setHoveredIndex(0);
    };

    // Hover type animation on first section
    useEffect(() => {
        if (isInView1 && !hasRunEffect) {
            const interval = setInterval(() => {
                setHoverEffect((prevItem) => (prevItem < 9 ? prevItem + 1 : 1));
                setInfoTitle(fullStackData[hoverEffect].info);
                setHoveredIndex(hoverEffect);
            }, 300);
            if (hoverEffect === 9) {
                setHasRunEffect(true);
                setHoveredIndex(0);
                setHoverEffect(0)
            }
            return () => clearInterval(interval);
        }

    }, [isInView1, hasRunEffect, hoverEffect]);

    // Hide the extra content 
    const handleLessButton = () => {
        setFullStack(false)
    }

    return (
        <motion.section className="info-boxes"
            initial={{ transform: 'translateY(100%' }}
            animate={{ transform: 'translateY(0%)', transition: { duration: .8 } }}
            exit={{ transform: 'translateY(100%', transition: { duration: .8 } }}
        >

            <div ref={ref1} className='info-box left-box'>
                <div className={`${!isInView1 ? "info-title left-info-title" : "info-title left-info-title black-white"} ${hoveredIndex >= 1 ? "info-paragraph left-info-paragraph" : ""}`}>
                    {hoveredIndex === 0 ? (
                        <>
                            <h3 className={!isInView1 ? "" : "black-white-text"}>Full Stack</h3>
                            <h3 className={!isInView1 ? "" : "black-white-text"}>Applications</h3>
                        </>
                    ) : (
                        <p>{infoTitle}</p>
                    )}

                </div>

                <div className={!isInView1 ? "info-content left-content" : "info-content left-content slide-in"}>
                    <div onMouseEnter={() => handleParagraphHover(1)} onMouseLeave={handleParagraphLeave}>
                        <p className={hoverEffect === 1 ? 'hover-bright' : ''}>Seamless Front-End & Back-End Integration</p>
                    </div>
                    <div onMouseEnter={() => handleParagraphHover(2)} onMouseLeave={handleParagraphLeave}>
                        <p className={hoverEffect === 2 ? 'hover-bright' : ''}>Robust API Development and Integration</p>
                    </div>
                    <div onMouseEnter={() => handleParagraphHover(3)} onMouseLeave={handleParagraphLeave}>
                        <p className={hoverEffect === 3 ? 'hover-bright' : ''}>Scalable Architecture for Future Growth</p>
                    </div>
                    <div onMouseEnter={() => handleParagraphHover(4)} onMouseLeave={handleParagraphLeave}>
                        <p className={hoverEffect === 4 ? 'hover-bright' : ''}>Optimized Server-Side Rendering</p>
                    </div>
                    <div onMouseEnter={() => handleParagraphHover(5)} onMouseLeave={handleParagraphLeave}>
                        <p className={hoverEffect === 5 ? 'hover-bright' : ''}>Advanced Caching Mechanisms</p>
                    </div>
                    <div onMouseEnter={() => handleParagraphHover(6)} onMouseLeave={handleParagraphLeave}>
                        <p className={hoverEffect === 6 ? 'hover-bright' : ''}>Data Encryption and Security Measures</p>
                    </div>
                    <div onMouseEnter={() => handleParagraphHover(7)} onMouseLeave={handleParagraphLeave}>
                        <p className={hoverEffect === 7 ? 'hover-bright' : ''}>Automated Testing and Continuous Integration</p>
                    </div>
                </div>
            </div>

            <div className="extra-info-btns" ref={buttonRef}>
                <button onClick={() => handleLessButton()}>See Less...</button>
            </div>

        </motion.section>
    )
}

FullStack.propTypes = {
    setFullStack: PropTypes.func,
};

export default FullStack