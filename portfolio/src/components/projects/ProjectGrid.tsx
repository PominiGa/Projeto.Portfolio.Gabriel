import React from "react";
import ProjectCard from "./ProjectCard";

const data = [
  { title: "Dashboard UI", description: "Dashboard com gráficos", tags: ["React","TS"] },
  { title: "Landing", description: "Landing page", tags: ["Tailwind"] },
];

export default function ProjectsGrid() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-2xl font-bold mb-8">Projetos</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.map(p => <ProjectCard key={p.title} {...p} />)}
      </div>
    </section>
  );
}
