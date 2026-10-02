import React from "react";
import "./Header.css";
import Socials from "./Socials";

function Header() {
    return (
        <div className="container header-container">
            <p className="hero-kicker">TJ Cariño</p>
            <h1>
                Full-Stack Web Developer
            </h1>
            <p className="hero-stack">React · JavaScript/TypeScript · Python · REST APIs</p>
            <p className="hero-summary">
                Full-stack web developer with 4+ years of professional web development experience across frontend delivery, CMS platforms, APIs, and deployment.
            </p>

            <Socials />

            <div className="current">
                <div className="workBadge" aria-label="Current role">
                    <span>CURRENT</span>
                </div>
                <h3>
                    Frontend Developer
                    <br />
                    @{" "}
                    <a
                        href="https://www.pixelmotion.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="position_link"
                    >
                        Pixel Motion
                    </a>
                </h3>
            </div>
        </div>
    );
}

export default Header;
