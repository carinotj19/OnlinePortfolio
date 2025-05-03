import React, { useState, useEffect, useMemo } from "react";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import Certificates from "./components/Certificates/Certificates";
import Layout from "./components/Layout/Layout";
import ScrollDown from "./components/Scroll/ScrollDown";
import ScrollUp from "./components/Scroll/ScrollUp";
import ScrollProgress from "./components/Scroll/ScrollProgress";
import SectionNav from "./components/Navigation/SectionNav";

const Section = ({ id, children, isActive, sectionIndex, totalSections, nextSectionName, prevSectionName, goToPage }) => {
    // Show scroll down indicator if this isn't the last section
    const showScrollDown = sectionIndex < totalSections - 1;
    
    // Show scroll up indicator if this isn't the first section
    const showScrollUp = sectionIndex > 0;
    
    // Function to handle scroll to next section
    const handleScrollDown = () => {
        if (goToPage) {
            goToPage(sectionIndex + 1);
        }
    };
    
    // Function to handle scroll to previous section
    const handleScrollUp = () => {
        if (goToPage) {
            goToPage(sectionIndex - 1);
        }
    };
    
    return (
        <div id={id} className={`section ${isActive ? 'active' : ''}`}>
            <div className="section-content">
                {showScrollUp && isActive && (
                    <ScrollUp 
                        text={prevSectionName} 
                        onClick={handleScrollUp}
                    />
                )}
                {children}
                {showScrollDown && isActive && (
                    <ScrollDown 
                        text={nextSectionName} 
                        onClick={handleScrollDown}
                    />
                )}
            </div>
        </div>
    );
};

function App() {
    const [activeSection, setActiveSection] = useState(0);
    
    // Use useMemo to prevent the sections array from causing unnecessary re-renders
    const sections = useMemo(() => [
        { id: "home", component: <Header />, name: "Home", title: "Home" },
        { id: "certificates", component: <Certificates />, name: "Certificates", title: "Certificates" },
        { id: "projects", component: <Projects />, name: "Projects", title: "Projects" }
    ], []);
    
    const goToPage = (index) => {
        setActiveSection(index);
    };
    
    // Handle page change directly from the Layout component
    const handleLayoutPageChange = (pageNumber) => {
        setActiveSection(pageNumber);
    };

    return (
        <>
            <ScrollProgress />
            <SectionNav 
                sections={sections} 
                currentSection={activeSection} 
                onSectionChange={goToPage} 
            />
            <Layout onPageChange={handleLayoutPageChange}>
                {sections.map((section, index) => (
                    <Section 
                        key={index}
                        id={section.id}
                        isActive={index === activeSection}
                        sectionIndex={index}
                        totalSections={sections.length}
                        nextSectionName={index < sections.length - 1 ? sections[index + 1].name : null}
                        prevSectionName={index > 0 ? sections[index - 1].name : null}
                        goToPage={goToPage}
                    >
                        {section.component}
                    </Section>
                ))}
            </Layout>
        </>
    );
}

export default App;
