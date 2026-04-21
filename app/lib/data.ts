export const personalInfo = {
  name: "Raghav Sathishmohan",
  title: "Founder-Engineer",
  subtitle: "CS Student. Systems Builder.",
  tagline: "Building AI-Powered Systems & Operations",
  location: "Plainsboro, NJ",
  email: "raghavsathishmohan@gmail.com",
  phone: "(732)-447-6474",
  linkedin: "linkedin.com/in/raghavsathishmohan",
  github: "github.com/raghavmohan",
};

export const aboutContent = {
  headline: "I'm a Computer Science student at Rutgers with a founder's mindset.",
  paragraphs: [
    "I don't just write code—I build systems that solve real problems.",
    "At StorePilot, I'm architecting an AI-powered inventory platform from the ground up, handling everything from risk-scoring algorithms to multi-tenant infrastructure. Before that, I led operations teams of 15+ people, optimizing processes through data analytics and delivering results under pressure.",
    "My superpower is bridging technical depth with operational execution. Whether it's forecasting algorithms or team coordination, I build things that work.",
  ],
  stats: [
    { label: "Team Members Led", value: "15+" },
    { label: "Participants Served", value: "500+" },
    { label: "Years Experience", value: "3+" },
    { label: "AI SaaS Founder", value: "1" },
  ],
};

export const projects = [
  {
    id: "storepilot",
    name: "StorePilot",
    tagline: "AI-Powered Inventory Management SaaS",
    description:
      "Multi-tenant retail operations platform with AI-driven forecasting and analytics dashboards.",
    problem:
      "Retailers struggle with inventory optimization, demand forecasting, and maintaining optimal stock levels across multiple locations.",
    solution:
      "Built an AI-powered SaaS platform that leverages risk-scoring algorithms to predict demand patterns and optimize inventory automatically.",
    status: "In Development",
    role: "Founder & Operations Lead",
    highlights: [
      "Architected multi-tenant platform with role-based access control",
      "Implemented risk-scoring algorithms for demand forecasting",
      "Built real-time analytics dashboards for inventory insights",
      "Led product development from concept to deployment",
    ],
    techStack: ["Python", "SQL", "AI/ML", "Analytics", "Multi-tenant"],
    links: {
      github: null,
      demo: null,
      caseStudy: null,
    },
    featured: true,
  },
  {
    id: "career-ops",
    name: "Career Ops",
    tagline: "AI-Powered Job Search Automation",
    description:
      "Comprehensive job search pipeline with offer evaluation, CV generation, and application tracking.",
    problem:
      "Job searching is time-consuming and lacks systematic evaluation of opportunities.",
    solution:
      "Created an AI-powered automation system that evaluates job offers, generates tailored CVs, tracks applications, and manages the entire pipeline.",
    status: "Active",
    role: "Builder",
    highlights: [
      "Built offer evaluation system with A-F scoring framework",
      "Implemented CV generation with PDF output",
      "Created portal scanning for job discovery",
      "Built tracking and follow-up systems",
    ],
    techStack: ["TypeScript", "Node.js", "React", "Playwright", "AI"],
    links: {
      github: "https://github.com/raghavmohan/career-ops",
      demo: null,
      caseStudy: null,
    },
    featured: true,
  },
];

export const experience = [
  {
    id: "storepilot-founder",
    company: "StorePilot",
    role: "Founder & Operations Lead",
    period: "March 2025 – Present",
    description: "AI-powered inventory management SaaS for retail operations.",
    highlights: [
      "Architected multi-tenant platform with role-based access control and analytics dashboards",
      "Implemented risk-scoring algorithms for demand forecasting and inventory optimization",
      "Led product development from concept to deployment, managing technical and business priorities",
    ],
    type: "founder",
    skills: ["AI/ML", "System Architecture", "Product Management", "Operations"],
  },
  {
    id: "plainsboro",
    company: "Plainsboro Recreation & Community Services",
    role: "Program Operations Coordinator",
    period: "May 2024 – Aug 2024; May 2025 – Aug 2025",
    description: "Delivered high-quality experiences for 500+ participants.",
    highlights: [
      "Delivered high-quality experiences for 500+ participants through optimized scheduling and service delivery",
      "Supervised and mentored 10+ seasonal staff, ensuring consistent program quality",
      "Analyzed operational data to implement efficiency improvements, driving guest satisfaction",
      "Supported event planning and execution with cross-departmental collaboration",
    ],
    type: "operations",
    skills: ["Leadership", "Data Analytics", "Process Optimization", "Team Management"],
  },
  {
    id: "bounceu",
    company: "BounceU",
    role: "Event Operations & Logistics Coordinator",
    period: "Nov 2022 – Apr 2023",
    location: "West Windsor, NJ",
    description: "Coordinated end-to-end event logistics for high-volume client events.",
    highlights: [
      "Coordinated end-to-end event logistics for high-volume client events",
      "Directed team of 15 staff members to execute events aligned with brand standards",
      "Resolved client concerns in real time, maintaining 95%+ satisfaction rating",
      "Applied data analytics to evaluate performance metrics and optimize operations",
    ],
    type: "operations",
    skills: ["Event Management", "Leadership", "Client Relations", "Analytics"],
  },
];

export const skills = [
  {
    category: "Programming & Data",
    icon: "Code2",
    description: "Core technical skills for building and analyzing systems",
    skills: ["Python", "SQL", "Excel", "Data Visualization", "Analytics Pipelines"],
    color: "#00d4aa",
  },
  {
    category: "AI & Systems",
    icon: "Brain",
    description: "Architecture and machine learning capabilities",
    skills: ["AI System Architecture", "Risk Scoring Algorithms", "Demand Forecasting", "Multi-tenant Platforms"],
    color: "#6366f1",
  },
  {
    category: "Analytics & Dashboards",
    icon: "BarChart3",
    description: "Business intelligence and data-driven decision making",
    skills: ["Business Intelligence", "Performance Metrics", "Operational Dashboards", "Data-driven Optimization"],
    color: "#f59e0b",
  },
  {
    category: "Product & Operations",
    icon: "Layers",
    description: "Product development and operational excellence",
    skills: ["Product Development", "Process Optimization", "Cross-functional Collaboration", "Project Management"],
    color: "#ec4899",
  },
  {
    category: "Leadership & Execution",
    icon: "Users",
    description: "Team management and high-pressure execution",
    skills: ["Team Management", "High-pressure Execution", "Client Relations", "Mentorship & Training"],
    color: "#8b5cf6",
  },
];

export const education = {
  school: "Rutgers University",
  degree: "B.S. Computer Science",
  expectedGraduation: "May 2027",
  location: "New Brunswick, NJ",
  coursework: [
    "Business Analytics",
    "Project Management",
    "Organizational Behavior",
    "AI Concepts & Strategies",
  ],
  certifications: [
    { name: "Google Data Analytics Specialization", issuer: "Google" },
    { name: "AI Concepts & Strategies", issuer: "Rutgers" },
  ],
};

export const githubRepos = [
  {
    name: "career-ops",
    description: "AI-powered job search automation pipeline with offer evaluation, CV generation, and application tracking",
    language: "TypeScript",
    stars: 0,
    forks: 0,
    topics: ["ai", "automation", "job-search", "productivity"],
  },
  {
    name: "portfolio",
    description: "Personal portfolio website built with Next.js, TypeScript, and Tailwind CSS",
    language: "TypeScript",
    stars: 0,
    forks: 0,
    topics: ["nextjs", "portfolio", "tailwindcss", "typescript"],
  },
];

export const contactInfo = {
  email: "raghavsathishmohan@gmail.com",
  linkedin: "https://linkedin.com/in/raghavsathishmohan",
  github: "https://github.com/raghavmohan",
  resumeUrl: "/resume.pdf",
};

export const navSections = [
  { id: "hero", label: "Home", shortcut: "H" },
  { id: "about", label: "About", shortcut: "A" },
  { id: "projects", label: "Projects", shortcut: "P" },
  { id: "experience", label: "Experience", shortcut: "E" },
  { id: "skills", label: "Skills", shortcut: "S" },
  { id: "education", label: "Education", shortcut: "D" },
  { id: "github", label: "GitHub", shortcut: "G" },
  { id: "contact", label: "Contact", shortcut: "C" },
];
