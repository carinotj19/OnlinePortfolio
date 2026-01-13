import React, { useEffect, useRef, useState } from "react";
import { SectionContainer } from "react-page-scroller";
import ForwardRefPageScroller from "./ForwardRefPageScroller";
import "./Layout.css";

const Layout = ({ children, currentPage, onPageChange }) => {
  const scrollerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return undefined;
    const mq = window.matchMedia("(max-width: 768px)");
    const update = () => setIsMobile(mq.matches);
    update();
    if (mq.addEventListener) {
      mq.addEventListener("change", update);
    } else {
      mq.addListener(update);
    }
    return () => {
      if (mq.removeEventListener) {
        mq.removeEventListener("change", update);
      } else {
        mq.removeListener(update);
      }
    };
  }, []);

  // Whenever App.activeSection changes, move the scroller
  useEffect(() => {
    if (scrollerRef.current) {
      scrollerRef.current.goToPage(currentPage);
    }
  }, [currentPage]);

  // Expose a method for arrows or dots to jump
  const goToPage = pageNumber => {
    if (scrollerRef.current) {
      scrollerRef.current.goToPage(pageNumber);
    }
    onPageChange(pageNumber);
  };

  const blockScroll = isMobile;

  return (
    <div className="layout-container">
      <ForwardRefPageScroller
        ref={scrollerRef}
        customPageNumber={currentPage}
        onBeforePageScroll={onPageChange}
        pageOnChange={onPageChange}
        renderAllPagesOnFirstRender
        blockScrollUp={blockScroll}
        blockScrollDown={blockScroll}
      >
        {React.Children.map(children, (child, idx) => (
          <SectionContainer key={idx}>
            {React.cloneElement(child, {
              isActive: idx === currentPage,
              sectionIndex: idx,
              totalSections: React.Children.count(children),
              goToPage
            })}
          </SectionContainer>
        ))}
      </ForwardRefPageScroller>
    </div>
  );
};

export default Layout;
