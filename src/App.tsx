import React from 'react';
import Header from './components/header';
import Hero from './components/hero';
import About from './components/about';
import Skills from './components/skills';
import Projects from './components/projects';
import Experience from './components/experience';
import Contact from './components/contact';
import Footer from './components/footer';
import SectionDivider from './components/section-divider';

function App() {
    return (
        <>
            <Header />
            <main className="flex flex-col items-center px-4">
                <Hero />
                <About />
                <SectionDivider />
                <Experience />
                <SectionDivider />
                <Projects />
                <SectionDivider />
                <Skills />
                <SectionDivider />
                <Contact />
            </main>
            <Footer />
        </>
    );
}

export default App;
