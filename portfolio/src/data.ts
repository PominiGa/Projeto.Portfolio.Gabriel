import imgDashboard      from './assets/Dashboard.png';
import imgConcessionaria  from './assets/concessionaria.png';
import imgPortfolio       from './assets/portfolio.png';
import imgSmash           from './assets/Smash.png';
import imgMeuDia          from './assets/MeuDia.png';
import imgRedeOticas      from './assets/rededasoticas.png';
import imgVilanova        from './assets/vilanovaveiculos.png';
import imgSistemaSmash    from './assets/sistemaSmash.png';
import imgConstruelo      from './assets/projetoConstruelo.jpeg';
import imgFarmacia        from './assets/projetofarmacia.png';
import imgCenterpesca     from './assets/centerpesca.png';
import imgTroncal         from './assets/troncal.png';
import curriculo          from './assets/Gabriel Pomini de Souza.pdf';

export const LINKS = {
  github:    'https://github.com/PominiGa',
  linkedin:  'https://www.linkedin.com/in/gabriel-pomini-43aa731ba/',
  whatsapp:  'https://wa.me/5514998604950',
  email:     'gabriel.souza53@hotmail.com',
  curriculo: curriculo as string,
};

export interface Project {
  id: string; num: string; name: string;
  tagline: string; tagline_en: string;
  image: string | null; bg: string; glyph: string;
  year: string; role: string; role_en: string; type: string; type_en: string; stack: string[];
  desc: string; desc_en: string;
  features: string[]; features_en: string[];
  metrics: [string, string][];
  link: string;       // GitHub / repositório público
  site?: string;      // URL do site ao vivo (para manutenção: edite aqui)
  private: boolean;   // true = código fechado
}

export const PROJECTS: Project[] = [
  {
    id: 'concessionaria', num: '01', name: 'Site Concessionária',
    tagline: 'Sistema completo de concessionária com Java Spring Boot e React.',
    tagline_en: 'Full-stack car dealership system built with Java Spring Boot and React.',
    image: imgConcessionaria, bg: 'linear-gradient(135deg,#1F6B4F,#2E9C73)', glyph: '⬡',
    year: '2025', role: 'FullStack', role_en: 'FullStack', type: 'Sistema Web', type_en: 'Web System',
    stack: ['React', 'Java', 'Spring Boot', 'PostgreSQL'],
    desc: 'Sistema completo para concessionária com backend REST em Java e Spring Boot, banco de dados PostgreSQL e interface em React. Gestão de veículos, clientes e negociações em uma plataforma integrada.',
    desc_en: 'Complete car dealership system with a REST backend in Java Spring Boot, PostgreSQL database, and a React frontend. Manages vehicles, customers, and negotiations in an integrated platform.',
    features: ['API REST com Java Spring Boot e banco PostgreSQL','Interface React para catálogo e gestão de veículos','Cadastro de clientes e histórico de negociações','Sistema de busca e filtros por modelo, ano e valor'],
    features_en: ['REST API with Java Spring Boot and PostgreSQL','React interface for vehicle catalog and management','Customer registration and negotiation history','Search system and filters by model, year and price'],
    metrics: [['FullStack', 'Java + React'], ['REST', 'API'], ['PostgreSQL', 'banco de dados']],
    link: 'https://github.com/PominiGa/Projeto-Site-Concessionaria.-java-react-postgresql', private: false,
  },
  {
    id: 'vilanova', num: '02', name: 'Vilanova Veículos',
    tagline: 'Plataforma de estoque de veículos com gestão integrada ao Supabase.',
    tagline_en: 'Vehicle inventory platform with integrated Supabase backend management.',
    image: imgVilanova, bg: 'linear-gradient(135deg,#2B4C8C,#3E6BC4)', glyph: '◗',
    year: '2026', role: 'Frontend', role_en: 'Frontend', type: 'Site Comercial', type_en: 'Commercial Site',
    stack: ['React', 'TypeScript', 'Supabase'],
    desc: 'Site de concessionária com gestão de estoque integrada ao Supabase como backend. Interface moderna para exibição, filtragem e gerenciamento do catálogo de veículos em tempo real.',
    desc_en: 'Car dealership site with Supabase-powered inventory management. Modern interface for browsing, filtering, and managing the vehicle catalog in real time.',
    features: ['Catálogo dinâmico integrado ao Supabase','Filtros por categoria, preço e características','Painel administrativo para gestão do estoque','Design responsivo e performance otimizada'],
    features_en: ['Dynamic catalog integrated with Supabase','Filters by category, price and features','Admin panel for inventory management','Responsive design and optimized performance'],
    metrics: [['React', 'frontend'], ['Supabase', 'backend'], ['TypeScript', 'linguagem']],
    link: '', private: true,
  },
  {
    id: 'rede-oticas', num: '03', name: 'Rede das Óticas',
    tagline: 'Website institucional para rede de óticas com catálogo de produtos.',
    tagline_en: 'Institutional website for an optics chain with a product catalog.',
    image: imgRedeOticas, bg: 'linear-gradient(135deg,#6B3FA0,#8B5CC4)', glyph: '❖',
    year: '2026', role: 'Frontend', role_en: 'Frontend', type: 'Site Institucional', type_en: 'Institutional Site',
    stack: ['React', 'TypeScript'],
    desc: 'Website profissional para rede de óticas com páginas institucionais e catálogo de produtos. Design moderno, responsivo e otimizado para a experiência do cliente final.',
    desc_en: 'Professional website for an optical store chain with institutional pages and product catalog. Modern, responsive design optimized for the end customer experience.',
    features: ['Páginas institucionais e catálogo de produtos','Design responsivo para todos os dispositivos','Navegação intuitiva e carregamento rápido','Identidade visual alinhada com a marca'],
    features_en: ['Institutional pages and product catalog','Responsive design for all devices','Intuitive navigation and fast loading','Visual identity aligned with the brand'],
    metrics: [['React', 'framework'], ['TypeScript', 'linguagem'], ['Responsive', 'design']],
    link: '', private: true,
  },
  {
    id: 'farmacia', num: '04', name: 'Bot Farmácias',
    tagline: 'Bot para WhatsApp que consulta preços de remédios em múltiplas farmácias.',
    tagline_en: 'WhatsApp bot that searches medication prices across multiple pharmacies.',
    image: imgFarmacia, bg: 'linear-gradient(135deg,#1F6B4F,#2E9C73)', glyph: '◓',
    year: '2025', role: 'Backend', role_en: 'Backend', type: 'Bot WhatsApp', type_en: 'WhatsApp Bot',
    stack: ['Java'],
    desc: 'Bot integrado ao WhatsApp que funciona como uma mini-API: o usuário envia o nome de um remédio e o bot busca automaticamente o preço em várias farmácias parceiras, retornando a comparação diretamente na conversa.',
    desc_en: 'WhatsApp-integrated bot that works like a mini-API: the user sends a medication name and the bot automatically searches for prices across multiple partner pharmacies, returning a comparison directly in the chat.',
    features: ['Recebe o nome do remédio via mensagem no WhatsApp','Consulta preços em múltiplas farmácias em tempo real','Retorna comparativo de preços formatado na conversa','Integração com a API do WhatsApp Business em Java puro'],
    features_en: ['Receives medication name via WhatsApp message','Queries prices across multiple pharmacies in real time','Returns a formatted price comparison in the chat','WhatsApp Business API integration in pure Java'],
    metrics: [['Java', 'puro'], ['WhatsApp', 'API'], ['Multi-farm.', 'consulta']],
    link: '', private: true,
  },
  {
    id: 'sistema-construelo', num: '05', name: 'Sistema Construelo',
    tagline: 'ERP personalizado para empresa de construção civil.',
    tagline_en: 'Custom ERP system for a civil construction company.',
    image: imgConstruelo, bg: 'linear-gradient(135deg,#B0892C,#D4AB3E)', glyph: '⬡',
    year: '2025', role: 'FullStack', role_en: 'FullStack', type: 'Sistema ERP', type_en: 'ERP System',
    stack: ['React', 'TypeScript', 'PostgreSQL'],
    desc: 'Sistema ERP desenvolvido para empresa de construção civil. Controle de obras, materiais, funcionários e faturamento em uma plataforma integrada e eficiente com foco em produtividade.',
    desc_en: 'ERP system built for a civil construction company. Manages projects, materials, staff, and billing in an integrated and efficient platform focused on productivity.',
    features: ['Controle de obras e etapas de construção','Gestão de materiais e fornecedores','Controle de equipes e alocação de recursos','Relatórios financeiros e de progresso'],
    features_en: ['Construction project and phase tracking','Materials and supplier management','Team management and resource allocation','Financial reports and progress tracking'],
    metrics: [['ERP', 'sistema'], ['React', 'frontend'], ['PostgreSQL', 'banco']],
    link: '', private: true,
  },
  {
    id: 'dashboard-covid', num: '06', name: 'Dashboard COVID',
    tagline: 'Dashboard interativo de análise de dados da pandemia de COVID-19.',
    tagline_en: 'Interactive dashboard for analyzing COVID-19 pandemic data.',
    image: imgDashboard, bg: 'linear-gradient(135deg,#C2521C,#E0732E)', glyph: '◓',
    year: '2025', role: 'Desenvolvedor', role_en: 'Developer', type: 'Dashboard', type_en: 'Dashboard',
    stack: ['Python', 'Pandas', 'Streamlit'],
    desc: 'Dashboard desenvolvido como projeto de faculdade para análise visual dos dados da pandemia de COVID-19. Gráficos interativos exibindo casos, óbitos e evolução temporal por região.',
    desc_en: 'Dashboard developed as a college project for visual analysis of COVID-19 pandemic data. Interactive charts showing cases, deaths, and temporal evolution by region.',
    features: ['Gráficos interativos de casos e óbitos por região','Análise temporal com filtros por período','Mapas e visualizações comparativas por estado','Dados atualizados com pipelines Python e Pandas'],
    features_en: ['Interactive charts of cases and deaths by region','Temporal analysis with period filters','Comparative state visualizations and heatmaps','Data pipelines built with Python and Pandas'],
    metrics: [['Python', 'linguagem'], ['Streamlit', 'dashboard'], ['Pandas', 'análise']],
    link: 'https://github.com/PominiGa/Projeto-Faculdade-Unisagrado', private: false,
  },
  {
    id: 'smash-burguer', num: '07', name: 'Smash Burguer LP',
    tagline: 'Landing page moderna para hamburgueria com cardápio interativo.',
    tagline_en: 'Modern landing page for a burger restaurant with an interactive menu.',
    image: imgSmash, bg: 'linear-gradient(135deg,#B0892C,#D4AB3E)', glyph: '⟁',
    year: '2025', role: 'Frontend', role_en: 'Frontend', type: 'Landing Page', type_en: 'Landing Page',
    stack: ['HTML', 'CSS', 'JavaScript', 'TypeScript'],
    desc: 'Landing page para a Smash Burguer LP com seções de cardápio, localização e contato. Interface dinâmica com animações e design responsivo focado na conversão e experiência do cliente.',
    desc_en: 'Landing page for Smash Burguer LP with menu, location, and contact sections. Dynamic interface with animations and responsive design focused on conversion and customer experience.',
    features: ['Cardápio interativo com categorias e preços','Animações e transições suaves','Seções de contato e localização integradas','Design responsivo e mobile-first'],
    features_en: ['Interactive menu with categories and prices','Smooth animations and transitions','Integrated contact and location sections','Responsive and mobile-first design'],
    metrics: [['HTML/CSS', 'base'], ['JavaScript', 'dinâmico'], ['Responsive', 'design']],
    link: 'https://github.com/PominiGa/Smash.Burguer', private: false,
  },
  {
    id: 'sistema-smash', num: '08', name: 'Sistema Smash',
    tagline: 'Sistema desktop de gestão interna para a Smash Burguer.',
    tagline_en: 'Desktop management system for Smash Burguer internal operations.',
    image: imgSistemaSmash, bg: 'linear-gradient(135deg,#2B4C8C,#3E6BC4)', glyph: '◗',
    year: '2026', role: 'Backend', role_en: 'Backend', type: 'Sistema Desktop', type_en: 'Desktop System',
    stack: ['Java', 'Swing', 'MySQL'],
    desc: 'Sistema de gerenciamento interno para a hamburgueria Smash Burguer. Interface desktop Java Swing com controle de pedidos, estoque e caixa, integrado ao banco MySQL.',
    desc_en: 'Internal management system for the Smash Burguer restaurant. Java Swing desktop interface with order control, inventory, and cashier management, integrated with MySQL.',
    features: ['Gestão de pedidos e controle de caixa','Controle de estoque com alertas de reposição','Cadastro e histórico de clientes','Relatórios de vendas e faturamento diário'],
    features_en: ['Order management and cash register control','Inventory tracking with restock alerts','Customer registration and history','Daily sales and revenue reports'],
    metrics: [['Java', 'linguagem'], ['Swing', 'interface'], ['MySQL', 'banco']],
    link: '', private: true,
  },
  {
    id: 'meu-dia', num: '09', name: 'Meu Dia X',
    tagline: 'Aplicativo web para organização e acompanhamento de atividades diárias.',
    tagline_en: 'Web app for organizing and tracking daily activities.',
    image: imgMeuDia, bg: 'linear-gradient(135deg,#1F6B4F,#2E9C73)', glyph: '◗',
    year: '2025', role: 'Frontend', role_en: 'Frontend', type: 'Web App', type_en: 'Web App',
    stack: ['HTML', 'CSS', 'JavaScript', 'TypeScript'],
    desc: 'Aplicativo web para organização de atividades do dia a dia. Interface simples e intuitiva para registrar e acompanhar tarefas, compromissos e metas com persistência local.',
    desc_en: 'Web application for organizing daily activities. Simple and intuitive interface to register and track tasks, appointments, and daily goals with local persistence.',
    features: ['Registro e organização de atividades diárias','Interface limpa e fácil de usar','Persistência de dados via localStorage','Design responsivo para mobile e desktop'],
    features_en: ['Daily activity registration and organization','Clean and easy-to-use interface','Data persistence via localStorage','Responsive design for mobile and desktop'],
    metrics: [['JavaScript', 'linguagem'], ['TypeScript', 'tipagem'], ['LocalStorage', 'dados']],
    link: 'https://github.com/PominiGa/Sim-aceito', site: 'https://meudiax.vercel.app', private: false,
  },
  {
    id: 'centerpesca', num: '10', name: 'Centerpesca',
    tagline: 'Site de apresentação institucional para empresa do ramo de pesca.',
    tagline_en: 'Institutional presentation website for a fishing industry company.',
    image: imgCenterpesca, bg: 'linear-gradient(135deg,#1F6B4F,#2E9C73)', glyph: '◓',
    year: '2025', role: 'Frontend', role_en: 'Frontend', type: 'Site Institucional', type_en: 'Institutional Site',
    stack: ['React'],
    desc: 'Site de apresentação desenvolvido em React para a Centerpesca. Página institucional moderna e responsiva com seções de serviços, sobre a empresa e contato.',
    desc_en: 'Presentation website built with React for Centerpesca. Modern and responsive institutional page with sections for services, about the company, and contact.',
    features: [
      'Página institucional moderna e responsiva',
      'Seções de apresentação da empresa e serviços',
      'Design alinhado com a identidade visual da marca',
      'Otimizado para diferentes dispositivos',
    ],
    features_en: [
      'Modern and responsive institutional page',
      'Company and services presentation sections',
      'Design aligned with the brand visual identity',
      'Optimized for different devices',
    ],
    metrics: [['React', 'framework'], ['Responsive', 'design'], ['Institucional', 'site']],
    link: '', private: true,
  },
  {
    id: 'troncal', num: '11', name: 'Troncal',
    tagline: 'Site institucional moderno desenvolvido em React.',
    tagline_en: 'Modern institutional website built with React.',
    image: imgTroncal, bg: 'linear-gradient(135deg,#2B4C8C,#3E6BC4)', glyph: '⬡',
    year: '2025', role: 'Frontend', role_en: 'Frontend', type: 'Site Institucional', type_en: 'Institutional Site',
    stack: ['React'],
    desc: 'Site institucional desenvolvido em React. Design responsivo e moderno com foco na apresentação da empresa e experiência do usuário.',
    desc_en: 'Institutional website built with React. Responsive and modern design focused on company presentation and user experience.',
    features: [
      'Página institucional responsiva',
      'Design moderno alinhado com a marca',
      'Otimizado para diferentes dispositivos',
      'Publicado e disponível no ar',
    ],
    features_en: [
      'Responsive institutional page',
      'Modern design aligned with the brand',
      'Optimized for different devices',
      'Published and live online',
    ],
    metrics: [['React', 'framework'], ['Responsive', 'design'], ['Vercel', 'deploy']],
    link: '', site: 'https://troncalmotors.com', private: true,
  },
  {
    id: 'portfolio', num: '12', name: 'Portfólio',
    tagline: 'Este portfólio, construído com React, TypeScript e design retrô-minimalista.',
    tagline_en: 'This portfolio, built with React, TypeScript and a retro-minimalist design.',
    image: imgPortfolio, bg: 'linear-gradient(135deg,#6B3FA0,#8B5CC4)', glyph: '❖',
    year: '2025', role: 'Frontend', role_en: 'Frontend', type: 'Portfólio', type_en: 'Portfolio',
    stack: ['React', 'TypeScript', 'Framer Motion'],
    desc: 'Este portfólio, construído com React e TypeScript. Design retrô-minimalista com JetBrains Mono, dark mode persistente, animações com Framer Motion e CSS custom properties.',
    desc_en: 'This portfolio, built with React and TypeScript. Retro-minimalist design with JetBrains Mono, persistent dark mode, animations with Framer Motion and CSS custom properties.',
    features: ['Design retrô-minimalista com CSS custom properties','Dark/light mode persistente com localStorage','Animações suaves com Framer Motion','Otimizado para Vercel com SEO básico'],
    features_en: ['Retro-minimalist design with CSS custom properties','Persistent dark/light mode with localStorage','Smooth animations with Framer Motion','Optimized for Vercel with basic SEO'],
    metrics: [['React', 'framework'], ['TypeScript', 'linguagem'], ['Framer', 'animações']],
    link: 'https://github.com/PominiGa/Projeto.Portfolio.Gabriel', private: false,
  },
];

export interface SkillItem { name: string; lvl: number; }
export interface SkillCat { cat: string; icon: string; items: SkillItem[]; }

export const SKILLS: SkillCat[] = [
  {
    cat: 'Backend', icon: 'server',
    items: [
      { name: 'Java', lvl: 4 }, { name: 'Spring Boot', lvl: 4 },
      { name: 'C#', lvl: 3 }, { name: 'Node.js', lvl: 3 }, { name: 'Python', lvl: 3 },
    ],
  },
  {
    cat: 'Frontend', icon: 'monitor',
    items: [
      { name: 'React', lvl: 4 }, { name: 'TypeScript', lvl: 4 },
      { name: 'JavaScript', lvl: 4 }, { name: 'HTML / CSS', lvl: 4 },
    ],
  },
  {
    cat: 'Dados & Infra', icon: 'database',
    items: [
      { name: 'PostgreSQL', lvl: 4 }, { name: 'MySQL', lvl: 3 },
      { name: 'MongoDB', lvl: 2 }, { name: 'Linux', lvl: 3 },
    ],
  },
  {
    cat: 'Ferramentas', icon: 'wrench',
    items: [
      { name: 'Git / GitHub', lvl: 5 }, { name: 'Excel / Sheets', lvl: 4 },
      { name: 'Supabase', lvl: 3 }, { name: 'Docker', lvl: 2 },
    ],
  },
];

// ─── Ferramentas adicionais (tags na página Skills) ──────────────────────────
// Para adicionar: coloque uma nova string dentro do array, separada por vírgula.
// Exemplo: 'Postman', 'Figma', 'Firebase'
export const TOOLS_EXTRA = [
  'Automação (Python)',
  'Bots WhatsApp',
  'Excel / Google Sheets',
  'REST APIs',
  'JWT',
  'Supabase',
  'Cybersecurity (estudo)',
];

export const TECH_GROUPS = [
  { title: 'Linguagens',              items: ['Java', 'JavaScript', 'TypeScript', 'Python', 'C#', 'PHP', 'HTML5', 'CSS3'] },
  { title: 'Frameworks & Libs',       items: ['Spring Boot', 'React', 'Laravel', 'Tailwind CSS'] },
  { title: 'Bancos de Dados',         items: ['PostgreSQL', 'MySQL', 'MongoDB'] },
  { title: 'DevOps & Ferramentas',    items: ['Git', 'GitHub', 'Linux', 'Docker'] },
  { title: 'IDEs & Ambiente',         items: ['VS Code', 'IntelliJ IDEA', 'DataGrip', 'Insomnia'] },
];