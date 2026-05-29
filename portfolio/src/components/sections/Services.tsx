import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Server, Database, Bot, MessageSquare, BarChart2, Table2, Shield } from 'lucide-react';

interface Service {
  title: string;
  description: string;
  tags: string[];
  icon: React.ElementType;
  studying?: boolean;
}

const services: Service[] = [
  {
    title: 'Desenvolvimento Web',
    description: 'Sites e aplicações web modernas e responsivas com React, TypeScript e TailwindCSS, garantindo performance e ótima experiência do usuário.',
    tags: ['React', 'TypeScript', 'CSS', 'TailwindCSS'],
    icon: Monitor,
  },
  {
    title: 'Back-end & APIs',
    description: 'Desenvolvimento de APIs REST com Java e Spring Boot, focando em organização, segurança, escalabilidade e boas práticas.',
    tags: ['Java', 'C#', 'Spring Boot', 'REST'],
    icon: Server,
  },
  {
    title: 'Banco de Dados',
    description: 'Modelagem e integração com bancos de dados relacionais e NoSQL, garantindo eficiência, consistência e performance.',
    tags: ['PostgreSQL', 'MySQL', 'MongoDB', 'MariaDB'],
    icon: Database,
  },
  {
    title: 'Automação & Scripts',
    description: 'Criação de soluções para automatizar tarefas repetitivas, análise de dados e otimização de processos de negócio.',
    tags: ['Python', 'JavaScript'],
    icon: Bot,
  },
  {
    title: 'Bots para WhatsApp',
    description: 'Desenvolvimento de bots inteligentes para WhatsApp utilizando a API oficial, facilitando comunicação e atendimento automatizado.',
    tags: ['JavaScript', 'WhatsApp API'],
    icon: MessageSquare,
  },
  {
    title: 'Sistemas de Gestão / ERP',
    description: 'Desenvolvimento de sistemas personalizados para gerenciamento interno, otimizando a organização e produtividade empresarial.',
    tags: ['Java', 'C#', 'Spring Boot', 'React'],
    icon: BarChart2,
  },
  {
    title: 'Planilhas Automatizadas',
    description: 'Criação e automação de planilhas inteligentes para organização, análise e controle de dados empresariais.',
    tags: ['Excel', 'Google Sheets'],
    icon: Table2,
  },
  {
    title: 'Cybersecurity',
    description: 'Estudo e aplicação de boas práticas de segurança da informação, análise de vulnerabilidades e proteção de sistemas.',
    tags: ['Linux', 'Python', 'Criptografia'],
    icon: Shield,
    studying: true,
  },
];

const inViewAnim = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
});

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 bg-cream dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <motion.div {...inViewAnim()} className="mb-16">
          <p className="font-mono text-xs text-burnt-orange tracking-widest mb-2">[04]</p>
          <h2 className="font-mono font-bold text-4xl sm:text-5xl text-black dark:text-warm-white uppercase">
            SERVIÇOS
          </h2>
          <div className="mt-4 w-16 h-0.5 bg-burnt-orange" />
          <p className="mt-4 text-sm text-black/50 dark:text-warm-white/50 max-w-lg">
            O que eu faço e ofereço como desenvolvedor.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <motion.div
                key={svc.title}
                {...inViewAnim(i * 0.06)}
                className={`relative border-2 p-5 flex flex-col gap-3 group transition-all
                  ${svc.studying
                    ? 'border-burnt-orange/40 bg-burnt-orange/5'
                    : 'border-black dark:border-warm-white bg-off-white dark:bg-dark-card brutal-shadow-orange hover-brutal'
                  }`}
              >
                {svc.studying && (
                  <div className="absolute top-3 right-3 font-mono text-xs border border-burnt-orange/50 text-burnt-orange px-1.5 py-0.5">
                    EM ESTUDO
                  </div>
                )}

                <div className="w-9 h-9 border-2 border-black dark:border-warm-white flex items-center justify-center bg-cream dark:bg-dark-bg">
                  <Icon size={16} className="text-burnt-orange" />
                </div>

                <h3 className="font-mono font-bold text-sm text-black dark:text-warm-white group-hover:text-burnt-orange transition-colors leading-snug">
                  {svc.title}
                </h3>

                <p className="text-xs text-black/55 dark:text-warm-white/55 leading-relaxed flex-1">
                  {svc.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-black/10 dark:border-warm-white/10">
                  {svc.tags.map(tag => (
                    <span
                      key={tag}
                      className="font-mono text-xs px-1.5 py-0.5 border border-black/15 dark:border-warm-white/15 text-black/45 dark:text-warm-white/45"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}