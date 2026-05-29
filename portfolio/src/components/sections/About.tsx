import { User, MapPin, Code, Coffee, CheckCircle, Layers, Rocket, Puzzle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Reveal } from '../shared/Reveal';
import { SecHead } from '../shared/SecHead';
import { useLanguage } from '../../context/LanguageContext';

const ICONS = [User, MapPin, Code, Coffee, CheckCircle];
const VAL_ICONS = [Layers, Rocket, Puzzle];

export default function About() {
  const { T } = useLanguage();
  const a = T.about;

  return (
    <section>
      <div className="page-hero">
        <div className="wrap">
          <Reveal>
            <div className="page-hero__crumb">
              <Link to="/">{T.nav.home}</Link> <span>/</span> {a.crumb}
            </div>
          </Reveal>
          <Reveal delay={60}><div className="eyebrow">{a.eyebrow}</div></Reveal>
          <Reveal delay={120}><h1>{a.title}<span className="acc">.</span></h1></Reveal>
        </div>
      </div>

      <section className="wrap">
        <div className="about-grid">
          <Reveal className="about-bio">
            {a.bio.map((p, i) => (
              <p key={i} className={i === 0 ? 'first-letter' : ''}>{p}</p>
            ))}
          </Reveal>

          <Reveal delay={120} className="about-card card">
            {a.info.map(({ k, v }, i) => {
              const Ic = ICONS[i];
              return (
                <div className="about-card__row" key={k}>
                  <span className="about-card__icon"><Ic size={18} /></span>
                  <div>
                    <div className="about-card__k">{k}</div>
                    <div className="about-card__v">{v}</div>
                  </div>
                </div>
              );
            })}
          </Reveal>
        </div>
      </section>

      <section className="wrap" style={{ marginTop: 96 }}>
        <SecHead eyebrow={a.values_eyebrow} title={a.values_title} desc={a.values_desc} />
        <div className="values-grid">
          {a.values.map((v, i) => {
            const Ic = VAL_ICONS[i];
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
        <SecHead eyebrow={a.timeline_eyebrow} title={a.timeline_title} />
        <div className="timeline">
          {a.timeline.map((it, i) => (
            <Reveal delay={i * 80} key={i}>
              <div className={'tl-item' + ('now' in it && it.now ? ' is-now' : '')}>
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