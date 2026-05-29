/* =========================================================================
   home.jsx — página inicial (hero)
   ========================================================================= */

function Marquee() {
  const items = ["JAVA", "SPRING BOOT", "REACT", "TYPESCRIPT", "POSTGRESQL", "DOCKER", "REST API", "MICROSERVICES", "GIT"];
  const row = [...items, ...items];
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

function Hero() {
  return (
    <section className="hero">
      <div className="wrap">
        <div className="hero__grid">
          {/* left */}
          <div className="hero__main">
            <Reveal><div className="badge"><span className="dot-live" /> Disponível para novos projetos</div></Reveal>
            <Reveal delay={70}>
              <h1 className="h-display hero__title">
                GABRIEL<br />POMINI<span className="acc">.</span>
              </h1>
            </Reveal>
            <Reveal delay={140}>
              <p className="hero__role">
                <span className="hero__role-tag">{"<dev>"}</span>
                Desenvolvedor <strong>FullStack</strong> — focado em <strong className="acc">Backend</strong>
                <span className="hero__role-tag">{"</dev>"}</span>
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
                <a className="btn btn--primary" href="projetos.html" data-cursor="hot">
                  Ver projetos <Icon name="arrow-right" size={17} />
                </a>
                <a className="btn" href="contato.html" data-cursor="hot">
                  <Icon name="mail" size={17} /> Entrar em contato
                </a>
              </div>
            </Reveal>
            <Reveal delay={320}>
              <div className="hero__socials">
                <a href={LINKS.github} target="_blank" rel="noopener" data-cursor="hot"><Icon name="github" size={18} /> GitHub</a>
                <a href={LINKS.linkedin} target="_blank" rel="noopener" data-cursor="hot"><Icon name="linkedin" size={18} /> LinkedIn</a>
                <a href={LINKS.whatsapp} target="_blank" rel="noopener" data-cursor="hot"><Icon name="phone" size={18} /> WhatsApp</a>
              </div>
            </Reveal>
          </div>

          {/* right — avatar + stat cards */}
          <div className="hero__aside">
            <Reveal delay={180} className="hero__avatar-wrap">
              <div className="hero__avatar-deco" />
              <div className="hero__avatar card">
                <image-slot id="gp-avatar" shape="rect" placeholder="Arraste sua foto aqui"></image-slot>
                <div className="hero__avatar-label"><span className="dot-live" /> gabriel.jpg</div>
              </div>
              <div className="hero__floaty hero__floaty--1 card">
                <Icon name="coffee" size={18} /> <span>∞ cafés</span>
              </div>
              <div className="hero__floaty hero__floaty--2 card">
                <Icon name="git-branch" size={18} /> <span>main</span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
      <Marquee />
    </section>
  );
}

function StatStrip() {
  const stats = [
    { k: "FullStack", v: "Backend-first" },
    { k: "Java + Spring", v: "Stack principal" },
    { k: "React + TS", v: "Frontend" },
    { k: "SP, Brasil", v: "Lençóis Paulista" },
  ];
  return (
    <section className="wrap">
      <div className="stat-strip">
        {stats.map((s, i) => (
          <Reveal delay={i * 60} key={i} className="stat-strip__item">
            <div className="stat-strip__k">{s.k}</div>
            <div className="stat-strip__v">{s.v}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function FeaturedPeek() {
  const projs = window.PROJECTS.slice(0, 3);
  return (
    <section className="wrap" style={{ marginTop: 110 }}>
      <div className="peek-head">
        <SecHead num="//" eyebrow="Trabalho selecionado" title="Projetos em destaque" />
        <Reveal><a className="btn btn--ghost" href="projetos.html" data-cursor="hot">Todos <Icon name="arrow-up-right" size={16} /></a></Reveal>
      </div>
      <div className="peek-grid">
        {projs.map((p, i) => (
          <Reveal delay={i * 80} key={p.id}>
            <a className="card card--hover peek-card" href="projetos.html" data-cursor="hot">
              <div className="peek-card__banner" style={{ background: p.bg }}>
                <span className="peek-card__glyph">{p.glyph}</span>
                <span className="peek-card__idx">{p.num}</span>
              </div>
              <div className="peek-card__body">
                <h3 className="h3">{p.name}</h3>
                <p>{p.tagline}</p>
                <div className="stack-logos" style={{ marginTop: 14 }}>
                  {p.stack.slice(0, 4).map(t => (
                    <span className="stack-chip" key={t}><TechLogo name={t} size={18} /> {t}</span>
                  ))}
                </div>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="wrap" style={{ marginTop: 120 }}>
      <Reveal>
        <div className="cta card">
          <div className="cta__deco" />
          <div className="cta__inner">
            <div className="eyebrow" style={{ color: "var(--accent-ink)" }}>Vamos conversar</div>
            <h2 className="h2" style={{ maxWidth: "16ch" }}>Tem um projeto em mente?</h2>
            <p style={{ maxWidth: "44ch", color: "var(--accent-ink)", opacity: .85 }}>
              Estou aberto a novas oportunidades e desafios. Bora construir algo bom juntos.
            </p>
            <div className="hero__cta" style={{ marginTop: 28 }}>
              <a className="btn" href="contato.html" data-cursor="hot" style={{ background: "var(--ink)", color: "var(--bg)" }}>
                <Icon name="send" size={17} /> Iniciar conversa
              </a>
              <a className="btn btn--ghost" href={"mailto:" + LINKS.email} data-cursor="hot" style={{ borderColor: "var(--accent-ink)", color: "var(--accent-ink)" }}>
                Copiar e-mail
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function HomeApp() {
  return (
    <Page active="index.html">
      <Hero />
      <StatStrip />
      <FeaturedPeek />
      <CTA />
    </Page>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<HomeApp />);
