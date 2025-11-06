import React, { memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../icons";
import Tooltip from "./Tooltip";
import defaultLinks from "./socialLinks.json";

function SocialButton({ href, ariaLabel, buttonClass, tooltip, icon }) {
    const tooltipId = `tt-${buttonClass}`;
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={ariaLabel}
            aria-describedby={tooltipId}
            className={`button ${buttonClass}`}
            title={tooltip}
        >
            <Tooltip id={tooltipId}>
                {tooltip}
                &nbsp;&nbsp;
                <FontAwesomeIcon
                    icon={["fas", "arrow-up-right-from-square"]}
                    aria-hidden="true"
                />
            </Tooltip>

            <div className="placeholder" aria-hidden="true">
                <FontAwesomeIcon icon={icon} />
            </div>
        </a>
    );
}

function Socials({ links = defaultLinks }) {
    return (
        <div className="social_buttons">
            {links.map((l) => (
                <SocialButton key={l.key} {...l} />
            ))}
        </div>
    );
}

export default memo(Socials);
