import React, { useEffect } from "react";
import "./ScrollUp.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../icons";

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
