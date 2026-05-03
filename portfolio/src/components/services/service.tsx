import React from "react";

interface Service {
    title: string;
    description: string;
    tecnologias: string[];
    icon: string;
    inStudying: boolean;
}

const services: Service[] = [
    {
        title: "Desenvolvimento Web",
        description:
            "Criação de sites modernos e responsivos utilizando React, garantindo performance e boa experiência do usuário.",
        tecnologias: ["React", "TypeScript", "CSS"],
        icon: "💻",
        inStudying: false
    },
    {
        title: "Back-end e APIs",
        description:
            "Desenvolvimento de APIs com Java e Spring Boot, focando em organização, segurança e escalabilidade.",
        tecnologias: ["Java", "C#", "Spring Boot"],
        icon: "⚙️",
        inStudying: false
    },
    {
        title: "Banco de Dados",
        description:
            "Modelagem e integração com bancos de dados como PostgreSQL, garantindo eficiência e consistência dos dados.",
        tecnologias: ["PostgreSQL", "MySQL", "MongoDB", "MariaDB"],
        icon: "🗄️",
        inStudying: false
    },
    {
        title: "Automação e Scripts",
        description:
            "Criação de soluções para automatizar tarefas, análise de dados e otimização de processos.",
        tecnologias: ["Python", "JavaScript"],
        icon: "🤖",
        inStudying: false
    },
    {
        title: "Bots para Whatsapp",
        description:
            "Desenvolvimento de bots para Whatsapp utilizando a API do WhatsApp Business, facilitando a comunicação e atendimento ao cliente.",
        tecnologias: ["JavaScript"],
        icon: "📱",
        inStudying: false
    },
    {
        title: "Sistemas de Gerenciamento e ERP",
        description:
            "Desenvolvimento de sistemas personalizados para gerenciamento de projetos, tarefas e equipes, otimizando a organização e produtividade.",
        tecnologias: ["Java", "C#", "Spring Boot"],
        icon: "📊",
        inStudying: false
    },
    {
        title: "Planilhas automatizadas",
        description:
            "Criação de planilhas automatizadas para organização, análise e automação de tarefas, utilizando Excel e Google Sheets.",
        tecnologias: ["Excel", "Google Sheets"],
        icon: "📈",
        inStudying: false
    },
    {
        title: "Cybersecurity",
        description:
            "Estudando segurança da informação, incluindo análise de vulnerabilidades, boas práticas e proteção de sistemas.",
        tecnologias: ["Linux", "Segurança de Redes", "Criptografia", "Python"],
        icon: "🔒",
        inStudying: true
    }
];

export default function Services() {
    return (
        <section id="services" className="services container">
            <h2>Serviços</h2>
            <div className="services-grid">
                {services.map((service, index) => (
                    <div key={index} className="service-card">
                        {service.inStudying && <div className="ribbon">Em Estudo</div>}
                        <div className="icon">{service.icon}</div>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                        <div className="tech-list">
                            {service.tecnologias.map((tech) => (
                                <span key={tech} className="tech-tag">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}