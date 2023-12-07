import { useRef, useState, useEffect, forwardRef } from "react";
import { useInView } from "framer-motion";
import Typewriter from "typewriter-effect";
import { paragraphData } from "../paragraphData";

const InfoBoxes = forwardRef(({ refProp }, ref) => {
    const [hoveredIndex, setHoveredIndex] = useState(0);
    const [infoTitle, setInfoTitle] = useState('WordPress/ CMS Solutions');
    const [hoverEffect, setHoverEffect] = useState(1)
    const [hoverEffect2, setHoverEffect2] = useState(9)
    const [hasRunEffect, setHasRunEffect] = useState(false);
    const [hasRunEffect2, setHasRunEffect2] = useState(false);

    // The two section boxes
    const ref1 = useRef(null);
    const ref2 = useRef(null);

    // Use useInView for each element
    const isInView1 = useInView(ref1, { margin: "-600px 0px -200px 0px" });
    const isInView2 = useInView(ref2, { margin: "-600px 0px -200px 0px" });

    // To display information about each topic
    const handleParagraphHover = (index) => {
        setInfoTitle(paragraphData[index].info);
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

    }, [isInView1, hasRunEffect, hoverEffect, paragraphData]);

    // Hover type animation on second section
    useEffect(() => {
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

    }, [isInView2, hasRunEffect2, hoverEffect2, paragraphData]);

    return (
        <section ref={refProp} className="info-boxes">
            <div ref={ref1} className='info-box right-box'>
                <div className={!isInView1 ? "info-content right-content" : "info-content right-content slide-in"}>
                    <div onMouseEnter={() => handleParagraphHover(1)} onMouseLeave={handleParagraphLeave}>
                        <p className={hoverEffect === 1 ? 'hover-bright' : ''}>Seamless content updates and editing</p>
                    </div>
                    <div onMouseEnter={() => handleParagraphHover(2)} onMouseLeave={handleParagraphLeave}>
                        <p className={hoverEffect === 2 ? 'hover-bright' : ''}>Fully customisable themes</p>
                    </div>
                    <div onMouseEnter={() => handleParagraphHover(3)} onMouseLeave={handleParagraphLeave}>
                        <p className={hoverEffect === 3 ? 'hover-overlay' : ''}>Third Party Plugins</p>
                    </div>
                    <div onMouseEnter={() => handleParagraphHover(4)} onMouseLeave={handleParagraphLeave}>
                        <p className={hoverEffect === 4 ? 'hover-bright' : ''}>User-friendly interface</p>
                    </div>
                    <div onMouseEnter={() => handleParagraphHover(5)} onMouseLeave={handleParagraphLeave}>
                        <p className={hoverEffect === 5 ? 'hover-bright' : ''}>Fully Responsive design</p>
                    </div>
                    <div onMouseEnter={() => handleParagraphHover(6)} onMouseLeave={handleParagraphLeave}>
                        <p className={hoverEffect === 6 ? 'hover-bright' : ''}>Robust security features</p>
                    </div>
                    <div onMouseEnter={() => handleParagraphHover(7)} onMouseLeave={handleParagraphLeave}>
                        <p className={hoverEffect === 7 ? 'hover-bright' : ''}>SEO-friendly capabilities</p>
                    </div>
                    <div onMouseEnter={() => handleParagraphHover(8)} onMouseLeave={handleParagraphLeave}>
                        <p className={hoverEffect === 8 ? 'hover-bright' : ''}>Scalable architecture</p>
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
                <div className={!isInView2 ? "info-content left-content" : "info-content left-content slide-in"}>
                    <div onMouseEnter={() => handleParagraphHover(9)}
                        onMouseLeave={handleParagraphLeave}>
                        <p className={hoverEffect2 === 9 ? 'hover-bright' : ''}>Advanced animations and interactivivity</p>
                    </div>
                    <div onMouseEnter={() => handleParagraphHover(10)} onMouseLeave={handleParagraphLeave}>
                        <p className={hoverEffect2 === 10 ? 'hover-bright' : ''}>Efficient and well-documented code</p>
                    </div>
                    <div onMouseEnter={() => handleParagraphHover(11)} onMouseLeave={handleParagraphLeave}>
                        <p className={hoverEffect2 === 11 ? 'hover-bright' : ''}>Lightning-fast loading times</p>
                    </div>
                    <div onMouseEnter={() => handleParagraphHover(12)} onMouseLeave={handleParagraphLeave}>
                        <p className={hoverEffect2 === 12 ? 'hover-bright' : ''}>Seamless integration with various APIs</p>
                    </div>
                    <div onMouseEnter={() => handleParagraphHover(13)} onMouseLeave={handleParagraphLeave}>
                        <p className={hoverEffect2 === 13 ? 'hover-bright' : ''}>Accessibility-focused designs</p>
                    </div>
                    <div onMouseEnter={() => handleParagraphHover(14)} onMouseLeave={handleParagraphLeave}>
                        <p className={hoverEffect2 === 14 ? 'hover-bright' : ''}>Responsive layouts</p>
                    </div>
                    <div onMouseEnter={() => handleParagraphHover(15)} onMouseLeave={handleParagraphLeave}>
                        <p className={hoverEffect2 === 15 ? 'hover-bright' : ''}>Efficient and optimized data management</p>
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

        </section>
    )
}
)

InfoBoxes.displayName = 'InfoBoxes';

export default InfoBoxes