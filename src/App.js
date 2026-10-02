import React, { useState, useMemo } from "react";
import Header from "./components/Header/Header";
import Experience from "./components/Profile/Experience";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Profile/Skills";
import Certificates from "./components/Certificates/Certificates";
import Layout from "./components/Layout/Layout";
import ThemeProvider from "./components/Theme/ThemeProvider";
import ThemeToggle from "./components/Theme/ThemeToggle";
import ScrollDown from "./components/Scroll/ScrollDown";
import ScrollUp from "./components/Scroll/ScrollUp";
import DotNav from "./components/Navigation/DotNav";

const Section = ({ id, children, isActive, sectionIndex, totalSections, nextSectionName, prevSectionName, goToPage }) => {
    const showScrollDown = sectionIndex < totalSections - 1;
    const showScrollUp = sectionIndex > 0;

    const handleScrollDown = () => {
        if (goToPage) goToPage(sectionIndex + 1);
    };

    const handleScrollUp = () => {
        if (goToPage) goToPage(sectionIndex - 1);
    };

    return (
        <div id={id} className={`section ${isActive ? "active" : ""}`}>
            <div className="section-content">
                {showScrollUp && isActive && (
                    <ScrollUp text={prevSectionName} onClick={handleScrollUp} />
                )}
                {React.isValidElement(children)
                    ? React.cloneElement(children, { isActive })
                    : children}
                {showScrollDown && isActive && (
                    <ScrollDown text={nextSectionName} onClick={handleScrollDown} />
                )}
            </div>
        </div>
    );
};

function App() {
    const [activeSection, setActiveSection] = useState(0);

    const sections = useMemo(() => [
        { id: "home", component: <Header />, name: "Home" },
        { id: "experience", component: <Experience />, name: "Experience" },
        { id: "projects", component: <Projects />, name: "Projects" },
        { id: "skills", component: <Skills />, name: "Skills" },
        { id: "certificates", component: <Certificates />, name: "Certificates" }
    ], []);

    const goToPage = (index) => {
        setActiveSection(index);
    };

    return (
        <ThemeProvider>
            <ThemeToggle />
            <DotNav
                sections={sections}
                currentSection={activeSection}
                onSectionChange={setActiveSection}
                position="right"
            />
            <Layout currentPage={activeSection} onPageChange={setActiveSection}>
                {sections.map((section, index) => (
                    <Section
                        key={section.id}
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
        </ThemeProvider>
    );
}

export default App;
