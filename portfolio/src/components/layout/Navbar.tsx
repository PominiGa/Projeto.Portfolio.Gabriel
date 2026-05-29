import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const NAV = [
  { n: '01', label: 'Home',     to: '/' },
  { n: '02', label: 'Sobre',    to: '/sobre' },
  { n: '03', label: 'Projetos', to: '/projetos' },
  { n: '04', label: 'Skills',   to: '/skills' },
  { n: '05', label: 'Contato',  to: '/contato' },
];

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="nav">
        <div className="nav__inner">
          <Link className="brand" to="/" onClick={() => setOpen(false)}>
            <span className="brand__mark">GP</span>
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