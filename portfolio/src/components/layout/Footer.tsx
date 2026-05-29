import React from 'react';
import { Github, Linkedin, MessageCircle, FileText, Mail } from 'lucide-react';
import curriculo from '../../assets/Gabriel Pomini de Souza.pdf';

const links = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/PominiGa' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/gabriel-pomini-43aa731ba/' },
  { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/5514998604950' },
  { icon: Mail, label: 'Email', href: 'mailto:gabriel.souza53@hotmail.com' },
  { icon: FileText, label: 'Currículo', href: curriculo as string },
];

const navLinks = [
  { label: 'SOBRE', href: '#about' },
  { label: 'PROJETOS', href: '#projects' },
  { label: 'HABILIDADES', href: '#skills' },
  { label: 'SERVIÇOS', href: '#services' },
  { label: 'CONTATO', href: '#contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black dark:bg-dark-bg border-t-2 border-black dark:border-warm-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">

        {/* Top row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10">

          {/* Brand */}
          <div>
            <div className="font-mono font-bold text-lg mb-3">
              <span className="border-2 border-warm-white/30 px-2 py-0.5 text-warm-white">
                GP
              </span>
            </div>
            <p className="font-mono text-sm text-warm-white/80 mb-1">
              GABRIEL POMINI DE SOUZA
            </p>
            <p className="text-xs text-warm-white/40">
              Desenvolvedor Full-Stack
            </p>
            <p className="text-xs text-warm-white/30 mt-1 flex items-center gap-1">
              Lençóis Paulista, SP — Brasil
            </p>
          </div>

          {/* Nav links */}
          <div>
            <p className="font-mono text-xs tracking-widest text-burnt-orange mb-4 uppercase">
              NAVEGAÇÃO
            </p>
            <div className="flex flex-col gap-2">
              {navLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="font-mono text-xs text-warm-white/50 hover:text-burnt-orange transition-colors tracking-widest"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Social links */}
          <div>
            <p className="font-mono text-xs tracking-widest text-burnt-orange mb-4 uppercase">
              CONTATO & REDES
            </p>
            <div className="flex flex-col gap-2">
              {links.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') || href.endsWith('.pdf') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="flex items-center gap-2 font-mono text-xs text-warm-white/50 hover:text-burnt-orange transition-colors group"
                >
                  <Icon size={12} className="group-hover:text-burnt-orange transition-colors" />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-warm-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-warm-white/25">
            © {year} GABRIEL POMINI. TODOS OS DIREITOS RESERVADOS.
          </p>
          <p className="font-mono text-xs text-warm-white/20">
            REACT · TYPESCRIPT · TAILWINDCSS · FRAMER MOTION
          </p>
        </div>
      </div>
    </footer>
  );
}