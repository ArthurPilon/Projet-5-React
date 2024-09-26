import React, { useState } from "react";

const Carousel = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        {/* Images */}
        {pictures.map((picture, index) => (
          <div
            key={index}
            className={`carousel-slide ${
              index === currentIndex ? "active" : ""
            }`}
          >
            <img
              src={picture}
              alt={`Slide ${index}`}
              className="carousel-img"
            />
          </div>
        ))}
      </div>

      {/* Numérotation des images */}
      <div className="carousel-counter">
        {currentIndex + 1} / {pictures.length}
      </div>

      {/* Affiche les flèches seulement s'il y a plus d'une image */}
      {pictures.length > 1 && (
        <>
          {/* Left Arrow */}
          <div id="left-arrow" className="arrows" onClick={prevSlide}>
            <svg
              width="96"
              height="120"
              viewBox="0 0 96 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_363466_96)">
                <path
                  d="M70.04 15.7831L62.92 8.70312L23.36 48.3031L62.96 87.9031L70.04 80.8231L37.52 48.3031L70.04 15.7831Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_363466_96">
                  <rect
                    width="96"
                    height="119.64"
                    fill="white"
                    transform="translate(0 0.303223)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>

          {/* Right Arrow */}
          <div id="right-arrow" className="arrows" onClick={nextSlide}>
            <svg
              width="96"
              height="121"
              viewBox="0 0 96 121"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_363466_100)">
                <path
                  d="M25.96 81.3458L33.04 88.4258L72.64 48.8258L33.04 9.22583L25.96 16.3058L58.48 48.8258L25.96 81.3458Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_363466_100">
                  <rect
                    width="96"
                    height="119.64"
                    fill="white"
                    transform="translate(0 0.825928)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </>
      )}
    </div>
  );
};

export default Carousel;
