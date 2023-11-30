import { useRef } from "react";
import { useInView } from "framer-motion";
import Typewriter from "typewriter-effect";


const InfoBoxes = () => {
    const ref1 = useRef(null);
    const ref2 = useRef(null);

    // Use useInView for each element
    const isInView1 = useInView(ref1, { margin: "-600px 0px -200px 0px" });
    const isInView2 = useInView(ref2, { margin: "-600px 0px -200px 0px" });

    return (
        <section className="info-boxes">
            <div ref={ref1} className='info-box right-box'>
                <div className={!isInView1 ? "info-content right-content" : "info-content right-content slide-in"}>
                    <div><p>Seamless content updates and editing</p></div>
                    <div><p>Fully customisable themes</p></div>
                    <div><p>Third Party Plugins</p></div>
                    <div><p>User-friendly interface</p></div>
                    <div><p>Fully Responsive design</p></div>
                    <div><p>Robust security features</p></div>
                    <div><p>SEO-friendly capabilities</p></div>
                    <div><p>Scalable architecture</p></div>
                </div>
                <div className={!isInView1 ? "info-title" : "info-title black-white"}>
                    <h3 className={!isInView1 ? "" : "black-white-text"}>WordPress/ CMS</h3>
                    <h3 className={!isInView1 ? "" : "black-white-text"}>Solutions</h3>
                </div>
            </div>

            <div ref={ref2} className='info-box left-box'>
                <div className={!isInView2 ? "info-title left-info-title" : "info-title left-info-title black-white"}>
                    <h3 className={!isInView2 ? "" : "black-white-text"}>Front End</h3>
                    <h3 className={!isInView2 ? "" : "black-white-text"}>Development</h3>
                </div>
                <div className={!isInView2 ? "info-content left-content" : "info-content left-content slide-in"}>
                    <div>
                        <p>Advanced animations and interactivivity</p>
                    </div>
                    <div>
                        <p>Efficient and well-documented code</p>
                    </div>
                    <div>
                        <p>Lightning-fast loading times</p>
                    </div>

                    <div>
                        <p>Seamless integration various APIs</p>
                    </div>
                    <div>
                        <p>Accessibility-focused designs</p>
                    </div>
                    <div>
                        <p>Responsive layouts</p>
                    </div>
                    <div>
                        <p>Efficient and optimized data management</p>
                    </div>
                </div>
            </div>

            <div className="see-more-designs">
                <Typewriter
                    options={{
                        strings: ['Check out full list with details'],
                        autoStart: true,
                        loop: true
                    }}
                />
                <button>More Info...</button>

            </div>

        </section>
    )
}

export default InfoBoxes