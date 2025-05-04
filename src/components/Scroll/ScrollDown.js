import React, { useEffect } from "react";
import "./ScrollDown.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Initialize FontAwesome library once outside the component
library.add(fas, far, fab);

const Scroll = ({ text, onClick }) => {
    // Add keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            // Down arrow key
            if (e.keyCode === 40) {
                onClick();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [onClick]);

    return (
        <div className="scroll-indicator visible" onClick={onClick}>
            <div className="text">Scroll to {text}</div>
            <div className="icon">
                <FontAwesomeIcon icon={["fas", "angle-double-down"]} />
            </div>
        </div>
    );
};

export default Scroll;
