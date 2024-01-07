import { useRef, useState, useEffect, forwardRef } from "react";
import { useInView } from "framer-motion";
import { paragraphData } from "../paragraphData";
import PropTypes from 'prop-types';

const WordPress = forwardRef(({ refProp, isMobile }, ref) => {
    const [hoveredIndex, setHoveredIndex] = useState(0);
    const [infoTitle, setInfoTitle] = useState('WordPress/ CMS Solutions');
    const [hoverEffect, setHoverEffect] = useState(0)
    const [hasRunEffect, setHasRunEffect] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    // The two section boxes
    const ref1 = useRef(null);
    const marginValue = isMobile ? "-200px 0px -200px 0px" : "-400px 0px -400px 0px";
    const isInView1 = useInView(ref1, { margin: marginValue });


    // To display information about each topic
    const handleParagraphHover = (index) => {
        if (!isMobile) {
            setInfoTitle(paragraphData[index].info);
            setHoveredIndex(index);
        }
    };

    // Revert back to the initial state with heading
    const handleParagraphLeave = () => {
        if (!isMobile) {
            setInfoTitle('WordPress/ CMS Solutions');
            setHoveredIndex(0);
        }
    };

    // Hover type animation on first section
    useEffect(() => {
        if (!isMobile) {
            if (isInView1 && !hasRunEffect) {
                const interval = setInterval(() => {
                    setHoverEffect((prevItem) => (prevItem < 9 ? prevItem + 1 : 1));
                    setInfoTitle(paragraphData[hoverEffect].info);
                    setHoveredIndex(hoverEffect);
                }, 300);
                if (hoverEffect === 9) {
                    setHasRunEffect(true);
                    setHoveredIndex(0);
                    setHoverEffect(0)
                }
                return () => clearInterval(interval);
            }
        }

    }, [isInView1, hasRunEffect, hoverEffect, isMobile]);

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
        <section ref={refProp} className="info-boxes">

            <div ref={ref1} className='info-box right-box'>
                <div className={!isInView1 ? "info-content right-content" : "info-content right-content slide-in"}>
                    <div onMouseEnter={() => handleParagraphHover(1)} onMouseLeave={handleParagraphLeave}>
                        <p key={paragraphData[1]}
                            onClick={() => toggleDropdown(1)}
                            className={hoverEffect === 1 ? 'hover-bright' : ''}>{paragraphData[1].title}</p>
                        <div
                            className={activeDropdown === 1 ? 'info-dropdown resize' : 'info-dropdown'}>
                            <p>{paragraphData[1].info}</p>
                        </div>
                    </div>

                    <div onMouseEnter={() => handleParagraphHover(2)} onMouseLeave={handleParagraphLeave}>
                        <p key={paragraphData[2]}
                            onClick={() => toggleDropdown(2)}
                            className={hoverEffect === 2 ? 'hover-bright' : ''}>
                            Fully customisable themes
                        </p>
                        <div
                            className={activeDropdown === 2 ? 'info-dropdown resize' : 'info-dropdown'}>
                            <p>{paragraphData[2].info}</p>
                        </div>
                    </div>

                    <div onMouseEnter={() => handleParagraphHover(3)} onMouseLeave={handleParagraphLeave}>
                        <p key={paragraphData[3]}
                            onClick={() => toggleDropdown(3)}
                            className={hoverEffect === 3 ? 'hover-bright' : ''}>
                            Third Party Plugins
                        </p>
                        <div
                            className={activeDropdown === 3 ? 'info-dropdown resize' : 'info-dropdown'}>
                            <p>{paragraphData[3].info}</p>
                        </div>

                    </div>

                    <div onMouseEnter={() => handleParagraphHover(4)} onMouseLeave={handleParagraphLeave}>
                        <p key={paragraphData[4]}
                            onClick={() => toggleDropdown(4)}
                            className={hoverEffect === 4 ? 'hover-bright' : ''}>
                            User-friendly interface
                        </p>
                        <div
                            className={activeDropdown === 4 ? 'info-dropdown resize' : 'info-dropdown'}>
                            <p>{paragraphData[4].info}</p>
                        </div>

                    </div>

                    <div onMouseEnter={() => handleParagraphHover(5)} onMouseLeave={handleParagraphLeave}>
                        <p key={paragraphData[5]}
                            onClick={() => toggleDropdown(5)}
                            className={hoverEffect === 5 ? 'hover-bright' : ''}>
                            Fully Responsive design
                        </p>
                        <div
                            className={activeDropdown === 5 ? 'info-dropdown resize' : 'info-dropdown'}>
                            <p>{paragraphData[5].info}</p>
                        </div>

                    </div>

                    <div onMouseEnter={() => handleParagraphHover(6)} onMouseLeave={handleParagraphLeave}>
                        <p key={paragraphData[6]}
                            onClick={() => toggleDropdown(6)}
                            className={hoverEffect === 6 ? 'hover-bright' : ''}>
                            Robust security features
                        </p>
                        <div
                            className={activeDropdown === 6 ? 'info-dropdown resize' : 'info-dropdown'}>
                            <p>{paragraphData[6].info}</p>
                        </div>
                    </div>

                    <div onMouseEnter={() => handleParagraphHover(7)} onMouseLeave={handleParagraphLeave}>
                        <p key={paragraphData[7]}
                            onClick={() => toggleDropdown(7)}
                            className={hoverEffect === 7 ? 'hover-bright' : ''}>
                            SEO-friendly capabilities
                        </p>
                        <div
                            className={activeDropdown === 7 ? 'info-dropdown resize' : 'info-dropdown'}>
                            <p>{paragraphData[7].info}</p>
                        </div>
                    </div>

                    <div onMouseEnter={() => handleParagraphHover(8)} onMouseLeave={handleParagraphLeave}>
                        <p key={paragraphData[8]}
                            onClick={() => toggleDropdown(8)}
                            className={hoverEffect === 8 ? 'hover-bright' : ''}>
                            Scalable architecture
                        </p>
                        <div
                            className={activeDropdown === 8 ? 'info-dropdown resize' : 'info-dropdown'}>
                            <p>{paragraphData[8].info}</p>
                        </div>

                    </div>
                </div>

                <div className={`${!isInView1 ? "info-title" : "info-title black-white"} ${hoveredIndex >= 1 ? "info-paragraph" : ""}`}>
                    {hoveredIndex === 0 ? (
                        <>
                            <h3 className={!isInView1 ? "" : "black-white-text"}>WordPress/ CMS</h3>
                            <h3 className={!isInView1 ? "" : "black-white-text"}>Solutions</h3>
                        </>
                    ) : (
                        <p>{infoTitle}</p>
                    )}

                </div>
            </div>
        </section >
    )
}
)

WordPress.displayName = 'WordPress';

WordPress.propTypes = {
    refProp: PropTypes.object,
    isMobile: PropTypes.bool,
}

export default WordPress