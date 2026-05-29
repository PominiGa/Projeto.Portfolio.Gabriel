import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Code2 } from 'lucide-react';

const stats = [
  { value: '2+', label: 'Anos estudando' },
  { value: '9+', label: 'Projetos desenvolvidos' },
  { value: '8+', label: 'Cursos realizados' },
];

const timeline = [
  {
    year: '2023 – PRESENTE',
    title: 'Análise e Desenvolvimento de Sistemas',
    subtitle: 'UNISAGRADO — Lençóis Paulista, SP',
    icon: GraduationCap,
  },
  {
    year: '2023 – PRESENTE',
    title: 'Desenvolvedor Full-Stack',
    subtitle: 'Projetos pessoais e comerciais',
    icon: Code2,
  },
];

const inViewAnim = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true as const },
  transition: { duration: 0.6 },
} as const;

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-off-white dark:bg-dark-card border-y-2 border-black/10 dark:border-warm-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <motion.div {...inViewAnim} className="mb-16">
          <p className="font-mono text-xs text-burnt-orange tracking-widest mb-2">[01]</p>
          <h2 className="font-mono font-bold text-4xl sm:text-5xl text-black dark:text-warm-white uppercase">
            SOBRE MIM
          </h2>
          <div className="mt-4 w-16 h-0.5 bg-burnt-orange" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 lg:gap-20">

          {/* ── Left: Text + Timeline ── */}
          <div className="space-y-8">
            <motion.div {...inViewAnim} className="space-y-4 text-black/70 dark:text-warm-white/70 leading-relaxed text-base">
              <p>
                Meu nome é <strong className="text-black dark:text-warm-white font-semibold">Gabriel Pomini de Souza</strong>.
                Moro em Lençóis Paulista — SP, e sou uma pessoa simples que gosta de aprender coisas
                novas e enfrentar desafios. Desde sempre tive interesse por tecnologia e programação,
                o que me levou a buscar uma carreira nessa área.
              </p>
              <p>
                Sou um desenvolvedor Full-Stack com foco principal em Backend, utilizando
                <strong className="text-burnt-orange"> Java e Spring Boot</strong>, mas também com
                sólida experiência em Frontend com <strong className="text-burnt-orange">React e TypeScript</strong>.
              </p>
              <p>
                Além do desenvolvimento, tenho experiência com montagem e manutenção de computadores,
                automação com Python, desenvolvimento de bots e criação de planilhas automatizadas.
                Estou constantemente estudando e aprimorando minhas habilidades para me tornar um
                profissional cada vez melhor.
              </p>
            </motion.div>

            {/* Location */}
            <motion.div
              {...inViewAnim}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-2 font-mono text-xs text-black/40 dark:text-warm-white/40"
            >
              <MapPin size={13} className="text-burnt-orange" />
              <span>Lençóis Paulista, SP — Brasil</span>
            </motion.div>

            {/* Timeline */}
            <motion.div
              {...inViewAnim}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="space-y-4 pt-2"
            >
              <p className="font-mono text-xs tracking-widest text-black/40 dark:text-warm-white/40 uppercase">
                TRAJETÓRIA
              </p>
              {timeline.map(({ year, title, subtitle, icon: Icon }) => (
                <div
                  key={title}
                  className="flex gap-4 border-l-2 border-black dark:border-warm-white pl-4"
                >
                  <div className="pt-0.5">
                    <div className="w-7 h-7 border-2 border-black dark:border-warm-white flex items-center justify-center bg-cream dark:bg-dark-bg">
                      <Icon size={13} className="text-burnt-orange" />
                    </div>
                  </div>
                  <div>
                    <p className="font-mono text-xs text-burnt-orange tracking-widest mb-0.5">
                      {year}
                    </p>
                    <p className="font-semibold text-black dark:text-warm-white text-sm">
                      {title}
                    </p>
                    <p className="text-xs text-black/50 dark:text-warm-white/50 mt-0.5">
                      {subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Stats ── */}
          <motion.div
            {...inViewAnim}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="flex flex-col gap-4"
          >
            {stats.map(({ value, label }) => (
              <div
                key={label}
                className="border-2 border-black dark:border-warm-white p-6 bg-cream dark:bg-dark-bg brutal-shadow-orange group hover-brutal transition-all cursor-default"
              >
                <p className="font-mono font-bold text-5xl text-burnt-orange mb-2">
                  {value}
                </p>
                <p className="font-mono text-xs tracking-widest text-black/50 dark:text-warm-white/50 uppercase">
                  {label}
                </p>
              </div>
            ))}

            {/* Open to work badge */}
            <div className="border-2 border-burnt-orange p-4 bg-burnt-orange/5 dark:bg-burnt-orange/10">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <p className="font-mono text-xs text-burnt-orange tracking-widest font-bold">
                  OPEN TO WORK
                </p>
              </div>
              <p className="text-xs text-black/60 dark:text-warm-white/60">
                Aberto a novas oportunidades e projetos freelance.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}