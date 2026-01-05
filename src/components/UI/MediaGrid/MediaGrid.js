import React, { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import "./MediaGrid.css";

const MediaGrid = ({
  id,
  className = "",
  title = "",
  items = [],
  altPrefix = "Item",
  emptyText = "Nothing to display.",
  isActive
}) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const scrollRef = useRef(null);
  const touchStartY = useRef(0);

  const safeItems = useMemo(() => items.filter(item => item && item.src), [items]);

  const getActionUrls = item => {
    if (!item) return { repo: "", demo: "" };
    const repo = item.repo || item.repoUrl || "";
    const demo = item.demo || item.demoUrl || "";
    if (!repo && !demo && item.url) {
      return { repo: item.url, demo: "" };
    }
    return { repo, demo };
  };

  useEffect(() => {
    if (!isActive && activeIndex !== null) {
      setActiveIndex(null);
    }
  }, [isActive, activeIndex]);

  useEffect(() => {
    if (activeIndex === null) return;
    const handleKeyDown = event => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [activeIndex]);

  useEffect(() => {
    if (activeIndex !== null && !safeItems[activeIndex]) {
      setActiveIndex(null);
    }
  }, [activeIndex, safeItems]);

  const activeItem = activeIndex !== null ? safeItems[activeIndex] : null;
  const activeActions = getActionUrls(activeItem);

  const getLabel = (item, index) => {
    const candidate = item && item.title ? String(item.title).trim() : "";
    return candidate ? candidate : `${altPrefix} ${index + 1}`;
  };

  // Allow native scroll inside the grid without triggering page-scroller jumps
  const canScroll = (el, deltaY) => {
    if (!el) return false;
    const { scrollTop, scrollHeight, clientHeight } = el;
    if (scrollHeight <= clientHeight) return false;
    const movingDown = deltaY > 0;
    const movingUp = deltaY < 0;
    const atTop = scrollTop <= 0;
    const atBottom = scrollTop + clientHeight >= scrollHeight;
    return (movingDown && !atBottom) || (movingUp && !atTop);
  };

  const handleWheel = event => {
    const el = scrollRef.current;
    if (canScroll(el, event.deltaY)) {
      event.stopPropagation();
    }
  };

  const handleTouchStart = event => {
    if (event.touches && event.touches.length) {
      touchStartY.current = event.touches[0].clientY;
    }
  };

  const handleTouchMove = event => {
    if (!event.touches || event.touches.length !== 1) return;
    const deltaY = touchStartY.current - event.touches[0].clientY;
    const el = scrollRef.current;
    if (canScroll(el, deltaY)) {
      event.stopPropagation();
    }
  };

  const rootClassName = ["media-section", className].filter(Boolean).join(" ");

  return (
    <div id={id} className={rootClassName}>
      <div
        className="media-scroll-area"
        ref={scrollRef}
        onWheel={handleWheel}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        <div className="media-container">
          <h1 className="media-title">{title}</h1>
          {safeItems.length === 0 ? (
            <p className="media-empty">{emptyText}</p>
          ) : (
            <div className="media-grid">
              {safeItems.map((item, index) => {
                const label = getLabel(item, index);
                const { repo, demo } = getActionUrls(item);
                return (
                  <div key={item.id ?? index} className="media-card">
                    <button
                      type="button"
                      className="media-thumb-button"
                      onClick={() => setActiveIndex(index)}
                      aria-label={`Open ${label}`}
                    >
                      <div className="media-thumb">
                        <img src={item.src} alt={label} loading="lazy" />
                      </div>
                    </button>
                    <div className="media-meta">
                      {item.title && <h3 className="media-card-title">{item.title}</h3>}
                      <div className="media-actions">
                        <button
                          type="button"
                          className="media-button"
                          onClick={() => setActiveIndex(index)}
                        >
                          Preview
                        </button>
                        {repo && (
                          <a
                            className="media-link"
                            href={repo}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Repo
                          </a>
                        )}
                        {demo && (
                          <a
                            className="media-link"
                            href={demo}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
      {activeItem &&
        createPortal(
          <div
            className="media-lightbox-backdrop"
            onClick={() => setActiveIndex(null)}
          >
            <div
              className="media-lightbox"
              onClick={event => event.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label={`${title} preview`}
            >
              <div className="media-lightbox-header">
                <h2 className="media-lightbox-title">
                  {getLabel(activeItem, activeIndex)}
                </h2>
                <button
                  type="button"
                  className="media-close"
                  onClick={() => setActiveIndex(null)}
                  aria-label="Close preview"
                >
                  X
                </button>
              </div>
              <div className="media-lightbox-image">
                <img
                  src={activeItem.src}
                  alt={getLabel(activeItem, activeIndex)}
                />
              </div>
              <div className="media-lightbox-actions">
                <button
                  type="button"
                  className="media-button"
                  onClick={() =>
                    window.open(activeItem.src, "_blank", "noopener,noreferrer")
                  }
                >
                  Open Image
                </button>
                {activeActions.repo && (
                  <a
                    className="media-link"
                    href={activeActions.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Repo
                  </a>
                )}
                {activeActions.demo && (
                  <a
                    className="media-link"
                    href={activeActions.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo
                  </a>
                )}
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
};

export default MediaGrid;
