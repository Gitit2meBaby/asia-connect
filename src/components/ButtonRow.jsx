import { useState, useEffect, forwardRef, useRef } from 'react'
import PropTypes from 'prop-types';


const ButtonRow = forwardRef(({ setEcommerce, setFullStack, setWebApps, setUi, isMobile, refProp }, ref) => {

    const [hoverEffect, setHoverEffect] = useState(1)
    const [stopEffect, setStopEffect] = useState(false)
    const [padBottom, setPadBottom] = useState(true)
    const buttonRowRef = useRef(null)

    // useEffect(() => {
    //     if (!isMobile) {
    //         const interval = setInterval(() => {
    //             {
    //                 !stopEffect &&
    //                     setHoverEffect(prevItem => (prevItem < 4 ? prevItem + 1 : 1));
    //             }
    //         }, 3500);


    //         return () => {
    //             clearInterval(interval);
    //         };
    //     } else {
    //         setHoverEffect(0)
    //     }
    // }, [stopEffect, isMobile]);



    const handleStopEffect = () => {
        setStopEffect(true)
        setHoverEffect(0)
    }

    const handleMouseOut = () => {
        setStopEffect(false)
        setHoverEffect(1)
    }

    const handleEcommerce = () => {
        setEcommerce(true)
        setFullStack(false)
        setWebApps(false)
        setUi(false)
        setPadBottom(false)
        scrollToComponent()
    }

    const handleFullStack = () => {
        setEcommerce(false)
        setFullStack(true)
        setWebApps(false)
        setUi(false)
        scrollToComponent()
        setPadBottom(false)
    }
    const handleWebApps = () => {
        setEcommerce(false)
        setFullStack(false)
        setWebApps(true)
        setUi(false)
        scrollToComponent()
        setPadBottom(false)
    }
    const handleUi = () => {
        setEcommerce(false)
        setFullStack(false)
        setWebApps(false)
        setUi(true)
        scrollToComponent(refProp)
        setPadBottom(false)
    }

    const scrollToComponent = () => {
        if (buttonRowRef.current) {
            buttonRowRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <section ref={refProp} className="button-row" style={padBottom ? { paddingBottom: '5rem' } : { paddingBottom: '0rem' }}>
            <button onMouseEnter={() => handleStopEffect()}
                onMouseLeave={() => handleMouseOut()}
                onClick={() => handleEcommerce()}
                className={hoverEffect === 1 ? "hover-overlay" : ""}>E-Commerce
                {isMobile && (
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z"></path></svg>
                )}
            </button>
            <button onMouseEnter={() => handleStopEffect()}
                onMouseLeave={() => handleMouseOut()}
                onClick={() => handleFullStack()}
                className={hoverEffect === 3 ? "hover-overlay" : ""}>Full Stack
                {isMobile && (
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z"></path></svg>
                )}
            </button>
            <button onMouseEnter={() => handleStopEffect()}
                onMouseLeave={() => handleMouseOut()}
                onClick={() => handleWebApps()}
                className={hoverEffect === 2 ? "hover-overlay" : ""}>Web Apps
                {isMobile && (
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z"></path></svg>
                )}
            </button>
            <button onMouseEnter={() => handleStopEffect()}
                onMouseLeave={() => handleMouseOut()}
                onClick={() => handleUi()}
                className={hoverEffect === 4 ? "hover-overlay" : ""}>UI/UX Design
                {isMobile && (
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z"></path></svg>
                )}
            </button>
        </section>
    )
}
)

ButtonRow.propTypes = {
    setEcommerce: PropTypes.func,
    setFullStack: PropTypes.func,
    setWebApps: PropTypes.func,
    setUi: PropTypes.func,
    isMobile: PropTypes.bool,
};

ButtonRow.displayName = 'ButtonRow';


export default ButtonRow