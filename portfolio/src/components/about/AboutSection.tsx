import React from "react";
import "../../styles/about.css";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container about-inner">

        <div className="about-text">
          <h2>Sobre mim</h2>
          <p>
             Meu nome é Gabriel Pomini de Souza. Moro atualmente em Lençois Paulista - SP. Sou uma pessoa simples que gosta de aprender coisas novas e enfrentar 
            desafios. Desde sempre tive interesse por tecnologia e programação, o que me levou a
            buscar uma carreira nessa área.
          </p>
          <p>
             Sou um desenvolvedor Full-Stack mais focado em Backend, com Java e
            Spring Boot, mas também tenho experiência com tecnologias Frontend
            como React e TypeScript.
          </p>
          <p>
            Estou constantemente estudando e aprimorando minhas habilidades para me tornar um
            profissional cada vez melhor. Estou aberto a novas oportunidades e desafios que me
            permitam crescer e contribuir com projetos interessantes.
          </p>
          <p>
            Se você quiser saber mais sobre mim ou entrar em contato, fique à vontade para
            visitar a seção de contato.
          </p>
        </div>

        <div className="about-cards">
          <div className="about-card">
            <span className="number">6+</span>
            <p>Meses estudando tecnologia</p>
          </div>

          <div className="about-card">
            <span className="number">5+</span>
            <p>Projetos desenvolvidos</p>
          </div>

          <div className="about-card">
            <span className="number">8+</span>
            <p>Cursos realizados</p>
          </div>
        </div>
      </div>
    </section>
  );
}
