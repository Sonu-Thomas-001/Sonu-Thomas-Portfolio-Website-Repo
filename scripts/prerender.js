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
    path: '/projects',
    title: 'Project Showcases & Architecture Prototypes | Sonu Thomas',
    description: 'Explore conceptual project showcases, prototypes, and technical architectures developed by Sonu Thomas.',
    h1: 'Project Showcases & Architectural Prototypes',
    subtitle: 'Demonstrations, prototypes, and concept architectures',
    content: `
      <p>A catalog of conceptual prototypes, architectural demonstrations, and exploratory projects illustrating modern software engineering, generative AI workflows, and responsive web systems.</p>
      <article>
        <h2>Generative AI Prototype</h2>
        <p><strong>Stack:</strong> TypeScript, GenAI, React, FastAPI</p>
        <p>Exploratory prototype exploring automated asset placement, conditioning models, and natural language design editing.</p>
      </article>
      <article>
        <h2>Cloud Architecture Visualizer</h2>
        <p><strong>Stack:</strong> TypeScript, React, Mermaid.js</p>
        <p>Conceptual developer tool turning structured text descriptions into interactive visual architecture diagrams.</p>
      </article>
      <article>
        <h2>Interactive Web Application</h2>
        <p><strong>Stack:</strong> TypeScript, React, Web APIs</p>
        <p>Demonstration of real-time client state management, responsive design patterns, and interactive user experiences.</p>
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
        <li><strong>Email:</strong> sonuthomaswork@gmail.com</li>
        <li><strong>Location:</strong> Kannur, Kerala, India</li>
        <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/sonuthomas001/">linkedin.com/in/sonuthomas001</a></li>
        <li><strong>GitHub:</strong> <a href="https://github.com/Sonu-Thomas-001">github.com/Sonu-Thomas-001</a></li>
      </ul>
    `
  },
  {
    path: '/web-developer-kannur',
    title: 'Web Developer in Kannur | Sonu Thomas',
    description: 'Freelance web designer and full-stack developer in Kannur, Kerala offering modern website development, SEO optimization, and web applications.',
    h1: 'Web Developer & Designer in Kannur, Kerala',
    subtitle: 'Modern web solutions crafted with precision',
    content: `
      <p>Sonu Thomas provides professional web design and full-stack development services in Kannur, Kerala. Delivering high-performance, mobile-responsive, and SEO-optimized web platforms for businesses and startups.</p>
    `
  },
  {
    path: '/ai-developer-kerala',
    title: 'AI Developer in Kerala | Sonu Thomas',
    description: 'AI Software Engineer based in Kerala specializing in Generative AI, LLM agents, intelligent workflows, and custom AI applications.',
    h1: 'AI Software Engineer & Intelligent Systems Developer in Kerala',
    subtitle: 'Applied Artificial Intelligence engineering',
    content: `
      <p>Based in Kerala, Sonu Thomas designs and builds production-grade Artificial Intelligence solutions, custom LLM agents, Retrieval-Augmented Generation (RAG) systems, and machine learning pipelines.</p>
    `
  },
  {
    path: '/software-engineer-kerala',
    title: 'Software Engineer in Kerala | Sonu Thomas',
    description: 'Enterprise software engineer in Kerala experienced in Java, Python, TypeScript, and cloud-native application architectures.',
    h1: 'Full-Stack Software Engineer in Kerala',
    subtitle: 'Enterprise reliability meets modern software design',
    content: `
      <p>Sonu Thomas is an experienced software engineer based in Kerala with a background spanning enterprise backend systems at HCLTech, full-stack web platforms, and data science foundations at IIT Guwahati.</p>
    `
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
