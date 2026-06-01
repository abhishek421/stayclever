import {
  Brain,
  Workflow,
  Bot,
  LineChart,
  Boxes,
  type LucideIcon,
} from "lucide-react";

/* ----------------------------------------------------------------
   SERVICES
----------------------------------------------------------------- */
export type Service = {
  slug: string;
  index: string;
  title: string;
  icon: LucideIcon;
  tagline: string;
  proof: string;
  description: string;
  problem: string;
  solution: string;
  benefits: string[];
  useCases: string[];
  process: string[];
};

export const services: Service[] = [
  {
    slug: "ai-strategy-consulting",
    index: "01",
    title: "AI Strategy & Planning",
    icon: Brain,
    tagline: "Know exactly where AI will pay off — before you spend a dollar.",
    proof: "Clear plan in 2–3 weeks",
    description:
      "The deeper, company-wide version of our discovery. Over 2–3 weeks we map how your whole business runs, score where AI pays off, and build a prioritized 12-month plan with the expected return for each move. (Want a faster, single-day start? See A Day With the Founder.)",
    problem:
      "You know AI could help, but there's too much noise. It's hard to tell what's real, what's worth the money, and where to even start.",
    solution:
      "We review your day-to-day work and the data you already have, then hand you a short, prioritized plan — what to do first, what it will cost, and what you'll get back.",
    benefits: [
      "A clear return estimate for each idea",
      "An honest read on whether your data is ready",
      "We tell you what to build vs. what to buy",
      "A plan your whole team can follow — in 2–3 weeks",
    ],
    useCases: [
      "Find your best AI opportunities",
      "Check if your data and tools are ready",
      "Set simple rules for safe, responsible AI",
      "Get a 12-month plan you can act on",
    ],
    process: ["Learn how you work", "Spot the best opportunities", "Estimate the return", "Hand you the plan"],
  },
  {
    slug: "workflow-automation",
    index: "02",
    title: "Workflow Automation & AI Agents",
    icon: Workflow,
    tagline: "Take the busywork off your team — and let software finish whole jobs.",
    proof: "Tasks done 10x faster",
    description:
      "We automate the repetitive, predictable tasks that eat your team's day — and for the work that needs judgment, we build AI agents that complete whole multi-step jobs end to end. Everything connects to the tools you already use, so there's no rip-and-replace.",
    problem:
      "Your team wastes hours on manual handoffs, approvals, and data entry across disconnected tools — and it only gets worse as you grow.",
    solution:
      "We connect your apps and automate the predictable steps, then add AI agents for the tasks that need decisions — with people in control where it matters.",
    benefits: [
      "Tasks finished in seconds, not hours",
      "Whole jobs completed, not just started",
      "Works with the tools you already use",
      "Handle more work without hiring",
    ],
    useCases: [
      "Sorting and routing leads",
      "Invoice and document processing",
      "Onboarding and approvals",
      "Research, follow-up, and data cleanup",
    ],
    process: ["Map the work", "Automate the predictable steps", "Add agents where judgment's needed", "Watch and improve"],
  },
  {
    slug: "ai-chatbots-assistants",
    index: "03",
    title: "AI Chat & Voice Assistants",
    icon: Bot,
    tagline: "Answer every customer in seconds — by chat or by phone, day or night.",
    proof: "80% faster replies",
    description:
      "Friendly assistants trained on your business that answer questions, capture leads, and book meetings — over chat or over the phone, around the clock. Calls and messages never go unanswered.",
    problem:
      "Customers hate waiting, your team repeats the same answers hundreds of times a week, and after-hours calls and messages slip away.",
    solution:
      "We build assistants that know your business, answer in your tone over chat and voice, and hand tricky cases to a real person when needed.",
    benefits: [
      "80% faster first reply",
      "Never miss a call or message — 24/7",
      "Happier customers, fewer tickets",
      "Smooth handover to your team",
    ],
    useCases: [
      "Answer common customer questions",
      "Qualify and capture new leads",
      "Handle inbound support calls",
      "Book meetings and appointments",
    ],
    process: ["Learn your business", "Set the guardrails", "Add chat and voice channels", "Improve from real conversations"],
  },
  {
    slug: "predictive-analytics",
    index: "04",
    title: "Predictive Analytics",
    icon: LineChart,
    tagline: "See what's coming before it costs you.",
    proof: "Spot churn & fraud early",
    description:
      "We turn the data you already have into clear forecasts — what customers will do, what you'll sell, and what to watch out for — so you can plan ahead.",
    problem:
      "Big decisions get made on gut feel because the useful information is buried in spreadsheets nobody has time to dig through.",
    solution:
      "We build simple forecasts and alerts for things like demand, customer loss, and unusual activity — and put them right inside the tools you already use.",
    benefits: [
      "More accurate forecasts",
      "Early warning on customers about to leave",
      "Smarter stock and spending",
      "Answers in your dashboard, not a slide deck",
    ],
    useCases: [
      "Forecast sales and demand",
      "Predict which customers may leave",
      "Catch fraud and unusual activity",
      "Make smarter pricing decisions",
    ],
    process: ["Check your data", "Find the signals", "Build and test", "Put it to work"],
  },
  {
    slug: "custom-ai-solutions",
    index: "05",
    title: "Custom AI Solutions",
    icon: Boxes,
    tagline: "When off-the-shelf tools just don't fit.",
    proof: "You own it — fully",
    description:
      "Some problems are unique to your business. We design and build AI made just for you — around your data and the way you actually work.",
    problem:
      "Your hardest challenges are specific to you. Generic software forces you to work its way and throws away the edge that makes you different.",
    solution:
      "We build AI that fits your business exactly — tested, reliable, and handed over so it's truly yours.",
    benefits: [
      "Built around what makes you different",
      "Uses your own data",
      "Reliable and looked after",
      "You own it completely",
    ],
    useCases: [
      "A tool built around your unique process",
      "Smart search across your own content",
      "A model trained on your proprietary data",
      "Something no off-the-shelf product offers",
    ],
    process: ["Agree the goal", "Build a working version", "Get it production-ready", "Hand it over with support"],
  },
];

/* ----------------------------------------------------------------
   SIGNATURE OFFER — "A Day With the Founder"
   The flagship, founder-led discovery day. Sits between the free AI
   Plan and a full build engagement — the main conversion bridge.
----------------------------------------------------------------- */
export const founderDay = {
  eyebrow: "Signature offer",
  name: "A Day With the Founder",
  tagline: "One day. Your whole business. A clear plan for what AI should do first.",
  intro:
    "Our founder spends a full day inside your business — watching how work actually happens, sitting with your team, and spotting the tasks quietly eating your time and money. You finish the day knowing exactly what to automate first, and what it's worth.",
  steps: [
    {
      time: "Morning",
      title: "Walk the business",
      description: "We shadow how work really flows — where things get handed off, stuck, or re-typed.",
    },
    {
      time: "Midday",
      title: "Find the leaks",
      description: "We pinpoint the repetitive tasks, slow bottlenecks, and missed opportunities costing you the most.",
    },
    {
      time: "Afternoon",
      title: "Match problems to AI",
      description: "Every problem gets matched to a solution and ranked by value versus effort.",
    },
    {
      time: "End of day",
      title: "Live readout",
      description: "You see the shortlist and the quick wins before we leave — no waiting, no mystery.",
    },
  ],
  deliverable: {
    title: "Your AI Action Plan",
    turnaround: "48h",
    description:
      "Within 48 hours you get a written plan: your best AI opportunities, the one or two quick wins to start now, rough return on each, and exactly what to build first.",
  },
  highlights: [
    "A full day with the founder — not an account manager",
    "On-site, or a full day virtual — your call",
    "A clear, ranked plan you own and can act on",
    "Fixed fee, credited back in full if we build together within 30 days",
  ],
  pricing: "Fixed fee — credited 100% toward any project you start within 30 days. No risk if we end up working together.",
};

/* ----------------------------------------------------------------
   DISCOVERY LADDER — three ways to start, from light to deep, so the
   free AI Plan, the founder day, and the strategy engagement read as
   rungs on one ladder instead of competing offers.
----------------------------------------------------------------- */
export const discoveryLadder = [
  {
    step: "Start free",
    title: "Free AI Plan",
    description: "A quick, remote look at a few high-value ideas. No cost, no commitment.",
    href: "/contact",
    featured: false,
  },
  {
    step: "Go deeper",
    title: "A Day With the Founder",
    description: "One paid, founder-led day — on-site or virtual. You leave with a full action plan.",
    href: "#day-with-founder",
    featured: true,
  },
  {
    step: "Scale up",
    title: "AI Strategy & Planning",
    description: "A multi-week, company-wide roadmap for larger or org-wide rollouts.",
    href: "#ai-strategy-consulting",
    featured: false,
  },
];

/* ----------------------------------------------------------------
   INDUSTRIES
----------------------------------------------------------------- */
export type Application = { title: string; detail: string };

export type Industry = {
  slug: string;
  name: string;
  blurb: string;
  applications: Application[];
  outcome: string;
  caseStudySlug?: string;
};

export const industries: Industry[] = [
  {
    slug: "d2c",
    name: "D2C",
    blurb: "Turn one-time buyers into repeat customers with AI across your store.",
    applications: [
      { title: "Personalized recommendations", detail: "Show each shopper the products they're most likely to buy — on your site and in email." },
      { title: "Support automation", detail: "Answer order, shipping, and returns questions instantly, day or night." },
      { title: "Retention forecasting", detail: "Spot customers about to drift away so you can win them back in time." },
      { title: "Creative testing", detail: "Create and test ad and email ideas faster to find what actually sells." },
    ],
    outcome: "45% increase in repeat orders",
    caseStudySlug: "d2c-orders-lift",
  },
  {
    slug: "retail",
    name: "Retail",
    blurb: "Keep the right stock on shelves and give every shopper a better experience.",
    applications: [
      { title: "Demand forecasting", detail: "Predict what will sell so you avoid both empty shelves and dead stock." },
      { title: "Inventory optimization", detail: "Move stock to where it's needed across stores and warehouses, automatically." },
      { title: "In-store assistants", detail: "Give staff and shoppers instant answers on stock, specs, and alternatives." },
      { title: "Smarter pricing", detail: "Use demand and competitor signals to set better prices." },
    ],
    outcome: "30% lower stockouts",
  },
  {
    slug: "fintech",
    name: "FinTech",
    blurb: "Catch risk in real time and take the grind out of compliance work.",
    applications: [
      { title: "Fraud detection", detail: "Spot risky transactions instantly — without slowing down honest customers." },
      { title: "KYC automation", detail: "Verify customers and documents in seconds, flagging only the real exceptions." },
      { title: "Credit scoring", detail: "Make fairer, faster lending decisions using more than just rigid rules." },
      { title: "Support copilots", detail: "Help your team reply accurately and stay compliant." },
    ],
    outcome: "70% reduction in fraud losses",
    caseStudySlug: "fintech-fraud-reduction",
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    blurb: "Cut the paperwork and answer patients faster — safely and within the rules.",
    applications: [
      { title: "Intake automation", detail: "Collect and organize patient details before the first visit." },
      { title: "Patient support agents", detail: "Answer common questions and pass urgent ones to staff, with clinician oversight." },
      { title: "Documentation assist", detail: "Draft notes and summaries so clinicians spend less time typing." },
      { title: "Triage routing", detail: "Send each case to the right team automatically." },
    ],
    outcome: "80% faster patient response",
    caseStudySlug: "healthcare-support-speed",
  },
  {
    slug: "saas",
    name: "SaaS",
    blurb: "Help users succeed, cut support tickets, and keep customers longer.",
    applications: [
      { title: "In-product copilots", detail: "Help users get value inside your product without opening a ticket." },
      { title: "Churn prediction", detail: "Spot accounts at risk of leaving before they cancel." },
      { title: "Support deflection", detail: "Answer common questions in-app and reduce ticket volume." },
      { title: "Onboarding automation", detail: "Guide new users to their first win automatically." },
    ],
    outcome: "2x activation rate",
  },
  {
    slug: "logistics",
    name: "Logistics",
    blurb: "Plan smarter routes, predict delays, and handle problems before they grow.",
    applications: [
      { title: "Route optimization", detail: "Plan routes that cut miles, fuel, and delivery time." },
      { title: "ETA prediction", detail: "Give customers accurate arrival times and flag delays early." },
      { title: "Exception automation", detail: "Catch and fix shipment problems before they escalate." },
      { title: "Document processing", detail: "Pull data from shipping and customs paperwork automatically." },
    ],
    outcome: "25% lower delivery costs",
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    blurb: "Answer and qualify leads around the clock and speed up paperwork-heavy deals.",
    applications: [
      { title: "Lead qualification agents", detail: "Answer and qualify new leads any time, and book viewings." },
      { title: "Document automation", detail: "Draft and review contracts and disclosures in minutes." },
      { title: "Valuation models", detail: "Estimate value and rent from comparable properties and market data." },
      { title: "Tenant support", detail: "Handle maintenance and leasing questions instantly." },
    ],
    outcome: "3x qualified leads",
  },
  {
    slug: "professional-services",
    name: "Professional Services",
    blurb: "Automate research, drafting, and admin so you bill more of the hours you work.",
    applications: [
      { title: "Research agents", detail: "Gather and summarize information so your time goes to the thinking." },
      { title: "Drafting assistants", detail: "Produce first drafts of memos, proposals, and reports." },
      { title: "Knowledge search", detail: "Find answers across your firm's documents in seconds." },
      { title: "Billing automation", detail: "Capture time and build invoices with less lost revenue." },
    ],
    outcome: "20+ hours saved per week",
  },
];

/* ----------------------------------------------------------------
   CASE STUDIES
----------------------------------------------------------------- */
export type CaseStudy = {
  slug: string;
  client: string;
  industry: string;
  headline: string;
  summary: string;
  metric: { value: string; label: string; direction: "up" | "down" };
  kpis: { value: string; label: string }[];
  challenge: string;
  approach: string;
  implementation: string;
  results: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "d2c-orders-lift",
    client: "D2C skincare brand",
    industry: "D2C",
    headline: "45% more repeat orders for a fast-growing D2C brand",
    summary:
      "We added personalized product recommendations and an instant support assistant — and turned one-time buyers into loyal, repeat customers.",
    metric: { value: "45%", label: "Repeat orders", direction: "up" },
    kpis: [
      { value: "+45%", label: "Repeat orders" },
      { value: "-38%", label: "Support tickets" },
      { value: "6 wks", label: "Time to launch" },
      { value: "4.7x", label: "Return in year one" },
    ],
    challenge:
      "The brand was great at winning new customers, but most never came back — and the support team couldn't keep up with the growth.",
    approach:
      "We looked at what happened after each purchase, found where customers dropped off, and focused on two fixes: better recommendations and instant support.",
    implementation:
      "Personalized recommendations on the website and in email, plus a support assistant connected to their help desk and order system.",
    results:
      "Repeat orders rose 45% in two quarters, support tickets fell 38%, and the project paid for itself nearly five times over in the first year.",
  },
  {
    slug: "fintech-fraud-reduction",
    client: "US fintech startup",
    industry: "FinTech",
    headline: "70% fewer fraud losses with real-time checks",
    summary:
      "A real-time scoring system flags risky transactions in milliseconds — cutting fraud without slowing down honest customers.",
    metric: { value: "70%", label: "Fraud losses", direction: "down" },
    kpis: [
      { value: "-70%", label: "Fraud losses" },
      { value: "<80ms", label: "Decision speed" },
      { value: "-22%", label: "False alarms" },
      { value: "24/7", label: "Coverage" },
    ],
    challenge:
      "Their old rule-based checks were both too slow and too blunt — letting fraud through while blocking real customers.",
    approach:
      "We studied their transaction history to find the patterns that signal fraud, then built a system that scores every transaction instantly.",
    implementation:
      "A real-time scoring check built into the payment flow, with a review queue and feedback loop so the team keeps it sharp.",
    results:
      "Fraud losses dropped 70% and false alarms fell 22% — all while keeping checkout fast and smooth.",
  },
  {
    slug: "healthcare-support-speed",
    client: "Multi-clinic healthcare network",
    industry: "Healthcare",
    headline: "80% faster patient replies across a multi-clinic network",
    summary:
      "An intake and support assistant routes patients instantly and drafts replies for staff to approve.",
    metric: { value: "80%", label: "Faster response", direction: "up" },
    kpis: [
      { value: "80%", label: "Faster response" },
      { value: "-55%", label: "Admin time" },
      { value: "12k", label: "Patients/month" },
      { value: "HIPAA", label: "Compliant" },
    ],
    challenge:
      "Front-desk teams were swamped, patients waited days for answers, and clinicians lost time to paperwork.",
    approach:
      "We mapped how patients get help, then designed an assistant with staff approving every message that reaches a patient.",
    implementation:
      "A triage and drafting assistant connected to their scheduling system, with strict safety rules and full record-keeping.",
    results:
      "Patient replies came 80% faster and admin time dropped 55%, giving staff more time for actual care.",
  },
];

/* ----------------------------------------------------------------
   STATS
----------------------------------------------------------------- */
export type Stat = {
  value?: number;
  suffix?: string;
  display?: string; // non-counting label (e.g. "24/7")
  note?: string; // qualifier shown before the value (e.g. "up to")
  label: string;
};

export const stats: Stat[] = [
  { value: 50, suffix: "+", label: "Projects delivered" },
  { value: 10, suffix: "x", note: "up to", label: "Faster everyday tasks" },
  { display: "24/7", label: "Always-on automation" },
  { value: 99, suffix: "%", label: "Reliable and consistent" },
];

/* ----------------------------------------------------------------
   PROCESS
----------------------------------------------------------------- */
export const processSteps = [
  {
    no: "01",
    title: "Discover",
    description:
      "We get to know your business, your data, and your goals — and find where AI will save the most time or money.",
  },
  {
    no: "02",
    title: "Plan",
    description:
      "We rank the best ideas by return and risk, and lay out a simple plan you and your team can get behind.",
  },
  {
    no: "03",
    title: "Build",
    description:
      "We build and launch your solution with safety checks and monitoring built in from day one.",
  },
  {
    no: "04",
    title: "Grow",
    description:
      "We measure the results, expand what works, and hand you something your team can run and grow on their own.",
  },
];

/* ----------------------------------------------------------------
   TESTIMONIALS
----------------------------------------------------------------- */
export const testimonials = [
  {
    quote:
      "StayClever didn't sell us hype. They found three tasks that were quietly costing us a fortune and automated them in a month. By week six, the payoff was obvious.",
    name: "Maya Chen",
    role: "Founder & CEO",
    company: "D2C skincare brand",
  },
  {
    quote:
      "The fraud system paid for the whole project in the first quarter. What impressed me most was how carefully they avoided blocking real customers.",
    name: "David Osei",
    role: "Head of Risk",
    company: "US fintech startup",
  },
  {
    quote:
      "They understood our world from day one — careful, compliant, and genuinely fast. Our staff actually trust the system.",
    name: "Dr. Priya Nair",
    role: "Operations Director",
    company: "Healthcare network",
  },
  {
    quote:
      "We'd been burned by AI vendors before. StayClever shipped something real, measured it honestly, and handed it over cleanly.",
    name: "Tomás Rivera",
    role: "VP Engineering",
    company: "B2B software company",
  },
];

/* ----------------------------------------------------------------
   INSIGHTS
----------------------------------------------------------------- */
export type Insight = {
  slug: string;
  title: string;
  category: "AI Strategy" | "Automation" | "AI Agents" | "Industry Trends" | "Case Studies";
  excerpt: string;
  readTime: string;
  date: string;
  author: string;
};

export const insightCategories = [
  "AI Strategy",
  "Automation",
  "AI Agents",
  "Industry Trends",
  "Case Studies",
] as const;

export const insights: Insight[] = [
  {
    slug: "ai-roi-before-you-build",
    title: "How to know if an AI project is worth it — before you build",
    category: "AI Strategy",
    excerpt:
      "A simple way to size up the value of an AI idea, so you back the right ones and drop the rest early.",
    readTime: "8 min read",
    date: "May 18, 2026",
    author: "StayClever Team",
  },
  {
    slug: "automation-that-survives-scale",
    title: "How to automate your work so it still holds up when you grow",
    category: "Automation",
    excerpt:
      "The choices that decide whether your automation breaks under pressure or quietly saves you more every month.",
    readTime: "6 min read",
    date: "May 9, 2026",
    author: "StayClever Team",
  },
  {
    slug: "agents-vs-copilots",
    title: "Do you need an AI that acts, or one that just suggests?",
    category: "AI Agents",
    excerpt:
      "Not every task needs a fully automated assistant. Here's a simple way to choose the right level of help.",
    readTime: "7 min read",
    date: "April 28, 2026",
    author: "StayClever Team",
  },
  {
    slug: "d2c-ai-playbook",
    title: "The D2C guide to AI: why keeping customers beats chasing new ones",
    category: "Industry Trends",
    excerpt:
      "Where AI gives consumer brands the biggest wins — and the numbers that actually move your bottom line.",
    readTime: "9 min read",
    date: "April 14, 2026",
    author: "StayClever Team",
  },
  {
    slug: "fraud-scoring-case",
    title: "Inside a 70% drop in fraud: what made it work",
    category: "Case Studies",
    excerpt:
      "A behind-the-scenes look at the data and safeguards behind one of our most impactful projects.",
    readTime: "10 min read",
    date: "March 30, 2026",
    author: "StayClever Team",
  },
  {
    slug: "data-readiness-checklist",
    title: "Is your data ready for AI? Run this checklist first",
    category: "AI Strategy",
    excerpt:
      "Before you build anything, run this quick check. It's the difference between a flashy demo and something you can trust.",
    readTime: "5 min read",
    date: "March 16, 2026",
    author: "StayClever Team",
  },
];

/* ----------------------------------------------------------------
   ABOUT
----------------------------------------------------------------- */
export const values = [
  {
    title: "Outcomes over hype",
    description:
      "We measure success in things you care about — money saved, time back, revenue up — not technical jargon or buzzwords.",
  },
  {
    title: "Pragmatic, not flashy",
    description:
      "We build the smallest thing that creates real value, then grow it. No science experiments, no vendor lock-in.",
  },
  {
    title: "Safety by default",
    description:
      "Safety checks, human oversight, and clear records come standard — especially in regulated industries.",
  },
  {
    title: "You own the outcome",
    description:
      "We hand over clean, documented systems and show your team how to run them. You're never stuck depending on us.",
  },
];

export const timeline = [
  { year: "2021", title: "The idea", text: "Started with one belief: most businesses don't need more AI hype — they need fewer wasted hours." },
  { year: "2022", title: "First wins", text: "Built our first automations for small businesses, proving real returns in weeks, not quarters." },
  { year: "2023", title: "Going deeper", text: "Took on harder problems — forecasting and custom AI — as clients trusted us with more." },
  { year: "2024", title: "AI that acts", text: "Built our first AI assistants that complete real work, not just suggest it." },
  { year: "2026", title: "50+ projects", text: "Now working with startups, small businesses, and D2C brands across eight industries worldwide." },
];

export const team = [
  { name: "Founder & Principal", role: "AI Strategy" },
  { name: "Head of Engineering", role: "Custom AI & Agents" },
  { name: "Lead Data Scientist", role: "Predictive Analytics" },
  { name: "Automation Lead", role: "Workflow & Integrations" },
  { name: "Design & UX Lead", role: "Product & Interfaces" },
  { name: "Delivery Lead", role: "Client Success" },
];
