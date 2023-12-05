import { useState, useEffect } from 'react'

const Footer = () => {
    const [hoverEffect, setHoverEffect] = useState(1)

    useEffect(() => {
        const interval = setInterval(() => {
            setHoverEffect(prevItem => (prevItem < 7 ? prevItem + 1 : 1));
        }, 1500);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <footer>
            <div className="footer-nav">
                <ul>
                    <li className={hoverEffect === 1 ? "hover-overlay" : ""}>Design</li>
                    <li className={hoverEffect === 5 ? "hover-overlay" : ""}>About</li>
                    <li className={hoverEffect === 7 ? "hover-overlay" : ""}>Projects</li>
                    <li className={hoverEffect === 2 ? "hover-overlay" : ""}>Testimonials</li>
                    <li className={hoverEffect === 3 ? "hover-overlay" : ""}>Contact</li>
                    <li className={hoverEffect === 6 ? "hover-overlay" : ""}>FAQ's</li>
                    <li className={hoverEffect === 4 ? "hover-overlay" : ""}>Privacy Policy</li>
                </ul>
            </div>
            <div className="copyright">
                <p>Copyright @2023 asiatouristconnect.com</p>
            </div>
        </footer>
    )
}

export default Footer