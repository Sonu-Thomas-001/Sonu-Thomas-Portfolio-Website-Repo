
import { 
  ExperienceItem, 
  SkillCategory, 
  ProjectItem, 
  EducationItem, 
  CertificationItem 
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
  { name: "100K Coding Challenge" },
  { name: "Introduction to Digital Marketing" },
  { name: "Excel Intermediate" },
  { name: "Web Designing Challenge" },
  { name: "Portfolio Website using HTML & CSS" }
];
