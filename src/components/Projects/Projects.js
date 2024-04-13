import React from "react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// Import all images from the Certificates folder dynamically
function importAll(r) {
    return r.keys().map(r);
}
const projectImages = importAll(
    require.context("../../assets/Projects", false, /\.(png|jpe?g|svg)$/)
);

function Projects() {
    return (
        <div className="carousel-container">
            <h1>Projects</h1>
            <Swiper
                modules={[Navigation, Pagination, A11y]}
                loop={true}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
            >
                {projectImages.map((image, index) => (
                    <SwiperSlide>
                        {console.log(image)}
                        <img src={image} alt={`Slide ${index + 1}`} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Projects;
