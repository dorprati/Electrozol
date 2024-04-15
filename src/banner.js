import React, { useState, useEffect } from 'react';

const Banner = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ['image1.jpg', 'image2.jpg', 'image3.jpg']; 

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval); 
  }, [images.length]);

  return (
    <div className="banner">
      <img src={images[currentImageIndex]} alt="Banner" />
    </div>
  );
};

export default Banner;
