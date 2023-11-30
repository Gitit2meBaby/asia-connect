import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import Typewriter from "typewriter-effect";
import { paragraphData } from "../paragraphData";


const InfoBoxes = () => {
    const [hoveredIndex, setHoveredIndex] = useState(0);
    const [infoTitle, setInfoTitle] = useState('WordPress/ CMS Solutions');

    const ref1 = useRef(null);
    const ref2 = useRef(null);

    // Use useInView for each element
    const isInView1 = useInView(ref1, { margin: "-600px 0px -200px 0px" });
    const isInView2 = useInView(ref2, { margin: "-600px 0px -200px 0px" });


    const handleParagraphHover = (index) => {
        setInfoTitle(paragraphData[index].info);
        setHoveredIndex(index);
    };

    const handleParagraphLeave = () => {
        setInfoTitle('WordPress/ CMS Solutions');
        setHoveredIndex(0);
    };

    return (
        <section className="info-boxes">
            <div ref={ref1} className='info-box right-box'>
                <div className={!isInView1 ? "info-content right-content" : "info-content right-content slide-in"}>
                    <div onMouseEnter={() => handleParagraphHover(1)} onMouseLeave={handleParagraphLeave}>
                        <p>Seamless content updates and editing</p>
                    </div>
                    <div onMouseEnter={() => handleParagraphHover(2)} onMouseLeave={handleParagraphLeave}>
                        <p>Fully customisable themes</p>
                    </div>
                    <div onMouseEnter={() => handleParagraphHover(3)} onMouseLeave={handleParagraphLeave}>
                        <p>Third Party Plugins</p>
                    </div>
                    <div onMouseEnter={() => handleParagraphHover(4)} onMouseLeave={handleParagraphLeave}>
                        <p>User-friendly interface</p>
                    </div>
                    <div onMouseEnter={() => handleParagraphHover(5)} onMouseLeave={handleParagraphLeave}>
                        <p>Fully Responsive design</p>
                    </div>
                    <div onMouseEnter={() => handleParagraphHover(6)} onMouseLeave={handleParagraphLeave}>
                        <p>Robust security features</p>
                    </div>
                    <div onMouseEnter={() => handleParagraphHover(7)} onMouseLeave={handleParagraphLeave}>
                        <p>SEO-friendly capabilities</p>
                    </div>
                    <div onMouseEnter={() => handleParagraphHover(8)} onMouseLeave={handleParagraphLeave}>
                        <p>Scalable architecture</p>
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
                        <p>Advanced animations and interactivivity</p>
                    </div>
                    <div onMouseEnter={() => handleParagraphHover(10)} onMouseLeave={handleParagraphLeave}>
                        <p>Efficient and well-documented code</p>
                    </div>
                    <div onMouseEnter={() => handleParagraphHover(11)} onMouseLeave={handleParagraphLeave}>
                        <p>Lightning-fast loading times</p>
                    </div>
                    <div onMouseEnter={() => handleParagraphHover(12)} onMouseLeave={handleParagraphLeave}>
                        <p>Seamless integration with various APIs</p>
                    </div>
                    <div onMouseEnter={() => handleParagraphHover(13)} onMouseLeave={handleParagraphLeave}>
                        <p>Accessibility-focused designs</p>
                    </div>
                    <div onMouseEnter={() => handleParagraphHover(14)} onMouseLeave={handleParagraphLeave}>
                        <p>Responsive layouts</p>
                    </div>
                    <div onMouseEnter={() => handleParagraphHover(15)} onMouseLeave={handleParagraphLeave}>
                        <p>Efficient and optimized data management</p>
                    </div>

                </div>
            </div>

            <div className="see-more-designs">
                <Typewriter
                    options={{
                        strings: ['Check out full list and details'],
                        autoStart: true,
                        loop: true,
                        pause: 4000,
                        delay: 30,
                    }}
                />
                <button>More Info...</button>

            </div>

        </section>
    )
}

export default InfoBoxes