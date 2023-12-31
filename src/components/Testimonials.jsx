import { useEffect, useState, forwardRef } from 'react'
import PropTypes from 'prop-types';

const Testimonials = forwardRef(({ refProp }, ref) => {
    const [black, setBlack] = useState(1)

    useEffect(() => {
        const interval = setInterval(() => {
            setBlack(prevCount => (prevCount < 3 ? prevCount + 1 : 1));
        }, 4000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <section ref={refProp} className="testimonials">
            <div className="testimonial-grid">
                <div className={black === 1 ? "grid-section grid1 black-white" : 'grid-section grid1 white-black'}>
                    <h4 className={black === 1 ? 'black-white-text' : 'white-black-text'}>Uaun Kham</h4>
                    <blockquote className={black === 1 ? 'black-white-text' : 'white-black-text'}>"I had no idea how much potential business we were missing with our old website,
                        Thanks for the effort you put in to rebrand the business and showcase the shop in such a professional manner"</blockquote>
                </div>

                <div className={black === 3 ? "grid-section grid2 black-white" : 'grid-section grid2 white-black'}>
                    <h4 className={black === 3 ? 'black-white-text' : 'white-black-text'}>Phita Hall</h4>
                    <blockquote className={black === 3 ? 'black-white-text' : 'white-black-text'}>"Thanks crew! The website looks even better then expected and our sales have
                        increased by 15%. Highly recommended!"</blockquote>
                </div>

                <div className={black === 2 ? "grid-section grid3 black-white" : 'grid-section grid3 white-black'}>
                    <h4 className={black === 2 ? 'black-white-text' : 'white-black-text'}>Hoa Nguyen</h4>
                    <blockquote className={black === 2 ? 'black-white-text' : 'white-black-text'}>"Dan was so easy to work with and I really appreciated the consistent communication throughout the design and build process, many thanks"</blockquote>
                </div>

                <div className="grid-section grid4 black-white">
                    <h3>We Appreciate your feedback</h3>
                    <button className={black === 2 && 'white-black-text white-black'}>Leave us a review <svg stroke="#040303" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M459.15 269.75a133.197 133.197 0 0 1-55.862 179.975l-42.782 22.541-10.52 5.533a71.277 71.277 0 0 1-62.966 1.685l-167.077-71.38 15.733-46.676 99.363 19.194-51.458-97.78-82.843-157.411 40.357-21.232 82.844 157.457 19.934-10.485-36.521-69.445 40.335-21.22 36.52 69.445 19.935-10.485-28.2-53.598 40.358-21.232 28.2 53.598 19.945-10.576-19.354-36.886 40.346-21.174 19.354 36.885 54.348 103.301zM73.268 146.674a60.03 60.03 0 0 1 42.361-102.459 60.098 60.098 0 0 1 56.58 80.169l10.588 20.013A78.29 78.29 0 0 0 115.708 26a78.233 78.233 0 0 0-5.635 156.262L99.428 162.02a59.688 59.688 0 0 1-26.16-15.346z"></path></svg></button>
                </div>

                <div className={black === 3 ? "grid-section grid5 black-white" : 'grid-section grid5 white-black'}>
                    <h4 className={black === 3 ? 'black-white-text' : 'white-black-text'}>Bhen Sudiprun</h4>
                    <blockquote className={black === 3 ? 'black-white-text' : 'white-black-text'}>"At first I was not sure if the investment into a professional website was going to be worth the investment, but after just 3 months the extra clientele reaching out to me online was incredible"</blockquote>
                </div>

                <div className={black === 2 ? "grid-section grid6 black-white" : 'grid-section grid6 white-black'}>
                    <h4 className={black === 2 ? 'black-white-text' : 'white-black-text'}>Charoen Saetang </h4>
                    <blockquote className={black === 2 ? 'black-white-text' : 'white-black-text'}>"I think this was the only design agency that encouraged me to take the cheapest option they offered! I am so happy with Dan's honesty and guidance as the final product is perect for my needs"</blockquote>

                </div>

                <div className={black === 1 ? "grid-section grid7 black-white" : 'grid-section grid7 white-black'}>
                    <h4 className={black === 1 ? 'black-white-text' : 'white-black-text'}>Jim Clander</h4>
                    <blockquote className={black === 1 ? 'black-white-text' : 'white-black-text'}>"I was really impressed at how quickly it all came together"</blockquote>
                </div>
            </div>
        </section>
    )
}
)

Testimonials.propTypes = {
    refProp: PropTypes.object,
}

Testimonials.displayName = "Testimonials"

export default Testimonials