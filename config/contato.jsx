/* =========================================================================
   contato.jsx — página Contato
   ========================================================================= */

function ContactLink({ ic, k, v, href, external, onClick }) {
  return (
    <a className="card card--hover contact-link" href={href} onClick={onClick}
       target={external ? "_blank" : undefined} rel={external ? "noopener" : undefined} data-cursor="hot">
      <span className="contact-link__ic"><Icon name={ic} size={22} /></span>
      <div>
        <div className="contact-link__k">{k}</div>
        <div className="contact-link__v">{v}</div>
      </div>
      <span className="contact-link__arrow"><Icon name="arrow-up-right" size={22} /></span>
    </a>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);
  const submit = (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const subject = encodeURIComponent("Contato via portfólio — " + (fd.get("nome") || ""));
    const body = encodeURIComponent(`${fd.get("msg") || ""}\n\n— ${fd.get("nome") || ""} (${fd.get("email") || ""})`);
    window.location.href = `mailto:${LINKS.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };
  return (
    <Reveal delay={120}>
      <form className="contact-form card" onSubmit={submit}>
        <div>
          <div className="eyebrow">Envie uma mensagem</div>
          <p className="mono-label" style={{ marginTop: 8 }}>Abre seu cliente de e-mail preenchido.</p>
        </div>
        <div className="field">
          <label htmlFor="nome">Seu nome</label>
          <input id="nome" name="nome" type="text" placeholder="Como posso te chamar?" required />
        </div>
        <div className="field">
          <label htmlFor="email">Seu e-mail</label>
          <input id="email" name="email" type="email" placeholder="voce@email.com" required />
        </div>
        <div className="field">
          <label htmlFor="msg">Mensagem</label>
          <textarea id="msg" name="msg" rows="4" placeholder="Conte sobre o projeto ou a oportunidade..." required></textarea>
        </div>
        <button className="btn btn--primary" type="submit" data-cursor="hot" style={{ justifyContent: "center" }}>
          {sent ? <React.Fragment><Icon name="check" size={17} /> Abrindo e-mail…</React.Fragment>
                : <React.Fragment><Icon name="send" size={17} /> Enviar mensagem</React.Fragment>}
        </button>
      </form>
    </Reveal>
  );
}

function ContactApp() {
  const [toast, setToast] = useState(false);
  const copyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard?.writeText(LINKS.email);
    setToast(true);
    setTimeout(() => setToast(false), 2200);
  };
  return (
    <Page active="contato.html">
      <PageHero
        crumb="Contato"
        eyebrow="Vamos conversar"
        title={<React.Fragment>Contato<span className="acc">.</span></React.Fragment>}
      />
      <section className="wrap">
        <Reveal>
          <p className="lead" style={{ marginTop: -32, marginBottom: 56, fontSize: 17 }}>
            Estou aberto a novas oportunidades e desafios. Seja um projeto, uma vaga ou
            só uma conversa sobre tecnologia — escolha o canal que preferir.
          </p>
        </Reveal>
        <div className="contact-grid">
          <div className="contact-links">
            <Reveal delay={0}><ContactLink ic="mail" k="E-mail (clique p/ copiar)" v={LINKS.email} href={"mailto:" + LINKS.email} onClick={copyEmail} /></Reveal>
            <Reveal delay={60}><ContactLink ic="phone" k="WhatsApp" v="+55 (14) 99860-4950" href={LINKS.whatsapp} external /></Reveal>
            <Reveal delay={120}><ContactLink ic="linkedin" k="LinkedIn" v="in/gabriel-pomini" href={LINKS.linkedin} external /></Reveal>
            <Reveal delay={180}><ContactLink ic="github" k="GitHub" v="github.com/PominiGa" href={LINKS.github} external /></Reveal>
            <Reveal delay={240}><ContactLink ic="message-circle" k="Discord" v="@kmksc" href={LINKS.discord} external /></Reveal>
          </div>
          <ContactForm />
        </div>
      </section>

      <div className={"copy-toast" + (toast ? " show" : "")}>
        <Icon name="check" size={16} /> E-mail copiado para a área de transferência
      </div>
    </Page>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<ContactApp />);
