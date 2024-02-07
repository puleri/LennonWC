import React from 'react'
import Navbar from '../NavBar/NavBar'
import quote from '../../assets/photos/quote.png'
import CTA1 from '../CTA1/CTA1'
import Footer from '../Footer/Footer'
import Reviews2 from '../Homepage/Reviews2'

const Reviews = () => {
    return (
        <>
            <Navbar />
            <div className="hero">
                {/* Use a div as a container for the background image */}
                <div className="hero-background" />

                {/* Content of the hero section */}
                <div className="hero-content">
                    <h1 className='testimonials-h1'>Testimonials</h1>
                    <h2 className='testimonials-h2'>Trusted by businesses and homeowners alike.</h2>
                </div>
            </div>
            <div className='testimonials-container'>
                <h3 className='testimonials-h3'>Learn why our customers choose us time and time again for exceptional window cleaning services that exceed expectations</h3>
                <div className='testimonial'>
                    <img alt="quotation mark" className='quote' src={quote} />
                    <p className='quote-body'>I was absolutely blown away with the service they offer! I have tried to clean our windows many times and decided it was time for professional help - I couldn’t have been happier with my decision to have Micah come clean them. Thank you again!!</p>
                    <p className='quote-body'>— Makenna Larson, Seattle</p>
                </div>
                <div className='testimonial'>
                    <img alt="quotation mark" className='quote' src={quote} />
                    <p className='quote-body'>Micah did an AMAZING job cleaning all the windows of our house - inside and out! We hadn’t had our windows professionally clean for over 2 years and this was worth every penny. Micah was friendly, thorough, and professional. Our windows are now summer-ready!</p>
                    <p className='quote-body'>— Kasey and Erik Stromswold, Seattle</p>
                </div>
                <div className='testimonial'>
                    <img alt="quotation mark" className='quote' src={quote} />
                    <p className='quote-body'>I could not recommend LWC & Micah enough!! You really don’t realize how much of a difference deeply clean windows can be until you have had it done. More light comes into your home, your windows/screens/blinds are spotless, and it just makes you so happy! I HIGHLY recommend Lennon Window Cleaning. You will be thrilled by how happy you will be just by clean windows!</p>
                    <p className='quote-body'>— Lili and Matt Jenson, Mukilteo</p>
                </div>
                <div className='testimonial'>
                    <img alt="quotation mark" className='quote' src={quote} />
                    <p className='quote-body'>We hired Lennon Window Cleaning with no window washing expertise or knowledge and Micah guided us through the whole process. We were quick to book him with his kindness and support! He spent the afternoon washing our windows inside and out. We also asked to get our gutters done as well and when we came home from work, my husband & I were AMAZED by how clean everything was… we have never seen any windows or gutters so clean and our house left is perfect condition! Micah gave us great service and an amazing experience with window washing. 10 STARS! We can never go back to not caring about our windows. Also, an added bonus is that he retrieved our dog’s favorite lost ball in the gutter
                    We would recommend this business to anyone and everyone!! Thank you, Micah!</p>
                    <p className='quote-body'>— Vivianne and Mitchell Philips, Lynnwood</p>
                </div>
                <div className='testimonial'>
                    <img alt="quotation mark" className='quote' src={quote} />
                    <p className='quote-body'>Micah did a wonderful job cleaning the windows inside and out. He left the work area cleaner than it was found at every window. The windows have never been cleaner, I will be having him back once the windows need to be cleaned again. I would highly recommend LWC.</p>
                    <p className='quote-body'>— Navid Nobakht, Seattle</p>
                </div>
                <div className='testimonial'>
                    <img alt="quotation mark" className='quote' src={quote} />
                    <p className='quote-body'> What a great experience! I rarely leave a review, but I am thrilled with the level of service I received. Micah is timely, thorough and professional. His prices are great and his work is fantastic. My windows are spotless!</p>
                    <p className='quote-body'>— Bethenee Grant, Bothell</p>
                </div>
                <div className='testimonial'>
                    <img alt="quotation mark" className='quote' src={quote} />
                    <p className='quote-body'> I highly recommend Lennon window cleaning! Micah is professional, punctual, and very knowledgeable. He does a fantastic job! I was blown away with how good my windows looked. They are also reasonably priced which was a nice surprise! Thank you Micah!</p>
                    <p className='quote-body'>— Becca Bee, Seattle</p>
                </div>
            </div>
            <Reviews2 />
            <CTA1 />
            <Footer />
        </>
    )
}
export default Reviews