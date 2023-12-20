import { useState } from 'react'
import PropTypes from 'prop-types';
import { motion } from 'framer-motion'

import baliDesk from '../assets/baliDesk.webp'
import baliDesk2 from '../assets/baliDesk2.webp'
import baliDesk3 from '../assets/baliDesk3.webp'
import baliMob from '../assets/bali-mob.webp'
import quuDesk from '../assets/quuDesk.webp'
import quuDesk2 from '../assets/quuDesk2.webp'
import quuDesk3 from '../assets/quuDesk3.webp'
import quuMob from '../assets/quu-mob.webp'


const MobFinalProjects = () => {
    const [baliTextVisible, setBaliTextVisible] = useState(false)
    const [quuTextVisible, setQuuTextVisible] = useState(false)
    const [zIndexMap, setZIndexMap] = useState({});

    const increaseZIndex = (imageId) => {
        setZIndexMap(prevZIndexMap => {
            const updatedZIndexMap = { ...prevZIndexMap };
            updatedZIndexMap[imageId] = (updatedZIndexMap[imageId] || 0) + 1;
            return updatedZIndexMap;
        });
    };

    return (
        <section className="projects"
            style={{ paddingBottom: '2rem' }}>
            <motion.div
                className="project-box">
                <h2>Big Bali Burgers</h2>
                <>
                    <motion.img src={baliDesk} alt="Big Bali Burgers website screenshot"
                        whileInView={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 1.5 }}
                        viewport={{ once: true }}
                        style={{ zIndex: zIndexMap['baliDesk'] || 0 }}
                        onClick={() => increaseZIndex('baliDesk')}
                    />
                    <motion.img src={baliDesk2} alt="Big Bali Burgers website screenshot"
                        whileInView={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 1.6 }}
                        viewport={{ once: true }}
                        style={{ zIndex: zIndexMap['baliDesk2'] || 0 }}
                        onClick={() => increaseZIndex('baliDesk2')}
                    />
                    <motion.img src={baliDesk3} alt="Big Bali Burgers website screenshot"
                        whileInView={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 1.7 }}
                        viewport={{ once: true }}
                        style={{ zIndex: zIndexMap['baliDesk3'] || 0 }}
                        onClick={() => increaseZIndex('baliDesk3')}
                    />
                    <motion.img src={baliMob} alt="Big Bali Burgers mobile website screenshot"
                        whileInView={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 1.8 }}
                        viewport={{ once: true }}
                        style={{ zIndex: zIndexMap['baliMob'] || 0 }}
                        onClick={() => increaseZIndex('baliMob')}
                    />           </>
            </motion.div>


            <motion.div className='project-info-box'>
                <h2 className='slide-left'>Big Bali Burgers</h2>
                <p>Just a quick look at Big Bali's website is enough to make one salivate.</p>
                <button onClick={() => setBaliTextVisible(!baliTextVisible)}>{baliTextVisible ? '...Hide' : 'More...'}</button>
                {baliTextVisible && <p>  A simple aproach on this website provides customers with all the important information in a clear and succint fashion
                    The scope of the website was aimed at directing the consumer to the app to promote future purchases, without requiring the E-commerce functionality on site.</p>}           </motion.div>

            <motion.div
                className="project-box">
                <h2>Quu Hotel</h2>
                <>
                    <motion.img src={quuDesk} alt="Quu Hotel Chiang Mai website screenshot"
                        whileInView={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 1.5 }}
                        viewport={{ once: true }}
                        style={{ zIndex: zIndexMap['quuDesk'] || 0 }}
                        onClick={() => increaseZIndex('quuDesk')}
                    />                    <motion.img src={quuDesk2} alt="Quu Hotel Chiang Mai website screenshot"
                        whileInView={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 1.6 }}
                        viewport={{ once: true }}
                        style={{ zIndex: zIndexMap['quuDesk2'] || 0 }}
                        onClick={() => increaseZIndex('quuDesk2')}
                    />                    <motion.img src={quuDesk3} alt="Quu Hotel Chiang Mai website screenshot"
                        whileInView={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 1.7 }}
                        viewport={{ once: true }}
                        style={{ zIndex: zIndexMap['quuDesk3'] || 0 }}
                        onClick={() => increaseZIndex('quuDesk3')}
                    />                    <motion.img src={quuMob} alt="Quu Hotel Chiang Mai mobile website screenshot"
                        whileInView={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 1.8 }}
                        viewport={{ once: true }}
                        style={{ zIndex: zIndexMap['quuMob'] || 0 }}
                        onClick={() => increaseZIndex('quuMob')}
                    />                </>
            </motion.div>

            <motion.div className='project-info-box'>
                <>
                    <h2 className='slide-right'>Quu Hotel</h2>
                    <p>The website's design mirrors the hotel's contemporary, artistic ambiance. Drawing inspiration from the hotel's interior,</p>
                    <button onClick={() => setQuuTextVisible(!quuTextVisible)}>{quuTextVisible ? '...Hide' : 'More...'}</button>
                    {quuTextVisible && <p>  the modern and clean style complements the establishment's online presence, aligning with various external booking applications the site is primarily a promotional tool for the Hotel to compiment its existing listings on large scale applications.</p>}  </>
            </motion.div>
        </section>)
}

export default MobFinalProjects