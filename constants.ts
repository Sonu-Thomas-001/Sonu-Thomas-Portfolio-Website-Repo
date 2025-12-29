
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
  },
  {
    id: "xbean",
    role: "Junior Web Developer",
    company: "Xbean International",
    period: "Aug 2022 – Dec 2022",
    description: [
      "Collaborated with senior developers to design, develop, and maintain client-facing web applications.",
      "Implemented feature enhancements and deployed WordPress websites with responsive layouts and content structures.",
      "Utilized Git and GitHub for version control, ensuring code quality and efficient software collaboration.",
      "Applied Bootstrap for frontend styling and implemented SEO-friendly architecture for improved visibility."
    ],
    tech: ["WordPress", "Bootstrap", "Git", "GitHub", "SEO", "HTML/CSS"]
  }
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    category: "Programming Languages",
    items: [
      { name: "Python" },
      { name: "Java" },
      { name: "C" },
      { name: "C++" },
      { name: "JavaScript" },
      { name: "SQL" },
      { name: "PL/SQL" }
    ]
  },
  {
    category: "AI & Data Intelligence",
    items: [
      { name: "Artificial Intelligence" },
      { name: "Generative AI" },
      { name: "NLP" },
      { name: "LLMs & Agents" },
      { name: "AI App Development" },
      { name: "GenAI Tools" }
    ]
  },
  {
    category: "Software Engineering",
    items: [
      { name: "Software Engineering" },
      { name: "System Design" },
      { name: "Computer Organization" },
      { name: "Web Applications" },
      { name: "DBMS" },
      { name: "JDBC" }
    ]
  },
  {
    category: "Web & API Ecosystem",
    items: [
      { name: "Web Development" },
      { name: "HTML5 & HTML" },
      { name: "CSS" },
      { name: "Bootstrap" },
      { name: "WordPress" }
    ]
  },
  {
    category: "Infrastructure & Tools",
    items: [
      { name: "Oracle Database" },
      { name: "SQL Databases" },
      { name: "Linux / Unix" },
      { name: "Windows" },
      { name: "Git" },
      { name: "GitHub" }
    ]
  },
  {
    category: "Enterprise & Operations",
    items: [
      { name: "Production Support" },
      { name: "Change Management" },
      { name: "Process Consulting" },
      { name: "Project Management" }
    ]
  },
  {
    category: "Professional & Digital",
    items: [
      { name: "Digital Marketing" },
      { name: "SEO" },
      { name: "Leadership" },
      { name: "Problem Solving" },
      { name: "Team Collaboration" }
    ]
  },
  {
    category: "Communication Languages",
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
