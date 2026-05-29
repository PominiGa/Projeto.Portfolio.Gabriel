import { Github, Linkedin, Phone, FileText } from 'lucide-react';
import { LINKS } from '../../data';

const NAV = [
  { label: 'Home',     href: '#home' },
  { label: 'Sobre',    href: '#sobre' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Skills',   href: '#skills' },
  { label: 'Contato',  href: '#contato' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__grid">
          <div className="footer__brand">
            <h3>Gabriel Pomini<span className="acc">.</span></h3>
            <p className="lead" style={{ fontSize: 14 }}>
              Desenvolvedor FullStack focado em backend com Java &amp; Spring Boot.
              Construindo software em Lençóis Paulista — SP.
            </p>
            <div className="badge" style={{ marginTop: 18 }}>
              <span className="dot-live" /> Disponível para oportunidades
            </div>
          </div>

          <div className="footer__col">
            <h4>Navegação</h4>
            {NAV.map(l => <a key={l.href} href={l.href}>{l.label}</a>)}
          </div>

          <div className="footer__col">
            <h4>Redes</h4>
            <a href={LINKS.github}   target="_blank" rel="noopener">GitHub</a>
            <a href={LINKS.linkedin} target="_blank" rel="noopener">LinkedIn</a>
            <a href={LINKS.whatsapp} target="_blank" rel="noopener">WhatsApp</a>
          </div>

          <div className="footer__col">
            <h4>Contato direto</h4>
            <a href={`mailto:${LINKS.email}`}>{LINKS.email}</a>
            <a href={LINKS.whatsapp} target="_blank" rel="noopener">+55 (14) 99860-4950</a>
            <a href={LINKS.curriculo} target="_blank" rel="noopener" style={{ display:'flex', alignItems:'center', gap:6 }}>
              <FileText size={14} /> Currículo PDF
            </a>
            <div className="soc" style={{ marginTop: 16 }}>
              <a href={LINKS.github}   target="_blank" rel="noopener" aria-label="GitHub">
                <Github size={18} />
              </a>
              <a href={LINKS.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href={LINKS.whatsapp} target="_blank" rel="noopener" aria-label="WhatsApp">
                <Phone size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer__bar">
          <span>© {new Date().getFullYear()} Gabriel Pomini de Souza. Feito com café e código.</span>
          <span>REACT · TYPESCRIPT · FRAMER MOTION</span>
        </div>
      </div>
    </footer>
  );
}