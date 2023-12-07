import { useRef } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';

const Customers = () => {
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
                <h2>Our happy customers - - - - - -  testimonials</h2>
            </motion.div>
        </section>
    );
};

export default Customers;
