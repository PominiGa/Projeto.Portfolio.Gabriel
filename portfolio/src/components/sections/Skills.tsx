import { GitBranch, Package, TestTube } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Reveal } from '../shared/Reveal';
import { SecHead } from '../shared/SecHead';
import { TechLogo } from '../shared/TechLogo';
import { TECH_GROUPS } from '../../data';

const TOOLS_EXTRA = [
  'Automação (Python)', 'Bots WhatsApp', 'Excel / Google Sheets',
  'REST APIs', 'JWT', 'Supabase', 'Cybersecurity (estudo)',
];

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
  return (
    <section style={{ paddingTop: 'clamp(64px,8vw,120px)' }}>
      <div className="page-hero">
        <div className="wrap">
          <Reveal><div className="page-hero__crumb"><Link to="/">Home</Link> <span>/</span> Skills</div></Reveal>
          <Reveal delay={60}><div className="eyebrow">Ferramentas do ofício</div></Reveal>
          <Reveal delay={120}><h1>Skills<span className="acc">.</span></h1></Reveal>
        </div>
      </div>

      {/* Tech groups with logos */}
      <section className="wrap">
        <Reveal>
          <p className="lead" style={{ marginTop: -32, marginBottom: 56, fontSize: 17 }}>
            Backend é onde moro, mas circulo por toda a stack. Aqui está o conjunto de
            tecnologias que fazem parte do meu dia a dia — sempre crescendo.
          </p>
        </Reveal>

        <SecHead
          eyebrow="Meu ambiente"
          title="Tudo que eu uso"
          desc="As ferramentas, linguagens e plataformas que uso no desenvolvimento."
        />

        {TECH_GROUPS.map((g, gi) => (
          <Reveal delay={gi * 60} key={g.title} style={{ marginBottom: 36 }}>
            <div>
              <div className="tech-group__title">
                <span className="tech-group__bar" />
                {g.title}
              </div>
              <div className="tech-items">
                {g.items.map(t => {
                  const isFeatured = t === 'Java';
                  return (
                    <div
                      className="tech-item card card--hover"
                      key={t}
                      style={isFeatured ? {
                        borderColor: 'var(--accent)',
                        boxShadow: '3px 3px 0 var(--accent)',
                        position: 'relative',
                      } : { position: 'relative' }}
                    >
                      {isFeatured && (
                        <span style={FEATURED_BADGE}>★ Principal</span>
                      )}
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

      {/* Extra tools cloud */}
      <section className="wrap" style={{ marginTop: 56 }}>
        <SecHead eyebrow="Também trabalho com" title="Ferramentas adicionais" />
        <Reveal>
          <div className="tools-cloud">
            {TOOLS_EXTRA.map(t => (
              <span className="tag" key={t}>{t}</span>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Values strip */}
      <section className="wrap" style={{ marginTop: 96 }}>
        <div className="values-grid">
          {[
            { ic: GitBranch, k: 'Versionamento', v: 'Git & GitHub no fluxo diário, com commits limpos e organizados.' },
            { ic: Package,   k: 'Containers',    v: 'Docker para ambientes reproduzíveis do dev à produção.' },
            { ic: TestTube,  k: 'Boas práticas', v: 'Código limpo, organizado e focado em manutenibilidade.' },
          ].map((v, i) => {
            const Ic = v.ic;
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