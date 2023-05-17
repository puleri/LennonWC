import React, {useEffect, useState} from 'react'
import Navbar from '../NavBar/NavBar'
import PhotoCarousel from '../PhotoCarousel/PhotoCarousel'

// photos
import action from '../../assets/photos/action-shot.jpg'
import fearless from '../../assets/photos/fearless.jpg'
import flying from '../../assets/photos/flying.jpg'
import smile from '../../assets/photos/smile.jpg'
import serious from '../../assets/photos/serious.jpg'
import yellow from '../../assets/photos/yellow-scrubber.jpg'



const About = () => {
    const photoArr = [action, fearless, flying, smile, serious, yellow]
    return (
        <>
        <Navbar />
        <div
        style={{
            position: 'absolute',
            top: '100px',
            left: '200px',
            width: '330px',
            height: '500px',
          }}
        >
            <PhotoCarousel  photoArr={photoArr} />
        </div>
        </>
    )
}
export default About