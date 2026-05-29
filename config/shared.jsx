/* =========================================================================
   shared.jsx — componentes reutilizados em todas as páginas
   Exporta para window ao final.
   ========================================================================= */
const { useState, useEffect, useRef, useCallback } = React;

/* ---- Lucide icon ----------------------------------------------------- */
function Icon({ name, size = 18, stroke = 2, className = "", style = {} }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const BRAND = {
      github: '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>',
      linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>',
    };
    if (BRAND[name]) {
      el.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round">${BRAND[name]}</svg>`;
      return;
    }
    if (window.lucide && window.lucide.icons) {
      // build svg manually from icon data for React-safety
      const key = name.split("-").map(s => s[0].toUpperCase() + s.slice(1)).join("");
      const data = window.lucide.icons[key] || window.lucide.icons[name];
      // lucide UMD: data may be an IconNode array ([[tag,attrs],...]) OR
      // an object with `.toSvg()`; normalise both.
      let nodes = null;
      if (Array.isArray(data)) {
        // could be [[tag,attrs],...] OR ["svg", attrs, children]
        if (Array.isArray(data[0])) nodes = data;
        else if (Array.isArray(data[2])) nodes = data[2];
      }
      if (nodes) {
        const inner = nodes.map(([tag, attrs]) => {
          const a = Object.entries(attrs || {})
            .filter(([k]) => k !== "key")
            .map(([k, v]) => `${k}="${v}"`).join(" ");
          return `<${tag} ${a} />`;
        }).join("");
        el.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round">${inner}</svg>`;
      }
    }
  }, [name, size, stroke]);
  return <span ref={ref} className={"ic " + className} style={{ display: "inline-flex", width: size, height: size, ...style }} />;
}

/* ---- Tech logos (Devicon) -------------------------------------------- */
const TECH_SLUG = {
  "java": "java", "javascript": "javascript", "typescript": "typescript",
  "html5": "html5", "css3": "css3", "react": "react",
  "spring boot": "spring", "spring": "spring",
  "tailwind css": "tailwindcss", "tailwind": "tailwindcss",
  "postgresql": "postgresql", "mysql": "mysql", "redis": "redis",
  "linux": "linux", "windows": "windows11",
  "docker": "docker", "git": "git", "git / github": "git", "github": "github",
  "rabbitmq": "rabbitmq", "maven": "apachemaven", "postman": "postman",
  "datagrip": "datagrip", "vs code": "vscode", "intellij": "intellij", "intellij idea": "intellij",
  "stripe": "stripe", "chart.js": "chartjs", "junit": "junit", "insomnia": "insomnia",
};
// logos that are dark-on-transparent → invert in dark theme
const TECH_INVERT_DARK = new Set(["github", "java"]);

function techUrl(slug, variant) {
  return `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${slug}/${slug}-${variant}.svg`;
}

const TECH_VARIANTS = ["original", "plain", "original-wordmark", "plain-wordmark"];

// techs Devicon doesn't ship → use Simple Icons (brand-colored)
const TECH_OVERRIDE = {
  "maven": "https://cdn.simpleicons.org/apachemaven/C71A36",
  "stripe": "https://cdn.simpleicons.org/stripe/635BFF",
  "jwt": "https://cdn.simpleicons.org/jsonwebtokens/D63AFF",
};

function TechLogo({ name, size = 40 }) {
  const key = name.toLowerCase();
  const slug = TECH_SLUG[key];
  const override = TECH_OVERRIDE[key];
  const [vi, setVi] = useState(0);
  const [err, setErr] = useState(false);
  if (override) {
    return err
      ? <span className="tech-fallback" style={{ width: size, height: size, fontSize: size * 0.34 }}>{name.slice(0, 2).toUpperCase()}</span>
      : <img className="tech-img" src={override} alt={name} width={size} height={size} onError={() => setErr(true)} draggable="false" />;
  }
  if (!slug || err) {
    return <span className="tech-fallback" style={{ width: size, height: size, fontSize: size * 0.34 }}>{name.slice(0, 2).toUpperCase()}</span>;
  }
  return (
    <img className="tech-img" src={techUrl(slug, TECH_VARIANTS[vi])} alt={name} width={size} height={size}
         onError={() => { if (vi < TECH_VARIANTS.length - 1) setVi(vi + 1); else setErr(true); }} draggable="false" />
  );
}

window.TechLogo = TechLogo;
window.TECH_SLUG = TECH_SLUG;

/* ---- Theme ----------------------------------------------------------- */
function useTheme() {
  const [theme, setTheme] = useState(() => localStorage.getItem("gp-theme") || "light");
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("gp-theme", theme);
  }, [theme]);
  return [theme, () => setTheme(t => (t === "light" ? "dark" : "light"))];
}

function ThemeToggle({ theme, onToggle }) {
  return (
    <button className="tgl" onClick={onToggle} aria-label="Alternar tema" data-cursor="hot">
      <span className="tgl__knob"><Icon name={theme === "light" ? "sun" : "moon"} size={13} /></span>
    </button>
  );
}

/* ---- Navbar ---------------------------------------------------------- */
const NAV = [
  { n: "01", label: "Home", href: "index.html" },
  { n: "02", label: "Sobre", href: "sobre.html" },
  { n: "03", label: "Projetos", href: "projetos.html" },
  { n: "04", label: "Skills", href: "skills.html" },
  { n: "05", label: "Contato", href: "contato.html" },
];

function Nav({ active }) {
  const [theme, toggle] = useTheme();
  const [open, setOpen] = useState(false);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; }, [open]);
  return (
    <React.Fragment>
      <nav className="nav">
        <div className="nav__inner">
          <a className="brand" href="index.html" data-cursor="hot">
            <span className="brand__mark">GP</span>
            <span>Gabriel Pomini<span className="brand__sub"> / dev</span></span>
          </a>
          <div className="nav__links">
            {NAV.map(l => (
              <a key={l.href} href={l.href} className={"nav__link" + (active === l.href ? " is-active" : "")} data-cursor="hot">
                <span className="nav__num">{l.n}</span>{l.label}
              </a>
            ))}
          </div>
          <div className="nav__right">
            <ThemeToggle theme={theme} onToggle={toggle} />
            <button className="nav__burger" onClick={() => setOpen(o => !o)} aria-label="Menu" data-cursor="hot">
              <Icon name={open ? "x" : "menu"} size={20} />
            </button>
          </div>
        </div>
      </nav>
      <div className={"mmenu" + (open ? " is-open" : "")}>
        {NAV.map(l => (
          <a key={l.href} href={l.href} className={active === l.href ? "acc" : ""}>
            <span className="nav__num">{l.n}</span>{l.label}
          </a>
        ))}
      </div>
    </React.Fragment>
  );
}

/* ---- Footer ---------------------------------------------------------- */
const LINKS = {
  github: "https://github.com/PominiGa",
  linkedin: "https://www.linkedin.com/in/gabriel-pomini-43aa731ba/",
  whatsapp: "https://wa.me/5514998604950",
  discord: "https://discord.com/kmksc",
  instagram: "#",
  email: "gabriel.souza53@hotmail.com",
};

function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__grid">
          <div className="footer__brand">
            <h3>Gabriel Pomini<span className="acc">.</span></h3>
            <p className="lead" style={{ fontSize: 14 }}>
              Desenvolvedor FullStack focado em backend com Java &amp; Spring Boot.
              Construindo software performático em Lençóis Paulista — SP.
            </p>
            <div className="badge" style={{ marginTop: 18 }}>
              <span className="dot-live" /> Disponível para oportunidades
            </div>
          </div>
          <div className="footer__col">
            <h4>Navegação</h4>
            {NAV.map(l => <a key={l.href} href={l.href}>{l.label}</a>)}
          </div>
          <div className="footer__col">
            <h4>Redes</h4>
            <a href={LINKS.github} target="_blank" rel="noopener">GitHub</a>
            <a href={LINKS.linkedin} target="_blank" rel="noopener">LinkedIn</a>
            <a href={LINKS.whatsapp} target="_blank" rel="noopener">WhatsApp</a>
            <a href={LINKS.discord} target="_blank" rel="noopener">Discord</a>
          </div>
          <div className="footer__col">
            <h4>Contato direto</h4>
            <a href={"mailto:" + LINKS.email}>{LINKS.email}</a>
            <a href={LINKS.whatsapp} target="_blank" rel="noopener">+55 (14) 99860-4950</a>
            <div className="soc" style={{ marginTop: 16 }}>
              <a href={LINKS.github} target="_blank" rel="noopener" data-cursor="hot"><Icon name="github" /></a>
              <a href={LINKS.linkedin} target="_blank" rel="noopener" data-cursor="hot"><Icon name="linkedin" /></a>
              <a href={LINKS.whatsapp} target="_blank" rel="noopener" data-cursor="hot"><Icon name="phone" /></a>
            </div>
          </div>
        </div>
        <div className="footer__bar">
          <span>© {new Date().getFullYear()} Gabriel Pomini de Souza. Feito com café e código.</span>
          <span>BUILT WITH · REACT · TYPESCRIPT · TAILWIND</span>
        </div>
      </div>
    </footer>
  );
}

/* ---- Reveal on scroll ------------------------------------------------ */
function Reveal({ children, delay = 0, as = "div", className = "", style = {} }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const show = () => el.classList.add("in");
    // immediate check: if already in/above viewport, reveal now
    const check = () => {
      const r = el.getBoundingClientRect();
      if (r.top < (window.innerHeight || 800) * 0.96) { show(); return true; }
      return false;
    };
    if (check()) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { show(); io.unobserve(el); } });
    }, { threshold: 0.08, rootMargin: "0px 0px -6% 0px" });
    io.observe(el);
    const onScroll = () => { if (check()) { window.removeEventListener("scroll", onScroll); io.disconnect(); } };
    window.addEventListener("scroll", onScroll, { passive: true });
    // safety net: never leave content invisible
    const t = setTimeout(show, 1200);
    return () => { io.disconnect(); window.removeEventListener("scroll", onScroll); clearTimeout(t); };
  }, []);
  const Tag = as;
  return <Tag ref={ref} className={"reveal " + className} style={{ transitionDelay: delay + "ms", ...style }}>{children}</Tag>;
}

/* ---- Custom cursor --------------------------------------------------- */
function CustomCursor() {
  useEffect(() => {
    if (window.matchMedia("(pointer:coarse)").matches) return;
    const ring = document.createElement("div"); ring.className = "cursor-ring";
    const dot = document.createElement("div"); dot.className = "cursor-dot";
    document.body.append(ring, dot);
    let rx = 0, ry = 0, dx = 0, dy = 0;
    const move = (e) => { dx = e.clientX; dy = e.clientY; dot.style.transform = `translate(${dx}px,${dy}px) translate(-50%,-50%)`; };
    const raf = () => { rx += (dx - rx) * 0.18; ry += (dy - ry) * 0.18; ring.style.transform = `translate(${rx}px,${ry}px) translate(-50%,-50%)`; requestAnimationFrame(raf); };
    window.addEventListener("mousemove", move);
    raf();
    const over = (e) => { if (e.target.closest("a,button,[data-cursor='hot'],input,textarea")) ring.classList.add("hot"); };
    const out = (e) => { if (e.target.closest("a,button,[data-cursor='hot'],input,textarea")) ring.classList.remove("hot"); };
    document.addEventListener("mouseover", over);
    document.addEventListener("mouseout", out);
    return () => { window.removeEventListener("mousemove", move); ring.remove(); dot.remove(); };
  }, []);
  return null;
}

/* ---- Section header -------------------------------------------------- */
function SecHead({ num, eyebrow, title, desc }) {
  return (
    <div className="sec-head">
      <Reveal><div className="eyebrow">{eyebrow}</div></Reveal>
      <Reveal delay={60}><h2 className="h2">{title}</h2></Reveal>
      {desc && <Reveal delay={120}><p className="lead">{desc}</p></Reveal>}
    </div>
  );
}

/* ---- Page hero (subpáginas) ----------------------------------------- */
function PageHero({ crumb, title, eyebrow }) {
  return (
    <section className="page-hero">
      <div className="wrap">
        <div className="page-hero__inner">
          <Reveal><div className="page-hero__crumb"><a href="index.html">Home</a> <span>/</span> {crumb}</div></Reveal>
          <Reveal delay={60}><div className="eyebrow">{eyebrow}</div></Reveal>
          <Reveal delay={120}><h1>{title}</h1></Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---- Page scaffold --------------------------------------------------- */
function Page({ active, children }) {
  return (
    <React.Fragment>
      <CustomCursor />
      <Nav active={active} />
      <main className="page">{children}</main>
      <Footer />
    </React.Fragment>
  );
}

Object.assign(window, { Icon, TechLogo, useTheme, ThemeToggle, Nav, Footer, Reveal, CustomCursor, SecHead, Page, PageHero, NAV, LINKS });
