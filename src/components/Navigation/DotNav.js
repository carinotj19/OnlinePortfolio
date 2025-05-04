import React from 'react';
import './DotNav.css';

const DotNav = ({ sections, currentSection, onSectionChange, position = 'right' }) => {
  return (
    <div className={`dotnav-container dotnav-${position}`}>
      <div className="dotnav">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`dotnav-item ${currentSection === index ? 'active' : ''}`}
            onClick={() => {
              onSectionChange(index);
            }}
            title={section.name}
          >
            <span className="dotnav-dot"></span>
            <span className="dotnav-label">{section.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DotNav; 