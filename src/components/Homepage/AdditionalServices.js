import React from "react";
import roof from '../../assets/photos/roof.png'
import bolt from '../../assets/photos/bolt.png'


const AdditionalServices = () => {


    return (
        <>
            <div className="home-hero">
                {/* Use a div as a container for the background image */}
                <div className="additional-services-background" />

                {/* Content of the hero section */}
                <div className="additional-services-content">
                    <h2 className="home-additional-services-h2">In addition to our window cleaning services we also offer:</h2>
                    <div className="additional-services-container">
                        <div className="additional-item">
                            <div className="center">
                                <img className="icon-service" src={roof} />
                                <h3 className="additional-services-h3">Roof and Gutter Cleaning</h3>
                            </div>
                            <p className="additional-services-p">&emsp;&emsp;Gutter and roof cleaning are essential to maintaining the integrity and longevity of a property's structure. Regular cleaning helps prevent water damage, which can save homeowners thousands of dollars in repair costs over time, and also helps preserve the overall aesthetic and curb appeal of the property.</p>
                            <a href="/contact" className="learn-more">Learn More</a>

                        </div>
                        <div className="additional-item">
                            <div className="center">
                                <img className="icon-service2" src={bolt} />
                                <h3 className="additional-services-h3">Power Washing</h3>
                            </div>
                            <p className="additional-services-p">&emsp;&emsp;Pressure washing is an effective way to protect the health and aesthetic of a property. Regular cleaning of outdoor surfaces such as decks, patios, and sidewalks can help prevent the growth of harmful mold, mildew, and bacteria, which can cause respiratory issues and other health problems.</p>
                            <a href="/contact" className="learn-more">Learn More</a>
                        </div>
                    </div>
                </div>


            </div>

        </>
    )
}

export default AdditionalServices