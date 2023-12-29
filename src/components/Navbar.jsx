import { motion } from 'framer-motion'
import { fadeScaleIn } from '../animations'
const Navbar = ({ scrollToContactFormRef }) => {
    return (
        <>
            <div className="nav-btn-container">
                <motion.button
                    {...fadeScaleIn}
                    onClick={() => scrollToContactFormRef()}
                >Book a Consultation</motion.button>
            </div>
        </>
    )
}

export default Navbar