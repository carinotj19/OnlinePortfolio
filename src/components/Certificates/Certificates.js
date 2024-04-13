import React from "react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Certificates.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Scroll from "../Scroll/Scroll";

// Import all images from the Certificates folder dynamically
function importAll(r) {
    return r.keys().map(r);
}
const certificateImages = importAll(
    require.context("../../assets/Certificates", false, /\.(png|jpe?g|svg)$/)
);

function Certificates() {
    return (
        <div className="carousel-container">
            <h1>Certificates</h1>
            <Swiper
                modules={[Navigation, Pagination, A11y]}
                loop={true}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
            >
                {certificateImages.map((image, index) => (
                    <SwiperSlide key={index}>
                        {" "}
                        {/* Ensure each SwiperSlide has a unique key */}
                        <div className="slide-content">
                            <img
                                src={image}
                                alt={`Slide ${index + 1}`}
                                className="slide-image"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <Scroll text="Projects" />
        </div>
    );
}

export default Certificates;
