import React, { useMemo } from "react";
import ImageCarousel from "../UI/ImageCarousel/ImageCarousel";

function Certificates() {
    // Import all images from the Certificates folder dynamically
    const certificateImages = useMemo(() => {
        const importAll = (r) => r.keys().map(r);
        return importAll(
            require.context("../../assets/Certificates", false, /\.(png|jpe?g|svg)$/)
        );
    }, []);

    return (
        <div className="certificates-section">
            <ImageCarousel 
                title="Certificates" 
                images={certificateImages} 
                altPrefix="Certificate" 
            />
        </div>
    );
}

export default Certificates;
