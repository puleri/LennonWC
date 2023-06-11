import React from "react";

const Hero = () => {


    return (
        <>
            <div className="home-hero">
                {/* Use a div as a container for the background image */}
                <div className="home-hero-background" />

                {/* Content of the hero section */}
                <div className="home-hero-content">
                    <h1 className="home-hero-h1"><span className="start-quote">“</span>See your world<br/> in a whole new light<span className="end-quote">”</span></h1>
                </div>
                <div className="home-hero-content2">
                <a href="/contact" className="hero-home-btn">Call or message us for a free quote today!</a>
                </div>
                <h2 className='home-hero-h2'>Serving the Greater Seattle Area since 2018</h2>
            </div>

        </>
    )
}

export default Hero