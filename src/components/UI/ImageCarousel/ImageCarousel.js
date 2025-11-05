import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ImageCarousel.css";

const PrevArrow = ({ onClick }) => (
  <button className="custom-prev" onClick={onClick}>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
    </svg>
  </button>
);

const NextArrow = ({ onClick }) => (
  <button className="custom-next" onClick={onClick}>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
    </svg>
  </button>
);

const ImageCarousel = ({ title, images = [], altPrefix, metadata, isActive }) => {
  const [errors, setErrors] = useState({});
  const touchStart = useRef({ x: 0, y: 0 });
  const sliderRef = useRef(null);
  const containerRef = useRef(null);
  // If fewer than 5 slides, duplicate for better loop behavior
  const slides = images.length < 5 ? [...images, ...images] : images;
  const meta = metadata
    ? (metadata.length < slides.length
      ? [...metadata, ...metadata].slice(0, slides.length)
      : metadata)
    : [];

  const onError = i => setErrors(prev => ({ ...prev, [i]: true }));

  const handleStart = e => {
    const pt = e.touches ? e.touches[0] : e;
    touchStart.current = { x: pt.pageX, y: pt.pageY };
  };

  const handleMove = e => {
    const pt = e.touches ? e.touches[0] : e;
    const dx = Math.abs(pt.pageX - touchStart.current.x);
    const dy = Math.abs(pt.pageY - touchStart.current.y);

    if (dx > dy) {
      e.stopPropagation();
    }
  };

  // Force slick to recalc when the carousel becomes visible
  useEffect(() => {
    const recalc = () => {
      if (sliderRef.current) {
        try {
          sliderRef.current.slickGoTo(0, true);
        } catch (_) {}
        try {
          window.dispatchEvent(new Event('resize'));
        } catch (_) {}
      }
    };

    // On mount and after images load
    const t = setTimeout(recalc, 50);

    // Recalc when tab becomes visible again
    const onVis = () => document.visibilityState === 'visible' && recalc();
    document.addEventListener('visibilitychange', onVis);

    // Cleanup
    return () => {
      clearTimeout(t);
      document.removeEventListener('visibilitychange', onVis);
    };
  }, [images.length]);

  // When the section becomes active, ensure slick is laid out
  useEffect(() => {
    if (isActive) {
      try {
        if (sliderRef.current) sliderRef.current.slickGoTo(0, true);
        window.dispatchEvent(new Event('resize'));
      } catch (_) {}
    }
  }, [isActive]);

  // Slick settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "60px",
    autoplay: true,
    pauseOnHover: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    initialSlide: 0,
    lazyLoad: 'ondemand',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          centerPadding: "40px",
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "20px",
          arrows: false,
          dots: true
        }
      }
    ],
    className: "certificate-slider"
  };

  return (
    <div className="carousel-container" ref={containerRef}>
      <h1>{title}</h1>
      <div
        className="slider-wrapper"
        onTouchStart={handleStart}
        onPointerDown={handleStart}
        onTouchMove={handleMove}
        onPointerMove={handleMove}
      >
        <Slider ref={sliderRef} {...settings}>
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
                      alt={`${altPrefix} ${i + 1}`}
                      loading="lazy"
                      onError={() => onError(i)}
                      className="slide-image"
                    />
                    <div className="card-overlay">
                      {meta[i]?.title && <h3>{meta[i].title}</h3>}
                      <div className="overlay-buttons">
                        <button
                          className="btn-image"
                          onClick={e => {
                            e.stopPropagation();
                            window.open(src, "_blank");
                          }}
                        >
                          View Image
                        </button>
                        {meta[i]?.url && (
                          <a
                            className="overlay-link"
                            href={meta[i].url}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={e => e.stopPropagation()}
                          >
                            View Repo
                          </a>
                        )}
                      </div>
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
