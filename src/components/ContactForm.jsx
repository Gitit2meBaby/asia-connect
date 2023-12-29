import { useState, forwardRef, useEffect } from 'react';
import { motion } from 'framer-motion'
import PropTypes from 'prop-types';
import emailjs from '@emailjs/browser'


const ContactForm = forwardRef(({ refProp }, ref) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        city: '',
        website: '',
        message: '',
    });

    const [formErrors, setFormErrors] = useState({
        nameError: '*Please provide a name...',
        emailError: '*Please provide a valid email...',
        cityError: '*Please let us know where you are located...',
    });

    // EmailJS authentication and email setup
    const [emailSent, setEmailSent] = useState(false)
    const templateId = 'template_z2fxzae'
    const publicKey = '2yIDzkBbZE8C-Duuz'
    const serviceId = 'service_zk47pxm'

    useEffect(() => {
        emailjs.init(publicKey);
    }, []);


    const submit = () => {
        const templateParams = {
            name: formData.name,
            email: formData.email,
            city: formData.city,
            website: formData.website,
            message: formData.message,
        };

        emailjs.send(serviceId, templateId, templateParams)
            .then((response) => {
                console.log('Email sent successfully!', response);
                console.log('formData:', formData);
                console.log('templateParams:', templateParams);
                console.log('templateParams.name:', templateParams.name);
            })
            .catch((error) => {
                console.error('Email sending failed:', error);
            });

        setFormData({
            name: '',
            email: '',
            city: '',
            website: '',
            message: '',
        });
        setFormErrors(null)
        setEmailSent(true);
    };


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });

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
        submit()
    };

    return (
        <>
            <section ref={refProp} className="contact-form">
                <motion.h2
                    initial={{ transform: 'scale(0.3)', opacity: 0.2 }}
                    whileInView={{ transform: 'scale(1)', opacity: 1 }}
                    transition={{ duration: 1 }}
                >GET IN TOUCH</motion.h2>

                <div className="form-grid">
                    <div className="contact-information">
                        <h1>Crafting Websites Tailored for the Asian Tourism Industry</h1>
                        <p>We're all about making our services fit just right for businesses of any size. Every project has its own story, and we're thrilled to be a part of it, big or small. Planning can be overwhelming, so how about sharing some insights about your business? We genuinely love a good chat and can't wait to help map out your brand's unique journey.</p>
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

                {
                    emailSent && (
                        <section className='success-modal'>
                            <h3>Success!</h3>
                            <p>We will get in touch via {formData.email} shortly</p>
                            <p>Thanks for your enquiry</p>
                            <button onClick={() => setEmailSent(false)}>Back</button>
                        </section>
                    )
                }
            </section>
        </>
    );
}
)

ContactForm.propTypes = {
    refProp: PropTypes.object,
}

ContactForm.displayName = 'ContactForm'

export default ContactForm;
