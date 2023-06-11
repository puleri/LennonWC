import React, { useEffect, useState } from 'react'
import Navbar from '../NavBar/NavBar'
import quote from '../../assets/photos/quote.png'
import CTA1 from '../CTA1/CTA1'
import Footer from '../Footer/Footer'

const Reviews = () => {
    return (
        <>
            <Navbar />
            <div className='thanks-hero-container'>
                <h1 className='mission-h1'>Thank You!</h1>
                <h2>We will get back to you soon and look forward to getting in touch.</h2>
            </div>
            <Footer />
        </>
    )
}
export default Reviews