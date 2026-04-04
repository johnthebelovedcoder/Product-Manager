import React from 'react';
import { Navbar } from '../components/Navbar';
import Hero from '../sections/Hero';
import About from '../sections/About';
import SelectedWork from '../sections/SelectedWork';
import Skills from '../sections/Skills';
import Experience from '../sections/Experience';
import Contact from '../sections/Contact';
import Footer from '../sections/Footer';

const HomePage = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-[#0A0A0A] text-black dark:text-white scroll-smooth">
            <Navbar />
            <Hero />
            <About />
            <SelectedWork />
            <Skills />
            <Experience />
            <Contact />
            <Footer />
        </div>
    );
};

export default HomePage;
