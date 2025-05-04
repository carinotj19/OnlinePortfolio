import React, { useMemo } from "react";
import ImageCarousel from "../UI/ImageCarousel/ImageCarousel";
import "./Certificates.css";

function Certificates() {
    // Import all images from the Certificates folder dynamically
    const certificateImages = useMemo(() => {
        const importAll = (r) => r.keys().map(r);
        return importAll(
            require.context("../../assets/Certificates", false, /\.(png|jpe?g|svg)$/)
        );
    }, []);

    // Certificate metadata (ideally this would come from a database or external file)
    const certificateData = certificateImages.map((image, index) => {
        // Extract filename without extension more robustly
        const filename = image.split('/').pop();
        // Handle filenames with multiple dots by joining all but last part
        const parts = filename.split('.');
        parts.pop();
        
        return {
            image: image,
            id: index + 1
        };
    });

    return (
        <div className="certificates-section" id="certificates">
            <ImageCarousel 
                title="Certificates" 
                images={certificateData.map(cert => cert.image)} 
                altPrefix="Certificate" 
                metadata={certificateData}
            />
        </div>
    );
}

export default Certificates;
