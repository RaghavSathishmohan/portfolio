export const personalInfo = {
  name: "Raghav Sathishmohan",
  title: "CS Student & Builder",
  subtitle: "I notice problems. Then I fix them.",
  tagline: "Building tools that actually work",
  location: "Plainsboro, NJ",
  email: "raghavsathishmohan@gmail.com",
  phone: "(732)-447-6474",
  linkedin: "https://linkedin.com/in/raghavsathishmohan",
  github: "https://github.com/RaghavSathishmohan",
};

export const aboutContent = {
  headline: "I build things because I get annoyed by broken systems.",
  paragraphs: [
    "Junior at Rutgers studying CS. I noticed local stores still tracking inventory in notebooks and spreadsheets—missing money leaks, overstocking, running out of essentials. So I built StorePilot to fix that.",
    "I'm not a coding prodigy. Ask me to write a single program from memory and I'll probably forget the syntax. But give me AI tools and a week? I'll ship you a working product. That's how I built StorePilot. That's how I built this portfolio. That's how I work.",
    "Before coding, I managed operations teams and learned something important: most problems aren't tech problems, they're process problems wearing tech clothes. I build connections through soccer, the gym, and actually talking to people. Want to know what I'm building next? Let's grab coffee.",
  ],
  stats: [
    { label: "Teams Led", value: "15+ people" },
    { label: "People Served", value: "500+" },
    { label: "Shipped Products", value: "2" },
    { label: "Coding Prodigy", value: "Nope" },
  ],
};

export const projects = [
  {
    id: "storepilot",
    name: "StorePilot",
    tagline: "Inventory management that actually makes sense",
    description:
      "Local stores were drowning in spreadsheets and notebooks. I built something better.",
    problem:
      "Walk into any local store and ask how they track inventory. Notebooks. Spreadsheets. Missing money. Overstocked shelves. Running out of essentials. It's 2026 and we're still doing this.",
    solution:
      "Built a tool that tracks inventory, spots money leaks, and tells you what to reorder before you run out. No jargon. Just works.",
    status: "Live Beta",
    role: "Solo Founder",
    highlights: [
      "Shipped working product in under 3 months using AI-assisted development",
      "Built analytics that spot inventory patterns humans miss",
      "Designed for people who aren't tech people",
      "Learned I can build faster with AI than most people can with perfect memory",
    ],
    techStack: ["Python", "SQL", "AI tools", "Actual problem-solving"],
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
    tagline: "Job searching shouldn't be a full-time job",
    description:
      "Automated my own job search because clicking 'Apply' 50 times a day is soul-crushing.",
    problem:
      "Job applications are repetitive, time-consuming, and you still need to customize every resume. There had to be a better way.",
    solution:
      "Built a pipeline that evaluates roles, generates tailored CVs, tracks everything, and reminds me when to follow up. Basically gave myself a recruiting team.",
    status: "Active",
    role: "Builder",
    highlights: [
      "Built end-to-end automation that actually respects recruiters' time",
      "Scored and ranked 100+ opportunities automatically",
      "Generated tailored CVs for each application",
      "Open source because why not",
    ],
    techStack: ["TypeScript", "Node.js", "Playwright", "AI APIs"],
    links: {
      github: "https://github.com/RaghavSathishmohan/career-ops",
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
    role: "Founder",
    period: "March 2025 – Present",
    description: "Built an inventory tool because I got tired of watching local stores struggle.",
    highlights: [
      "Shipped a working product using AI-assisted development (because I can't code from scratch, and that's fine)",
      "Talked to real store owners to understand what they actually need",
      "Built analytics that catch money leaks and inventory problems",
      "Learning that building is about solving problems, not memorizing syntax",
    ],
    type: "founder",
    skills: ["Problem-solving", "AI-assisted development", "Customer conversations", "Shipping"],
  },
  {
    id: "plainsboro",
    company: "Plainsboro Recreation",
    role: "Program Operations Coordinator",
    period: "May 2024 – Aug 2024; May 2025 – Aug 2025",
    description: "Made sure 500+ people had a good time. Led teams. Learned that operations is just organized common sense.",
    highlights: [
      "Managed operations for 500+ participants—scheduling, staffing, problem-solving",
      "Led 10+ seasonal staff and actually enjoyed the mentoring part",
      "Used data to fix bottlenecks before they became problems",
      "Learned that most operational issues come down to communication",
    ],
    type: "operations",
    skills: ["Leadership", "Operations", "Team management", "Common sense"],
  },
  {
    id: "bounceu",
    company: "BounceU",
    role: "Event Operations Coordinator",
    period: "Nov 2022 – Apr 2023",
    location: "West Windsor, NJ",
    description: "Ran events for screaming kids and anxious parents. Survived. Learned a lot.",
    highlights: [
      "Coordinated logistics for high-volume events (think: 30 kids, one bounce house, zero chaos)",
      "Led team of 15 and kept everyone sane during busy Saturdays",
      "Handled angry parents with grace (mostly)",
      "Used data to figure out what was working and what wasn't",
    ],
    type: "operations",
    skills: ["Event management", "Crisis handling", "Leadership", "Customer service"],
  },
];

export const skills = [
  {
    category: "Building with AI",
    icon: "Code2",
    description: "I use AI to code because I care more about shipping than syntax",
    skills: ["AI-assisted development", "Python", "SQL", "Shipping fast", "Learning on the fly"],
    color: "#d4a574",
  },
  {
    category: "Solving Real Problems",
    icon: "Brain",
    description: "Noticing broken systems and fixing them",
    skills: ["Pattern recognition", "Customer research", "Process design", "Practical solutions"],
    color: "#5a8a8a",
  },
  {
    category: "Data & Analytics",
    icon: "BarChart3",
    description: "Making sense of numbers to make better decisions",
    skills: ["Excel", "Data analysis", "Dashboards", "Finding insights"],
    color: "#c9a8a8",
  },
  {
    category: "People & Operations",
    icon: "Users",
    description: "Leading teams and getting things done",
    skills: ["Team leadership", "Operations", "Customer conversations", "Mentoring"],
    color: "#8b6f5c",
  },
  {
    category: "Outside Tech",
    icon: "Layers",
    description: "The stuff that actually matters",
    skills: ["Soccer", "Gym", "Networking", "Building relationships"],
    color: "#6b8e5a",
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
    description: "Automated my job search because applying manually is painful",
    language: "TypeScript",
    stars: 0,
    forks: 0,
    topics: ["automation", "job-search", "ai-tools", "practical"],
  },
  {
    name: "portfolio",
    description: "This website. Built it myself. Yes, with AI help.",
    language: "TypeScript",
    stars: 0,
    forks: 0,
    topics: ["nextjs", "personal", "shipping"],
  },
];

export const contactInfo = {
  email: "raghavsathishmohan@gmail.com",
  linkedin: "https://linkedin.com/in/raghavsathishmohan",
  github: "https://github.com/RaghavSathishmohan",
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
