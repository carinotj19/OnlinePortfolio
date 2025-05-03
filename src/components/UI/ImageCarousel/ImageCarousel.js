import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ImageCarousel.css";

const ImageCarousel = ({ title, images, altPrefix, metadata }) => {
  const [errors, setErrors] = useState({});

  // If fewer than 5 slides, duplicate for better loop behavior
  const slides = images.length < 5 ? [...images, ...images] : images;
  const meta = metadata?.length < 5 ? [...metadata, ...metadata] : metadata;
  
  const onError = i => setErrors(prev => ({ ...prev, [i]: true }));
  const onView = (url, e) => {
    if (e) e.stopPropagation();
    window.open(url, "_blank");
  };

  // Slick settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "60px",
    autoplay: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          centerPadding: "40px"
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "20px"
        }
      }
    ],
    className: "certificate-slider"
  };

  return (
    <div className="carousel-container">
      <h1>{title}</h1>
      {/* The Slider component would be used here when react-slick is installed */}
      <div className="slider-wrapper">
        <Slider {...settings}>
          {slides.map((src, i) => (
            <div key={i} className="slide-container">
              <div className="slide-content">
                {errors[i] ? (
                  <div className="image-error">
                    <p>Failed to load</p>
                  </div>
                ) : (
                  <div className="card">
                    <img
                      src={src}
                      alt={`${altPrefix} ${i+1}`}
                      loading="lazy"
                      onError={() => onError(i)}
                      className="slide-image"
                    />
                    <div className="card-overlay">
                      {meta?.[i] && <h3>{meta[i].title}</h3>}
                      <button onClick={(e) => onView(src, e)}>View</button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ImageCarousel;
