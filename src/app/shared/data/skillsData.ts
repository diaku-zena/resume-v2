import { Skill } from "../../core/interfaces/skill.interface";

interface SkillsList {
  lps: Skill[],
  ferTeste: Skill[],
  bd: Skill[],
  [key: string]: Skill[];
}

export const SkillsData: SkillsList = {
  lps: [
    {
      id: 1,
      title: "Python",
      srcImg: "assets/img/python-logo.png",
      yearsExperience: 5,
      projectsInvolved: 10,
      description: "Linguagem de programação versátil usada em ciência de dados, automação, desenvolvimento web e muito mais.",
      proficiencyLevel: "Avançado",
      notableProjects: ["Sistema de Gestão de Estoques", "Análise de Dados de Marketing"],
      associatedTools: ["Django", "Flask", "Pandas", "NumPy"],
      certifications: ["Python Developer Certification", "Data Science with Python"],
      complementarySkills: ["SQL", "Machine Learning", "DevOps"]
    },
    {
      id: 2,
      title: "Java",
      srcImg: "assets/img/java-logo.png",
      yearsExperience: 7,
      projectsInvolved: 15,
      description: "Linguagem de programação orientada a objetos amplamente utilizada para aplicações empresariais e móveis.",
      proficiencyLevel: "Avançado",
      notableProjects: ["Plataforma de Comércio Eletrônico", "Aplicativo Bancário Móvel"],
      associatedTools: ["Spring", "Hibernate", "Maven"],
      complementarySkills: ["Kotlin", "Microservices", "CI/CD"]
    },
    {
      id: 3,
      title: "PHP",
      srcImg: "assets/img/php-logo.png",
      yearsExperience: 5,
      projectsInvolved: 12,
      description: "Linguagem de script do lado do servidor usada principalmente para desenvolvimento web.",
      proficiencyLevel: "Avançado",
      notableProjects: ["Sistema de Gerenciamento de Conteúdo", "Aplicação de E-commerce"],
      associatedTools: ["Laravel", "Symfony", "WordPress"],
      complementarySkills: ["MySQL", "JavaScript", "HTML"]
    },
    {
      id: 4,
      title: "JavaScript",
      srcImg: "assets/img/javascript-logo.png",
      yearsExperience: 6,
      projectsInvolved: 12,
      description: "Linguagem de script amplamente utilizada para desenvolvimento web front-end e back-end.",
      proficiencyLevel: "Avançado",
      notableProjects: ["Plataforma de E-commerce", "Dashboard de Analytics"],
      associatedTools: ["Node.js", "Express.js", "jQuery", "Webpack"],
      complementarySkills: ["HTML", "CSS", "TypeScript"],
    },
    {
      id: 5,
      title: "C++",
      srcImg: "assets/img/cpp-logo.png",
      yearsExperience: 6,
      projectsInvolved: 10,
      description: "Linguagem de programação poderosa e eficiente usada em sistemas operacionais, jogos e aplicações de alto desempenho.",
      proficiencyLevel: "Avançado",
      notableProjects: ["Motor de Jogos", "Aplicações de Controle Industrial"],
      associatedTools: ["Qt", "Boost", "OpenCV"],
      complementarySkills: ["C", "Assembly", "CUDA"]
    },
    {
      id: 6,
      title: "C#",
      srcImg: "assets/img/csharp-logo.png",
      yearsExperience: 8,
      projectsInvolved: 10,
      description: "Linguagem de programação moderna e orientada a objetos usada principalmente no desenvolvimento de aplicativos Windows e web.",
      proficiencyLevel: "Avançado",
      notableProjects: ["Sistema de Gestão Empresarial", "Aplicativo de Controle Financeiro"],
      associatedTools: [".NET", "Entity Framework", "Azure"],
      complementarySkills: ["SQL Server", "ASP.NET Core", "DevOps"],
    },
    {
      id: 7,
      title: "TypeScript",
      srcImg: "assets/img/typescript-logo.png",
      yearsExperience: 4,
      projectsInvolved: 8,
      description: "Superset do JavaScript que adiciona tipagem estática e facilita o desenvolvimento de aplicações complexas.",
      proficiencyLevel: "Intermediário",
      notableProjects: ["Aplicativo Web em Angular", "API RESTful"],
      associatedTools: ["Angular", "React", "Node.js"],
      complementarySkills: ["JavaScript", "OOP", "Testing"]
    },
    {
      id: 8,
      title: "C",
      srcImg: "assets/img/c-logo.png",
      yearsExperience: 8,
      projectsInvolved: 15,
      description: "Linguagem de programação de baixo nível usada para sistemas operacionais, firmware e aplicações críticas.",
      proficiencyLevel: "Avançado",
      notableProjects: ["Sistema Embarcado", "Software de Sistemas Operacionais"],
      associatedTools: ["GCC", "Make", "GDB"],
      complementarySkills: ["C++", "Assembly", "Linux"]
    },
  ],
  ferTeste: [
    {
      id: 1,
      title: "Insomnia",
      srcImg: "assets/img/insomnia-logo.png",
      yearsExperience: 3,
      projectsInvolved: 7,
      description: "Ferramenta de teste de API que facilita o desenvolvimento e teste de serviços RESTful.",
      proficiencyLevel: "Intermediário",
      notableProjects: ["Desenvolvimento de APIs", "Testes de Integração"],
      associatedTools: ["Postman", "Swagger", "Curl"],
      complementarySkills: ["REST", "OAuth", "JSON"]
    },
    {
      id: 2,
      title: "Postman",
      srcImg: "assets/img/postman-logo.png",
      yearsExperience: 4,
      projectsInvolved: 10,
      description: "Plataforma de colaboração e teste de API que suporta o ciclo de vida completo do desenvolvimento de APIs.",
      proficiencyLevel: "Avançado",
      notableProjects: ["Desenvolvimento de APIs", "Automação de Testes"],
      associatedTools: ["Newman", "Swagger", "SoapUI"],
      complementarySkills: ["REST", "OAuth", "CI/CD"]
    },
  ],
  bd: [
    {
      id: 1,
      title: "PostgreSQL",
      srcImg: "assets/img/postgres-logo.png",
      yearsExperience: 6,
      projectsInvolved: 12,
      description: "Banco de dados relacional open-source poderoso e extensível com suporte avançado a SQL.",
      proficiencyLevel: "Avançado",
      notableProjects: ["Sistema de Análise de Dados", "Aplicação de CRM"],
      associatedTools: ["pgAdmin", "PostGIS", "AWS RDS"],
      complementarySkills: ["SQL", "Data Modeling", "Replication"]
    },
    {
      id: 2,
      title: "SQL Server",
      srcImg: "assets/img/sqlserver-logo.png",
      yearsExperience: 7,
      projectsInvolved: 12,
      description: "Sistema de gerenciamento de banco de dados da Microsoft, utilizado em aplicações empresariais e BI.",
      proficiencyLevel: "Avançado",
      notableProjects: ["Sistema ERP", "Data Warehouse"],
      associatedTools: ["SSIS", "SSRS", "SSAS"],
      complementarySkills: ["SQL", "T-SQL", "Azure"]
    },
    {
      id: 3,
      title: "MySQL",
      srcImg: "assets/img/mysql-logo.png",
      yearsExperience: 5,
      projectsInvolved: 10,
      description: "Sistema de gerenciamento de banco de dados relacional popular, amplamente usado em aplicações web.",
      proficiencyLevel: "Avançado",
      notableProjects: ["Plataforma de E-commerce", "Sistema de Gerenciamento de Conteúdo"],
      associatedTools: ["phpMyAdmin", "MySQL Workbench", "Percona"],
      complementarySkills: ["SQL", "PHP", "Data Backup"]
    },
    {
      id: 4,
      title: "Redis",
      srcImg: "assets/img/mysql-logo.png",
      yearsExperience: 5,
      projectsInvolved: 10,
      description: "Sistema de gerenciamento de banco de dados relacional popular, amplamente usado em aplicações web.",
      proficiencyLevel: "Avançado",
      notableProjects: ["Plataforma de E-commerce", "Sistema de Gerenciamento de Conteúdo"],
      associatedTools: ["phpMyAdmin", "MySQL Workbench", "Percona"],
      complementarySkills: ["SQL", "PHP", "Data Backup"]
    },
  ],
  frameworks: [
    {
      id: 1,
      title: "Angular",
      srcImg: "assets/img/angular-logo.png",
      yearsExperience: 5,
      projectsInvolved: 7,
      description: "Framework front-end baseado em TypeScript para a criação de aplicações web dinâmicas e robustas.",
      proficiencyLevel: "Avançado",
      notableProjects: ["Sistema de Gestão de Projetos", "Aplicativo de E-learning"],
      associatedTools: ["RxJS", "NgRx", "Angular Material"],
      complementarySkills: ["TypeScript", "HTML", "SCSS"]
    },
    {
      id: 2,
      title: "Django",
      srcImg: "assets/img/django-logo.png",
      yearsExperience: 4,
      projectsInvolved: 8,
      description: "Framework de alto nível para desenvolvimento rápido de aplicações web em Python.",
      proficiencyLevel: "Intermediário",
      notableProjects: ["Aplicativo de Blog", "Sistema de Gerenciamento de Usuários"],
      associatedTools: ["Django REST Framework", "Celery", "Redis"],
      complementarySkills: ["Python", "HTML", "JavaScript"]
    },
    {
      id: 3,
      title: "Laravel",
      srcImg: "assets/img/laravel-logo.png",
      yearsExperience: 5,
      projectsInvolved: 10,
      description: "Framework PHP elegante e expressivo para o desenvolvimento de aplicações web robustas.",
      proficiencyLevel: "Avançado",
      notableProjects: ["Plataforma de E-commerce", "Sistema de Gerenciamento de Conteúdo"],
      associatedTools: ["Blade", "Eloquent", "Forge"],
      complementarySkills: ["PHP", "MySQL", "API Development"]
    },
    {
      id: 4,
      title: "React",
      srcImg: "assets/img/react-logo.png",
      yearsExperience: 3,
      projectsInvolved: 5,
      description: "Biblioteca JavaScript para construir interfaces de usuário interativas e componentes reutilizáveis.",
      proficiencyLevel: "Intermediário",
      notableProjects: ["Plataforma de E-commerce", "Painel de Controle Interativo"],
      associatedTools: ["Redux", "React Router", "Webpack"],
      complementarySkills: ["JavaScript", "CSS", "Next.js"]
    },
    {
      id: 5,
      title: "React Native",
      srcImg: "assets/img/react.png",
      yearsExperience: 3,
      projectsInvolved: 5,
      description: "Framework para construção de aplicações móveis usando JavaScript e React.",
      proficiencyLevel: "Intermediário",
      notableProjects: ["Aplicativo de Delivery", "Aplicativo de Mídia Social"],
      associatedTools: ["Expo", "Redux", "Firebase"],
      complementarySkills: ["JavaScript", "React", "Mobile Development"]
    },
    {
      id: 6,
      title: "Aspnet Core",
      srcImg: "assets/img/aspnetcore-logo.png",
      yearsExperience: 4,
      projectsInvolved: 8,
      description: "Framework de desenvolvimento web moderno, rápido e flexível da Microsoft para a criação de aplicações robustas.",
      proficiencyLevel: "Intermediário",
      notableProjects: ["Sistema de Gerenciamento de Vendas", "Aplicativo de Agendamento Online"],
      associatedTools: ["Entity Framework Core", "SignalR", "Azure"],
      certifications: ["Microsoft Certified: Azure Developer Associate"],
      complementarySkills: ["C#", "SQL Server", "DevOps"]
    },
    {
      id: 7,
      title: "EF Core",
      srcImg: "assets/img/efcore-logo.png",
      yearsExperience: 3,
      projectsInvolved: 7,
      description: "Framework ORM da Microsoft para acesso a dados em aplicações .NET Core, que suporta a criação de modelos de dados complexos.",
      proficiencyLevel: "Intermediário",
      notableProjects: ["Sistema de Gerenciamento de Estoques", "Plataforma de E-commerce"],
      associatedTools: ["SQL Server", "PostgreSQL", "SQLite"],
      certifications: ["Microsoft Certified: Data Analyst Associate"],
      complementarySkills: ["C#", "LINQ", "Database Management"]
    },
    {
      id: 8,
      title: "Spring",
      srcImg: "assets/img/spring-logo.png",
      yearsExperience: 5,
      projectsInvolved: 10,
      description: "Framework Java extensível para o desenvolvimento de aplicações empresariais robustas e escaláveis.",
      proficiencyLevel: "Avançado",
      notableProjects: ["Sistema de Gestão de Recursos Humanos", "Aplicativo de Bancário"],
      associatedTools: ["Spring Boot", "Spring MVC", "Hibernate"],
      certifications: ["Spring Professional Certification"],
      complementarySkills: ["Java", "Microservices", "CI/CD"]
    },
    {
      id: 9,
      title: "Bootstrap",
      srcImg: "assets/img/bootstrap-logo.png",
      yearsExperience: 6,
      projectsInvolved: 15,
      description: "Framework de front-end para desenvolvimento rápido e responsivo de interfaces web.",
      proficiencyLevel: "Avançado",
      notableProjects: ["Website de Portfólio", "Dashboard de Administração"],
      associatedTools: ["jQuery", "Sass", "Gulp"],
      certifications: ["Responsive Web Design Certification"],
      complementarySkills: ["HTML", "CSS", "JavaScript"]
    },
    {
      id: 10,
      title: "GSAP",
      srcImg: "assets/img/gsap-logo.png",
      yearsExperience: 2,
      projectsInvolved: 5,
      description: "Biblioteca JavaScript para criar animações de alto desempenho em navegadores.",
      proficiencyLevel: "Intermediário",
      notableProjects: ["Website de Portfólio", "Aplicativo Interativo"],
      associatedTools: ["HTML", "CSS", "JavaScript"],
      complementarySkills: ["jQuery", "Canvas", "SVG"]
    },
    {
      id: 11,
      title: "Spring",
      srcImg: "assets/img/spring-logo.png",
    },
    {
      id: 12,
      title: "JQuery",
      srcImg: "assets/img/jquery-logo.png",
      yearsExperience: 4,
      projectsInvolved: 8,
      description: "Biblioteca JavaScript que simplifica a manipulação de HTML, eventos e animações.",
      proficiencyLevel: "Intermediário",
      notableProjects: ["Portal de Notícias", "Sistema de Agendamento Online"],
      associatedTools: ["Ajax", "Bootstrap", "DataTables"],
      complementarySkills: ["HTML", "CSS", "JavaScript"]
    },
    {
      id: 13,
      title: "Angular Matirial",
      srcImg: "assets/img/angularmaterial-logo.png",
      yearsExperience: 3,
      projectsInvolved: 6,
      description: "Conjunto de componentes UI para Angular que seguem as diretrizes do Material Design.",
      proficiencyLevel: "Intermediário",
      notableProjects: ["Dashboard de Administração", "Aplicativo de Tarefas"],
      associatedTools: ["Angular", "RxJS", "NgRx"],
      complementarySkills: ["TypeScript", "SCSS", "Design Responsivo"]
    },
    {
      id: 14,
      title: "Syncfusion",
      srcImg: "assets/img/syncfusion-logo.png",
      yearsExperience: 2,
      projectsInvolved: 5,
      description: "Conjunto de ferramentas e componentes UI para desenvolvimento de aplicações web, desktop e móveis.",
      proficiencyLevel: "Intermediário",
      notableProjects: ["Aplicativo de BI", "Sistema de Gerenciamento de Relatórios"],
      associatedTools: ["Blazor", "Angular", "React"],
      certifications: ["Syncfusion Developer Certification"],
      complementarySkills: ["JavaScript", "TypeScript", "UI/UX Design"]
    },
    {
      id: 15,
      title: "Django Channel",
      srcImg: "assets/img/djangochannel-logo.png",
      yearsExperience: 3,
      projectsInvolved: 6,
      description: "Extensão do Django para suportar comunicação assíncrona e WebSockets, permitindo a criação de aplicações em tempo real.",
      proficiencyLevel: "Intermediário",
      notableProjects: ["Aplicativo de Chat", "Sistema de Notificações em Tempo Real"],
      associatedTools: ["Daphne", "Redis", "ASGI"],
      certifications: ["Django Developer Certification"],
      complementarySkills: ["Python", "Django", "WebSockets"]
    },
    {
      id: 16,
      title: "CoreUI",
      srcImg: "assets/img/coreui-logo.png",
      yearsExperience: 2,
      projectsInvolved: 4,
      description: "Template de painel de administração open-source para a construção de interfaces de usuário modernas e responsivas.",
      proficiencyLevel: "Intermediário",
      notableProjects: ["Dashboard de Administração", "Painel de Controle de E-commerce"],
      associatedTools: ["Bootstrap", "Angular", "React"],
      certifications: ["CoreUI Developer Certification"],
      complementarySkills: ["JavaScript", "TypeScript", "CSS"]
    },
  ],
  colab: [
    {
      id: 1,
      title: "Git",
      srcImg: "assets/img/git-logo.png",
      yearsExperience: 7,
      projectsInvolved: 20,
      description: "Sistema de controle de versão distribuído que facilita o gerenciamento de código e a colaboração em projetos de software.",
      proficiencyLevel: "Avançado",
      notableProjects: ["Desenvolvimento de Software Colaborativo", "Gerenciamento de Projetos Open-Source"],
      associatedTools: ["GitHub", "GitLab", "Bitbucket"],
      certifications: ["Git Fundamentals Certification"],
      complementarySkills: ["CI/CD", "DevOps", "Version Control"]
    },
    {
      id: 2,
      title: "GitHub",
      srcImg: "assets/img/github-logo.png",
      yearsExperience: 5,
      projectsInvolved: 15,
      description: "Plataforma de hospedagem de código e colaboração que oferece controle de versão, integração contínua e desenvolvimento colaborativo.",
      proficiencyLevel: "Avançado",
      notableProjects: ["Projetos Open-Source", "Sistemas de Integração Contínua"],
      associatedTools: ["Git", "GitHub Actions", "Markdown"],
      certifications: ["GitHub Advanced Certification"],
      complementarySkills: ["Git", "CI/CD", "Project Management"]
    },
    {
      id: 3,
      title: "Docker",
      srcImg: "assets/img/docker-logo.png",
      yearsExperience: 3,
      projectsInvolved: 5,
      description: "Plataforma para desenvolvimento, envio e execução de aplicações em containers.",
      proficiencyLevel: "Intermediário",
      notableProjects: ["Sistema de Microserviços", "Plataforma de CI/CD"],
      associatedTools: ["Kubernetes", "Docker Compose", "Docker Swarm"],
      certifications: ["Docker Certified Associate"],
      complementarySkills: ["DevOps", "Microservices", "Cloud Computing"]
    }
  ],
  ambiente: [
    {
      id: 1,
      title: "Visual Studio",
      srcImg: "assets/img/visualstudio-logo.png",
      yearsExperience: 5,
      projectsInvolved: 10,
      description: "IDE completa para desenvolvimento de aplicações em diversas linguagens.",
      proficiencyLevel: "Avançado",
      notableProjects: ["Desenvolvimento de Software Empresarial", "Aplicações de Desktop"],
      associatedTools: [".NET Framework", "C#", "Xamarin"],
      certifications: ["Microsoft Certified: Azure Developer Associate"],
      complementarySkills: ["C#", "F#", "Visual Basic"]
    },
    {
      id: 2,
      title: "Visual Studio Code",
      srcImg: "assets/img/vscode-logo.png",
      yearsExperience: 4,
      projectsInvolved: 12,
      description: "Editor de código-fonte leve e poderoso para programação em várias linguagens.",
      proficiencyLevel: "Avançado",
      notableProjects: ["Desenvolvimento Web", "Ferramentas de Linha de Comando"],
      associatedTools: ["Live Share", "Debugger", "Git Integration"],
      certifications: ["Certified Open Source Contributor"],
      complementarySkills: ["JavaScript", "TypeScript", "Python"]
    },
    {
      id: 3,
      title: "PyCharm",
      srcImg: "assets/img/pycharm-logo.png",
      yearsExperience: 3,
      projectsInvolved: 8,
      description: "IDE especializada para desenvolvimento em Python, com suporte para frameworks web e data science.",
      proficiencyLevel: "Intermediário",
      notableProjects: ["Desenvolvimento de APIs", "Projetos de Data Science"],
      associatedTools: ["Django", "Flask", "Jupyter Notebooks"],
      certifications: ["Python Institute Certified Associate"],
      complementarySkills: ["Python", "Data Analysis", "Machine Learning"]
    },
    {
      id: 4,
      title: "NetBeans",
      srcImg: "assets/img/netbeans-logo.png",
      yearsExperience: 4,
      projectsInvolved: 6,
      description: "IDE versátil para desenvolvimento de software em Java e outras linguagens.",
      proficiencyLevel: "Intermediário",
      notableProjects: ["Desenvolvimento de Aplicações Java", "Ferramentas de Desenvolvedor"],
      associatedTools: ["Maven", "Ant", "Git"],
      certifications: ["Oracle Certified Professional: Java SE"],
      complementarySkills: ["Java", "JavaFX", "Spring"]
    }
  ],
  modelagem: [
    {
      id: 1,
      title: "Photoshop",
      srcImg: "assets/img/photoshop-logo.png",
      yearsExperience: 5,
      projectsInvolved: 15,
      description: "Software líder em edição de imagens e design gráfico.",
      proficiencyLevel: "Avançado",
      notableProjects: ["Design de Interface de Usuário", "Criação de Materiais Publicitários"],
      associatedTools: ["Adobe Illustrator", "Adobe XD", "InDesign"],
      certifications: ["Adobe Certified Expert"],
      complementarySkills: ["Design Gráfico", "Edição de Vídeo", "UX/UI Design"]
    },
    {
      id: 2,
      title: "Figma",
      srcImg: "assets/img/figma-logo.png",
      yearsExperience: 2,
      projectsInvolved: 7,
      description: "Ferramenta de design colaborativa para criação de interfaces e protótipos.",
      proficiencyLevel: "Intermediário",
      notableProjects: ["Desenvolvimento de Prototipos Web", "Design Colaborativo"],
      associatedTools: ["Sketch", "Adobe XD", "InVision"],
      certifications: ["Certified UX/UI Designer"],
      complementarySkills: ["Prototipagem", "Design Colaborativo", "Frontend Development"]
    },
    {
      id: 3,
      title: "Draw.io",
      srcImg: "assets/img/draw.io-logo.png",
      yearsExperience: 3,
      projectsInvolved: 6,
      description: "Ferramenta de diagramação online para criação de fluxogramas, diagramas de rede e outros.",
      proficiencyLevel: "Intermediário",
      notableProjects: ["Modelagem de Processos", "Documentação de Sistemas"],
      associatedTools: ["Lucidchart", "Microsoft Visio", "OmniGraffle"],
      certifications: ["Certified Diagramming Specialist"],
      complementarySkills: ["Process Modeling", "System Documentation", "Business Analysis"]
    },
    {
      id: 4,
      title: "Visual Paradigm",
      srcImg: "assets/img/visualparadigm-logo.png",
      yearsExperience: 4,
      projectsInvolved: 10,
      description: "Ferramenta para modelagem de software e engenharia de processos com suporte para UML, BPMN e ERD.",
      proficiencyLevel: "Avançado",
      notableProjects: ["Modelagem de Sistemas", "Desenho de Arquitetura de Software"],
      associatedTools: ["Enterprise Architect", "StarUML", "Archi"],
      certifications: ["Certified UML Professional"],
      complementarySkills: ["Software Architecture", "Business Process Management", "Requirements Analysis"]
    }
  ],
  estilosanimacoes: [
    {
      id: 1,
      title: "CSS",
      srcImg: "assets/img/css-logo.png",
      yearsExperience: 5,
      projectsInvolved: 20,
      description: "Linguagem de estilo usada para descrever a apresentação de documentos HTML e XML.",
      proficiencyLevel: "Avançado",
      notableProjects: ["Sites Responsivos", "Aplicações Web Interativas"],
      associatedTools: ["Sass", "LESS", "Bootstrap"],
      certifications: ["Certified CSS Developer"],
      complementarySkills: ["HTML", "Web Design", "Frontend Development"]
    },
    {
      id: 2,
      title: "HTML",
      srcImg: "assets/img/html-logo.png",
      yearsExperience: 5,
      projectsInvolved: 25,
      description: "Linguagem de marcação padrão para criação de páginas web.",
      proficiencyLevel: "Avançado",
      notableProjects: ["Desenvolvimento de Websites", "Sistemas de Gerenciamento de Conteúdo"],
      associatedTools: ["HTML5", "W3C Validator", "Emmet"],
      certifications: ["Certified HTML Developer"],
      complementarySkills: ["CSS", "JavaScript", "Web Development"]
    },
    {
      id: 3,
      title: "SASS",
      srcImg: "assets/img/sass-logo.png",
      yearsExperience: 3,
      projectsInvolved: 10,
      description: "Extensão de CSS que permite o uso de variáveis, aninhamento, mixins e outras funcionalidades avançadas.",
      proficiencyLevel: "Intermediário",
      notableProjects: ["Temas Personalizados", "Sistemas de Design"],
      associatedTools: ["Compass", "Bourbon", "SassDoc"],
      certifications: ["Certified Sass Developer"],
      complementarySkills: ["CSS", "Preprocessors", "Frontend Development"]
    },
    {
      id: 4,
      title: "GSAP",
      srcImg: "assets/img/gsap-logo.png",
      yearsExperience: 2,
      projectsInvolved: 5,
      description: "Biblioteca de animação JavaScript que facilita a criação de animações complexas e performáticas.",
      proficiencyLevel: "Intermediário",
      notableProjects: ["Animações de Interação", "Microssites Animados"],
      associatedTools: ["Three.js", "PixiJS", "Anime.js"],
      certifications: ["Certified GSAP Developer"],
      complementarySkills: ["JavaScript", "Animation", "Web Graphics"]
    }
  ],
  arquiteturaspadroes: [
    {
      id: 1,
      title: "MVC",
      srcImg: "assets/img/mvc-logo.png",
      yearsExperience: 4,
      projectsInvolved: 12,
      description: "Padrão de arquitetura de software que divide uma aplicação em três componentes principais: Model, View e Controller.",
      proficiencyLevel: "Intermediário",
      notableProjects: ["Aplicações Web Empresariais", "Sistemas de Gerenciamento de Conteúdo"],
      associatedTools: ["ASP.NET MVC", "Spring MVC", "Ruby on Rails"],
      certifications: ["Certified MVC Developer"],
      complementarySkills: ["Software Design", "Architectural Patterns", "Frontend Frameworks"]
    },
    {
      id: 2,
      title: "Clean Architecture",
      srcImg: "assets/img/cleanarch-logo.png",
      yearsExperience: 3,
      projectsInvolved: 8,
      description: "Abordagem para a construção de sistemas que prioriza a independência de frameworks, bibliotecas e camadas de implementação.",
      proficiencyLevel: "Intermediário",
      notableProjects: ["Sistemas Modulares", "Aplicações Empresariais"],
      associatedTools: ["Uncle Bob's Clean Architecture Tools", "Hexagonal Architecture", "Onion Architecture"],
      certifications: ["Certified Clean Architecture Developer"],
      complementarySkills: ["Software Architecture", "Domain-Driven Design", "Test-Driven Development"]
    },
    {
      id: 3,
      title: "DDD",
      srcImg: "assets/img/ddd-logo.png",
      yearsExperience: 4,
      projectsInvolved: 10,
      description: "Domain-Driven Design é uma abordagem ao design de software que se concentra na complexidade do domínio do negócio.",
      proficiencyLevel: "Intermediário",
      notableProjects: ["Aplicações de Negócios Complexas", "Sistemas Distribuídos"],
      associatedTools: ["CQRS", "Event Sourcing", "DDD Patterns"],
      certifications: ["Certified DDD Practitioner"],
      complementarySkills: ["Domain Modeling", "Software Design", "Architectural Patterns"]
    }
  ]
}