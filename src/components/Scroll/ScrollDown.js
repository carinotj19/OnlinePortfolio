import React, { useState, useEffect } from "react";
import "./ScrollDown.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Initialize FontAwesome library once outside the component
library.add(fas, far, fab);

const Scroll = ({ text, onClick }) => {
    const [isVisible, setIsVisible] = useState(true);
    
    // Handle scroll position to update visibility
    useEffect(() => {
        const handleScroll = () => {
            // Hide/show logic can be implemented here
            // For example, hide when at the very bottom of the section
            const bottom = Math.max(
                document.body.scrollHeight, 
                document.body.offsetHeight,
                document.documentElement.scrollHeight,
                document.documentElement.offsetHeight
            );
            const windowHeight = window.innerHeight;
            const scrollPosition = window.scrollY + windowHeight;
            
            // Hide when we're near the bottom
            setIsVisible(scrollPosition < bottom - 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

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

    // Create dynamic class based on visibility
    const visibilityClass = isVisible ? "visible" : "hidden";

    return (
        <div className={`scroll-indicator ${visibilityClass}`} onClick={onClick}>
            <div className="text">Scroll to {text}</div>
            <div className="icon">
                <FontAwesomeIcon icon={["fas", "angle-double-down"]} />
            </div>
        </div>
    );
};

export default Scroll;
