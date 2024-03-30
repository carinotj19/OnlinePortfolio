import React from "react";
import "./Header.css";
import Socials from "./Socials";

function Header() {
    return (
        <div className="container">
            <h1>TJ is a Software Developer in Baguio City, Philippines</h1>
            <Socials />
            <div class="current">
                <div class="workBadge" aria-label="Current">
                    <span>CURRENTLY</span>
                </div>
                <br />
                <br />
                <h3>
                    3rd Year Student in Computer Science
                    <br />
                    at{" "}
                    <a
                        href="https://www.uc-bcf.edu.ph"
                        target="_blank"
                        rel="noreferrer"
                        className="uc_link"
                    >
                        University of the Cordilleras
                    </a>
                </h3>
            </div>
        </div>
    );
}

export default Header;
