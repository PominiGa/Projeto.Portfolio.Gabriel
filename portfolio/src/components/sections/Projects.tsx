import { Calendar, User, Check, Github, ExternalLink } from 'lucide-react';
import { Reveal } from '../shared/Reveal';
import { SecHead } from '../shared/SecHead';
import { TechLogo } from '../shared/TechLogo';
import { PROJECTS, LINKS, type Project } from '../../data';

function ProjectRow({ p, i }: { p: Project; i: number }) {
  return (
    <div className="proj-row">
      {/* Visual */}
      <Reveal className="proj-row__visual" delay={40}>
        <div className="proj-visual" style={!p.image ? { background: p.bg } : {}}>
          {p.image ? (
            <img src={p.image} alt={p.name} />
          ) : (
            <>
              <div className="proj-visual__grid" />
              <span className="proj-visual__glyph">{p.glyph}</span>
            </>
          )}
          <span className="proj-visual__tag">{p.type}</span>
          <span className="proj-visual__num">{p.num}</span>
          {p.private && <span className="proj-visual__priv">Privado</span>}
        </div>
      </Reveal>

      {/* Info */}
      <Reveal className="proj-info" delay={120}>
        <div className="proj-info__meta">
          <span><Calendar size={14} /> {p.year}</span>
          <span><User size={14} /> {p.role}</span>
        </div>
        <h2>{p.name}</h2>
        <p>{p.desc}</p>

        <div className="proj-metrics">
          {p.metrics.map(([v, k], j) => (
            <div key={j}>
              <div className="proj-metric__v">{v}</div>
              <div className="proj-metric__k">{k}</div>
            </div>
          ))}
        </div>

        <ul className="proj-features">
          {p.features.map((f, j) => (
            <li key={j}><Check size={16} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: 2 }} /> {f}</li>
          ))}
        </ul>

        <div className="stack-logos" style={{ marginTop: 6 }}>
          {p.stack.map(t => (
            <span className="stack-chip" key={t}>
              <TechLogo name={t} size={19} /> {t}
            </span>
          ))}
        </div>

        <div className="hero__cta" style={{ marginTop: 10 }}>
          {p.private ? (
            <span
              className="btn"
              style={{ opacity: 0.5, cursor: 'not-allowed' }}
              title="Projeto privado por motivos comerciais"
            >
              <Github size={16} /> Privado
            </span>
          ) : (
            <>
              {p.link && (
                <a className="btn btn--primary" href={p.link} target="_blank" rel="noopener">
                  <Github size={16} /> Ver código
                </a>
              )}
              <a className="btn btn--ghost" href={p.link || LINKS.github} target="_blank" rel="noopener">
                <ExternalLink size={16} /> GitHub
              </a>
            </>
          )}
        </div>
      </Reveal>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projetos" style={{ paddingTop: 'clamp(64px,8vw,120px)' }}>
      <div className="page-hero">
        <div className="wrap">
          <Reveal><div className="page-hero__crumb">Home / Projetos</div></Reveal>
          <Reveal delay={60}><div className="eyebrow">Trabalho selecionado</div></Reveal>
          <Reveal delay={120}><h1>Projetos<span className="acc">.</span></h1></Reveal>
        </div>
      </div>

      <section className="wrap">
        <Reveal>
          <p className="lead" style={{ marginTop: -32, marginBottom: 64, fontSize: 17 }}>
            Uma seleção de aplicações que representam meu jeito de construir software:
            backend robusto, frontend afiado e foco em resolver problemas reais.
          </p>
        </Reveal>
        {PROJECTS.map((p, i) => <ProjectRow p={p} i={i} key={p.id} />)}
      </section>

      <section className="wrap" style={{ marginTop: 40 }}>
        <Reveal>
          <div className="cta-section">
            <div className="cta-section__deco" />
            <div className="cta-section__inner">
              <div className="eyebrow" style={{ color: 'var(--accent-ink)' }}>Mais no GitHub</div>
              <h2 className="h2" style={{ maxWidth: '18ch' }}>Veja o resto do meu trabalho</h2>
              <p style={{ maxWidth: '46ch', color: 'var(--accent-ink)', opacity: .85 }}>
                Repositórios, experimentos e código aberto. Tem sempre algo novo em construção por lá.
              </p>
              <div className="hero__cta" style={{ marginTop: 26 }}>
                <a className="btn" href={LINKS.github} target="_blank" rel="noopener"
                  style={{ background: 'var(--ink)', color: 'var(--bg)' }}>
                  <Github size={17} /> github.com/PominiGa
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </section>
  );
}