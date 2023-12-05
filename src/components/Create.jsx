import { useRef } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';

const Create = () => {
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
                <h2>..Some Projects</h2>
            </motion.div>
        </section>
    );
};

export default Create;
