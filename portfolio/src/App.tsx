import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import CustomCursor from './components/layout/CustomCursor';
import ScrollToTop from './components/shared/ScrollToTop';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';
import './index.css';

function Portfolio() {
  return (
    <>
      <ScrollToTop />
      <CustomCursor />
      <Navbar />
      <main className="page">
        <Routes>
          <Route path="/"         element={<Hero />} />
          <Route path="/sobre"    element={<About />} />
          <Route path="/projetos" element={<Projects />} />
          <Route path="/skills"   element={<Skills />} />
          <Route path="/contato"  element={<Contact />} />
          <Route path="*"         element={<Hero />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Portfolio />
      </BrowserRouter>
    </ThemeProvider>
  );
}