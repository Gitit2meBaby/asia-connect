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

const Ecommerce = ({ setEcommerce, isMobile }) => {
    const [hoveredIndex, setHoveredIndex] = useState(0);
    const [infoTitle, setInfoTitle] = useState('WordPress/ CMS Solutions');
    const [activeDropdown, setActiveDropdown] = useState(null);

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
            <div ref={ref1} className='info-box right-box'>
                <div className={!isInView1 ? "info-content right-content" : "info-content right-content slide-in"}>
                    <div onMouseEnter={() => handleParagraphHover(1)} onMouseLeave={handleParagraphLeave}
                        onClick={() => toggleDropdown(1)}
                    >
                        <p>WooCommerce, Shopify, Shopee</p>
                    </div>
                    <div
                        className={activeDropdown === 1 ? 'info-dropdown resize' : 'info-dropdown'}>
                        <p>{eCommerceData[0].info}</p>
                    </div>

                    <div onMouseEnter={() => handleParagraphHover(2)} onMouseLeave={handleParagraphLeave} onClick={() => toggleDropdown(2)}
                    >
                        <p>Optimized Stripe Payment Gateways</p>
                    </div>
                    <div
                        className={activeDropdown === 2 ? 'info-dropdown resize' : 'info-dropdown'}>
                        <p>{eCommerceData[1].info}</p>
                    </div>

                    <div onMouseEnter={() => handleParagraphHover(3)} onMouseLeave={handleParagraphLeave} onClick={() => toggleDropdown(3)}
                    >
                        <p>Efficient Inventory Management</p>
                    </div>
                    <div
                        className={activeDropdown === 3 ? 'info-dropdown resize' : 'info-dropdown'}>
                        <p>{eCommerceData[2].info}</p>
                    </div>

                    <div onMouseEnter={() => handleParagraphHover(4)} onMouseLeave={handleParagraphLeave} onClick={() => toggleDropdown(4)}
                    >
                        <p>Conversion-Driven UI/UX Design</p>
                    </div>
                    <div
                        className={activeDropdown === 4 ? 'info-dropdown resize' : 'info-dropdown'}>
                        <p>{eCommerceData[3].info}</p>
                    </div>

                    <div onMouseEnter={() => handleParagraphHover(5)} onMouseLeave={handleParagraphLeave} onClick={() => toggleDropdown(5)}
                    >
                        <p >Automated Order Fulfillment</p>
                    </div>
                    <div
                        className={activeDropdown === 5 ? 'info-dropdown resize' : 'info-dropdown'}>
                        <p>{eCommerceData[4].info}</p>
                    </div>

                    <div onMouseEnter={() => handleParagraphHover(6)} onMouseLeave={handleParagraphLeave} onClick={() => toggleDropdown(6)}
                    >
                        <p>SEO-Optimized Product Pages</p>
                    </div>
                    <div
                        className={activeDropdown === 6 ? 'info-dropdown resize' : 'info-dropdown'}>
                        <p>{eCommerceData[5].info}</p>
                    </div>

                    <div onMouseEnter={() => handleParagraphHover(7)} onMouseLeave={handleParagraphLeave} onClick={() => toggleDropdown(7)}
                    >
                        <p>Analytics-Driven Decision Making</p>
                    </div>
                    <div
                        className={activeDropdown === 7 ? 'info-dropdown resize' : 'info-dropdown'}>
                        <p>{eCommerceData[6].info}</p>
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
        </motion.section>
    )
}

Ecommerce.propTypes = {
    setEcommerce: PropTypes.func,
};

export default Ecommerce