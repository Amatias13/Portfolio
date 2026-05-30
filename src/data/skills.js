export const skills = [
  // Frontend
  { name: "JavaScript", category: "frontend", level: "advanced" },
  { name: "TypeScript", category: "frontend", level: "intermediate" },
  { name: "React", category: "frontend", level: "advanced" },
  { name: "React Native", category: "frontend", level: "intermediate" },
  { name: "HTML / CSS", category: "frontend", level: "advanced" },
  { name: "Tailwind CSS", category: "frontend", level: "intermediate" },
  { name: "Bootstrap", category: "frontend", level: "intermediate" },
  { name: "Material UI", category: "frontend", level: "intermediate" },
  { name: "Framer Motion", category: "frontend", level: "intermediate" },

  // Backend
  { name: "Node.js", category: "backend", level: "advanced" },
  { name: "Express.js", category: "backend", level: "advanced" },
  { name: "Python", category: "backend", level: "intermediate" },
  { name: "Flask", category: "backend", level: "intermediate" },
  { name: "Java", category: "backend", level: "intermediate" },
  { name: ".NET / C#", category: "backend", level: "intermediate" },
  { name: "RESTful APIs", category: "backend", level: "advanced" },
  { name: "Microservices", category: "backend", level: "intermediate" },

  // Database
  { name: "SQL", category: "database", level: "advanced" },
  { name: "PostgreSQL", category: "database", level: "intermediate" },
  { name: "SQL Server", category: "database", level: "intermediate" },
  { name: "SQLite", category: "database", level: "intermediate" },
  { name: "NoSQL", category: "database", level: "intermediate" },
  { name: "MongoDB", category: "database", level: "intermediate" },
  { name: "Firebase", category: "database", level: "intermediate" },
  { name: "Database Design", category: "database", level: "advanced" },

  // DevOps
  { name: "Docker", category: "devops", level: "intermediate" },
  { name: "Linux / Bash", category: "devops", level: "beginner" },
  { name: "Vercel / Netlify", category: "devops", level: "intermediate" },
  { name: "AWS", category: "devops", level: "beginner" },
  { name: "GitHub Actions", category: "devops", level: "intermediate" },
  { name: "GitHub Pages", category: "devops", level: "intermediate" },

  // Testing
  { name: "Jest", category: "testing", level: "beginner" },
  { name: "Vitest", category: "testing", level: "beginner" },
  { name: "Playwright", category: "testing", level: "beginner" },
  { name: "JUnit", category: "testing", level: "beginner" },

  // Tools
  { name: "Git", category: "tools", level: "advanced" },
  { name: "GitHub", category: "tools", level: "advanced" },
  { name: "GitHub Copilot", category: "tools", level: "intermediate" },
  { name: "Claude Code", category: "tools", level: "intermediate" },
  { name: "VS Code", category: "tools", level: "advanced" },
  { name: "Figma", category: "tools", level: "intermediate" },
  { name: "Postman", category: "tools", level: "intermediate" },
  { name: "Slack", category: "tools", level: "advanced" },
];

export const skillsByCategory = skills.reduce((acc, { category, name }) => {
  if (!acc[category]) acc[category] = [];
  acc[category].push(name);
  return acc;
}, {});

export const skillCategories = Object.keys(skillsByCategory);
