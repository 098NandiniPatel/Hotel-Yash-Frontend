import React, { useState, useEffect } from 'react';
import './slider.css';

const HeroSlider = ({ slides }) => {
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
