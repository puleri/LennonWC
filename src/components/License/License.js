import React, { useEffect, useState } from 'react'
import Navbar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
const License = () => {
    return (
        <>
            <Navbar />
            <div className='license-hero-container'>
                <h1 className='license-h1'>Guarantees that we offer our clients:</h1>
                <ol className='guarantees-container'>
                    <li><b>Customer Satisfaction Guarantee:</b></li>
                    <ul>
                        <li>We have 8 years of experience in the window cleaning industry, and our top priority is our clients satisfaction. If for any reason you are not completely satisfied with our service, we offer a customer satisfaction guarantee. Simply let us know, and we will make it right or provide a full refund.</li>
                    </ul>
                    <br/>

                    <li><b>Licensed, Bonded, and Insured:</b></li>
                    <ul>
                        <li>We are a licensed, bonded, and insured window cleaning company. This means that we have met the necessary legal requirements and hold the appropriate licenses to operate our business. Additionally, our insurance coverage provides protection up to $1,000,000, ensuring that both you and our team are safe and covered in the unlikely event of any accidents or damages.</li>
                    </ul>
                    <br/>

                    <li><b>Home Cleanliness Assurance:</b></li>
                    <ul>
                        <li>We understand that your home is important to you, and we take great care to ensure its cleanliness during our service. When our cleaners are working inside your home, they will remove their shoes or wear protective shoe covers to prevent any dirt or debris from being tracked inside. We respect your space and strive to leave it as clean as we found it.</li>
                    </ul>
                    <br/>

                    <li><b>Safety around Families:</b></li>
                    <ul>
                        <li>The safety of your family is of utmost importance to us. Our professional window cleaners are respectful to all family members.</li>
                    </ul>
                </ol>
                <br/>
                <br/>
            </div>
            <Footer />
        </>
    )
}
export default License