import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Github, Linkedin, MessageCircle, Mail, Copy, Check, Phone, MapPin } from 'lucide-react';

const EMAIL = 'gabriel.souza53@hotmail.com';
const PHONE = '+55 (14) 99860-4950';

const socials = [
  {
    icon: Github,
    label: 'GitHub',
    value: 'PominiGa',
    href: 'https://github.com/PominiGa',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'gabriel-pomini',
    href: 'https://www.linkedin.com/in/gabriel-pomini-43aa731ba/',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+55 14 99860-4950',
    href: 'https://wa.me/5514998604950',
  },
];

const inViewAnim = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
});

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setSending(true);
    setError(false);

    emailjs
      .sendForm('service_sj975ya', 'template_4ebn745', formRef.current, {
        publicKey: '9ynEPhoxF7tfvqx-s',
      })
      .then(() => {
        setSent(true);
        formRef.current?.reset();
      })
      .catch(() => setError(true))
      .finally(() => setSending(false));
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-off-white dark:bg-dark-card border-t-2 border-black/10 dark:border-warm-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <motion.div {...inViewAnim()} className="mb-16">
          <p className="font-mono text-xs text-burnt-orange tracking-widest mb-2">[05]</p>
          <h2 className="font-mono font-bold text-4xl sm:text-5xl text-black dark:text-warm-white uppercase">
            CONTATO
          </h2>
          <div className="mt-4 w-16 h-0.5 bg-burnt-orange" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20">

          {/* ── Left: Info ── */}
          <div className="space-y-8">
            <motion.p
              {...inViewAnim(0.1)}
              className="text-black/60 dark:text-warm-white/60 leading-relaxed"
            >
              Estou aberto a novas oportunidades, projetos freelance e colaborações.
              Entre em contato pelo formulário, e-mail ou redes sociais.
            </motion.p>

            {/* Email box */}
            <motion.div {...inViewAnim(0.15)}>
              <p className="font-mono text-xs tracking-widest text-black/40 dark:text-warm-white/40 mb-3 uppercase">
                E-MAIL
              </p>
              <div className="flex items-center gap-0 border-2 border-black dark:border-warm-white">
                <div className="flex items-center gap-2 px-4 py-3 flex-1 bg-cream dark:bg-dark-bg">
                  <Mail size={14} className="text-burnt-orange shrink-0" />
                  <span className="font-mono text-sm text-black dark:text-warm-white truncate">
                    {EMAIL}
                  </span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-4 py-3 border-l-2 border-black dark:border-warm-white bg-cream dark:bg-dark-bg hover:bg-burnt-orange hover:border-burnt-orange text-black dark:text-warm-white hover:text-white transition-all"
                  aria-label="Copiar email"
                >
                  {copied ? <Check size={14} /> : <Copy size={14} />}
                </button>
              </div>
            </motion.div>

            {/* Phone */}
            <motion.div {...inViewAnim(0.2)}>
              <p className="font-mono text-xs tracking-widest text-black/40 dark:text-warm-white/40 mb-3 uppercase">
                TELEFONE
              </p>
              <a
                href="tel:+5514998604950"
                className="flex items-center gap-2 font-mono text-sm text-black dark:text-warm-white hover:text-burnt-orange dark:hover:text-burnt-orange transition-colors"
              >
                <Phone size={14} className="text-burnt-orange" />
                {PHONE}
              </a>
            </motion.div>

            {/* Location */}
            <motion.div {...inViewAnim(0.22)}>
              <div className="flex items-center gap-2 font-mono text-sm text-black/50 dark:text-warm-white/50">
                <MapPin size={14} className="text-burnt-orange" />
                Lençóis Paulista, SP — Brasil
              </div>
            </motion.div>

            {/* Social links */}
            <motion.div {...inViewAnim(0.25)}>
              <p className="font-mono text-xs tracking-widest text-black/40 dark:text-warm-white/40 mb-3 uppercase">
                REDES SOCIAIS
              </p>
              <div className="flex flex-col gap-3">
                {socials.map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 group"
                  >
                    <div className="w-8 h-8 border-2 border-black dark:border-warm-white flex items-center justify-center group-hover:bg-burnt-orange group-hover:border-burnt-orange transition-all">
                      <Icon size={13} className="text-black dark:text-warm-white group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="font-mono text-xs text-black/40 dark:text-warm-white/40 group-hover:text-burnt-orange transition-colors">
                        {label}
                      </p>
                      <p className="font-mono text-sm text-black dark:text-warm-white group-hover:text-burnt-orange transition-colors">
                        {value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── Right: Form ── */}
          <motion.div {...inViewAnim(0.2)}>
            <p className="font-mono text-xs tracking-widest text-black/40 dark:text-warm-white/40 mb-6 uppercase">
              ENVIAR MENSAGEM
            </p>

            {sent ? (
              <div className="border-2 border-green-600 bg-green-50 dark:bg-green-900/20 p-6">
                <p className="font-mono text-sm text-green-700 dark:text-green-400">
                  ✓ Mensagem enviada com sucesso! Responderei em breve.
                </p>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-mono text-xs text-black/40 dark:text-warm-white/40 block mb-1.5">
                      NOME *
                    </label>
                    <input
                      type="text"
                      name="user_name"
                      required
                      placeholder="Seu nome"
                      className="w-full border-2 border-black dark:border-warm-white bg-cream dark:bg-dark-bg text-black dark:text-warm-white px-4 py-3 font-mono text-sm placeholder:text-black/25 dark:placeholder:text-warm-white/25 focus:outline-none focus:border-burnt-orange transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-mono text-xs text-black/40 dark:text-warm-white/40 block mb-1.5">
                      EMAIL *
                    </label>
                    <input
                      type="email"
                      name="user_email"
                      required
                      placeholder="seu@email.com"
                      className="w-full border-2 border-black dark:border-warm-white bg-cream dark:bg-dark-bg text-black dark:text-warm-white px-4 py-3 font-mono text-sm placeholder:text-black/25 dark:placeholder:text-warm-white/25 focus:outline-none focus:border-burnt-orange transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-mono text-xs text-black/40 dark:text-warm-white/40 block mb-1.5">
                    ASSUNTO
                  </label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Assunto da mensagem"
                    className="w-full border-2 border-black dark:border-warm-white bg-cream dark:bg-dark-bg text-black dark:text-warm-white px-4 py-3 font-mono text-sm placeholder:text-black/25 dark:placeholder:text-warm-white/25 focus:outline-none focus:border-burnt-orange transition-colors"
                  />
                </div>

                <div>
                  <label className="font-mono text-xs text-black/40 dark:text-warm-white/40 block mb-1.5">
                    MENSAGEM *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Descreva seu projeto ou proposta..."
                    className="w-full border-2 border-black dark:border-warm-white bg-cream dark:bg-dark-bg text-black dark:text-warm-white px-4 py-3 font-mono text-sm placeholder:text-black/25 dark:placeholder:text-warm-white/25 focus:outline-none focus:border-burnt-orange transition-colors resize-y"
                  />
                </div>

                {error && (
                  <p className="font-mono text-xs text-red-600 dark:text-red-400">
                    ✕ Erro ao enviar. Tente novamente ou use o e-mail diretamente.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full font-mono text-sm font-bold py-4 bg-black dark:bg-warm-white text-cream dark:text-dark-bg border-2 border-black dark:border-warm-white brutal-shadow-orange hover-brutal transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {sending ? 'ENVIANDO...' : 'ENVIAR MENSAGEM →'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}