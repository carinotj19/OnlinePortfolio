import React, { useMemo } from "react";
import MediaGrid from "../UI/MediaGrid/MediaGrid";
import manifest from "../../assets/Projects/manifest";

const isRepoLink = url =>
    typeof url === "string" &&
    /github\.com|gitlab\.com|bitbucket\.org/i.test(url);

const normalizeItems = (entries = []) =>
    entries
        .map((entry, index) => {
            if (!entry || !entry.src) return null;
            const title = entry.title || "";
            const repo = entry.repo || entry.repoUrl;
            const demo = entry.demo || entry.demoUrl;
            const fallbackUrl = entry.url;

            const repoUrl = repo || (fallbackUrl && isRepoLink(fallbackUrl) ? fallbackUrl : "");
            const demoUrl = demo || (fallbackUrl && !isRepoLink(fallbackUrl) ? fallbackUrl : "");

            return {
                id: entry.id ?? entry.slug ?? index,
                src: entry.src,
                title,
                repo: repoUrl,
                demo: demoUrl
            };
        })
        .filter(Boolean);

function Projects({ isActive }) {
    const items = useMemo(() => {
        try {
            const list = Array.isArray(manifest) ? manifest : [];
            if (list.length > 0) {
                return normalizeItems(list);
            }
        } catch (_) { }

        // Fallback to dynamic import if manifest missing or empty
        try {
            const r = require.context(
                "../../assets/Projects",
                false,
                /\.(png|jpe?g|svg|webp)$/
            );
            const metaMap = {
                "responsive-web-design": { title: "Responsive Web Design", repo: "https://github.com/carinotj19/Bootstrap-Responsive-Website" },
                "smart-job-tracker": { title: "Smart Job Tracker", repo: "https://github.com/carinotj19/job-tracker" },
                "brainy-box": { title: "Brainy Box", repo: "https://github.com/carinotj19/BrainyBox" },
                "catholic-school-website": { title: "Catholic School Website", demo: "https://olmcm-website.vercel.app/" },
                "fine-ads-mockup": { title: "Fine Ads Mockup", repo: "https://github.com/carinotj19/Fine-Ads" },
                "javascript-drumkit": { title: "Javascript Drumkit", repo: "https://github.com/carinotj19/Javascript_Drumkit" },
                "simple-clock": { title: "Simple Clock", repo: "https://github.com/carinotj19/CSS_JS_Clock" },
                "simple-blackjack": { title: "Simple Black Jack", repo: "https://github.com/carinotj19/Blackjack" },
                "jeepney-streamlit-application": { title: "Jeepney Streamlit Application", demo: "https://jeepney-routing-system.streamlit.app/" },
                "cabkit3d": { title: "CabKit3D", demo: "https://carinotj19.github.io/CabKit3D/" }
            };
            const itemsFromContext = r.keys().map((path, index) => {
                const src = r(path);
                const name = path.match(/\.\/(.+)\.\w+$/)?.[1] || `project-${index}`;
                const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                const meta = metaMap[slug] || {};
                return { src, slug, ...meta };
            });
            return normalizeItems(itemsFromContext);
        } catch (e) {
            console.warn('Projects: no manifest and dynamic import failed', e);
            return [];
        }
    }, []);

    return (
        <MediaGrid
            title="Projects"
            items={items}
            altPrefix="Project"
            isActive={isActive}
            className="projects-section"
        />
    );
}

export default Projects;
