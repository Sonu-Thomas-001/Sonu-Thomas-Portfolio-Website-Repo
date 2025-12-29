# ⚡ Sonu Thomas | Next-Gen AI Portfolio Architecture

![React](https://img.shields.io/badge/React-18-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38B2AC?logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-black?logo=framer)
![Gemini AI](https://img.shields.io/badge/Google_Gemini-1.5_Flash-8E75B2?logo=google)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite)

> **"Bridging the gap between traditional software engineering and the future of Artificial Intelligence."**

This repository houses the source code for a premium, futuristic portfolio platform designed to redefine personal branding for Software Engineers. Unlike static resume sites, this application functions as a **living digital entity**, featuring a context-aware AI agent, immersive motion graphics, and a modular architecture built for scale.

---

## 🧠 Core Intelligence: "Qubi" AI Agent

The crown jewel of this portfolio is **Qubi**, a deeply integrated AI assistant that fundamentally changes how recruiters and clients interact with the candidate's profile.

### Architecture & Logic
*   **Model:** Powered by **Google's Gemini 1.5 / 3 Flash** models via the `@google/genai` SDK.
*   **Context Injection:** The AI is pre-loaded with a structured JSON dump of the candidate's entire professional history (`constants.ts`). This ensures the bot never "hallucinates" experience but retrieves exact details about roles, tech stacks, and project metrics.
*   **System Instructions:** A rigorous system prompt defines Qubi's persona—professional, concise, and enthusiastic—while enforcing strict boundaries on response length and tone.

### Function Calling (Agentic Behavior)
Qubi is not just a chatbot; it is an agent with control over the UI.
*   **`navigate` Tool:** The AI can execute client-side code to physically scroll the user to relevant sections.
    *   *User:* "Show me his projects."
    *   *AI:* Calls `navigate({ sectionId: 'projects' })` -> The viewport smooth-scrolls to the Projects grid.

---

## 🎨 Design Philosophy: Cyber-Minimalism

The UI aims to capture the essence of high-tech engineering without sacrificing readability or professional polish.

### Visual Language
*   **Theme:** Deep space dark mode (`#020617`) with neon accents in `Primary` (Sky Blue) and `Secondary` (Indigo).
*   **Glassmorphism:** Extensive use of `backdrop-blur` and translucent borders to create depth and hierarchy.
*   **Motion Design:** Leveraging **Framer Motion** for:
    *   **Orchestration:** Staggered list reveals for skills and timelines.
    *   **Micro-interactions:** Magnetic buttons, hover glow effects, and scale transitions.
    *   **Page Transitions:** A "Neural Curtain" wipe effect that masks route changes, maintaining the immersive illusion.

### "The Boot Sequence"
First-time visitors are greeted with a cinematic **System Boot** preloader. This React component manages a multi-stage state machine (`checking` -> `initial` -> `booting` -> `zooming`) to simulate a neural core initializing, setting the tone for a high-tech experience.

---

## 🏗️ Technical Architecture

The application is built as a Single Page Application (SPA) using **Vite**, prioritizing performance and type safety.

### Component Structure
The codebase follows a strict atomic design principle within `src/components/`, separating logic from presentation where possible.

| Component Group | Description |
| :--- | :--- |
| **Hero & visuals** | `Hero.tsx` uses complex CSS animations and absolute positioning to create a 3D-layered parallax effect without WebGL overhead. |
| **Data Displays** | `Experience.tsx` and `GrowthTimeline.tsx` utilize dynamic mapping to render timelines, ensuring data changes in `constants.ts` instantly reflect in the UI. |
| **Interactive Resume** | `InteractiveResume.tsx` implements an accordion pattern for dense information packing, improving UX on mobile devices. |
| **Dynamic Filtering** | `Projects.tsx` features a real-time filtering engine based on project categories (AI, Web, Tools), leveraging React state for instant UI updates. |

### Data Management
*   **Single Source of Truth:** All content—from bio text to project links—is centralized in `src/constants.ts`. This allows for "Headless-CMS-like" updates without touching component code.
*   **Type Safety:** Comprehensive interfaces in `src/types.ts` ensure that data integrity is maintained across the app and the AI context.

---

## 🛠️ Technology Stack Deep Dive

### Frontend Core
*   **React 18:** Utilizing concurrent features and hooks (`useState`, `useEffect`, `useRef`) for reactive state management.
*   **TypeScript:** Strict type checking to prevent runtime errors and ensure reliable props passing.
*   **Vite:** Instant server start and optimized HMR (Hot Module Replacement) for a rapid development cycle.

### Styling & Animation
*   **Tailwind CSS:** Utility-first styling for rapid UI development, responsive design, and dark mode implementation.
*   **Framer Motion:** A production-ready motion library for React that handles complex layout animations (`layoutId`) and gesture recognition.
*   **Lucide React:** Lightweight, tree-shakeable icon library ensuring consistent iconography.

### Artificial Intelligence
*   **Google GenAI SDK:** Direct integration with Gemini API, handling streaming responses and token management.

---

## 📂 Project Structure Overview

```bash
src/
├── components/           # UI Components
│   ├── AIAssistant.tsx   # Core AI Logic & Chat Interface
│   ├── Hero.tsx          # Landing Visuals
│   ├── Projects.tsx      # Filterable Grid
│   ├── Preloader.tsx     # Boot Sequence Logic
│   └── ...
├── pages/                # Route Views
│   ├── Home.tsx          # Main Aggregator
│   ├── ProjectsPage.tsx  # Extended Portfolio
│   └── InsightsPage.tsx  # Blog & Research
├── constants.ts          # CONTENT DATABASE (Edit this to update site)
├── types.ts              # TypeScript Interfaces
└── App.tsx               # Router & Layout Orchestrator
```

---

## 🔮 Future Engineering Roadmap

This project is in active development, with plans to expand its capabilities:

1.  **Voice Mode (Audio-to-Audio):** Implementing Gemini Live API for real-time voice conversations with Qubi.
2.  **RAG Pipeline:** Moving from context injection to a vector database (Pinecone/Chroma) to handle larger datasets (e.g., full blog posts).
3.  **3D Hero Element:** Replacing CSS layers with a Three.js fiber scene for interactive 3D elements.
4.  **CMS Integration:** connecting to Sanity.io for real-time blog updates without redeployment.

---

<div align="center">
  <h3>Engineered with precision. Designed for impact.</h3>
  <sub>© 2025 Sonu Thomas</sub>
</div>
