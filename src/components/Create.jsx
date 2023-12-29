import { useRef } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import PropTypes from 'prop-types';


const Create = ({ isMobile }) => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

    return (
        <section ref={targetRef} className="create">
            <motion.div
                style={{ x }}
                className="stunning-text"
            >
                {isMobile ? (
                    <h2>Projects</h2>
                ) : (
                    <h2>..Some Projects</h2>
                )}
            </motion.div>
        </section>
    );
};

Create.propTypes = {
    isMobile: PropTypes.bool,
};

export default Create;
