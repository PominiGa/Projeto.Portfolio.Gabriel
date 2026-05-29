import React from 'react';
import { motion } from 'framer-motion';

interface SkillCategory {
  id: string;
  label: string;
  skills: string[];
}

const categories: SkillCategory[] = [
  {
    id: 'frontend',
    label: 'FRONTEND',
    skills: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'TailwindCSS', 'Framer Motion'],
  },
  {
    id: 'backend',
    label: 'BACKEND',
    skills: ['Java', 'Spring Boot', 'C#', 'Node.js', 'Python'],
  },
  {
    id: 'database',
    label: 'DATABASE',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'MariaDB', 'Supabase'],
  },
  {
    id: 'tools',
    label: 'FERRAMENTAS',
    skills: ['Git', 'GitHub', 'Linux', 'Excel', 'Google Sheets', 'Swing'],
  },
  {
    id: 'studying',
    label: 'ESTUDANDO',
    skills: ['Cybersecurity', 'Segurança de Redes', 'Criptografia', 'Docker'],
  },
];

const techIcons: Record<string, string> = {
  React: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  TypeScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  JavaScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  HTML5: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  CSS3: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  Java: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  'Spring Boot': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
  'C#': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
  'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  Python: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  PostgreSQL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  MySQL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  MongoDB: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  Git: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  GitHub: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
  Linux: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
  Docker: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
};

const inViewAnim = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
});

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32 bg-off-white dark:bg-dark-card border-y-2 border-black/10 dark:border-warm-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <motion.div {...inViewAnim()} className="mb-16">
          <p className="font-mono text-xs text-burnt-orange tracking-widest mb-2">[03]</p>
          <h2 className="font-mono font-bold text-4xl sm:text-5xl text-black dark:text-warm-white uppercase">
            HABILIDADES
          </h2>
          <div className="mt-4 w-16 h-0.5 bg-burnt-orange" />
        </motion.div>

        {/* Categories grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {categories.map((cat, catIdx) => (
            <motion.div
              key={cat.id}
              {...inViewAnim(catIdx * 0.08)}
              className={`border-2 p-5 ${
                cat.id === 'studying'
                  ? 'border-burnt-orange/50 bg-burnt-orange/5'
                  : 'border-black dark:border-warm-white bg-cream dark:bg-dark-bg'
              }`}
            >
              {/* Category header */}
              <div className="flex items-center justify-between mb-4">
                <p className="font-mono text-xs tracking-widest text-burnt-orange font-bold">
                  {cat.label}
                </p>
                {cat.id === 'studying' && (
                  <span className="font-mono text-xs text-burnt-orange/60 border border-burnt-orange/30 px-1.5 py-0.5">
                    WIP
                  </span>
                )}
              </div>

              {/* Skills list */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map(skill => (
                  <div
                    key={skill}
                    className="flex items-center gap-1.5 border border-black/15 dark:border-warm-white/15 px-2 py-1 text-xs bg-off-white dark:bg-dark-card group hover:border-burnt-orange transition-colors"
                    title={skill}
                  >
                    {techIcons[skill] ? (
                      <img
                        src={techIcons[skill]}
                        alt={skill}
                        className="w-3.5 h-3.5 object-contain"
                        style={
                          skill === 'GitHub'
                            ? { filter: 'invert(0)' }
                            : undefined
                        }
                      />
                    ) : (
                      <span className="w-3.5 h-3.5 flex items-center justify-center text-burnt-orange font-mono font-bold text-xs">
                        ✦
                      </span>
                    )}
                    <span className="font-mono text-xs text-black/70 dark:text-warm-white/70 group-hover:text-burnt-orange transition-colors">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Marquee strip */}
        <motion.div
          {...inViewAnim(0.4)}
          className="mt-14 overflow-hidden border-t border-b border-black/10 dark:border-warm-white/10 py-3"
        >
          <div className="flex gap-8 animate-marquee whitespace-nowrap">
            {[...Object.keys(techIcons), ...Object.keys(techIcons)].map((tech, i) => (
              <span
                key={`${tech}-${i}`}
                className="font-mono text-xs tracking-widest text-black/25 dark:text-warm-white/25 uppercase"
              >
                {tech} ·
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}