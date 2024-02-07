import React from "react";

const CTA1 = () => {

    return (
        <>
        <div className="CTA1-container">
            <h2 className="cta-h2">We offer free estimates for all of our <br/>services! We look forward to serving you.</h2>
            <button onClick={() => window.location.href = '/contact'} className="get-quote">Get a quote.</button>
        </div>
        </>
    )
}

export default CTA1