import React, { useState } from 'react';
import './Slider.css';

const slides = [
  {
    image: "/images/img1.jpg",
    title: "Bringing the Big Screen to Your Screen",
    subtitle: "Discover, critique, and celebrate movies with honest reviews and fresh takes on every film"
  },
  {
    image: "/images/img2.jpg",
    title: "Latest Blockbusters",
    subtitle: "Catch all the action, drama, and thrill from the comfort of your home"
  },
  {
    image: "/images/img3.jpg",
    title: "Exclusive Premieres",
    subtitle: "Stay ahead with the newest releases and exclusive content"
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

  const currentSlide = slides[current];

  return (
    <div className="slider" style={{ backgroundImage: `url(${currentSlide.image})` }}>
      <div className="overlay">
        <h1>{currentSlide.title}</h1>
        <p>{currentSlide.subtitle}</p>
        <button>Discover More..</button>
      </div>
      <button className="left-arrow" onClick={prevSlide}>&#10094;</button>
      <button className="right-arrow" onClick={nextSlide}>&#10095;</button>
    </div>
  );
};

export default Slider;
