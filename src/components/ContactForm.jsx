import { useState, forwardRef } from 'react';
import { motion } from 'framer-motion'
import PropTypes from 'prop-types';


const ContactForm = forwardRef(({ refProp }, ref) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        city: '',
        website: '',
        message: '',
    });

    const [formErrors, setFormErrors] = useState({
        nameError: '',
        emailError: '',
        cityError: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });

        // Clear validation errors on input change
        setFormErrors({
            ...formErrors,
            [`${name}Error`]: '',
        });
    };

    const validateEmail = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Simple form validation
        let isValid = true;
        const { name, email, city } = formData;
        const newFormErrors = {};

        if (name.trim() === '') {
            newFormErrors.nameError = 'Name is required';
            isValid = false;
        }
        if (city.trim() === '') {
            newFormErrors.cityError = 'Please enter a city';
            isValid = false;
        }

        if (email.trim() === '' || !validateEmail(email)) {
            newFormErrors.emailError = 'Please enter a valid email address';
            isValid = false;
        }

        if (!isValid) {
            setFormErrors(newFormErrors);
            return;
        }

        // Handle form submission - You can perform actions like API calls here
        console.log('Form submitted:', formData);
    };

    return (
        <section ref={refProp} className="contact-form">
            <motion.h2
                initial={{ transform: 'scale(0.3)', opacity: 0.2 }}
                whileInView={{ transform: 'scale(1)', opacity: 1 }}
                transition={{ duration: 1 }}
            >GET IN TOUCH</motion.h2>

            <div className="form-grid">
                <div className="contact-information">
                    <h1>Crafting Websites Tailored for the Asian Tourism Industry</h1>
                    <p>Our array of services caters to businesses of all sizes. No project is too big or too small. Every project is unique, and planning might seem overwhelming, So don't hesitate to connect with us and provide insights into your business. We're enthusiastic about discussing and guiding you toward the ideal path for your brand.</p>
                </div>
                <motion.form onSubmit={handleSubmit}
                >
                    <div>
                        <label htmlFor="name">Name -</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder='*Required'
                            value={formData.name}
                            onChange={handleChange}
                        />
                        <span className="error">{formErrors.nameError}</span>
                    </div>

                    <div>
                        <label htmlFor="email">Email -</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder='ie.. janeDoe@gmail.com'
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <span className="error">{formErrors.emailError}</span>
                    </div>

                    <div>
                        <label htmlFor="city">City -</label>
                        <input
                            type="city"
                            id="city"
                            name="city"
                            placeholder='*Required'
                            value={formData.city}
                            onChange={handleChange}
                        />
                        <span className="error">{formErrors.cityError}</span>
                    </div>

                    <div>
                        <label htmlFor="website">Website -</label>
                        <input
                            type="text"
                            id="website"
                            name="website"
                            placeholder='Do you have an existing website?'
                            value={formData.website}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="message">Details -</label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder='Please provide some details of your business and budget for the project'
                            value={formData.message}
                            onChange={handleChange}
                        />
                    </div>

                    <button type="submit">Submit</button>
                </motion.form>
            </div>
        </section>
    );
}
)

ContactForm.propTypes = {
    refProp: PropTypes.object,
}

ContactForm.displayName = 'ContactForm'

export default ContactForm;
