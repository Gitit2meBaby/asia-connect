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

const Ui = ({ setUi, isMobile }) => {
    const [hoveredIndex, setHoveredIndex] = useState(0);
    const [infoTitle, setInfoTitle] = useState('UI/UX Design');
    const [activeDropdown, setActiveDropdown] = useState(null);

    const ref1 = useRef(null);
    const isInView1 = useInView(ref1, { margin: "-600px 0px -200px 0px" });

    // To display information about each topic
    const handleParagraphHover = (index) => {
        if (!isMobile) {
            setInfoTitle(UiData[index].info);
            setHoveredIndex(index);
        }
    };

    // Revert back to the initial state with heading
    const handleParagraphLeave = () => {
        if (!isMobile) {
            setInfoTitle('UI/UX Design');
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

                <div className={`info-content left-content ${!isInView1 && !isMobile ? '' : 'slide-in'}`}>
                    <div onMouseEnter={() => handleParagraphHover(1)} onMouseLeave={handleParagraphLeave} onClick={() => toggleDropdown(1)}>
                        <p>Wireframing and Prototyping</p>
                    </div>
                    <div
                        className={activeDropdown === 1 ? 'info-dropdown resize' : 'info-dropdown'}>
                        <p>{UiData[0].info}</p>
                    </div>

                    <div onMouseEnter={() => handleParagraphHover(2)} onMouseLeave={handleParagraphLeave} onClick={() => toggleDropdown(2)}>
                        <p>Figma Design Mockups</p>
                    </div>
                    <div
                        className={activeDropdown === 2 ? 'info-dropdown resize' : 'info-dropdown'}>
                        <p>{UiData[1].info}</p>
                    </div>

                    <div onMouseEnter={() => handleParagraphHover(3)} onMouseLeave={handleParagraphLeave} onClick={() => toggleDropdown(3)}>
                        <p>Art Direction and Branding</p>
                    </div>
                    <div
                        className={activeDropdown === 3 ? 'info-dropdown resize' : 'info-dropdown'}>
                        <p>{UiData[2].info}</p>
                    </div>

                    <div onMouseEnter={() => handleParagraphHover(4)} onMouseLeave={handleParagraphLeave} onClick={() => toggleDropdown(4)}>
                        <p>Graphic Design</p>
                    </div>
                    <div
                        className={activeDropdown === 4 ? 'info-dropdown resize' : 'info-dropdown'}>
                        <p>{UiData[3].info}</p>
                    </div>

                    <div onMouseEnter={() => handleParagraphHover(5)} onMouseLeave={handleParagraphLeave} onClick={() => toggleDropdown(5)}>
                        <p>Logo Creation</p>
                    </div>
                    <div
                        className={activeDropdown === 5 ? 'info-dropdown resize' : 'info-dropdown'}>
                        <p>{UiData[4].info}</p>
                    </div>

                    <div onMouseEnter={() => handleParagraphHover(6)} onMouseLeave={handleParagraphLeave} onClick={() => toggleDropdown(6)}>
                        <p>Language Quality Assurance</p>
                    </div>
                    <div
                        className={activeDropdown === 6 ? 'info-dropdown resize' : 'info-dropdown'}>
                        <p>{UiData[5].info}</p>
                    </div>

                </div>
            </div>
        </motion.section>
    )
}

Ui.propTypes = {
    setUi: PropTypes.func,
};

export default Ui