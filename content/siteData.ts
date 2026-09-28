// ─────────────────────────────────────────────────────────────
//  siteData.ts — ALL content lives here. Edit this file only.
// ─────────────────────────────────────────────────────────────

// ── Meta ──────────────────────────────────────────────────────
export const meta = {
	name: "Basel BaderEddin",
	title: "Industrial Engineering · RIT Dubai",
	tagline:
		"Industrial engineering student working at the intersection of operations, finance, and systems.",
	location: "Dubai, UAE",
	email: "bb4541@rit.edu",
	linkedin: "https://www.linkedin.com/in/basel-bader-eddin-a9bb02219/",
	github: "https://github.com/basel-wbd", // leave empty to hide
	resumePdfPath: "/Basel_BaderEddin_CV.pdf", // file lives in /public
	siteUrl: "https://baselbadereddin.vercel.app", // for OG tags
};

// ── Section toggles ───────────────────────────────────────────
export const sections = {
	hero: true,
	highlights: true,
	skills: true,
	about: true,
	contact: true,
};

// ── Hero ──────────────────────────────────────────────────────
export const hero = {
	eyebrow: "Industrial Engineering · RIT Dubai",
	statement:
		"I turn ambiguous problems into structured systems — managing real budgets, winning case competitions, and shipping work for paying clients.",
	proof: ["CGPA 3.79", "Dean's List", "SAT 1550"],
	facts: [
		{ label: "Focus", value: "Operations research · Quantitative finance · Systems engineering · Consulting" },
		{ label: "Currently", value: "Finance Director, RIT Dubai Student Government" },
		{ label: "Based in", value: "Dubai, UAE" },
	],
};

// ── Highlights (case studies) ─────────────────────────────────
export interface Metric {
	value: string;
	label: string;
}

export interface CaseStudy {
	title: string;
	context: string; // org · period
	metrics: Metric[];
	problem: string;
	action: string;
	outcome: string;
	tags: string[];
	link?: { label: string; href: string };
}

export const caseStudies: CaseStudy[] = [
	{
		title: "Running a six-figure student government budget",
		context: "Finance Director · RIT Dubai Student Government · 2026 – present",
		metrics: [
			{ value: "6-figure", label: "annual budget (AED)" },
			{ value: "~30", label: "club treasurers" },
		],
		problem:
			"Nearly 30 student clubs draw on a single annual budget. Allocations, approvals, and reporting have to be fair, fast, and able to stand up to scrutiny.",
		action:
			"I oversee the full budget cycle — allocations, approvals, and financial reporting — and coordinate the treasurers of every club. I built the tracking and reporting structures that everything now runs through.",
		outcome:
			"Club spending is traceable end-to-end, giving student government a transparent, auditable basis for decisions across the whole organisation.",
		tags: ["Budgeting", "Financial reporting", "Stakeholder management"],
	},
	{
		title: "Launching a web presence for a UAE travel business",
		context: "Freelance engagement · Lucky Holiday Tourism",
		metrics: [
			{ value: "End-to-end", label: "scoping to launch" },
			{ value: "Live", label: "in production" },
		],
		problem:
			"Lucky Holiday Tourism, a UAE travel SME, needed a credible online presence that presents its packages clearly and turns visitors into enquiries.",
		action:
			"I ran the engagement solo: gathered requirements with the business, designed and built a complete landing page, and handled deployment.",
		outcome:
			"The site went live in July with a near-immediate turnaround from sign-off, and is in production today.",
		tags: ["Client delivery", "Requirements", "Web development"],
		link: { label: "luckyholidaytourism.com", href: "https://luckyholidaytourism.com" },
	},
	{
		title: "Designing an ERP/CRM system — 1st place",
		context: "Odoo ERP/CRM Case Competition · Team of 3 · Fall 2025",
		metrics: [
			{ value: "1st", label: "of six teams" },
			{ value: "Freshman", label: "team lead" },
		],
		problem:
			"A case-study company needed its sales and operations processes mapped onto a single ERP/CRM system.",
		action:
			"I led a team of three first-year students to analyse the company's processes, design an Odoo-based ERP/CRM solution, and present it to judges.",
		outcome:
			"Won first place against five teams made up mostly of upperclassmen.",
		tags: ["Systems design", "Process mapping", "ERP/CRM"],
	},
	{
		title: "Implied volatility surface plotter",
		context: "Independent project · 2026",
		metrics: [
			{ value: "3D", label: "volatility surfaces" },
			{ value: "Python", label: "NumPy · SciPy" },
		],
		problem:
			"Option prices imply a volatility, but the Black-Scholes formula has no closed-form inverse — it has to be solved numerically.",
		action:
			"I built a Python tool that inverts Black-Scholes prices with bisection root-finding across strikes and maturities, then renders the result as a 3D surface.",
		outcome:
			"A reusable pipeline that makes volatility smiles and skews visible — and a working foundation for further options analysis.",
		tags: ["Quantitative finance", "Numerical methods", "Python"],
	},
];

// ── Skills ────────────────────────────────────────────────────
export interface SkillGroup {
	category: string;
	items: string[];
}

export const skills: SkillGroup[] = [
	{
		category: "Analytical",
		items: [
			"Problem structuring",
			"Quantitative reasoning",
			"Process improvement",
			"Budgeting & financial reporting",
		],
	},
	{
		category: "Programming",
		items: [
			"Python — NumPy, SciPy, Pandas",
			"C++",
			"MATLAB",
			"Rust",
		],
	},
	{
		category: "Web",
		items: ["Next.js", "Tailwind CSS", "HTML / CSS", "Vercel"],
	},
	{
		category: "Languages",
		items: ["Arabic — native", "English — fluent", "German — B1"],
	},
];

// ── About ─────────────────────────────────────────────────────
export const about = {
	paragraphs: [
		"I'm a second-year Industrial Engineering student at RIT Dubai. The five-year B.S. includes a mandatory co-op year and an economics immersion — a combination of systems modelling, statistics, and economics that points directly at the work I want to do: operations research, quantitative finance, systems engineering, and consulting.",
		"Outside the classroom I manage money and people. Alongside student government, I'm Finance Coordinator for RITMUN, and I've trained Model UN delegates and chaired the ILO committee (2025).",
	],
};

// ── Education ─────────────────────────────────────────────────
export const education = {
	degree: "B.S. Industrial Engineering",
	institution: "Rochester Institute of Technology — Dubai",
	period: "Expected May 2030",
	facts: [
		{ label: "CGPA", value: "3.79 / 4.0" },
		{ label: "Dean's List", value: "Both semesters, first year" },
		{ label: "SAT", value: "1550" },
	],
	coursework: [
		"Probability & Statistics",
		"Calculus",
		"Engineering Design",
		"Programming for Engineers",
	],
};

// ── Contact ───────────────────────────────────────────────────
export const contact = {
	heading: "Let's talk.",
	body: "I'm open to co-op and internship conversations in operations, finance, systems engineering, and consulting. Email is the fastest way to reach me.",
};
