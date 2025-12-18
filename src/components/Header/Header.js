import React from "react";
import "./Header.css";
import Socials from "./Socials";

function Header() {
    return (
        <div className="container">
            <h1>TJ is a Software Developer <br /> in Baguio City, Philippines</h1>
            <Socials />
            <div className="current">
                <div className="workBadge" aria-label="Current">
                    <span>CURRENT</span>
                </div>
                <br />
                <br />
                <h3>
                    Web Developer
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
