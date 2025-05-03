import React, { useState, useCallback, useEffect, useRef } from "react";
import { SectionContainer } from "react-page-scroller";
import ForwardRefPageScroller from "./ForwardRefPageScroller";
import "./Layout.css";

const Layout = ({ children, onPageChange }) => {
    const [currentPage, setCurrentPage] = useState(0);
    const scrollerRef = useRef(null);
    
    const handlePageChange = (number) => {
        setCurrentPage(number);
        // Notify parent component (App.js) about page change
        if (onPageChange) {
            onPageChange(number);
        }
    };

    const goToPage = useCallback((pageNumber) => {
        setCurrentPage(pageNumber);
        if (scrollerRef.current) {
            scrollerRef.current.goToPage(pageNumber);
        }
        // Notify parent component (App.js) about page change
        if (onPageChange) {
            onPageChange(pageNumber);
        }
    }, [onPageChange]);

    // This will enable scroll on mount
    useEffect(() => {
        // Enable scroll and touch events for the entire page
        document.body.style.overflow = 'visible';
        document.body.style.touchAction = 'auto';
        
        return () => {
            document.body.style.overflow = '';
            document.body.style.touchAction = '';
        };
    }, []);

    return (
        <div className="layout-container">
            <ForwardRefPageScroller
                ref={scrollerRef}
                onBeforePageScroll={handlePageChange}
                customPageNumber={currentPage}
                pageOnChange={handlePageChange}
            >
                {React.Children.map(children, (child, index) => (
                    <SectionContainer key={index}>
                        {React.cloneElement(child, { 
                            isActive: currentPage === index,
                            sectionIndex: index,
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