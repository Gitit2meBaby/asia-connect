import { useState, useEffect, forwardRef } from 'react'
// import { useScroll } from 'framer-motion';
import PropTypes from 'prop-types';


const ButtonRow = forwardRef(({ setEcommerce, setFullStack, setWebApps, setUi }, ref) => {

    const [hoverEffect, setHoverEffect] = useState(1)
    const [stopEffect, setStopEffect] = useState(false)


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
    }

    const handleFullStack = () => {
        setEcommerce(false)
        setFullStack(true)
        setWebApps(false)
        setUi(false)
    }
    const handleWebApps = () => {
        setEcommerce(false)
        setFullStack(false)
        setWebApps(true)
        setUi(false)
    }
    const handleUi = () => {
        setEcommerce(false)
        setFullStack(false)
        setWebApps(false)
        setUi(true)
    }

    return (
        <section className="button-row">
            <button onMouseEnter={() => handleStopEffect()}
                onMouseLeave={() => handleMouseOut()}
                onClick={() => handleEcommerce()}
                className={hoverEffect === 1 ? "hover-overlay" : ""}>E-Commerce</button>
            <button onMouseEnter={() => handleStopEffect()}
                onMouseLeave={() => handleMouseOut()}
                onClick={() => handleFullStack()}
                className={hoverEffect === 3 ? "hover-overlay" : ""}>Full Stack Applications</button>
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