import { useState } from 'react'
import askDesk from '../assets/askDesk.webp'
import askDesk2 from '../assets/askDesk2.webp'
import askDesk3 from '../assets/askDesk3.webp'
import askMob from '../assets/ask-mob.webp'
import gingerDesk from '../assets/gingerDesk.webp'
import gingerDesk2 from '../assets/gingerDesk2.webp'
import gingerDesk3 from '../assets/gingerDesk3.webp'
import gingerMob from '../assets/ginger-mob.webp'


const Projects = () => {
    const [askVisible, setaskVisible] = useState(false)
    const [askTextVisible, setaskTextVisible] = useState(false)
    const [gingerVisible, setgingerVisible] = useState(false)
    const [gingerTextVisible, setgingerTextVisible] = useState(false)
    const [noHover, setNoHover] = useState(true)
    const [interask, setInterask] = useState(false)
    const [interginger, setInterginger] = useState(false)
    const [zIndexMap, setZIndexMap] = useState({});

    const increaseZIndex = (imageId) => {
        setZIndexMap(prevZIndexMap => {
            const updatedZIndexMap = { ...prevZIndexMap };
            updatedZIndexMap[imageId] = (updatedZIndexMap[imageId] || 0) + 1;
            return updatedZIndexMap;
        });
    };

    const handleaskHover = () => {
        setNoHover(false)
        setaskVisible(true)
        setaskTextVisible(true)
    }
    const handleaskHoverOut = () => {
        setNoHover(true);
        setaskTextVisible(false)

        setTimeout(() => {
            setInterask(true);

            setTimeout(() => {
                setInterask(false);
                setaskVisible(false);
            }, 500);
        }, 0);
    };

    const handlegingerHover = () => {
        setNoHover(false)
        setgingerVisible(true)
        setgingerTextVisible(true)
    }
    const handlegingerHoverOut = () => {
        setNoHover(true);
        setgingerTextVisible(false)

        setTimeout(() => {
            setInterginger(true);

            setTimeout(() => {
                setInterginger(false);
                setgingerVisible(false);
            }, 500);
        }, 0);
    };

    return (
        <section className="projects">
            <div onMouseEnter={() => handleaskHover()}
                onMouseLeave={() => handleaskHoverOut()}
                className="project-box">
                {noHover && <h2>ASK Motorbike Rental</h2>}

                {gingerTextVisible && (
                    <>
                        <h2 className='slide-right'>The House</h2>
                        <p>An elegant site to reflect the establishment itself, on this site we opted for an image rich design, minimalist curves and white space to accentuate the mood.</p>                    </>
                )}

                {askVisible && (
                    <>
                        <img src={askDesk} alt="ask motorbike rental website screenshot"
                            className={interask && 'animate-out'}
                            style={{ zIndex: zIndexMap['askDesk'] || 0 }}
                            onClick={() => increaseZIndex('askDesk')}
                        />
                        <img src={askDesk2} alt="ask motorbike rental website screenshot"
                            className={interask && 'animate-out'}
                            style={{ zIndex: zIndexMap['askDesk2'] || 0 }}
                            onClick={() => increaseZIndex('askDesk2')}
                        />
                        <img src={askDesk3} alt="ask motorbike rental website screenshot"
                            className={interask && 'animate-out'}
                            style={{ zIndex: zIndexMap['askDesk3'] || 0 }}
                            onClick={() => increaseZIndex('askDesk3')}
                        />
                        <img src={askMob} alt="ask motorbike rental mobile website screenshot"
                            className={interask && 'animate-out'}
                            style={{ zIndex: zIndexMap['askMob'] || 0 }}
                            onClick={() => increaseZIndex('askMob')}
                        />
                    </>
                )}
            </div>

            <div onMouseEnter={() => handlegingerHover()}
                onMouseLeave={() => handlegingerHoverOut()}
                className="project-box">
                {noHover && <h2>The house by Ginger</h2>}

                {askTextVisible && (
                    <>
                        <h2 className='slide-left'>ASK</h2>
                        <p>We where tasked for a complete rebranding at ASK and chose this sleek looking palette paired with a simple logo. Moving to online bookings increased sales by over 1000%</p>                    </>
                )}

                {gingerVisible && (
                    <>
                        <img src={gingerDesk} alt="The house by ginger website screenshot"
                            className={interginger && 'animate-out'}
                            style={{ zIndex: zIndexMap['gingerDesk'] || 0 }}
                            onClick={() => increaseZIndex('gingerDesk')}
                        />
                        <img src={gingerDesk2} alt="The house by ginger website screenshot"
                            className={interginger && 'animate-out'}
                            style={{ zIndex: zIndexMap['gingerDesk2'] || 0 }}
                            onClick={() => increaseZIndex('gingerDesk2')}
                        />
                        <img src={gingerDesk3} alt="The house by ginger website screenshot"
                            className={interginger && 'animate-out'}
                            style={{ zIndex: zIndexMap['gingerDesk3'] || 0 }}
                            onClick={() => increaseZIndex('gingerDesk3')}
                        />
                        <img src={gingerMob} alt="The house by ginger mobile website screenshot"
                            className={interginger && 'animate-out'}
                            style={{ zIndex: zIndexMap['gingerMob'] || 0 }}
                            onClick={() => increaseZIndex('gingerMob')}
                        />
                    </>
                )}
            </div>
        </section>)
}

export default Projects