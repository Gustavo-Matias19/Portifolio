

const skills = [
  {
    group: "Linguagens",
    icon: "⌘",
    items: ["Python", "Java", "SQL"]
  },
  {
    group: "Back-end & dados",
    icon: "▣",
    items: ["FastAPI", "APIs REST", "PostgreSQL", "POO"]
  },
  {
    group: "Ferramentas",
    icon: "⚙",
    items: ["Git & GitHub", "Docker", "Excel / VBA"]
  }
];



const projects = [
  {
    number: "01",
    name: "SpotiFEI",
    category: "software",
    type: "APLICAÇÃO DESKTOP",
    color: "mint",
    icon: "♫",
    featured: true,
    description: "Sistema de gerenciamento de músicas desenvolvido em Java com PostgreSQL e arquitetura MVC. Possui autenticação de usuários, busca de músicas, curtidas, playlists e histórico de pesquisas.",
    tags: ["Java", "PostgreSQL", "Swing", "MVC"],
    link: "https://github.com/Gustavo-Matias19/Spotifei",
    label: "Ver no GitHub"
  },
  {
    number: "02",
    name: "Automação de Controle Operacional",
    category: "automacao",
    type: "EXCEL & AUTOMAÇÃO",
    color: "blue",
    icon: "▤",
    description: "Ferramenta desenvolvida em Excel e VBA para auxiliar no controle de entregas e volumes, organizando informações e automatizando etapas do processo operacional.",
    tags: ["Excel", "VBA", "Automação"],
    link: null
  },
  {
    number: "03",
    name: "Controle de Saída de Estoque",
    category: "automacao",
    type: "EXCEL & VBA",
    color: "orange",
    icon: "▥",
    description: "Sistema de registro de saídas de estoque desenvolvido com Excel e VBA. Utiliza UserForm para cadastrar movimentações, automatizar o preenchimento dos dados e padronizar os registros.",
    tags: ["Excel", "VBA", "UserForm"],
    link: null
  },
  {
    number: "04",
    name: "Sistema de Controle Financeiro",
    category: "software",
    type: "BACK-END & BANCO DE DADOS",
    color: "purple",
    icon: "◈",
    description: "Aplicação web de controle financeiro desenvolvida com Python, FastAPI e PostgreSQL. Projeto pessoal voltado ao estudo de APIs, autenticação, persistência de dados e integração entre back-end e interface web.",
    tags: ["Python", "FastAPI", "PostgreSQL", "SQL"],
    link: "https://github.com/Gustavo-Matias19/Controle-Financeiro.git",
  },
  {
    number: "05",
    name: "Portfólio Pessoal",
    category: "software",
    type: "DESENVOLVIMENTO WEB",
    color: "mint",
    icon: "⌘",
    description: "Portfólio responsivo desenvolvido com HTML, CSS e JavaScript para apresentar meus projetos, conhecimentos técnicos e experiência profissional.",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/Gustavo-Matias19/Portiforio",
    label: "Ver no GitHub"
  }
];

const experiences = [
  {
    period: "AGO 2025 — ATUALMENTE",
    role: "Área operacional · Controle de processos",
    place: "Jodi · Mauá, SP",
    description: "Atuação com acompanhamento de produtos e fluxos de pedidos. Desenvolvimento e utilização de planilhas em Excel e soluções em VBA para organizar registros e apoiar rotinas operacionais."
  }
];

const education = [
  {
    period: "FEV 2024 — DEZ 2027 (PREVISÃO)",
    role: "Bacharelado em Ciência da Computação",
    place: "Centro Universitário FEI",
    description: "Formação em desenvolvimento de software, algoritmos, banco de dados, arquitetura de sistemas, redes e sistemas distribuídos."
  }
];

// Renderizar habilidades
const skillsRoot = document.querySelector("#skills-container");

skills.forEach(group => {
  const card = document.createElement("article");
  card.className = "skill-group";

  const header = document.createElement("div");
  header.className = "skill-group-header";

  const symbol = document.createElement("span");
  symbol.className = "skill-icon";
  symbol.textContent = group.icon;

  const heading = document.createElement("h3");
  heading.textContent = group.group;
  header.append(symbol, heading);

  const tags = document.createElement("div");
  tags.className = "skill-tags";

  group.items.forEach(item => {
    const span = document.createElement("span");
    span.className = "skill-tag";
    span.textContent = item;
    tags.append(span);
  });

  card.append(header, tags);
  skillsRoot.append(card);
});

// Renderizar projetos
const projectsRoot = document.querySelector("#project-container");

projects.forEach(project => {
  const card = document.createElement("article");
  card.className = `project-card ${project.featured ? "featured" : ""}`;
  card.dataset.category = project.category;

  const visual = document.createElement("div");
  visual.className = `project-visual ${project.color}`;

  const visualType = document.createElement("span");
  visualType.className = "visual-type";
  visualType.textContent = project.type;

  const visualIcon = document.createElement("span");
  visualIcon.className = "visual-icon";
  visualIcon.textContent = project.icon;

  const visualNumber = document.createElement("span");
  visualNumber.className = "visual-number";
  visualNumber.textContent = project.number;

  visual.append(visualType, visualIcon, visualNumber);

  const content = document.createElement("div");
  content.className = "project-content";

  const title = document.createElement("h3");
  title.textContent = project.name;

  const description = document.createElement("p");
  description.textContent = project.description;

  const tags = document.createElement("div");
  tags.className = "project-tags";

  project.tags.forEach(tag => {
    const span = document.createElement("span");
    span.textContent = tag;
    tags.append(span);
  });

  content.append(title, description, tags);

  if (project.link) {
    const a = document.createElement("a");
    a.className = "project-link";
    a.href = project.link;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.textContent = `${project.label || "Explorar código"} ↗`;
    content.append(a);
  } else {
    const small = document.createElement("span");
    small.className = "project-private";
    small.textContent = "Projeto acadêmico / demonstração sob consulta";
    content.append(small);
  }

  card.append(visual, content);
  projectsRoot.append(card);
});

// Renderizar experiência e formação
function renderTimeline(containerId, items) {
  const root = document.getElementById(containerId);

  items.forEach(item => {
    const article = document.createElement("article");
    article.className = "timeline-item";

    const time = document.createElement("span");
    time.className = "timeline-date";
    time.textContent = item.period;

    const title = document.createElement("h4");
    title.textContent = item.role;

    const place = document.createElement("span");
    place.className = "timeline-place";
    place.textContent = item.place;

    const desc = document.createElement("p");
    desc.textContent = item.description;

    article.append(time, title, place, desc);
    root.append(article);
  });
}

renderTimeline("experience-container", experiences);
renderTimeline("education-container", education);

// Filtros de projetos
document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    document.querySelectorAll(".filter").forEach(btn => {
      const active = btn === button;
      btn.classList.toggle("active", active);
      btn.setAttribute("aria-pressed", String(active));
    });

    document.querySelectorAll(".project-card").forEach(card => {
      card.hidden = filter !== "todos" && card.dataset.category !== filter;
    });
  });
});

// Menu para celular
const toggle = document.querySelector("#menu-toggle");
const nav = document.querySelector("#nav-links");

toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
  toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
});

nav.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  });
});
