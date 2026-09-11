import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Bot,
  Code2,
  Layout,
  Server,
  Cloud,
  Database,
  Workflow,
  Wrench,
  ArrowRight,
  ShieldCheck,
  Radio,
  Zap,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { PageHero } from '../components/PageHero';
import { ScrubReveal } from '../components/ScrubReveal';
import { AmbientParticles } from '../components/AmbientParticles';
import { NeuralGridLines } from '../components/NeuralGridLines';
import { DataStreamTicker } from '../components/DataStreamTicker';
import { useSectionProgress, PINNED_OFFSET } from '../hooks/useSectionProgress';
import { useMediaQuery } from '../hooks/useMediaQuery';

// --- DATA STRUCTURES ---

interface TechDetail {
  name: string;
  category: string;
  description: string;
  highlight?: boolean;
}

interface DisciplineSection {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
  badgeBg: string;
  borderAccent: string;
  description: string;
  groups: {
    groupName: string;
    items: TechDetail[];
  }[];
}

const DISCIPLINES: DisciplineSection[] = [
  {
    id: "ai-agents",
    num: "01",
    title: "AI, LLM & Agent Engineering",
    subtitle: "Autonomous Reasoning & Grounded Retrieval",
    icon: Bot,
    accentColor: "text-copper",
    badgeBg: "bg-copper/10 dark:bg-copper/20 border-copper/30 text-copper",
    borderAccent: "hover:border-copper/50",
    description: "Architecting autonomous agents, deterministic multi-agent state machines, hybrid vector search pipelines, and enterprise-grade LLM orchestration.",
    groups: [
      {
        groupName: "LLM Platforms & Foundation Models",
        items: [
          { name: "Google Gemini", category: "Foundation LLM", description: "Production integration of Gemini 2.5 Flash & 2.0 Pro with multimodal token streaming and 2M token context windows.", highlight: true },
          { name: "Anthropic Claude", category: "Reasoning Model", description: "Complex code synthesis, multi-step chain-of-thought analysis, and deterministic structured JSON outputs.", highlight: true },
          { name: "AWS Bedrock", category: "Managed AI Runtime", description: "Enterprise serverless foundation model hosting, provisioned throughput, and strict IAM-bounded inference.", highlight: true },
          { name: "Google Vertex AI", category: "Enterprise MLOps", description: "Model deployment, tuning pipelines, safety guardrails, and enterprise quotas within GCP environments.", highlight: true },
          { name: "Vertex AI Agent Builder", category: "Autonomous Tooling", description: "Rapid grounding of conversational enterprise assistants over internal document repositories." },
        ],
      },
      {
        groupName: "Agent Frameworks & Multi-Agent Orchestration",
        items: [
          { name: "LangGraph", category: "Cyclic State Machines", description: "Deterministic cyclic graphs, dynamic conditional routing, state checkpointing, and human-in-the-loop approval pauses.", highlight: true },
          { name: "LangChain", category: "Agent Tooling", description: "Chains, output parsers, prompt templates, and custom tool binding across multiple provider models.", highlight: true },
          { name: "Agentic Workflows", category: "System Pattern", description: "Designing self-correcting loops where agents critique, debug, and regenerate answers iteratively.", highlight: true },
          { name: "Multi-Agent Systems", category: "Fleet Coordination", description: "Hub-and-spoke topologies where coordinator brains delegate tasks to specialized sub-agents with distinct personas.", highlight: true },
          { name: "Tool & Function Calling", category: "Deterministic Execution", description: "Binding Pydantic and JSON schemas to LLM endpoints to trigger real-world APIs with zero schema leakage.", highlight: true },
          { name: "Agent State Management", category: "Memory & Context", description: "Persistent thread storage, windowed working memory, and cross-session checkpoint persistence." },
          { name: "Human-in-the-Loop (HITL)", category: "Governance", description: "Interrupting agent loops before executing write operations or state changes on production databases.", highlight: true },
        ],
      },
      {
        groupName: "Retrieval & Knowledge Systems (RAG)",
        items: [
          { name: "Enterprise RAG", category: "Grounded Intelligence", description: "Hybrid sparse (BM25) + dense vector search pipelines with Reciprocal Rank Fusion (k=60) and Cross-Encoder reranking.", highlight: true },
          { name: "ChromaDB", category: "Vector Store", description: "High-speed embedded vector database indexing runbooks, incident histories, and compliance docs.", highlight: true },
          { name: "Vector Search", category: "Similarity Metric", description: "Cosine, HNSW, and dot-product vector indexing with metadata filtering.", highlight: true },
          { name: "Embeddings", category: "Vector Space", description: "Generating high-dimensional semantic representations using text-embedding-004 and open embedding weights." },
          { name: "Semantic Search", category: "Neural Retrieval", description: "Intent-based information retrieval that overcomes terminology mismatch in domain documentation." },
          { name: "Document Retrieval & Chunking", category: "Pre-processing", description: "Recursive character chunking, markdown-aware splitting, semantic boundary detection, and metadata tagging." },
          { name: "Knowledge Bases", category: "Corpus Architecture", description: "Hierarchical knowledge graphs and curated document corpora with automated ingestion pipelines." },
          { name: "Context Engineering", category: "Window Optimization", description: "Dynamic context pruning, needle-in-haystack prompt arrangement, and few-shot calibration." },
        ],
      },
      {
        groupName: "AI Engineering & Production Hardening",
        items: [
          { name: "Prompt Engineering", category: "System Design", description: "Few-shot calibration, structured XML delimiter contracts, role definition, and chain-of-thought prompting.", highlight: true },
          { name: "LLM Integration", category: "API Middleware", description: "Resilient asynchronous client wrappers with exponential backoff, rate limit handling, and fallbacks.", highlight: true },
          { name: "Structured Outputs", category: "Schema Enforcement", description: "Guaranteeing 100% compliant JSON responses via Pydantic model validation and instructor paradigms.", highlight: true },
          { name: "AI Workflow Automation", category: "Autonomous Ops", description: "Autonomous ticket triage, automated RCA synthesis, and CAB change request drafting.", highlight: true },
          { name: "Evaluation & Benchmarks", category: "Quality Assurance", description: "Evaluating generation faith, context recall, and semantic drift using synthetic test sets." },
          { name: "Guardrails & Safety", category: "Defensive AI", description: "Input sanitization, prompt injection detection, and outbound sensitive data redaction." },
          { name: "AI Application Architecture", category: "Systems Thinking", description: "Decoupling probabilistic generation tiers from deterministic business rules and state machines." },
        ],
      },
    ],
  },
  {
    id: "software-engineering",
    num: "02",
    title: "Programming & Software Engineering",
    subtitle: "Core Languages, Algorithms & Modular Architecture",
    icon: Code2,
    accentColor: "text-[#8B5CF6]",
    badgeBg: "bg-[#8B5CF6]/10 dark:bg-[#8B5CF6]/20 border-[#8B5CF6]/30 text-[#8B5CF6] dark:text-[#A78BFA]",
    borderAccent: "hover:border-[#8B5CF6]/50",
    description: "Building resilient, maintainable, and type-safe systems from low-level data structures to enterprise service backbones.",
    groups: [
      {
        groupName: "Primary Languages",
        items: [
          { name: "Python", category: "Primary Language", description: "AsyncIO, typing, OOP, Pydantic, scientific packages, and primary runtime for AI/ML pipelines.", highlight: true },
          { name: "TypeScript", category: "Primary Language", description: "Strict static typing, complex generics, modern ESNext patterns, and end-to-end full-stack safety.", highlight: true },
          { name: "JavaScript", category: "Core Web", description: "V8 engine internals, event loops, DOM manipulation, asynchronous microtasks, and Web APIs." },
          { name: "SQL", category: "Data Language", description: "Complex joins, analytical window functions, indexing strategies, CTEs, and execution plan tuning.", highlight: true },
        ],
      },
      {
        groupName: "Additional Languages",
        items: [
          { name: "Java", category: "Enterprise Backend", description: "Enterprise JVM engineering, object-oriented design patterns, Spring ecosystem, and multithreading.", highlight: true },
          { name: "C++", category: "System Computing", description: "Low-level memory management, pointers, fundamental algorithms, and performance-critical routines." },
          { name: "HTML5", category: "Semantic Markup", description: "Semantic element hierarchy, accessibility (ARIA), SEO standards, and modern web specifications." },
          { name: "CSS3", category: "Kinetic Styling", description: "Modern CSS Grid, Flexbox, custom properties, hardware-accelerated animations, and responsive breakpoints." },
        ],
      },
      {
        groupName: "Software Engineering Disciplines",
        items: [
          { name: "Object-Oriented Programming", category: "Methodology", description: "SOLID design principles, design patterns (Factory, Observer, Strategy, Adapter), and clean encapsulation.", highlight: true },
          { name: "Data Structures & Algorithms", category: "Foundations", description: "Graphs, trees, heaps, dynamic programming, algorithmic complexity (Big-O analysis), and space optimization." },
          { name: "API Design", category: "Interface Architecture", description: "RESTful resource modeling, idempotency keys, RFC 7807 problem details, and semantic HTTP status codes.", highlight: true },
          { name: "Modular Architecture", category: "Design System", description: "Decoupled domain boundaries, dependency injection, and clean separation of concerns." },
          { name: "Error Handling & Fault Tolerance", category: "Resilience", description: "Graceful degradation, structured exception hierarchies, circuit breakers, and retry storms prevention." },
          { name: "Authentication & Authorization", category: "Security", description: "Stateless JWT tokens, OAuth 2.0 flows, role-based access control (RBAC), and session security.", highlight: true },
          { name: "Asynchronous Programming", category: "Concurrency", description: "Non-blocking event-driven architectures, Promises, async/await runtimes, and worker thread pools." },
          { name: "Service-Oriented Architecture (SOA)", category: "System Structure", description: "Independent service boundaries communicating over resilient HTTP/gRPC contracts." },
        ],
      },
    ],
  },
  {
    id: "frontend-engineering",
    num: "03",
    title: "Frontend Engineering",
    subtitle: "High-Performance Interfaces, Micro-Interactions & Kinetic UI",
    icon: Layout,
    accentColor: "text-sky-500",
    badgeBg: "bg-sky-500/10 dark:bg-sky-500/20 border-sky-500/30 text-sky-600 dark:text-sky-400",
    borderAccent: "hover:border-sky-500/50",
    description: "Crafting sub-second reactive web applications, modern component architectures, and editorial typography with fluid 60 FPS motion.",
    groups: [
      {
        groupName: "Modern Frameworks",
        items: [
          { name: "React (React 18 & 19)", category: "UI Library", description: "Hooks, concurrent rendering, custom memoization, Server Components, and reactive DOM reconciliation.", highlight: true },
          { name: "Next.js (Next 14 & 15)", category: "Full-Stack Framework", description: "App Router, Server Actions, Incremental Static Regeneration (ISR), static generation, and edge routing.", highlight: true },
        ],
      },
      {
        groupName: "UI, Styling & Design Systems",
        items: [
          { name: "Tailwind CSS", category: "Utility-First CSS", description: "Design tokens, custom fluid font sizing, dark mode theming, and zero-runtime CSS bundle optimization.", highlight: true },
          { name: "Responsive Design", category: "Layout Standard", description: "Mobile-first layouts adapting fluidly from 320px mobile viewports to ultra-wide 4K workstations." },
          { name: "Interactive UI & Micro-interactions", category: "User Experience", description: "Tactile button states, cursor followers, magnetic hover triggers, and dynamic feedback indicators.", highlight: true },
          { name: "Animation & Motion", category: "Framer Motion", description: "Spring physics, layout animations, scroll-linked transforms, and hardware-accelerated transitions.", highlight: true },
        ],
      },
      {
        groupName: "Frontend Architecture & Web Standards",
        items: [
          { name: "Component Architecture", category: "Reusability", description: "Composable atomic components, headless primitives, clean prop contracts, and slot composition.", highlight: true },
          { name: "State Management", category: "Client State", description: "Context API, Zustand, optimistic UI updates, and predictable unidirectional data flow." },
          { name: "Client/Server Rendering", category: "Hydration Pattern", description: "Balancing instant SEO crawler hydration with reactive client-side dynamic interactivity." },
          { name: "Performance Optimization", category: "Core Web Vitals", description: "Code splitting, dynamic lazy imports, bundle tree shaking, image compression, and sub-second FCP.", highlight: true },
          { name: "Accessibility (a11y)", category: "Standards", description: "Keyboard navigation focus traps, screen reader semantic elements, and WCAG AA contrast compliance." },
          { name: "API Integration", category: "Data Layer", description: "Type-safe fetch wrappers, React Query / SWR caching, error boundaries, and WebSocket streaming.", highlight: true },
        ],
      },
    ],
  },
  {
    id: "backend-engineering",
    num: "04",
    title: "Backend & API Engineering",
    subtitle: "High-Throughput APIs, Asynchronous Workers & Microservices",
    icon: Server,
    accentColor: "text-amber-500",
    badgeBg: "bg-amber-500/10 dark:bg-amber-500/20 border-amber-500/30 text-amber-600 dark:text-amber-400",
    borderAccent: "hover:border-amber-500/50",
    description: "Designing low-latency REST endpoints, background queue processors, WebSocket streams, and scalable microservice layers.",
    groups: [
      {
        groupName: "Backend Frameworks & Runtimes",
        items: [
          { name: "FastAPI", category: "Python Async", description: "High-performance asynchronous REST endpoints, automatic OpenAPI documentation, and native Pydantic validation.", highlight: true },
          { name: "Flask", category: "Python Microframework", description: "Lightweight routing for microservices, RAG search endpoints, and internal diagnostic agents.", highlight: true },
          { name: "Node.js", category: "JavaScript Runtime", description: "Event-driven asynchronous I/O, server-side streaming, and lightweight API gateway routing." },
          { name: "Express.js", category: "Web Framework", description: "RESTful endpoint routing, robust middleware chaining, and custom authentication handlers." },
        ],
      },
      {
        groupName: "Backend Capabilities & Architecture",
        items: [
          { name: "REST APIs", category: "Interface Standard", description: "Standardized resource naming, pagination, query filtering, and idempotency guarantees.", highlight: true },
          { name: "API Architecture", category: "System Design", description: "Layered architecture decoupling controllers, business logic service layers, and data repositories.", highlight: true },
          { name: "Middleware", category: "Request Pipeline", description: "CORS configuration, request logging, rate limiting, token parsing, and execution profiling." },
          { name: "Background Jobs & Async Processing", category: "Task Execution", description: "Offloading long-running AI inference, log analysis, and batch updates to async background tasks.", highlight: true },
          { name: "Webhooks", category: "Event Publishing", description: "Real-time bidirectional event notifications between external SaaS tools and internal platforms.", highlight: true },
          { name: "Third-Party API Integration", category: "Interoperability", description: "Robust clients for external SaaS (ServiceNow, Jira, Gemini API, Cloudinary) with circuit breakers." },
          { name: "Microservices", category: "Architecture", description: "Containerized, independently deployable services communicating over strict contract APIs.", highlight: true },
          { name: "Service Integration", category: "Enterprise Glue", description: "Connecting legacy enterprise ticketing platforms to modern generative AI services with zero data loss." },
        ],
      },
      {
        groupName: "Python Ecosystem",
        items: [
          { name: "Async Python (asyncio)", category: "Concurrency", description: "Asynchronous task gathering, non-blocking network I/O, and concurrent LLM batch requests.", highlight: true },
          { name: "Requests & httpx", category: "HTTP Clients", description: "Sync and async HTTP client sessions with connection pooling and retry logic." },
          { name: "Pydantic", category: "Data Validation", description: "Strict runtime type validation, JSON schema generation, and settings management.", highlight: true },
          { name: "AI / ML Libraries", category: "Core Tooling", description: "PyTorch, NumPy, scikit-learn, and HuggingFace client libraries for embedding manipulation." },
        ],
      },
    ],
  },
  {
    id: "cloud-infrastructure",
    num: "05",
    title: "Cloud & Infrastructure",
    subtitle: "Public Cloud, Containers, Linux SRE & Deployment Pipelines",
    icon: Cloud,
    accentColor: "text-emerald-500",
    badgeBg: "bg-emerald-500/10 dark:bg-emerald-500/20 border-emerald-500/30 text-emerald-600 dark:text-emerald-400",
    borderAccent: "hover:border-emerald-500/50",
    description: "Architecting reliable cloud foundations across Google Cloud and AWS, containerizing workloads, and establishing automated CI/CD pipelines.",
    groups: [
      {
        groupName: "Google Cloud Platform (GCP)",
        items: [
          { name: "Vertex AI", category: "Managed ML", description: "Model deployment, fine-tuning infrastructure, prompt evaluation, and managed feature stores.", highlight: true },
          { name: "BigQuery", category: "Data Warehouse", description: "Serverless enterprise analytics, petabyte-scale SQL queries, and federated data inspection.", highlight: true },
          { name: "Google Cloud Services", category: "Core Infra", description: "Compute Engine, Cloud Storage buckets, Cloud Run serverless containers, and Cloud Monitoring.", highlight: true },
          { name: "Cloud Digital Leader Certified", category: "Credential", description: "Officially certified in Google Cloud architecture, cloud value propositions, and governance models." },
        ],
      },
      {
        groupName: "Amazon Web Services (AWS)",
        items: [
          { name: "AWS Bedrock", category: "Generative AI", description: "Deploying enterprise models (Claude, Titan) through private endpoints with strict governance.", highlight: true },
          { name: "Cloud Infrastructure", category: "AWS Compute", description: "EC2 instances, S3 object storage, and basic IAM role-based authorization hierarchies." },
          { name: "AI Services", category: "Cloud AI", description: "Leveraging AWS managed cognitive APIs and serverless inference architectures." },
        ],
      },
      {
        groupName: "Infrastructure & SRE Practices",
        items: [
          { name: "Docker", category: "Containerization", description: "Multi-stage Dockerfiles, image size minimization, environment isolation, and container orchestration.", highlight: true },
          { name: "Linux / Unix", category: "Operating System", description: "Shell scripting, process inspection, systemd daemon management, permissions, and server administration.", highlight: true },
          { name: "Git & Version Control", category: "Collaboration", description: "Git branching workflows, rebasing, semantic commit conventions, pull request reviews, and hooks.", highlight: true },
          { name: "CI/CD Pipelines", category: "DevOps", description: "Automated GitHub Actions workflows for linting, type-checking, building, and zero-downtime deployment.", highlight: true },
          { name: "Cloud Deployment", category: "Release Engineering", description: "Vercel, Netlify, Cloud Run, and container registry publishing with SSL automation." },
          { name: "Environment Management", category: "Configuration", description: "Strict 12-factor application principles, secrets rotation, and environment variable isolation." },
        ],
      },
    ],
  },
  {
    id: "databases-data",
    num: "06",
    title: "Databases & Data Engineering",
    subtitle: "Relational Persistence, Vector Indexes & Analytical Warehousing",
    icon: Database,
    accentColor: "text-indigo-500",
    badgeBg: "bg-indigo-500/10 dark:bg-indigo-500/20 border-indigo-500/30 text-indigo-600 dark:text-indigo-400",
    borderAccent: "hover:border-indigo-500/50",
    description: "Designing schema-enforced relational databases, low-latency vector indexes for RAG pipelines, and scalable analytical queries.",
    groups: [
      {
        groupName: "Relational Databases",
        items: [
          { name: "PostgreSQL", category: "Relational Engine", description: "ACID transactions, relational schema design, foreign key constraints, connection pooling, and pgvector.", highlight: true },
          { name: "Oracle Database", category: "Enterprise DBMS", description: "Enterprise administration, PL/SQL stored procedures, tablespace management, and high-availability operations.", highlight: true },
          { name: "SQL Mastery", category: "Query Language", description: "Complex subqueries, window functions (ROW_NUMBER, OVER), index tuning, and EXPLAIN ANALYZE inspection.", highlight: true },
        ],
      },
      {
        groupName: "Analytics & Warehousing",
        items: [
          { name: "BigQuery", category: "Data Warehouse", description: "Columnar storage analysis, partition and cluster keys, cost-optimized querying over operational logs.", highlight: true },
        ],
      },
      {
        groupName: "AI & Vector Databases",
        items: [
          { name: "ChromaDB", category: "Vector Store", description: "Local and client-server embedding storage with persistent collection querying and metadata filtering.", highlight: true },
          { name: "Vector Databases", category: "Semantic Storage", description: "High-dimensional vector indexing (HNSW) for instant semantic similarity lookups at millisecond latencies.", highlight: true },
          { name: "Embeddings & Semantic Search", category: "Representation", description: "Text chunk embedding generation, distance metric tuning (Cosine vs Euclidean), and deduplication." },
        ],
      },
      {
        groupName: "Data Engineering Disciplines",
        items: [
          { name: "Data Modeling", category: "Schema Design", description: "Entity-relationship modeling, 3NF normalization, and denormalized views for analytical read models.", highlight: true },
          { name: "Query Optimization", category: "Performance", description: "Composite B-tree indexes, partial indexing, query rewrites, and avoiding full table scans." },
          { name: "Data Processing & Pipelines", category: "Ingestion", description: "Batch and streaming ingestion scripts converting raw markdown, PDFs, and incident records into structured knowledge." },
          { name: "ETL / ELT", category: "Data Transformation", description: "Extracting operational logs, transforming formats, and loading into vector or relational stores." },
        ],
      },
    ],
  },
  {
    id: "enterprise-integration",
    num: "07",
    title: "Enterprise Integration & Automation",
    subtitle: "ITSM Ecosystems, Mission-Critical Governance & Automated Triage",
    icon: Workflow,
    accentColor: "text-amber-500",
    badgeBg: "bg-amber-500/10 dark:bg-amber-500/20 border-amber-500/30 text-amber-600 dark:text-amber-400",
    borderAccent: "hover:border-amber-500/50",
    description: "Bridging modern generative AI with existing business backbones. Connecting autonomous agents to ServiceNow, Jira, and enterprise APIs.",
    groups: [
      {
        groupName: "Enterprise Platforms",
        items: [
          { name: "ServiceNow", category: "ITSM Backbone", description: "Table REST APIs, incident creation, automated change ticket collision analysis, and CAB governance.", highlight: true },
          { name: "Jira", category: "Issue Tracking", description: "REST API integration, automated task creation, backlog triage, and sprint status webhooks.", highlight: true },
          { name: "Confluence", category: "Knowledge Base", description: "Document extraction, runbook ingestion, and automatic documentation synchronization for RAG." },
        ],
      },
      {
        groupName: "Integration Architecture",
        items: [
          { name: "REST APIs", category: "Protocol", description: "Integrating legacy SOAP and modern REST services into unified agent-accessible endpoints.", highlight: true },
          { name: "Webhooks", category: "Event Publishing", description: "Inbound webhook listeners triggering LangGraph agent flows upon ticket creation or alert triggers.", highlight: true },
          { name: "Third-Party APIs", category: "Connectivity", description: "OAuth authentication flows, credential management, token refresh mechanisms, and error handling." },
          { name: "Data Synchronization", category: "Integrity", description: "Bi-directional state sync between external ticketing platforms and local AI agent state caches." },
          { name: "System Integration", category: "Core Positioning", description: "Unifying disparate legacy systems under a coordinated intelligent orchestration umbrella.", highlight: true },
        ],
      },
      {
        groupName: "Automation & Synthetic Execution",
        items: [
          { name: "Workflow Automation", category: "Operations", description: "Automating repetitive L1/L2 service desk tasks, diagnostic checklists, and incident escalation.", highlight: true },
          { name: "AI-Powered Automation", category: "Intelligent Ops", description: "Using LLM reasoning to parse unstructured incident complaints and map them directly to remediation actions.", highlight: true },
          { name: "Browser Automation", category: "Synthetic Actions", description: "Playwright headless browser execution for automated end-to-end testing and web dashboard validation.", highlight: true },
          { name: "Playwright", category: "Testing & Scraping", description: "Deterministic browser script execution, visual regressions, and synthetic transaction monitoring.", highlight: true },
          { name: "Automated Task Execution", category: "Autonomous Ops", description: "Triggering diagnostic ping scripts, DB connectivity tests, and mock password resets autonomously." },
        ],
      },
    ],
  },
  {
    id: "dev-tools",
    num: "08",
    title: "Development Tools & Engineering Workflow",
    subtitle: "Precision Tooling, Testing & Rigorous Engineering Standards",
    icon: Wrench,
    accentColor: "text-rose-500",
    badgeBg: "bg-rose-500/10 dark:bg-rose-500/20 border-rose-500/30 text-rose-600 dark:text-rose-400",
    borderAccent: "hover:border-rose-500/50",
    description: "The daily developer ecosystem ensuring rapid iteration, bulletproof test coverage, clean code reviews, and reproducible environments.",
    groups: [
      {
        groupName: "Version Control & Collaboration",
        items: [
          { name: "Git", category: "Version Control", description: "Interactive rebasing, bisecting regressions, cherry-picking, and disciplined branch management.", highlight: true },
          { name: "GitHub", category: "Platform", description: "GitHub Actions CI/CD workflows, pull request code reviews, issue templates, and release tags.", highlight: true },
        ],
      },
      {
        groupName: "Development Environment",
        items: [
          { name: "VS Code & Antigravity IDE", category: "Editor", description: "Custom extensions, remote SSH containers, launch configurations, and multi-file agent workflows.", highlight: true },
          { name: "Linux Workstation", category: "Environment", description: "Zsh / Bash shell scripting, grep/ripgrep, sed, awk, curl, and native terminal productivity." },
          { name: "Docker Dev Environments", category: "Containerization", description: "Isolated reproducible developer containers ensuring zero 'works on my machine' defects." },
        ],
      },
      {
        groupName: "Testing & Automation",
        items: [
          { name: "API Testing", category: "Verification", description: "Postman collections, automated pytest suites, and schema validation against OpenAPI contracts.", highlight: true },
          { name: "Browser Automation", category: "E2E Testing", description: "Playwright automated test suites across Chromium, Firefox, and WebKit runtimes.", highlight: true },
          { name: "Integration Testing", category: "System Testing", description: "End-to-end multi-agent mock testing validating agent tool execution against synthetic endpoints." },
        ],
      },
      {
        groupName: "Engineering Practices",
        items: [
          { name: "Systematic Debugging", category: "Reliability", description: "Root-cause isolation using structured log tracing, breakpoint inspection, and network profiling.", highlight: true },
          { name: "Documentation", category: "Clarity", description: "Comprehensive architectural decision records (ADRs), READMEs, OpenAPI specs, and system diagrams." },
          { name: "Code Reviews", category: "Quality", description: "Constructive peer code reviews emphasizing maintainability, security, and edge-case handling." },
          { name: "Environment Configuration", category: "12-Factor", description: "Strict secrets isolation, .env hygiene, and environment-specific configuration bundles." },
          { name: "Deployment Automation", category: "Releases", description: "Automated test-and-deploy pipelines with rollback capabilities on failure triggers." },
        ],
      },
    ],
  },
];

// --- LAYER 4: PROOF & PROJECT ASSOCIATIONS ---
interface ProofMapping {
  technology: string;
  roleTag: string;
  projectName: string;
  projectUrl: string;
  whatIBuilt: string;
}

const PROOF_MAPPINGS: ProofMapping[] = [
  {
    technology: "LangGraph",
    roleTag: "Cyclic Multi-Agent Orchestration",
    projectName: "Agentic Co-Worker Platform",
    projectUrl: "/projects",
    whatIBuilt: "Orchestrated a fleet of 100+ Core Digital Workers spanning 15 IT specializations with distinct personas, coordinated by a Central Brain with 40+ pub/sub event types.",
  },
  {
    technology: "Google Gemini 2.5 Flash",
    roleTag: "Multimodal & High-Speed Reasoning",
    projectName: "Change Co-Worker",
    projectUrl: "/projects",
    whatIBuilt: "Engineered a hub-and-spoke multi-agent system automating IT change requests, assessing collision risks, and slashing CAB approval latency from 4 hours to 5 minutes.",
  },
  {
    technology: "ChromaDB & Hybrid RAG",
    roleTag: "Knowledge Retrieval with BM25 + Dense RRF",
    projectName: "Multi-Agent Enterprise AI Assistant",
    projectUrl: "/projects",
    whatIBuilt: "Built dual-retriever hybrid RAG (sparse BM25 + dense ChromaDB with Reciprocal Rank Fusion, k=60) alongside isolated serverless Python code execution.",
  },
  {
    technology: "FastAPI & Python 3.12",
    roleTag: "Low-Latency AI Backend & State Machine",
    projectName: "ResolveAI - IT Service Desk",
    projectUrl: "/projects",
    whatIBuilt: "Engineered a 15-node LangGraph state machine with ChromaDB vector RAG, multi-factor confidence scoring, and automated diagnostic tools on synthetic enterprise data.",
  },
  {
    technology: "ServiceNow REST & ITSM",
    roleTag: "Enterprise Triage & Ticket Remediation",
    projectName: "SmartDesk AI",
    projectUrl: "/projects",
    whatIBuilt: "Developed autonomous incident classification and resolution routing across 8 specialist IT teams with live bidirectional ServiceNow ticket updates.",
  },
  {
    technology: "Java 17, Spring Boot & Redis",
    roleTag: "High-Concurrency Booking Architecture",
    projectName: "TicketWave",
    projectUrl: "/projects",
    whatIBuilt: "Architected a three-layer double-booking defense (Redis locks, Redis TTL holds, PostgreSQL unique constraints) delivering sub-100ms checkout latency.",
  },
];

// --- EXPLORING TECHNOLOGIES ---
const CURRENTLY_EXPLORING = [
  {
    title: "Advanced Agentic Architectures",
    tag: "Multi-Agent Swarms",
    desc: "Hierarchical multi-agent swarms, self-reflective evaluation loops, and dynamic sub-task delegation strategies.",
  },
  {
    title: "Model Context Protocol (MCP)",
    tag: "Open Tool Standard",
    desc: "Standardized client-server protocol enabling LLMs to safely query tools, local repositories, and database contexts natively.",
  },
  {
    title: "AI Evaluation & Synthetic Benchmarking",
    tag: "QA & Reliability",
    desc: "Rigorous automated benchmarking using RAGAS, DeepEval, and synthetic ground truth datasets to prevent regression.",
  },
  {
    title: "LLM Observability & Tracing",
    tag: "Telemetry & SRE",
    desc: "OpenTelemetry tracing, token latency profiling, and distributed tracing across multi-step agent chains.",
  },
  {
    title: "Advanced RAG & Graph Retrieval",
    tag: "Knowledge Graph RAG",
    desc: "Contextual retrieval, Hypothetical Document Embeddings (HyDE), and GraphRAG connecting entities across disparate documents.",
  },
  {
    title: "Production AI Inference Serving",
    tag: "Inference SRE",
    desc: "vLLM high-throughput serving, KV-cache optimization, AWQ/GPTQ model quantization, and self-hosted open weights.",
  },
];

export const SkillsPage: React.FC = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const archRunwayRef = useRef<HTMLElement>(null);
  const pageProgress = useSectionProgress(pageRef);
  const archProgress = useSectionProgress(archRunwayRef, PINNED_OFFSET);
  // The architecture card is ~850px tall; only pin it where it fits under the nav.
  const pinArch = useMediaQuery('(min-width: 1024px) and (min-height: 960px)');
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedArchNode, setSelectedArchNode] = useState<string>('agents');

  // Filter disciplines or search
  const filteredDisciplines = DISCIPLINES.filter((disc) => {
    if (activeFilter !== 'all' && disc.id !== activeFilter) {
      return false;
    }
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    const matchesTitle = disc.title.toLowerCase().includes(q) || disc.subtitle.toLowerCase().includes(q);
    const matchesTech = disc.groups.some((g) =>
      g.items.some((i) => i.name.toLowerCase().includes(q) || i.description.toLowerCase().includes(q))
    );
    return matchesTitle || matchesTech;
  });

  return (
    <div ref={pageRef} className="pt-28 pb-24 min-h-screen bg-page relative overflow-x-clip">
      <SEO
        title="Technical Arsenal & Engineering Capability Map | Sonu Thomas"
        description="Comprehensive technical capabilities of Sonu Thomas: AI, LLM & Agent Engineering, Full-Stack Software, Cloud Infrastructure, Databases, Enterprise Integrations, and System Architecture."
        url="/skills"
      />

      <AmbientParticles variant="minimal" density="subtle" progress={pageProgress} />
      <NeuralGridLines rows={9} cols={11} scanBar={true} progress={pageProgress} />
      <DataStreamTicker columns={8} intensity={0.7} progress={pageProgress} />

      <PageHero
        badge={{ icon: <Radio className="w-3 h-3 animate-pulse" />, text: 'Living capability map, updated 2025–2026' }}
        title={
          <>
            I build across the entire <br />
            <span className="text-copper">AI engineering stack</span>.
          </>
        }
        subtitle="From LLM orchestration and autonomous agents to production APIs, cloud infrastructure, databases, and enterprise integrations."
        stats={[
          { label: 'Deep disciplines', value: '9', note: 'Across the full stack' },
          { label: 'Tools & capabilities', value: '100+', note: 'Production-proven', tone: 'copper' },
          { label: 'MTTR reduction', value: '70%', note: 'On enterprise triage', tone: 'emerald' },
          { label: 'Generic star ratings', value: '0%', note: 'Only verifiable proof', tone: 'violet' },
        ]}
        className="mb-12 sm:mb-16"
      >
          {/* Positioning Tagline Pills */}
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white dark:bg-[#1E1B18] border border-[#E8E0D8] dark:border-white/10 text-sm text-[#1A1614] dark:text-[#FDFBF7] shadow-xs">
              <Bot className="w-3.5 h-3.5 text-copper" />
              <span>AI &amp; agent engineering</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white dark:bg-[#1E1B18] border border-[#E8E0D8] dark:border-white/10 text-sm text-[#1A1614] dark:text-[#FDFBF7] shadow-xs">
              <Code2 className="w-3.5 h-3.5 text-copper" />
              <span>Full-stack systems</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white dark:bg-[#1E1B18] border border-[#E8E0D8] dark:border-white/10 text-sm text-[#1A1614] dark:text-[#FDFBF7] shadow-xs">
              <Cloud className="w-3.5 h-3.5 text-copper" />
              <span>Cloud &amp; data infrastructure</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white dark:bg-[#1E1B18] border border-[#E8E0D8] dark:border-white/10 text-sm text-[#1A1614] dark:text-[#FDFBF7] shadow-xs">
              <Workflow className="w-3.5 h-3.5 text-copper" />
              <span>Enterprise systems integration</span>
            </span>
          </div>
      </PageHero>

      {/* Layer 1: Interactive Category Navigation & Search */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-10 sticky top-20 z-30">
        <div className="p-3 rounded-2xl bg-white/90 dark:bg-[#1A1614]/90 backdrop-blur-xl border border-[#E8E0D8] dark:border-white/10 shadow-soft-sm flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1 md:pb-0">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3 py-1.5 rounded-xl text-sm transition-all shrink-0 cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-copper text-white shadow-xs'
                  : 'bg-[#FAF7F2] dark:bg-white/[0.04] text-[#4A4340] dark:text-[#D6D3D1] hover:bg-copper/10 hover:text-copper'
              }`}
            >
              All disciplines
            </button>
            {DISCIPLINES.map((d) => (
              <button
                key={d.id}
                onClick={() => setActiveFilter(d.id)}
                className={`px-3 py-1.5 rounded-xl text-sm transition-all shrink-0 cursor-pointer ${
                  activeFilter === d.id
                    ? 'bg-copper text-white shadow-xs'
                    : 'bg-[#FAF7F2] dark:bg-white/[0.04] text-[#4A4340] dark:text-[#D6D3D1] hover:bg-copper/10 hover:text-copper'
                }`}
              >
                {d.title.split(' ')[0]}
              </button>
            ))}
            <a
              href="#architecture-blueprint"
              className="px-3 py-1.5 rounded-xl text-sm bg-copper/10 border border-copper/30 text-copper hover:bg-copper hover:text-white transition-colors shrink-0"
            >
              Architecture
            </a>
          </div>

          {/* Quick Search */}
          <div className="relative shrink-0 md:w-64">
            <input
              type="text"
              placeholder="Search technologies or concepts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-3.5 py-1.5 rounded-xl text-sm bg-[#FAF7F2] dark:bg-white/[0.04] border border-[#E8E0D8] dark:border-white/10 text-[#1A1614] dark:text-white placeholder-[#78716C] focus:outline-none focus:border-copper"
            />
          </div>
        </div>
      </div>

      {/* Layer 2: Deep Disciplines Breakdown (01 to 08) */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
        {filteredDisciplines.map((discipline) => {
          const Icon = discipline.icon;
          return (
            <motion.div
              key={discipline.id}
              id={discipline.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4 }}
              className="scroll-mt-36"
            >
              {/* Discipline Header — running editorial header, no card wrapper */}
              <div className="flex items-start gap-4 pb-6 border-b border-[#E8E0D8] dark:border-white/10">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${discipline.badgeBg} border`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2.5 flex-wrap">
                    <motion.span
                      initial={{ opacity: 0, x: -14 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-60px' }}
                      transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                      className="font-mono text-xs text-[#78716C] dark:text-[#A8A29E]"
                    >
                      {discipline.num}
                    </motion.span>
                    <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#1A1614] dark:text-[#FDFBF7]">
                      {discipline.title}
                    </h2>
                  </div>
                  <p className="text-sm text-[#78716C] dark:text-[#A8A29E] mt-1">
                    {discipline.subtitle}
                  </p>
                </div>
              </div>

              <p className="text-[#4A4340] dark:text-[#D6D3D1] text-sm sm:text-base leading-relaxed mt-6 mb-8 max-w-4xl">
                {discipline.description}
              </p>

              {/* Sub-Groups: flagship items as cards, the rest as a plain list */}
              <div className="space-y-8">
                {discipline.groups.map((group) => {
                  const flagship = group.items.filter((tech) => tech.highlight);
                  const rest = group.items.filter((tech) => !tech.highlight);
                  return (
                    <div key={group.groupName} className="space-y-3">
                      <h3 className="text-sm font-medium text-[#78716C] dark:text-[#A8A29E]">
                        {group.groupName}
                      </h3>

                      {flagship.length > 0 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                          {flagship.map((tech) => (
                            <div
                              key={tech.name}
                              className="p-4 rounded-2xl border border-copper/30 bg-[#FAF7F2] dark:bg-white/[0.04] hover:border-copper/70 transition-colors duration-200"
                            >
                              <div className="flex items-center justify-between gap-2 mb-2">
                                <h4 className="font-display font-semibold text-sm sm:text-base text-[#1A1614] dark:text-[#FDFBF7] flex items-center gap-2">
                                  <span className="w-1 h-3.5 rounded-full bg-copper shrink-0" />
                                  {tech.name}
                                </h4>
                                <span className="text-xs text-[#78716C] dark:text-[#A8A29E] shrink-0">
                                  {tech.category}
                                </span>
                              </div>
                              <p className="text-xs text-[#4A4340] dark:text-[#A8A29E] leading-relaxed">
                                {tech.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}

                      {rest.length > 0 && (
                        <div className="divide-y divide-[#E8E0D8]/60 dark:divide-white/[0.06] border-t border-[#E8E0D8]/60 dark:border-white/[0.06]">
                          {rest.map((tech) => (
                            <div
                              key={tech.name}
                              className="py-3 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4"
                            >
                              <div className="sm:w-52 shrink-0 flex items-baseline gap-2">
                                <span className="font-display font-medium text-sm text-[#1A1614] dark:text-[#FDFBF7]">
                                  {tech.name}
                                </span>
                                <span className="text-[11px] text-[#78716C] dark:text-[#A8A29E]">
                                  {tech.category}
                                </span>
                              </div>
                              <p className="text-xs text-[#4A4340] dark:text-[#A8A29E] leading-relaxed">
                                {tech.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Special Discipline 07 Enterprise Positioning Callout */}
              {discipline.id === "enterprise-integration" && (
                <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-amber-500/[0.07] border border-amber-500/30 flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-sm font-semibold text-amber-700 dark:text-amber-300 block mb-1">
                      The enterprise reality
                    </span>
                    <p className="text-sm text-[#1A1614] dark:text-[#FDFBF7] font-medium leading-relaxed">
                      "I don't just build isolated AI demos. I connect autonomous AI directly to existing business systems—ServiceNow, Jira, Confluence, relational databases, and enterprise APIs—with deterministic guardrails, human-in-the-loop pauses, and zero operational downtime."
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          );
        })}
      </section>

      {/* Section 09: Visual AI System Architecture Diagram */}
      <section
        ref={archRunwayRef}
        id="architecture-blueprint"
        className={`max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mt-24 scroll-mt-32 ${pinArch ? 'h-[220vh]' : ''}`}
      >
        <div className={`p-6 sm:p-10 rounded-3xl bg-white dark:bg-[#1E1B18] border border-[#E8E0D8] dark:border-white/10 shadow-soft-sm relative overflow-hidden ${pinArch ? 'sticky top-24' : ''}`}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="font-mono text-xs text-[#78716C] dark:text-[#A8A29E]">09</span>
              <h2 className="font-display font-bold text-2xl sm:text-4xl text-[#1A1614] dark:text-[#FDFBF7] mt-1">
                End-to-end autonomous AI system architecture
              </h2>
              <p className="text-sm sm:text-base text-[#4A4340] dark:text-[#D6D3D1] mt-2 max-w-2xl">
                How I orchestrate user clients, API gateways, probabilistic intelligence tiers, and enterprise persistence into a unified runtime.
              </p>
            </div>

            <div className="px-3.5 py-1.5 rounded-full bg-copper/10 border border-copper/30 text-copper text-xs shrink-0">
              {pinArch ? 'Scroll to build the system, click a tier to inspect it' : 'Click a tier to inspect it'}
            </div>
          </div>

          {/* The Visual Architecture Flow */}
          <div className="py-6 px-4 sm:px-8 rounded-2xl bg-[#FAF7F2] dark:bg-black/30 border border-[#E8E0D8] dark:border-white/05 space-y-6">
            
            {/* Level 1: Client / User */}
            <ScrubReveal progress={archProgress} range={[0.06, 0.18]} enabled={pinArch}>
            <div className="flex flex-col items-center">
              <div
                onClick={() => setSelectedArchNode('client')}
                className={`cursor-pointer px-6 py-3 rounded-2xl border transition-all text-center max-w-sm w-full ${
                  selectedArchNode === 'client'
                    ? 'bg-copper text-white border-copper shadow-md scale-105'
                    : 'bg-white dark:bg-[#1A1614] border-[#E8E0D8] dark:border-white/10 hover:border-copper/60 text-[#1A1614] dark:text-[#FDFBF7]'
                }`}
              >
                <div className="text-[10px] font-mono opacity-70">Layer 1</div>
                <div className="font-display font-bold text-sm">User &amp; client interface</div>
                <div className="text-xs opacity-90 mt-0.5">React 19 · Next.js · Tailwind CSS · WebSocket streams</div>
              </div>
              <div className="w-px h-6 bg-copper/40 dark:bg-copper/60 my-1" />
              <div className="w-2 h-2 rounded-full bg-copper" />
            </div>

            </ScrubReveal>

            {/* Level 2: API Gateway */}
            <ScrubReveal progress={archProgress} range={[0.2, 0.32]} enabled={pinArch}>
            <div className="flex flex-col items-center">
              <div
                onClick={() => setSelectedArchNode('api')}
                className={`cursor-pointer px-6 py-3 rounded-2xl border transition-all text-center max-w-sm w-full ${
                  selectedArchNode === 'api'
                    ? 'bg-[#8B5CF6] text-white border-[#8B5CF6] shadow-md scale-105'
                    : 'bg-white dark:bg-[#1A1614] border-[#E8E0D8] dark:border-white/10 hover:border-[#8B5CF6]/60 text-[#1A1614] dark:text-[#FDFBF7]'
                }`}
              >
                <div className="text-[10px] font-mono opacity-70">Layer 2</div>
                <div className="font-display font-bold text-sm">API gateway &amp; validation</div>
                <div className="text-xs opacity-90 mt-0.5">FastAPI · Node.js · Pydantic schemas · JWT RBAC</div>
              </div>
              <div className="w-px h-6 bg-[#8B5CF6]/40 dark:bg-[#8B5CF6]/60 my-1" />
              <div className="w-2 h-2 rounded-full bg-[#8B5CF6]" />
            </div>

            </ScrubReveal>

            {/* Level 3: Triad Intelligence Tier (LLMs + Agents + RAG) */}
            <ScrubReveal progress={archProgress} range={[0.34, 0.48]} enabled={pinArch}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              <div
                onClick={() => setSelectedArchNode('llms')}
                className={`cursor-pointer p-4 rounded-2xl border transition-all text-center ${
                  selectedArchNode === 'llms'
                    ? 'bg-amber-500 text-white border-amber-500 shadow-md scale-105'
                    : 'bg-white dark:bg-[#1A1614] border-[#E8E0D8] dark:border-white/10 hover:border-amber-500/60 text-[#1A1614] dark:text-[#FDFBF7]'
                }`}
              >
                <div className="text-[10px] font-mono opacity-70">Foundation</div>
                <div className="font-display font-bold text-sm">LLM providers</div>
                <div className="text-xs opacity-90 mt-0.5">Gemini 2.5 · Claude · AWS Bedrock</div>
              </div>

              <div
                onClick={() => setSelectedArchNode('agents')}
                className={`cursor-pointer p-4 rounded-2xl border transition-all text-center ${
                  selectedArchNode === 'agents'
                    ? 'bg-copper text-white border-copper shadow-md scale-105'
                    : 'bg-white dark:bg-[#1A1614] border-[#E8E0D8] dark:border-white/10 hover:border-copper/60 text-[#1A1614] dark:text-[#FDFBF7]'
                }`}
              >
                <div className="text-[10px] font-mono opacity-70">Orchestration</div>
                <div className="font-display font-bold text-sm">Agent state machine</div>
                <div className="text-xs opacity-90 mt-0.5">LangGraph DAGs · HITL · Sub-agents</div>
              </div>

              <div
                onClick={() => setSelectedArchNode('rag')}
                className={`cursor-pointer p-4 rounded-2xl border transition-all text-center ${
                  selectedArchNode === 'rag'
                    ? 'bg-sky-500 text-white border-sky-500 shadow-md scale-105'
                    : 'bg-white dark:bg-[#1A1614] border-[#E8E0D8] dark:border-white/10 hover:border-sky-500/60 text-[#1A1614] dark:text-[#FDFBF7]'
                }`}
              >
                <div className="text-[10px] font-mono opacity-70">Retrieval</div>
                <div className="font-display font-bold text-sm">Hybrid RAG pipeline</div>
                <div className="text-xs opacity-90 mt-0.5">BM25 + ChromaDB + reciprocal rank</div>
              </div>
            </div>

            </ScrubReveal>

            {/* Level 4: Execution & Sandboxing */}
            <ScrubReveal progress={archProgress} range={[0.5, 0.62]} enabled={pinArch}>
            <div className="flex flex-col items-center">
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              <div className="w-px h-6 bg-emerald-500/40 dark:bg-emerald-500/60 my-1" />
              <div
                onClick={() => setSelectedArchNode('tools')}
                className={`cursor-pointer px-6 py-3 rounded-2xl border transition-all text-center max-w-sm w-full ${
                  selectedArchNode === 'tools'
                    ? 'bg-emerald-600 text-white border-emerald-600 shadow-md scale-105'
                    : 'bg-white dark:bg-[#1A1614] border-[#E8E0D8] dark:border-white/10 hover:border-emerald-500/60 text-[#1A1614] dark:text-[#FDFBF7]'
                }`}
              >
                <div className="text-[10px] font-mono opacity-70">Layer 4</div>
                <div className="font-display font-bold text-sm">Tool execution &amp; sandbox</div>
                <div className="text-xs opacity-90 mt-0.5">Python sandbox · REST tool calling · Playwright</div>
              </div>
              <div className="w-px h-6 bg-emerald-500/40 dark:bg-emerald-500/60 my-1" />
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
            </div>

            </ScrubReveal>

            {/* Level 5: Storage & Enterprise Systems */}
            <ScrubReveal progress={archProgress} range={[0.64, 0.78]} enabled={pinArch}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              <div
                onClick={() => setSelectedArchNode('relational')}
                className={`cursor-pointer p-4 rounded-2xl border transition-all text-center ${
                  selectedArchNode === 'relational'
                    ? 'bg-indigo-600 text-white border-indigo-600 shadow-md scale-105'
                    : 'bg-white dark:bg-[#1A1614] border-[#E8E0D8] dark:border-white/10 hover:border-indigo-500/60 text-[#1A1614] dark:text-[#FDFBF7]'
                }`}
              >
                <div className="text-[10px] font-mono opacity-70">Relational</div>
                <div className="font-display font-bold text-sm">PostgreSQL / Oracle</div>
                <div className="text-xs opacity-90 mt-0.5">ACID transactions &amp; state</div>
              </div>

              <div
                onClick={() => setSelectedArchNode('analytics')}
                className={`cursor-pointer p-4 rounded-2xl border transition-all text-center ${
                  selectedArchNode === 'analytics'
                    ? 'bg-rose-600 text-white border-rose-600 shadow-md scale-105'
                    : 'bg-white dark:bg-[#1A1614] border-[#E8E0D8] dark:border-white/10 hover:border-rose-500/60 text-[#1A1614] dark:text-[#FDFBF7]'
                }`}
              >
                <div className="text-[10px] font-mono opacity-70">Analytics</div>
                <div className="font-display font-bold text-sm">BigQuery / logs</div>
                <div className="text-xs opacity-90 mt-0.5">Petabyte telemetry &amp; runs</div>
              </div>

              <div
                onClick={() => setSelectedArchNode('enterprise')}
                className={`cursor-pointer p-4 rounded-2xl border transition-all text-center ${
                  selectedArchNode === 'enterprise'
                    ? 'bg-amber-600 text-white border-amber-600 shadow-md scale-105'
                    : 'bg-white dark:bg-[#1A1614] border-[#E8E0D8] dark:border-white/10 hover:border-amber-500/60 text-[#1A1614] dark:text-[#FDFBF7]'
                }`}
              >
                <div className="text-[10px] font-mono opacity-70">Enterprise</div>
                <div className="font-display font-bold text-sm">ServiceNow &amp; Jira</div>
                <div className="text-xs opacity-90 mt-0.5">Automated incident triage</div>
              </div>
            </div>

            </ScrubReveal>

            {/* Architecture Node Insight Box */}
            <ScrubReveal progress={archProgress} range={[0.82, 0.92]} enabled={pinArch} y={12}>
            <div className="mt-6 p-4 rounded-xl bg-white dark:bg-[#1E1B18] border border-copper/30 flex items-start gap-3">
              <Zap className="w-5 h-5 text-copper shrink-0 mt-0.5" />
              <div>
                <span className="text-sm font-semibold text-copper block">
                  Selected tier
                </span>
                <p className="text-xs sm:text-sm text-[#4A4340] dark:text-[#D6D3D1] mt-1 leading-relaxed">
                  {selectedArchNode === 'agents' && "LangGraph maintains deterministic cyclic execution graphs. It handles state checkpoints, conditional routing to tools, and interrupt policies for human approvals before performing database writes."}
                  {selectedArchNode === 'client' && "Sub-second client interface built with React 19 and Next.js. Delivers instant token streaming over WebSockets with optimistic UI updates and WCAG AA accessibility compliance."}
                  {selectedArchNode === 'api' && "FastAPI backend layer enforcing strict Pydantic contract validation, rate limits, correlation IDs for distributed tracing, and bank-grade JWT authentication."}
                  {selectedArchNode === 'llms' && "Foundation models (Google Gemini 2.5 Flash, Anthropic Claude 3.5, AWS Bedrock) selected based on task latency, cost budget, and reasoning complexity."}
                  {selectedArchNode === 'rag' && "Dual-retriever hybrid RAG pipeline combining BM25 keyword matching with ChromaDB vector embeddings. Reciprocal Rank Fusion (k=60) merges results to eliminate hallucination."}
                  {selectedArchNode === 'tools' && "Isolated execution sandbox executing safe Python calculations, Playwright browser actions, and parameterized REST API calls without touching host OS environments."}
                  {selectedArchNode === 'relational' && "PostgreSQL 15+ and Oracle Database maintaining transactional integrity, user permissions, and persistent conversational session states with ACID compliance."}
                  {selectedArchNode === 'analytics' && "Google Cloud BigQuery handling analytical queries across historical RCA runbooks, incident logs, and agent evaluation metric logs."}
                  {selectedArchNode === 'enterprise' && "Direct bidirectional integration with enterprise ITSM platforms (ServiceNow, Jira, Confluence) to triage incidents and execute changes automatically."}
                </p>
              </div>
            </div>
            </ScrubReveal>

          </div>
        </div>
      </section>

      {/* Layer 4: Proof & Project Associations */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mt-24">
        <div className="mb-10">
          <h2 className="font-display font-bold text-2xl sm:text-4xl text-[#1A1614] dark:text-[#FDFBF7]">
            Technology in production, not just on a resume
          </h2>
          <p className="text-sm sm:text-base text-[#4A4340] dark:text-[#D6D3D1] mt-2 max-w-2xl">
            Directly tying technologies to the actual enterprise and flagship software systems I engineered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
          {PROOF_MAPPINGS.map((proof) => (
            <div
              key={proof.technology}
              className="pl-5 border-l-2 border-copper/30 hover:border-copper transition-colors flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-sm font-medium text-copper">
                    {proof.technology}
                  </span>
                  <span className="text-xs text-[#78716C] dark:text-[#A8A29E]">
                    {proof.roleTag}
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg text-[#1A1614] dark:text-[#FDFBF7] mb-2 group-hover:text-copper transition-colors">
                  {proof.projectName}
                </h3>

                <p className="text-xs sm:text-sm text-[#4A4340] dark:text-[#D6D3D1] leading-relaxed mb-4">
                  {proof.whatIBuilt}
                </p>
              </div>

              <Link
                to={proof.projectUrl}
                className="inline-flex items-center text-sm text-copper hover:underline"
              >
                View project case study
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Currently Exploring Section */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mt-24">
        <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-[#FAF7F2] to-white dark:from-[#1E1B18] dark:to-[#171412] border border-[#E8E0D8] dark:border-white/10 shadow-soft-sm">
          <h2 className="font-display font-bold text-2xl sm:text-4xl text-[#1A1614] dark:text-[#FDFBF7] mb-4">
            Currently exploring &amp; researching
          </h2>
          <p className="text-sm sm:text-base text-[#4A4340] dark:text-[#D6D3D1] max-w-3xl mb-8 leading-relaxed">
            Rather than claiming mastery over emerging concepts prematurely, here is the active research frontier I am currently benchmarking, prototyping, and integrating into experimental stacks.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {CURRENTLY_EXPLORING.map((item) => (
              <div
                key={item.title}
                className="p-5 rounded-2xl bg-white/70 dark:bg-white/[0.03] border border-[#E8E0D8] dark:border-white/[0.08] hover:border-copper/40 transition-all"
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="font-display font-semibold text-sm sm:text-base text-[#1A1614] dark:text-[#FDFBF7]">
                    {item.title}
                  </h3>
                  <span className="text-xs text-copper bg-copper/10 px-2 py-0.5 rounded-md shrink-0">
                    {item.tag}
                  </span>
                </div>
                <p className="text-xs text-[#4A4340] dark:text-[#A8A29E] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA to Projects & Contact */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mt-20 text-center">
        <div className="max-w-2xl mx-auto p-8 rounded-3xl bg-white dark:bg-[#1E1B18] border border-[#E8E0D8] dark:border-white/10 shadow-soft-md">
          <h3 className="font-display font-bold text-2xl text-[#1A1614] dark:text-[#FDFBF7] mb-3">
            Want to see these capabilities in action?
          </h3>
          <p className="text-sm text-[#4A4340] dark:text-[#D6D3D1] mb-6">
            Inspect the live enterprise architectures, codebases, and case studies I have built.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-copper text-white text-sm font-medium hover:bg-copper-dark transition-colors shadow-soft-sm"
            >
              <span>Explore flagship projects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FAF7F2] dark:bg-white/05 border border-[#E8E0D8] dark:border-white/10 text-sm text-[#1A1614] dark:text-[#FDFBF7] hover:border-copper transition-colors"
            >
              <span>Get in touch</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
