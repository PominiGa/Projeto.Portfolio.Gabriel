import React from 'react'
import ProjectCard from './ProjectCard'

export default function ProjectsGrid(){
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Projetos</h2>

        <div className="grid">

          {/* PROJETO 1 */}
          <a className="project-card" href="https://github.com/SEU_REPO_AQUI" target="_blank">
            <img src="IMG_DO_PROJETO.jpg" alt="Projeto 1" className="project-img" />
            <div className="project-content">
              <h3>Nome do Projeto</h3>

              <div className="tags">
                <span className="tag">React</span>
                <span className="tag">Node.js</span>
                <span className="tag">API</span>
              </div>
            </div>
          </a>

          {/* PROJETO 2 */}
          <a className="project-card" href="https://github.com/SEU_REPO_AQUI" target="_blank">
            <img src="IMG_DO_PROJETO_2.jpg" alt="Projeto 2" className="project-img" />

            <div className="project-content">
              <h3>Dashboard COVID-19</h3>

              <div className="tags">
                <span className="tag">Python</span>
                <span className="tag">Pandas</span>
                <span className="tag">Streamlit</span>
              </div>
            </div>
          </a>

        </div>
      </div>
    </section>
  )
}
