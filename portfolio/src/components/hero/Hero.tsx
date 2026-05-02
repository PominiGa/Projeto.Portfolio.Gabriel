import React from "react";
import waves from "../../assets/waves.svg";
import TechMarquee from "../tech/TechMarquee";
import profile from "../../assets/profile.jpg";

export default function Hero() {

  const handleMouseMove = (e: React.MouseEvent<HTMLImageElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 20;
    const rotateY = ((x - centerX) / centerX) * 20;

    e.currentTarget.style.transform =
      `rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const resetRotation = (e: React.MouseEvent<HTMLImageElement>) => {
    e.currentTarget.style.transform =
      `rotateX(0deg) rotateY(0deg)`;
  };

  return (
    <section className="hero">
      <div className="container hero-inner">

        <div className="hero-copy">
          <h1>Desenvolvedor Full-Stack</h1>
          <p> Entusiasta da tecnologia, estou constantemente em busca de novos conhecimentos. Possuo experiência com montagem e manutenção de computadores, domínio em Excel, desenvolvendo soluções que otimizam a organização, análise e automação de tarefas. <br /><br /> Atualmente cursando Análise e Desenvolvimento de Sistemas na UNISAGRADO, busco expandir meu conhecimento em tecnologia e programação. Motivado por desafios, almejo integrar soluções inovadoras e criativas no mercado de tecnologia. </p>

          <div style={{ marginTop: 18 }}>
            <a className="cta" href="#contact">Me contatar</a>
            <a className="cta secondary" href="#projects" style={{ marginLeft: 12 }}>
              Ver projetos
            </a>
          </div>
        </div>

        <div className="hero-right">
          <img
            src={profile}
            alt="Minha foto"
            className="profile-img"
            onMouseMove={handleMouseMove}
            onMouseLeave={resetRotation}
          />
          <img src={waves} alt="" className="waves" />
        </div>

      </div>

      <TechMarquee />
    </section>
  );
}