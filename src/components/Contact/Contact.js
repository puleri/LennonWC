import React, { useRef, useState } from 'react';
import Navbar from '../NavBar/NavBar';
import Footer from '../Footer/Footer'
import emailjs from '@emailjs/browser';
import blob from './blob.svg'


const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        services: [], // Initialize as an empty array
    });

    const form = useRef();

    const [disabled, setDisabled] = useState(false)

    const handleInputChange = (event) => {
        const { name, value, type, checked } = event.target;
        if (type === 'checkbox') {
            // Update the array based on checkbox selection
            const updatedServices = checked
                ? [...formData.services, value]
                : formData.services.filter((service) => service !== value);

            setFormData((prevFormData) => ({
                ...prevFormData,
                [name]: updatedServices,
            }));
        } else {
            setFormData((prevFormData) => ({
                ...prevFormData,
                [name]: value,
            }));
        }
        console.log(formData)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log((formData.services).join(', '))


        // Configure EmailJS parameters
        const serviceId = 'service_1914l26'; // Replace with your EmailJS service ID
        const templateId = 'template_gkj7636'; // Replace with your EmailJS template ID
        const userId = 'xO6LR1sLwDPkq6t_3'; // Replace with your EmailJS user ID

        // Prepare the email data to be sent
        const emailData = {
            from_name: form.current.firstName.value + " " + form.current.lastName.value,
            to_name: 'lennonwindowcleaning@gmail.com', // Replace with your desired recipient email address
            subject: 'New Contact Form Submission',
            message_html: `First Name: ${form.current.firstName.value} \n
                     Last Name: ${form.current.lastName.value}\n
                     Email: ${form.current.email.value}\n
                     Phone: ${form.current.phone.value}\n
                     Services: ${formData.services.join(', ')}`,
        };


        // Send the email using EmailJS
        emailjs.send(serviceId, templateId, emailData, userId)
            .then((response) => {
                // Email sent successfully, you can show a success message or redirect the user
                console.log('Email sent!', response);
                setDisabled(true)
                window.location.href = '/thank-you';
            })
            .catch((error) => {
                // Handle error, display an error message, etc.
                console.error('Error sending email:', error);
            });
    };


    return (
        <>
            <Navbar />
            <h1 className='contact-h1'>Contact Us</h1>
            <h4 className='contact-h4'>We’d love to hear from you. Let us know how we can help.</h4>

            <div className="contact-container">
                <img className="blob" src={blob} />
                <form className='form-container' ref={form} onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="firstName">First Name:</label>
                        <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name:</label>
                        <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone Number:</label>
                        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} required />
                    </div>
                    <div className="form-group">
                        <label>What services are you interested in?</label>
                        <div className="checkbox-group">
                            <label className='checkbox-flex' htmlFor="windowCleaning">
                                <input type="checkbox" id="windowCleaning" name="services" value="Window Cleaning" checked={formData.services.includes('Window Cleaning')} onChange={handleInputChange} />
                                Window Cleaning
                            </label>
                            <label className='checkbox-flex' htmlFor="roofGutterCleaning">
                                <input type="checkbox" id="roofGutterCleaning" name="services" value="Roof/Gutter Cleaning" checked={formData.services.includes('Roof/Gutter Cleaning')} onChange={handleInputChange} />
                                Roof/Gutter Cleaning
                            </label>
                            <label className='checkbox-flex' htmlFor="pressureWashing">
                                <input type="checkbox" id="pressureWashing" name="services" value="Pressure Washing" checked={formData.services.includes('Pressure Washing')} onChange={handleInputChange} />
                                Pressure Washing
                            </label>
                            <label className='checkbox-flex' htmlFor="pressureWashing">
                                <input type="checkbox" id="pressureWashing" name="services" value="Christmas Lights" checked={formData.services.includes('Christmas Lights')} onChange={handleInputChange} />
                                Christmas Lights
                            </label>
                        </div>
                        
                    </div>
                    <div className="btn-margin">
                            <input 
                            disabled={disabled}
                            className="send-btn" type="submit" value="Send" />
                    </div>
                </form>
            </div>
            <Footer />
        </>
    );
};



export default Contact;
