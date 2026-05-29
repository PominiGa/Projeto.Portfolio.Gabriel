/* =========================================================================
   projetos.jsx — página Projetos
   ========================================================================= */

function ProjectRow({ p, i }) {
  return (
    <div className="proj-row">
      <Reveal className="proj-row__visual" delay={40}>
        <div className="proj-visual" style={{ background: p.bg }}>
          <div className="proj-visual__grid" />
          <span className="proj-visual__tag">{p.type}</span>
          <span className="proj-visual__glyph">{p.glyph}</span>
          <span className="proj-visual__num">{p.num}</span>
        </div>
      </Reveal>

      <Reveal className="proj-info" delay={120}>
        <div className="proj-info__meta">
          <span><Icon name="calendar" size={14} /> {p.year}</span>
          <span><Icon name="user" size={14} /> {p.role}</span>
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
            <li key={j}><Icon name="check" size={16} /> {f}</li>
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
          <a className="btn btn--primary" href={LINKS.github} target="_blank" rel="noopener" data-cursor="hot">
            <Icon name="github" size={16} /> Ver código
          </a>
          <a className="btn btn--ghost" href="#" data-cursor="hot">
            <Icon name="external-link" size={16} /> Demo
          </a>
        </div>
      </Reveal>
    </div>
  );
}

function ProjectsApp() {
  return (
    <Page active="projetos.html">
      <PageHero
        crumb="Projetos"
        eyebrow="Trabalho selecionado"
        title={<React.Fragment>Projetos<span className="acc">.</span></React.Fragment>}
      />
      <section className="wrap">
        <Reveal>
          <p className="lead" style={{ marginTop: -32, marginBottom: 64, fontSize: 17 }}>
            Uma seleção de aplicações que representam meu jeito de construir software:
            backend robusto, frontend afiado e foco em resolver problemas reais. Cada um
            é um estudo em arquitetura, performance e experiência.
          </p>
        </Reveal>
        {window.PROJECTS.map((p, i) => <ProjectRow p={p} i={i} key={p.id} />)}
      </section>

      <section className="wrap" style={{ marginTop: 40 }}>
        <Reveal>
          <div className="cta card">
            <div className="cta__deco" />
            <div className="cta__inner">
              <div className="eyebrow" style={{ color: "var(--accent-ink)" }}>Mais no GitHub</div>
              <h2 className="h2" style={{ maxWidth: "18ch" }}>Veja o resto do meu trabalho</h2>
              <p style={{ maxWidth: "46ch", color: "var(--accent-ink)", opacity: .85 }}>
                Repositórios, experimentos e código aberto. Tem sempre algo novo em construção por lá.
              </p>
              <div className="hero__cta" style={{ marginTop: 26 }}>
                <a className="btn" href={LINKS.github} target="_blank" rel="noopener" data-cursor="hot" style={{ background: "var(--ink)", color: "var(--bg)" }}>
                  <Icon name="github" size={17} /> github.com/PominiGa
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </Page>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<ProjectsApp />);
