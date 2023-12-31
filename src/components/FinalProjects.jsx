import { useState } from 'react'
import baliDesk from '../assets/baliDesk.webp'
import baliDesk2 from '../assets/baliDesk2.webp'
import baliDesk3 from '../assets/baliDesk3.webp'
import baliMob from '../assets/bali-mob.webp'
import quuDesk from '../assets/quuDesk.webp'
import quuDesk2 from '../assets/quuDesk2.webp'
import quuDesk3 from '../assets/quuDesk3.webp'
import quuMob from '../assets/quu-mob.webp'


const FinalProjects = () => {
    const [baliVisible, setbaliVisible] = useState(false)
    const [baliTextVisible, setbaliTextVisible] = useState(false)
    const [quuVisible, setquuVisible] = useState(false)
    const [quuTextVisible, setquuTextVisible] = useState(false)
    const [noHover, setNoHover] = useState(true)
    const [interbali, setInterbali] = useState(false)
    const [interquu, setInterquu] = useState(false)
    const [zIndexMap, setZIndexMap] = useState({});

    const increaseZIndex = (imageId) => {
        setZIndexMap(prevZIndexMap => {
            const updatedZIndexMap = { ...prevZIndexMap };
            updatedZIndexMap[imageId] = (updatedZIndexMap[imageId] || 0) + 1;
            return updatedZIndexMap;
        });
    };

    const handlebaliHover = () => {
        setNoHover(false)
        setbaliVisible(true)
        setbaliTextVisible(true)
    }
    const handlebaliHoverOut = () => {
        setNoHover(true);
        setbaliTextVisible(false)

        setTimeout(() => {
            setInterbali(true);

            setTimeout(() => {
                setInterbali(false);
                setbaliVisible(false);
            }, 500);
        }, 0);
    };

    const handlequuHover = () => {
        setNoHover(false)
        setquuVisible(true)
        setquuTextVisible(true)
    }
    const handlequuHoverOut = () => {
        setNoHover(true);
        setquuTextVisible(false)

        setTimeout(() => {
            setInterquu(true);

            setTimeout(() => {
                setInterquu(false);
                setquuVisible(false);
            }, 500);
        }, 0);
    };


    return (
        <section className="projects"
            style={{ paddingBottom: '12rem' }}>
            <div onMouseEnter={() => handlebaliHover()}
                onMouseLeave={() => handlebaliHoverOut()}
                className="project-box">
                {noHover && <h2>Big Bali Burgers</h2>}

                {quuTextVisible && (
                    <>
                        <h2 className='slide-right'>Quu Hotel</h2>
                        <p>The website's design mirrors the hotel's contemporary, artistic ambiance. Drawing inspiration from the hotel's interior, the modern and clean style complements the establishment's online presence, aligning with various external booking applications</p>                    </>
                )}

                {baliVisible && (
                    <>
                        <img src={baliDesk} alt="Big Bali Burgers website screenshot"
                            className={interbali && 'animate-out'}
                            style={{ zIndex: zIndexMap['baliDesk'] || 0 }}
                            onClick={() => increaseZIndex('baliDesk')}
                        />
                        <img src={baliDesk2} alt="Big Bali Burgers website screenshot"
                            className={interbali && 'animate-out'}
                            style={{ zIndex: zIndexMap['baliDesk2'] || 0 }}
                            onClick={() => increaseZIndex('baliDesk2')}
                        />
                        <img src={baliDesk3} alt="Big Bali Burgers website screenshot"
                            className={interbali && 'animate-out'}
                            style={{ zIndex: zIndexMap['baliDesk3'] || 0 }}
                            onClick={() => increaseZIndex('baliDesk3')}
                        />
                        <img src={baliMob} alt="Big Bali Burgers mobile website screenshot"
                            className={interbali && 'animate-out'}
                            style={{ zIndex: zIndexMap['baliMob'] || 0 }}
                            onClick={() => increaseZIndex('baliMob')}
                        />
                    </>
                )}
            </div>

            <div onMouseEnter={() => handlequuHover()}
                onMouseLeave={() => handlequuHoverOut()}
                className="project-box">
                {noHover && <h2>Quu Hotel</h2>}

                {baliTextVisible && (
                    <>
                        <h2 className='slide-left'>Big Bali Burgers</h2>
                        <p>Just a quick look at Big Bali's website is enough to make one salivate. A simple approach on this website provides customers with all the important information in a clear and succint fashion</p>                    </>
                )}

                {quuVisible && (
                    <>
                        <img src={quuDesk} alt="Quu Hotel Chiang Mai website screenshot"
                            className={interquu && 'animate-out'}
                            style={{ zIndex: zIndexMap['quuDesk'] || 0 }}
                            onClick={() => increaseZIndex('quuDesk')}
                        />
                        <img src={quuDesk2} alt="Quu Hotel Chiang Mai website screenshot"
                            className={interquu && 'animate-out'}
                            style={{ zIndex: zIndexMap['quuDesk2'] || 0 }}
                            onClick={() => increaseZIndex('quuDesk2')}
                        />
                        <img src={quuDesk3} alt="Quu Hotel Chiang Mai website screenshot"
                            className={interquu && 'animate-out'}
                            style={{ zIndex: zIndexMap['quuDesk3'] || 0 }}
                            onClick={() => increaseZIndex('quuDesk3')}
                        />
                        <img src={quuMob} alt="Quu Hotel Chiang Mai mobile website screenshot"
                            className={interquu && 'animate-out'}
                            style={{ zIndex: zIndexMap['quuMob'] || 0 }}
                            onClick={() => increaseZIndex('quuMob')}
                        />
                    </>
                )}
            </div>
        </section>)
}

export default FinalProjects