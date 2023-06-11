import React from "react";

const CTA = () => {


    return (
        <>
            <div className="home-CTA">
                {/* Use a div as a container for the background image */}
                <div className="home-CTA-background" />

                <div className="CTA-wrapper">
                    <div className="CTA-h2">Let our window cleaning service <em className="CTA-em">brighten &nbsp;</em>up your day.</div>
                    <a href="/contact" className="learn-more CTA-btn">Get a quote</a>
                </div>
            </div>

        </>
    )
}

export default CTA