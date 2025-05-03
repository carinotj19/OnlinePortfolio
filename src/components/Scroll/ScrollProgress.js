import React, { useState, useEffect } from 'react';
import './ScrollProgress.css';

const ScrollProgress = () => {
    const [scrollPercentage, setScrollPercentage] = useState(0);

    const calculateScrollPercentage = () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight;
        const winHeight = window.innerHeight;
        const scrollPercent = (scrollTop / (docHeight - winHeight)) * 100;
        setScrollPercentage(Math.min(Math.max(scrollPercent, 0), 100));
    };

    useEffect(() => {
        window.addEventListener('scroll', calculateScrollPercentage);
        // Calculate once on mount
        calculateScrollPercentage();
        
        return () => {
            window.removeEventListener('scroll', calculateScrollPercentage);
        };
    }, []);

    return (
        <div className="scroll-progress-container">
            <div 
                className="scroll-progress-bar" 
                style={{ width: `${scrollPercentage}%` }} 
            />
            <div className="scroll-percentage">
                {Math.round(scrollPercentage)}%
            </div>
        </div>
    );
};

export default ScrollProgress; 