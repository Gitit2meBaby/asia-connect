import { forwardRef, useState } from 'react'
import PropTypes from 'prop-types';

import canguuDesk from '../assets/canguuDesk.webp'
import canguuDesk2 from '../assets/canguuDesk2.webp'
import canguuDesk3 from '../assets/canguuDesk3.webp'
import canguuMob from '../assets/canguu-mob.webp'
import shodweDesk from '../assets/shodweDesk.webp'
import shodweDesk2 from '../assets/shodweDesk2.webp'
import shodweDesk3 from '../assets/shodweDesk3.webp'
import shodweMob from '../assets/shodwe-mob.webp'


const Projects = forwardRef(({ refProp }, ref) => {
    const [canguuVisible, setCanguuVisible] = useState(false)
    const [canguuTextVisible, setCanguuTextVisible] = useState(false)
    const [shodweVisible, setShodweVisible] = useState(false)
    const [shodweTextVisible, setShodweTextVisible] = useState(false)
    const [noHover, setNoHover] = useState(true)
    const [interCanguu, setInterCanguu] = useState(false)
    const [interShodwe, setInterShodwe] = useState(false)
    const [zIndexMap, setZIndexMap] = useState({});

    const increaseZIndex = (imageId) => {
        setZIndexMap(prevZIndexMap => {
            const updatedZIndexMap = { ...prevZIndexMap };
            updatedZIndexMap[imageId] = (updatedZIndexMap[imageId] || 0) + 1;
            return updatedZIndexMap;
        });
    };


    const handleCanguuHover = () => {
        setNoHover(false)
        setCanguuVisible(true)
        setCanguuTextVisible(true)
    }
    const handleCanguuHoverOut = () => {
        setNoHover(true);
        setCanguuTextVisible(false)

        setTimeout(() => {
            setInterCanguu(true);

            setTimeout(() => {
                setInterCanguu(false);
                setCanguuVisible(false);
            }, 500);
        }, 0);
    };

    const handleShodweHover = () => {
        setNoHover(false)
        setShodweVisible(true)
        setShodweTextVisible(true)
    }
    const handleShodweHoverOut = () => {
        setNoHover(true);
        setShodweTextVisible(false)

        setTimeout(() => {
            setInterShodwe(true);

            setTimeout(() => {
                setInterShodwe(false);
                setShodweVisible(false);
            }, 500);
        }, 0);
    };

    return (
        <section ref={refProp} className="projects">
            <div onMouseEnter={() => handleCanguuHover()}
                onMouseLeave={() => handleCanguuHoverOut()}
                className="project-box">
                {noHover && <h2>Canguu Cafe</h2>}

                {shodweTextVisible && (
                    <>
                        <h2 className='slide-right'>Studio Shodwe</h2>
                        <p>Studio Shodwe's e-commerce platform is a testament to minimalism and modernity. The websites clean interface, adorns subtle yet captivating animations. It boasts an elegant three-tone palette that highlights their exquisite range of fashion products, capturing the attention of every visitor.</p>                    </>
                )}

                {canguuVisible && (
                    <>
                        <img src={canguuDesk} alt="Canguu cafe website screenshot"
                            className={interCanguu && 'animate-out'}
                            style={{ zIndex: zIndexMap['canguuDesk'] || 0 }}
                            onClick={() => increaseZIndex('canguuDesk')}
                        />
                        <img src={canguuDesk2} alt="Canguu cafe website screenshot"
                            className={interCanguu && 'animate-out'}
                            style={{ zIndex: zIndexMap['canguuDesk2'] || 0 }}
                            onClick={() => increaseZIndex('canguuDesk2')}
                        />
                        <img src={canguuDesk3} alt="Canguu cafe website screenshot"
                            className={interCanguu && 'animate-out'}
                            style={{ zIndex: zIndexMap['canguuDesk3'] || 0 }}
                            onClick={() => increaseZIndex('canguuDesk3')}
                        />
                        <img src={canguuMob} alt="Canguu cafe mobile website screenshot"
                            className={interCanguu && 'animate-out'}
                            style={{ zIndex: zIndexMap['canguuMob'] || 0 }}
                            onClick={() => increaseZIndex('canguuMob')}
                        />
                    </>
                )}
            </div>

            <div onMouseEnter={() => handleShodweHover()}
                onMouseLeave={() => handleShodweHoverOut()}
                className="project-box">
                {noHover && <h2>Studio Shodwe</h2>}

                {canguuTextVisible && (
                    <>
                        <h2 className='slide-left'>Canguu Cafe</h2>
                        <p>This single page site was designed for a sleek finish to appeal to the ‘digital nomad’
                            community
                            based in Canguu. The site was built with a tight budget over a period of just one week. The
                            managers reported a 15% increase in clientele after the site launch.</p>                    </>
                )}

                {shodweVisible && (
                    <>
                        <img src={shodweDesk} alt="Studio Shodwe website screenshot"
                            className={interShodwe && 'animate-out'}
                            style={{ zIndex: zIndexMap['shodweDesk'] || 0 }}
                            onClick={() => increaseZIndex('shodweDesk')}
                        />
                        <img src={shodweDesk2} alt="Studio Shodwe website screenshot"
                            className={interShodwe && 'animate-out'}
                            style={{ zIndex: zIndexMap['shodweDesk2'] || 0 }}
                            onClick={() => increaseZIndex('shodweDesk2')}
                        />
                        <img src={shodweDesk3} alt="Studio Shodwe website screenshot"
                            className={interShodwe && 'animate-out'}
                            style={{ zIndex: zIndexMap['shodweDesk3'] || 0 }}
                            onClick={() => increaseZIndex('shodweDesk3')}
                        />
                        <img src={shodweMob} alt="Studio Shodwe mobile website screenshot"
                            className={interShodwe && 'animate-out'}
                            style={{ zIndex: zIndexMap['shodweMob'] || 0 }}
                            onClick={() => increaseZIndex('shodweMob')}
                        />
                    </>
                )}
            </div>
        </section>
    )
}
)

Projects.propTypes = {
    refProp: PropTypes.object,
}

Projects.displayName = "Projects";

export default Projects