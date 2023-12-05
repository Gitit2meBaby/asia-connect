import { useState, useEffect } from 'react'

const ButtonRow = () => {
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

    return (
        <section className="button-row">
            <button onMouseEnter={() => handleStopEffect()}
                onMouseLeave={() => handleMouseOut()}
                className={hoverEffect === 1 ? "hover-overlay" : ""}>E-Commerce</button>
            <button onMouseEnter={() => handleStopEffect()}
                onMouseLeave={() => handleMouseOut()}
                className={hoverEffect === 3 ? "hover-overlay" : ""}>Full Stack Applications</button>
            <button onMouseEnter={() => handleStopEffect()}
                onMouseLeave={() => handleMouseOut()}
                className={hoverEffect === 2 ? "hover-overlay" : ""}>Web Apps</button>
            <button onMouseEnter={() => handleStopEffect()}
                onMouseLeave={() => handleMouseOut()}
                className={hoverEffect === 4 ? "hover-overlay" : ""}>UI/UX Design</button>
        </section>)
}

export default ButtonRow