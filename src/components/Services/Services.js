import React from 'react'
import Navbar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'

import green from '../../assets/photos/green-scrubber.jpg'
import pressure from '../../assets/photos/pressurewash.jpg'
import gutter from '../../assets/photos/gutter.jpeg'
import xmas from '../../assets/photos/xmas.JPEG'
import shingles from '../../assets/photos/cleanshingles.png'




import CTA1 from '../CTA1/CTA1'


const Services = () => {
    return (
        <>
            <Navbar />
            <div className='services-side-nav'>
                <a className='side-nav-element' href="/services#window">Window Washing</a>
                <br />
                <a className='side-nav-element' href="/services#pressure">Pressure Washing</a>
                <br />
                <a className='side-nav-element' href="/services#gutter">Gutter Cleaning</a>
                <br />
                <a className='side-nav-element' href="/services#roof">Roof Cleaning</a>
                <br />
                <a className='side-nav-element' href="/services#christmas">Christmas Lights</a>
                <br />
            </div>
            <div id="window" className='license-hero-container'>
                <h1 className='license-h1'>Window</h1>
                <span className='lisence-h1-span'>Cleaning Packages</span>
                <div className='img-service-container'>
                    <img alt="window getting cleaned" className='window-service' src={green} />
                    <ul className='packages-container'>
                        <b className='package-bold'>Basic Package</b>
                        <ul>
                            <li>Interior and exterior window cleaning: Our professional team will clean both sides of your windows to remove dirt, dust, and other various marks, leaving them sparkling clean.</li>
                        </ul>
                        <b className='package-bold'>Deluxe Package</b>
                        <ul>
                            <li>Interior and exterior window cleaning: Includes the same thorough cleaning as the Basic Package.</li>
                            <li>Screen cleaning: We will clean your window screens to remove dust, debris, and other accumulated dirt, helping to improve the overall appearance of your windows.</li>
                        </ul>
                        <b className='package-bold'>Premium Package</b>
                        <ul>
                            <li>Interior and exterior window cleaning: Includes the same thorough cleaning as the Basic Package.</li>
                            <li>Screen cleaning: We will clean your window screens to remove dust, debris, and other accumulated dirt, helping to improve the overall appearance of your windows.</li>
                            <li>Track/sill cleaning: Our team will meticulously clean the tracks and sills of your windows, removing dirt, dust, and any other build-up that may hinder the smooth operation of your windows. This additional service enhances the overall cleanliness and functionality of your windows.</li>
                        </ul>
                        <p className='price-variance'><em>The prices for each package vary depending on factors such as the size and number of windows/screens. Clients can customize their packages further by adding additional services, such as gutter cleaning (interior and or exterior), roof cleaning, and pressure washing.</em></p>
                    </ul>
                    <br />
                    <br />
                </div>
            </div>


            <div className='additional-container'>
                <h2 className='additional-h2'>Additional Services:</h2>
                <h3>Pressure Washing, Gutter Cleaning, Roof Cleaning, Christmas Lights</h3>

                <br />
                <div id="pressure" className='break-line-white'></div>


                {
                    // Pressure Washing Begginning //
                }


                <h2 className='service-h2'>Pressure Washing</h2>
                <p className='services-ol'>At Lennon Window Cleaning, we offer top-notch pressure washing services to help you keep your property looking its best. Our team of experienced professionals utilizes high-quality equipment and proven techniques to deliver exceptional results.</p>
                <p className='services-ol'>Our pressure washing services are designed to effectively remove dirt, grime, mold, mildew, and other stubborn stains from various surfaces, including:</p>
                <div className='img-service-container'>

                <ol className='benefits-wrapper-left'>
                    <li>Exterior Walls: We can restore the beauty of your home's exterior walls by power washing away years of accumulated dirt, dust, and pollutants. Our techniques are safe for different types of siding, such as vinyl, stucco, brick, or wood.</li><br />
                    <li>Driveways and Sidewalks: Over time, driveways and sidewalks can become discolored and stained. Our pressure washing services can revitalize these surfaces, removing oil stains, tire marks, algae, and other unsightly blemishes, leaving them looking fresh and clean.</li><br />
                    <li>Patios and Decks: Whether you have a wooden deck or a concrete patio, our pressure washing techniques can restore their original beauty. We can remove dirt, mildew, moss, and other debris that may have accumulated, helping to improve the overall appearance and safety of these outdoor spaces.</li><br />
                    <li>Fences and Gates: Over time, fences and gates can become weathered and coated in dirt or grime. Our pressure washing services can rejuvenate these structures, removing dirt, mold, and other contaminants, and enhancing their overall appeal.</li><br />
                    <li>Outdoor Furniture and Fixtures: We can also clean and refresh your outdoor furniture, fixtures, and other surfaces, such as pergolas, awnings, or play equipment. Our pressure washing techniques are safe and effective for a wide range of materials.</li>
                </ol>
                <img alt="home getting pressure washed" className='window-service' src={pressure} />

                </div>

                <br />
                <div id="gutter" className='break-line-white'></div>



                {
                    // Gutter Cleaning Begginning //
                }


                <h2 id="pressure" className='service-h2'>Gutter Cleaning</h2>
                <p className='services-ol'>At Lennon Window Cleaning, we understand the importance of maintaining clean and functional gutters for the overall health and integrity of your property. Our professional gutter cleaning services provide thorough and efficient cleaning.</p>

                <p className='services-ol'>Interior Gutter Cleaning:<br />Our team of skilled technicians will carefully inspect your gutters to assess their condition and identify any blockages or debris. We will remove leaves, twigs, dirt, and other obstructions from the interior of your gutters. This process ensures that rainwater can flow freely, preventing potential water damage, leaks, or overflow.</p>

                <p className='services-ol'>Exterior Gutter Cleaning:<br />You can also choose to have the exterior of your gutters cleaned. Over time, gutters can accumulate dirt, grime, algae, and other contaminants, affecting their appearance and overall functionality. Our professional team will thoroughly clean the exterior of your gutters, restoring their original shine and ensuring they complement the aesthetics of your property.</p>

                <p className='services-ol'><b>Benefits of Our Gutter Cleaning Services:</b></p>
                <div className='img-service-container'>
                <img alt="Micah cleaning gutters of home" className='window-service' src={gutter} />
                <ol className='benefits-wrapper-right'>
                    <li>Prevents Water Damage: Regular gutter cleaning prevents water from overflowing and causing damage to your roof, siding, foundation, and landscaping. By keeping your gutters clean, you safeguard your property from potential costly repairs.</li><br />
                    <li>Extends Gutter Lifespan: Accumulated debris can lead to clogging, which puts excess strain on your gutters. Our thorough cleaning helps prolong the lifespan of your gutters, saving you money on premature replacements.</li><br />
                    <li>Enhances Curb Appeal: Clean gutters contribute to the overall aesthetic appeal of your home or business. Our exterior gutter cleaning service restores the appearance of your gutters, adding to the curb appeal and value of your property.</li><br />
                    <li>Professional and Reliable Service: With Lennon Window Cleaning, you can expect a professional and reliable service. Our experienced technicians are trained to handle gutter cleaning efficiently and safely. We prioritize customer satisfaction and ensure that the job is completed to the highest standards.</li>
                </ol>
                </div>
                <p className='services-ol'>By choosing our gutter cleaning services, you can have peace of mind knowing that your gutters are in excellent hands. Let Lennon Window Cleaning take care of your gutter maintenance needs, keeping your property protected, functional, and looking its best.</p>

                <br />
                <div id="roof" className='break-line-white'></div>



                {
                    // Roof Cleaning Begginning //
                }




                <h2 id="pressure" className='service-h2'>Roof Cleaning</h2>
                <p className='services-ol'>At Lennon Window Cleaning, we understand the importance of a clean and well-maintained roof for the overall health and longevity of your property. Our professional roof cleaning services specialize in light moss removal, ensuring your roof remains in optimal condition and enhances the appearance of your home.</p>

                <p className='services-ol'>Light Moss Removal:<br />Moss growth on roofs is a common issue that can compromise the integrity of your roof and impact its aesthetic appeal. Our experienced team utilizes effective techniques to safely and efficiently remove light moss from your roof, preventing further damage and maintaining its structural integrity.</p>

                <p className='services-ol'>Safe and Effective Cleaning:<br />Using industry-approved methods and equipment, we carefully clean your roof to remove the light moss infestation. Our techniques are tailored to minimize the risk of damage to your roof's surface while ensuring the complete removal of moss and preventing its regrowth.</p>

                <p className='services-ol'><b>Benefits of Our Roof Cleaning Services:</b></p>
                <div className='img-service-container'>
                <ol className='benefits-wrapper-left'>
                    <li>Preserves Roof Lifespan: By removing light moss, we help prevent its growth and potential damage to your roof. Regular roof cleaning helps extend the lifespan of your roof, saving you money on premature replacements.</li><br />
                    <li>Enhances Curb Appeal: A clean roof significantly enhances the overall appearance of your home. Our roof cleaning services eliminate unsightly moss, moss stains, and other debris, restoring your roof's original beauty and improving the curb appeal of your property.</li><br />
                    <li>Prevents Structural Damage: Moss can cause moisture retention and compromise the structural integrity of your roof. Our thorough cleaning and moss removal help prevent water infiltration and potential damage to underlying materials, such as shingles and decking.</li><br />
                    <li>Professional Service: At Lennon Window Cleaning, we pride ourselves on providing professional and reliable services. Our team is highly trained, ensuring that the roof cleaning process is carried out safely, efficiently, and to the highest standards.</li><br />
                </ol>
                <img alt="roof getting cleaned" className='window-service' src={shingles} />
                </div>
                <p className='services-ol'>With our roof cleaning services, you can trust that your roof is in capable hands. Let Lennon Window Cleaning help you maintain a clean, moss-free roof that enhances the beauty, durability, and value of your property.</p>

                <br />
                <div id="christmas" className='break-line-white'></div>



                {
                    // Christmas Lights Begginning //
                }



                <h2 id="pressure" className='service-h2'>Christmas Lights</h2>
                <p className='services-ol'>At Lennon Window Cleaning, we offer professional and custom fit Christmas light installation services that bring the joy and magic of the holiday season to your home. Whether you already have your own Christmas lights or need a custom fit solution, our expert team is here to transform your house into a festive wonderland.</p>

                <p className='services-ol'>Custom Fit Installation:<br />We understand that every home is unique, which is why we specialize in custom fit Christmas light installations. Our experienced technicians will carefully assess your house's architectural features, roofline, and outdoor spaces to create a design that perfectly complements your property. With our attention to detail and expertise, we ensure that the lights fit seamlessly, enhancing the beauty of your home's exterior.</p>

                <p className='services-ol'>Color and Style Selection:<br />Personalization is key when it comes to creating a magical holiday display. With our custom fit Christmas light installation service, you have the freedom to choose your preferred colors and styles. Whether you envision a classic white light display or a vibrant multi-color extravaganza, we can accommodate your preferences, creating a unique and enchanting atmosphere that suits your taste.</p>

                <p className='services-ol'>Safety and Professionalism:<br />Putting up Christmas lights can be a daunting and potentially hazardous task, especially when dealing with ladders and electrical connections. With Lennon Window Cleaning, you can have peace of mind knowing that our trained professionals will handle the entire installation process for you. Our team has the necessary expertise to ensure the lights are securely and safely installed, mitigating any risks associated with amateur installations.</p>

                <p className='services-ol'>Convenient Take-Down and Storage:<br />Once the holiday season comes to an end, our service doesn't stop. We provide hassle-free light removal, carefully taking down the lights without causing any damage to your property. Additionally, we offer a container for you to store your lights until the following year, keeping them organized, protected, and ready for next season's installation.</p>

                <p className='services-ol'><b>Benefits of Our Christmas Lights Service:</b></p>
                <div className='img-service-container'>
                <img alt="christmas lights being hung with care" className='window-service' src={xmas} />
                <ol className='benefits-wrapper-right'>
                    <li>Personalized Design: Our custom fit installations are tailored to your home's specific features, creating a unique and visually stunning display.</li><br />
                    <li>Safety and Expertise: Leave the climbing and electrical work to our trained professionals, ensuring a safe and worry-free installation.</li><br />
                    <li>Convenience and Storage: We take care of the entire process, from installation to removal, providing you with a storage container for your lights until the next holiday season.</li><br />
                    <li>Festive Atmosphere: Our custom fit Christmas lights will bring warmth, cheer, and a touch of magic to your home, creating a joyful atmosphere that spreads holiday cheer to your family and neighbors.</li><br />
                </ol>
                </div>
                <p className='services-ol'>Let Lennon Window Cleaning transform your home into a winter wonderland with our custom fit Christmas light installation service. Sit back, relax, and enjoy the holiday season while we take care of all your lighting needs.</p>
            </div>
            <CTA1 />
            <Footer />
        </>
    )
}
export default Services