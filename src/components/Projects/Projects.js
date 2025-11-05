import React, { useMemo } from "react";
import ImageCarousel from "../UI/ImageCarousel/ImageCarousel";
import manifest from "../../assets/Projects/manifest";

function Projects({ isActive }) {
    const { images, metadata } = useMemo(() => {
        try {
            const list = Array.isArray(manifest) ? manifest : [];
            if (list.length > 0) {
                return {
                    images: list.map(p => p.src).filter(Boolean),
                    metadata: list.map(({ title = "", url = "" }) => ({ title, url }))
                };
            }
        } catch (_) {}

        // Fallback to dynamic import if manifest missing or empty
        try {
            const r = require.context(
                "../../assets/Projects",
                false,
                /\.(png|jpe?g|svg|webp)$/
            );
            const items = r.keys().map(path => {
                const src = r(path);
                const name = path.match(/\.\/(.+)\.\w+$/)[1];
                const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                return { src, slug };
            });
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
            return {
                images: items.map(i => i.src),
                metadata: items.map(i => metaMap[i.slug] || { title: "", url: "" })
            };
        } catch (e) {
            console.warn('Projects: no manifest and dynamic import failed', e);
            return { images: [], metadata: [] };
        }
    }, []);
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
