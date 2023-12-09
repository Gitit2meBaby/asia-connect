import { useState } from 'react'
import PropTypes from 'prop-types';
import { motion } from 'framer-motion'

import askDesk from '../assets/askDesk.webp'
import askDesk2 from '../assets/askDesk2.webp'
import askDesk3 from '../assets/askDesk3.webp'
import askMob from '../assets/ask-mob.webp'
import gingerDesk from '../assets/gingerDesk.webp'
import gingerDesk2 from '../assets/gingerDesk2.webp'
import gingerDesk3 from '../assets/gingerDesk3.webp'
import gingerMob from '../assets/ginger-mob.webp'


const MobEvenMoreProjects = () => {
    const [askTextVisible, setAskTextVisible] = useState(false)
    const [gingerTextVisible, setGingerTextVisible] = useState(false)
    const [zIndexMap, setZIndexMap] = useState({});

    const increaseZIndex = (imageId) => {
        setZIndexMap(prevZIndexMap => {
            const updatedZIndexMap = { ...prevZIndexMap };
            updatedZIndexMap[imageId] = (updatedZIndexMap[imageId] || 0) + 1;
            return updatedZIndexMap;
        });
    };

    return (
        <section className="projects">
            <motion.div
                className="project-box">
                <h2>ASK Motorbike Rental</h2>
                <>
                    <motion.img src={askDesk} alt="ask motorbike rental website screenshot"
                        whileInView={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 1.5 }}
                        viewport={{ once: true }}
                        style={{ zIndex: zIndexMap['askDesk'] || 0 }}
                        onClick={() => increaseZIndex('askDesk')}
                    />
                    <motion.img src={askDesk2} alt="ask motorbike rental website screenshot"
                        whileInView={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 1.6 }}
                        viewport={{ once: true }}
                        style={{ zIndex: zIndexMap['askDesk2'] || 0 }}
                        onClick={() => increaseZIndex('askDesk2')}
                    />
                    <motion.img src={askDesk3} alt="ask motorbike rental website screenshot"
                        whileInView={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 1.7 }}
                        viewport={{ once: true }}
                        style={{ zIndex: zIndexMap['askDesk3'] || 0 }}
                        onClick={() => increaseZIndex('askDesk3')}
                    />
                    <motion.img src={askMob} alt="ask motorbike rental mobile website screenshot"
                        whileInView={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 1.8 }}
                        viewport={{ once: true }}
                        style={{ zIndex: zIndexMap['askMob'] || 0 }}
                        onClick={() => increaseZIndex('askMob')}
                    />
                </>
            </motion.div>

            <motion.div className='project-info-box'>
                <>
                    <h2>ASK</h2>
                    <p>We where tasked for a complete rebranding at ASK and chose this sleek looking palette paired with a simple logo.</p>
                    <button onClick={() => setAskTextVisible(!askTextVisible)}>{askTextVisible ? '...Hide' : 'More...'}</button>
                    {askTextVisible && <p>Moving to online bookings increased sales by over 1000%</p>}                   </>
            </motion.div>

            <motion.div
                className="project-box">
                <h2>The house by Ginger</h2>
                <>
                    <motion.img src={gingerDesk} alt="The house by ginger website screenshot"
                        whileInView={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 1.5 }}
                        viewport={{ once: true }}
                        style={{ zIndex: zIndexMap['gingerDesk'] || 0 }}
                        onClick={() => increaseZIndex('gingerDesk')}
                    />
                    <motion.img src={gingerDesk2} alt="The house by ginger website screenshot"
                        whileInView={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 1.6 }}
                        viewport={{ once: true }}
                        style={{ zIndex: zIndexMap['gingerDesk2'] || 0 }}
                        onClick={() => increaseZIndex('gingerDesk2')}
                    />
                    <motion.img src={gingerDesk3} alt="The house by ginger website screenshot"
                        whileInView={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 1.7 }}
                        viewport={{ once: true }}
                        style={{ zIndex: zIndexMap['gingerDesk3'] || 0 }}
                        onClick={() => increaseZIndex('gingerDesk3')}
                    />
                    <motion.img src={gingerMob} alt="The house by ginger mobile website screenshot"
                        whileInView={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 1.8 }}
                        viewport={{ once: true }}
                        style={{ zIndex: zIndexMap['gingerMob'] || 0 }}
                        onClick={() => increaseZIndex('gingerMob')}
                    />
                </>
            </motion.div>

            <motion.div className='project-info-box'>
                <>
                    <h2>The House</h2>
                    <p>An elegant site to reflect the establishment itself,</p>
                    <button onClick={() => setGingerTextVisible(!gingerTextVisible)}>{gingerTextVisible ? '...Hide' : 'More...'}</button>
                    {gingerTextVisible && <p> on this site we opted for an image rich design, minimalist curves and white space to accentuate the mood.</p>}         </>
            </motion.div>
        </section>)
}

export default MobEvenMoreProjects