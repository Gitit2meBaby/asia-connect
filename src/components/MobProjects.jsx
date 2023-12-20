import { forwardRef, useState, useRef } from 'react'
import PropTypes from 'prop-types';
import { motion } from 'framer-motion'


import canguuDesk from '../assets/canguuDesk.webp'
import canguuDesk2 from '../assets/canguuDesk2.webp'
import canguuDesk3 from '../assets/canguuDesk3.webp'
import canguuMob from '../assets/canguu-mob.webp'
import shodweDesk from '../assets/shodweDesk.webp'
import shodweDesk2 from '../assets/shodweDesk2.webp'
import shodweDesk3 from '../assets/shodweDesk3.webp'
import shodweMob from '../assets/shodwe-mob.webp'


const MobProjects = forwardRef(({ refProp }, ref) => {
    const [canguuTextVisible, setCanguuTextVisible] = useState(false)
    const [shodweTextVisible, setShodweTextVisible] = useState(false)
    const [zIndexMap, setZIndexMap] = useState({});

    const increaseZIndex = (imageId) => {
        setZIndexMap(prevZIndexMap => {
            const updatedZIndexMap = { ...prevZIndexMap };
            updatedZIndexMap[imageId] = (updatedZIndexMap[imageId] || 0) + 1;
            return updatedZIndexMap;
        });
    };

    const canguuRef = useRef(null)
    const shodweRef = useRef(null)

    return (
        <section ref={refProp} className="projects">
            <motion.div
                ref={canguuRef}
                className="project-box"
            >

                <h2>Canguu Cafe</h2>
                <>
                    <motion.img src={canguuDesk} alt="Canguu cafe website screenshot"
                        whileInView={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 1.5 }}
                        viewport={{ once: true }}
                        style={{ zIndex: zIndexMap['canguuDesk'] || 0 }}
                        onClick={() => increaseZIndex('canguuDesk')}
                    />
                    <motion.img src={canguuDesk2} alt="Canguu cafe website screenshot"
                        whileInView={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 1.6 }}
                        viewport={{ once: true }}
                        style={{ zIndex: zIndexMap['canguuDesk2'] || 0 }}
                        onClick={() => increaseZIndex('canguuDesk2')}
                    />
                    <motion.img src={canguuDesk3} alt="Canguu cafe website screenshot"
                        whileInView={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 1.7 }}
                        viewport={{ once: true }}
                        style={{ zIndex: zIndexMap['canguuDesk3'] || 0 }}
                        onClick={() => increaseZIndex('canguuDesk3')}
                    />
                    <motion.img src={canguuMob} alt="Canguu cafe mobile website screenshot"
                        whileInView={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 1.8 }}
                        viewport={{ once: true }}
                        style={{ zIndex: zIndexMap['canguuMob'] || 0 }}
                        onClick={() => increaseZIndex('canguuMob')}
                    />
                </>
            </motion.div>

            <motion.div className='project-info-box'>
                <h2>Canguu Cafe</h2>
                <p>This single page site was designed for a sleek finish to appeal to the ‘digital nomad’
                    community
                    based in Canguu.</p>
                <button onClick={() => setCanguuTextVisible(!canguuTextVisible)}>{canguuTextVisible ? '...Hide' : 'More...'}</button>
                {canguuTextVisible && <p>The site was built using WordPress with a tight budget over a period of just one week. The
                    managers reported a 15% increase in clientele after the site launch.</p>}
            </motion.div>

            <motion.div
                ref={shodweRef}
                className="project-box">
                <h2>Studio Shodwe</h2>

                <>
                    <motion.img whileInView={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 1.5 }}
                        viewport={{ once: true }} src={shodweDesk} alt="Studio Shodwe website screenshot"
                        style={{ zIndex: zIndexMap['shodweDesk'] || 0 }}
                        onClick={() => increaseZIndex('shodweDesk')}
                    />
                    <motion.img whileInView={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 1.6 }}
                        viewport={{ once: true }} src={shodweDesk2} alt="Studio Shodwe website screenshot"
                        style={{ zIndex: zIndexMap['shodweDesk2'] || 0 }}
                        onClick={() => increaseZIndex('shodweDesk2')}
                    />
                    <motion.img whileInView={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 1.7 }}
                        viewport={{ once: true }} src={shodweDesk3} alt="Studio Shodwe website screenshot"
                        style={{ zIndex: zIndexMap['shodweDesk3'] || 0 }}
                        onClick={() => increaseZIndex('shodweDesk3')}
                    />
                    <motion.img whileInView={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 1.8 }}
                        viewport={{ once: true }} src={shodweMob} alt="Studio Shodwe mobile website screenshot"
                        style={{ zIndex: zIndexMap['shodweMob'] || 0 }}
                        onClick={() => increaseZIndex('shodweMob')}
                    />
                </>
            </motion.div>

            <motion.div className='project-info-box'>
                <h2>Studio Shodwe</h2>
                <p>Studio Shodwe's e-commerce platform is a testament to minimalism and modernity. The websites clean interface, adorns subtle yet captivating animations.</p>
                <button onClick={() => setShodweTextVisible(!shodweTextVisible)}>{shodweTextVisible ? '...Hide' : 'More...'}</button>
                {shodweTextVisible && <p>It boasts an elegant three-tone palette that highlights their range of fashion products, capturing the attention of every visitor.
                    The site was built using the React.js Framework and subtle animations implemented for smooth page transitions</p>}
            </motion.div>
        </section>
    )
}
)

MobProjects.propTypes = {
    refProp: PropTypes.object,
}

MobProjects.displayName = "MobProjects";

export default MobProjects