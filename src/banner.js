import React, { useState, useEffect } from 'react';
import image1 from './images/img1.png';
import image2 from './images/img2.jpg';
import image3 from './images/img3.jpg';
import './Banner.css';

const Banner = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [image1,image2,image3]; 

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000); 

    return () => clearInterval(interval); 
  }, [images.length]);

  return (
    <div className="banner-container">
      <img src={images[currentImageIndex]} alt="Banner" className="banner-image" />
    </div>
  );
};

export default Banner;
