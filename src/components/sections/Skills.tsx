import { GitBranch, Package, TestTube } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Reveal } from '../shared/Reveal';
import { SecHead } from '../shared/SecHead';
import { TechLogo } from '../shared/TechLogo';
import { TECH_GROUPS } from '../../data';
import { useLanguage } from '../../context/LanguageContext';

const VAL_ICONS = [GitBranch, Package, TestTube];

const FEATURED_BADGE = {
  position: 'absolute' as const,
  top: -11,
  left: '50%',
  transform: 'translateX(-50%)',
  background: 'var(--accent)',
  color: 'var(--accent-ink)',
  fontSize: 10,
  fontWeight: 700,
  padding: '2px 10px',
  borderRadius: 999,
  border: '1.5px solid var(--line)',
  letterSpacing: '.06em',
  whiteSpace: 'nowrap' as const,
};

export default function Skills() {
  const { T } = useLanguage();
  const s = T.skills;

  return (
    <section>
      <div className="page-hero">
        <div className="wrap">
          <Reveal><div className="page-hero__crumb"><Link to="/">{T.nav.home}</Link> <span>/</span> {s.crumb}</div></Reveal>
          <Reveal delay={60}><div className="eyebrow">{s.eyebrow}</div></Reveal>
          <Reveal delay={120}><h1>{s.title}<span className="acc">.</span></h1></Reveal>
        </div>
      </div>

      <section className="wrap">
        <SecHead eyebrow={s.env_eyebrow} title={s.env_title} desc={s.env_desc} />

        {TECH_GROUPS.map((g, gi) => (
          <Reveal delay={gi * 60} key={g.title} style={{ marginBottom: 36 }}>
            <div>
              <div className="tech-group__title">
                <span className="tech-group__bar" />{g.title}
              </div>
              <div className="tech-items">
                {g.items.map(t => {
                  const isFeatured = t === 'Java';
                  return (
                    <div className="tech-item card card--hover" key={t}
                      style={isFeatured
                        ? { borderColor: 'var(--accent)', boxShadow: '3px 3px 0 var(--accent)', position: 'relative' }
                        : { position: 'relative' }}>
                      {isFeatured && <span style={FEATURED_BADGE}>★★★</span>}
                      <TechLogo name={t} size={44} />
                      <span className="tech-item__label">{t}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        ))}
      </section>

      <section className="wrap" style={{ marginTop: 56 }}>
        <SecHead eyebrow={s.extra_eyebrow} title={s.extra_title} />
        <Reveal>
          <div className="tools-cloud">
            {s.tools_extra.map(t => <span className="tag" key={t}>{t}</span>)}
          </div>
        </Reveal>
      </section>

      <section className="wrap" style={{ marginTop: 96 }}>
        <div className="values-grid">
          {s.values.map((v, i) => {
            const Ic = VAL_ICONS[i];
            return (
              <Reveal delay={i * 90} key={i}>
                <div className="value-card card card--hover">
                  <span className="value-card__ic"><Ic size={22} /></span>
                  <h3 className="h3">{v.k}</h3>
                  <p>{v.v}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>
    </section>
  );
}