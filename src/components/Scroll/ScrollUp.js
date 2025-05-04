import React, { useEffect } from "react";
import "./ScrollUp.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Initialize FontAwesome library once outside the component
library.add(fas, far, fab);

const ScrollUp = ({ text, onClick }) => {
    // Add keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            // Up arrow key
            if (e.keyCode === 38) {
                onClick();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [onClick]);

    return (
        <div className="scroll-up-indicator visible" onClick={onClick}>
            <div className="icon">
                <FontAwesomeIcon icon={["fas", "angle-double-up"]} />
            </div>
            <div className="text">Scroll to {text}</div>
        </div>
    );
};

export default ScrollUp; 