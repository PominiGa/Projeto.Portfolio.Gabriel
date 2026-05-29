import React, { useState, useRef } from 'react';
import { Mail, Phone, Linkedin, Github, MessageCircle, ArrowUpRight, Send, Check } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { Reveal } from '../shared/Reveal';
import { LINKS } from '../../data';

const CONTACT_LINKS = [
  { ic: Mail,          k: 'E-mail',   v: LINKS.email,             href: `mailto:${LINKS.email}`,  external: false, copyEmail: true },
  { ic: Phone,         k: 'WhatsApp', v: '+55 (14) 99860-4950',   href: LINKS.whatsapp,            external: true,  copyEmail: false },
  { ic: Linkedin,      k: 'LinkedIn', v: 'in/gabriel-pomini',     href: LINKS.linkedin,            external: true,  copyEmail: false },
  { ic: Github,        k: 'GitHub',   v: 'github.com/PominiGa',   href: LINKS.github,              external: true,  copyEmail: false },
  { ic: MessageCircle, k: 'Discord',  v: '@kmksc',                href: 'https://discord.com/kmksc', external: true, copyEmail: false },
];

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const [toast, setToast] = useState(false);

  const copyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard?.writeText(LINKS.email);
    setToast(true);
    setTimeout(() => setToast(false), 2200);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setSending(true); setError(false);
    emailjs
      .sendForm('service_sj975ya', 'template_4ebn745', formRef.current, { publicKey: '9ynEPhoxF7tfvqx-s' })
      .then(() => { setSent(true); formRef.current?.reset(); })
      .catch(() => setError(true))
      .finally(() => setSending(false));
  };

  return (
    <section id="contato" style={{ paddingTop: 'clamp(64px,8vw,120px)' }}>
      <div className="page-hero">
        <div className="wrap">
          <Reveal><div className="page-hero__crumb">Home / Contato</div></Reveal>
          <Reveal delay={60}><div className="eyebrow">Vamos conversar</div></Reveal>
          <Reveal delay={120}><h1>Contato<span className="acc">.</span></h1></Reveal>
        </div>
      </div>

      <section className="wrap">
        <Reveal>
          <p className="lead" style={{ marginTop: -32, marginBottom: 56, fontSize: 17 }}>
            Estou aberto a novas oportunidades e desafios. Seja um projeto, uma vaga ou
            só uma conversa sobre tecnologia — escolha o canal que preferir.
          </p>
        </Reveal>

        <div className="contact-grid">
          {/* Links */}
          <div className="contact-links">
            {CONTACT_LINKS.map(({ ic: Ic, k, v, href, external, copyEmail: isCopy }) => (
              <Reveal key={k}>
                <a
                  className="card card--hover contact-link"
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener' : undefined}
                  onClick={isCopy ? copyEmail : undefined}
                >
                  <span className="contact-link__ic"><Ic size={22} /></span>
                  <div>
                    <div className="contact-link__k">{k}{isCopy && ' · clique p/ copiar'}</div>
                    <div className="contact-link__v">{v}</div>
                  </div>
                  <span className="contact-link__arrow"><ArrowUpRight size={22} /></span>
                </a>
              </Reveal>
            ))}
          </div>

          {/* Form */}
          <Reveal delay={120}>
            {sent ? (
              <div className="card contact-form" style={{ justifyContent: 'center', alignItems: 'center', gap: 16, textAlign: 'center' }}>
                <Check size={40} style={{ color: 'var(--accent)' }} />
                <p style={{ fontWeight: 700, fontSize: 16 }}>Mensagem enviada com sucesso!</p>
                <p className="mono-label">Responderei em breve.</p>
                <button className="btn" onClick={() => setSent(false)}>Enviar outra</button>
              </div>
            ) : (
              <form className="contact-form card" ref={formRef} onSubmit={handleSubmit}>
                <div>
                  <div className="eyebrow">Envie uma mensagem</div>
                  <p className="mono-label" style={{ marginTop: 8 }}>Responderei pelo e-mail fornecido.</p>
                </div>

                <div className="field">
                  <label htmlFor="user_name">Seu nome</label>
                  <input id="user_name" name="user_name" type="text" placeholder="Como posso te chamar?" required />
                </div>
                <div className="field">
                  <label htmlFor="user_email">Seu e-mail</label>
                  <input id="user_email" name="user_email" type="email" placeholder="voce@email.com" required />
                </div>
                <div className="field">
                  <label htmlFor="message">Mensagem</label>
                  <textarea id="message" name="message" rows={4} placeholder="Conte sobre o projeto ou a oportunidade..." required />
                </div>

                {error && (
                  <p style={{ color: 'var(--accent)', fontSize: 13 }}>
                    Erro ao enviar. Tente novamente ou use o e-mail diretamente.
                  </p>
                )}

                <button className="btn btn--primary" type="submit" disabled={sending}
                  style={{ justifyContent: 'center', opacity: sending ? 0.7 : 1 }}>
                  {sending
                    ? 'Enviando…'
                    : <><Send size={17} /> Enviar mensagem</>}
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </section>

      {/* Copy toast */}
      <div className={'copy-toast' + (toast ? ' show' : '')}>
        <Check size={16} /> E-mail copiado para a área de transferência
      </div>
    </section>
  );
}