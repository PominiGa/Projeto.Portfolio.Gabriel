import React, { useState, useRef } from 'react';
import { Mail, Phone, Linkedin, Github, MessageCircle, ArrowUpRight, Send, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { Reveal } from '../shared/Reveal';
import { LINKS } from '../../data';
import { useLanguage } from '../../context/LanguageContext';

export default function Contact() {
  const { T } = useLanguage();
  const tc = T.contact;
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

  const CONTACT_LINKS = [
    { ic: Mail,          k: tc.email_label + ' · ' + tc.email_hint, v: LINKS.email,           href: `mailto:${LINKS.email}`,     external: false, copyEmail: true  },
    { ic: Phone,         k: tc.whatsapp_label,  v: '+55 (14) 99860-4950',  href: LINKS.whatsapp,              external: true,  copyEmail: false },
    { ic: Linkedin,      k: tc.linkedin_label,  v: 'in/gabriel-pomini',    href: LINKS.linkedin,              external: true,  copyEmail: false },
    { ic: Github,        k: tc.github_label,    v: 'github.com/PominiGa',  href: LINKS.github,                external: true,  copyEmail: false },
    { ic: MessageCircle, k: tc.discord_label,   v: '@kmksc',               href: 'https://discord.com/kmksc', external: true,  copyEmail: false },
  ];

  return (
    <section>
      <div className="page-hero">
        <div className="wrap">
          <Reveal><div className="page-hero__crumb"><Link to="/">{T.nav.home}</Link> <span>/</span> {tc.crumb}</div></Reveal>
          <Reveal delay={60}><div className="eyebrow">{tc.eyebrow}</div></Reveal>
          <Reveal delay={120}><h1>{tc.title}<span className="acc">.</span></h1></Reveal>
        </div>
      </div>

      <section className="wrap">
        <Reveal>
          <p className="lead" style={{ marginTop: -32, marginBottom: 56, fontSize: 17 }}>{tc.lead}</p>
        </Reveal>

        <div className="contact-grid">
          <div className="contact-links">
            {CONTACT_LINKS.map(({ ic: Ic, k, v, href, external, copyEmail: isCopy }) => (
              <Reveal key={k}>
                <a className="card card--hover contact-link" href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener' : undefined}
                  onClick={isCopy ? copyEmail : undefined}>
                  <span className="contact-link__ic"><Ic size={22} /></span>
                  <div>
                    <div className="contact-link__k">{k}</div>
                    <div className="contact-link__v">{v}</div>
                  </div>
                  <span className="contact-link__arrow"><ArrowUpRight size={22} /></span>
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            {sent ? (
              <div className="card contact-form" style={{ justifyContent: 'center', alignItems: 'center', gap: 16, textAlign: 'center' }}>
                <Check size={40} style={{ color: 'var(--accent)' }} />
                <p style={{ fontWeight: 700, fontSize: 16 }}>{tc.sent_title}</p>
                <p className="mono-label">{tc.sent_sub}</p>
                <button className="btn" onClick={() => setSent(false)}>{tc.send_another}</button>
              </div>
            ) : (
              <form className="contact-form card" ref={formRef} onSubmit={handleSubmit}>
                <div>
                  <div className="eyebrow">{tc.form_eyebrow}</div>
                  <p className="mono-label" style={{ marginTop: 8 }}>{tc.form_hint}</p>
                </div>
                <div className="field">
                  <label htmlFor="user_name">{tc.field_name}</label>
                  <input id="user_name" name="user_name" type="text" placeholder={tc.placeholder_name} required />
                </div>
                <div className="field">
                  <label htmlFor="user_email">{tc.field_email}</label>
                  <input id="user_email" name="user_email" type="email" placeholder={tc.placeholder_email} required />
                </div>
                <div className="field">
                  <label htmlFor="message">{tc.field_msg}</label>
                  <textarea id="message" name="message" rows={4} placeholder={tc.placeholder_msg} required />
                </div>
                {error && <p style={{ color: 'var(--accent)', fontSize: 13 }}>{tc.error_msg}</p>}
                <button className="btn btn--primary" type="submit" disabled={sending}
                  style={{ justifyContent: 'center', opacity: sending ? 0.7 : 1 }}>
                  {sending ? tc.btn_sending : <><Send size={17} /> {tc.btn_send}</>}
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </section>

      <div className={'copy-toast' + (toast ? ' show' : '')}>
        <Check size={16} /> {tc.toast}
      </div>
    </section>
  );
}