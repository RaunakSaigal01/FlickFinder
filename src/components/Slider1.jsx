import React, { useState } from 'react';
import './Slider1.css';

const slides = [
  {
    id: 1,
    image: './images/festival1.png',
    alt: 'Cinema Festival 1',
  },
  {
    id: 2,
    image: './images/festival2.png',
    alt: 'Cinema Festival 2',
  },
  {
    id: 3,
    image: './images/festival3.png',
    alt: 'Cinema Festival 3',
  }
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="slider-container">
      <div className="slider-wrapper" style={{ transform: `translateX(-${current * 100}%)` }}>
        {slides.map((slide) => (
          <div className="slide" key={slide.id}>
            <img src={slide.image} alt={slide.alt} className="image" />
          </div>
        ))}
      </div>

      <button className="prev" onClick={prevSlide}>&#10094;</button>
      <button className="next" onClick={nextSlide}>&#10095;</button>

      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${current === index ? 'active' : ''}`}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slider;
