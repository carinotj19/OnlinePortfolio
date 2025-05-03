import React, { useState, useEffect } from 'react';
import './SectionNav.css';

const SectionNav = ({ sections, currentSection, onSectionChange }) => {
    const [activeSection, setActiveSection] = useState(currentSection || 0);
    
    useEffect(() => {
        if (currentSection !== undefined) {
            setActiveSection(currentSection);
        }
    }, [currentSection]);

    useEffect(() => {
        const handleScroll = () => {
            // Get all section elements
            const sectionElements = sections.map(section => 
                document.getElementById(section.id)
            );
            
            // Calculate which section is currently in view
            const viewportHeight = window.innerHeight;
            const scrollPosition = window.scrollY + viewportHeight / 3;
            
            let activeSectionIndex = 0;
            sectionElements.forEach((section, index) => {
                if (section) {
                    const sectionTop = section.offsetTop;
                    const sectionBottom = sectionTop + section.offsetHeight;
                    
                    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                        activeSectionIndex = index;
                    }
                }
            });
            
            setActiveSection(activeSectionIndex);
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [sections]);
    
    const handleDotClick = (index) => {
        if (onSectionChange) {
            onSectionChange(index);
        }
    };
    
    return (
        <div className="section-nav">
            {sections.map((section, index) => (
                <div 
                    key={section.id || index}
                    className={`nav-dot ${index === activeSection ? 'active' : ''}`}
                    onClick={() => handleDotClick(index)}
                    title={section.title || section.name}
                >
                    <span className="dot-tooltip">{section.title || section.name}</span>
                </div>
            ))}
        </div>
    );
};

export default SectionNav; 