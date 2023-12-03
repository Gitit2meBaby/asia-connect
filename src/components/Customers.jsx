import { useRef } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';

const Customers = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["-140%", "1%"]);

    return (
        <section ref={targetRef} className="create">
            <motion.div
                style={{ x }}
                className="stunning-text"
            >
                <h2>Our happy customers</h2>
            </motion.div>
        </section>
    );
};

export default Customers;
