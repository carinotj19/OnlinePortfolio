import React from 'react';
import './DotNav.css';

const DotNav = ({ sections, currentSection, onSectionChange, position = 'right' }) => {
  return (
    <div className={`dotnav-container dotnav-${position}`}>
      <div className="dotnav" role="navigation" aria-label="Section navigation">
        {sections.map((section, index) => (
          <button
            key={index}
            type="button"
            className={`dotnav-item ${currentSection === index ? 'active' : ''}`}
            onClick={() => onSectionChange(index)}
            aria-label={`Go to ${section.name}`}
            aria-current={currentSection === index ? 'true' : undefined}
            title={section.name}
          >
            <span className="dotnav-dot" aria-hidden="true"></span>
            <span className="dotnav-label">{section.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default DotNav; 
