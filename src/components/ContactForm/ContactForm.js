import React, {useEffect, useState} from 'react'
import Navbar from '../NavBar/NavBar'

const ContactForm = () => {
    const [contactForm, setContactForm] = useState({
        address: '',
        name: '',
        body: ''
    })
    return (
        <>
        <Navbar />
        </>
    )
}
export default ContactForm