/* =========================================================================
   skills.jsx — página Skills
   ========================================================================= */

function SkillRow({ name, lvl }) {
  const labels = { 5: "Avançado", 4: "Proficiente", 3: "Intermediário", 2: "Básico", 1: "Iniciante" };
  return (
    <div className="skill-row">
      <div className="skill-row__top">
        <span className="skill-row__name">{name}</span>
        <span className="skill-row__lvl">{labels[lvl]}</span>
      </div>
      <div className="skill-bar">
        {[1, 2, 3, 4, 5].map(n => (
          <span className={"skill-bar__seg" + (n <= lvl ? " on" : "")} key={n} />
        ))}
      </div>
    </div>
  );
}

function SkillCat({ cat, i }) {
  return (
    <Reveal delay={i * 80}>
      <div className="skill-cat card">
        <div className="skill-cat__head">
          <span className="skill-cat__ic"><Icon name={cat.icon} size={22} /></span>
          <div>
            <h3>{cat.cat}</h3>
            <div className="mono-label">{cat.items.length} tecnologias</div>
          </div>
        </div>
        {cat.items.map(it => <SkillRow key={it.name} name={it.name} lvl={it.lvl} />)}
      </div>
    </Reveal>
  );
}

function SkillsApp() {
  return (
    <Page active="skills.html">
      <PageHero
        crumb="Skills"
        eyebrow="Ferramentas do ofício"
        title={<React.Fragment>Skills<span className="acc">.</span></React.Fragment>}
      />
      <section className="wrap">
        <Reveal>
          <p className="lead" style={{ marginTop: -32, marginBottom: 56, fontSize: 17 }}>
            Backend é onde moro, mas circulo por toda a stack. Aqui está o conjunto de
            tecnologias que uso para tirar ideias do papel — sempre crescendo.
          </p>
        </Reveal>
        <div className="skills-grid">
          {window.SKILLS.map((c, i) => <SkillCat cat={c} i={i} key={c.cat} />)}
        </div>
      </section>

      <section className="wrap" style={{ marginTop: 96 }}>
        <SecHead eyebrow="Meu ambiente" title="Tudo que eu uso" desc="As ferramentas, linguagens e plataformas que fazem parte do meu dia a dia." />
        {window.TECH_GROUPS.map((g, gi) => (
          <Reveal delay={gi * 60} key={g.title} style={{ marginBottom: 32 }}>
            <div className="tech-group">
              <div className="tech-group__title"><span className="tech-group__bar" />{g.title}</div>
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

      <section className="wrap" style={{ marginTop: 96 }}>
        <div className="values-grid">
          {[
            { ic: "git-branch", k: "Versionamento", v: "Git & GitHub no fluxo diário, com commits limpos e organizados." },
            { ic: "package", k: "Containers", v: "Docker para ambientes reproduzíveis do dev à produção." },
            { ic: "test-tube", k: "Testes", v: "JUnit e boas práticas para código confiável e manutenível." },
          ].map((v, i) => (
            <Reveal delay={i * 90} key={i}>
              <div className="value-card card card--hover">
                <span className="value-card__ic"><Icon name={v.ic} size={22} /></span>
                <h3 className="h3">{v.k}</h3>
                <p>{v.v}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </Page>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<SkillsApp />);
