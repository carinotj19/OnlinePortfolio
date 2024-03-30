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
        <>
            <div className="social_buttons">
                <a
                    href="mailto:carinotj19@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    tabindex="1"
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
                    href="https://drive.google.com/file/d/1diYip7YODakU9sZ9BuoSvKXbvnguEgc6/view"
                    target="_blank"
                    rel="noreferrer"
                    tabindex="2"
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
                    href="https://danegalbraith.notion.site/Dane-s-Projects-53c4290f965c47d4960ff9d71f29e25e"
                    target="_blank"
                    rel="noreferrer"
                    tabindex="3"
                    className="button b3"
                >
                    <Tooltip>
                        <span className="tooltiptext">
                            Projects&nbsp;&nbsp;
                            <FontAwesomeIcon
                                icon={["fas", "arrow-up-right-from-square"]}
                            />
                        </span>
                    </Tooltip>

                    <div className="placeholder">
                        <FontAwesomeIcon icon={["fas", "pen-ruler"]} />
                    </div>
                </a>

                <a
                    href="https://www.linkedin.com/in/tj-carino/"
                    target="_blank"
                    rel="noreferrer"
                    tabindex="4"
                    className="button b5"
                >
                    <Tooltip>
                        <span className="tooltiptext">
                            Certificates&nbsp;
                            <FontAwesomeIcon
                                icon={["fas", "arrow-up-right-from-square"]}
                            />
                        </span>
                    </Tooltip>

                    <div className="placeholder">
                        <FontAwesomeIcon icon={["fas", "scroll"]} />
                    </div>
                </a>

                <a
                    href="https://www.linkedin.com/in/tj-carino/"
                    target="_blank"
                    rel="noreferrer"
                    tabindex="4"
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

            <div className="social_buttons_mobile">
                <div className="top">
                    <a
                        href="mailto:carinotj19@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                        tabindex="1"
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
                        href="https://drive.google.com/file/d/1diYip7YODakU9sZ9BuoSvKXbvnguEgc6/view"
                        target="_blank"
                        rel="noreferrer"
                        tabindex="2"
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
                </div>
                <div className="bottom">
                    <a
                        href="https://danegalbraith.notion.site/Dane-s-Projects-53c4290f965c47d4960ff9d71f29e25e"
                        target="_blank"
                        rel="noreferrer"
                        tabindex="3"
                        className="button b3"
                    >
                        <Tooltip>
                            <span className="tooltiptext">
                                Projects&nbsp;&nbsp;
                                <FontAwesomeIcon
                                    icon={["fas", "arrow-up-right-from-square"]}
                                />
                            </span>
                        </Tooltip>

                        <div className="placeholder">
                            <FontAwesomeIcon icon={["fas", "pen-ruler"]} />
                        </div>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/tj-carino/"
                        target="_blank"
                        rel="noreferrer"
                        tabindex="4"
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
                    <a
                        href="https://www.linkedin.com/in/tj-carino/"
                        target="_blank"
                        rel="noreferrer"
                        tabindex="4"
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
            </div>
        </>
    );
}

export default Socials;
