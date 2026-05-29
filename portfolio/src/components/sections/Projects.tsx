import { Calendar, Check, Github, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Reveal } from '../shared/Reveal';
import { TechLogo } from '../shared/TechLogo';
import { PROJECTS, LINKS, type Project } from '../../data';
import { useLanguage } from '../../context/LanguageContext';

function ProjectRow({ p }: { p: Project }) {
  const { lang, T } = useLanguage();
  const tp = T.projects;
  const isEn = lang === 'en';

  const desc     = isEn ? p.desc_en     : p.desc;
  const features = isEn ? p.features_en : p.features;
  const tagline  = isEn ? p.tagline_en  : p.tagline;
  const role     = isEn ? p.role_en     : p.role;
  const type     = isEn ? p.type_en     : p.type;

  return (
    <div className="proj-row">
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
          <span className="proj-visual__tag">{type}</span>
          <span className="proj-visual__num">{p.num}</span>
          {p.private && <span className="proj-visual__priv">{tp.private}</span>}
        </div>
      </Reveal>

      <Reveal className="proj-info" delay={120}>
        <div className="proj-info__meta">
          <span><Calendar size={14} /> {p.year}</span>
          <span>{role}</span>
        </div>
        <h2>{p.name}</h2>
        <p>{desc}</p>

        <div className="proj-metrics">
          {p.metrics.map(([v, k], j) => (
            <div key={j}>
              <div className="proj-metric__v">{v}</div>
              <div className="proj-metric__k">{k}</div>
            </div>
          ))}
        </div>

        <ul className="proj-features">
          {features.map((f, j) => (
            <li key={j}><Check size={16} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: 2 }} /> {f}</li>
          ))}
        </ul>

        <div className="stack-logos" style={{ marginTop: 6 }}>
          {p.stack.map(t => (
            <span className="stack-chip" key={t}><TechLogo name={t} size={19} /> {t}</span>
          ))}
        </div>

        <div className="hero__cta" style={{ marginTop: 10 }}>
          {p.private ? (
            <span className="btn" style={{ opacity: 0.5, cursor: 'not-allowed' }}
              title={tp.private_title}>
              <Github size={16} /> {tp.private}
            </span>
          ) : p.link ? (
            <>
              <a className="btn btn--primary" href={p.link} target="_blank" rel="noopener">
                <Github size={16} /> {tp.view_code}
              </a>
              <a className="btn btn--ghost" href={p.link} target="_blank" rel="noopener">
                <ExternalLink size={16} /> {tp.github_label}
              </a>
            </>
          ) : (
            <a className="btn btn--ghost" href={LINKS.github} target="_blank" rel="noopener">
              <Github size={16} /> {tp.github_label}
            </a>
          )}
        </div>
      </Reveal>
    </div>
  );
}

export default function Projects() {
  const { T } = useLanguage();
  const tp = T.projects;

  return (
    <section>
      <div className="page-hero">
        <div className="wrap">
          <Reveal><div className="page-hero__crumb"><Link to="/">{T.nav.home}</Link> <span>/</span> {tp.crumb}</div></Reveal>
          <Reveal delay={60}><div className="eyebrow">{tp.eyebrow}</div></Reveal>
          <Reveal delay={120}><h1>{tp.title}<span className="acc">.</span></h1></Reveal>
        </div>
      </div>

      <section className="wrap">
        {PROJECTS.map(p => <ProjectRow p={p} key={p.id} />)}
      </section>

      <section className="wrap" style={{ marginTop: 40 }}>
        <Reveal>
          <div className="cta-section">
            <div className="cta-section__deco" />
            <div className="cta-section__inner">
              <div className="eyebrow" style={{ color: 'var(--accent-ink)' }}>{tp.github_eyebrow}</div>
              <h2 className="h2" style={{ maxWidth: '18ch' }}>{tp.github_title}</h2>
              <p style={{ maxWidth: '46ch', color: 'var(--accent-ink)', opacity: .85 }}>{tp.github_desc}</p>
              <div className="hero__cta" style={{ marginTop: 26 }}>
                <a className="btn" href={LINKS.github} target="_blank" rel="noopener"
                  style={{ background: 'var(--ink)', color: 'var(--bg)' }}>
                  <Github size={17} /> {tp.github_btn}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </section>
  );
}