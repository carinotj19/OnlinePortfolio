import React, { useMemo } from "react";
import ImageCarousel from "../UI/ImageCarousel/ImageCarousel";

function Projects() {
    // Import all images from the Projects folder dynamically
    const projectImages = useMemo(() => {
        const importAll = (r) => r.keys().map(r);
        return importAll(
            require.context("../../assets/Projects", false, /\.(png|jpe?g|svg)$/)
        );
    }, []);

    return (
        <div className="projects-section">
            <ImageCarousel 
                title="Projects" 
                images={projectImages} 
                altPrefix="Project" 
            />
        </div>
    );
}

export default Projects;
