import { useEffect, useState, forwardRef } from 'react'
import PropTypes from 'prop-types';

const TestimonialsSlider = forwardRef(({ refProp }, ref) => {
    const [isVisible, setIsVisible] = useState(1)
    const [isHover, setIsHover] = useState(false)

    // Slider functionality with pause on hover
    useEffect(() => {
        const interval = setInterval(() => {
            if (!isHover) {
                setIsVisible(prevVisible => (prevVisible === 6 ? 1 : prevVisible + 1));
            }
        }, 5500);

        return () => {
            clearInterval(interval);
        };
    }, [isHover]);


    return (
        <section ref={refProp} className="testimonials-mob">
            <div className="testimonial-flex"
                onMouseEnter={() => setIsHover(true)}
                onMouseOut={() => setIsHover(false)}>

                <div className={isVisible === 1 ? "flex-testimonial" : 'flex-testimonial fade-slide'}>
                    <h4 className='black-white-text'>Uaun Kham</h4>
                    <blockquote className='black-white-text'>"I had no idea how much potential business we were missing with our old website,
                        Thanks for the effort you put in to rebrand the business and showcase the shop in such a professional manner"</blockquote>
                </div>

                <div className={isVisible === 2 ? "flex-testimonial" : 'flex-testimonial fade-slide'}>
                    <h4 className='black-white-text'>Phita Hall</h4>
                    <blockquote className='black-white-text'>"Thanks crew! The website looks even better then expected and our sales have
                        increased by 15%. Highly recommended!"</blockquote>
                </div>

                <div className={isVisible === 3 ? "flex-testimonial" : 'flex-testimonial fade-slide'}>
                    <h4 className='black-white-text'>Hoa Nguyen</h4>
                    <blockquote className='black-white-text'>"Dan was so easy to work with and I really appreciated the consistent communication throughout the design and build process, many thanks"</blockquote>
                </div>

                <div className={isVisible === 4 ? "flex-testimonial" : 'flex-testimonial fade-slide'}
                >
                    <h3>We Appreciate your feedback...</h3>
                    <button className='black-white-text'>Leave us a review</button>
                </div>

                <div className={isVisible === 5 ? "flex-testimonial" : 'flex-testimonial fade-slide'}>
                    <h4 className='black-white-text'>Bhen Sudiprun</h4>
                    <blockquote className='black-white-text'>"At first I was not sure if the investment into a professional website was going to be worth the investment, but after just 3 months the extra clientele reaching out to me online was incredible"</blockquote>
                </div>

                <div className={isVisible === 6 ? "flex-testimonial" : 'flex-testimonial fade-slide'}>
                    <h4 className='black-white-text'>Charoen Saetang </h4>
                    <blockquote className='black-white-text'>"I think this was the only design agency that encouraged me to take the cheapest option they offered! I am so happy with Dan's honesty and guidance as the final product is perect for my needs"</blockquote>

                </div>

                <div className={isVisible === 7 ? "flex-testimonial" : 'flex-testimonial fade-slide'}>
                    <h4 className='black-white-text'>Jim Clander</h4>
                    <blockquote className='black-white-text'>"I was really impressed at how quickly it all came together"</blockquote>
                </div>
            </div>
        </section>
    )
}
)

TestimonialsSlider.propTypes = {
    refProp: PropTypes.object,
}

TestimonialsSlider.displayName = "TestimonialsSlider"

export default TestimonialsSlider