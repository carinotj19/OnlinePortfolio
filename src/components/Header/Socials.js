import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tooltip from "./Tooltip";

function Socials() {
    library.add(fas, far, fab);
    return (
        <div className="social_buttons">
            <a
                href="mailto:carinotj19@gmail.com"
                target="_blank"
                rel="noreferrer"
                tabIndex="1"
                className="button b1"
            >
                <Tooltip>
                    <span className="tooltiptext">
                        Reach out&nbsp;&nbsp;
                        <FontAwesomeIcon
                            icon={["fas", "arrow-up-right-from-square"]}
                        />
                    </span>
                </Tooltip>
                <div className="placeholder">
                    <FontAwesomeIcon icon={["fas", "paper-plane"]} />
                </div>
            </a>
            <a
                href="https://drive.google.com/file/d/1Ce4KU_GhiHrdWfJOP_futilsJWqcloCP/view"
                target="_blank"
                rel="noreferrer"
                tabIndex="2"
                className="button b2"
            >
                <Tooltip>
                    <span className="tooltiptext">
                        Resume&nbsp;&nbsp;
                        <FontAwesomeIcon
                            icon={["fas", "arrow-up-right-from-square"]}
                        />
                    </span>
                </Tooltip>

                <div className="placeholder">
                    <FontAwesomeIcon icon={["fas", "paperclip"]} />
                </div>
            </a>
            <a
                href="https://www.linkedin.com/in/tj-carino/"
                target="_blank"
                rel="noreferrer"
                tabIndex="4"
                className="button b5"
            >
                <Tooltip>
                    <span className="tooltiptext">
                        LinkedIn&nbsp;&nbsp;
                        <FontAwesomeIcon
                            icon={["fas", "arrow-up-right-from-square"]}
                        />
                    </span>
                </Tooltip>

                <div className="placeholder">
                    <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
                </div>
            </a>
        </div>
    );
}

export default Socials;
