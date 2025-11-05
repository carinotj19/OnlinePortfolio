import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../icons";
import Tooltip from "./Tooltip";

function Socials() {
    return (
        <div className="social_buttons">
            <a
                href="mailto:carinotj19@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email TJ"
                className="button b1"
            >
                <Tooltip>
                    <span className="tooltiptext">
                        Reach out&nbsp;&nbsp;
                        <FontAwesomeIcon
                            icon={["fas", "arrow-up-right-from-square"]}
                            aria-hidden="true"
                        />
                    </span>
                </Tooltip>
                <div className="placeholder" aria-hidden="true">
                    <FontAwesomeIcon icon={["fas", "paper-plane"]} />
                </div>
            </a>
            <a
                href="https://drive.google.com/file/d/1Ce4KU_GhiHrdWfJOP_futilsJWqcloCP/view"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View resume (opens in new tab)"
                className="button b2"
            >
                <Tooltip>
                    <span className="tooltiptext">
                        Resume&nbsp;&nbsp;
                        <FontAwesomeIcon
                            icon={["fas", "arrow-up-right-from-square"]}
                            aria-hidden="true"
                        />
                    </span>
                </Tooltip>

                <div className="placeholder" aria-hidden="true">
                    <FontAwesomeIcon icon={["fas", "paperclip"]} />
                </div>
            </a>
            <a
                href="https://github.com/carinotj19"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open TJ's GitHub profile"
                className="button b3"
            >
                <Tooltip>
                    <span className="tooltiptext">
                        GitHub&nbsp;&nbsp;
                        <FontAwesomeIcon
                            icon={["fas", "arrow-up-right-from-square"]}
                            aria-hidden="true"
                        />
                    </span>
                </Tooltip>

                <div className="placeholder" aria-hidden="true">
                    <FontAwesomeIcon icon={["fab", "github"]} />
                </div>
            </a>
            <a
                href="https://www.linkedin.com/in/tj-carino/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open TJ's LinkedIn profile"
                className="button b5"
            >
                <Tooltip>
                    <span className="tooltiptext">
                        LinkedIn&nbsp;&nbsp;
                        <FontAwesomeIcon
                            icon={["fas", "arrow-up-right-from-square"]}
                            aria-hidden="true"
                        />
                    </span>
                </Tooltip>

                <div className="placeholder" aria-hidden="true">
                    <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
                </div>
            </a>
        </div>
    );
}

export default Socials;
