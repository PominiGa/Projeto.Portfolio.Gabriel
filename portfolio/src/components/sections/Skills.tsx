import { Server, Monitor, Database, Wrench, GitBranch, Package, TestTube } from 'lucide-react';
import { Reveal } from '../shared/Reveal';
import { SecHead } from '../shared/SecHead';
import { TechLogo } from '../shared/TechLogo';
import { SKILLS, TECH_GROUPS } from '../../data';

const ICON_MAP: Record<string, React.ElementType> = {
  server: Server, monitor: Monitor, database: Database, wrench: Wrench,
};

const LVL_LABEL: Record<number, string> = {
  5: 'Avançado', 4: 'Proficiente', 3: 'Intermediário', 2: 'Básico', 1: 'Iniciante',
};

const TOOLS_EXTRA = [
  'Automação (Python)', 'Bots WhatsApp', 'Excel / Google Sheets',
  'REST APIs', 'JWT', 'Supabase', 'Cybersecurity (estudo)',
];

export default function Skills() {
  return (
    <section id="skills" style={{ paddingTop: 'clamp(64px,8vw,120px)' }}>
      <div className="page-hero">
        <div className="wrap">
          <Reveal><div className="page-hero__crumb">Home / Skills</div></Reveal>
          <Reveal delay={60}><div className="eyebrow">Ferramentas do ofício</div></Reveal>
          <Reveal delay={120}><h1>Skills<span className="acc">.</span></h1></Reveal>
        </div>
      </div>

      {/* Skill bars */}
      <section className="wrap">
        <Reveal>
          <p className="lead" style={{ marginTop: -32, marginBottom: 56, fontSize: 17 }}>
            Backend é onde moro, mas circulo por toda a stack. Aqui está o conjunto de
            tecnologias que uso para tirar ideias do papel — sempre crescendo.
          </p>
        </Reveal>
        <div className="skills-grid">
          {SKILLS.map((cat, ci) => {
            const Ic = ICON_MAP[cat.icon] || Server;
            return (
              <Reveal delay={ci * 80} key={cat.cat}>
                <div className="skill-cat card">
                  <div className="skill-cat__head">
                    <span className="skill-cat__ic"><Ic size={22} /></span>
                    <div>
                      <h3>{cat.cat}</h3>
                      <div className="mono-label">{cat.items.length} tecnologias</div>
                    </div>
                  </div>
                  {cat.items.map(it => (
                    <div className="skill-row" key={it.name}>
                      <div className="skill-row__top">
                        <span className="skill-row__name">{it.name}</span>
                        <span className="skill-row__lvl">{LVL_LABEL[it.lvl]}</span>
                      </div>
                      <div className="skill-bar">
                        {[1,2,3,4,5].map(n => (
                          <span key={n} className={'skill-bar__seg' + (n <= it.lvl ? ' on' : '')} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Tech groups with logos */}
      <section className="wrap" style={{ marginTop: 96 }}>
        <SecHead
          eyebrow="Meu ambiente"
          title="Tudo que eu uso"
          desc="As ferramentas, linguagens e plataformas que fazem parte do meu dia a dia."
        />
        {TECH_GROUPS.map((g, gi) => (
          <Reveal delay={gi * 60} key={g.title} style={{ marginBottom: 36 }}>
            <div>
              <div className="tech-group__title">
                <span className="tech-group__bar" />
                {g.title}
              </div>
              <div className="tech-items">
                {g.items.map(t => (
                  <div className="tech-item card card--hover" key={t}>
                    <TechLogo name={t} size={44} />
                    <span className="tech-item__label">{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </section>

      {/* Extra tools cloud */}
      <section className="wrap" style={{ marginTop: 72 }}>
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
            { ic: GitBranch, k: 'Versionamento',  v: 'Git & GitHub no fluxo diário, com commits limpos e organizados.' },
            { ic: Package,   k: 'Containers',      v: 'Docker para ambientes reproduzíveis do dev à produção.' },
            { ic: TestTube,  k: 'Boas práticas',   v: 'Código limpo, organizado e focado em manutenibilidade.' },
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