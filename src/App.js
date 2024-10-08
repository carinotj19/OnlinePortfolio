import React from "react";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import Certificates from "./components/Certificates/Certificates";
import ReactPageScroller, { SectionContainer } from "react-page-scroller";

function App() {
    return (
        <>
            <ReactPageScroller>
                <SectionContainer>
                    <Header />
                </SectionContainer>
                <SectionContainer>
                    <Certificates/>
                </SectionContainer>
                <SectionContainer>
                    <Projects/>
                </SectionContainer>
            </ReactPageScroller>
        </>
    );
}

export default App;
