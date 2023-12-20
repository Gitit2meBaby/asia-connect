import { useState, useEffect, forwardRef, useRef } from 'react'
// import { useScroll } from 'framer-motion';
import PropTypes from 'prop-types';


const ButtonRow = forwardRef(({ setEcommerce, setFullStack, setWebApps, setUi }, ref) => {

    const [hoverEffect, setHoverEffect] = useState(1)
    const [stopEffect, setStopEffect] = useState(false)

    const buttonRowRef = useRef(null)

    useEffect(() => {
        const interval = setInterval(() => {
            {
                !stopEffect &&
                    setHoverEffect(prevItem => (prevItem < 4 ? prevItem + 1 : 1));
            }
        }, 1500);


        return () => {
            clearInterval(interval);
        };
    }, [stopEffect]);



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
        scrollToComponent()
    }

    const handleFullStack = () => {
        setEcommerce(false)
        setFullStack(true)
        setWebApps(false)
        setUi(false)
        scrollToComponent()
    }
    const handleWebApps = () => {
        setEcommerce(false)
        setFullStack(false)
        setWebApps(true)
        setUi(false)
        scrollToComponent()
    }
    const handleUi = () => {
        setEcommerce(false)
        setFullStack(false)
        setWebApps(false)
        setUi(true)
        scrollToComponent()
    }

    const scrollToComponent = () => {
        if (buttonRowRef.current) {
            buttonRowRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <section ref={buttonRowRef} className="button-row">
            <button onMouseEnter={() => handleStopEffect()}
                onMouseLeave={() => handleMouseOut()}
                onClick={() => handleEcommerce()}
                className={hoverEffect === 1 ? "hover-overlay" : ""}>E-Commerce</button>
            <button onMouseEnter={() => handleStopEffect()}
                onMouseLeave={() => handleMouseOut()}
                onClick={() => handleFullStack()}
                className={hoverEffect === 3 ? "hover-overlay" : ""}>Full Stack </button>
            <button onMouseEnter={() => handleStopEffect()}
                onMouseLeave={() => handleMouseOut()}
                onClick={() => handleWebApps()}
                className={hoverEffect === 2 ? "hover-overlay" : ""}>Web Apps</button>
            <button onMouseEnter={() => handleStopEffect()}
                onMouseLeave={() => handleMouseOut()}
                onClick={() => handleUi()}
                className={hoverEffect === 4 ? "hover-overlay" : ""}>UI/UX Design</button>
        </section>
    )
}
)

ButtonRow.propTypes = {
    setEcommerce: PropTypes.func,
    setFullStack: PropTypes.func,
    setWebApps: PropTypes.func,
    setUi: PropTypes.func,
};

ButtonRow.displayName = 'ButtonRow'; // Define the display name


export default ButtonRow