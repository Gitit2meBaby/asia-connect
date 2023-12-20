import { useRef, useState, useEffect, forwardRef } from "react";
import { useInView } from "framer-motion";
import Typewriter from "typewriter-effect";
import { paragraphData } from "../paragraphData";

const InfoBoxes = forwardRef(({ refProp, isMobile }, ref) => {
    const [hoveredIndex, setHoveredIndex] = useState(0);
    const [infoTitle, setInfoTitle] = useState('WordPress/ CMS Solutions');
    const [hoverEffect, setHoverEffect] = useState(0)
    const [hoverEffect2, setHoverEffect2] = useState(0)
    const [hasRunEffect, setHasRunEffect] = useState(false);
    const [hasRunEffect2, setHasRunEffect2] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    // The two section boxes
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const marginValue = isMobile ? "-600px 0px -200px 0px" : "-100px 0px 100px 0px";
    const isInView1 = useInView(ref1, { margin: marginValue });
    const isInView2 = useInView(ref2, { margin: marginValue });


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

    }, [isInView1, hasRunEffect, hoverEffect, paragraphData, isMobile]);

    // Hover type animation on second section
    useEffect(() => {
        if (!isMobile) {
            if (isInView2 && !hasRunEffect2) {
                const interval = setInterval(() => {
                    setHoverEffect2((prevItem) => (prevItem < 16 ? prevItem + 1 : 9));
                    setInfoTitle(paragraphData[hoverEffect2].info);
                    setHoveredIndex(hoverEffect2);
                }, 300);
                if (hoverEffect2 === 16) {
                    setHasRunEffect2(true);
                    setHoveredIndex(0);
                    setHoverEffect2(0)
                }
                return () => clearInterval(interval);
            }
        }
    }, [isInView2, hasRunEffect2, hoverEffect2, paragraphData, isMobile]);

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

            <div ref={ref2} className='info-box left-box'>
                <div className={`${!isInView2 ? "info-title left-info-title" : "info-title left-info-title black-white"} ${hoveredIndex >= 9 ? "info-paragraph left-info-paragraph" : ""}`}>
                    {hoveredIndex === 0 ? (
                        <>
                            <h3 className={!isInView2 ? "" : "black-white-text"}>Front End</h3>
                            <h3 className={!isInView2 ? "" : "black-white-text"}>Development</h3>
                        </>
                    ) : (
                        <p>{infoTitle}</p>
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

            <div className="see-more-designs">
                <Typewriter
                    options={{
                        strings: ["Don't see what you are looking for? ...... Click below"],
                        autoStart: true,
                        loop: true,
                        pause: 4000,
                        delay: 60,
                    }}
                />
            </div>

        </section >
    )
}
)

InfoBoxes.displayName = 'InfoBoxes';

export default InfoBoxes