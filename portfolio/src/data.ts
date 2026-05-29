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
import curriculo          from './assets/Gabriel Pomini de Souza.pdf';

export const LINKS = {
  github:    'https://github.com/PominiGa',
  linkedin:  'https://www.linkedin.com/in/gabriel-pomini-43aa731ba/',
  whatsapp:  'https://wa.me/5514998604950',
  email:     'gabriel.souza53@hotmail.com',
  curriculo: curriculo as string,
};

export interface Project {
  id: string; num: string; name: string; tagline: string;
  image: string | null; bg: string; glyph: string;
  year: string; role: string; type: string; stack: string[];
  desc: string; features: string[]; metrics: [string, string][];
  link: string; private: boolean;
}

export const PROJECTS: Project[] = [
  {
    id: 'concessionaria', num: '01', name: 'Site Concessionária',
    tagline: 'Sistema completo de concessionária com Java Spring Boot e React.',
    image: imgConcessionaria, bg: 'linear-gradient(135deg,#1F6B4F,#2E9C73)', glyph: '⬡',
    year: '2025', role: 'FullStack', type: 'Sistema Web',
    stack: ['React', 'Java', 'Spring Boot', 'PostgreSQL'],
    desc: 'Sistema completo para concessionária com backend REST em Java e Spring Boot, banco de dados PostgreSQL e interface em React. Gestão de veículos, clientes e negociações em uma plataforma integrada.',
    features: [
      'API REST com Java Spring Boot e banco PostgreSQL',
      'Interface React para catálogo e gestão de veículos',
      'Cadastro de clientes e histórico de negociações',
      'Sistema de busca e filtros por modelo, ano e valor',
    ],
    metrics: [['FullStack', 'Java + React'], ['REST', 'API'], ['PostgreSQL', 'banco de dados']],
    link: 'https://github.com/PominiGa/Projeto-Site-Concessionaria.-java-react-postgresql',
    private: false,
  },
  {
    id: 'vilanova', num: '02', name: 'Vilanova Veículos',
    tagline: 'Plataforma de estoque de veículos com gestão integrada ao Supabase.',
    image: imgVilanova, bg: 'linear-gradient(135deg,#2B4C8C,#3E6BC4)', glyph: '◗',
    year: '2026', role: 'Frontend', type: 'Site Comercial',
    stack: ['React', 'TypeScript', 'Supabase'],
    desc: 'Site de concessionária com gestão de estoque integrada ao Supabase como backend. Interface moderna para exibição, filtragem e gerenciamento do catálogo de veículos em tempo real.',
    features: [
      'Catálogo dinâmico integrado ao Supabase',
      'Filtros por categoria, preço e características',
      'Painel administrativo para gestão do estoque',
      'Design responsivo e performance otimizada',
    ],
    metrics: [['React', 'frontend'], ['Supabase', 'backend'], ['TypeScript', 'linguagem']],
    link: '', private: true,
  },
  {
    id: 'rede-oticas', num: '03', name: 'Rede das Óticas',
    tagline: 'Website institucional para rede de óticas com catálogo de produtos.',
    image: imgRedeOticas, bg: 'linear-gradient(135deg,#6B3FA0,#8B5CC4)', glyph: '❖',
    year: '2026', role: 'Frontend', type: 'Site Institucional',
    stack: ['React', 'TypeScript'],
    desc: 'Website profissional para rede de óticas com páginas institucionais e catálogo de produtos. Design moderno, responsivo e otimizado para a experiência do cliente final.',
    features: [
      'Páginas institucionais e catálogo de produtos',
      'Design responsivo para todos os dispositivos',
      'Navegação intuitiva e carregamento rápido',
      'Identidade visual alinhada com a marca',
    ],
    metrics: [['React', 'framework'], ['TypeScript', 'linguagem'], ['Responsive', 'design']],
    link: '', private: true,
  },
  {
    id: 'farmacia', num: '04', name: 'Bot Farmácias',
    tagline: 'Bot para WhatsApp que consulta preços de remédios em múltiplas farmácias.',
    image: imgFarmacia, bg: 'linear-gradient(135deg,#1F6B4F,#2E9C73)', glyph: '◓',
    year: '2025', role: 'Backend', type: 'Bot WhatsApp',
    stack: ['Java'],
    desc: 'Bot integrado ao WhatsApp que funciona como uma mini-API: o usuário envia o nome de um remédio e o bot busca automaticamente o preço em várias farmácias parceiras, retornando a comparação diretamente na conversa.',
    features: [
      'Recebe o nome do remédio via mensagem no WhatsApp',
      'Consulta preços em múltiplas farmácias em tempo real',
      'Retorna comparativo de preços formatado na conversa',
      'Integração com a API do WhatsApp Business em Java puro',
    ],
    metrics: [['Java', 'puro'], ['WhatsApp', 'API'], ['Multi-farm.', 'consulta']],
    link: '', private: true,
  },
  {
    id: 'sistema-construelo', num: '05', name: 'Sistema Construelo',
    tagline: 'ERP personalizado para empresa de construção civil.',
    image: imgConstruelo, bg: 'linear-gradient(135deg,#B0892C,#D4AB3E)', glyph: '⬡',
    year: '2025', role: 'FullStack', type: 'Sistema ERP',
    stack: ['React', 'TypeScript', 'PostgreSQL'],
    desc: 'Sistema ERP desenvolvido para empresa de construção civil. Controle de obras, materiais, funcionários e faturamento em uma plataforma integrada e eficiente com foco em produtividade.',
    features: [
      'Controle de obras e etapas de construção',
      'Gestão de materiais e fornecedores',
      'Controle de equipes e alocação de recursos',
      'Relatórios financeiros e de progresso',
    ],
    metrics: [['ERP', 'sistema'], ['React', 'frontend'], ['PostgreSQL', 'banco']],
    link: '', private: true,
  },
  {
    id: 'dashboard-covid', num: '06', name: 'Dashboard COVID',
    tagline: 'Dashboard interativo de análise de dados da pandemia de COVID-19.',
    image: imgDashboard, bg: 'linear-gradient(135deg,#C2521C,#E0732E)', glyph: '◓',
    year: '2025', role: 'Desenvolvedor', type: 'Dashboard',
    stack: ['Python', 'Pandas', 'Streamlit'],
    desc: 'Dashboard desenvolvido como projeto de faculdade para análise visual dos dados da pandemia de COVID-19. Gráficos interativos exibindo casos, óbitos e evolução temporal por região.',
    features: [
      'Gráficos interativos de casos e óbitos por região',
      'Análise temporal com filtros por período',
      'Mapas e visualizações comparativas por estado',
      'Dados atualizados com pipelines Python e Pandas',
    ],
    metrics: [['Python', 'linguagem'], ['Streamlit', 'dashboard'], ['Pandas', 'análise']],
    link: 'https://github.com/PominiGa/Projeto-Faculdade-Unisagrado',
    private: false,
  },
  {
    id: 'smash-burguer', num: '07', name: 'Smash Burguer LP',
    tagline: 'Landing page moderna para hamburgueria com cardápio interativo.',
    image: imgSmash, bg: 'linear-gradient(135deg,#B0892C,#D4AB3E)', glyph: '⟁',
    year: '2025', role: 'Frontend', type: 'Landing Page',
    stack: ['HTML', 'CSS', 'JavaScript', 'TypeScript'],
    desc: 'Landing page para a Smash Burguer LP com seções de cardápio, localização e contato. Interface dinâmica com animações e design responsivo focado na conversão e experiência do cliente.',
    features: [
      'Cardápio interativo com categorias e preços',
      'Animações e transições suaves',
      'Seções de contato e localização integradas',
      'Design responsivo e mobile-first',
    ],
    metrics: [['HTML/CSS', 'base'], ['JavaScript', 'dinâmico'], ['Responsive', 'design']],
    link: 'https://github.com/PominiGa/Smash.Burguer',
    private: false,
  },
  {
    id: 'sistema-smash', num: '08', name: 'Sistema Smash',
    tagline: 'Sistema desktop de gestão interna para a Smash Burguer.',
    image: imgSistemaSmash, bg: 'linear-gradient(135deg,#2B4C8C,#3E6BC4)', glyph: '◗',
    year: '2026', role: 'Backend', type: 'Sistema Desktop',
    stack: ['Java', 'Swing', 'MySQL'],
    desc: 'Sistema de gerenciamento interno para a hamburgueria Smash Burguer. Interface desktop Java Swing com controle de pedidos, estoque e caixa, integrado ao banco MySQL.',
    features: [
      'Gestão de pedidos e controle de caixa',
      'Controle de estoque com alertas de reposição',
      'Cadastro e histórico de clientes',
      'Relatórios de vendas e faturamento diário',
    ],
    metrics: [['Java', 'linguagem'], ['Swing', 'interface'], ['MySQL', 'banco']],
    link: '', private: true,
  },
  {
    id: 'meu-dia', num: '09', name: 'Meu Dia X',
    tagline: 'Aplicativo web para organização e acompanhamento de atividades diárias.',
    image: imgMeuDia, bg: 'linear-gradient(135deg,#1F6B4F,#2E9C73)', glyph: '◗',
    year: '2025', role: 'Frontend', type: 'Web App',
    stack: ['HTML', 'CSS', 'JavaScript', 'TypeScript'],
    desc: 'Aplicativo web para organização de atividades do dia a dia. Interface simples e intuitiva para registrar e acompanhar tarefas, compromissos e metas com persistência local.',
    features: [
      'Registro e organização de atividades diárias',
      'Interface limpa e fácil de usar',
      'Persistência de dados via localStorage',
      'Design responsivo para mobile e desktop',
    ],
    metrics: [['JavaScript', 'linguagem'], ['TypeScript', 'tipagem'], ['LocalStorage', 'dados']],
    link: 'https://github.com/PominiGa/Sim-aceito',
    private: false,
  },
  {
    id: 'portfolio', num: '10', name: 'Portfólio',
    tagline: 'Este portfólio, construído com React, TypeScript e design retrô-minimalista.',
    image: imgPortfolio, bg: 'linear-gradient(135deg,#6B3FA0,#8B5CC4)', glyph: '❖',
    year: '2025', role: 'Frontend', type: 'Portfólio',
    stack: ['React', 'TypeScript', 'Framer Motion'],
    desc: 'Este portfólio, construído com React e TypeScript. Design retrô-minimalista com JetBrains Mono, dark mode persistente, animações com Framer Motion e CSS custom properties.',
    features: [
      'Design retrô-minimalista com CSS custom properties',
      'Dark/light mode persistente com localStorage',
      'Animações suaves com Framer Motion',
      'Otimizado para Vercel com SEO básico',
    ],
    metrics: [['React', 'framework'], ['TypeScript', 'linguagem'], ['Framer', 'animações']],
    link: 'https://github.com/PominiGa/Projeto.Portfolio.Gabriel',
    private: false,
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