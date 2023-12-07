import { useRef, useState, useEffect } from "react";
import PropTypes from 'prop-types';

import { useInView, motion } from "framer-motion";


const UiData = [
    {
        info: "Crafting wireframes, mockups, and prototypes, we prep projects for seamless handover to expansive development teams."
    },
    {
        info: "Leveraging Figma's collaborative environment, we meticulously craft detailed design mockups that harmonize seamlessly with your project's vision and specific requirements."
    },
    {
        info: "Our art direction and branding expertise delivers cohesive visual strategies for impactful brand messaging. We can redesign existing palattes or create an entirely new look"
    },
    {
        info: "Embracing a spectrum of tools including Photoshop, Figma, and Canva, we specialise in curating diverse and engaging visuals, leveraging these platforms to create bespoke designs."
    },
    {
        info: "Our goal is to create logos that not only represent your brand but become an integral part of your brand narrative, fostering recognition and recall."
    },
    {
        info: "We provide proofreading, grammar checks, and language refinement, we ensure that all content is not only error-free but also maintains a consistent tone and quality."
    },
]

const Ui = ({ setUi }) => {
    const [hoveredIndex, setHoveredIndex] = useState(0);
    const [infoTitle, setInfoTitle] = useState('UI/UX Design');
    const [hoverEffect, setHoverEffect] = useState(1)
    const [hasRunEffect, setHasRunEffect] = useState(false);

    const buttonRef = useRef(null)
    const ref1 = useRef(null);
    const isInView1 = useInView(ref1, { margin: "-600px 0px -200px 0px" });

    // To display information about each topic
    const handleParagraphHover = (index) => {
        setInfoTitle(UiData[index].info);
        setHoveredIndex(index);
    };

    // Revert back to the initial state with heading
    const handleParagraphLeave = () => {
        setInfoTitle('UI/UX Design');
        setHoveredIndex(0);
    };

    // Hover type animation on first section
    useEffect(() => {
        if (isInView1 && !hasRunEffect) {
            const interval = setInterval(() => {
                setHoverEffect((prevItem) => (prevItem < 8 ? prevItem + 1 : 1));
                setInfoTitle(UiData[hoverEffect].info);
                setHoveredIndex(hoverEffect);
            }, 300);
            if (hoverEffect === 8) {
                setHasRunEffect(true);
                setHoveredIndex(0);
                setHoverEffect(0)
            }
            return () => clearInterval(interval);
        }

    }, [isInView1, hasRunEffect, hoverEffect]);

    // Hide the extra content 
    const handleLessButton = () => {
        setUi(false)
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
                            <h3 className={!isInView1 ? "" : "black-white-text"}>UI/UX</h3>
                            <h3 className={!isInView1 ? "" : "black-white-text"}>Design</h3>
                        </>
                    ) : (
                        <p>{infoTitle}</p>
                    )}

                </div>

                <div className={!isInView1 ? "info-content left-content" : "info-content left-content slide-in"}>
                    <div onMouseEnter={() => handleParagraphHover(1)} onMouseLeave={handleParagraphLeave}>
                        <p className={hoverEffect === 1 ? 'hover-bright' : ''}>Wireframing and Prototyping</p>
                    </div>
                    <div onMouseEnter={() => handleParagraphHover(2)} onMouseLeave={handleParagraphLeave}>
                        <p className={hoverEffect === 2 ? 'hover-bright' : ''}>Figma Design Mockups</p>
                    </div>
                    <div onMouseEnter={() => handleParagraphHover(3)} onMouseLeave={handleParagraphLeave}>
                        <p className={hoverEffect === 3 ? 'hover-bright' : ''}>Art Direction and Branding</p>
                    </div>
                    <div onMouseEnter={() => handleParagraphHover(4)} onMouseLeave={handleParagraphLeave}>
                        <p className={hoverEffect === 4 ? 'hover-bright' : ''}>Graphic Design</p>
                    </div>
                    <div onMouseEnter={() => handleParagraphHover(5)} onMouseLeave={handleParagraphLeave}>
                        <p className={hoverEffect === 5 ? 'hover-bright' : ''}>Logo Creation</p>
                    </div>
                    <div onMouseEnter={() => handleParagraphHover(6)} onMouseLeave={handleParagraphLeave}>
                        <p className={hoverEffect === 6 ? 'hover-bright' : ''}>Language Quality Assurance</p>
                    </div>
                </div>
            </div>

            <div className="extra-info-btns" ref={buttonRef}>
                <button onClick={() => handleLessButton()}>See Less...</button>
            </div>

        </motion.section>
    )
}

Ui.propTypes = {
    setUi: PropTypes.func,
};

export default Ui