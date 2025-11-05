function Tooltip({ children }) {
    // Tooltip visibility is controlled purely by CSS using .button:hover .tooltiptext
    // We just render the tooltip content directly to keep DOM minimal and styling predictable.
    return children;
}

export default Tooltip;
