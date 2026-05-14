// Shared content for the portfolio.
// Real CV from Raphael Benzecry. Project blurbs are placeholders to be filled later.

const PROJECTS = [
  {
    id: 'mycollections',
    name: 'MyCollections',
    year: '2024',
    status: { pt: 'Publicado na App Store', en: 'Published on App Store' },
    role: { pt: 'Solo Developer · iOS', en: 'Solo Developer · iOS' },
    stack: ['SwiftUI', 'CoreData', 'CloudKit'],
    category: { pt: 'iOS · Produto', en: 'iOS · Product' },
    blurb: {
      pt: '[ Placeholder ] App iOS nativo para gestão de coleções pessoais com experiência premium. Persistência local, gerenciamento de imagens e estrutura de metadata customizável.',
      en: '[ Placeholder ] Native iOS app for personal collection management with a premium experience. Local persistence, image management and customizable metadata structure.',
    },
    metrics: [
      { k: { pt: 'Plataforma', en: 'Platform' }, v: 'iOS' },
      { k: { pt: 'Status', en: 'Status' }, v: 'Live' },
      { k: { pt: 'Stack', en: 'Stack' }, v: 'SwiftUI' },
    ],
    hue: 30,
  },
  {
    id: 'nakmuayfarang',
    name: 'NakMuayFarang',
    year: '2024',
    status: { pt: 'Beta · TestFlight + APK', en: 'Beta · TestFlight + APK' },
    role: { pt: 'Founder · KMP Engineer', en: 'Founder · KMP Engineer' },
    stack: ['Kotlin Multiplatform', 'SwiftUI', 'Compose'],
    category: { pt: 'Multiplataforma · Esporte', en: 'Multiplatform · Sport' },
    blurb: {
      pt: '[ Placeholder ] Plataforma para instrutores e atletas de Muay Thai. Arquitetura multiplataforma com lógica de negócio compartilhada entre iOS e Android. Foco em comunidade e entrega de conteúdo.',
      en: '[ Placeholder ] Platform for Muay Thai instructors and athletes. Multiplatform architecture sharing business logic between iOS and Android. Focused on community and content delivery.',
    },
    metrics: [
      { k: { pt: 'Plataformas', en: 'Platforms' }, v: 'iOS · Android' },
      { k: { pt: 'Distribuição', en: 'Distribution' }, v: 'TestFlight' },
      { k: { pt: 'Arquitetura', en: 'Architecture' }, v: 'KMP' },
    ],
    hue: 12,
  },
  {
    id: 'sporthub',
    name: 'SportHub',
    year: '2025',
    status: { pt: 'Em desenvolvimento', en: 'In Development' },
    role: { pt: 'Founder · Full-stack Mobile', en: 'Founder · Full-stack Mobile' },
    stack: ['React Native', 'TypeScript', 'Supabase'],
    category: { pt: 'Social · Esporte', en: 'Social · Sport' },
    blurb: {
      pt: '[ Placeholder ] Comunidade esportiva conectando atletas, treinadores e organizadores de eventos. Criação de times, eventos esportivos e compartilhamento de locais de treino.',
      en: '[ Placeholder ] Sports community connecting athletes, coaches and event organizers. Team creation, sports events and training location sharing.',
    },
    metrics: [
      { k: { pt: 'Fase', en: 'Stage' }, v: 'MVP' },
      { k: { pt: 'Stack', en: 'Stack' }, v: 'RN' },
      { k: { pt: 'Backend', en: 'Backend' }, v: 'Supabase' },
    ],
    hue: 200,
  },
];

const EXPERIENCE = [
  {
    company: 'PicPay',
    role: { pt: 'Senior Mobile Engineer', en: 'Senior Mobile Engineer' },
    periodI18n: { pt: 'Mai 2025 — Atual', en: 'May 2025 — Present' },
    location: 'São Paulo, BR',
    bullets: {
      pt: [
        'Desenvolvi o módulo de Business Cards no ecossistema mobile da empresa.',
        'Contribuí com a evolução do Design System mobile compartilhado.',
        'Trabalhei em melhorias de interoperabilidade entre React Native e aplicações nativas.',
        'Criei ferramentas internas para produtividade e fluxo de engenharia.',
        'Atuei em observabilidade, monitoring e debugging de produção.',
        'Apliquei fluxos assistidos por IA para acelerar entregas e eficiência do time.',
      ],
      en: [
        'Built the Business Cards module within the company’s mobile ecosystem.',
        'Contributed to the evolution of the shared mobile Design System.',
        'Improved interoperability between React Native and native applications.',
        'Created internal tools to improve developer productivity and workflows.',
        'Worked on observability, monitoring and production debugging.',
        'Applied AI-assisted workflows to accelerate development and team efficiency.',
      ],
    },
  },
  {
    company: 'Loggi',
    role: { pt: 'Senior Software Engineer', en: 'Senior Software Engineer' },
    periodI18n: { pt: 'Jan 2024 — Jan 2025', en: 'Jan 2024 — Jan 2025' },
    location: 'São Paulo, BR',
    bullets: {
      pt: [
        'Participei da criação de uma nova cultura de engenharia mobile, padrões modernos de arquitetura e escalabilidade.',
        'Desenvolvi o novo app do entregador, substituindo a plataforma legada por uma experiência mais rápida e escalável.',
        'Trabalhei diretamente com entregadores em rollouts para coletar feedback e validar melhorias.',
        'Criei bibliotecas internas e tooling, incluindo Design System e toolbox de developer experience.',
      ],
      en: [
        'Helped shape a new mobile engineering culture with modern architecture standards and scalability.',
        'Built the new delivery driver app, replacing the legacy platform with a faster, more scalable experience.',
        'Worked directly with drivers during rollouts to gather feedback and validate improvements.',
        'Created internal libraries and tooling, including a Design System and developer toolbox.',
      ],
    },
  },
  {
    company: 'Neon',
    role: { pt: 'Software Engineer', en: 'Software Engineer' },
    periodI18n: { pt: 'Mai 2022 — Out 2023', en: 'May 2022 — Oct 2023' },
    location: 'São Paulo, BR',
    bullets: {
      pt: [
        'Atuei no projeto "MEI Fácil" com React Native, TypeScript, Redux, Styled Components e arquitetura de micro-apps.',
        'Implementei o pagamento automático do DAS — contribuiu para +22% de retenção.',
        'Liderei o desenvolvimento do módulo de saúde em parceria com a VidaClass.',
        'Refatorei módulos-chave (Conta Digital, Onboarding, IR) para a nova arquitetura de micro-apps.',
        'Contribuí para +20% no NPS via melhorias de performance e UX.',
      ],
      en: [
        'Worked on the "MEI Fácil" project using React Native, TypeScript, Redux, Styled Components and a micro-app architecture.',
        'Shipped automatic DAS payment — contributed to a 22% retention lift.',
        'Led development of the healthcare module in partnership with VidaClass.',
        'Refactored key modules (Digital Account, Onboarding, Tax Reports) into the new micro-app architecture.',
        'Contributed to a 20% NPS increase via performance and UX improvements.',
      ],
    },
  },
  {
    company: 'T10 Bank',
    role: { pt: 'Mobile Front-end Developer', en: 'Mobile Front-end Developer' },
    periodI18n: { pt: 'Abr 2021 — Mai 2022', en: 'Apr 2021 — May 2022' },
    location: 'Campinas, BR',
    bullets: {
      pt: [
        'Desenvolvi soluções financeiras para contas empresariais com React Native e React.',
        'Gerenciei releases mobile para App Store e Google Play.',
        'Construí gestão de folha de pagamento com pagamentos recorrentes para empresas.',
        'Implementei gestão de funcionários com fluxos de aprovação para operações financeiras.',
        'Desenvolvi gestão centralizada de boletos para eficiência operacional.',
      ],
      en: [
        'Built financial solutions for business accounts using React Native and React.',
        'Managed mobile releases for App Store and Google Play.',
        'Built payroll management with recurring payments for companies.',
        'Implemented employee management with approval-based financial operations.',
        'Developed centralized bank slip management for operational efficiency.',
      ],
    },
  },
];

const SKILLS = [
  {
    group: { pt: 'Mobile', en: 'Mobile' },
    items: ['React Native', 'Swift / SwiftUI', 'Kotlin / Compose', 'Kotlin Multiplatform'],
  },
  {
    group: { pt: 'Arquitetura', en: 'Architecture' },
    items: [
      { pt: 'Clean Architecture', en: 'Clean Architecture' },
      { pt: 'Modularização', en: 'Modularization' },
      'Micro-Apps',
      { pt: 'Design Patterns', en: 'Design Patterns' },
      { pt: 'Design Systems', en: 'Design Systems' },
    ],
  },
  {
    group: { pt: 'Front · Back', en: 'Front · Back' },
    items: ['TypeScript', 'Redux', 'Styled Components', 'Firebase', 'Supabase'],
  },
  {
    group: { pt: 'Testing · DevOps', en: 'Testing · DevOps' },
    items: ['Jest', 'RTL', 'Storybook', 'CI/CD', 'Observability'],
  },
];

const EDUCATION = [
  {
    school: 'CETECAMP',
    degree: { pt: 'Técnico em Tecnologia da Informação', en: 'Technical Degree in Information Technology' },
    period: '2016 — 2018',
    location: 'Campinas, BR',
  },
];

const LANGUAGES = [
  { lang: { pt: 'Português', en: 'Portuguese' }, level: { pt: 'Nativo', en: 'Native' }, dots: 5 },
  { lang: { pt: 'Inglês', en: 'English' }, level: { pt: 'Avançado · Profissional', en: 'Advanced · Professional' }, dots: 4 },
];

const COPY = {
  // Header / nav
  navWork: { pt: 'Projetos', en: 'Work' },
  navAbout: { pt: 'Sobre', en: 'About' },
  navExp: { pt: 'Experiência', en: 'Experience' },
  navContact: { pt: 'Contato', en: 'Contact' },
  available: { pt: 'Aberto a oportunidades', en: 'Open to opportunities' },

  // Hero
  name: { pt: 'Raphael Benzecry', en: 'Raphael Benzecry' },
  fullName: 'Raphael Alexandre Coimbra Benzecry Gonçalves',
  tagline: {
    pt: 'Senior Mobile Engineer com 6+ anos construindo apps escaláveis em fintech, logística e produtos digitais de alto volume.',
    en: 'Senior Mobile Engineer with 6+ years building scalable apps across fintech, logistics and high-scale digital products.',
  },
  heroSubline: {
    pt: 'Baseado em Campinas, SP. React Native · SwiftUI · Kotlin Multiplatform.',
    en: 'Based in Campinas, SP. React Native · SwiftUI · Kotlin Multiplatform.',
  },

  // Sections
  selectedWork: { pt: 'Projetos Independentes', en: 'Independent Projects' },
  about: { pt: 'Sobre', en: 'About' },
  experience: { pt: 'Experiência', en: 'Experience' },
  education: { pt: 'Educação', en: 'Education' },
  languages: { pt: 'Idiomas', en: 'Languages' },
  skills: { pt: 'Skills', en: 'Skills' },
  contact: { pt: 'Vamos conversar', en: 'Let’s talk' },
  resume: { pt: 'Baixar CV', en: 'Download CV' },

  // About body
  aboutP1: {
    pt: 'Mindset orientado a produto, colaborando próximo com times de business, design e operações para entregar soluções mobile de impacto. Forte em arquitetura híbrida/nativa escalável.',
    en: 'Product-oriented mindset, collaborating closely with business, design and operations teams to deliver impactful mobile solutions. Strong in scalable hybrid/native architecture.',
  },
  aboutP2: {
    pt: 'Experiência abrangente: definição de arquitetura, evolução de produto, otimização de performance, design systems, modularização e developer experience.',
    en: 'Broad experience across architecture definition, product evolution, performance optimization, design systems, modularization and developer experience.',
  },

  // Contact
  contactBlurb: {
    pt: 'Aberto a posições sênior/staff em mobile, consultoria e arquitetura. Resposta em até 48h.',
    en: 'Open to senior/staff mobile roles, consulting and architecture work. Reply within 48h.',
  },
  email: 'rapha07.el@gmail.com',
  phone: '+55 19 99725-1410',
  city: { pt: 'Campinas, SP — Brasil', en: 'Campinas, SP — Brazil' },
  github: 'github.com/seuusuario',
  linkedin: 'linkedin.com/in/seunome',

  // Misc
  viewProject: { pt: 'Ver projeto', en: 'View project' },
  metricsTitle: { pt: 'Detalhes', en: 'Details' },
  stackLabel: { pt: 'Stack', en: 'Stack' },
  roleLabel: { pt: 'Papel', en: 'Role' },
  yearLabel: { pt: 'Ano', en: 'Year' },
  builtBy: { pt: 'Feito à mão em Campinas', en: 'Handcrafted in Campinas' },
};

Object.assign(window, { PROJECTS, EXPERIENCE, SKILLS, EDUCATION, LANGUAGES, COPY });
