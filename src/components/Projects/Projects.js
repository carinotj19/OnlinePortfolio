import React, { useMemo } from "react";
import ImageCarousel from "../UI/ImageCarousel/ImageCarousel";

function Projects({ isActive }) {
    // Import all images from the Projects folder dynamically
    const items = useMemo(() => {
        const r = require.context(
            "../../assets/Projects",
            false,
            /\.(png|jpe?g|svg)$/
        );
        return r.keys().map(path => {
            const src = r(path);
            const name = path.match(/\.\/(.+)\.\w+$/)[1];
            const slug = name
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/(^-|-$)/g, '');
            return { src, name, slug };
        });
    }, []);

    const metaMap = {
        "responsive-web-design": { title: "Responsive Web Design", url: "https://github.com/carinotj19/Bootstrap-Responsive-Website" },
        "smart-job-tracker": { title: "Smart Job Tracker", url: "https://github.com/carinotj19/job-tracker" },
        "brainy-box": { title: "Brainy Box", url: "https://github.com/carinotj19/BrainyBox" },
        "catholic-school-website": { title: "Catholic School Website", url: "https://olmcm-website.vercel.app/" },
        "fine-ads-mockup": { title: "Fine Ads Mockup", url: "https://github.com/carinotj19/Fine-Ads" },
        "javascript-drumkit": { title: "Javascript Drumkit", url: "https://github.com/carinotj19/Javascript_Drumkit" },
        "simple-clock": { title: "Simple Clock", url: "https://github.com/carinotj19/CSS_JS_Clock" },
        "simple-blackjack": { title: "Simple Black Jack", url: "https://github.com/carinotj19/Blackjack" },
        "jeepney-streamlit-application": { title: "Jeepney Streamlit Application", url: "https://jeepney-routing-system.streamlit.app/" },
    };

    const images = items.map(item => item.src);
    const metadata = items.map(item => metaMap[item.slug] || { title: "", url: "" });
    return (
        <div className="projects-section">
            <ImageCarousel
                title="Projects"
                images={images}
                metadata={metadata}
                altPrefix="Project"
                isActive={isActive}
            />
        </div>
    );
}

export default Projects;
