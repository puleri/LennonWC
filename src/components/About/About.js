import React, { useEffect, useState } from 'react'
import Navbar from '../NavBar/NavBar'
import PhotoCarousel from '../PhotoCarousel/PhotoCarousel'
import Footer from '../Footer/Footer'
import CTA1 from '../CTA1/CTA1'

// photos
import action from '../../assets/photos/action-shot.jpg'
import fearless from '../../assets/photos/fearless.jpg'
import flying from '../../assets/photos/flying.jpg'
import smile from '../../assets/photos/smile.jpg'
import serious from '../../assets/photos/serious.jpg'
import yellow from '../../assets/photos/yellow-scrubber.jpg'
import about from '../../assets/photos/about-hero.jpg'
import mission from '../../assets/photos/mission.png'


const About = () => {
    const photoArr = [about, action, fearless, flying, smile, serious, yellow]
    return (
        <>
            <Navbar />
            <div className='story-carousel-container'>

                <div className='story-container'>
                    <h2 className='story-h2'>Our Story</h2>
                    <p className='mission-p'>
                        &emsp;&emsp;Lennon Window Cleaning was started in 2023 by Micah Patterson and his wife Lauren. After 8 years in the window cleaning industry, Micah decided to start his own company to support his growing family. Their daughter, Lennon Louise, was born on January 20th, 2023 and she went to Heaven on January 22nd, 2023.
                        <br />
                        <br />

                        &emsp;&emsp;After experiencing this devastating loss, Micah and Lauren have embarked on a new journey: starting a window cleaning business that carries her love, legacy and her name.
                        <br />
                        <br />

                        &emsp;&emsp;Through our window cleaning services, we aim to provide exceptional quality and an unparalleled attention to detail. Our ultimate goal is to brighten the lives and spaces of our clients, just as our daughter brightened ours with her beautiful spirit.
                        <br />
                        <br />

                        <b>&emsp;&emsp;We look forward to serving your family in the future!</b>

                    </p>
                </div>
                <div className='carousel-container'>
                    <div className='carousel-dimensions'>
                        <PhotoCarousel photoArr={photoArr} />
                    </div>
                </div>


            </div>
            <div className='about-hero-container'>
                <h1 className='mission-h1'>Mission</h1>
                <p className='mission-p'>
                    &emsp;&emsp;Welcome to Lennon Window Cleaning! We believe that clean windows can transform the look and feel of any home or business. The owner of the company, Micah Patterson, brings over 8 years of window cleaning experience and a commitment to providing the highest quality window cleaning services in the greater Seattle area.
                    <br />
                    <br />

                    &emsp;&emsp;What sets us apart is our attention to detail and personalized services. We take pride in ensuring that every window we clean is left streak-free and crystal clear.
                    <br />
                    <br />

                    &emsp;&emsp; Lennon Window Cleaning is fully licensed, bonded, and insured. We are dedicated to providing exceptional customer service from start to finish.
                    <br />
                    <br />

                    &emsp;&emsp;We believe that communication is key to delivering the best possible experience for our clients. That's why we take the time to listen to your needs, provide detailed estimates, and keep you informed throughout the cleaning process. We understand that every property is unique, and we tailor our services to meet you and your property’s specific needs.
                    <br />
                    <br />

                    &emsp;&emsp;Our family values are the heartbeat of our company and we can ensure that your family and your home will be treated with respect and care.
                    <br />
                    <br />
                    <br />
                    <br />

                    <b>&emsp;&emsp;Contact us today to schedule your cleaning and see the difference<br /> for yourself!</b>
                </p>
            </div>

            
            <CTA1 />

            <Footer />
        </>
    )
}
export default About