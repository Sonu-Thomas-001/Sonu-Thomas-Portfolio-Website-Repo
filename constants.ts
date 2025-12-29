
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
  GrowthItem
} from './types';

export const PERSONAL_DETAILS = {
  name: "Sonu Thomas",
  role: "AI Software Engineer | Production Change Manager",
  tagline: "AI Software Engineer | Building Scalable Intelligent Systems",
  location: "Kannur, Kerala, India",
  email: "sonuthomaswork@gmail.com",
  phone: "+91 8921 526656",
  about: "I am an AI Software Engineer with over 3+ years of hands-on experience in software development, web technologies, and building production-ready digital systems, combined with a strong and growing focus on Artificial Intelligence, intelligent automation, and applied AI engineering.",
  expandedAbout: "My technology journey began early at Xbean International and evolved through 3+ years of freelance development. Today, at HCLTech, I focus on AI engineering—treating intelligent automation not just as experimentation, but as a disciplined engineering practice emphasizing system design, scalability, and business impact.",
  resumeLink: "https://cdn.jsdelivr.net/gh/Sonu-Thomas-001/image-host/Sonu-Thomas-Portfolio-Website-Repo/Resume.pdf",
  social: {
    linkedin: "https://www.linkedin.com/in/sonuthomas001/",
    github: "https://github.com/Sonu-Thomas-001",
    instagram: "https://www.instagram.com/sonu_thomz/",
    whatsapp: "https://wa.me/918921526656",
    website: "https://sonuthomas.vercel.app/"
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
    content: "My technology journey began early during my Plus Two Computer Science education, where I worked as a Junior Web Developer at Xbean International. This early exposure allowed me to work on real client projects, understand end-to-end development lifecycles, and develop a strong problem-solving mindset that continues to shape my approach to engineering.",
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
    role: "Software Engineer (Production Change Manager)",
    company: "HCLTech",
    period: "2024 – Present",
    description: [
      "Managing Production Change Management lifecycle for enterprise clients.",
      "Conducting risk analysis, compliance checks, and cross-team coordination.",
      "Working with Java, SQL, and Oracle DB to maintain system integrity."
    ],
    tech: ["Java", "SQL", "Oracle DB", "ITIL"]
  },
  {
    id: "hcl-intern",
    role: "HCLTechbee Intern",
    company: "HCLTech",
    period: "2024",
    description: [
      "Worked on debugging and real-world project simulations.",
      "Gained hands-on experience with JDBC connectivity and NetBeans IDE.",
      "Developed foundational logic using Scratch and flow-based programming."
    ],
    tech: ["JDBC", "NetBeans", "Debugging"]
  },
  {
    id: "hcl-scholar",
    role: "HCLTechbee Scholar",
    company: "HCLTech",
    period: "2023",
    description: [
      "Intensive training in Java, PL/SQL, and Data Structures & Algorithms.",
      "Mastered system fundamentals and enterprise software architecture."
    ],
    tech: ["Java", "PL/SQL", "DSA"]
  },
  {
    id: "freelance",
    role: "Freelance Web Developer",
    company: "Self-Employed",
    period: "2021 – Present",
    description: [
      "Developing client-focused solutions using WordPress and custom CMS.",
      " optimizing website performance and handling long-term maintenance.",
      "Delivered projects for various local businesses and portfolios."
    ],
    tech: ["WordPress", "HTML/CSS", "SEO"]
  },
  {
    id: "xbean",
    role: "Junior Web Developer",
    company: "Xbean International",
    period: "2022",
    description: [
      "Assisted in WordPress development and theme customization.",
      "Implemented feature enhancements based on client requirements."
    ],
    tech: ["WordPress", "PHP"]
  }
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    category: "Technical Skills",
    items: [
      { name: "Web Development" },
      { name: "WordPress" },
      { name: "Unix / Shell Scripting" },
      { name: "Java" },
      { name: "SQL" },
      { name: "Oracle Database" }
    ]
  },
  {
    category: "AI & Data",
    items: [
      { name: "AI Fundamentals" },
      { name: "Data Science (Ongoing)" },
      { name: "Automation Thinking" },
      { name: "Gemini API" },
      { name: "Generative AI" }
    ]
  },
  {
    category: "Creative Skills",
    items: [
      { name: "Videography" },
      { name: "Photography" },
      { name: "Video Editing" }
    ]
  },
  {
    category: "Languages",
    items: [
      { name: "English", proficiency: "Full Professional" },
      { name: "Malayalam", proficiency: "Native" },
      { name: "Tamil", proficiency: "Professional" },
      { name: "Hindi", proficiency: "Limited" }
    ]
  },
];

export const LANGUAGES = [
  "English (Full Professional)",
  "Malayalam (Native)",
  "Tamil (Professional)",
  "Hindi (Limited)"
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "chronolens",
    title: "ChronoLens Public",
    category: "Generative AI",
    role: "Lead Engineer",
    stack: ["TypeScript", "Gemini AI", "React", "Tailwind"],
    description: "A premium time-travel photo booth experience. Upload your photo and transport yourself across history and into the future using advanced generative AI.",
    links: { demo: "#", github: "#" },
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "codifyui",
    title: "CodifyUI",
    category: "AI Tools",
    role: "Developer",
    stack: ["TypeScript", "Gemini 3 Flash", "React", "Tailwind"],
    description: "Transform UI screenshots into production-ready React & Tailwind code instantly using Gemini 3 Flash multimodal capabilities.",
    links: { demo: "#", github: "#" },
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "winos",
    title: "WinOS-Web",
    category: "Web Apps",
    role: "Frontend Architect",
    stack: ["React", "TypeScript", "Tailwind CSS"],
    description: "A fully interactive, responsive Windows-11 style desktop environment running entirely in the browser using React and Tailwind CSS.",
    links: { demo: "#", github: "#" },
    image: "https://images.unsplash.com/photo-1531297461136-82lw9z28y?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "intellexa",
    title: "Intellexa-Visuals",
    category: "AI Tools",
    role: "AI Engineer",
    stack: ["TypeScript", "Google Search Grounding", "Gemini"],
    description: "An advanced research tool that uses Google Search Grounding to research topics and instantly generates fact-checked summaries, data visualizations, and illustrations.",
    links: { demo: "#", github: "#" },
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "brandiq",
    title: "BrandIQ",
    category: "Generative AI",
    role: "Full Stack Dev",
    stack: ["TypeScript", "GenAI", "React"],
    description: "An AI-powered brand identity generator that creates a complete brand bible including logos, color palettes, and typography from a simple description.",
    links: { demo: "#", github: "#" },
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "carvix",
    title: "Carvix-AI",
    category: "Web Apps",
    role: "Developer",
    stack: ["TypeScript", "React", "Gemini AI"],
    description: "A premium custom car build visualizer powered by Gemini AI. Design your dream vehicle with custom body kits, colors, wheels, and accessories in real-time.",
    links: { demo: "#", github: "#" },
    image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "wondertales",
    title: "WonderTales-AI",
    category: "Generative AI",
    role: "Creative Developer",
    stack: ["TypeScript", "Gemini AI", "React"],
    description: "An interactive AI storybook that generates magical stories, illustrations, and narration in real-time based on user input.",
    links: { demo: "#", github: "#" },
    image: "https://images.unsplash.com/photo-1535905557558-afc4877a26fc?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "platedai",
    title: "PlatedAI",
    category: "Generative AI",
    role: "AI Specialist",
    stack: ["TypeScript", "Gemini Vision", "React"],
    description: "A high-end virtual photography studio for restaurateurs. Transform text menus into stunning, photorealistic food imagery using advanced generative AI.",
    links: { demo: "#", github: "#" },
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "lingualive",
    title: "LinguaLive-AI",
    category: "AI Tools",
    role: "Developer",
    stack: ["TypeScript", "Gemini Live API", "Audio Processing"],
    description: "A real-time conversational AI language tutor that helps you practice speaking with live voice interaction and feedback.",
    links: { demo: "#", github: "#" },
    image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "3dify",
    title: "3Dify-Studio",
    category: "Generative AI",
    role: "Graphics Engineer",
    stack: ["TypeScript", "Gemini Vision", "Three.js"],
    description: "Transform 2D photos into 3D models instantly using Gemini Vision and generative geometry algorithms.",
    links: { demo: "#", github: "#" },
    image: "https://images.unsplash.com/photo-1617791160505-6f00504e3519?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "vectora",
    title: "Vectora-AI",
    category: "AI Tools",
    role: "Developer",
    stack: ["TypeScript", "Gemini 2.5 Flash", "Gemini 3 Flash"],
    description: "A premium design tool that generates high-quality PNG assets and SVG vectors using Gemini 2.5 Flash and Gemini 3 Flash.",
    links: { demo: "#", github: "#" },
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "mockmate",
    title: "MockMate-AI",
    category: "AI Tools",
    role: "Full Stack Dev",
    stack: ["TypeScript", "Gemini AI", "React"],
    description: "A professional AI-powered interview simulator that provides real-time feedback, scoring, and improvement tips for technical and behavioral interviews.",
    links: { demo: "#", github: "#" },
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "mixora",
    title: "Mixora-AI",
    category: "AI Tools",
    role: "Audio Engineer",
    stack: ["TypeScript", "Audio API", "React"],
    description: "Your AI DJ. Perfectly Mixed. Mixora AI turns tracks into professional DJ sets in real time using beat matching and transition algorithms.",
    links: { demo: "#", github: "#" },
    image: "https://images.unsplash.com/photo-1516280440614-6697288d5d38?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "stylesync",
    title: "StyleSync-AI",
    category: "AI Tools",
    role: "Developer",
    stack: ["TypeScript", "Vision API", "React"],
    description: "An AI-powered personal stylist that analyzes your clothing items and generates complete outfit visualizations for different occasions.",
    links: { demo: "#", github: "#" },
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "merchify",
    title: "Merchify-Studio",
    category: "Generative AI",
    role: "Developer",
    stack: ["TypeScript", "GenAI", "React"],
    description: "On-demand AI merch mockups generator and editor. Upload your logo, generate product shots, and refine with natural language editing.",
    links: { demo: "#", github: "#" },
    image: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "colorfolio",
    title: "Colorfolio-Kids",
    category: "Web Apps",
    role: "Developer",
    stack: ["TypeScript", "PDF Generation", "React"],
    description: "Create personalized, magical coloring books for children in seconds. Enter a theme and a name to generate a unique, printable PDF coloring book.",
    links: { demo: "#", github: "#" },
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "logomotion",
    title: "LogoMotion-AI",
    category: "Generative AI",
    role: "Developer",
    stack: ["TypeScript", "Gemini AI", "SVG"],
    description: "Generate professional, animated SVG logos for your brand instantly using Gemini AI.",
    links: { demo: "#", github: "#" },
    image: "https://images.unsplash.com/photo-1626785774573-4b799312c95d?q=80&w=1000&auto=format&fit=crop"
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
    institution: "Higher Secondary (Plus Two)",
    degree: "Computer Science",
    period: "Completed",
    details: "Laid the foundation for programming and web development."
  },
  {
    institution: "SSLC",
    degree: "Secondary Education",
    period: "Completed"
  }
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    id: "c1",
    title: "HCLTechbee Scholar",
    issuer: "HCLTech",
    date: "2023",
  },
  {
    id: "c2",
    title: "100K Coding Challenge",
    issuer: "Competitive Coding Platform",
    date: "2023",
  },
  {
    id: "c3",
    title: "Web Designing Challenge",
    issuer: "Tech Community",
    date: "2022",
  },
  {
    id: "c4",
    title: "Introduction to Digital Marketing",
    issuer: "Google Digital Garage",
    date: "2021",
  },
  {
    id: "c5",
    title: "Excel Intermediate",
    issuer: "Online Certification",
    date: "2021",
  },
   {
    id: "c6",
    title: "Portfolio Website Design",
    issuer: "Self-Paced Project",
    date: "2021",
  }
];

export const BLOG_DATA: BlogItem[] = [
  {
    id: "b1",
    title: "AI in IT Operations: Moving from Reactive to Predictive",
    excerpt: "Exploring how machine learning models are transforming traditional IT service management by predicting incidents before they impact the business.",
    date: "Oct 12, 2024",
    readTime: "5 min read",
    category: "AIOps",
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=1000&auto=format&fit=crop",
    link: "#"
  },
  {
    id: "b2",
    title: "The Art of Risk-Free Production Changes",
    excerpt: "A deep dive into rigorous risk assessment frameworks and compliance checklists that ensure 99.99% uptime during complex enterprise deployments.",
    date: "Sep 28, 2024",
    readTime: "7 min read",
    category: "Change Mgmt",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop",
    link: "#"
  },
  {
    id: "b3",
    title: "Headless WordPress with Next.js: The Ultimate Stack",
    excerpt: "Building ultra-fast, secure, and scalable websites by decoupling the CMS from the frontend presentation layer. A guide for modern developers.",
    date: "Aug 15, 2024",
    readTime: "6 min read",
    category: "Web Dev",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1000&auto=format&fit=crop",
    link: "#"
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
    id: "g2",
    year: "2022",
    title: "The Foundation",
    role: "Junior Web Developer",
    description: "At Xbean International, I moved from solo coding to team-based development. I learned version control, code reviews, and the discipline required for professional software engineering.",
    icon: "Hammer"
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
