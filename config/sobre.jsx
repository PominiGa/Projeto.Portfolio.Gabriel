/* =========================================================================
   sobre.jsx — página Sobre
   ========================================================================= */

function AboutBio() {
  return (
    <section className="wrap">
      <div className="about-grid">
        <Reveal className="about-bio">
          <p className="first-letter">
            Meu nome é <strong>Gabriel Pomini de Souza</strong>. Moro atualmente em
            Lençóis Paulista — SP. Sou uma pessoa simples que gosta de aprender coisas
            novas e enfrentar desafios. Desde sempre tive interesse por tecnologia e
            programação, o que me levou a buscar uma carreira nessa área.
          </p>
          <p>
            Sou um desenvolvedor <strong>Full-Stack</strong> mais focado em <strong className="acc">Backend</strong>,
            com Java e Spring Boot, mas também tenho experiência com tecnologias
            Frontend como React e TypeScript.
          </p>
          <p>
            Estou constantemente estudando e aprimorando minhas habilidades para me
            tornar um profissional cada vez melhor. Estou aberto a novas oportunidades
            e desafios que me permitam crescer e contribuir com projetos interessantes.
          </p>
          <p>
            Se você quiser saber mais sobre mim ou entrar em contato, fique à vontade
            para visitar a <a href="contato.html" className="acc" style={{ fontWeight: 700 }}>seção de contato</a>.
          </p>
        </Reveal>

        <Reveal delay={120} className="about-card card">
          {[
            { ic: "user", k: "Nome", v: "Gabriel Pomini de Souza" },
            { ic: "map-pin", k: "Localização", v: "Lençóis Paulista — SP" },
            { ic: "code", k: "Função", v: "Dev FullStack · Backend" },
            { ic: "coffee", k: "Stack principal", v: "Java · Spring Boot" },
            { ic: "circle-check", k: "Status", v: "Disponível para projetos" },
          ].map((r, i) => (
            <div className="about-card__row" key={i}>
              <span className="about-card__icon"><Icon name={r.ic} size={18} /></span>
              <div>
                <div className="about-card__k">{r.k}</div>
                <div className="about-card__v">{r.v}</div>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function Values() {
  const vals = [
    { ic: "layers", t: "Backend sólido", d: "Arquiteturas limpas e escaláveis com Java e Spring Boot, pensando em manutenção a longo prazo." },
    { ic: "rocket", t: "Aprendizado contínuo", d: "Sempre estudando algo novo. Cada projeto é uma chance de evoluir como profissional." },
    { ic: "puzzle", t: "Resolver problemas", d: "Gosto de desafios. Quebrar um problema complexo em partes simples é o que me move." },
  ];
  return (
    <section className="wrap" style={{ marginTop: 96 }}>
      <SecHead eyebrow="O que me move" title="Princípios" desc="A forma como encaro o trabalho e a tecnologia no dia a dia." />
      <div className="values-grid">
        {vals.map((v, i) => (
          <Reveal delay={i * 90} key={i}>
            <div className="value-card card card--hover">
              <span className="value-card__ic"><Icon name={v.ic} size={22} /></span>
              <h3 className="h3">{v.t}</h3>
              <p>{v.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Timeline() {
  const items = [
    { y: "Agora", t: "Desenvolvedor FullStack", d: "Construindo aplicações backend-first com Java, Spring Boot e camada frontend em React/TypeScript.", now: true },
    { y: "Estudo contínuo", t: "Aprofundando em arquitetura", d: "Microsserviços, mensageria, bancos de dados e boas práticas de design de APIs." },
    { y: "Início", t: "Primeiros passos no código", d: "O interesse por tecnologia me levou à programação — do primeiro 'Hello World' à carreira." },
  ];
  return (
    <section className="wrap" style={{ marginTop: 96 }}>
      <SecHead eyebrow="Trajetória" title="A jornada até aqui" />
      <div className="timeline">
        {items.map((it, i) => (
          <Reveal delay={i * 80} key={i}>
            <div className={"tl-item" + (it.now ? " is-now" : "")}>
              <div className="tl-year">{it.y}</div>
              <h3>{it.t}</h3>
              <p>{it.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function SobreApp() {
  return (
    <Page active="sobre.html">
      <PageHero crumb="Sobre" eyebrow="Quem é o dev por trás do código" title={<React.Fragment>Sobre mim<span className="acc">.</span></React.Fragment>} />
      <AboutBio />
      <Values />
      <Timeline />
    </Page>
  );
}

window.PageHero = window.PageHero;
ReactDOM.createRoot(document.getElementById("root")).render(<SobreApp />);
