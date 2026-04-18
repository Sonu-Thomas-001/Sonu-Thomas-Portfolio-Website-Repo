import re

projects_data_new = """export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "merchify",
    title: "Merchify-Studio",
    category: "Generative AI",
    role: "Developer",
    stack: ["TypeScript", "GenAI", "React"],
    description: "On-demand AI merch mockups generator and editor. Upload your logo, generate product shots, and refine with natural language editing.",
    links: { demo: "#", github: "https://github.com/Sonu-Thomas-001/Merchify-Studio" },
    image: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "diagramops",
    title: "DiagramOps",
    category: "Web Apps",
    role: "Developer",
    stack: ["TypeScript", "React"],
    description: "A web app that generates architecture diagrams from text input.",
    links: { demo: "#", github: "https://github.com/Sonu-Thomas-001/DiagramOps" },
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "mixora",
    title: "Mixora-AI",
    category: "AI Tools",
    role: "Audio Engineer",
    stack: ["TypeScript", "Audio API", "React"],
    description: "Your AI DJ. Perfectly Mixed. Mixora AI turns tracks into professional DJ sets in real time.",
    links: { demo: "#", github: "https://github.com/Sonu-Thomas-001/Mixora-AI" },
    image: "https://images.unsplash.com/photo-1516280440614-6697288d5d38?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "carvix",
    title: "Carvix-AI",
    category: "Web Apps",
    role: "Developer",
    stack: ["TypeScript", "React", "Gemini AI"],
    description: "A premium custom car build visualizer powered by Gemini AI. Design your dream vehicle with custom body kits, colors, wheels, and accessories in real-time.",
    links: { demo: "#", github: "https://github.com/Sonu-Thomas-001/Carvix-AI" },
    image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "aiworker",
    title: "Ai-Worker",
    category: "Backend Tasks",
    role: "Backend Engineer",
    stack: ["Python"],
    description: "Centralized Python worker for handling asynchronous AI tasks and background processing.",
    links: { demo: "#" },
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "prodengg",
    title: "Prod-Engg-Coworker",
    category: "AI Tools",
    role: "AI Engineer",
    stack: ["Python"],
    description: "An AI-powered co-worker tool designed to assist production engineering teams with daily tasks.",
    links: { demo: "#" },
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "ticketwave",
    title: "TicketWave",
    category: "Web Apps",
    role: "Backend Developer",
    stack: ["Java"],
    description: "A Java-based ticketing management and tracking system.",
    links: { demo: "#", github: "https://github.com/Sonu-Thomas-001/TicketWave" },
    image: "https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "rcaagent",
    title: "RCA-Agent",
    category: "AI Tools",
    role: "AI Developer",
    stack: ["Python"],
    description: "Automated Root Cause Analysis agent that investigates and reports on production incidents.",
    links: { demo: "#" },
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "multiagent",
    title: "Multi-Agent-Change-Advisor",
    category: "Generative AI",
    role: "AI Developer",
    stack: ["Python"],
    description: "A multi-agent AI system that evaluates and advises on enterprise change management requests.",
    links: { demo: "#" },
    image: "https://images.unsplash.com/photo-1535905557558-afc4877a26fc?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "changebotgcp",
    title: "Change-Management-Bot-GCP",
    category: "AI Tools",
    role: "Cloud Engineer",
    stack: ["Python", "GCP"],
    description: "A GCP-integrated bot for automating and streamlining change management processes.",
    links: { demo: "#" },
    image: "https://images.unsplash.com/photo-1620288627223-53302f4e8c74?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "preso3d",
    title: "Preso3D",
    category: "Web Apps",
    role: "Frontend Developer",
    stack: ["TypeScript", "React", "3D"],
    description: "The next-generation presentation platform. Create stunning, interactive 3D slide decks with parallax depth, smooth transitions, and cinematic animations directly in the browser.",
    links: { demo: "#", github: "https://github.com/Sonu-Thomas-001/Preso3D" },
    image: "https://images.unsplash.com/photo-1511649475669-e288648b2339?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "changebot",
    title: "Change-Management-Bot",
    category: "AI Tools",
    role: "AI Developer",
    stack: ["Python"],
    description: "An intelligent bot for orchestrating change management workflows.",
    links: { demo: "#" },
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "mockmate",
    title: "MockMate-AI",
    category: "AI Tools",
    role: "Full Stack Dev",
    stack: ["TypeScript", "Gemini AI", "React"],
    description: "A professional AI-powered interview simulator that provides real-time feedback, scoring, and improvement tips for technical and behavioral interviews.",
    links: { demo: "#", github: "https://github.com/Sonu-Thomas-001/MockMate-AI" },
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "platedai",
    title: "PlatedAI",
    category: "Generative AI",
    role: "AI Specialist",
    stack: ["TypeScript", "Gemini Vision", "React"],
    description: "A high-end virtual photography studio for restaurateurs. Transform text menus into stunning, photorealistic food imagery using advanced generative AI.",
    links: { demo: "#", github: "https://github.com/Sonu-Thomas-001/PlatedAI" },
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "chronolens",
    title: "ChronoLens",
    category: "Generative AI",
    role: "Lead Engineer",
    stack: ["TypeScript", "Gemini AI", "React", "Tailwind"],
    description: "A premium time-travel photo booth experience. Upload your photo and transport yourself across history and into the future using advanced generative AI.",
    links: { demo: "#", github: "https://github.com/Sonu-Thomas-001/ChronoLens" },
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "brandiq",
    title: "BrandIQ",
    category: "Generative AI",
    role: "Full Stack Dev",
    stack: ["TypeScript", "GenAI", "React"],
    description: "An AI-powered brand identity generator that creates a complete brand bible including logos, color palettes, and typography from a simple description.",
    links: { demo: "#", github: "https://github.com/Sonu-Thomas-001/BrandIQ" },
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "wondertales",
    title: "WonderTales-AI",
    category: "Generative AI",
    role: "Creative Developer",
    stack: ["TypeScript", "Gemini AI", "React"],
    description: "An interactive AI storybook that generates magical stories, illustrations, and narration in real-time.",
    links: { demo: "#", github: "https://github.com/Sonu-Thomas-001/WonderTales-AI" },
    image: "https://images.unsplash.com/photo-1535905557558-afc4877a26fc?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "colorfolio",
    title: "Colorfolio-Kids",
    category: "Web Apps",
    role: "Developer",
    stack: ["TypeScript", "PDF Generation", "React"],
    description: "Create personalized, magical coloring books for children in seconds. Enter a theme and a name to generate a unique, printable PDF coloring book.",
    links: { demo: "#", github: "https://github.com/Sonu-Thomas-001/Colorfolio-Kids" },
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "logomotion",
    title: "LogoMotion-AI",
    category: "Generative AI",
    role: "Developer",
    stack: ["TypeScript", "Gemini AI", "SVG"],
    description: "Generate professional, animated SVG logos for your brand instantly using Gemini AI.",
    links: { demo: "#", github: "https://github.com/Sonu-Thomas-001/LogoMotion-AI" },
    image: "https://images.unsplash.com/photo-1626785774573-4b799312c95d?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "intellexa",
    title: "Intellexa-Visuals",
    category: "AI Tools",
    role: "AI Engineer",
    stack: ["TypeScript", "Google Search Grounding", "Gemini"],
    description: "An advanced research tool that uses Google Search Grounding to research topics and instantly generates fact-checked summaries, data visualizations, and illustrations tailored to your audience.",
    links: { demo: "#", github: "https://github.com/Sonu-Thomas-001/Intellexa-Visuals" },
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "3dify",
    title: "3Dify-Studio",
    category: "Generative AI",
    role: "Graphics Engineer",
    stack: ["TypeScript", "Gemini Vision", "Three.js"],
    description: "Transform 2D photos into 3D models instantly using Gemini Vision and generative geometry.",
    links: { demo: "#", github: "https://github.com/Sonu-Thomas-001/3Dify-Studio" },
    image: "https://images.unsplash.com/photo-1617791160505-6f00504e3519?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "vectora",
    title: "Vectora-AI",
    category: "AI Tools",
    role: "Developer",
    stack: ["TypeScript", "Gemini 2.5 Flash", "Gemini 3 Flash"],
    description: "A premium design tool that generates high-quality PNG assets and SVG vectors using Gemini 2.5 Flash and Gemini 3 Flash.",
    links: { demo: "#", github: "https://github.com/Sonu-Thomas-001/Vectora-AI" },
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "lingualive",
    title: "LinguaLive-AI",
    category: "AI Tools",
    role: "Developer",
    stack: ["TypeScript", "Gemini Live API", "Audio Processing"],
    description: "A real-time conversational AI language tutor that helps you practice speaking with live voice interaction and feedback.",
    links: { demo: "#", github: "https://github.com/Sonu-Thomas-001/LinguaLive-AI" },
    image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "codifyui",
    title: "CodifyUI",
    category: "AI Tools",
    role: "Developer",
    stack: ["TypeScript", "Gemini 3 Flash", "React", "Tailwind"],
    description: "Transform UI screenshots into production-ready React & Tailwind code using Gemini 3 Flash.",
    links: { demo: "#", github: "https://github.com/Sonu-Thomas-001/CodifyUI" },
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "stylesync",
    title: "StyleSync-AI",
    category: "AI Tools",
    role: "Developer",
    stack: ["TypeScript", "Vision API", "React"],
    description: "An AI-powered personal stylist that analyzes your clothing items and generates complete outfit visualizations for different occasions.",
    links: { demo: "#", github: "https://github.com/Sonu-Thomas-001/StyleSync-AI" },
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1000&auto=format&fit=crop"
  }
];"""

with open('constants.ts', 'r') as f:
    content = f.read()

content = re.sub(
    r'export const PROJECTS_DATA: ProjectItem\[\] = \[.*?\];',
    projects_data_new,
    content,
    flags=re.DOTALL
)

with open('constants.ts', 'w') as f:
    f.write(content)

print("Updated constants.ts")
