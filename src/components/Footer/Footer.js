import React from "react";
import logo from '../../assets/photos/footer-logo.png'
import badge from '../../assets/photos/badge.png'

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <>
        <div className="footer-container">
            <div className="footer-left">
                <h2 className="footer-h2">The #1 Window Cleaning Service in the Greater Seattle Area</h2>
                <p className="call-cta">Call today for a free estimate</p>
                <h2 className="footer-phone">(425) 328-8827</h2>
                <div className="bottom-nav">
                    <a href="/" className="bottom-nav-item">Home</a>
                    <a href="/about" className="bottom-nav-item">About</a>
                    <a href="/services" className="bottom-nav-item">Services</a>
                    <a href="/reviews" className="bottom-nav-item">Reviews</a>
                    <a href="/contact" className="bottom-nav-item">Contact</a>
                </div>  
                <p className="bottom-nav-fine">© {year} Lennon Window Cleaning, all rights reserved.</p>
                <p className="bottom-nav-fine bottom-push">Website handcrafted with love by Matthew Puleri</p>
  
            </div>
            <div className="logo-lisence-wrapper">
                <img className='footer-logo' src={logo}/>
                <a href="licensed" className="lisenced-bonded-div">
                    <b className="L-B-I">licensed,<br/>bonded,<br/>and insured</b>
                    <img className='badge' src={badge} />
                </a>
            </div>

        </div>
        </>
    )
}

export default Footer