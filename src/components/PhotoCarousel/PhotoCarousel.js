import React, { useState, useEffect } from 'react';
import arrow from '../../assets/photos/arrow.png'

const PhotoCarousel = ({ photoArr }) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const goToNextPhoto = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photoArr.length);
  };

  const goToPreviousPhoto = () => {
    setCurrentPhotoIndex((prevIndex) =>
      prevIndex === 0 ? photoArr.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(goToNextPhoto, 4200); // Adjust the interval time (in milliseconds) as needed

    return () => clearInterval(interval);
  }, [photoArr.length]);

  return (
    <div className="photo-carousel">
      <div className="carousel-navigation">
        <button
        style={{
            position: 'absolute',
            cursor: 'pointer',
            zIndex: '2',
            top: '48%',
            paddingTop: '5px',
            background: "none",
            left: '-45px',
            width: '100px',
            height: '30px',
            borderRadius: '10px',
            fontWeight: 'bold',
            fontSize:'20px',
            fontFamily:'Raleway',
            border: 'none'
          }} onClick={goToPreviousPhoto}><img src={arrow}
          style={{
            height: '20px',

          }} /></button>
        <button 
        style={{
            position: 'absolute',
            cursor: 'pointer',
            zIndex: '2',
            top: '48%',
            paddingTop: '5px',
            background: "none",
            right: '-45px',
            width: '100px',
            height: '30px',
            borderRadius: '10px',
            fontWeight: 'bold',
            fontSize:'20px',
            fontFamily:'Raleway',
            border: 'none'
          }}
        onClick={goToNextPhoto}><img src={arrow}
        style={{
            height: '20px',
            transform: 'scaleX(-1)'

        }} /></button>
      </div>
      {photoArr.map((photo, index) => (
        <img
          key={index}
          src={photo}
          alt={`Photo ${index + 1}`}
          style={{
            opacity: index === currentPhotoIndex ? 1 : 0,
            transition: 'opacity 0.5s ease-in-out',
            position: 'absolute',
            borderRadius: '200px 200px 0 0',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        />
      ))}
    </div>
  );
};

export default PhotoCarousel;
