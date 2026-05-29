import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, MessageCircle, FileText, ArrowDown } from 'lucide-react';
import profile from '../../assets/profile.jpg';
import curriculo from '../../assets/Gabriel Pomini de Souza.pdf';

const socials = [
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/PominiGa',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/gabriel-pomini-43aa731ba/',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    href: 'https://wa.me/5514998604950',
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
});

export default function Hero() {
  return (
    <section className="min-h-screen pt-14 flex items-center bg-cream dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-center">

          {/* ── Left content ── */}
          <div>
            <motion.p
              {...fadeUp(0)}
              className="font-mono text-xs tracking-widest text-burnt-orange uppercase mb-5"
            >
              // DESENVOLVEDOR FULL-STACK
            </motion.p>

            <motion.h1
              {...fadeUp(0.1)}
              className="font-mono font-bold text-6xl sm:text-7xl md:text-8xl leading-none text-black dark:text-warm-white mb-6 uppercase"
            >
              GABRIEL<br />POMINI.
            </motion.h1>

            <motion.div
              {...fadeUp(0.2)}
              className="w-16 h-0.5 bg-burnt-orange mb-6"
            />

            <motion.p
              {...fadeUp(0.3)}
              className="text-black/60 dark:text-warm-white/60 text-base sm:text-lg max-w-lg mb-8 leading-relaxed"
            >
              Desenvolvedor Full-Stack focado em Backend com Java e Spring Boot,
              com experiência em React e TypeScript. Cursando Análise e Desenvolvimento
              de Sistemas na UNISAGRADO — Lençóis Paulista, SP.
            </motion.p>

            {/* CTAs */}
            <motion.div {...fadeUp(0.4)} className="flex flex-wrap gap-3 mb-10">
              <a
                href="#projects"
                className="font-mono text-sm font-bold px-6 py-3 bg-black dark:bg-warm-white text-cream dark:text-dark-bg border-2 border-black dark:border-warm-white brutal-shadow-orange hover-brutal transition-all"
              >
                VER PROJETOS →
              </a>
              <a
                href={curriculo}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-sm px-6 py-3 border-2 border-black dark:border-warm-white text-black dark:text-warm-white hover:bg-burnt-orange hover:border-burnt-orange hover:text-white transition-all flex items-center gap-2"
              >
                <FileText size={14} />
                CURRÍCULO
              </a>
              <a
                href="#contact"
                className="font-mono text-sm px-6 py-3 border-2 border-black/30 dark:border-warm-white/30 text-black/50 dark:text-warm-white/50 hover:border-black hover:text-black dark:hover:border-warm-white dark:hover:text-warm-white transition-all"
              >
                CONTATO
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              {...fadeUp(0.5)}
              className="flex items-center gap-5"
            >
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-xs text-black/40 dark:text-warm-white/40 hover:text-burnt-orange dark:hover:text-burnt-orange transition-colors flex items-center gap-1.5"
                >
                  <Icon size={13} />
                  {label}
                </a>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Photo ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="w-60 h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80 border-2 border-black dark:border-warm-white brutal-shadow-xl-orange overflow-hidden">
                <img
                  src={profile}
                  alt="Gabriel Pomini de Souza"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Tag badge */}
              <div className="absolute -bottom-3 -left-3 bg-burnt-orange text-white font-mono text-xs font-bold px-3 py-1.5 border-2 border-black dark:border-warm-white uppercase tracking-widest">
                FULL-STACK
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-16 hidden sm:flex items-center gap-2"
        >
          <div className="w-8 h-px bg-black/20 dark:bg-warm-white/20" />
          <span className="font-mono text-xs text-black/25 dark:text-warm-white/25 tracking-widest">
            SCROLL
          </span>
          <ArrowDown size={11} className="text-black/25 dark:text-warm-white/25 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}