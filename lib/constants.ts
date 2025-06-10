export const SITE_CONFIG = {
  name: "Mithilesh Gopalakrishnan",
  title: "Mithilesh Gopalakrishnan | Portfolio",
  description: "Personal portfolio website of Mithilesh Gopalakrishnan",
  url: "https://mithilesh.dev",
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
  { 
    name: "Twitter", 
    url: "https://twitter.com/username", 
    icon: "Twitter" 
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
    position: "Software Engineer",
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

  // {
  //   company: "Previous Company",
  //   position: "Frontend Developer",
  //   duration: "Mar 2020 - Dec 2021",
  //   description: "Developed and maintained multiple web applications using React and TypeScript. Implemented responsive designs and ensured cross-browser compatibility.",
  //   technologies: ["React", "JavaScript", "CSS", "REST API"],
  // },
  // {
  //   company: "First Company",
  //   position: "Junior Developer",
  //   duration: "Jun 2018 - Feb 2020",
  //   description: "Assisted in the development of web applications and gained experience in modern frontend technologies.",
  //   technologies: ["HTML", "CSS", "JavaScript", "jQuery"],
  // },


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
    liveUrl: "https://project-three.com",
    githubUrl: "https://github.com/username/project-three",
  },
];

export const ACHIEVEMENTS = [
  {
    title: "Award Title",
    organization: "Awarding Organization",
    year: "2023",
    description: "Recognized for outstanding contributions to the field of web development.",
  },
  {
    title: "Certification",
    organization: "Certification Authority",
    year: "2022",
    description: "Completed advanced certification in modern web technologies and best practices.",
  },
  {
    title: "Conference Speaker",
    organization: "Tech Conference",
    year: "2021",
    description: "Invited to speak about innovative approaches to frontend architecture.",
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