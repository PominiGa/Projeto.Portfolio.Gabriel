import { ArrowRight, Mail, Github, Linkedin, Phone, GitBranch, Coffee } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Reveal } from '../shared/Reveal';
import { LINKS, PROJECTS } from '../../data';
import { TechLogo } from '../shared/TechLogo';
import profile from '../../assets/profile.jpg';

const MARQUEE_ITEMS = ['JAVA', 'SPRING BOOT', 'REACT', 'TYPESCRIPT', 'POSTGRESQL', 'PYTHON', 'REST API', 'DOCKER', 'GIT'];

function Marquee() {
  const row = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div className="marq" aria-hidden="true">
      <div className="marq__track">
        {row.map((t, i) => (
          <span className="marq__item" key={i}>{t}<span className="marq__star">✳</span></span>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap">
        <div className="hero__grid">
          {/* ── Left ── */}
          <div className="hero__main">
            <Reveal delay={70}>
              <h1 className="h-display hero__title">
                GABRIEL<br />POMINI<span className="acc">.</span>
              </h1>
            </Reveal>

            <Reveal delay={140}>
              <p className="hero__role">
                <span className="hero__role-tag">{'<dev>'}</span>
                Desenvolvedor
                <span className="hero__role-tag">{'</dev>'}</span>
              </p>
            </Reveal>

            <Reveal delay={200}>
              <p className="lead hero__lead">
                Construo aplicações robustas e escaláveis com Java &amp; Spring Boot,
                com uma camada frontend afiada em React e TypeScript. Baseado em
                Lençóis Paulista — SP.
              </p>
            </Reveal>

            <Reveal delay={260}>
              <div className="hero__cta">
                <Link className="btn btn--primary" to="/projetos">
                  Ver projetos <ArrowRight size={17} />
                </Link>
                <Link className="btn" to="/contato">
                  <Mail size={17} /> Entrar em contato
                </Link>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <div className="hero__socials">
                <a href={LINKS.github}   target="_blank" rel="noopener">
                  <Github size={18} /> GitHub
                </a>
                <a href={LINKS.linkedin} target="_blank" rel="noopener">
                  <Linkedin size={18} /> LinkedIn
                </a>
                <a href={LINKS.whatsapp} target="_blank" rel="noopener">
                  <Phone size={18} /> WhatsApp
                </a>
              </div>
            </Reveal>
          </div>

          {/* ── Right: Avatar ── */}
          <div className="hero__aside">
            <Reveal delay={180} className="hero__avatar-wrap">
              <div className="hero__avatar-deco" />
              <div className="hero__avatar card">
                <img src={profile} alt="Gabriel Pomini de Souza" />
                <div className="hero__avatar-label">
                  <span className="dot-live" /> gabriel.jpg
                </div>
              </div>
              <div className="hero__floaty hero__floaty--1 card">
                <Coffee size={18} /> <span>∞ cafés</span>
              </div>
              <div className="hero__floaty hero__floaty--2 card">
                <GitBranch size={18} /> <span>main</span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
      <Marquee />

      {/* Stat strip */}
      <section className="wrap">
        <div className="stat-strip">
          {[
            { k: 'FullStack',      v: 'Backend-first'   },
            { k: 'Java + Spring',  v: 'Stack principal'  },
            { k: 'React + TS',     v: 'Frontend'         },
            { k: 'SP, Brasil',     v: 'Lençóis Paulista' },
          ].map((s, i) => (
            <Reveal delay={i * 60} key={i} className="stat-strip__item">
              <div className="stat-strip__k">{s.k}</div>
              <div className="stat-strip__v">{s.v}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Featured peek */}
      <section className="wrap" style={{ marginTop: 110 }}>
        <div className="peek-head">
          <div className="sec-head" style={{ marginBottom: 0 }}>
            <Reveal><div className="eyebrow">Trabalho selecionado</div></Reveal>
            <Reveal delay={60}><h2 className="h2">Projetos em destaque</h2></Reveal>
          </div>
          <Reveal>
            <Link className="btn btn--ghost" to="/projetos">
              Todos <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>

        <div className="peek-grid">
          {PROJECTS.slice(0, 3).map((p, i) => (
            <Reveal delay={i * 80} key={p.id}>
              <Link className="card card--hover peek-card" to="/projetos">
                <div className="peek-card__banner" style={!p.image ? { background: p.bg } : {}}>
                  {p.image
                    ? <img src={p.image} alt={p.name} />
                    : <span className="peek-card__glyph">{p.glyph}</span>
                  }
                  <span className="peek-card__idx">{p.num}</span>
                  {p.private && <span className="peek-card__priv">Privado</span>}
                </div>
                <div className="peek-card__body">
                  <h3 className="h3">{p.name}</h3>
                  <p>{p.tagline}</p>
                  <div className="stack-logos" style={{ marginTop: 14 }}>
                    {p.stack.slice(0, 4).map(t => (
                      <span className="stack-chip" key={t}>
                        <TechLogo name={t} size={18} /> {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="wrap" style={{ marginTop: 120 }}>
        <Reveal>
          <div className="cta-section">
            <div className="cta-section__deco" />
            <div className="cta-section__inner">
              <div className="eyebrow" style={{ color: 'var(--accent-ink)' }}>Vamos conversar</div>
              <h2 className="h2" style={{ maxWidth: '16ch' }}>Tem um projeto em mente?</h2>
              <p style={{ maxWidth: '44ch', color: 'var(--accent-ink)', opacity: .85 }}>
                Estou aberto a novas oportunidades e desafios. Bora construir algo bom juntos.
              </p>
              <div className="hero__cta" style={{ marginTop: 28 }}>
                <Link className="btn" to="/contato" style={{ background: 'var(--ink)', color: 'var(--bg)' }}>
                  <Mail size={17} /> Iniciar conversa
                </Link>
                <a
                  className="btn btn--ghost"
                  href={`mailto:${LINKS.email}`}
                  style={{ borderColor: 'var(--accent-ink)', color: 'var(--accent-ink)' }}
                >
                  Copiar e-mail
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </section>
  );
}