import React, { useState } from "react";
import "../../styles/projects.css";

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
    image: "/projects/covid.png",
    tags: ["Python", "Pandas", "Streamlit"],
    link: "https://github.com/SEU_REPOSITORIO"
  },
  {
    id: 2,
    title: "Concessionária",
    image: "/projects/cars.png",
    tags: ["React", "Node", "API"],
    link: "https://github.com/SEU_REPOSITORIO"
  },
  {
    id: 3,
    title: "Portfólio",
    image: "/projects/portfolio.png",
    tags: ["React", "TypeScript"],
    link: "https://github.com/SEU_REPOSITORIO"
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
