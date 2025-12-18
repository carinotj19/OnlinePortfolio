import React, { useEffect, useRef } from "react";
import { SectionContainer } from "react-page-scroller";
import ForwardRefPageScroller from "./ForwardRefPageScroller";
import "./Layout.css";

const Layout = ({ children, currentPage, onPageChange }) => {
  const scrollerRef = useRef(null);

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

  return (
    <div className="layout-container">
      <ForwardRefPageScroller
        ref={scrollerRef}
        customPageNumber={currentPage}
        onBeforePageScroll={onPageChange}
        pageOnChange={onPageChange}
        renderAllPagesOnFirstRender
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
