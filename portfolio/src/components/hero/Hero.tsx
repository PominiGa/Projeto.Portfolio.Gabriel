import React from "react";
import waves from "../../assets/waves.svg";
import TechMarquee from "../tech/TechMarquee";
import profile from "../../assets/profile.jpg";
export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">

        {/* ESQUERDA (texto) */}
        <div className="hero-copy">
          <h1>Desenvolvedor Full-Stack</h1>
          <p>
            Entusiasta da tecnologia, estou constantemente em busca de novos conhecimentos.
            Possuo experiência com montagem e manutenção de computadores, domínio em Excel,
            desenvolvendo soluções que otimizam a organização, análise e automação de tarefas.
            <br /><br />
            Atualmente cursando Análise e Desenvolvimento de Sistemas na UNISAGRADO, busco expandir
            meu conhecimento em tecnologia e programação. Motivado por desafios, almejo integrar
            soluções inovadoras e criativas no mercado de tecnologia.
          </p>

          <div style={{ marginTop: 18 }}>
            <a className="cta" href="#contact">Me contatar</a>
            <a className="cta secondary" href="#projects" style={{ marginLeft: 12 }}>
              Ver projetos
            </a>
          </div>
        </div>

        {/* DIREITA (FOTO + WAVES) */}
        <div className="hero-right">
          <img src={profile} alt="Minha foto" className="profile-img" />
          <img src={waves} alt="" className="waves" />
        </div>

      </div>

      <TechMarquee />
    </section>
  );
}
