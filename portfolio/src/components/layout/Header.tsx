// src/components/layout/Header.tsx
import React from "react";

const socials = [
  {
    name: "GitHub",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    url: "https://github.com/PominiGa"
  },
  {
    name: "LinkedIn",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
    url: "https://www.linkedin.com/in/gabriel-pomini-43aa731ba/",
  }
];

export default function Header() {
  return (
    <header className="site-header">
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          className="brand"
          style={{ display: "flex", alignItems: "center", gap: 12 }}
        >
          <svg
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden
            focusable="false"
          >
            <rect width="24" height="24" rx="6" fill="#6366f1"></rect>
            <path
              d="M6 12h12"
              stroke="#fff"
              strokeWidth="1.5"
              strokeLinecap="round"
            ></path>
          </svg>

          <span>Gabriel Pomini de Souza</span>

          {/* social icons via image links */}
          <div className="social-icons" style={{ display: "flex", gap: 8 }}>
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                title={s.name}
              >
                <img
                  src={s.img}
                  alt={s.name}
                  width={20}
                  height={20}
                  style={{ display: "block", filter: "brightness(0) invert(1)" }}
                />
              </a>
            ))}
          </div>
        </div>

        <nav className="nav" aria-label="Principal">
          <a href="#projects">Projetos</a>
          <a href="#about">Sobre</a>
          <a href="#contact">Contato</a>
        </nav>
      </div>
    </header>
  );
}
