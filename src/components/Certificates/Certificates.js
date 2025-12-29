import React, { useMemo } from "react";
import MediaGrid from "../UI/MediaGrid/MediaGrid";
import "./Certificates.css";

function Certificates({ isActive }) {
    // Import all images from the Certificates folder dynamically
    const certificateImages = useMemo(() => {
        const importAll = (r) => r.keys().map(r);
        return importAll(
            require.context("../../assets/Certificates", false, /\.(png|jpe?g|svg)$/)
        );
    }, []);

    const items = useMemo(
        () =>
            certificateImages.map((image, index) => ({
                src: image,
                id: index + 1
            })),
        [certificateImages]
    );

    return (
        <MediaGrid
            id="certificates"
            title="Certificates"
            items={items}
            altPrefix="Certificate"
            isActive={isActive}
            className="certificates-section"
        />
    );
}

export default Certificates;
