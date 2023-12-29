import { useRef } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import PropTypes from 'prop-types';


const Customers = ({ isMobile }) => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["-150%", "160%"]);

    return (
        <section ref={targetRef} className="create">
            <motion.div
                style={{ x }}
                className="stunning-text"
            >
                {isMobile ? (
                    <h2>Testimonials...</h2>
                ) : (
                    <h2>Our happy customers - - - - - -  testimonials</h2>
                )}
            </motion.div>
        </section>
    );
};

Customers.propTypes = {
    isMobile: PropTypes.bool,
};


export default Customers;
