import React, { useEffect, useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import IntroScreen from './components/layout/IntroScreen';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Services from './components/sections/Services';
import Contact from './components/sections/Contact';
import './index.css';

function PortfolioApp() {
  const [showIntro, setShowIntro] = useState<boolean>(true);

  useEffect(() => {
    const seen = sessionStorage.getItem('introSeen');
    if (seen === '1') setShowIntro(false);
  }, []);

  const handleFinishIntro = () => {
    sessionStorage.setItem('introSeen', '1');
    setShowIntro(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (showIntro) {
    return <IntroScreen onEnter={handleFinishIntro} />;
  }

  return (
    <div className="grain-bg bg-cream dark:bg-dark-bg text-black dark:text-warm-white transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioApp />
    </ThemeProvider>
  );
}