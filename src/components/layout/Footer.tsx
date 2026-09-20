import { Link } from 'react-router-dom';
import { Github, Linkedin, Phone, FileText } from 'lucide-react';
import { LINKS } from '../../data';
import { useLanguage } from '../../context/LanguageContext';

export default function Footer() {
  const { T } = useLanguage();
  const tf = T.footer;

  const NAV = [
    { label: T.nav.home,     to: '/'         },
    { label: T.nav.sobre,    to: '/sobre'    },
    { label: T.nav.projetos, to: '/projetos' },
    { label: T.nav.skills,   to: '/skills'   },
    { label: T.nav.contato,  to: '/contato'  },
  ];

  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__grid">
          <div className="footer__brand">
            <h3>Gabriel Pomini<span className="acc">.</span></h3>
            <p className="lead" style={{ fontSize: 14 }}>{tf.desc}</p>
          </div>

          <div className="footer__col">
            <h4>{tf.nav_title}</h4>
            {NAV.map(l => <Link key={l.to} to={l.to}>{l.label}</Link>)}
          </div>

          <div className="footer__col">
            <h4>{tf.social_title}</h4>
            <a href={LINKS.github}   target="_blank" rel="noopener">GitHub</a>
            <a href={LINKS.linkedin} target="_blank" rel="noopener">LinkedIn</a>
            <a href={LINKS.whatsapp} target="_blank" rel="noopener">WhatsApp</a>
          </div>

          <div className="footer__col">
            <h4>{tf.contact_title}</h4>
            <a href={`mailto:${LINKS.email}`}>{LINKS.email}</a>
            <a href={LINKS.whatsapp} target="_blank" rel="noopener">{tf.phone}</a>
            <a href={LINKS.curriculo} target="_blank" rel="noopener"
              style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <FileText size={14} /> {tf.curriculo}
            </a>
            <div className="soc" style={{ marginTop: 16 }}>
              <a href={LINKS.github}   target="_blank" rel="noopener" aria-label="GitHub"><Github size={18} /></a>
              <a href={LINKS.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn"><Linkedin size={18} /></a>
              <a href={LINKS.whatsapp} target="_blank" rel="noopener" aria-label="WhatsApp"><Phone size={18} /></a>
            </div>
          </div>
        </div>

        <div className="footer__bar">
          <span>© {new Date().getFullYear()} Gabriel Pomini de Souza. {tf.copyright}</span>
          <span>{tf.built}</span>
        </div>
      </div>
    </footer>
  );
}