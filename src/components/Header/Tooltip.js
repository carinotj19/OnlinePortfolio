import React, { useState } from 'react';

function Tooltip({ children }) {
    const [showTooltip, setShowTooltip] = useState(false);

    const handleMouseEnter = () => {
        setShowTooltip(true);
    };

    const handleMouseLeave = () => {
        setShowTooltip(false);
    };

    return (
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {children}
            {showTooltip && {children}}
        </div>
    );
}

export default Tooltip;