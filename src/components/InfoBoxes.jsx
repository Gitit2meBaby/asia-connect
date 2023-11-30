import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import Typewriter from "typewriter-effect";


const InfoBoxes = () => {
    const [hoveredIndex, setHoveredIndex] = useState(0);
    const [infoTitle, setInfoTitle] = useState('WordPress/ CMS Solutions');


    const ref1 = useRef(null);
    const ref2 = useRef(null);

    // Use useInView for each element
    const isInView1 = useInView(ref1, { margin: "-600px 0px -200px 0px" });
    const isInView2 = useInView(ref2, { margin: "-600px 0px -200px 0px" });

    const paragraphData = [
        {
            info: ""
        },
        {
            info: "With WordPress, ongoing content management becomes straightforward, enabling clients to edit and update content without requiring an extensive IT background. The system's user-friendly nature eliminates the necessity for intricate development-driven processes upon the handover of your new site from our team.",

        },
        {
            info: "At our agency, we specialize in crafting fully customizable themes that cater to diverse preferences. Whether it's bespoke designs for a unique touch or quickly deployable templates for budget-friendly options, our range of themes provides versatility without compromising quality.",
        },
        {
            info: "Tap into the wealth of third-party plugins compatible with WordPress, empowering your site with functionalities like bookings, payments, and contact forms. As the foremost website platform globally, WordPress boasts an exceptional plugin infrastructure, ensuring smooth integration and expanded capabilities."
        },
        {
            info: "Should your team prefer internal maintenance, WordPress features an intuitive dashboard allowing effortless customization of diverse content types. Manage visuals, advertisements, and blog posts easily to match your specific needs."
        },
        {
            info: "Responsive design is pivotal in today's digital landscape, especially with Google's emphasis on mobile-first indexing. Non-responsive designs risk alienating a significant portion of your audience, impacting user experience and potentially driving visitors away."
        },
        {
            info: "With a PHP-based foundation, WordPress boasts formidable built-in security features for website protection. However, it's imperative for self-managed sites to prioritize timely updates to ensure ongoing security efficacy."
        },
        {
            info: "Leveraging WordPress for your website means harnessing its built-in SEO-friendly features. Moreover, the platform extends its support through paid services, empowering websites to amplify their visibility on search engines, propelling them ahead in search rankings."
        },
        {
            info: "The scalability inherent in WordPress websites efficiently handles heavy traffic, especially when paired with customized hosting solutions. Additionally, it fosters seamless site management and expansion, catering to the demands of larger development teams."
        }
    ];

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