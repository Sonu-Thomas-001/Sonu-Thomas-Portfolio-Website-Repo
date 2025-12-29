# ⚡ Sonu Thomas | Next-Gen AI Portfolio

![React](https://img.shields.io/badge/React-18-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38B2AC?logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-black?logo=framer)
![Gemini AI](https://img.shields.io/badge/Google_Gemini-AI-8E75B2?logo=google)

> A high-performance, futuristic portfolio website built for the modern engineering era. Featuring a fully integrated AI chatbot (Qubi), 3D-style animations, and a seamless responsive design.

## 🚀 Overview

This project is not just a resume; it's a statement. It bridges the gap between traditional **Software Engineering** and **Artificial Intelligence**. 

Built with **React 18** and **TypeScript**, it leverages **Framer Motion** for complex orchestrations and **Tailwind CSS** for a utility-first styling approach. The core differentiator is **Qubi AI**, a context-aware chatbot powered by the **Google Gemini API** that can answer recruiters' questions about experience, skills, and projects in real-time.

---

## ✨ Key Features

### 🤖 Qubi AI Assistant
- **Powered by Gemini 1.5/3 Flash**: A custom-prompted AI agent that knows my entire resume.
- **Function Calling**: The AI can physically navigate the user to different sections of the site (e.g., "Show me his projects").
- **Context-Aware**: Pre-loaded with `constants.ts` data to provide accurate, hallucinaton-free answers.

### 🎨 Immersive UI/UX
- **Cyber-Aesthetic**: Dark mode default with neon accents, glassmorphism, and mesh gradients.
- **Micro-Interactions**: Hover states, magnetic buttons, and scroll-triggered reveals.
- **Preloader Sequence**: A cinematic "System Boot" animation sequence for first-time visitors.

### 🛠️ Technical Depth
- **Interactive Resume**: Accordion-style deep dive into experience and education.
- **Project Filtering**: Dynamic filtering for Web Apps, AI Tools, and Generative AI projects.
- **Performance**: Optimized assets, lazy loading, and lightweight architecture using Vite.

---

## 🏗️ Tech Stack

| Domain | Technology |
| :--- | :--- |
| **Core** | React 18, TypeScript, Vite |
| **Styling** | Tailwind CSS, Lucide React (Icons) |
| **Animation** | Framer Motion (Orchestration, Layout Animations) |
| **AI / ML** | Google GenAI SDK (`@google/genai`) |
| **Routing** | React Router DOM v6 |
| **Deployment** | Vercel / Netlify |

---

## ⚡ Getting Started

Follow these steps to get the project running locally.

### Prerequisites
- Node.js (v18 or higher)
- NPM or Yarn
- A Google Cloud Project with Gemini API enabled

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio-v2.git
   cd portfolio-v2
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env` file in the root directory:
   ```env
   # Get your key from aistudio.google.com
   GEMINI_API_KEY=your_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

---

## 📂 Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── AIAssistant.tsx   # The Qubi AI logic
│   ├── Hero.tsx          # Landing section with animations
│   ├── Projects.tsx      # Filterable project grid
│   └── ...
├── pages/            # Route pages (Home, Projects, Insights)
├── constants.ts      # SINGLE SOURCE OF TRUTH (Update content here)
├── types.ts          # TypeScript interfaces
└── App.tsx           # Main routing and layout logic
```

### ✏️ Customization
To personalize this portfolio, you simply need to edit `src/constants.ts`. This file contains all the data for:
- Personal Details
- Experience & Education
- Projects List
- Skill Categories
- Blog Posts

The AI Assistant automatically ingests data from this file, so no prompt engineering is required to update the bot's knowledge!

---

## 🔮 Future Roadmap

- [ ] **Voice Mode**: Enable voice-to-text for Qubi AI.
- [ ] **3D Elements**: Integrate Three.js for a hero 3D model.
- [ ] **CMS Integration**: Connect to Sanity.io or Strapi for blog posts.
- [ ] **Unit Testing**: Add Vitest for core utility logic.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">
  <sub>Built with 💙 by Sonu Thomas. Designed to innovate.</sub>
</div>
