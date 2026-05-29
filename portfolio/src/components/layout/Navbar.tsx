import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const NAV = [
  { n: '01', label: 'Home',     href: '#home' },
  { n: '02', label: 'Sobre',    href: '#sobre' },
  { n: '03', label: 'Projetos', href: '#projetos' },
  { n: '04', label: 'Skills',   href: '#skills' },
  { n: '05', label: 'Contato',  href: '#contato' },
];

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#home');

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  useEffect(() => {
    const ids = NAV.map(l => l.href.slice(1));
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) setActive('#' + e.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    ids.forEach(id => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <nav className="nav">
        <div className="nav__inner">
          <a className="brand" href="#home" onClick={() => setOpen(false)}>
            <span className="brand__mark">GP</span>
            <span>Gabriel Pomini<span className="brand__sub"> / dev</span></span>
          </a>

          <div className="nav__links">
            {NAV.map(l => (
              <a
                key={l.href}
                href={l.href}
                className={'nav__link' + (active === l.href ? ' is-active' : '')}
              >
                <span className="nav__num">{l.n}</span>{l.label}
              </a>
            ))}
          </div>

          <div className="nav__right">
            <button className="tgl" onClick={toggle} aria-label="Alternar tema">
              <span className="tgl__knob">
                {theme === 'light'
                  ? <Sun size={13} strokeWidth={2.5} />
                  : <Moon size={13} strokeWidth={2.5} />}
              </span>
            </button>
            <button className="nav__burger" onClick={() => setOpen(o => !o)} aria-label="Menu">
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      <div className={'mmenu' + (open ? ' is-open' : '')}>
        {NAV.map(l => (
          <a
            key={l.href}
            href={l.href}
            className={active === l.href ? 'acc' : ''}
            onClick={() => setOpen(false)}
          >
            <span className="nav__num">{l.n}</span>{l.label}
          </a>
        ))}
      </div>
    </>
  );
}