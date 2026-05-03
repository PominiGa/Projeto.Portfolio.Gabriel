import React, { useState } from "react";
import "../../styles/projects.css";

import Dashbord from "../../assets/Dashboard.png";
import Concessionaria from "../../assets/concessionaria.png";
import Portfolio from "../../assets/portfolio.png";
import Smash from "../../assets/Smash.png";
import MeuDia from "../../assets/MeuDia.png";
import SmashSistema from "../../assets/sistemaSmash.png";
import sistemaConstruelo from "../../assets/projetoConstruelo.jpeg";

interface Project {
  id: number;
  title: string;
  image: string;
  tags: string[];
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Dashboard COVID",
    image: Dashbord,
    tags: ["Python", "Pandas", "Streamlit"],
    link: "https://github.com/PominiGa/Projeto-Faculdade-Unisagrado"
  },
  {
    id: 2,
    title: "Site Concessionária",
    image: Concessionaria,
    tags: ["React", "JavaScript", "Java", "Spring Boot", "PostgreSQL"],
    link: "https://github.com/PominiGa/Projeto-Site-Concessionaria.-java-react-postgresql"
  },
  {
    id: 3,
    title: "Portfólio",
    image: Portfolio,
    tags: ["React", "TypeScript"],
    link: "https://github.com/PominiGa/Projeto.Portfolio.Gabriel"
  },
  {
    id: 4,
    title: "Site SmashBurguerLP",
    image: Smash,
    tags: ["HTML", "CSS", "JavaScript", "TypeScript"],
    link: "https://github.com/PominiGa/Smash.Burguer"
  },
  {
    id: 5,
    title: "Meu Dia X",
    image: MeuDia,
    tags: ["HTML", "CSS", "JavaScript", "TypeScript"],
    link: "https://github.com/PominiGa/Sim-aceito/tree/main/simaceito"
  },
  {
    id: 6,
    title: "Sistema Smash",
    image: SmashSistema,
    tags: ["Java", "Swing", "MySQL"],
    link: ""
  },
  {
    id: 7,
    title: "Sistema Construelo",
    image: sistemaConstruelo,
    tags: ["React", "TypeScript", "PostgreSQL"],
    link: ""
  }
];

export default function ProjectsCarousel() {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const next = () => {
    setIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const handleProjectClick = (project: Project) => {
    if (!project.link) {
      alert("Projeto privado por motivos comerciais. Posso demonstrar em uma conversa.");
      return;
    }

    window.open(project.link, "_blank");
  };

  const currentProject = projects[index];

  return (
    <section className="projects-carousel container">
      <h2>Projetos</h2>

      <div className="carousel">
        <button className="arrow left" onClick={prev}>
          ❮
        </button>

        <div className="carousel-item">
          <div
            onClick={() => handleProjectClick(currentProject)}
            style={{ cursor: "pointer", position: "relative" }}
          >
            {!currentProject.link && (
              <span className="private-label">Privado</span>
            )}

            <img
              src={currentProject.image}
              alt={currentProject.title}
            />
          </div>

          <h3>{currentProject.title}</h3>

          <div className="tags">
            {currentProject.tags.map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
          </div>
        </div>

        <button className="arrow right" onClick={next}>
          ❯
        </button>
      </div>
    </section>
  );
}