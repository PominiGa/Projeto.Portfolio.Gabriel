import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Lock, Github } from 'lucide-react';

import imgDashboard from '../../assets/Dashboard.png';
import imgConcessionaria from '../../assets/concessionaria.png';
import imgPortfolio from '../../assets/portfolio.png';
import imgSmash from '../../assets/Smash.png';
import imgMeuDia from '../../assets/MeuDia.png';
import imgRedeOticas from '../../assets/rededasoticas.png';
import imgVilanova from '../../assets/vilanovaveiculos.png';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string | null;
  tags: string[];
  link: string;
  github: string;
  private: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Dashboard COVID',
    description: 'Dashboard interativo com dados da pandemia, utilizando Pandas e Streamlit para visualização e análise de dados.',
    image: imgDashboard,
    tags: ['Python', 'Pandas', 'Streamlit'],
    link: 'https://github.com/PominiGa/Projeto-Faculdade-Unisagrado',
    github: 'https://github.com/PominiGa/Projeto-Faculdade-Unisagrado',
    private: false,
  },
  {
    id: 2,
    title: 'Site Concessionária',
    description: 'Sistema completo de concessionária com backend em Java Spring Boot, banco PostgreSQL e frontend em React.',
    image: imgConcessionaria,
    tags: ['React', 'Java', 'Spring Boot', 'PostgreSQL'],
    link: 'https://github.com/PominiGa/Projeto-Site-Concessionaria.-java-react-postgresql',
    github: 'https://github.com/PominiGa/Projeto-Site-Concessionaria.-java-react-postgresql',
    private: false,
  },
  {
    id: 3,
    title: 'Portfólio',
    description: 'Este portfólio, desenvolvido com React e TypeScript. Design retrô minimalista com dark mode.',
    image: imgPortfolio,
    tags: ['React', 'TypeScript', 'TailwindCSS', 'Framer Motion'],
    link: 'https://github.com/PominiGa/Projeto.Portfolio.Gabriel',
    github: 'https://github.com/PominiGa/Projeto.Portfolio.Gabriel',
    private: false,
  },
  {
    id: 4,
    title: 'Site Smash Burguer LP',
    description: 'Landing page moderna para hamburgueria, com cardápio interativo e design responsivo.',
    image: imgSmash,
    tags: ['HTML', 'CSS', 'JavaScript', 'TypeScript'],
    link: 'https://github.com/PominiGa/Smash.Burguer',
    github: 'https://github.com/PominiGa/Smash.Burguer',
    private: false,
  },
  {
    id: 5,
    title: 'Meu Dia X',
    description: 'Aplicativo web interativo para organização de atividades diárias com interface intuitiva.',
    image: imgMeuDia,
    tags: ['HTML', 'CSS', 'JavaScript', 'TypeScript'],
    link: 'https://github.com/PominiGa/Sim-aceito/tree/main/simaceito',
    github: 'https://github.com/PominiGa/Sim-aceito',
    private: false,
  },
  {
    id: 6,
    title: 'Sistema Smash',
    description: 'Sistema de gerenciamento interno para a hamburgueria Smash Burguer, com gestão de pedidos e estoque.',
    image: null,
    tags: ['Java', 'Swing', 'MySQL'],
    link: '',
    github: '',
    private: true,
  },
  {
    id: 7,
    title: 'Sistema Construelo',
    description: 'Sistema ERP personalizado desenvolvido para empresa de construção civil, com controle de obras e materiais.',
    image: null,
    tags: ['React', 'TypeScript', 'PostgreSQL'],
    link: '',
    github: '',
    private: true,
  },
  {
    id: 8,
    title: 'Site Rede das Óticas',
    description: 'Website institucional e catálogo de produtos para rede de óticas, com design profissional e responsivo.',
    image: imgRedeOticas,
    tags: ['React', 'TypeScript'],
    link: '',
    github: '',
    private: true,
  },
  {
    id: 9,
    title: 'Site Vilanova Veículos',
    description: 'Plataforma completa para concessionária de veículos com integração ao Supabase para gestão de estoque.',
    image: imgVilanova,
    tags: ['React', 'TypeScript', 'Supabase'],
    link: '',
    github: '',
    private: true,
  },
];

const inViewAnim = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
});

function PlaceholderImage({ title }: { title: string }) {
  return (
    <div className="w-full h-full bg-dark-bg dark:bg-dark-card flex flex-col items-center justify-center gap-3 p-6">
      <Lock size={28} className="text-burnt-orange" />
      <p className="font-mono text-xs text-warm-white/30 text-center tracking-widest uppercase">
        PROJETO PRIVADO
      </p>
      <p className="font-mono text-xs text-warm-white/20 text-center">
        {title}
      </p>
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const handleClick = () => {
    if (project.private) {
      alert('Projeto privado por motivos comerciais. Posso demonstrar em uma conversa.');
      return;
    }
    if (project.link) window.open(project.link, '_blank');
  };

  return (
    <motion.div
      {...inViewAnim(index * 0.07)}
      className="group border-2 border-black dark:border-warm-white bg-cream dark:bg-dark-bg brutal-shadow-orange hover-brutal transition-all cursor-pointer flex flex-col"
      onClick={handleClick}
    >
      {/* Image */}
      <div className="relative overflow-hidden border-b-2 border-black dark:border-warm-white h-48">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <PlaceholderImage title={project.title} />
        )}
        {project.private && (
          <div className="absolute top-3 left-3 bg-black/80 text-white font-mono text-xs px-2 py-1 flex items-center gap-1 border border-white/10">
            <Lock size={10} />
            PRIVADO
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-mono font-bold text-base text-black dark:text-warm-white mb-2 group-hover:text-burnt-orange transition-colors">
          {project.title}
        </h3>
        <p className="text-xs text-black/55 dark:text-warm-white/55 leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map(tag => (
            <span
              key={tag}
              className="font-mono text-xs px-2 py-0.5 border border-black/20 dark:border-warm-white/20 text-black/50 dark:text-warm-white/50"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-black/10 dark:border-warm-white/10">
          {!project.private && project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              onClick={e => e.stopPropagation()}
              className="font-mono text-xs text-black/40 dark:text-warm-white/40 hover:text-burnt-orange dark:hover:text-burnt-orange transition-colors flex items-center gap-1"
            >
              <Github size={12} />
              Código
            </a>
          ) : (
            <span className="font-mono text-xs text-black/30 dark:text-warm-white/30 flex items-center gap-1">
              <Lock size={10} />
              Privado
            </span>
          )}
          {!project.private && (
            <span className="font-mono text-xs text-burnt-orange flex items-center gap-1">
              Ver projeto
              <ExternalLink size={11} />
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32 bg-cream dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <motion.div {...inViewAnim()} className="mb-16">
          <p className="font-mono text-xs text-burnt-orange tracking-widest mb-2">[02]</p>
          <h2 className="font-mono font-bold text-4xl sm:text-5xl text-black dark:text-warm-white uppercase">
            PROJETOS
          </h2>
          <div className="mt-4 w-16 h-0.5 bg-burnt-orange" />
          <p className="mt-4 text-sm text-black/50 dark:text-warm-white/50 max-w-lg">
            Projetos reais desenvolvidos — alguns públicos no GitHub, outros privados por motivos comerciais.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}