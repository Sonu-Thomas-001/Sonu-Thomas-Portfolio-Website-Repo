import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

if (!fs.existsSync(distDir)) {
  console.error("Error: dist/ directory not found. Please run 'vite build' first.");
  process.exit(1);
}

const templatePath = path.join(distDir, 'index.html');
const templateHtml = fs.readFileSync(templatePath, 'utf-8');

const DOMAIN = 'https://www.sonuthomas.me';

// Route-specific configurations and crawlable semantic bodies
const routes = [
  {
    path: '/',
    title: 'Sonu Thomas — AI Software Engineer & Intelligent Systems',
    description: 'Personal portfolio of Sonu Thomas, an AI Software Engineer crafting intelligent systems, LLM solutions, and full-stack software with editorial precision.',
    h1: 'Sonu Thomas',
    subtitle: 'AI Software Engineer & Intelligent Systems',
    content: `
      <p>Sonu Thomas is an AI Software Engineer at HCLTech and a Data Science &amp; Artificial Intelligence scholar at IIT Guwahati (BSc Hons). Specializing in production-grade intelligent systems, Generative AI applications, agentic workflows, and scalable full-stack web platforms.</p>
      <h2>Core Engineering Competencies</h2>
      <ul>
        <li><strong>AI &amp; Generative Systems:</strong> LLM Agents, RAG Pipelines, Prompt Engineering, Gemini API, OpenAI APIs, Stable Diffusion, ControlNet, NLP.</li>
        <li><strong>Programming Languages:</strong> Python, Java, TypeScript, JavaScript, SQL / PL/SQL, C/C++.</li>
        <li><strong>Frontend &amp; Architecture:</strong> React, Next.js, Tailwind CSS, Three.js, Framer Motion.</li>
        <li><strong>Enterprise Backend &amp; Data:</strong> Oracle DB, PostgreSQL, Linux/Unix, Spring Boot, FastAPI, Docker, Git.</li>
      </ul>
      <h2>Project Prototypes &amp; Concepts</h2>
      <article>
        <h3>Generative AI Prototype</h3>
        <p>Exploratory prototype demonstrating prompt-driven parameters, multimodal conditioning, and reactive frontend visualization.</p>
      </article>
      <article>
        <h3>Cloud Architecture Visualizer</h3>
        <p>Conceptual developer tool transforming structured text specifications into dynamic visual diagram models.</p>
      </article>
      <article>
        <h3>Interactive Web Application</h3>
        <p>Demonstration of modern component architectures, client-side state handling, and high-performance interactive interfaces.</p>
      </article>
    `
  },
  {
    path: '/skills',
    title: 'Technical Arsenal & Engineering Capability Map | Sonu Thomas',
    description: 'Comprehensive technical capability map of Sonu Thomas across AI, LLMs, LangGraph multi-agent orchestration, full-stack software, cloud infrastructure, vector databases, and enterprise ITSM systems integration.',
    h1: 'Technical Arsenal & Engineering Capability Map',
    subtitle: 'From Autonomous LLM Agents to Enterprise Production Infrastructure',
    content: `
      <p>A comprehensive, capability-driven technical map detailing competencies across 9 core engineering disciplines, end-to-end AI system architecture, and verifiable production project associations.</p>
      <h2>01 — AI, LLM &amp; Agent Engineering</h2>
      <p>Google Gemini, Anthropic Claude, AWS Bedrock, Vertex AI, LangGraph cyclic state machines, LangChain, Multi-Agent Systems, Tool/Function Calling, Human-in-the-Loop governance, Enterprise Hybrid RAG (BM25 + ChromaDB), and context engineering.</p>
      <h2>02 — Programming &amp; Software Engineering</h2>
      <p>Python, TypeScript, JavaScript, SQL, Java, C++, Object-Oriented Programming, Data Structures &amp; Algorithms, API Design, and Modular Architecture.</p>
      <h2>03 — Frontend Engineering</h2>
      <p>React 19, Next.js 15, Tailwind CSS, Kinetic UI, Component Architecture, State Management, and sub-second Web Performance Optimization.</p>
      <h2>04 — Backend &amp; API Engineering</h2>
      <p>FastAPI, Flask, Node.js, Express.js, REST APIs, Microservices, Async Python, Webhooks, and Third-Party System Integration.</p>
      <h2>05 — Cloud &amp; Infrastructure</h2>
      <p>Google Cloud (Vertex AI, BigQuery), AWS (Bedrock), Docker containers, Linux SRE, CI/CD automated deployment pipelines.</p>
      <h2>06 — Databases &amp; Data Engineering</h2>
      <p>PostgreSQL, Oracle Database, SQL, BigQuery analytics, ChromaDB vector stores, ETL/ELT pipelines, and data modeling.</p>
      <h2>07 — Enterprise Integration &amp; Automation</h2>
      <p>ServiceNow REST APIs, Jira, Confluence, Playwright browser automation, and mission-critical enterprise workflow automation.</p>
      <h2>08 — Development Tools &amp; Workflow</h2>
      <p>Git, GitHub Actions, VS Code, Linux workstation tools, and systematic debugging.</p>
      <h2>09 — End-to-End AI System Architecture</h2>
      <p>Integrated blueprint connecting client UI layers, FastAPI gateways, LangGraph multi-agent runtimes, tool sandboxes, and enterprise databases.</p>
    `
  },
  {
    path: '/projects',
    title: 'Flagship AI Systems & Enterprise Architecture | Sonu Thomas',
    description: 'Explore flagship autonomous AI platforms and enterprise architectures: Agentic Co-Worker Platform (100+ Digital Workers), Change Co-Worker (Change Management Platform), RCA-Agent (Root Cause Analysis System), TicketWave (High-Concurrency Ticketing), SmartDesk AI (Multi-Agent Incident Management Platform), QubiMind (Multi-Agent AI Operating System), Multi-Agent Enterprise AI Assistant (7 Micro-Agents & Hybrid RAG), Versant Practice Test Simulator (Speech AI & GSE/CEFR Scoring), and ResolveAI (15-Node LangGraph Service Desk Agent).',
    h1: 'Enterprise Multi-Agent Systems & Platforms',
    subtitle: 'Flagship Autonomous AI & Intelligent Infrastructure',
    content: `
      <p>Enterprise-grade multi-agent architectures and intelligent platforms engineered for autonomous ITSM, change intelligence, high-concurrency booking, and production operational resilience.</p>
      <article>
        <h2>Agentic Co-Worker Platform</h2>
        <p><strong>Stack:</strong> LangGraph, Gemini LLM, MCP Protocol, ChromaDB, WebSockets, Python, ServiceNow, Control-M, Jira API, MongoDB Atlas</p>
        <p>Deploys a fleet of 100+ Core Digital Workers spanning 15 IT specializations with distinct personas, coordinated by a Central Brain with 40+ event types on pub/sub EventBus, reducing MTTR by 70%.</p>
      </article>
      <article>
        <h2>Change Co-Worker</h2>
        <p><strong>Stack:</strong> Google Gemini 2.5 Flash, RAG, Hub-and-Spoke Multi-Agent Architecture, ServiceNow REST API, ChromaDB, FastAPI, WebSockets</p>
        <p>Enterprise-grade Multi-Agent AI System powered by 5 specialised agents and RAG to automate IT change requests, assess collision risk, and expedite CAB approvals from 4 hours to 5 minutes.</p>
      </article>
      <article>
        <h2>RCA-Agent</h2>
        <p><strong>Stack:</strong> Google Gemini, ChromaDB RAG, Flask API, Python, Log Analytics, Web UI</p>
        <p>AI-powered Root Cause Analysis system combining multi-step reasoning, ChromaDB vector retrieval across operational datasets (logs, runbooks, incidents, changes), and asynchronous job analysis.</p>
      </article>
      <article>
        <h2>TicketWave</h2>
        <p><strong>Stack:</strong> Java 17, Spring Boot 3.x, PostgreSQL 15+, Redis 7 with Redisson, React 18, Docker</p>
        <p>Production-grade travel and event ticket booking platform built as a modular monolith with a three-layer double-booking defense (Redis locks, Redis TTL holds, PostgreSQL unique constraints), dynamic demand pricing, and sub-100ms booking latency.</p>
      </article>
      <article>
        <h2>SmartDesk AI</h2>
        <p><strong>Stack:</strong> Google Gemini 2.0 Flash, LangChain 0.3, ChromaDB, ServiceNow REST, Python 3.12, Flask, Docker</p>
        <p>Agentic IT incident triage and resolution system using LLM-powered agents and ChromaDB vector search to automatically classify, assign across 8 specialist teams, and resolve ServiceNow incidents.</p>
      </article>
      <article>
        <h2>QubiMind</h2>
        <p><strong>Stack:</strong> Next.js 15, React 19, FastAPI, Python 3.12, LangGraph, LangChain, Google Gemini API, PostgreSQL, Redis, Docker</p>
        <p>Enterprise-grade Multi-Agent AI Operating System developed by QubiQode that enables organizations to deploy, manage, and orchestrate fleets of specialized AI agents with LangGraph, Enterprise RAG, external tool calling, HITL manager approvals, and SOC2 5-tier RBAC security.</p>
      </article>
      <article>
        <h2>Multi-Agent Enterprise AI Assistant</h2>
        <p><strong>Stack:</strong> Next.js 15, React 19, FastAPI, Python 3.12, LangGraph, ChromaDB (BM25), Python Sandbox, Tailwind CSS v4, SQLite, SQLAlchemy</p>
        <p>Flagship enterprise AI platform orchestrating 7 specialized micro-agents in concurrent, stateful LangGraph channels. Features dual-retriever hybrid RAG (sparse BM25 + dense ChromaDB with Reciprocal Rank Fusion, k=60), serverless isolated Python code sandbox execution, and bank-grade 256-bit JWT authentication with 16 granular RBAC permissions.</p>
      </article>
      <article>
        <h2>Versant Practice Test Simulator</h2>
        <p><strong>Stack:</strong> React 19, TypeScript, Vite, Tailwind CSS, Google Gemini AI, Web Speech API, Speech Recognition, Text-to-Speech, GSE / CEFR Scoring</p>
        <p>Realistic mock Versant speaking and listening exam simulator with client-side speech recognition, TTS prompt synthesis, automated Gemini AI performance assessment, GSE &amp; CEFR proficiency grading (10-90 scale), adaptive exam countdowns, and print-ready PDF scorecards across Parts A-F.</p>
      </article>
      <article>
        <h2>ResolveAI - IT Service Desk Agent</h2>
        <p><strong>Stack:</strong> FastAPI, Python 3.12, LangGraph, LangChain, ChromaDB, Google Gemini, Pydantic, REST API, Docker</p>
        <p>Intelligent IT service desk assistant powered by a 15-node LangGraph state machine and ChromaDB vector RAG. Automates incident triage, executes mock diagnostic tools (VPN, email, account, device health), evaluates multi-factor confidence, and enforces human-in-the-loop approval pauses on 100% synthetic enterprise data.</p>
      </article>
    `
  },
  {
    path: '/insights',
    title: 'AI Engineering Insights & Technical Writing | Sonu Thomas',
    description: 'Technical articles, research syntheses, and engineering reflections on agentic AI, LLM orchestration, and modern web systems by Sonu Thomas.',
    h1: 'AI Engineering Insights & Future Systems',
    subtitle: 'Research, Architecture, and Exploration',
    content: `
      <p>Technical writing, research syntheses, and experiments at the intersection of enterprise software, machine learning, and autonomous agentic workflows.</p>
      <article>
        <h2>Engineering Autonomous Agents with Deterministic Guardrails</h2>
        <p>Examining how to build reliable production systems on top of probabilistic LLMs using structured output schemas, state machines, and fallback policies.</p>
      </article>
      <article>
        <h2>Optimizing RAG Pipelines for Enterprise Knowledge Retrieval</h2>
        <p>Practical strategies for chunking, hybrid keyword-vector retrieval, reciprocal rank fusion, and reranking across enterprise documentation corpora.</p>
      </article>
      <article>
        <h2>Bridging Enterprise Reliability and AI Innovation</h2>
        <p>How lessons from enterprise production change management (Java, Unix, relational integrity) apply to deploying reliable generative AI workflows.</p>
      </article>
    `
  },
  {
    path: '/certifications',
    title: 'Licenses & Certifications | Sonu Thomas',
    description: 'Industry-recognized credentials, Google Cloud certifications, and specialized coursework completed by Sonu Thomas in AI, Data Science, and Cloud.',
    h1: 'Licenses & Certifications',
    subtitle: 'Credentials & Continuous Upskilling',
    content: `
      <p>A comprehensive record of technical credentials, specialized coursework, and industry-recognized qualifications.</p>
      <ul>
        <li><strong>Prompt Design in Vertex AI</strong> — Google Cloud Skills Boost (Credential ID: 15478363, Issued May 2025)</li>
        <li><strong>Cloud Digital Leader</strong> — Google Cloud Skills Boost (Credential ID: 5122267686b949689ab761e0005a769d, Issued Sep 2024)</li>
        <li><strong>Data Science Foundations</strong> — Great Learning Academy (Credential ID: JJIOMJTY, Issued Jun 2024)</li>
        <li><strong>Introduction to Artificial Intelligence</strong> — Great Learning Academy (Credential ID: OPCYHCVS, Issued Jun 2024)</li>
      </ul>
    `
  },
  {
    path: '/awards',
    title: 'Honors & Distinctions | Sonu Thomas',
    description: 'Peer recognitions, enterprise honors, and distinctions awarded to Sonu Thomas for technical execution and engineering performance.',
    h1: 'Recognition & Awards',
    subtitle: 'Distinctions & Peer Recognition',
    content: `
      <p>Commendations and formal honors received for technical performance, operational excellence, and engineering leadership at HCLTech and academic institutions.</p>
    `
  },
  {
    path: '/volunteering',
    title: 'Volunteering & Community Leadership | Sonu Thomas',
    description: 'Developer community initiatives, technical mentorship, and volunteer leadership contributions by Sonu Thomas.',
    h1: 'Volunteering & Leadership',
    subtitle: 'Initiatives & Giving Back',
    content: `
      <p>Giving back through technical mentorship, developer community initiatives, and collaborative leadership in Kerala and developer communities.</p>
    `
  },
  {
    path: '/contact',
    title: 'Contact Sonu Thomas | AI Software Engineer',
    description: 'Get in touch with Sonu Thomas for AI engineering collaborations, software development consulting, or enterprise inquiries.',
    h1: 'Connect & Collaborate',
    subtitle: 'Let\'s build intelligent systems together',
    content: `
      <p>Interested in collaborating on AI engineering, LLM systems, or full-stack software development? Reach out directly:</p>
      <ul>
        <li><strong>Email (AI / Primary):</strong> sonuthomas.ai@gmail.com</li>
        <li><strong>Email (Dev / Consulting):</strong> sonuthomas.dev@gmail.com</li>
        <li><strong>Location:</strong> Kannur, Kerala, India</li>
        <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/sonuthomasai/">linkedin.com/in/sonuthomasai</a></li>
        <li><strong>GitHub:</strong> <a href="https://github.com/Sonu-Thomas-001">github.com/Sonu-Thomas-001</a></li>
      </ul>
    `,
    faqs: [
      {
        question: 'Are you open to freelance or contract work?',
        answer: 'Yes, I am currently accepting select freelance projects, particularly those involving full-stack web development, AI/LLM integration, and automation scripting. I am also open to long-term consulting contracts.',
      },
      {
        question: 'What is your primary technology stack?',
        answer: 'For AI engineering, I work with Google Gemini, Anthropic Claude, LangGraph, and ChromaDB-backed RAG pipelines. For web development, I specialize in React (Next.js, TypeScript, Tailwind CSS). For backend and enterprise systems, I rely on Python, Java, and SQL/PostgreSQL.',
      },
      {
        question: 'Do you handle enterprise-level projects?',
        answer: 'Absolutely. My full-time role at HCLTech involves orchestrating critical change governance for large-scale enterprise environments. I understand the importance of compliance, risk analysis, and zero-downtime deployments.',
      },
      {
        question: 'Where are you located and can you work remotely?',
        answer: 'I am based in Kannur, Kerala, India. I am fully equipped for remote work and have experience collaborating with cross-functional teams across different time zones.',
      },
      {
        question: 'How do you approach AI integration in projects?',
        answer: 'I view AI as a tool for measurable efficiency. Whether it is an autonomous agent for incident triage, a RAG pipeline for enterprise knowledge, or a predictive model for data analysis, I focus on practical, production-hardened implementations with deterministic guardrails.',
      },
    ],
  },
  {
    path: '/privacy',
    title: 'Privacy Policy | Sonu Thomas Portfolio',
    description: 'Privacy policy for sonuthomas.me detailing data handling and visitor protection practices.',
    h1: 'Privacy Policy',
    subtitle: 'Transparency & User Trust',
    content: `<p>Details how information is collected, processed, and protected when visiting sonuthomas.me.</p>`
  },
  {
    path: '/terms',
    title: 'Terms of Service | Sonu Thomas Portfolio',
    description: 'Terms of service governing the use of sonuthomas.me.',
    h1: 'Terms of Service',
    subtitle: 'Usage Guidelines',
    content: `<p>Terms and conditions governing the use and interaction with sonuthomas.me.</p>`
  },
  {
    path: '/cookies',
    title: 'Cookie Policy | Sonu Thomas Portfolio',
    description: 'Cookie policy explaining how sonuthomas.me uses cookies and client storage.',
    h1: 'Cookie Policy',
    subtitle: 'Storage & Analytics',
    content: `<p>Explains how local storage and cookies are used on sonuthomas.me to manage preferences.</p>`
  }
];

function generateHtmlForRoute(route) {
  const canonicalUrl = `${DOMAIN}${route.path === '/' ? '' : route.path}`;
  let html = templateHtml;

  // Replace Title
  html = html.replace(/<title>.*?<\/title>/s, `<title>${route.title}</title>`);
  html = html.replace(/<meta name="title" content=".*?" \/>/s, `<meta name="title" content="${route.title}" />`);

  // Replace Description
  html = html.replace(/<meta name="description" content=".*?" \/>/s, `<meta name="description" content="${route.description}" />`);

  // Replace Canonical Link
  html = html.replace(/<link rel="canonical" href=".*?" \/>/s, `<link rel="canonical" href="${canonicalUrl}" />`);

  // Replace OpenGraph & Twitter
  html = html.replace(/<meta property="og:title" content=".*?" \/>/s, `<meta property="og:title" content="${route.title}" />`);
  html = html.replace(/<meta property="og:description" content=".*?" \/>/s, `<meta property="og:description" content="${route.description}" />`);
  html = html.replace(/<meta property="og:url" content=".*?" \/>/s, `<meta property="og:url" content="${canonicalUrl}" />`);

  html = html.replace(/<meta name="twitter:title" content=".*?" \/>/s, `<meta name="twitter:title" content="${route.title}" />`);
  html = html.replace(/<meta name="twitter:description" content=".*?" \/>/s, `<meta name="twitter:description" content="${route.description}" />`);
  html = html.replace(/<meta name="twitter:url" content=".*?" \/>/s, `<meta name="twitter:url" content="${canonicalUrl}" />`);

  // Replace JSON-LD graph with a route-correct WebPage/ProfilePage node instead of
  // shipping the homepage's graph verbatim on every prerendered route.
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${DOMAIN}/#website`,
        "url": `${DOMAIN}/`,
        "name": "Sonu Thomas Portfolio",
        "description": "Personal portfolio of Sonu Thomas, an AI Software Engineer crafting intelligent systems and production software.",
        "publisher": { "@id": `${DOMAIN}/#person` }
      },
      {
        "@type": route.path === '/' ? "ProfilePage" : "WebPage",
        "@id": `${canonicalUrl}#webpage`,
        "url": canonicalUrl,
        "name": route.title,
        "description": route.description,
        "isPartOf": { "@id": `${DOMAIN}/#website` },
        "about": { "@id": `${DOMAIN}/#person` },
        "mainEntity": route.path === '/' ? { "@id": `${DOMAIN}/#person` } : undefined
      },
      {
        "@type": "Person",
        "@id": `${DOMAIN}/#person`,
        "name": "Sonu Thomas",
        "url": `${DOMAIN}/`,
        "image": "https://www.sonuthomas.me/images/Professional%20Pic%20Square.png",
        "jobTitle": "AI Software Engineer",
        "description": "AI Software Engineer at HCLTech and Data Science & AI scholar at IIT Guwahati building scalable intelligent systems, LLM solutions, and modern software.",
        "worksFor": { "@type": "Organization", "name": "HCLTech", "url": "https://www.hcltech.com/" },
        "alumniOf": { "@type": "CollegeOrUniversity", "name": "IIT Guwahati", "url": "https://www.iitg.ac.in/" },
        "address": { "@type": "PostalAddress", "addressLocality": "Kannur", "addressRegion": "Kerala", "addressCountry": "India" },
        "sameAs": [
          "https://www.linkedin.com/in/sonuthomasai/",
          "https://github.com/Sonu-Thomas-001",
          "https://www.instagram.com/sonu_thomz/",
          `${DOMAIN}/`
        ],
        "knowsAbout": [
          "Artificial Intelligence", "Generative AI", "Large Language Models", "Agentic AI",
          "Retrieval-Augmented Generation", "Full Stack Development", "Python", "Java", "TypeScript",
          "React", "Enterprise Backend Architecture"
        ]
      }
    ]
  };
  html = html.replace(
    /<script type="application\/ld\+json">[\s\S]*?<\/script>/,
    `<script type="application/ld+json">\n    ${JSON.stringify(jsonLd)}\n    </script>`
  );

  // Inject FAQPage schema for routes with an FAQ block (e.g. /contact)
  if (route.faqs && route.faqs.length > 0) {
    const faqJsonLd = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": route.faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": { "@type": "Answer", "text": faq.answer },
      })),
    };
    html = html.replace(
      '</head>',
      `  <script type="application/ld+json">${JSON.stringify(faqJsonLd)}</script>\n  </head>`
    );
  }

  // Replace #root inner semantic content
  const rootReplacement = `<div id="root">
      <!-- Semantic Crawler & Pre-render Fallback (Instant extraction for AI bots and Search Engines before client hydration) -->
      <header style="max-width: 900px; margin: 40px auto; padding: 0 20px; font-family: system-ui, sans-serif;">
        <h1 style="font-size: 2.25rem; font-weight: 700; color: #1A1614; margin-bottom: 8px;">${route.h1}</h1>
        ${route.subtitle ? `<p style="font-size: 1.25rem; color: #4F46E5; font-weight: 600; margin-top: 0;">${route.subtitle}</p>` : ''}
        <nav aria-label="Portfolio Navigation" style="margin: 20px 0;">
          <ul style="display: flex; flex-wrap: wrap; gap: 16px; list-style: none; padding: 0;">
            <li><a href="/" style="color: #4F46E5; text-decoration: none; font-weight: 500;">Home</a></li>
            <li><a href="/projects" style="color: #4F46E5; text-decoration: none; font-weight: 500;">Projects &amp; Case Studies</a></li>
            <li><a href="/insights" style="color: #4F46E5; text-decoration: none; font-weight: 500;">AI Insights</a></li>
            <li><a href="/certifications" style="color: #4F46E5; text-decoration: none; font-weight: 500;">Certifications</a></li>
            <li><a href="/awards" style="color: #4F46E5; text-decoration: none; font-weight: 500;">Honors &amp; Awards</a></li>
            <li><a href="/volunteering" style="color: #4F46E5; text-decoration: none; font-weight: 500;">Volunteering</a></li>
            <li><a href="/contact" style="color: #4F46E5; text-decoration: none; font-weight: 500;">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main style="max-width: 900px; margin: 0 auto; padding: 0 20px; font-family: system-ui, sans-serif;">
        ${route.content}
        ${route.faqs ? `
        <section aria-labelledby="faq-heading" style="margin-top: 32px;">
          <h2 id="faq-heading" style="font-size: 1.5rem; color: #1A1614; border-bottom: 1px solid #E8E0D8; padding-bottom: 8px;">Frequently Asked Questions</h2>
          ${route.faqs.map((faq) => `
          <article style="margin: 16px 0;">
            <h3 style="font-size: 1.1rem; color: #1A1614; margin-bottom: 4px;">${faq.question}</h3>
            <p style="color: #4A4340; line-height: 1.6; margin: 0;">${faq.answer}</p>
          </article>`).join('')}
        </section>` : ''}
      </main>
    </div>`;

  html = html.replace(/<div id="root">[\s\S]*?<\/div>/, rootReplacement);

  return html;
}

console.log('Starting static pre-rendering of routes...');

routes.forEach((route) => {
  const generatedHtml = generateHtmlForRoute(route);

  if (route.path === '/') {
    fs.writeFileSync(templatePath, generatedHtml, 'utf-8');
    console.log(`✓ Pre-rendered root: dist/index.html`);
  } else {
    const routeDir = path.join(distDir, route.path.replace(/^\//, ''));
    if (!fs.existsSync(routeDir)) {
      fs.mkdirSync(routeDir, { recursive: true });
    }
    const filePath = path.join(routeDir, 'index.html');
    fs.writeFileSync(filePath, generatedHtml, 'utf-8');
    console.log(`✓ Pre-rendered route: dist${route.path}/index.html`);
  }
});

console.log(`Successfully pre-rendered ${routes.length} routes for SEO and AI crawlers!`);
