import { useState } from 'react'
import xmaxDesk from '../assets/xmaxDesk.webp'
import xmaxDesk2 from '../assets/xmaxDesk2.webp'
import xmaxDesk3 from '../assets/xmaxDesk3.webp'
import xmaxMob from '../assets/xmax-mob.webp'
import thamelDesk from '../assets/thamelDesk.webp'
import thamelDesk2 from '../assets/thamelDesk2.webp'
import thamelDesk3 from '../assets/thamelDesk3.webp'
import thamelMob from '../assets/thamel-mob.webp'


const MoreProjects = () => {
    const [xmaxVisible, setxmaxVisible] = useState(false)
    const [xmaxTextVisible, setxmaxTextVisible] = useState(false)
    const [thamelVisible, setthamelVisible] = useState(false)
    const [thamelTextVisible, setthamelTextVisible] = useState(false)
    const [noHover, setNoHover] = useState(true)
    const [interxmax, setInterxmax] = useState(false)
    const [interthamel, setInterthamel] = useState(false)

    const handlexmaxHover = () => {
        setNoHover(false)
        setxmaxVisible(true)
        setxmaxTextVisible(true)
    }
    const handlexmaxHoverOut = () => {
        setNoHover(true);
        setxmaxTextVisible(false)

        setTimeout(() => {
            setInterxmax(true);

            setTimeout(() => {
                setInterxmax(false);
                setxmaxVisible(false);
            }, 500);
        }, 0);
    };

    const handlethamelHover = () => {
        setNoHover(false)
        setthamelVisible(true)
        setthamelTextVisible(true)
    }
    const handlethamelHoverOut = () => {
        setNoHover(true);
        setthamelTextVisible(false)

        setTimeout(() => {
            setInterthamel(true);

            setTimeout(() => {
                setInterthamel(false);
                setthamelVisible(false);
            }, 500);
        }, 0);
    };


    return (
        <section className="projects">
            <div onMouseEnter={() => handlexmaxHover()}
                onMouseLeave={() => handlexmaxHoverOut()}
                className="project-box">
                {noHover && <h2>XMAX Thai Boxing Club</h2>}

                {thamelTextVisible && (
                    <>
                        <h2 className='slide-right'>Thamel</h2>
                        <p>Thamel Dentistry is located in a small alley in the heart of Kathmandu. Their existing site
                            was unreadable on a mobile device and outdated in its design. Since the launch of the new
                            site the practitioners now report a consistent flow of english speaking clientele.</p>                    </>
                )}

                {xmaxVisible && (
                    <>
                        <img src={xmaxDesk} alt="xmax thai boxing club website screenshot"
                            className={interxmax && 'animate-out'}
                        />
                        <img src={xmaxDesk2} alt="xmax thai boxing club website screenshot"
                            className={interxmax && 'animate-out'}
                        />
                        <img src={xmaxDesk3} alt="xmax thai boxing club website screenshot"
                            className={interxmax && 'animate-out'}
                        />
                        <img src={xmaxMob} alt="xmax thai boxing club mobile website screenshot"
                            className={interxmax && 'animate-out'}
                        />
                    </>
                )}
            </div>

            <div onMouseEnter={() => handlethamelHover()}
                onMouseLeave={() => handlethamelHoverOut()}
                className="project-box">
                {noHover && <h2>Thamel Dentistry</h2>}

                {xmaxTextVisible && (
                    <>
                        <h2 className='slide-left'>XMAX</h2>
                        <p>Explore XMAX's engaging website, designed to captivate and invite a global audience into the realm of Muay Thai in Chiang Mai. This online platform serves as a gateway, enticing international visitors with its Education Visa program and regularly updated event listings.</p>                    </>
                )}

                {thamelVisible && (
                    <>
                        <img src={thamelDesk} alt="Thamel Dentistry website screenshot"
                            className={interthamel && 'animate-out'}
                        />
                        <img src={thamelDesk2} alt="Thamel Dentistry website screenshot"
                            className={interthamel && 'animate-out'}
                        />
                        <img src={thamelDesk3} alt="Thamel Dentistry website screenshot"
                            className={interthamel && 'animate-out'}
                        />
                        <img src={thamelMob} alt="Thamel Dentistry mobile website screenshot"
                            className={interthamel && 'animate-out'}
                        />
                    </>
                )}
            </div>
        </section>)
}

export default MoreProjects