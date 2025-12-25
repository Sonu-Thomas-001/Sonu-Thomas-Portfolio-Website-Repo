
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
  role: "Software Engineer | Production Change Manager",
  tagline: "Software Engineer | AI & Data Science Enthusiast | Web Developer | Production Change Manager",
  location: "Kannur, Kerala, India",
  email: "sonuthomaswork@gmail.com",
  phone: "+91 9074480697",
  about: "A passionate Software Engineer at HCLTech with strong expertise in web development, production change management, and a growing focus on AI and Data Science. I build scalable digital experiences and intelligent systems that transform the way people work.",
  expandedAbout: "I am a Software Engineer at HCLTech with 2+ years of experience in the industry. Currently serving as a Production Change Manager, I handle enterprise-scale changes ensuring minimal risk and maximum compliance. My journey began early; I started freelance web development during my Plus Two years, giving me a practical edge in client communication and delivery. Today, my vision is to bridge the gap between robust software engineering and the future of Artificial Intelligence.",
  resumeLink: "#"
};

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
      { name: "Automation Thinking" }
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
    id: "p1",
    title: "Premium Portfolio Website",
    category: "Web Dev",
    role: "Frontend Engineer",
    stack: ["React", "TypeScript", "Tailwind", "Framer Motion"],
    description: "A high-performance personal brand website featuring smooth animations, responsive design, and SEO optimization. Designed to showcase enterprise-ready engineering skills.",
    links: {
      demo: "#",
      github: "#"
    },
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "p2",
    title: "Client Business Platform",
    category: "Web Dev",
    role: "Freelance Developer",
    stack: ["WordPress", "PHP", "MySQL", "Custom Theme"],
    description: "Developed a custom WordPress solution for a local business, resulting in a 40% increase in lead generation through optimized performance and structure.",
    links: {
      demo: "#"
    },
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "p3",
    title: "AI Change Risk Analyzer",
    category: "AI & Data",
    role: "AI Researcher (Concept)",
    stack: ["Python", "TensorFlow", "Scikit-learn"],
    description: "A conceptual AI model designed to analyze historical production change data to predict failure risks and suggest mitigation strategies for enterprise environments.",
    links: {
      github: "#"
    },
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "p4",
    title: "Auto-Compliance Bot",
    category: "Automation",
    role: "Automation Engineer",
    stack: ["Shell Scripting", "Unix", "Cron"],
    description: "Automated server compliance checking tool that runs periodic scans and generates alerts for configuration drifts, reducing manual audit time by 70%.",
    links: {
      github: "#"
    },
    image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&w=1000&auto=format&fit=crop"
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
