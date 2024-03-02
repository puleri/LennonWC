import React from "react";
import stars from '../../assets/photos/stars.svg'

const CustomerStories = () => {

    return (
        <>
            <div className="customer-stories-container">
                <h2 className="customer-stories-h2">Customer Stories</h2>
                <p className='customer-stories-p'>
                    I was absolutely blown away with the service they offer! I have tried to clean our windows many times and decided it was time for professional help - I couldn’t have been happier with my decision to have Micah come clean them. Thank you again!!
                    <br/>
                    <br/>
                    — Makenna Larson, Seattle
                </p>
                <div className="relative">
                    <img alt="5 Stars" className="star-img" src={stars} /><span className="number-reviews">(53)</span>
                </div>
            </div>
        </>
    )
}

export default CustomerStories