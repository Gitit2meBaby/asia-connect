import { useState } from 'react'
import PropTypes from 'prop-types';
import { motion } from 'framer-motion'

import xmaxDesk from '../assets/xmaxDesk.webp'
import xmaxDesk2 from '../assets/xmaxDesk2.webp'
import xmaxDesk3 from '../assets/xmaxDesk3.webp'
import xmaxMob from '../assets/xmax-mob.webp'
import thamelDesk from '../assets/thamelDesk.webp'
import thamelDesk2 from '../assets/thamelDesk2.webp'
import thamelDesk3 from '../assets/thamelDesk3.webp'
import thamelMob from '../assets/thamel-mob.webp'


const MobMoreProjects = () => {
    const [xmaxTextVisible, setXmaxTextVisible] = useState(false)
    const [thamelTextVisible, setThamelTextVisible] = useState(false)
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
                <h2>XMAX Thai Boxing Club</h2>
                <>
                    <motion.img src={xmaxDesk} alt="xmax thai boxing club website screenshot"
                        whileInView={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 1.5 }}
                        viewport={{ once: true }}
                        style={{ zIndex: zIndexMap['xmaxDesk'] || 0 }}
                        onClick={() => increaseZIndex('xmaxDesk')}
                    />
                    <motion.img src={xmaxDesk2} alt="xmax thai boxing club website screenshot"
                        whileInView={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 1.6 }}
                        viewport={{ once: true }}
                        style={{ zIndex: zIndexMap['xmaxDesk2'] || 0 }}
                        onClick={() => increaseZIndex('xmaxDesk2')}
                    />
                    <motion.img src={xmaxDesk3} alt="xmax thai boxing club website screenshot"
                        whileInView={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 1.7 }}
                        viewport={{ once: true }}
                        style={{ zIndex: zIndexMap['xmaxDesk3'] || 0 }}
                        onClick={() => increaseZIndex('xmaxDesk3')}
                    />
                    <motion.img src={xmaxMob} alt="xmax thai boxing club mobile website screenshot"
                        whileInView={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 1.8 }}
                        viewport={{ once: true }}
                        style={{ zIndex: zIndexMap['xmaxMob'] || 0 }}
                        onClick={() => increaseZIndex('xmaxMob')}
                    />                    </>
            </motion.div>

            <motion.div className='project-info-box'>
                <h2>XMAX Thai Boxing Club</h2>
                <p>Explore XMAX's engaging website, designed to captivate and invite a global audience into the realm of Muay Thai in Chiang Mai.</p>
                <button onClick={() => setXmaxTextVisible(!xmaxTextVisible)}>{xmaxTextVisible ? '...Hide' : 'More...'}</button>
                {xmaxTextVisible && <p>This online platform serves as a gateway, enticing international visitors with its Education Visa program and regularly updated event listings.</p>}
            </motion.div>

            <motion.div className="project-box">
                <h2>Thamel Dentistry</h2>
                <motion.img src={thamelDesk} alt="Thamel Dentistry website screenshot"
                    whileInView={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: 1.5 }}
                    viewport={{ once: true }}
                    style={{ zIndex: zIndexMap['thamelDesk'] || 0 }}
                    onClick={() => increaseZIndex('thamelDesk')}
                />
                <motion.img src={thamelDesk2} alt="Thamel Dentistry website screenshot"
                    whileInView={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: 1.6 }}
                    viewport={{ once: true }}
                    style={{ zIndex: zIndexMap['thamelDesk2'] || 0 }}
                    onClick={() => increaseZIndex('thamelDesk2')}
                />
                <motion.img src={thamelDesk3} alt="Thamel Dentistry website screenshot"
                    whileInView={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: 1.7 }}
                    viewport={{ once: true }}
                    style={{ zIndex: zIndexMap['thamelDesk3'] || 0 }}
                    onClick={() => increaseZIndex('thamelDesk3')}
                />
                <motion.img src={thamelMob} alt="Thamel Dentistry mobile website screenshot"
                    whileInView={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: 1.8 }}
                    viewport={{ once: true }}
                    style={{ zIndex: zIndexMap['thamelMob'] || 0 }}
                    onClick={() => increaseZIndex('thamelMob')}
                />
            </motion.div>

            <motion.div className='project-info-box'>
                <h2>Thamel Dentistry</h2>
                <p>Located in a small alley in the heart of Kathmandu. Their existing site
                    was unreadable on a mobile device and outdated in its design.</p>
                <button onClick={() => setThamelTextVisible(!thamelTextVisible)}>{thamelTextVisible ? '...Hide' : 'More...'}</button>
                {thamelTextVisible && <p> Since the launch of the new
                    site the practitioners now report a consistent flow of english speaking clientele.</p>}
            </motion.div>
        </section >
    )
}

export default MobMoreProjects