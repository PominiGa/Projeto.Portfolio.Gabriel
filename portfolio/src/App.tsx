import React, { useEffect, useState } from "react";
import IntroScreen from "./components/layout/IntroScreen";


import Header from './components/layout/Header';
import Hero from './components/hero/Hero';
import ProjectsGrid from './components/projects/ProjectsCarousel';
import About from './components/about/AboutSection';
import Contact from './components/contact/Contact';
import Footer from './components/layout/Footer';

export default function App() {
  // controla se mostra a intro (true) ou o site (false)
  const [showIntro, setShowIntro] = useState<boolean>(true);

  // Se quiser que o usuário só veja a intro uma vez por sessão:
  useEffect(() => {
    const seen = sessionStorage.getItem("introSeen");
    if (seen === "1") setShowIntro(false);
  }, []);

  const handleFinishIntro = () => {
    sessionStorage.setItem("introSeen", "1");
    setShowIntro(false);
    // opcional: rolar para top
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (showIntro) {
    return <IntroScreen onEnter={handleFinishIntro} />;
  }

  return (
    <div className="app-root" aria-hidden={showIntro}>
      <Header />
      <main>
        <Hero />
        <ProjectsGrid />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}