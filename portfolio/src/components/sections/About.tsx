import { User, MapPin, Code, Coffee, CheckCircle, Layers, Rocket, Puzzle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Reveal } from '../shared/Reveal';
import { SecHead } from '../shared/SecHead';

const INFO_ROWS = [
  { ic: User,        k: 'Nome',           v: 'Gabriel Pomini de Souza' },
  { ic: MapPin,      k: 'Localização',    v: 'Lençóis Paulista — SP' },
  { ic: Code,        k: 'Função',         v: 'Dev FullStack · Backend' },
  { ic: Coffee,      k: 'Stack principal', v: 'Java · Spring Boot' },
  { ic: CheckCircle, k: 'Status',         v: 'Disponível para projetos' },
];

const VALUES = [
  { ic: Layers, t: 'Backend sólido',       d: 'Arquiteturas limpas e escaláveis com Java e Spring Boot, pensando em manutenção a longo prazo.' },
  { ic: Rocket, t: 'Aprendizado contínuo', d: 'Sempre estudando algo novo. Cada projeto é uma chance de evoluir como profissional.' },
  { ic: Puzzle, t: 'Resolver problemas',   d: 'Gosto de desafios. Quebrar um problema complexo em partes simples é o que me move.' },
];

const TIMELINE = [
  { y: 'Agora',           t: 'Desenvolvedor FullStack',      d: 'Construindo aplicações backend-first com Java, Spring Boot e camada frontend em React/TypeScript.', now: true },
  { y: '2023 – presente', t: 'ADS — UNISAGRADO',             d: 'Cursando Análise e Desenvolvimento de Sistemas em Lençóis Paulista, SP.' },
  { y: 'Estudo contínuo', t: 'Aprofundando em arquitetura',  d: 'Microsserviços, mensageria, bancos de dados e boas práticas de design de APIs.' },
  { y: 'Início',          t: 'Primeiros passos no código',   d: 'O interesse por tecnologia me levou à programação — do primeiro "Hello World" à carreira.' },
];

export default function About() {
  return (
    <section>
      <div className="page-hero">
        <div className="wrap">
          <Reveal>
            <div className="page-hero__crumb">
              <Link to="/">Home</Link> <span>/</span> Sobre
            </div>
          </Reveal>
          <Reveal delay={60}><div className="eyebrow">Quem é o dev por trás do código</div></Reveal>
          <Reveal delay={120}><h1>Sobre mim<span className="acc">.</span></h1></Reveal>
        </div>
      </div>

      <section className="wrap">
        <div className="about-grid">
          <Reveal className="about-bio">
            <p className="first-letter">
              Meu nome é <strong>Gabriel Pomini de Souza</strong>. Moro atualmente em
              Lençóis Paulista — SP. Sou uma pessoa simples que gosta de aprender
              coisas novas e enfrentar desafios. Desde sempre tive interesse por
              tecnologia e programação, o que me levou a buscar uma carreira nessa área.
            </p>
            <p>
              Sou um desenvolvedor <strong>Full-Stack</strong> mais focado em{' '}
              <strong className="acc">Backend</strong>, com Java e Spring Boot, mas
              também tenho experiência com tecnologias Frontend como React e TypeScript.
            </p>
            <p>
              Além do desenvolvimento, tenho experiência com montagem e manutenção de
              computadores, automação com Python, desenvolvimento de bots para WhatsApp
              e criação de planilhas automatizadas com Excel.
            </p>
            <p>
              Estou constantemente estudando e aprimorando minhas habilidades. Estou aberto
              a novas oportunidades — fique à vontade para visitar a{' '}
              <Link to="/contato" className="acc" style={{ fontWeight: 700 }}>seção de contato</Link>.
            </p>
          </Reveal>

          <Reveal delay={120} className="about-card card">
            {INFO_ROWS.map(({ ic: Ic, k, v }) => (
              <div className="about-card__row" key={k}>
                <span className="about-card__icon"><Ic size={18} /></span>
                <div>
                  <div className="about-card__k">{k}</div>
                  <div className="about-card__v">{v}</div>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="wrap" style={{ marginTop: 96 }}>
        <SecHead eyebrow="O que me move" title="Princípios" desc="A forma como encaro o trabalho e a tecnologia no dia a dia." />
        <div className="values-grid">
          {VALUES.map((v, i) => {
            const Ic = v.ic;
            return (
              <Reveal delay={i * 90} key={i}>
                <div className="value-card card card--hover">
                  <span className="value-card__ic"><Ic size={22} /></span>
                  <h3 className="h3">{v.t}</h3>
                  <p>{v.d}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="wrap" style={{ marginTop: 96 }}>
        <SecHead eyebrow="Trajetória" title="A jornada até aqui" />
        <div className="timeline">
          {TIMELINE.map((it, i) => (
            <Reveal delay={i * 80} key={i}>
              <div className={'tl-item' + (it.now ? ' is-now' : '')}>
                <div className="tl-year">{it.y}</div>
                <h3>{it.t}</h3>
                <p>{it.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </section>
  );
}