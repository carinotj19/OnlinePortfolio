import React, { useState, useRef, useEffect, useCallback } from "react";
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
  const lastSize = useRef({ width: 0, height: 0 });
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

  // Robust relayout function for react-slick in hidden containers
  const ensureLayout = useCallback(() => {
    const tryRecalc = () => {
      if (!sliderRef.current) return;
      try { sliderRef.current.slickGoTo(0, true); } catch (_) {}
      try {
        const inner = sliderRef.current.innerSlider;
        if (inner && typeof inner.onWindowResized === 'function') inner.onWindowResized();
      } catch (_) {}
      try { window.dispatchEvent(new Event('resize')); } catch (_) {}
    };
    // Burst of attempts: immediate, next frame, 100ms, 300ms
    tryRecalc();
    if (typeof requestAnimationFrame === 'function') requestAnimationFrame(tryRecalc);
    setTimeout(tryRecalc, 100);
    setTimeout(tryRecalc, 300);
  }, []);

  // Force slick to recalc when the carousel mounts or images change
  useEffect(() => {
    const t = setTimeout(ensureLayout, 50);
    const onVis = () => document.visibilityState === 'visible' && ensureLayout();
    document.addEventListener('visibilitychange', onVis);
    return () => {
      clearTimeout(t);
      document.removeEventListener('visibilitychange', onVis);
    };
  }, [images.length, ensureLayout]);

  // When the section becomes active, ensure slick is laid out
  useEffect(() => {
    if (isActive) ensureLayout();
  }, [isActive, ensureLayout]);

  // Recalc when the container becomes visible via IntersectionObserver
  useEffect(() => {
    if (!containerRef.current || !('IntersectionObserver' in window)) return;
    const obs = new IntersectionObserver((entries) => {
      const e = entries[0];
      if (e && e.isIntersecting) ensureLayout();
    }, { root: null, threshold: 0.2 });
    obs.observe(containerRef.current);
    return () => obs.disconnect();
  }, [ensureLayout]);

  // Recalc when the container finally receives a size (helps on first paint)
  useEffect(() => {
    if (!containerRef.current || typeof ResizeObserver === 'undefined') return;
    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (!entry || !entry.contentRect) return;
      const { width, height } = entry.contentRect;
      const prev = lastSize.current;
      if (width > 0 && height > 0 && (width !== prev.width || height !== prev.height)) {
        lastSize.current = { width, height };
        ensureLayout();
      }
    });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [ensureLayout]);

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
    className: "certificate-slider",
    onInit: ensureLayout,
    afterChange: ensureLayout
  };

  if (!slides || slides.length === 0) {
    return (
      <div className="carousel-container" ref={containerRef}>
        <h1>{title}</h1>
        <p style={{ color: 'var(--muted)' }}>No projects to display.</p>
      </div>
    );
  }

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
                      alt={meta[i]?.title ? meta[i].title : `${altPrefix} ${i + 1}`}
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
