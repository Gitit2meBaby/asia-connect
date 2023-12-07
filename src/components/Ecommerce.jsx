import { useRef, useState, useEffect } from "react";
import PropTypes from 'prop-types';

import { useInView, motion } from "framer-motion";


const eCommerceData = [
    {
        info: "WooCommerce integrates deeply with WordPress, offering high customization. Shopify's hosted solution allows rapid store setup, while Shopee's marketplace simplifies sales, especially in Asia."
    },
    {
        info: "Utilize Stripe's optimized gateways for secure transactions worldwide. Trusted for its robust security, Stripe ensures seamless and reliable payment processing across diverse applications."
    },
    {
        info: "Streamline stock control with seamless plugin or API integration for efficient inventory handling. Optimize inventory systems by integrating plugins or APIs tailored to your specific stock management needs."
    },
    {
        info: "In a highly competitive field, a compelling UI/UX design is key to driving conversions. Optimal design elements and user-centric experiences elevate your website above the competition, facilitating increased conversions."
    },
    {
        info: "Streamline order fulfillment with automation while leveraging existing plugins or creating custom options. Automate processes to expedite order handling, stock management and shipping."
    },
    {
        info: "Elevate product pages through SEO optimization, emphasise strategic keyword selection and rich schema markup. Implementing structured data enhances visibility and ranking, driving organic traffic."
    },
    {
        info: "Harness Google Analytics data, consumer demographics, and click-through rates to guide strategic decision-making. Analyzing these metrics empowers informed choices, and efficient marketing strategies"
    }
]

const Ecommerce = ({ setEcommerce }) => {
    const [hoveredIndex, setHoveredIndex] = useState(0);
    const [infoTitle, setInfoTitle] = useState('WordPress/ CMS Solutions');
    const [hoverEffect, setHoverEffect] = useState(1)
    const [hasRunEffect, setHasRunEffect] = useState(false);

    const buttonRef = useRef(null)
    const ref1 = useRef(null);
    const isInView1 = useInView(ref1, { margin: "-600px 0px -200px 0px" });

    // To display information about each topic
    const handleParagraphHover = (index) => {
        setInfoTitle(eCommerceData[index].info);
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
                setInfoTitle(eCommerceData[hoverEffect].info);
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
        setEcommerce(false)
    }


    return (
        <motion.section className="info-boxes"
            initial={{ transform: 'translateY(100%' }}
            animate={{ transform: 'translateY(0%)', transition: { duration: .8 } }}
            exit={{ transform: 'translateY(100%', transition: { duration: .8 } }}
        >
            <div ref={ref1} className='info-box right-box'>
                <div className={!isInView1 ? "info-content right-content" : "info-content right-content slide-in"}>
                    <div onMouseEnter={() => handleParagraphHover(1)} onMouseLeave={handleParagraphLeave}>
                        <p className={hoverEffect === 1 ? 'hover-bright' : ''}>WooCommerce, Shopify, Shopee</p>
                    </div>
                    <div onMouseEnter={() => handleParagraphHover(2)} onMouseLeave={handleParagraphLeave}>
                        <p className={hoverEffect === 2 ? 'hover-bright' : ''}>Optimized Stripe Payment Gateways</p>
                    </div>
                    <div onMouseEnter={() => handleParagraphHover(3)} onMouseLeave={handleParagraphLeave}>
                        <p className={hoverEffect === 3 ? 'hover-bright' : ''}>Efficient Inventory Management</p>
                    </div>
                    <div onMouseEnter={() => handleParagraphHover(4)} onMouseLeave={handleParagraphLeave}>
                        <p className={hoverEffect === 4 ? 'hover-bright' : ''}>Conversion-Driven UI/UX Design</p>
                    </div>
                    <div onMouseEnter={() => handleParagraphHover(5)} onMouseLeave={handleParagraphLeave}>
                        <p className={hoverEffect === 5 ? 'hover-bright' : ''}>Automated Order Fulfillment</p>
                    </div>
                    <div onMouseEnter={() => handleParagraphHover(6)} onMouseLeave={handleParagraphLeave}>
                        <p className={hoverEffect === 6 ? 'hover-bright' : ''}>SEO-Optimized Product Pages</p>
                    </div>
                    <div onMouseEnter={() => handleParagraphHover(7)} onMouseLeave={handleParagraphLeave}>
                        <p className={hoverEffect === 7 ? 'hover-bright' : ''}>Analytics-Driven Decision Making</p>
                    </div>
                </div>

                <div className={`${!isInView1 ? "info-title" : "info-title black-white"} ${hoveredIndex >= 1 ? "info-paragraph" : ""}`}>
                    {hoveredIndex === 0 ? (
                        <>
                            <h3 className={!isInView1 ? "" : "black-white-text"}>E-Commerce</h3>
                        </>
                    ) : (
                        <p>{infoTitle}</p>
                    )}

                </div>
            </div>

            <div className="extra-info-btns" ref={buttonRef}>
                <button onClick={() => handleLessButton()}>See Less...</button>
            </div>

        </motion.section>
    )
}

Ecommerce.propTypes = {
    setEcommerce: PropTypes.func,
};

export default Ecommerce