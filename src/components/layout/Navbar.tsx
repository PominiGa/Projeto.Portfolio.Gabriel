import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';
import logo from '../../assets/logo.png';
export default function Navbar() {
  const { theme, toggle: toggleTheme } = useTheme();
  const { lang, toggleLang, T } = useLanguage();
  const [open, setOpen] = useState(false);

  const NAV = [
    { n: '01', label: T.nav.home,     to: '/'         },
    { n: '02', label: T.nav.sobre,    to: '/sobre'    },
    { n: '03', label: T.nav.projetos, to: '/projetos' },
    { n: '04', label: T.nav.skills,   to: '/skills'   },
    { n: '05', label: T.nav.contato,  to: '/contato'  },
  ];

  return (
    <>
      <nav className="nav">
        <div className="nav__inner">
          <Link className="brand" to="/" onClick={() => setOpen(false)}>
            <img src={logo} alt="" className="brand__logo" />
            <span>Gabriel Pomini<span className="brand__sub"> / dev</span></span>
          </Link>

          <div className="nav__links">
            {NAV.map(l => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) => 'nav__link' + (isActive ? ' is-active' : '')}
              >
                <span className="nav__num">{l.n}</span>{l.label}
              </NavLink>
            ))}
          </div>

          <div className="nav__right">
            {/* Theme toggle */}
            <button className="tgl tgl--theme" onClick={toggleTheme} aria-label="Alternar tema">
              <span className="tgl__knob">
                {theme === 'light' ? <Sun size={13} strokeWidth={2.5} /> : <Moon size={13} strokeWidth={2.5} />}
              </span>
            </button>

            {/* Language toggle */}
            <button className="tgl tgl--lang" onClick={toggleLang} aria-label="Change language">
              <span className="tgl__knob">{lang === 'pt' ? 'BR' : 'EN'}</span>
            </button>

            <button className="nav__burger" onClick={() => setOpen(o => !o)} aria-label="Menu">
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      <div className={'mmenu' + (open ? ' is-open' : '')}>
        {NAV.map(l => (
          <NavLink
            key={l.to}
            to={l.to}
            end={l.to === '/'}
            className={({ isActive }) => isActive ? 'acc' : ''}
            onClick={() => setOpen(false)}
          >
            <span className="nav__num">{l.n}</span>{l.label}
          </NavLink>
        ))}
      </div>
    </>
  );
}