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
            const description = entry.description || entry.summary || "";
            const fallbackUrl = entry.url;

            const repoUrl = repo || (fallbackUrl && isRepoLink(fallbackUrl) ? fallbackUrl : "");
            const demoUrl = demo || (fallbackUrl && !isRepoLink(fallbackUrl) ? fallbackUrl : "");

            return {
                id: entry.id ?? entry.slug ?? index,
                src: entry.src,
                title,
                repo: repoUrl,
                demo: demoUrl,
                description,
                tech: Array.isArray(entry.tech) ? entry.tech : []
            };
        })
        .filter(Boolean);

function Projects({ isActive }) {
    const items = useMemo(() => normalizeItems(Array.isArray(manifest) ? manifest : []), []);

    return (
        <MediaGrid
            title="Featured Projects"
            items={items}
            altPrefix="Project"
            isActive={isActive}
            className="projects-section"
        />
    );
}

export default Projects;
