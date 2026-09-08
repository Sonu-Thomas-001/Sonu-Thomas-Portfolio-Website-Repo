import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ExternalLink, 
  Github, 
  ArrowUpRight, 
  X, 
  Sparkles, 
  Cpu, 
  Activity, 
  LayoutGrid, 
  Table, 
  Search, 
  Terminal
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { PROJECTS_DATA } from '../constants';
import { ProjectItem } from '../types';
import Markdown from 'react-markdown';

// Structured Metadata Schema for all 9 Flagship Systems
interface ProjectMeta {
  badge: string;
  topology: string;
  telemetry: { label: string; value: string; accent: 'cream' | 'copper' | 'emerald' }[];
  pipelineSteps: string[];
}

const PROJECT_METRICS: Record<string, ProjectMeta> = {
  'agentic-co-worker-platform': {
    badge: '100+ Digital Workers',
    topology: 'Central Brain + Multi-Agent EventBus & MCP Protocols',
    telemetry: [
      { label: 'Taskforce Fleet', value: '100+ Workers', accent: 'cream' },
      { label: 'IT Domains', value: '15 Specializations', accent: 'copper' },
      { label: 'Incident MTTR', value: '↓ 70% Speedup', accent: 'emerald' },
      { label: 'Alert Noise', value: '↓ 80% Reduction', accent: 'emerald' },
    ],
    pipelineSteps: [
      'Continuous Event Ingestion (ServiceNow, Control-M, Jira)',
      'Intelligent Event Routing via Pub/Sub EventBus',
      'Specialist Agent Collaboration & Multi-Step RCA',
      'Deterministic LangGraph Remediation & Human Approval',
    ],
  },
  'change-coworker': {
    badge: '5-Agent Hub & Spoke',
    topology: 'Multi-Agent Advisory Board + SOP-Accurate RAG',
    telemetry: [
      { label: 'Agent Network', value: '5 AI Specialists', accent: 'cream' },
      { label: 'Knowledge Engine', value: 'SOP-Accurate RAG', accent: 'copper' },
      { label: 'CAB Speedup', value: '4h → 5m Approval', accent: 'emerald' },
      { label: 'ITSM Native', value: 'ServiceNow Sync', accent: 'emerald' },
    ],
    pipelineSteps: [
      'ServiceNow Change Request Polling & Extraction',
      'Multi-Agent Risk & Collision Assessment',
      'Autonomous CAB Summary & Risk Scoring',
      'Direct ITSM Sync with Full Audit Trail',
    ],
  },
  'rca-agent': {
    badge: 'Automated RCA Engine',
    topology: 'Multi-Step Incident Reasoning + ChromaDB Vector Store',
    telemetry: [
      { label: 'Diagnostics', value: 'Multi-Step RCA', accent: 'cream' },
      { label: 'Vector RAG', value: 'ChromaDB Store', accent: 'copper' },
      { label: 'Reasoning Core', value: 'Gemini Embeddings', accent: 'emerald' },
      { label: 'Async Engine', value: 'Flask + Web UI', accent: 'emerald' },
    ],
    pipelineSteps: [
      'Operational Log, Incident & Runbook Ingestion',
      'Dense Semantic Search via ChromaDB',
      'Hypothesis Formulation with Gemini Reasoning',
      'Structured Action Item & RCA Report Generation',
    ],
  },
  'ticketwave': {
    badge: 'Zero Double-Booking Defense',
    topology: 'Modular Monolith + Redisson Distributed TTL Locks',
    telemetry: [
      { label: 'Concurrency', value: '0 Double-Bookings', accent: 'cream' },
      { label: 'Distributed Lock', value: 'Redisson Lua Hold', accent: 'copper' },
      { label: 'Architecture', value: 'Modular Monolith', accent: 'emerald' },
      { label: 'Booking Latency', value: 'Sub-100ms (5x Fast)', accent: 'emerald' },
    ],
    pipelineSteps: [
      'Real-Time Interactive Seat Grid Discovery',
      'Redis 10-Min TTL Distributed Hold via Redisson Lua',
      'Webhook-Driven Idempotent Payment Processing',
      'Atomic Ticket Confirmation & Event Sync',
    ],
  },
  'smartdesk-ai': {
    badge: '8-Team Multi-Agent Triage',
    topology: 'Multi-Agent Triage Engine + 25+ KB Vector Search',
    telemetry: [
      { label: 'Triage Accuracy', value: '≥80% Auto-Assign', accent: 'cream' },
      { label: 'Specialist Teams', value: '8 Support Teams', accent: 'copper' },
      { label: 'ServiceNow Sync', value: '30s Auto-Poll', accent: 'emerald' },
      { label: 'Knowledge Base', value: '25+ KB ChromaDB', accent: 'emerald' },
    ],
    pipelineSteps: [
      'Incident Classification Agent (Gemini 2.0 Flash Few-Shot)',
      'Vector Semantic Retrieval across 25+ ServiceNow KBs',
      'Resolver Agent Step-by-Step Guide Generation',
      'Feedback Loop & Continuous Classifier Retraining',
    ],
  },
  'qubimind': {
    badge: 'Multi-Agent AI OS',
    topology: 'LangGraph Orchestrated Swarms + Enterprise RAG',
    telemetry: [
      { label: 'Swarm Engine', value: 'LangGraph Graphs', accent: 'cream' },
      { label: 'Knowledge RAG', value: 'Enterprise Vector', accent: 'copper' },
      { label: 'Governance', value: 'HITL Approval Nodes', accent: 'emerald' },
      { label: 'Security', value: 'SOC2 & 5-Tier RBAC', accent: 'emerald' },
    ],
    pipelineSteps: [
      'Enterprise Goal Delegation & Task Planning',
      'Concurrent Multi-Agent Channel Execution',
      'Human-in-the-Loop Interrupt & Approval Nodes',
      'Audit Logging & Vector Knowledge Grounding',
    ],
  },
  'multi-agent-enterprise-ai-assistant': {
    badge: '7 Micro-Agents & Hybrid RAG',
    topology: 'Supervisor-Planner Channels + Serverless Python Sandbox',
    telemetry: [
      { label: 'Agent Swarm', value: '7 Micro-Agents', accent: 'cream' },
      { label: 'Hybrid RAG', value: 'BM25 + RRF (k=60)', accent: 'copper' },
      { label: 'Code Sandbox', value: 'Serverless Python', accent: 'emerald' },
      { label: 'Governance', value: '256-Bit JWT & 16 RBAC', accent: 'emerald' },
    ],
    pipelineSteps: [
      'Supervisor Agent Intent Parsing & Task Decomposition',
      'Dual-Retriever Hybrid RAG (BM25 + ChromaDB Dense Embeddings)',
      'Isolated Python Subprocess Code Execution & Charting',
      'Real-Time Thought Tracing & JWT Token Verification',
    ],
  },
  'versant-practice-test': {
    badge: 'Speech AI & CEFR Scoring',
    topology: 'Web Speech API + Gemini AI Diagnostic Evaluation',
    telemetry: [
      { label: 'Speech Engine', value: 'Web Speech & TTS', accent: 'cream' },
      { label: 'Exam Coverage', value: 'Parts A–F (6 Tests)', accent: 'copper' },
      { label: 'AI Evaluation', value: 'Gemini Diagnostics', accent: 'emerald' },
      { label: 'Scoring Standard', value: 'GSE & CEFR (10–90)', accent: 'emerald' },
    ],
    pipelineSteps: [
      'Real-Time Audio Capture & Native Web Speech Transcription',
      'Audio Waveform Visualizer & Adaptive Timer Controls',
      'Gemini AI Pronunciation & Fluency Evaluation',
      'Print-Ready Scorecard & Diagnostic Improvement Plan',
    ],
  },
  'resolveai': {
    badge: '15-Node LangGraph State Machine',
    topology: '15-Node LangGraph State Machine + ChromaDB Vector RAG',
    telemetry: [
      { label: 'Workflow Engine', value: '15-Node LangGraph', accent: 'cream' },
      { label: 'Knowledge Base', value: 'ChromaDB Vector RAG', accent: 'copper' },
      { label: 'Diagnostics', value: 'Mock Tool Registry', accent: 'emerald' },
      { label: 'Governance', value: 'HITL interrupt_before', accent: 'emerald' },
    ],
    pipelineSteps: [
      'Incident Classification & Entity Extraction',
      'Automated Diagnostic Tool Execution (VPN, Account, Device)',
      'Dynamic Confidence Scoring (<70% triggers escalation)',
      'Human-in-the-Loop Approval Pause before ServiceNow Ticketing',
    ],
  },
};

// Curated Category Filter definitions with display aliases
const CATEGORY_FILTERS = [
  { id: 'All', label: 'All Architectures' },
  { id: 'Multi-Agent', label: 'Multi-Agent Swarms', matchCategories: ['Autonomous Multi-Agent Systems'] },
  { id: 'Incident & RAG', label: 'Incident & RAG', matchCategories: ['Change Intelligence & RAG', 'Incident Intelligence & RCA'] },
  { id: 'Distributed', label: 'Distributed Systems', matchCategories: ['Distributed Systems & Web Platforms'] },
  { id: 'Applied AI', label: 'Speech & Applied AI', matchCategories: ['Applied AI & Speech Systems'] },
];

export const Projects: React.FC<{ isHomepage?: boolean }> = ({ isHomepage = false }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'dossier'>('grid');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [spotlightProjectId, setSpotlightProjectId] = useState<string>('agentic-co-worker-platform');
  const [spotlightTab, setSpotlightTab] = useState<'telemetry' | 'topology' | 'stack'>('telemetry');
  const [searchQuery, setSearchQuery] = useState('');

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Filter projects by category and optional search term
  const filteredProjects = useMemo(() => {
    return PROJECTS_DATA.filter((project) => {
      // Category check
      let matchesCategory = true;
      if (activeFilter !== 'All') {
        const catDef = CATEGORY_FILTERS.find((c) => c.id === activeFilter);
        if (catDef && catDef.matchCategories) {
          matchesCategory = catDef.matchCategories.includes(project.category);
        } else {
          matchesCategory = project.category === activeFilter;
        }
      }

      // Search check
      let matchesSearch = true;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        matchesSearch = 
          project.title.toLowerCase().includes(q) ||
          project.description.toLowerCase().includes(q) ||
          project.stack.some(tech => tech.toLowerCase().includes(q)) ||
          project.category.toLowerCase().includes(q);
      }

      return matchesCategory && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  // Compute category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: PROJECTS_DATA.length };
    CATEGORY_FILTERS.forEach((filter) => {
      if (filter.id === 'All') return;
      counts[filter.id] = PROJECTS_DATA.filter((p) => 
        filter.matchCategories ? filter.matchCategories.includes(p.category) : p.category === filter.id
      ).length;
    });
    return counts;
  }, []);

  // Spotlight project item
  const spotlightProject = useMemo(() => {
    return PROJECTS_DATA.find((p) => p.id === spotlightProjectId) || PROJECTS_DATA[0];
  }, [spotlightProjectId]);

  const spotlightMeta = PROJECT_METRICS[spotlightProject.id] || PROJECT_METRICS['agentic-co-worker-platform'];

  return (
    <section id="projects" className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 bg-[#131110] text-[#EDE5DC] border-y border-[#2A2522] relative">
      {/* Subtle Graph Grid Accent */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20 -z-0"
        style={{
          backgroundImage: 'radial-gradient(rgba(196, 125, 90, 0.22) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* ============================================================ */}
        {/* SECTION HEADER & CONTROLS */}
        {/* ============================================================ */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 sm:mb-16">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-xs text-copper font-semibold tracking-widest uppercase">
                05 // Flagship Engineering
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-copper" />
              <span className="font-mono text-[11px] text-[#78716C]">
                {PROJECTS_DATA.length} Production Architectures
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-[#EDE5DC] tracking-tight leading-tight">
              Autonomous agents, RAG systems &amp; distributed platforms.
            </h2>
            <p className="text-sm sm:text-base text-[#9C948B] font-light mt-3 leading-relaxed">
              Engineered with deterministic multi-agent state machines, Reciprocal Rank Fusion hybrid retrieval, 
              distributed concurrency controls, and real-time operational observability.
            </p>
          </div>

          {/* View Mode & Quick Search */}
          <div className="flex flex-wrap items-center gap-3">
            {/* View Mode Switcher */}
            <div className="flex items-center p-1 rounded-2xl bg-[#1E1B18] border border-[#332E2A] shadow-soft-sm">
              <button
                onClick={() => setViewMode('grid')}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium transition-all cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-[#25211E] text-copper border border-copper/30 shadow-soft-sm'
                    : 'text-[#78716C] hover:text-[#EDE5DC]'
                }`}
                title="Visual Showcase Grid"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Showcase Grid</span>
              </button>
              <button
                onClick={() => setViewMode('dossier')}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium transition-all cursor-pointer ${
                  viewMode === 'dossier'
                    ? 'bg-[#25211E] text-copper border border-copper/30 shadow-soft-sm'
                    : 'text-[#78716C] hover:text-[#EDE5DC]'
                }`}
                title="System Dossier & Architecture Matrix"
              >
                <Table className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Architecture Matrix</span>
              </button>
            </div>

            {/* Quick Search */}
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-[#78716C] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Filter by tech (e.g. LangGraph)..."
                className="pl-8 pr-3 py-1.5 rounded-xl bg-[#1E1B18] border border-[#332E2A] text-xs font-mono text-[#EDE5DC] placeholder-[#78716C] focus:outline-none focus:border-copper transition-colors w-44 sm:w-56"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#78716C] hover:text-[#EDE5DC]"
                >
                  <X className="w-3 h-3" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Category Pills Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none no-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {CATEGORY_FILTERS.map((cat) => {
            const isActive = activeFilter === cat.id;
            const count = categoryCounts[cat.id] ?? 0;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`shrink-0 px-4 py-2 rounded-2xl text-xs font-mono transition-all flex items-center gap-2 border cursor-pointer ${
                  isActive
                    ? 'bg-[#25211E] border-copper/60 text-[#EDE5DC] shadow-glow-copper font-semibold'
                    : 'bg-[#171412] border-[#2A2522] text-[#78716C] hover:text-[#EDE5DC] hover:border-[#38332E]'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`px-2 py-0.5 rounded-full text-[10px] ${
                  isActive ? 'bg-copper text-white' : 'bg-[#25211E] text-[#78716C]'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* ============================================================ */}
        {/* FLAGSHIP SPOTLIGHT HERO SHOWCASE (Shown when on "All" & Grid) */}
        {/* ============================================================ */}
        {activeFilter === 'All' && !searchQuery && viewMode === 'grid' && (
          <div className="mb-16">
            <div className="p-1 rounded-3xl bg-gradient-to-r from-copper/30 via-[#38332E] to-copper/10 shadow-2xl">
              <div className="bg-[#1A1715] rounded-[22px] p-6 sm:p-10 lg:p-12 border border-[#332E2A] flex flex-col lg:flex-row gap-10 items-stretch">
                
                {/* Left Side: System Narrative & Interactive Tabs */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    {/* Status & Badge */}
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="px-3.5 py-1 rounded-full bg-copper/15 border border-copper/30 text-copper text-[11px] font-mono font-semibold flex items-center gap-1.5">
                        <Sparkles className="w-3 h-3" />
                        Flagship Enterprise Spotlight
                      </span>
                      <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-mono font-medium flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        {spotlightMeta.badge}
                      </span>
                    </div>

                    {/* Title & Role */}
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                      <h3 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#EDE5DC] tracking-tight">
                        {spotlightProject.title}
                      </h3>
                    </div>
                    <span className="text-xs font-mono text-copper block mt-1 mb-4 font-medium">
                      {spotlightProject.role} &bull; {spotlightProject.category}
                    </span>

                    <p className="text-sm sm:text-base text-[#9C948B] font-light leading-relaxed mb-6">
                      {spotlightProject.description}
                    </p>

                    {/* Interactive Spotlight Tab Switcher */}
                    <div className="flex items-center gap-2 border-b border-[#2A2522] pb-3 mb-6 text-xs font-mono">
                      <button
                        onClick={() => setSpotlightTab('telemetry')}
                        className={`px-3 py-1 rounded-lg transition-colors cursor-pointer ${
                          spotlightTab === 'telemetry' 
                            ? 'bg-[#25211E] text-copper font-semibold border border-copper/30' 
                            : 'text-[#78716C] hover:text-[#EDE5DC]'
                        }`}
                      >
                        Operational Telemetry
                      </button>
                      <button
                        onClick={() => setSpotlightTab('topology')}
                        className={`px-3 py-1 rounded-lg transition-colors cursor-pointer ${
                          spotlightTab === 'topology' 
                            ? 'bg-[#25211E] text-copper font-semibold border border-copper/30' 
                            : 'text-[#78716C] hover:text-[#EDE5DC]'
                        }`}
                      >
                        System Topology
                      </button>
                      <button
                        onClick={() => setSpotlightTab('stack')}
                        className={`px-3 py-1 rounded-lg transition-colors cursor-pointer ${
                          spotlightTab === 'stack' 
                            ? 'bg-[#25211E] text-copper font-semibold border border-copper/30' 
                            : 'text-[#78716C] hover:text-[#EDE5DC]'
                        }`}
                      >
                        Integrated Stack
                      </button>
                    </div>

                    {/* Tab 1: Operational Telemetry */}
                    {spotlightTab === 'telemetry' && (
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {spotlightMeta.telemetry.map((t, idx) => (
                          <div key={idx} className="p-3.5 rounded-2xl bg-[#141210] border border-[#2A2522]">
                            <span className="text-[10px] font-mono text-[#78716C] uppercase tracking-wider block mb-1">
                              {t.label}
                            </span>
                            <span className={`font-display font-bold text-base sm:text-lg ${
                              t.accent === 'emerald' ? 'text-emerald-400' : t.accent === 'copper' ? 'text-copper' : 'text-[#EDE5DC]'
                            }`}>
                              {t.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tab 2: System Topology */}
                    {spotlightTab === 'topology' && (
                      <div className="space-y-2">
                        {spotlightMeta.pipelineSteps.map((step, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-[#141210] border border-[#2A2522] text-xs">
                            <span className="w-5 h-5 rounded-md bg-[#25211E] text-copper border border-copper/30 flex items-center justify-center font-mono text-[10px] font-bold shrink-0">
                              0{idx + 1}
                            </span>
                            <span className="text-[#EDE5DC]/90 font-mono text-[11px] leading-snug">
                              {step}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tab 3: Integrated Stack */}
                    {spotlightTab === 'stack' && (
                      <div className="flex flex-wrap gap-2">
                        {spotlightProject.stack.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1.5 rounded-xl bg-[#141210] border border-[#2D2824] text-xs font-mono text-[#D5CDC5] hover:border-copper/40 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Spotlight Action Row */}
                  <div className="pt-6 mt-6 border-t border-[#2A2522] flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setSelectedProject(spotlightProject)}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-copper hover:bg-copper-600 text-white font-mono text-xs font-semibold transition-all shadow-glow-copper cursor-pointer"
                      >
                        <Sparkles className="w-4 h-4" />
                        <span>Inspect Full System Dossier</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                      {spotlightProject.links?.github && (
                        <a
                          href={spotlightProject.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#25211E] hover:bg-[#2D2824] text-[#EDE5DC] border border-[#38332E] font-mono text-xs font-medium transition-all"
                        >
                          <Github className="w-4 h-4" />
                          <span>Source Code</span>
                        </a>
                      )}
                    </div>

                    {/* Quick Spotlight Switcher */}
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-[#78716C] uppercase tracking-wider hidden sm:inline">
                        Quick Spotlight:
                      </span>
                      {PROJECTS_DATA.slice(0, 4).map((p) => (
                        <button
                          key={p.id}
                          onClick={() => setSpotlightProjectId(p.id)}
                          className={`w-7 h-7 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                            spotlightProjectId === p.id 
                              ? 'bg-copper text-white shadow-glow-copper' 
                              : 'bg-[#25211E] text-[#78716C] hover:text-[#EDE5DC] border border-[#332E2A]'
                          }`}
                          title={p.title}
                        >
                          {p.title.charAt(0)}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Side: Media Showcase */}
                <div 
                  onClick={() => setSelectedProject(spotlightProject)}
                  className="lg:w-[460px] relative rounded-2xl overflow-hidden bg-[#141210] border border-[#332E2A] group cursor-pointer flex flex-col justify-between"
                >
                  <div className="relative h-64 sm:h-80 lg:h-full overflow-hidden">
                    <img
                      src={spotlightProject.image}
                      alt={spotlightProject.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#131110] via-[#131110]/20 to-transparent" />
                    
                    {/* Floating Telemetry Glass Pill */}
                    <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#171412]/90 backdrop-blur-md border border-[#332E2A] flex items-center justify-between text-xs font-mono text-[#EDE5DC]">
                      <div className="flex items-center gap-2">
                        <Activity className="w-3.5 h-3.5 text-copper" />
                        <span className="truncate">{spotlightMeta.topology}</span>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-copper shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* VIEW MODE 1: EDITORIAL SHOWCASE GRID */}
        {/* ============================================================ */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, idx) => {
                const meta = PROJECT_METRICS[project.id] || {
                  badge: 'Production System',
                  topology: 'Distributed Cloud Architecture',
                  telemetry: [
                    { label: 'Latency', value: 'Optimized', accent: 'emerald' as const },
                    { label: 'Reliability', value: 'High', accent: 'copper' as const },
                  ],
                  pipelineSteps: [],
                };

                return (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.35, delay: idx * 0.04 }}
                    className="group bg-[#1E1B18] rounded-3xl overflow-hidden border border-[#332E2A] hover:border-copper/60 hover:shadow-glow-copper transition-all duration-300 flex flex-col justify-between"
                  >
                    {/* Media Header with Inner Hover */}
                    <div
                      onClick={() => setSelectedProject(project)}
                      className="relative h-52 sm:h-56 bg-[#25211E] overflow-hidden cursor-pointer"
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1E1B18] via-transparent to-[#131110]/40" />

                      {/* Top Badges */}
                      <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2 z-10">
                        <span className="px-3 py-1 rounded-full bg-[#131110]/85 backdrop-blur-md text-[10px] font-mono font-medium text-copper border border-copper/30 shadow-soft-sm truncate">
                          {project.category}
                        </span>
                        <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 backdrop-blur-md text-[10px] font-mono font-medium text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5 shrink-0">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          {meta.badge}
                        </span>
                      </div>

                      {/* Hover Overlay Button */}
                      <div className="absolute inset-0 bg-[#131110]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                        <span className="px-4 py-2 rounded-xl bg-[#EDE5DC] text-[#131110] text-xs font-semibold flex items-center gap-2 shadow-soft-md transform translate-y-2 group-hover:translate-y-0 transition-transform">
                          <Sparkles className="w-3.5 h-3.5 text-copper" />
                          <span>Open Case Study</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between space-y-5">
                      <div>
                        {/* Title & Role */}
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <h3
                            onClick={() => setSelectedProject(project)}
                            className="font-display font-bold text-xl sm:text-2xl text-[#EDE5DC] group-hover:text-copper transition-colors cursor-pointer leading-snug"
                          >
                            {project.title}
                          </h3>
                        </div>

                        <p className="text-xs sm:text-sm text-[#9C948B] font-light leading-relaxed line-clamp-3 mb-4">
                          {project.description}
                        </p>

                        {/* Telemetry Chips (2 Primary Benchmarks) */}
                        <div className="grid grid-cols-2 gap-2 p-3 rounded-xl bg-[#171412] border border-[#2A2522] mb-4">
                          {meta.telemetry.slice(0, 2).map((t, i) => (
                            <div key={i}>
                              <span className="text-[9px] font-mono text-[#78716C] uppercase tracking-wider block">
                                {t.label}
                              </span>
                              <span className={`font-display font-bold text-xs sm:text-sm ${
                                t.accent === 'emerald' ? 'text-emerald-400' : 'text-copper'
                              }`}>
                                {t.value}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Tech Stack Pills */}
                        <div className="flex flex-wrap gap-1.5 text-[11px] font-mono">
                          {project.stack.slice(0, 4).map((t, i) => (
                            <span
                              key={i}
                              className="px-2 py-0.5 rounded-md bg-[#25211E] border border-[#332E2A] text-[#C4BCB5]"
                            >
                              {t}
                            </span>
                          ))}
                          {project.stack.length > 4 && (
                            <span className="px-2 py-0.5 rounded-md bg-[#171412] border border-[#2A2522] text-[#78716C]">
                              +{project.stack.length - 4}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Card Action Footer */}
                      <div className="pt-4 border-t border-[#2A2522] flex items-center justify-between gap-2">
                        {project.links?.github ? (
                          <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#25211E] hover:bg-[#2D2824] text-[#EDE5DC] border border-[#38332E] font-mono text-[11px] font-medium transition-all group/btn"
                            aria-label={`GitHub repository for ${project.title}`}
                          >
                            <Github className="w-3.5 h-3.5" />
                            <span>Repository</span>
                            <ArrowUpRight className="w-3 h-3 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                          </a>
                        ) : (
                          <span className="text-[10px] font-mono text-[#78716C] px-2 py-1">
                            Enterprise Proprietary
                          </span>
                        )}

                        <button
                          onClick={() => setSelectedProject(project)}
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-copper hover:bg-copper-600 text-white font-mono text-[11px] font-medium transition-all shadow-glow-copper cursor-pointer ml-auto"
                        >
                          <span>Case Study</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </button>
                      </div>

                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        )}

        {/* ============================================================ */}
        {/* VIEW MODE 2: SYSTEM DOSSIER & ARCHITECTURE MATRIX */}
        {/* ============================================================ */}
        {viewMode === 'dossier' && (
          <div className="rounded-3xl border border-[#332E2A] bg-[#1A1715] overflow-hidden shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#141210] border-b border-[#2A2522] text-[11px] font-mono uppercase tracking-wider text-[#78716C]">
                    <th className="py-4 px-6">System Architecture</th>
                    <th className="py-4 px-6">Category</th>
                    <th className="py-4 px-6">Topology &amp; Engine</th>
                    <th className="py-4 px-6">Primary Benchmark</th>
                    <th className="py-4 px-6">Core Stack</th>
                    <th className="py-4 px-6 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#2A2522] text-xs">
                  {filteredProjects.map((project) => {
                    const meta = PROJECT_METRICS[project.id];
                    return (
                      <tr 
                        key={project.id}
                        className="hover:bg-[#201D1A] transition-colors group cursor-pointer"
                        onClick={() => setSelectedProject(project)}
                      >
                        {/* Title & Role */}
                        <td className="py-4 px-6">
                          <div className="font-display font-bold text-sm text-[#EDE5DC] group-hover:text-copper transition-colors">
                            {project.title}
                          </div>
                          <span className="text-[10px] font-mono text-[#78716C] block mt-0.5">
                            {project.role}
                          </span>
                        </td>

                        {/* Category */}
                        <td className="py-4 px-6">
                          <span className="px-2.5 py-1 rounded-md bg-[#25211E] text-copper border border-copper/30 font-mono text-[10px]">
                            {project.category}
                          </span>
                        </td>

                        {/* Topology */}
                        <td className="py-4 px-6 max-w-xs">
                          <span className="font-mono text-[11px] text-[#C4BCB5] leading-relaxed block">
                            {meta?.topology || 'Autonomous System'}
                          </span>
                        </td>

                        {/* Primary Benchmark */}
                        <td className="py-4 px-6">
                          {meta?.telemetry?.[0] ? (
                            <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-mono text-[11px] font-semibold">
                              {meta.telemetry[0].value}
                            </span>
                          ) : (
                            <span className="font-mono text-[#78716C]">Production-Ready</span>
                          )}
                        </td>

                        {/* Core Stack */}
                        <td className="py-4 px-6">
                          <div className="flex flex-wrap gap-1 max-w-xs font-mono text-[10px]">
                            {project.stack.slice(0, 3).map((s, idx) => (
                              <span key={idx} className="px-2 py-0.5 rounded bg-[#171412] text-[#9C948B] border border-[#2D2824]">
                                {s}
                              </span>
                            ))}
                            {project.stack.length > 3 && (
                              <span className="px-1.5 py-0.5 text-[#78716C]">+{project.stack.length - 3}</span>
                            )}
                          </div>
                        </td>

                        {/* Actions */}
                        <td className="py-4 px-6 text-right" onClick={(e) => e.stopPropagation()}>
                          <div className="flex items-center justify-end gap-2">
                            {project.links?.github && (
                              <a
                                href={project.links.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg bg-[#25211E] hover:bg-copper text-[#EDE5DC] hover:text-white border border-[#38332E] transition-all"
                                title="Open GitHub Repository"
                              >
                                <Github className="w-3.5 h-3.5" />
                              </a>
                            )}
                            <button
                              onClick={() => setSelectedProject(project)}
                              className="px-3 py-1.5 rounded-lg bg-copper hover:bg-copper-600 text-white font-mono text-[11px] font-medium transition-all shadow-glow-copper cursor-pointer flex items-center gap-1"
                            >
                              <span>Dossier</span>
                              <ArrowUpRight className="w-3 h-3" />
                            </button>
                          </div>
                        </td>

                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="py-20 text-center rounded-3xl bg-[#1E1B18] border border-[#332E2A]">
            <Cpu className="w-10 h-10 text-copper/60 mx-auto mb-3" />
            <h3 className="font-display font-bold text-lg text-[#EDE5DC]">No systems match your criteria</h3>
            <p className="text-xs font-mono text-[#78716C] mt-1 mb-4">
              Try adjusting your category filter or clearing the search query.
            </p>
            <button
              onClick={() => { setActiveFilter('All'); setSearchQuery(''); }}
              className="px-4 py-2 rounded-xl bg-[#25211E] hover:bg-copper text-[#EDE5DC] hover:text-white border border-[#38332E] text-xs font-mono transition-all cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* ============================================================ */}
        {/* HOMEPAGE FOOTER CTA */}
        {/* ============================================================ */}
        {isHomepage && (
          <div className="mt-16 text-center">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#EDE5DC] hover:bg-copper text-[#131110] hover:text-white text-sm font-semibold transition-all duration-300 shadow-soft-md group cursor-pointer"
            >
              <span>Explore All {PROJECTS_DATA.length} Systems &amp; Case Studies</span>
              <ArrowUpRight className="w-4 h-4 text-copper group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </Link>
          </div>
        )}

      </div>

      {/* ============================================================ */}
      {/* ARCHITECTURAL CASE STUDY DOSSIER MODAL */}
      {/* ============================================================ */}
      <AnimatePresence>
        {selectedProject && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-xl"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.96, opacity: 0, y: 16 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              data-lenis-prevent="true"
              className="bg-[#1E1B18] border border-[#332E2A] rounded-3xl w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col relative shadow-2xl text-[#EDE5DC] ring-1 ring-white/10"
            >
              {/* Modal Top Header Bar */}
              <div className="flex justify-between items-start p-6 sm:p-7 border-b border-[#2A2522] bg-[#171412] shrink-0">
                <div className="max-w-[85%]">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="px-2.5 py-0.5 rounded-full bg-copper/15 border border-copper/30 text-copper text-[10px] font-mono font-semibold">
                      {selectedProject.category}
                    </span>
                    <span className="text-[10px] font-mono text-[#78716C]">
                      {selectedProject.role}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#EDE5DC] tracking-tight">
                    {selectedProject.title}
                  </h3>
                </div>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-xl hover:bg-[#2A2522] text-[#78716C] hover:text-[#EDE5DC] transition-colors cursor-pointer shrink-0"
                  aria-label="Close dossier modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Scrollable Body */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-[#9C948B] text-sm leading-relaxed font-light custom-dark-scrollbar">
                
                {/* System Image Banner */}
                <div className="h-56 sm:h-72 rounded-2xl overflow-hidden bg-[#25211E] border border-[#332E2A] relative">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E1B18] via-transparent to-transparent" />
                </div>

                {/* Telemetry Metrics Bar */}
                {PROJECT_METRICS[selectedProject.id] && (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-[#141210] border border-[#2A2522]">
                    {PROJECT_METRICS[selectedProject.id].telemetry.map((t, idx) => (
                      <div key={idx}>
                        <span className="text-[9px] font-mono text-[#78716C] uppercase tracking-wider block mb-1">
                          {t.label}
                        </span>
                        <span className={`font-display font-bold text-sm sm:text-base ${
                          t.accent === 'emerald' ? 'text-emerald-400' : t.accent === 'copper' ? 'text-copper' : 'text-[#EDE5DC]'
                        }`}>
                          {t.value}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Markdown Case Study Content */}
                <div className="prose prose-invert max-w-none text-sm font-normal space-y-4">
                  {selectedProject.detailedDescription ? (
                    <Markdown
                      components={{
                        h2: ({ children }) => (
                          <h2 className="font-display font-bold text-xl text-[#EDE5DC] border-b border-[#2A2522] pb-2 mt-6 mb-3">
                            {children}
                          </h2>
                        ),
                        h3: ({ children }) => (
                          <h3 className="font-display font-semibold text-base text-copper mt-4 mb-2">
                            {children}
                          </h3>
                        ),
                        p: ({ children }) => (
                          <p className="leading-relaxed text-[#9C948B] text-sm font-light my-2">
                            {children}
                          </p>
                        ),
                        ul: ({ children }) => (
                          <ul className="list-disc pl-5 space-y-1.5 text-xs text-[#EDE5DC]/90 my-3">
                            {children}
                          </ul>
                        ),
                        table: ({ children }) => (
                          <div className="overflow-x-auto my-4 rounded-xl border border-[#2A2522]">
                            <table className="w-full text-left text-xs divide-y divide-[#2A2522]">
                              {children}
                            </table>
                          </div>
                        ),
                        th: ({ children }) => (
                          <th className="bg-[#141210] p-2.5 font-mono text-[10px] uppercase tracking-wider text-copper">
                            {children}
                          </th>
                        ),
                        td: ({ children }) => (
                          <td className="p-2.5 text-[#C4BCB5] font-mono text-[11px] border-t border-[#2A2522]">
                            {children}
                          </td>
                        ),
                        code: ({ children }) => (
                          <code className="px-1.5 py-0.5 rounded bg-[#131110] text-copper font-mono text-xs border border-[#2A2522]">
                            {children}
                          </code>
                        ),
                      }}
                    >
                      {selectedProject.detailedDescription}
                    </Markdown>
                  ) : (
                    <p className="text-[#9C948B] leading-relaxed">{selectedProject.description}</p>
                  )}
                </div>

                {/* Complete Tech Stack */}
                <div className="pt-4 border-t border-[#2A2522]">
                  <h4 className="font-mono text-xs font-semibold text-[#78716C] uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5 text-copper" />
                    <span>Complete Architectural Technology Stack</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.stack.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-[#25211E] border border-[#38332E] text-copper text-xs font-mono font-medium rounded-xl"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Modal Sticky Footer */}
              <div className="p-5 sm:p-6 border-t border-[#2A2522] flex flex-wrap items-center justify-between gap-3 bg-[#171412] shrink-0">
                <span className="text-[10px] font-mono text-[#78716C]">
                  Press <kbd className="px-1.5 py-0.5 rounded bg-[#25211E] border border-[#38332E] text-[#EDE5DC]">ESC</kbd> to exit dossier
                </span>

                <div className="flex items-center gap-3">
                  {selectedProject.links?.github && (
                    <a
                      href={selectedProject.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[#38332E] bg-[#25211E] hover:bg-[#2A2522] text-[#EDE5DC] text-xs font-mono font-medium shadow-soft-sm transition-all"
                    >
                      <Github className="w-4 h-4" />
                      <span>Source Repository</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  )}
                  {selectedProject.links?.demo && selectedProject.links.demo !== '#' && (
                    <a
                      href={selectedProject.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-copper hover:bg-copper-600 text-white text-xs font-mono font-medium shadow-soft-sm transition-all"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Deployment</span>
                    </a>
                  )}
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
