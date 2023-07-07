import React, { useState, useEffect } from 'react';
import './slider.css';
  
  

const HeroSlider = () => {

  const slides = [
    {
      image: 'https://cdn.pixabay.com/photo/2021/08/27/01/33/bedroom-6577523_640.jpg',
      heading: 'Modern & spacious rooms',
    },
    {
      image: 'https://t3.ftcdn.net/jpg/04/50/44/86/240_F_450448652_rqrQSemauB5yVBAvgJ0KOcolxPoJXX8O.jpg',
      heading: 'luxury experience',
    },
    {
      image: 'https://cdn.pixabay.com/photo/2019/05/28/00/15/indoors-4234071_1280.jpg',
      heading: 'Book your room now',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
      // setAnimate(true)
    }, 5000);
    
    return () => {
      clearInterval(interval);
    };
  }, [slides.length]);
useEffect(()=>setAnimate(true),[currentIndex])
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slider first-section">
      <div className="slider-container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={index === currentIndex ? 'slide active' : 'slide'}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className={`slide-content ${animate ? 'animate' : ''}`}>
              <h2>{slide.heading}</h2>
            </div>
          </div>
        ))}
        <div className="dot-navigator">
          {slides.map((_, index) => (
            <span
              key={index}
              className={index === currentIndex ? 'dot active' : 'dot'}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default HeroSlider;
