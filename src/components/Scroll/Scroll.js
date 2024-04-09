import React from "react";
import "./Scroll.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Scroll = ({text, indicatorPosition}) => {
    library.add(fas, far, fab);
    return (
        <div className="scroll-indicator" style={{ top: indicatorPosition }}>
            <div className="text">{text}</div>
            <div className="icon">
                <FontAwesomeIcon icon={["fas", "angle-double-down"]} />
            </div>
        </div>
    );
};

export default Scroll;
