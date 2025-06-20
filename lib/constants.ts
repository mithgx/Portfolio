export const SITE_CONFIG = {
  name: "Mithilesh Gopalakrishnan",
  title: "Mithilesh - Portfolio",
  description: "Portflio website of mith",
  url: "https://mithx.vercel.app",
  email: "mithileshg47@gmail.com",
};

export const NAV_ITEMS = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Experience", path: "/experience" },
  { name: "Achievements", path: "/achievements" },
  { name: "Contact", path: "/contact" },
];

export const SOCIAL_LINKS = [
  { 
    name: "GitHub", 
    url: "https://github.com/mithgx", 
    icon: "Github" 
  },
  { 
    name: "LinkedIn", 
    url: "https://www.linkedin.com/in/mithileshgopalakrishnan/", 
    icon: "Linkedin" 
  },
  
];

export const SKILLS = [
  { name: "JavaScript", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "React", level: 90 },
  { name: "Next.js", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "CSS/SCSS", level: 85 },
  { name: "UI/UX Design", level: 75 },
  { name: "GraphQL", level: 70 },
];

export const EXPERIENCE = [
  {
    company: "Bahwan Cybertek",
    logo: "/bct.jpeg",
    position: "Software Engineer Intern",
    duration: "May-July 2025",
    description: [
      "Implemented session management in an AI-based application for World Bank, enabling support for multiple users per server (previously single-user only).",
      "Optimized data processing logic to efficiently handle over 1 million records.",
      "Resolved record mismatch issues in the Table Comparison module.",
      "Currently enhancing unstructured data extraction by fine-tuning models for improved accuracy on unstructured PDFs.",
    ],
    technologies: ["Python", "Git", "Flask", "SQL"],
  },
];




export const PROJECTS = [
  {
    title: "Project One",
    description: "A comprehensive web application for task management with real-time collaboration features.",
    image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://project-one.com",
    githubUrl: "https://github.com/username/project-one",
  },
  {
    title: "Project Two",
    description: "An e-commerce platform built with modern technologies, featuring a sleek UI and seamless checkout experience.",
    image: "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "https://project-two.com",
    githubUrl: "https://github.com/username/project-two",
  },
  {
    title: "Project Three",
    description: "A data visualization dashboard that transforms complex datasets into intuitive, interactive visualizations.",
    image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg",
    tags: ["D3.js", "React", "TypeScript", "REST API"],
    liveUrl: "",
    githubUrl: "",
  },
];

export const ACHIEVEMENTS = [
  {
    title: "",
    organization: "",
    year: "",
    description: ".",
  },
  {
    title: "",
    organization: "",
    year: "",
    description: ".",
  },
  {
    title: "",
    organization: "",
    year: "",
    description: "",
  },
];

export const EDUCATION = [
  {
    institution: "Vellore Institute of Technology (VIT)",
    degree: "B.Tech in Electronics and Communication Engineering",
    period: "2022 - 2026",
    logo: "/vit.png",
    description: "Graduating with distinction. Specialized in AI, ML, and IoT. Active in hackathons and tech clubs.",
  },
  {
    institution: "NSN Memorial Senior Secondary School",
    degree: "Higher Secondary (CBSE)",
    period: "2020 - 2022",
    logo: "/nsnmem.jpeg",
    description: "Graduated in Science stream with Computer Science."
  }
];