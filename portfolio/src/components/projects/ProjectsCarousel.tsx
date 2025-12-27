import React, { useState } from "react";
import "../../styles/projects.css";
import Dashbord from "../../assets/Dashboard.png";
import Concessionaria from "../../assets/concessionaria.png";
import Portfolio from "../../assets/portfolio.png";
import Smash from "../../assets/Smash.png";

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
    title: "Projeto 5",
    
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

  return (
    <section className="projects-carousel container">
      <h2>Projetos</h2>

      <div className="carousel">
        <button className="arrow left" onClick={prev}>
          ❮
        </button>

        <div className="carousel-item">
          <a href={projects[index].link} target="_blank">
            <img src={projects[index].image} alt={projects[index].title} />
          </a>

          <h3>{projects[index].title}</h3>

          <div className="tags">
            {projects[index].tags.map((t) => (
              <span key={t} className="tag">{t}</span>
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
