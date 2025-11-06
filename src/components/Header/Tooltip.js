import React, { useId } from "react";

function Tooltip({ id, className = "", children }) {
    const reactId = useId();
    const tooltipId = id ?? `tooltip-${reactId}`;

    return (
        <span
            id={tooltipId}
            role="tooltip"
            className={`tooltiptext${className ? " " + className : ""}`}
        >
            {children}
        </span>
    );
}

export default Tooltip;
