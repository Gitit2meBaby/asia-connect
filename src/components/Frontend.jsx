import { useRef, useState, useEffect, forwardRef } from "react";
import { useInView } from "framer-motion";
import { paragraphData } from "../paragraphData";
import PropTypes from 'prop-types';

const Frontend = forwardRef(({ refProp, isMobile }, ref) => {
    const [hoveredIndex2, setHoveredIndex2] = useState(0);
    const [infoTitle2, setInfoTitle2] = useState('Frontend Development');
    const [hoverEffect2, setHoverEffect2] = useState(0)
    const [hasRunEffect2, setHasRunEffect2] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    // The two section boxes
    const ref2 = useRef(null);
    const marginValue = isMobile ? "-200px 0px -200px 0px" : "-400px 0px -400px 0px";
    const isInView2 = useInView(ref2, { margin: marginValue });


    // To display information about each topic
    const handleParagraphHover = (index) => {
        if (!isMobile) {
            setInfoTitle2(paragraphData[index].info);
            setHoveredIndex2(index);
        }
    };

    // Revert back to the initial state with heading
    const handleParagraphLeave = () => {
        if (!isMobile) {
            setInfoTitle2('Frontend Development');
            setHoveredIndex2(0);
        }
    };

    // Inside your component function
    const hoverEffectRef = useRef(hoverEffect2);

    // Hover type animation
    useEffect(() => {
        if (!isMobile) {
            if (isInView2 && !hasRunEffect2) {
                const interval = setInterval(() => {
                    hoverEffectRef.current = hoverEffect2 < 16 ? hoverEffect2 + 1 : 9;
                    setHoverEffect2(hoverEffectRef.current);
                    setInfoTitle2(paragraphData[hoverEffectRef.current].info);
                    setHoveredIndex2(hoverEffectRef.current);
                }, 300);
                if (hoverEffectRef.current === 16) {
                    setHasRunEffect2(true);
                    setHoveredIndex2(0);
                    setHoverEffect2(0);
                    clearInterval(interval);
                }
                return () => clearInterval(interval);
            }
        }
    }, [isInView2, hasRunEffect2, hoverEffect2, isMobile]);

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
            <div ref={ref2} className='info-box left-box'>
                <div className={`${!isInView2 ? "info-title left-info-title" : "info-title left-info-title black-white"} ${hoveredIndex2 >= 9 ? "info-paragraph left-info-paragraph" : ""}`}>
                    {hoveredIndex2 === 0 ? (
                        <>
                            <h3 className={!isInView2 ? "" : "black-white-text"}>Front End</h3>
                            <h3 className={!isInView2 ? "" : "black-white-text"}>Development</h3>
                        </>
                    ) : (
                        <p>{infoTitle2}</p>
                    )}
                </div>

                <div className={`info-content left-content ${!isInView2 && !isMobile ? '' : 'slide-in'}`}>

                    <div onMouseEnter={() => handleParagraphHover(9)}
                        onMouseLeave={handleParagraphLeave}>
                        <p key={paragraphData[9]}
                            onClick={() => toggleDropdown(9)}
                            className={hoverEffect2 === 9 ? 'hover-bright' : ''}>
                            Advanced animations and interactivity
                        </p>
                        <div
                            className={activeDropdown === 9 ? 'info-dropdown resize' : 'info-dropdown'}>
                            <p>{paragraphData[9].info}</p>
                        </div>

                    </div>
                    <div onMouseEnter={() => handleParagraphHover(10)} onMouseLeave={handleParagraphLeave}>
                        <p key={paragraphData[10]}
                            onClick={() => toggleDropdown(10)}
                            className={hoverEffect2 === 10 ? 'hover-bright' : ''}>
                            Efficient and well-documented code
                        </p>
                        <div
                            className={activeDropdown === 10 ? 'info-dropdown resize' : 'info-dropdown'}>
                            <p>{paragraphData[10].info}</p>
                        </div>

                    </div>
                    <div onMouseEnter={() => handleParagraphHover(11)} onMouseLeave={handleParagraphLeave}>
                        <p key={paragraphData[11]}
                            onClick={() => toggleDropdown(11)}
                            className={hoverEffect2 === 11 ? 'hover-bright' : ''}>
                            Lightning-fast loading times
                        </p>
                        <div
                            className={activeDropdown === 11 ? 'info-dropdown resize' : 'info-dropdown'}>
                            <p>{paragraphData[11].info}</p>
                        </div>

                    </div>
                    <div onMouseEnter={() => handleParagraphHover(12)} onMouseLeave={handleParagraphLeave}>
                        <p key={paragraphData[12]}
                            onClick={() => toggleDropdown(12)}
                            className={hoverEffect2 === 12 ? 'hover-bright' : ''}>
                            Seamless integration with various APIs
                        </p>
                        <div
                            className={activeDropdown === 12 ? 'info-dropdown resize' : 'info-dropdown'}>
                            <p>{paragraphData[12].info}</p>
                        </div>

                    </div>
                    <div onMouseEnter={() => handleParagraphHover(13)} onMouseLeave={handleParagraphLeave}>
                        <p key={paragraphData[13]}
                            onClick={() => toggleDropdown(13)}
                            className={hoverEffect2 === 13 ? 'hover-bright' : ''}>
                            Accessibility-focused designs
                        </p>
                        <div
                            className={activeDropdown === 13 ? 'info-dropdown resize' : 'info-dropdown'}>
                            <p>{paragraphData[13].info}</p>
                        </div>

                    </div>
                    <div onMouseEnter={() => handleParagraphHover(14)} onMouseLeave={handleParagraphLeave}>
                        <p key={paragraphData[14]}
                            onClick={() => toggleDropdown(14)}
                            className={hoverEffect2 === 14 ? 'hover-bright' : ''}>
                            Responsive layouts
                        </p>
                        <div
                            className={activeDropdown === 14 ? 'info-dropdown resize' : 'info-dropdown'}>
                            <p>{paragraphData[14].info}</p>
                        </div>

                    </div>
                    <div onMouseEnter={() => handleParagraphHover(15)} onMouseLeave={handleParagraphLeave}>
                        <p key={paragraphData[15]}
                            onClick={() => toggleDropdown(15)}
                            className={hoverEffect2 === 15 ? 'hover-bright' : ''}>
                            Efficient and optimized data management
                        </p>
                        <div
                            className={activeDropdown === 15 ? 'info-dropdown resize' : 'info-dropdown'}>
                            <p>{paragraphData[15].info}</p>
                        </div>

                    </div>
                </div>
            </div>
        </section >
    )
}
)

Frontend.displayName = 'Frontend';

Frontend.propTypes = {
    refProp: PropTypes.object,
    isMobile: PropTypes.bool,
}

export default Frontend