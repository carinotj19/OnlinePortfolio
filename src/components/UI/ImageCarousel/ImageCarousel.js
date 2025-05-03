import React, { useState } from "react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./ImageCarousel.css";

const ImageCarousel = ({ title, images, altPrefix }) => {
    const [imageErrors, setImageErrors] = useState({});

    const handleImageError = (index) => {
        setImageErrors(prev => ({
            ...prev,
            [index]: true
        }));
    };

    return (
        <div className="carousel-container">
            <h1>{title}</h1>
            <Swiper
                modules={[Navigation, Pagination, A11y]}
                loop={true}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <div className="slide-content">
                            {imageErrors[index] ? (
                                <div className="image-error">
                                    <p>Failed to load image</p>
                                </div>
                            ) : (
                                <img
                                    src={image}
                                    alt={`${altPrefix} ${index + 1}`}
                                    className="slide-image"
                                    onError={() => handleImageError(index)}
                                />
                            )}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ImageCarousel; 