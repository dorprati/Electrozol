import React, { useState, useEffect } from 'react';
import banner1 from '../images/logo1.jpg';
import banner2 from '../images/banner2.jpg';
import banner3 from '../images/img3.png';
import '../Styles/Banner.css';

const Banner = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [banner1, banner2, banner3];
  const intervalDuration = 5000;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, intervalDuration);
  
    return () => {
      clearInterval(intervalId); 
    };
  }, [images.length]);

  return (
    <div className="banner-container">
      <div className="banner">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={index === currentImageIndex ? 'active' : ''}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
