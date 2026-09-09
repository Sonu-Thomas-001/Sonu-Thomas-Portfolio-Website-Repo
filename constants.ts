
import { 
  ExperienceItem, 
  SkillCategory, 
  ProjectItem, 
  EducationItem, 
  CertificationItem,
  BlogItem,
  TalkItem,
  OpenSourceItem,
  ProcessItem,
  GrowthItem,
  VolunteeringItem,
  AwardItem
} from './types';

export const PERSONAL_DETAILS = {
  name: "Sonu Thomas",
  role: "AI Software Engineer | Production Change Manager",
  tagline: "AI Software Engineer | Building Scalable Intelligent Systems",
  location: "Kannur, Kerala, India",
  email: "sonuthomas.ai@gmail.com",
  secondaryEmail: "sonuthomas.dev@gmail.com",
  emails: {
    ai: "sonuthomas.ai@gmail.com",
    dev: "sonuthomas.dev@gmail.com"
  },
  phone: "+91 8921 526656",
  about: "I am an AI Software Engineer with over 3+ years of hands-on experience in software development, web technologies, and building production-ready digital systems, combined with a strong and growing focus on Artificial Intelligence, intelligent automation, and applied AI engineering.",
  expandedAbout: "My technology journey began early through independent software engineering and evolved through 3+ years of freelance development. Today, at HCLTech, I focus on AI engineering—treating intelligent automation not just as experimentation, but as a disciplined engineering practice emphasizing system design, scalability, and business impact.",
  resumeLink: "https://cdn.jsdelivr.net/gh/Sonu-Thomas-001/image-host/Sonu-Thomas-Portfolio-Website-Repo/Resume.pdf",
  social: {
    linkedin: "https://www.linkedin.com/in/sonuthomasai/",
    github: "https://github.com/Sonu-Thomas-001",
    instagram: "https://www.instagram.com/sonu_thomz/",
    whatsapp: "https://wa.me/918921526656",
    website: "https://www.sonuthomas.me/"
  }
};

export const ABOUT_STORY = [
  {
    id: "01",
    title: "Current Execution Context",
    content: "I am currently associated with HCLTech, working within a large-scale enterprise environment that emphasizes engineering discipline, reliability, and operational excellence. My experience here has exposed me to production-grade systems, structured delivery models, cross-functional collaboration, and quality-driven software practices, all of which are critical when building scalable AI-enabled solutions.",
    highlight: "Enterprise Reliability"
  },
  {
    id: "02",
    title: "Initialization Sequence",
    content: "My technology journey began early during my Plus Two Computer Science education, diving deep into software development, web engineering, and foundational algorithms. This early start allowed me to build real-world digital solutions, understand end-to-end development lifecycles, and develop a strong problem-solving mindset that continues to shape my approach to engineering.",
    highlight: "Early Start"
  },
  {
    id: "03",
    title: "Parallel Processing",
    content: "In parallel, I have 3+ years of freelance development experience, delivering custom-built websites and digital solutions for diverse clients. This hands-on work strengthened my ability to translate abstract requirements into working software, optimize performance, ensure maintainability, and deliver user-focused solutions under real-world constraints.",
    highlight: "Freelance Agility"
  },
  {
    id: "04",
    title: "System Upgrade: AI Integration",
    content: "Over the past few years, my focus has progressively shifted toward Artificial Intelligence and AI-powered software systems. I actively upskill in areas such as machine learning fundamentals, LLM-based applications, intelligent agents, prompt engineering, and AI-assisted automation workflows. I am particularly interested in how AI can be integrated into existing software platforms to enhance decision-making and create smarter user experiences.",
    highlight: "AI Transformation"
  },
  {
    id: "05",
    title: "Engineering Philosophy",
    content: "I approach AI not as experimentation alone, but as an engineering discipline—placing strong emphasis on system design, data flow, scalability, observability, and real-world applicability. My goal is to build AI solutions that are reliable, explainable, and business-impact driven, rather than purely theoretical.",
    highlight: "Applied Engineering"
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: "hcl-eng",
    role: "Software Engineer",
    company: "HCLTech",
    period: "Jun 2024 – Present",
    description: [
      "Engineering production-grade enterprise systems using Java, SQL, and Unix, ensuring operational stability and compliance.",
      "Implementing AI-aligned workflows by leveraging Generative AI and NLP tools for intelligent automation and data processing.",
      "Driving risk-aware engineering and structured delivery models through cross-functional collaboration and Git-based version control.",
      "Optimizing backend logic and database interactions (Oracle DB, PL/SQL) to support business-critical applications."
    ],
    tech: ["Java", "Python", "GenAI", "SQL", "Unix", "Oracle DB", "Git"]
  },
  {
    id: "hcl-intern",
    role: "HCLTechbee Intern",
    company: "HCLTech",
    period: "Jan 2024 – Jun 2024",
    description: [
      "Supported enterprise application workflows by debugging and maintaining production-level codebases.",
      "Implemented backend connectivity and data logic using Java, JDBC, and Oracle PL/SQL within NetBeans IDE.",
      "Analyzed system behavior and data flow across Unix-based environments to ensure execution reliability.",
      "Collaborated with senior engineers to apply core software engineering principles to real-world delivery cycles."
    ],
    tech: ["Java", "SQL", "PL/SQL", "Oracle DB", "Unix", "JDBC"]
  },
  {
    id: "hcl-scholar",
    role: "HCLTechbee Scholar",
    company: "HCLTech",
    period: "Jun 2023 – Dec 2023",
    description: [
      "Completed a rigorous industry-aligned apprenticeship focused on core software engineering, Java programming, and database management.",
      "Mastered backend logic and data handling through hands-on training in PL/SQL, JDBC, and Relational DBMS concepts.",
      "Developed foundational skills in Algorithm design, Unix-based environments, and Computer Organization.",
      "Built a strong technical base in structured programming that facilitated the transition to enterprise-level software engineering."
    ],
    tech: ["Java", "SQL", "PL/SQL", "JDBC", "Unix", "DBMS"]
  },
  {
    id: "freelance",
    role: "Web Designer and Developer",
    company: "Freelance",
    period: "Dec 2021 – Present",
    description: [
      "Delivering end-to-end website design and development solutions for businesses, startups, and individual clients across multiple domains.",
      "Building responsive, performance-optimized websites using WordPress and modern CMS platforms with a focus on clean UI/UX and scalability.",
      "Providing ongoing support, security hardening, and SEO implementation to ensure stable and visible web platforms.",
      "Managing the full software delivery lifecycle, stakeholder communication, and version control using Git/GitHub."
    ],
    tech: ["WordPress", "Bootstrap", "SEO", "Git", "GitHub", "HTML/CSS"]
  }
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    category: "Core Stack",
    items: [
      { name: "Python", proficiency: "Expert", context: "LangGraph DAGs, FastAPI microservices, and AI agent backends", badge: "Primary" },
      { name: "Java", proficiency: "Advanced", context: "Enterprise backend services, JDBC, and multithreading at HCLTech", badge: "Enterprise" },
      { name: "TypeScript", proficiency: "Advanced", context: "Production React/Next.js architectures with strict type safety", badge: "Full-Stack" },
      { name: "React", proficiency: "Advanced", context: "Custom component design systems, hooks, and kinetic web apps", badge: "UI / UX" },
      { name: "SQL / PL/SQL", proficiency: "Advanced", context: "High-throughput queries, stored procedures, and Oracle relational pipelines", badge: "Database" },
      { name: "C / C++", proficiency: "Intermediate", context: "Memory models, algorithmic complexity, and foundational low-level systems", badge: "Systems" }
    ]
  },
  {
    category: "AI & Intelligence",
    items: [
      { name: "Generative AI", proficiency: "Expert", context: "Enterprise GenAI architectures, LLM prompting, and synthetic workflows", badge: "Flagship" },
      { name: "LLMs & Agents", proficiency: "Expert", context: "Multi-agent coordination, 100+ digital workers, and autonomous state graphs", badge: "Flagship" },
      { name: "NLP", proficiency: "Advanced", context: "Entity extraction, semantic clustering, and intent classification pipelines", badge: "Applied" },
      { name: "AI App Dev", proficiency: "Expert", context: "End-to-end intelligent systems integrating frontend, state, and LLM backends", badge: "Architecture" },
      { name: "RAG Pipelines", proficiency: "Expert", context: "ChromaDB vector retrieval with hybrid semantic search & confidence scoring", badge: "Production" },
      { name: "Gemini API", proficiency: "Expert", context: "Vertex AI prompt design, structured function calling, and multimodal reasoning", badge: "Certified" }
    ]
  },
  {
    category: "Development Environment",
    items: [
      { name: "VS Code", proficiency: "Expert", context: "Primary IDE configured with custom AI pair-programming and linting tooling", badge: "Primary" },
      { name: "IntelliJ IDEA", proficiency: "Advanced", context: "Enterprise Java development, Maven/Gradle debugging, and profiling", badge: "Enterprise" },
      { name: "Postman", proficiency: "Advanced", context: "REST API contract testing, automated mock suites, and latency benchmarking", badge: "Testing" },
      { name: "Git / GitHub", proficiency: "Advanced", context: "Trunk-based branch governance, pull request reviews, and CI automation", badge: "DevOps" },
      { name: "Jupyter", proficiency: "Advanced", context: "Exploratory data analysis, model prototyping, and vector visualization", badge: "Research" },
      { name: "Docker", proficiency: "Intermediate", context: "Multi-stage container builds, service isolation, and local environment staging", badge: "Containers" }
    ]
  },
  {
    category: "Infrastructure & Ops",
    items: [
      { name: "Oracle DB", proficiency: "Advanced", context: "Mission-critical enterprise database maintenance, schema design, and indexes", badge: "Production" },
      { name: "Linux / Unix", proficiency: "Advanced", context: "Shell scripting, process management, log auditing, and server telemetry", badge: "Core SRE" },
      { name: "Production Support", proficiency: "Expert", context: "Real-time incident response, root cause analysis, and 99.99% availability SLAs", badge: "SRE" },
      { name: "Change Management", proficiency: "Expert", context: "ITIL-compliant production change governance and zero-downtime cutovers", badge: "Awarded" },
      { name: "CI/CD Concepts", proficiency: "Intermediate", context: "Automated test validation, artifact publishing, and rollback strategies", badge: "DevOps" }
    ]
  },
  {
    category: "Web Ecosystem",
    items: [
      { name: "Next.js", proficiency: "Advanced", context: "App Router, server components, edge rendering, and SEO optimization", badge: "Modern" },
      { name: "Tailwind CSS", proficiency: "Expert", context: "Bespoke design systems, dark mode palettes, and responsive layouts", badge: "Styling" },
      { name: "WordPress (CMS)", proficiency: "Expert", context: "Custom headless architectures, theme engineering, and 3+ yrs freelance delivery", badge: "3+ Yrs" },
      { name: "HTML5 / CSS3", proficiency: "Expert", context: "Semantic web structure, WCAG accessibility, and fluid CSS animations", badge: "Standards" },
      { name: "Bootstrap", proficiency: "Advanced", context: "Rapid component prototyping and responsive grid frameworks", badge: "Framework" }
    ]
  },
  {
    category: "Professional Capabilities",
    items: [
      { name: "System Design", proficiency: "Advanced", context: "Architecting resilient distributed systems, data flows, and failure isolation", badge: "Leadership" },
      { name: "Problem Solving", proficiency: "Expert", context: "Winner 100K Coding Challenge; fast analytical root-cause diagnostic intuition", badge: "Proven" },
      { name: "Technical Writing", proficiency: "Advanced", context: "Authoring runbooks, architectural RFCs, and workshop technical tutorials", badge: "Communication" },
      { name: "Team Leadership", proficiency: "Advanced", context: "Workshop host at IIT-G Tech Club & Little KITEs student technology leader", badge: "Mentorship" },
      { name: "Agile / Scrum", proficiency: "Advanced", context: "Sprint planning, backlog grooming, cross-functional delivery, and retrospectives", badge: "Delivery" }
    ]
  }
];

export const LANGUAGES = [
  "English (Full Professional)",
  "Malayalam (Native)",
  "Tamil (Professional)",
  "Hindi (Limited)"
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "agentic-co-worker-platform",
    title: "Agentic Co-Worker Platform",
    category: "Autonomous Multi-Agent Systems",
    role: "Architect & Lead Engineer",
    stack: [
      "LangGraph",
      "Gemini LLM",
      "MCP Protocol",
      "ChromaDB",
      "WebSockets",
      "Python",
      "ServiceNow",
      "Control-M",
      "Jira API",
      "MongoDB Atlas"
    ],
    description: "Building the Future-Ready Digital Working Taskforce: Deploy a fleet of 100+ Core Digital Workers—coordinated by an intelligent Central Brain—to automate ITSM, DevOps, SRE, security, and operational intelligence workflows in production environments with 70% MTTR reduction.",
    detailedDescription: `## 🌐 The Solution & Ultimate Aim
Our ultimate aim is to build the **future-ready digital working taskforce**—an autonomous, highly specialized, and collaborative synthetic workforce that operates 24/7 alongside human engineering teams to eliminate toil, accelerate incident resolution, and ensure enterprise resilience.

### The Agentic Co-Worker Platform achieves this through:
- **100+ Core Digital Workers** spanning 15 IT specializations with distinct personas and expertise areas
- **Central Brain Orchestration** for intelligent event routing and multi-worker coordination
- **Deep ITSM/DevOps/Cloud Integrations** (ServiceNow, Jira, Confluence, Control-M, MongoDB Atlas, Gmail API)
- **Model Context Protocol (MCP) & A2A Messaging** for open tool interoperability and inter-agent collaboration
- **Real-Time Voice Assistant (Jarvis)** for hands-free operations
- **LangGraph-Based State Machines** for safe, deterministic remediation workflows
- **Semantic Memory (ChromaDB)** for learning from past incidents and automating solutions
- **Real-Time UI with WebSocket streaming** for live visibility into all operations

*This transforms reactive operations into proactive, AI-driven automation that reduces MTTR by 70%, eliminates toil, and enforces best practices.*

---

## ⚡ Core Capabilities

| Capability | Description | Benefit |
| :--- | :--- | :--- |
| **Autonomous Monitoring** | Continuous job/alert polling across all integrations with intelligent deduplication | **80% reduction** in alert noise |
| **AI-Powered Incident Analysis** | Root cause analysis using Gemini LLM + deterministic heuristics with explainability | Diagnosis in **2-3 minutes** vs. 20-30 minutes manual |
| **Safe Remediation Engine** | Action classification (SAFE/RESTRICTED) with dry-run, approval, and rollback support | **Zero** unintended consequences |
| **Natural Language Interface** | Chat-based task delegation: *"Investigate payment service failures"* → multi-step autonomous execution | Shift handoff time: **2 hours → 5 minutes** |
| **Worker Collaboration** | 5 protocols: *Delegate, Ask, Escalate, Inform, Handoff* for formal multi-agent coordination | Complex problems solved via team effort |
| **Semantic Memory** | Vector store learns incident patterns; retrieves similar past fixes automatically | **60%** of new incidents have known solutions |
| **Change Intelligence** | Automated risk assessment for changes; auto-approval of low-risk CAB requests | CAB approval time: **4 hours → 5 minutes** |
| **Event-Driven Architecture** | 40+ event types routed intelligently to relevant workers via pub/sub EventBus | **99.99%** event delivery guarantee |
| **Real-Time Visibility** | Live worker status, activity feed, approval queue, metrics dashboard via WebSocket | Stakeholders see progress instantly |
| **Enterprise Integrations** | ServiceNow, Jira, Confluence, Control-M, MongoDB Atlas, Email (Gmail API) | Single source of truth across tools |

---

## 🏗️ Architecture & Technical Foundation
- **Multi-Agent State Machines**: Deterministic orchestration built with **LangGraph** enabling strict conditional branches, human-in-the-loop approvals, and automated state rollbacks.
- **Model Context Protocol (MCP)**: Standardized dynamic tool discovery and execution allowing digital workers to plug seamlessly into enterprise systems.
- **Hybrid Memory Architecture**: Combines **ChromaDB** vector stores for semantic retrieval of historical remediation playbooks with MongoDB Atlas for persistent audit logging.
- **Event-Driven Pub/Sub**: Over 40 distinct operational events streaming through an internal EventBus to trigger proactive incident handling before outages breach SLAs.`,
    links: {
      demo: "#"
    },
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "change-coworker",
    title: "Change Co-Worker",
    category: "Change Intelligence & RAG",
    role: "Architect & Lead Engineer",
    stack: [
      "Multi-Agent AI",
      "Gemini 2.5 Flash",
      "RAG Architecture",
      "ServiceNow API",
      "Multimodal Audio",
      "Risk Scoring",
      "Email Automation",
      "Python"
    ],
    description: "Your AI-Powered Change Management Intelligence Platform: An enterprise-grade Multi-Agent AI system built on a collaborative network of 5 specialized AI agents powered by Gemini 2.5 Flash and RAG. Automates change creation, risk scoring, conflict detection, and compliance reports through natural conversation.",
    detailedDescription: `## 🎯 What is Change Co-Worker?
## What is Change Co-Worker?
**Change Co-Worker** is an enterprise-grade **Multi-Agent AI System** that transforms how organisations manage IT changes. Built on a collaborative network of **5 specialised AI agents** powered by **Google Gemini 2.5 Flash** and **RAG (Retrieval-Augmented Generation)**, it provides SOP-accurate answers, automates change creation, assesses risk, and generates compliance reports — all through **natural conversation**.

> *"Whether you're raising a change, validating one, or approving at CAB — Change Co-Worker acts as your autonomous co-pilot."*

---

## ✨ Key Highlights & Capabilities

| Highlight | Core Mechanism | Enterprise Value |
| :--- | :--- | :--- |
| 🧠 **Knowledge Engine** | SOP-accurate answers via grounded RAG | **Zero hallucinations** with strict policy adherence |
| ⚡ **Smart Change Creation** | Natural language intent parsing | **One sentence → full change request** in seconds |
| 🔮 **Risk Intelligence** | AI-powered risk scoring & conflict detection | Proactive collision detection across deployment schedules |
| 📊 **Live Analytics** | Real-time dashboards & visual insights | End-to-end visibility into change pipelines and velocity |
| 🌍 **50+ Languages** | Auto-detected multilingual support | Enables seamless global operational collaboration |
| 📧 **Email Automation** | SOP-compliant drafts with mailto links | Instant CAB notifications and stakeholder sign-offs |
| 🎙️ **Gemini Live Voice** | Real-time bidirectional multimodal audio | Hands-free verbal change reviews and CAB briefings |
| 🔗 **ServiceNow Native** | Live bi-directional ITSM sync | Automated ticket updates, state changes, and sync |

---

## 🏗️ Multi-Agent Architecture
Change Co-Worker utilizes a **Hub-and-Spoke** architecture where a central **Orchestrator Agent** intelligently routes every incoming request to the best-suited specialist agent:
1. **Change Creation Specialist**: Formulates structured, standard/normal/emergency change requests from colloquial text.
2. **Risk & Conflict Analyzer**: Cross-examines maintenance windows, overlapping configuration items (CIs), and blast radiuses.
3. **SOP Knowledge Retrieval Agent**: Interrogates enterprise policy repositories via RAG to ensure absolute compliance.
4. **CAB Governance & Reporting Agent**: Compiles executive agendas, approvals, audit logs, and compliance scorecards.
5. **ITSM Synchronization Worker**: Executes live, authenticated transactions against ServiceNow and Jira APIs with full audit traceability.`,
    links: {
      demo: "#"
    },
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "rca-agent",
    title: "RCA-Agent",
    category: "Incident Intelligence & RCA",
    role: "Architect & Lead Engineer",
    stack: [
      "Gemini LLM",
      "ChromaDB RAG",
      "Flask API",
      "Python",
      "Embeddings",
      "Log Analytics",
      "Async Jobs",
      "React / Web UI"
    ],
    description: "AI-Powered Root Cause Analysis System for Production Incidents: Combines automated multi-step reasoning, ChromaDB vector retrieval across operational datasets (logs, runbooks, incident history, changes), and Gemini LLM embeddings to deliver structured root cause diagnostics and actionable remediation plans.",
    detailedDescription: `## 🎯 What is RCA-Agent?
**RCA-Agent** is an enterprise AI-powered **Root Cause Analysis system** designed for complex production outages. It combines retrieval from operational data (incidents, logs, runbooks, changes) with Gemini LLM reasoning to produce structured RCA outputs and action recommendations.

> *"From raw logs, anomalous traces, and telemetry spikes to structured, evidence-backed root cause diagnoses in minutes rather than hours."*

---

## ✨ Features & Capabilities

| Feature | Mechanism | Operational Value |
| :--- | :--- | :--- |
| ⚡ **Automated Multi-Step RCA** | Multi-phase hypothesis formulation & verification workflow | Automates investigative triage and accelerates causal diagnosis |
| 🧠 **ChromaDB Vector RAG** | High-dimensional embedding store & similarity search | Instant grounded retrieval of historical incidents & runbooks |
| 🔮 **Gemini Reasoning & Embeddings** | Google Gemini LLM with structured output schema enforcement | High-precision causal attribution with zero hallucinations |
| ⚙️ **Flask Asynchronous API** | Background worker queue for high-compute log ingestion jobs | Non-blocking analysis orchestration supporting heavy enterprise payloads |
| 🖥️ **Interactive Web UI** | Real-time diagnostic console with step-by-step telemetry inspect | Live visibility into hypotheses, evidence traces, and remediation actions |
| 📦 **Unified Ingestion Pipeline** | Multi-source parsing across incidents, logs, runbooks, & changes | Single operational pane correlating alerts directly with recent change events |

---

## 🏗️ Multi-Step RCA Workflow
RCA-Agent coordinates an automated 5-step diagnostic pipeline:
1. **Telemetry & Dataset Ingestion**: Ingests incident metadata, application logs, error traces, runbooks, and recent change records.
2. **Operational Vector Retrieval**: Queries ChromaDB vector store for semantically similar past incidents and matching resolution playbooks.
3. **Gemini Causal Reasoning**: Synthesizes the ingested telemetry with retrieved operational context to isolate anomalies and identify the core failure trigger.
4. **Structured RCA Output**: Formulates an evidence-backed diagnostic dossier with root causes, contributing factors, impacted components, and confidence scores.
5. **Action Recommendation Engine**: Delivers prioritized, concrete remediation action items, preventative measures, and rollback instructions.`,
    links: {
      demo: "#"
    },
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "ticketwave",
    title: "TicketWave",
    category: "Distributed Systems & Web Platforms",
    role: "Architect & Lead Engineer",
    stack: [
      "Java 17",
      "Spring Boot 3.x",
      "PostgreSQL 15+",
      "Redis 7 / Redisson",
      "React 18",
      "Spring Security 6",
      "Docker",
      "Prometheus & Grafana"
    ],
    description: "Production-Grade Travel & Event Ticket Booking Platform: Engineered as a modular monolith in Spring Boot 3 and React 18 to handle the complete ticketing lifecycle. Features a three-layer double-booking defense (Redis locks → Redis TTL holds → PostgreSQL unique constraints) guaranteeing zero race-condition collisions at scale.",
    detailedDescription: `## 🎯 What is TicketWave?
**TicketWave** is a full-stack, enterprise-grade ticket booking platform engineered to handle the complete lifecycle of high-demand travel and event ticketing—from real-time discovery and seat selection through payment, confirmation, cancellation, and automated refunds. Built as a **modular monolith** with Spring Boot 3 backend and React 18 frontend, it solves the critical challenge of preventing double-bookings at scale using distributed locking, idempotent operations, and webhook-driven payment flows.

> *"Zero double-bookings, sub-100ms booking latency, and complete audit trail compliance across high-concurrency ticket reservations."*

---

## ⚡ Key Architectural Differentiators & Highlights

| Differentiator | Implementation Mechanism | Operational Advantage |
| :--- | :--- | :--- |
| 🛡️ **Zero Double-Bookings** | Three-layer defense: Redisson lock → Redis TTL hold → PostgreSQL unique constraint | **100% collision prevention** even during flash sales |
| ⚡ **Sub-100ms Latency** | Optimized batch queries & HikariCP connection pooling | **5x faster confirmation** (reduced 15 queries to 3) |
| 🔒 **Idempotent Operations** | Idempotency keys on all state mutations with safe retries | **Zero duplicate charges** or orphaned bookings on network retries |
| 💰 **Dynamic Demand Pricing** | Three-tier algorithmic pricing (1.0x Base, 1.5x Surge, 1.8x Peak) | Maximizes revenue occupancy based on live seat inventory |
| 🎫 **Smart Seat Holds** | Redis-based 10-minute TTL locks with interactive visual countdown | Prevents seat hoarding while guaranteeing friction-free checkout |
| 📜 **Full Audit Compliance** | Structured audit logging with user ID, IP, correlation ID, and state deltas | **SOC 2 & GDPR readiness** with cryptographic PNR references |
| 💳 **Secure Payment Webhooks** | Cryptographic signature verification and atomic status updates | Robust defense against replay attacks and payment spoofing |
| 🏗️ **Modular Monolith** | Strict DDD bounded contexts (Booking, Inventory, Payment, User) | Microservice-ready architecture without distributed transaction overhead |

---

## 🏗️ Three-Layer Double-Booking Defense
TicketWave guarantees zero double-bookings through a defense-in-depth architectural model:
1. **Layer 1: Distributed Lock (Redisson)**: High-concurrency seat requests acquire an atomic Redis distributed lock via Lua script (\`lock:seat:{schedule_id}:{seat_id}\`) with a 3-second wait limit and 10-second auto-release lease.
2. **Layer 2: Redis TTL Seat Hold**: Upon lock acquisition, a temporary seat hold is established in Redis with a 10-minute TTL (\`seat:hold:{schedule_id}:{seat_id}\`), providing instant visibility across all active user sessions without touching the relational database.
3. **Layer 3: PostgreSQL ACID & Unique Constraints**: During checkout confirmation, the database executes an atomic transaction enforcing row-level locking (\`Pessimistic / Optimistic @Version\`) backed by a hard database constraint (\`UNIQUE(schedule_id, seat_id)\`). If Redis ever experiences a transient failure, database consistency remains absolute.

---

## 🔄 Dynamic Pricing & Intelligent Discovery
- **Demand-Based Pricing**: Real-time evaluation calculates occupancy percentage:
  - **Tier 1 (Base, 1.0x)**: Less than 50% seats reserved.
  - **Tier 2 (Surge, 1.5x)**: 50% to 80% seats reserved.
  - **Tier 3 (Peak, 1.8x)**: Greater than 80% seats reserved.
- **High-Throughput Caching**: Redis caches catalog search results with a 5-minute sliding TTL, slashing database query load by 40% during peak traffic bursts.
- **Smart Refund Engine**: Policy-driven automated refund calculations based on departure cancellation windows (>24 hours: full refund, <24 hours: tiered partial refund) with immediate audit ledger recording.`,
    links: {
      github: "https://github.com/Sonu-Thomas-001/TicketWave",
      demo: "#"
    },
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "smartdesk-ai",
    title: "SmartDesk AI",
    category: "Autonomous Multi-Agent Systems",
    role: "Architect & Lead Engineer",
    stack: [
      "Gemini 2.0 Flash",
      "LangChain 0.3",
      "ChromaDB",
      "ServiceNow API",
      "Python 3.12",
      "Flask",
      "Docker",
      "Vector Embeddings"
    ],
    description: "Intelligent Multi-Agent Incident Management Platform: Agentic IT incident triage and resolution system powered by Gemini 2.0 Flash and ChromaDB vector search. Automatically detects, classifies, assigns, and resolves ServiceNow incidents across 8 specialist teams with a self-learning feedback loop.",
    detailedDescription: `## 🎯 What is SmartDesk AI?
**SmartDesk AI** is an enterprise-grade **agentic IT incident triage and resolution system** that leverages LLM-powered agents (**Gemini 2.0 Flash**) and vector similarity search (**ChromaDB**) to automatically detect, classify, assign, and resolve ServiceNow incidents. It eliminates manual IT ticket routing bottlenecks with intelligent, self-improving AI agents that continuously learn from operational feedback.

> *"Replaces manual IT ticket routing with intelligent, self-improving AI agents that continuously learn from feedback."*

---

## ✨ Key Capabilities & System Features

| Feature | Technical Architecture | Enterprise Impact |
| :--- | :--- | :--- |
| 🤖 **Multi-Agent Coordination** | Classification Agent, Resolver Agent, & Synthetic Incident Generator | End-to-end automated handling from triage to step-by-step fix guides |
| 🧬 **Vector Knowledge Base** | ChromaDB with cosine similarity on \`all-MiniLM-L6-v2\` embeddings | Grounded retrieval across **25+ KB playbooks** covering Network, IAM, DB, Cloud |
| ⚡ **Intelligent Routing** | Configurable confidence thresholds across 8 specialist support teams | **Auto-assign (≥80%)**, Suggest (50-79%), or Fallback triage (<50%) |
| 🔄 **ServiceNow Native Sync** | Bi-directional REST API integration with 30s auto-polling & webhooks | Automatically writes AI work notes and resolution steps directly to tickets |
| 🎯 **Self-Learning Loop** | Human-in-the-loop correction engine feeding back into embeddings | Inaccurate classifications update vector memory for continuous accuracy gains |
| 📊 **Glassmorphism Dashboard** | Live incident feed, confidence meters, team load charts, and step views | Real-time observability and operator override control in one pane |

---

## 🏗️ Multi-Agent Architecture & Operational Workflow
SmartDesk AI coordinates a closed-loop 7-step incident resolution workflow:
1. **Incident Detection**: Continuously polls ServiceNow every 30s via authenticated REST API endpoints or captures real-time incoming webhook triggers.
2. **Similarity Search**: Performs cosine similarity retrieval in **ChromaDB** against historical outages and 25+ verified standard operating procedures.
3. **Classification Agent**: Leverages **Google Gemini 2.0 Flash** with few-shot prompting to analyze symptom descriptions, impacted configuration items, and urgency.
4. **Decision Engine**: Automatically assigns tickets with **≥80% confidence** to the optimal team member via round-robin with lead escalation, or flags for human suggestion.
5. **Resolver Agent**: Generates structured, numbered step-by-step fix guides grounded in verified knowledge articles and posts them as AI work notes to the ticket.
6. **Knowledge Enrichment**: Records the resolved incident and verified remediation trajectory back into ChromaDB for future operational retrieval.
7. **Feedback Loop**: Incorporates operator corrections into embedding adjustments, systematically eliminating repeat misclassifications.`,
    links: {
      github: "https://github.com/Sonu-Thomas-001/SmartDesk-Ai",
      demo: "#"
    },
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "qubimind",
    title: "QubiMind",
    category: "Autonomous Multi-Agent Systems",
    role: "Architect & Lead Engineer",
    stack: [
      "Next.js 15",
      "React 19",
      "FastAPI",
      "Python 3.12",
      "LangGraph",
      "LangChain",
      "Gemini API",
      "PostgreSQL",
      "Redis",
      "Docker"
    ],
    description: "Enterprise-Grade Multi-Agent AI Operating System: Orchestrates swarms of specialized AI agents with LangGraph state machines, Enterprise RAG, external tool calling, and human-in-the-loop manager approval nodes. Features SOC2 compliance, granular 5-tier RBAC, and persistent long-term vector memory.",
    detailedDescription: `## 🎯 What is QubiMind?
**QubiMind** is an enterprise-grade **Multi-Agent AI Operating System** developed by QubiQode that enables organizations to deploy, manage, and orchestrate fleets of specialized AI agents. Built with a modern, production-ready stack (Next.js 15, FastAPI, LangGraph, and RAG), it provides intelligent automation, enterprise knowledge retrieval, and scalable workflow orchestration through a secure, high-governance architecture.

> *"Enables organizations to deploy, manage, and orchestrate fleets of specialized AI agents through an enterprise-grade, secure operating system."*

---

## ✨ Key Features & Capabilities

| Feature | Technical Implementation | Enterprise Operational Impact |
| :--- | :--- | :--- |
| 🤖 **Multi-Agent Collaboration** | Swarm topology with inter-agent communication & task delegation | Agents verify each other's outputs and autonomously execute complex workflows |
| 📚 **Enterprise RAG** | Advanced vector database integration & semantic search | Grounds agents in company SOPs and documents with secure indexing |
| 🔧 **Tool Calling & Integration** | Structured function calling across SQL, email, & enterprise APIs | Directly interacts with legacy enterprise software and updates CRM/ERP records |
| 👤 **Human-in-the-Loop (HITL)** | LangGraph interrupt nodes for manager reviews & overrides | Guarantees safe execution on high-stakes financial or destructive actions |
| 🔒 **Bank-Grade Security** | SOC2-compliant, 5-tier RBAC, audit logging, & AES encryption | Granular permissions across SUPER_ADMIN, ORG_ADMIN, MANAGER, EMPLOYEE, & GUEST |
| 🚀 **Workflow Automation** | Multi-step stateful execution with conditional branching | Real-time monitoring, telemetry observability, and workflow analytics |
| 💾 **Long-Term Vector Memory** | Persistent context storage across user sessions in vector DB | Remembers user preferences, historical sessions, and past decisions |

---

## 🏗️ Core Architecture & Tech Stack

| Layer | Technologies & Frameworks | Purpose & Role |
| :--- | :--- | :--- |
| **Frontend** | Next.js 15 (App Router), React 19, Tailwind CSS, shadcn/ui | Modern, responsive operator dashboard & agent control panel |
| **Backend** | FastAPI, Python 3.12, Async/Await | High-performance asynchronous API layer with OpenAPI specs |
| **AI / Orchestration** | LangGraph, LangChain, Google Gemini API | Stateful multi-agent graphs, routing, and causal reasoning |
| **Data & State** | PostgreSQL 16, Redis 7 | Relational transactional store & low-latency agent state cache |
| **Client State** | Zustand, TanStack Query | Client-side caching, real-time optimistic UI, and sync |
| **Security & Auth** | JWT, HttpOnly Cookies, bcrypt, 5-Tier RBAC | Secure session tokens and role-based access enforcement |
| **Deployment** | Docker, Docker Compose, Clean Architecture | Containerized microservices ensuring zero-drift deployments |

---

## 🔐 Authentication & Access Governance
- **5-Tier Role-Based Access Control**:
  1. \`SUPER_ADMIN\`: Full platform infrastructure, tenant, and global model configuration.
  2. \`ORG_ADMIN\`: Organization-level billing, agent deployment, and policy controls.
  3. \`MANAGER\`: Approves human-in-the-loop interrupt requests and monitors team agents.
  4. \`EMPLOYEE\`: Interacts with authorized agents and triggers approved workflows.
  5. \`GUEST\`: Read-only preview access to public agent documentation and metrics.
- **Audit Ledger**: Comprehensive audit logging of every agent decision, tool execution, and manager sign-off.`,
    links: {
      github: "https://github.com/Sonu-Thomas-001/QubiMind",
      demo: "#"
    },
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "multi-agent-enterprise-ai-assistant",
    title: "Multi-Agent Enterprise AI Assistant",
    category: "Autonomous Multi-Agent Systems",
    role: "Architect & Lead Engineer",
    stack: [
      "Next.js 15",
      "React 19",
      "FastAPI",
      "Python 3.12",
      "LangGraph",
      "ChromaDB (BM25)",
      "Python Sandbox",
      "Tailwind CSS v4",
      "256-Bit JWT / RBAC",
      "SQLite / SQLAlchemy"
    ],
    description: "Enterprise Multi-Agent Platform & Hybrid RAG Engine: Orchestrates 7 specialized AI micro-agents in concurrent, stateful LangGraph channels. Features a dual-retriever hybrid RAG pipeline (sparse BM25 + dense ChromaDB with Reciprocal Rank Fusion, k=60), an isolated serverless Python code execution sandbox, and bank-grade 256-bit JWT authentication with 16 granular RBAC permissions.",
    detailedDescription: `## 🎯 What is Multi-Agent Enterprise AI Assistant?
**Multi-Agent Enterprise AI Assistant** is an end-to-end, flagship enterprise AI SaaS platform designed to solve the critical vulnerabilities of single-prompt LLMs when handling complex, multi-step enterprise tasks. Built on a **Supervisor-Decomposed Agent Topology** using **LangGraph**, it enables **7 autonomous micro-agents** to collaborate deterministically across stateful channels with full audit traceability.

> *"Single-prompt LLMs fail when confronted with multi-step enterprise workflows requiring document research, data transformation, sandboxed code execution, and security compliance verification. Multi-Agent Enterprise AI Assistant solves this through decomposed agent specialization and deterministic guardrails."*

---

## ✨ Key Features & Architectural Comparison

| Capability | Traditional Single LLM | Basic RAG Wrapper | Multi-Agent Enterprise AI Assistant |
| :--- | :--- | :--- | :--- |
| **Reasoning Model** | Linear single-turn | Simple prompt injection | **Stateful LangGraph channels & Supervisor-Planner topology** |
| **Document Search** | None (static weights) | Dense vector search only | **Hybrid BM25 sparse + ChromaDB dense (RRF with k=60)** |
| **Code Execution** | Raw unverified text | Disallowed / unsafe | **Serverless isolated Python subprocess sandbox runtime** |
| **Access Control** | No role boundaries | Global API key | **256-bit JWT auth + 16 granular RBAC permissions** |
| **Governance** | Unmonitored | Basic log files | **Immutable security audit trail table with cryptographic hashes** |
| **User Experience** | Generic chat box | Static dashboard | **60fps cinematic parallax scroll & standalone PWA support** |

---

## 🤖 The 7 Autonomous Micro-Agents
The platform coordinates 7 specialized micro-agents operating concurrently within LangGraph channels:
1. **Supervisor / Planner Agent**: Decomposes complex user inquiries into directed acyclic graph (DAG) tasks and intelligently routes execution across workers.
2. **Document Research Agent**: Interrogates enterprise documentation using hybrid reciprocal rank fusion retrieval with zero hallucinations.
3. **Code Sandbox Execution Agent**: Executes arbitrary Python code safely within an isolated, resource-capped subprocess jail.
4. **Data Analytics Agent**: Ingests tabular data, performing in-memory Pandas transformations, aggregations, and metrics calculations.
5. **Visualization Agent**: Generates real-time Matplotlib charts and exports vector-crisp SVG and high-resolution PNG plots.
6. **Security & RBAC Guard Agent**: Evaluates 16 granular permissions against user JWT claims, enforcing deterministic HTTP 403 authorization barriers.
7. **Audit & Verification Agent**: Cryptographically records every agent decision, tool execution, and query outcome into an immutable ledger.

---

## 🔍 Dual-Retriever Hybrid RAG (Reciprocal Rank Fusion k=60)
All document queries undergo dual retrieval:
- **Sparse BM25 Search**: Matches exact keyword tokens, product IDs, SKU codes, and technical jargon.
- **Dense ChromaDB Vector Search**: Captures high-dimensional 1024-dimension semantic relationships and conceptual intent.
- **Reciprocal Rank Fusion**: Re-ranks candidates via \`RRF_Score(d) = Σ [1 / (60 + Rank_sparse(d)) + 1 / (60 + Rank_dense(d))]\`, producing verifiable citations down to exact paragraph chunks with zero document hallucination.

---

## 💻 Serverless Python Code Execution Sandbox
- Runs inside an isolated Python subprocess environment with strict execution quotas (5.0s CPU timeout, 256MB memory cap).
- Sockets and host filesystem access are completely disabled to prevent privilege escalation.
- Native support for **Pandas** dataframe queries and **Matplotlib** dynamic plot generation.

---

## 🔐 Enterprise Security & Granular RBAC
- **256-bit JWT Authentication**: Secure, tamper-proof session verification.
- **16 Granular Permissions**: Scoped authorization rules spanning RAG document access, sandbox execution, agent state override, and audit query.
- **6 Synthetic Persona Presets**: One-click switching between Admin, Research, Analyst, Operator, Auditor, and Guest roles for comprehensive enterprise policy testing.
- **Immutable Security Audit Trail**: Cryptographic logging of all logins, uploads, executions, and permission denials.`,
    links: {
      github: "https://github.com/Sonu-Thomas-001/Multi-Agent-Enterprise-AI-Assistant",
      demo: "#"
    },
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "versant-practice-test",
    title: "Versant Practice Test Simulator",
    category: "Applied AI & Speech Systems",
    role: "Full-Stack & AI Engineer",
    stack: [
      "React 19",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Google Gemini AI",
      "Web Speech API",
      "Speech Recognition",
      "Text-to-Speech",
      "GSE / CEFR Scoring"
    ],
    description: "Realistic Speaking & Listening Exam Simulator: Production-grade mock Versant test platform built with React 19, TypeScript, and Google Gemini AI. Features real-time speech recognition, text-to-speech audio delivery, automated GSE & CEFR proficiency scoring (10-90 scale), adaptive exam timers, and AI-generated diagnostic feedback across 6 core test sections (Parts A-F).",
    detailedDescription: `## 🎯 What is Versant Practice Test Simulator?
**Versant Practice Test Simulator** is a clean, mobile-friendly mock Versant-style speaking and listening exam simulator built with **React 19**, **TypeScript**, and **Google Gemini AI**. It provides candidates with a realistic, high-fidelity testing environment to practice and master professional English communication skills with automated scoring, word-by-word diff analysis, and detailed AI-generated diagnostic feedback.

> *"Provides candidates with a realistic, high-fidelity testing environment to practice and master professional English communication skills with automated scoring and AI-generated diagnostic feedback."*

---

## 📋 Comprehensive Test Sections (Parts A–F)

| Section | Format | Core Skill Assessed | Operational Mechanism |
| :--- | :--- | :--- | :--- |
| **Part A: Repeat** | Audio Prompt &rarr; Vocal Repeat | Pronunciation, Rhythm, Word Stress | Real-time speech recognition captures spoken audio with acoustic confidence checks |
| **Part B: Sentence Building** | Jumbled Words &rarr; Spoken Sentence | Grammatical Structure & Syntax | Candidates rearrange spoken phrase fragments into logical, coherent sentences |
| **Part C: Conversations** | Dialogue &rarr; Rapid Comprehension | Listening Inference & Intent | Real-world dialogues between speakers followed by immediate one-word answer prompts |
| **Part D: Sentence Completion** | Timed Context &rarr; Type Missing Word | Lexical Fit & Semantic Precision | Candidates type appropriate missing terms under strict timed pressure |
| **Part E: Dictation** | Single Audio Playback &rarr; Transcript | Auditory Memory & Spelling Precision | Candidates transcribe native-speed sentences verbatim within strict second windows |
| **Part F: Passage Reconstruction** | 30s Read Window &rarr; Retell from Memory | Retention, Cohesion, Grammar | Paragraph disappears after 30s; candidate reconstructs the narrative from memory |

---

## 🎙️ Speech Recognition & Audio Pipeline
- **Speech Recognition Integration**: Leverages Web Speech API for low-latency client-side voice transcription during speaking assessments.
- **Text-to-Speech (TTS) Engine**: Synthesizes natural, standardized native-speed audio prompts across multiple English accents (en-US and en-GB).
- **Interactive Audio Waveform**: Real-time visual feedback indicating microphone input levels, speech cadence, and recording state.

---

## 🤖 Google Gemini AI Automated Scoring & CEFR Mapping
- **Deep Linguistic Evaluation**: Analyzes candidate transcripts against ground truth, assessing phonetic accuracy, syntactic cohesion, lexical appropriateness, and grammatical integrity.
- **Pearson GSE & CEFR Alignment**: Calibrated against official standards on a **10–90 scale**:
  - \`C2 (85–90)\`: Mastery / Native-equivalent fluency
  - \`C1 (76–84)\`: Effective Operational Proficiency
  - \`B2 (59–75)\`: Vantage / High Independent
  - \`B1 (43–58)\`: Threshold / Intermediate
  - \`A2 (30–42)\`: Waystage / Elementary
  - \`A1 (10–29)\`: Breakthrough / Beginner
- **Word-by-Word Diff Inspection**: Visual red/green diff view highlighting omitted, inserted, or substituted words for pinpoint self-correction.

---

## ⚡ Exam UX & Diagnostic Features
- **Adaptive Timers**: Real-time per-question countdown clocks enforcing authentic exam pressure with zero overrun.
- **Distraction-Free Fullscreen Mode**: Minimizes visual clutter, browser tab distractions, and extraneous UI elements.
- **Print-Ready PDF Reports**: Instant one-click export of official-style candidate diagnostic scorecards for interview preparation and institutional assessment.`,
    links: {
      github: "https://github.com/Sonu-Thomas-001/Versant-Practice-Test",
      demo: "#"
    },
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "resolveai",
    title: "ResolveAI - IT Service Desk Agent",
    category: "Autonomous Multi-Agent Systems",
    role: "Architect & Lead Engineer",
    stack: [
      "FastAPI",
      "Python 3.12",
      "LangGraph",
      "LangChain",
      "ChromaDB",
      "Google Gemini",
      "Pydantic",
      "REST API",
      "Docker"
    ],
    description: "Intelligent IT Service Desk Assistant & 15-Node LangGraph State Machine: Enterprise proof-of-concept powered by Google Gemini, LangGraph, and ChromaDB vector RAG. Features automated troubleshooting, simulated diagnostic tools (VPN, email, account, device health), dynamic confidence scoring, human-in-the-loop approval pauses (interrupt_before), and secure synthetic data isolation.",
    detailedDescription: `## 🎯 What is ResolveAI?
**ResolveAI** is an AI-powered IT service desk agent built as a production-grade enterprise proof-of-concept (POC) leveraging **FastAPI**, **LangChain**, **LangGraph**, **ChromaDB**, and **Google Gemini** on Vertex AI. It delivers automated troubleshooting, intelligent diagnostic checks, and incident ticket routing using purely **synthetic enterprise data**—guaranteeing complete privacy and isolation from real operational infrastructure.

> *"Replaces manual IT ticket triage bottlenecks with a 15-node LangGraph state machine combining ChromaDB vector retrieval, simulated diagnostic tool suites, and human-in-the-loop approval pauses."*

---

## ✨ Key Capabilities & System Features

| Feature | Technical Architecture | Operational Impact |
| :--- | :--- | :--- |
| 🤖 **AI-Powered Troubleshooting** | Google Gemini on Vertex AI with structured schema output | Fast, accurate multi-step diagnostic plans with zero hallucinations |
| 📚 **ChromaDB Vector RAG** | High-dimensional embedding search over SOP knowledge articles | Grounded retrieval matching symptom descriptions to verified runbooks |
| 🔄 **15-Node LangGraph Engine** | Stateful cyclic directed graph with deterministic validation | End-to-end orchestration from intake and tool runs to final ticket creation |
| 🛠️ **Mock Diagnostic Tools** | Simulated tools for VPN, email, account, device health, & service | Safely tests network connectivity, token lockouts, and host telemetry |
| ✅ **Human-in-the-Loop (HITL)** | \`interrupt_before\` pauses requiring explicit approval before ticketing | Prevents spurious tickets and enforces manager oversight on sensitive actions |
| 🔐 **Security-First Design** | Prompt injection filters, access controls, & cross-employee blocking | Prevents privilege escalation and cross-tenant data leaks |
| 📊 **Synthetic Data Isolation** | Self-contained mock employees, services, & \`.invalid\` email domains | Zero dependency on production credentials; 100% risk-free testing |
| 🎭 **Offline Demo Mode** | Rule-based classification & deterministic hash-based embeddings | Runs anywhere locally with zero Google Cloud credentials required |
| 📈 **Dynamic Confidence Scoring** | Multi-factor heuristic weighing KB similarity, tool signal, & completeness | Scores &ge;80% auto-resolve; 50–79% request approval; &lt;50% escalate |

---

## 🏗️ The 15-Node LangGraph Workflow Pipeline
ResolveAI processes each user incident through a structured 15-node state machine:
\`\`\`
User Input → Validate → Classify → Check Info → Retrieve KB → Run Tools → 
Analyze → Generate Resolution → Calculate Confidence → Escalate or Approve → 
Create Ticket → Final Response
\`\`\`
1. **Intake & Validation**: Sanitizes prompt inputs and blocks prompt injection or unauthorized cross-user inspections.
2. **Classification & Entity Check**: Classifies incident category (Network, IAM, Hardware, Software, Email) and verifies necessary context.
3. **ChromaDB Vector Retrieval**: Interrogates the knowledge base for matching standard operating procedures and past fixes.
4. **Diagnostic Tool Execution**: Invokes Pydantic-validated diagnostic tools (e.g. \`check_vpn_status\`, \`check_account_status\`).
5. **Causal Reasoning & Solution Generation**: Gemini synthesizes telemetry results with retrieved playbooks to draft step-by-step resolution plans.
6. **Confidence Scoring**: Computes aggregate confidence based on KB proximity, diagnostic health metrics, and information completeness.
7. **Human-in-the-Loop Pause**: Evaluates confidence threshold; if approval is required, execution halts at an \`interrupt_before\` node.
8. **Ticket Creation & Sync**: On human approval or high confidence, generates the formal incident ticket with full audit traceability.

---

## 🛠️ Simulated Diagnostic Tool Suite
- **\`check_vpn_status(user_id)\`**: Inspects simulated Cisco AnyConnect gateway sessions, detects tunnel drops, and checks IP lease status.
- **\`check_account_status(user_id)\`**: Queries synthetic Active Directory for password expiry, account lockouts, and MFA status.
- **\`check_device_health(device_id)\`**: Verifies host CPU utilization, disk capacity, and EDR antivirus process state.
- **\`check_service_status(service_name)\`**: Pings simulated enterprise SaaS endpoints (Jira, Confluence, Mail, SSO).`,
    links: {
      github: "https://github.com/Sonu-Thomas-001/IT-Service-Desk-Agent",
      demo: "#"
    },
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1200&auto=format&fit=crop"
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    institution: "IIT Guwahati",
    degree: "BSc (Hons) Data Science & Artificial Intelligence",
    period: "2024 – 2028",
    details: "Focusing on advanced mathematics, machine learning, and data structures."
  },
  {
    institution: "St. Joseph's HSS (Plus Two)",
    degree: "Higher Secondary (Computer Science)",
    period: "Completed",
    details: "Laid the foundation for programming, algorithmic thinking, and web technologies."
  },
  {
    institution: "St. Joseph's HSS (SSLC)",
    degree: "Secondary School Leaving Certificate (10th)",
    period: "Completed",
    details: "Foundational coursework in science, mathematics, and computing fundamentals."
  }
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    id: "gc-vertex",
    title: "Prompt Design in Vertex AI",
    issuer: "Google Cloud Skills Boost",
    date: "May 2025",
    credentialId: "15478363"
  },
  {
    id: "gc-leader",
    title: "Cloud Digital Leader",
    issuer: "Google Cloud Skills Boost",
    date: "Sep 2024",
    credentialId: "5122267686b949689ab761e0005a769d"
  },
  {
    id: "gl-ds",
    title: "Data Science Foundations",
    issuer: "Great Learning Academy",
    date: "Jun 2024",
    credentialId: "JJIOMJTY"
  },
  {
    id: "gl-ai",
    title: "Introduction to Artificial Intelligence",
    issuer: "Great Learning Academy",
    date: "Jun 2024",
    credentialId: "OPCYHCVS"
  },
  {
    id: "gl-dm",
    title: "Introduction to Digital Marketing",
    issuer: "Great Learning Academy",
    date: "Jun 2024",
    credentialId: "GEBIFRNQ"
  },
  {
    id: "gl-excel-int",
    title: "Excel for Intermediate Level",
    issuer: "Great Learning Academy",
    date: "Jun 2024",
    credentialId: "TCGVAYIP"
  },
  {
    id: "gl-excel-beg",
    title: "Excel for Beginners",
    issuer: "Great Learning Academy",
    date: "Jun 2024",
    credentialId: "PTWXOAOX"
  },
  {
    id: "brototype-100k",
    title: "100K Coding Challenge",
    issuer: "Brototype",
    date: "Nov 2021",
    credentialId: "100KCC79797"
  },
  {
    id: "brototype-web",
    title: "Web Designing Challenge",
    issuer: "Brototype",
    date: "Nov 2021",
  },
  {
    id: "devtown-port",
    title: "Portfolio Website using HTML & CSS",
    issuer: "DevTown",
    date: "Nov 2021",
  }
];

export const VOLUNTEERING_DATA: VolunteeringItem[] = [
  {
    id: "kite",
    role: "Student Technology Leader",
    organization: "KITE – Kerala Infrastructure and Technology for Education",
    period: "Jun 2019 – Mar 2020",
    domain: "Science & Technology",
    description: [
      "Volunteered with Little KITEs, India’s largest student ICT network, empowering students to transition from technology consumers to creators.",
      "Contributed to digital literacy, logical thinking, and creative problem-solving initiatives for school students.",
      "Actively engaged in coding fundamentals, AI basics, robotics (Arduino), 2D/3D animation, video production, and basic web development.",
      "Supported awareness programs on safe, ethical, and responsible internet usage.",
      "Assisted community outreach initiatives such as “Amma Ariyan”, extending digital awareness to parents.",
      "Gained exposure to large-scale educational technology programs aligned with UN Sustainable Development Goals (SDGs)."
    ],
    impact: [
      "Improved student confidence in using and creating technology.",
      "Contributed to a statewide initiative impacting hundreds of thousands of students.",
      "Built early leadership, communication, and technical foundations."
    ],
    skills: ["Digital Literacy", "Programming Basics", "Robotics", "Creative Technology", "Leadership", "Team Collaboration", "Problem Solving", "Educational Technology"]
  },
  {
    id: "hcl-ai-club",
    role: "Core Member – AI Club",
    organization: "HCLTech",
    period: "Aug 2025 – Present",
    domain: "Science & Technology",
    description: [
      "Core member of the AI Club at HCLTech Madurai, contributing to internal AI awareness and hands-on exploration.",
      "Participated in discussions, learning sessions, and internal forums to promote AI literacy across teams.",
      "Explored Generative AI, Agentic AI, automation use cases, and AI-driven enterprise solutions.",
      "Collaborated with cross-functional teams to analyze business problems and ideate AI-based solutions.",
      "Supported knowledge sharing through presentations, demos, and internal tech discussions."
    ],
    impact: [
      "Strengthened practical AI understanding among peers.",
      "Helped bridge enterprise operations with modern AI capabilities.",
      "Improved collaboration between technical and non-technical stakeholders."
    ],
    skills: ["Artificial Intelligence", "Generative AI", "Agentic AI", "Automation", "Technical Communication", "Collaboration", "Innovation Mindset"]
  },
  {
    id: "scouts",
    role: "Scout Volunteer",
    organization: "The Bharat Scouts & Guides",
    period: "Jun 2021 – Mar 2023",
    domain: "Civil Rights & Social Action",
    description: [
      "Served as a Scout during Plus One and Plus Two, engaging in structured programs focused on discipline, leadership, and community service.",
      "Participated in awareness campaigns, social responsibility initiatives, camps, and drills.",
      "Developed resilience, teamwork, ethical values, and crisis-readiness skills.",
      "Supported school and local community events through organized volunteering."
    ],
    impact: [
      "Built a strong leadership mindset and civic responsibility early on.",
      "Gained practical experience working within structured team environments.",
      "Strengthened discipline, confidence, and service-oriented thinking."
    ],
    skills: ["Leadership", "Teamwork", "Discipline", "Community Engagement", "Responsibility", "Time Management", "Crisis Awareness"]
  },
  {
    id: "hcl-sparks",
    role: "Member – Sparks",
    organization: "HCLTech",
    period: "Jun 2024 – Present",
    domain: "Arts & Culture",
    description: [
      "Active member of Sparks, HCLTech’s employee engagement initiative promoting well-being, collaboration, and passion-driven growth.",
      "Participated in passion clubs and employee-driven events including sports, team-building, technical treasure hunts, and cultural programs.",
      "Supported a culture of inclusivity, collaboration, and continuous engagement.",
      "Contributed to initiatives aligned with HCLTech’s “Find Your Spark” philosophy and recognition frameworks."
    ],
    impact: [
      "Enhanced team morale and cross-team interaction.",
      "Strengthened employee connection beyond project boundaries.",
      "Contributed to a positive, people-first workplace culture."
    ],
    skills: ["Collaboration", "Community Building", "Team Engagement", "Communication", "Leadership Mindset", "Workplace Culture", "Initiative Ownership"]
  }
];

export const AWARDS_DATA: AwardItem[] = [
  {
    id: "star-techbee",
    title: "Star TechBee Award",
    issuer: "HCLTech – TechBee Program (TSS Team)",
    date: "November 2025",
    description: [
      "Awarded for outstanding performance, consistent growth, and impactful contributions during a two-year journey as a TechBee at HCLTech.",
      "Recognized for hands-on involvement in real-time enterprise projects, effective handling of production change activities, and strong ownership in delivery.",
      "Highlighted strengths in team collaboration, adaptability, and problem-solving within a dynamic IT environment.",
      "Reflects continuous learning, professional maturity, and growth under the TechBee program."
    ]
  },
  {
    id: "rising-star",
    title: "Rising Star Award",
    issuer: "St. Joseph’s HSS Vayattupparamba",
    date: "June 2021",
    description: [
      "Recognized for outstanding academic growth, consistent performance, and active participation in academic and co-curricular activities.",
      "Acknowledged initiative, leadership potential, and positive contributions to school programs and student communities.",
      "Awarded during higher secondary education for overall excellence and engagement."
    ]
  }
];

export const BLOG_DATA: BlogItem[] = [
  {
    id: "b1",
    title: "Designing Enterprise Multi-Agent Workflows: Routing, Triage & Self-Healing Retries",
    excerpt: "How to architect resilient agent networks with LangGraph and Gemini 2.0 Flash that reliably handle complex ITSM triage without getting stuck in infinite loops.",
    date: "Feb 24, 2026",
    readTime: "8 min read",
    category: "Agentic AI",
    tags: ["Multi-Agent", "LangGraph", "Gemini 2.0", "ServiceNow"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
    link: "/insights",
    featured: true
  },
  {
    id: "b2",
    title: "Parameter-Efficient Fine-Tuning (PEFT) with LoRA for Incident Classification",
    excerpt: "Adapting 7B/14B open models for domain-specific IT Service Management data using QLoRA, achieving 94% intent precision with a single consumer-tier GPU.",
    date: "Jan 18, 2026",
    readTime: "10 min read",
    category: "LLMs & Fine-Tuning",
    tags: ["LoRA", "HuggingFace", "PyTorch", "PEFT"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop",
    link: "/insights",
    featured: true
  },
  {
    id: "b3",
    title: "Preventing Double-Bookings at Scale: Distributed Locks & TTL Invalidation",
    excerpt: "A deep architectural dive into three-tier collision defense: Redisson Lua locks, Redis sliding TTL holds, and PostgreSQL ACID unique constraints under 10,000 req/sec.",
    date: "Dec 28, 2025",
    readTime: "9 min read",
    category: "System Architecture",
    tags: ["Distributed Systems", "Redis", "Spring Boot", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000&auto=format&fit=crop",
    link: "/insights",
    featured: false
  },
  {
    id: "b4",
    title: "Vector Databases in Production: Benchmarking ChromaDB vs. Pinecone vs. pgvector",
    excerpt: "Empirical latency and recall analysis across 500k technical documentation chunks. When does hybrid lexical-semantic search beat pure dense embeddings?",
    date: "Nov 14, 2025",
    readTime: "7 min read",
    category: "RAG & Data",
    tags: ["Vector Search", "ChromaDB", "pgvector", "RAG"],
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop",
    link: "/insights",
    featured: false
  },
  {
    id: "b5",
    title: "Predictive Risk Modeling in DevOps: ML Classifiers for Change Failure Rate",
    excerpt: "Formulating a live 'Risk Propensity Score' by correlating change volumes, dependency trees, and scheduling conflicts to target zero-downtime deployment windows.",
    date: "Oct 05, 2025",
    readTime: "6 min read",
    category: "MLOps & DevOps",
    tags: ["Scikit-Learn", "DevOps", "ITIL", "Predictive Analytics"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    link: "/insights",
    featured: false
  },
  {
    id: "b6",
    title: "YOLOv8 vs. Faster R-CNN on Low-Compute Edge Devices",
    excerpt: "Real-time inference trade-offs on low-power edge nodes. Quantization techniques (INT8 vs FP16) to maximize frames per second without sacrificing bounding-box mAP.",
    date: "Aug 19, 2025",
    readTime: "8 min read",
    category: "Computer Vision",
    tags: ["Computer Vision", "YOLOv8", "Edge AI", "TensorRT"],
    image: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?q=80&w=1000&auto=format&fit=crop",
    link: "/insights",
    featured: false
  },
  {
    id: "b7",
    title: "Deterministic Guardrails for Enterprise AI: Eliminating Prompt Injection",
    excerpt: "Defending autonomous enterprise agents with semantic firewalls, NeMo Guardrails, and strict schema validation before executing production API calls.",
    date: "Jul 02, 2025",
    readTime: "7 min read",
    category: "AI Security",
    tags: ["AI Safety", "Guardrails", "Cybersecurity", "OWASP LLM"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000&auto=format&fit=crop",
    link: "/insights",
    featured: false
  },
  {
    id: "b8",
    title: "How AI is Transforming Modern Software Architecture",
    excerpt: "From AI-assisted code generation to intelligent runtime self-healing systems, explore how LLMs are redefining the lifecycle of enterprise systems engineering.",
    date: "May 12, 2025",
    readTime: "6 min read",
    category: "System Architecture",
    tags: ["Modern Architecture", "AI Integration", "Enterprise"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop",
    link: "/insights",
    featured: false
  },
  {
    id: "b9",
    title: "From Software Engineer to AI Systems Architect: The Mathematical Playbook",
    excerpt: "Bridging the gap between distributed software engineering discipline and frontier neural architectures. Core principles, vector topologies, and career roadmap.",
    date: "Mar 22, 2025",
    readTime: "11 min read",
    category: "Engineering Career",
    tags: ["Career", "Neural Systems", "System Design"],
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1000&auto=format&fit=crop",
    link: "/insights",
    featured: false
  }
];

export const TALKS_DATA: TalkItem[] = [
  {
    id: "t1",
    title: "Zero-Downtime Deployments: A Change Manager's Guide",
    event: "HCLTech Engineering Summit",
    date: "Dec 2024",
    type: "Technical Talk",
    description: "Strategies for managing complex production changes with 99.99% availability target.",
    link: "#"
  },
  {
    id: "t2",
    title: "Introduction to Large Language Models",
    event: "IIT Guwahati Tech Club",
    date: "Oct 2024",
    type: "Workshop",
    description: "A practical deep dive into transformer architectures and fine-tuning basics for students.",
    link: "#"
  },
  {
    id: "t3",
    title: "Freelancing 101: From Code to Cash",
    event: "Kerala Dev Meetup",
    date: "Aug 2023",
    type: "Seminar",
    description: "Sharing the journey of building a freelance career alongside full-time education.",
    link: "#"
  }
];

export const OPEN_SOURCE_DATA: OpenSourceItem[] = [
  {
    id: "os1",
    name: "react-framer-transitions",
    description: "A lightweight collection of page transition components for React & Framer Motion.",
    stars: "124",
    forks: "35",
    language: "TypeScript",
    link: "#"
  },
  {
    id: "os2",
    name: "change-risk-scorer",
    description: "Python utility to calculate risk scores for IT changes based on keyword analysis.",
    stars: "89",
    forks: "12",
    language: "Python",
    link: "#"
  },
  {
    id: "os3",
    name: "wp-headless-starter",
    description: "Opinionated Next.js starter kit for Headless WordPress with GraphQL integration.",
    stars: "256",
    forks: "60",
    language: "JavaScript",
    link: "#"
  },
  {
    id: "os4",
    name: "linux-server-audit",
    description: "Shell script suite for automated security auditing and compliance checks.",
    stars: "45",
    forks: "8",
    language: "Shell",
    link: "#"
  }
];

export const PROCESS_DATA: ProcessItem[] = [
  {
    id: "wf1",
    phase: "01",
    title: "Blueprint & Architecture",
    desc: "Before a single line of code is written, I spend time in the 'Why' and 'How'. Using Miro and Notion, I map out data flows, API contracts, and potential failure modes to ensure the foundation is solid.",
    icon: "PenTool",
    tools: ["Notion", "Miro", "Draw.io"]
  },
  {
    id: "wf2",
    phase: "02",
    title: "Deep Work Development",
    desc: "I believe in the 'Flow State'. I dedicate uninterrupted blocks of time to core engineering, turning complex logic into clean, readable code. Music on, notifications off.",
    icon: "Code",
    tools: ["VS Code", "Copilot", "Spotify"]
  },
  {
    id: "wf3",
    phase: "03",
    title: "Rigorous Testing",
    desc: "I act as the first adversary to my own code. From unit tests to edge-case simulations, I ensure the system is resilient before it reaches any staging environment.",
    icon: "Shield",
    tools: ["Jest", "Postman", "K6"]
  },
  {
    id: "wf4",
    phase: "04",
    title: "Deploy & Monitor",
    desc: "Shipping is just the beginning. I set up robust logging and real-time alerts to monitor system health, ensuring that performance remains optimal in the wild.",
    icon: "Activity",
    tools: ["Docker", "Grafana", "Splunk"]
  }
];

export const GROWTH_DATA: GrowthItem[] = [
  {
    id: "g1",
    year: "2021",
    title: "The Initiation",
    role: "Freelance Developer",
    description: "My journey began with a curiosity for the web. I started freelancing during my high school years, learning to translate client needs into digital reality. This phase taught me the value of delivery and resilience.",
    icon: "Lightbulb"
  },
  {
    id: "g3",
    year: "2023",
    title: "The Deep Dive",
    role: "HCLTechbee Scholar",
    description: "I was selected for HCLTech's rigorous early career program. Here, I mastered the core technologies—Java, SQL, and Algorithms—that form the backbone of enterprise systems.",
    icon: "BookOpen"
  },
  {
    id: "g4",
    year: "2024",
    title: "The Professional",
    role: "Production Change Manager",
    description: "Entering the corporate world as a Software Engineer. I now manage critical production changes, ensuring stability for large-scale enterprise environments while minimizing risk.",
    icon: "Briefcase"
  },
  {
    id: "g5",
    year: "2024+",
    title: "The Evolution",
    role: "IIT Guwahati Student",
    description: "Realizing that the future is data-driven, I enrolled in the BSc in Data Science & AI at IIT Guwahati. I am now synthesizing my practical engineering skills with advanced AI theory.",
    icon: "GraduationCap"
  }
];
