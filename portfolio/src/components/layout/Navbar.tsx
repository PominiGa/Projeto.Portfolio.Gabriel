import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const navLinks = [
  { label: 'SOBRE', href: '#about' },
  { label: 'PROJETOS', href: '#projects' },
  { label: 'HABILIDADES', href: '#skills' },
  { label: 'SERVIÇOS', href: '#services' },
  { label: 'CONTATO', href: '#contact' },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 bg-cream dark:bg-dark-bg border-b-2 ${
        scrolled
          ? 'border-black dark:border-warm-white'
          : 'border-black/20 dark:border-warm-white/20'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-mono font-bold text-base tracking-wider group"
          aria-label="Topo"
        >
          <span className="border-2 border-black dark:border-warm-white px-2 py-0.5 text-black dark:text-warm-white group-hover:bg-burnt-orange group-hover:border-burnt-orange group-hover:text-white transition-all">
            GP
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Principal">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-xs tracking-widest text-black/50 dark:text-warm-white/50 hover:text-burnt-orange dark:hover:text-burnt-orange transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Alternar tema"
            className="w-8 h-8 border-2 border-black dark:border-warm-white flex items-center justify-center text-black dark:text-warm-white hover:bg-burnt-orange hover:border-burnt-orange hover:text-white dark:hover:bg-burnt-orange dark:hover:border-burnt-orange dark:hover:text-white transition-all"
          >
            {theme === 'dark' ? <Sun size={13} /> : <Moon size={13} />}
          </button>

          <button
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Menu"
            className="md:hidden w-8 h-8 border-2 border-black dark:border-warm-white flex items-center justify-center text-black dark:text-warm-white"
          >
            {menuOpen ? <X size={13} /> : <Menu size={13} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden bg-cream dark:bg-dark-bg border-t-2 border-black dark:border-warm-white"
          >
            <div className="flex flex-col px-4 py-4 gap-4">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-mono text-sm tracking-widest text-black dark:text-warm-white hover:text-burnt-orange dark:hover:text-burnt-orange transition-colors py-1"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}