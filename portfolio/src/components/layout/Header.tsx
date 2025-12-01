import React from 'react'

export default function Header(){
  return (
    <header className="site-header">
      <div className="container" style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
        <div className="brand">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden focusable="false">
            <rect width="24" height="24" rx="6" fill="#6366f1"></rect>
            <path d="M6 12h12" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"></path>
          </svg>
          <span>Gabriel Pomini</span>
        </div>
        <nav className="nav" aria-label="Principal">
          <a href="#projects">Projetos</a>
          <a href="#about">Sobre</a>
          <a href="#contact">Contato</a>
        </nav>
      </div>
    </header>
  )
}
