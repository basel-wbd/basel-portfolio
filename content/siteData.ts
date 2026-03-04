// ─────────────────────────────────────────────────────────────
//  siteData.ts — ALL content lives here. Edit this file only.
// ─────────────────────────────────────────────────────────────

// ── Meta ──────────────────────────────────────────────────────
export const meta = {
  name: "Basel BaderEddin",
  title: "Industrial Engineering Student",
  tagline: "Systems thinker. Process optimizer. Perpetual learner.",
  subTagline:
    "Studying Industrial Engineering at RIT Dubai — with a love for math, languages, and building things that actually work.",
  location: "Dubai, UAE",
  email: "bb4541@rit.edu",
  linkedin: "https://www.linkedin.com/in/basel-bader-eddin-a9bb02219/",
  github: "https://github.com/basel-wbd", // ← paste GitHub URL here; leave empty to hide button
  resumePdfPath: "/Basel CV.pdf", // ← drop your CV PDF in /public/resume.pdf
  headshot: "", // ← paste image path e.g. "/headshot.jpg"; leave empty to hide
  siteUrl: "https://baselbadereddin.dev", // ← for OG tags
};

// ── Theme ─────────────────────────────────────────────────────
export const theme = {
  accentMode: "green" as "neutral" | "green", // "neutral" = grays only
};

// ── Section toggles ───────────────────────────────────────────
export const sections = {
  hero: true,
  about: true,
  skills: true,
  experience: true,
  projects: true,
  education: true,
  achievements: true,
  contact: true,
};

// ── About ─────────────────────────────────────────────────────
export const about = {
  paragraphs: [
    "I'm a first-year Industrial Engineering student at RIT Dubai, drawn to the discipline because it sits at the intersection of systems, people, and data. IE isn't about building machines — it's about making complex systems work better, and that kind of thinking shows up everywhere I look.",
    "Outside of coursework I've worked as a chemistry tutoring assistant, helped coordinate finance for a Model UN conference, and spent more hours than I'll admit at a piano. I'm also learning German (B1 and climbing), and I find that studying a language is surprisingly good training for systems thinking.",
    "I'm comfortable with Excel, Google Sheets, Python, C++, and HTML/CSS — and I treat every new tool as something to learn rather than something to fear. Currently exploring data analysis pipelines and process-improvement workflows.",
  ],
};

// ── Skills ────────────────────────────────────────────────────
export interface SkillGroup {
  category: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    category: "Analytical",
    items: [
      "Systems thinking",
      "Process optimization",
      "Data-driven decisions",
      "Problem decomposition",
      "Quantitative reasoning",
    ],
  },
  {
    category: "Tools",
    items: [
      "Microsoft Excel",
      "Google Sheets",
      "MATLAB (basic)",
      "Google Workspace",
    ],
  },
  {
    category: "Programming",
    items: ["Python", "C++", "HTML / CSS", "Rust (learning)"],
  },
  {
    category: "Leadership",
    items: [
      "Conference coordination",
      "Stakeholder communication",
      "Finance tracking",
      "Team collaboration",
    ],
  },
  {
    category: "Languages",
    items: ["English (fluent)", "German (B1)", "Arabic (intermediate)"],
  },
];

// ── Experience ────────────────────────────────────────────────
export interface ExperienceEntry {
  role: string;
  org: string;
  period: string;
  location: string;
  bullets: string[];
}

export const experience: ExperienceEntry[] = [
  {
    role: "Finance Coordinator",
    org: "RITMUN (RIT Model United Nations)",
    period: "Sep 2025 – Present",
    location: "Dubai, UAE",
    bullets: [
      "Manage budgeting and financial tracking for a multi-committee MUN conference.",
      "Coordinate payment collection and expense reconciliation using spreadsheets.",
      "Liaise between the organizing committee and external stakeholders on financial matters.",
      "Draft financial reports and ensure accurate record-keeping throughout the conference cycle.",
    ],
  },
  {
    role: "Assistant to Chemistry Tutor",
    org: "Dr. Nervana ElKhadragy",
    period: "Aug 2024 – Present",
    location: "Remote",
    bullets: [
      "Support one-on-one tutoring sessions by preparing practice materials and answer keys.",
      "Track student progress using a custom-built Google Sheets workflow (see Projects).",
      "Coordinate session scheduling and follow-up communication with students.",
      "Assist in simplifying complex chemistry concepts for secondary-level learners.",
    ],
  },
];

// ── Projects ──────────────────────────────────────────────────
export type ProjectStatus =
  | "Live"
  | "In Progress"
  | "Planned"
  | "Completed";

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  title: string;
  year: string;
  status: ProjectStatus;
  problem: string;
  solution: string;
  tools: string[];
  outcomes: string[];
  links: ProjectLink[];
}

export const projects: Project[] = [
  {
    title: "Chemistry Progress Tracking System",
    year: "2024",
    status: "Live",
    problem:
      "Student progress across multiple tutoring sessions was tracked inconsistently, making it hard to identify gaps or measure improvement over time.",
    solution:
      "Built a structured Google Sheets workflow with per-student score logs, topic tagging, and auto-calculated trend indicators. Added a follow-up checklist to surface at-risk topics before each session.",
    tools: ["Google Sheets", "Excel", "Google Forms"],
    outcomes: [
      "Reduced session-prep time by ~30% through automated summaries.",
      "Gave the tutor a single-source view of every student's weak topics.",
      "Adopted as the standard workflow for the tutoring practice.",
    ],
    links: [],
  },
  {
    title: "Personal Finance Dashboard",
    year: "2025",
    status: "In Progress",
    problem:
      "Wanted a clean, offline-capable way to track monthly spending without sharing data with a third-party app.",
    solution:
      "Building a local Python + CSV pipeline with a simple dashboard view. Exploring Pandas for trend analysis.",
    tools: ["Python", "Pandas", "CSV", "Matplotlib"],
    outcomes: [],
    links: [],
  },
  {
    title: "RIT Dubai Timetable Optimizer",
    year: "2026",
    status: "Planned",
    problem:
      "Course scheduling at RIT Dubai involves many constraints (prerequisites, room capacity, student preferences). Manual scheduling is time-consuming and often suboptimal.",
    solution:
      "Plan to model the problem as a constraint satisfaction problem and experiment with heuristic solvers. Will validate against historical schedules.",
    tools: ["Python", "OR-Tools (planned)", "Excel"],
    outcomes: [],
    links: [],
  },
  {
    title: "MUN Finance Tracker",
    year: "2025",
    status: "In Progress",
    problem:
      "RITMUN's financial tracking relied on informal spreadsheets with no audit trail or version control.",
    solution:
      "Designing a structured Google Sheets system with payment status tracking, automated balance calculations, and a shared read-only view for the committee head.",
    tools: ["Google Sheets", "Google Forms", "Apps Script (planned)"],
    outcomes: [],
    links: [],
  },
  {
    title: "Language Learning Spaced Repetition CLI",
    year: "2026",
    status: "Planned",
    problem:
      "Existing SRS apps don't let me fully control my German vocabulary decks or integrate with my own notes.",
    solution:
      "Plan to build a minimal CLI tool in Python (or Rust) that implements a simple SM-2 algorithm over plain-text card files.",
    tools: ["Python", "Rust (planned)", "JSON"],
    outcomes: [],
    links: [],
  },
];

// ── Education ─────────────────────────────────────────────────
export interface EducationEntry {
  degree: string;
  institution: string;
  location: string;
  period: string;
  gpa?: string;
  coursework: string[];
}

export const education: EducationEntry[] = [
  {
    degree: "B.S. Industrial Engineering",
    institution: "Rochester Institute of Technology (RIT Dubai)",
    location: "Dubai, UAE",
    period: "Expected May 2030",
    coursework: [
      "Engineering Analysis",
      "Probability & Statistics for Engineers",
      "Operations Research",
      "Manufacturing Processes",
      "Quality Control & Reliability",
      "Human Factors Engineering",
      "Supply Chain Management",
      "Linear Algebra",
      "Engineering Economics",
      "Computer-Aided Design",
    ],
  },
];

// ── Achievements ──────────────────────────────────────────────
export interface Achievement {
  title: string;
  detail: string;
  year: string;
}

export const achievements: Achievement[] = [
  {
    title: "Dean's List Award",
    detail:
      "Achieved Dean's List status in Fall 2025 semester (First semester) with a CGPA of 3.75.",
    year: "2025",
  },
  {
    title: "A-Level Academic Distinction",
    detail:
      "Achieved three A grades at A-level, awarded the Academic Distinction award (2024).",
    year: "2024",
  },
];

// ── Contact ───────────────────────────────────────────────────
export const contact = {
  heading: "Let's connect.",
  body: "I'm always happy to talk engineering, side projects, or anything in between. The best way to reach me is by email.",
  showMailtoForm: true, // set false to hide the mailto button
};
