import {
  Brain,
  Workflow,
  Bot,
  LineChart,
  Boxes,
  Plug,
  Cpu,
  AudioLines,
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
    title: "AI Strategy & Consulting",
    icon: Brain,
    tagline: "A pragmatic roadmap, not a science project.",
    proof: "Roadmap in 2–3 weeks",
    description:
      "We map your operations, find where AI creates measurable leverage, and build a prioritized roadmap tied to ROI.",
    problem:
      "Most teams know AI matters but can't tell which use cases are real, fundable, and safe to ship.",
    solution:
      "A structured audit of workflows, data readiness, and risk — turned into a sequenced roadmap with business cases for each initiative.",
    benefits: [
      "Clear ROI model per initiative",
      "Data-readiness & risk assessment",
      "Build vs. buy decisions made for you",
      "Executive-ready roadmap in 2–3 weeks",
    ],
    useCases: [
      "AI opportunity audit",
      "Data & tooling readiness review",
      "Governance & compliance framework",
      "12-month adoption roadmap",
    ],
    process: ["Discover operations", "Score opportunities", "Model ROI", "Sequence roadmap"],
  },
  {
    slug: "workflow-automation",
    index: "02",
    title: "Workflow Automation",
    icon: Workflow,
    tagline: "Remove the busywork that drains your team.",
    proof: "10x faster cycle times",
    description:
      "We automate repetitive, multi-step processes across your stack so people focus on judgment, not data entry.",
    problem:
      "Manual handoffs across tools create delays, errors, and burnout — and they don't scale with headcount.",
    solution:
      "End-to-end automations that connect your apps, route data intelligently, and keep humans in the loop where it matters.",
    benefits: [
      "10x faster cycle times",
      "Fewer manual errors",
      "Scales without new hires",
      "Full audit trail & observability",
    ],
    useCases: [
      "Lead routing & enrichment",
      "Invoice & document processing",
      "Onboarding & approvals",
      "Reporting & reconciliation",
    ],
    process: ["Map the workflow", "Identify the bottleneck", "Automate & test", "Monitor & refine"],
  },
  {
    slug: "ai-chatbots-assistants",
    index: "03",
    title: "AI Chatbots & Assistants",
    icon: Bot,
    tagline: "Support that answers in seconds, on brand.",
    proof: "80% faster first response",
    description:
      "Conversational assistants grounded in your knowledge base that resolve issues, qualify leads, and book meetings.",
    problem:
      "Customers wait too long for answers and your team repeats the same responses hundreds of times a week.",
    solution:
      "Retrieval-grounded assistants trained on your docs, connected to your systems, with safe escalation to humans.",
    benefits: [
      "80% faster first response",
      "24/7 multilingual coverage",
      "Higher CSAT & deflection",
      "Seamless human handoff",
    ],
    useCases: [
      "Customer support deflection",
      "Sales qualification",
      "Internal knowledge assistant",
      "Booking & scheduling",
    ],
    process: ["Ingest knowledge", "Ground & guardrail", "Integrate channels", "Tune from feedback"],
  },
  {
    slug: "predictive-analytics",
    index: "04",
    title: "Predictive Analytics",
    icon: LineChart,
    tagline: "See what's coming before it costs you.",
    proof: "Earlier churn & fraud signals",
    description:
      "Forecasting and scoring models that turn your historical data into decisions about demand, churn, and risk.",
    problem:
      "Decisions get made on gut feel because the signal is buried in spreadsheets nobody can act on in time.",
    solution:
      "Production models for forecasting, segmentation, and anomaly detection, surfaced inside the tools you already use.",
    benefits: [
      "Forecast accuracy gains",
      "Earlier churn & fraud signals",
      "Smarter inventory & spend",
      "Decisions in dashboards, not decks",
    ],
    useCases: [
      "Demand & revenue forecasting",
      "Churn & LTV scoring",
      "Fraud & anomaly detection",
      "Dynamic pricing inputs",
    ],
    process: ["Audit data", "Engineer features", "Train & validate", "Deploy to decisions"],
  },
  {
    slug: "custom-ai-solutions",
    index: "05",
    title: "Custom AI Solutions",
    icon: Boxes,
    tagline: "When off-the-shelf won't cut it.",
    proof: "You own the IP",
    description:
      "Bespoke AI products built around your data and your edge — from document intelligence to recommendation engines.",
    problem:
      "Your hardest problems are specific to you, and generic SaaS tools flatten the advantage you actually have.",
    solution:
      "We design, build, and ship production-grade AI features with evaluation, monitoring, and a clear handover.",
    benefits: [
      "Owns your competitive edge",
      "Built on your proprietary data",
      "Production-grade & monitored",
      "You own the IP",
    ],
    useCases: [
      "Document intelligence",
      "Recommendation engines",
      "Search & RAG systems",
      "Internal AI tooling",
    ],
    process: ["Scope & spec", "Prototype", "Productionize", "Handover & support"],
  },
  {
    slug: "ai-integrations",
    index: "06",
    title: "AI Integrations",
    icon: Plug,
    tagline: "Plug intelligence into the stack you have.",
    proof: "No rip-and-replace",
    description:
      "We embed AI into your CRM, ERP, helpdesk, and internal tools so capability shows up where work happens.",
    problem:
      "AI lives in a separate tab nobody opens — disconnected from the systems that run the business.",
    solution:
      "Native integrations and middleware that bring models, agents, and automations into your existing platforms.",
    benefits: [
      "No rip-and-replace",
      "Adoption inside existing tools",
      "Secure, governed access",
      "Vendor-agnostic architecture",
    ],
    useCases: [
      "CRM & sales enablement",
      "Helpdesk copilots",
      "ERP & ops automation",
      "Data warehouse activation",
    ],
    process: ["Audit the stack", "Design the bridge", "Integrate securely", "Validate & roll out"],
  },
  {
    slug: "ai-agents",
    index: "07",
    title: "AI Agents",
    icon: Cpu,
    tagline: "Software that does the work, not just suggests it.",
    proof: "End-to-end task completion",
    description:
      "Autonomous and semi-autonomous agents that complete multi-step tasks end-to-end with the right guardrails.",
    problem:
      "Copilots that only suggest still leave the whole job on your team's plate.",
    solution:
      "Goal-driven agents with tool access, memory, and human checkpoints that actually finish the task safely.",
    benefits: [
      "End-to-end task completion",
      "Human-in-the-loop safety",
      "Operates across your tools",
      "Auditable agent actions",
    ],
    useCases: [
      "Research & enrichment agents",
      "Ops & back-office agents",
      "Sales & outbound agents",
      "Data cleanup & migration",
    ],
    process: ["Define the goal", "Grant tools & limits", "Test in sandbox", "Deploy with oversight"],
  },
  {
    slug: "voice-ai-solutions",
    index: "08",
    title: "Voice AI Solutions",
    icon: AudioLines,
    tagline: "Natural voice that handles real conversations.",
    proof: "24/7 call coverage",
    description:
      "Voice agents for inbound and outbound calls that book, qualify, and resolve — with human warmth and zero hold music.",
    problem:
      "Phone lines are expensive, inconsistent, and impossible to staff around the clock.",
    solution:
      "Low-latency voice agents connected to your systems, with natural turn-taking and graceful human escalation.",
    benefits: [
      "24/7 call coverage",
      "Lower cost per call",
      "Consistent, on-brand service",
      "Live transfer when needed",
    ],
    useCases: [
      "Inbound support lines",
      "Appointment booking",
      "Outbound qualification",
      "Order & status updates",
    ],
    process: ["Design the script", "Connect systems", "Tune latency & tone", "Launch & measure"],
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
    blurb: "Turn first-time buyers into repeat revenue with AI across the funnel.",
    applications: [
      { title: "Personalized recommendations", detail: "Surface the right product on-site and in email to lift AOV and repeat rate." },
      { title: "Support automation", detail: "Resolve order, shipping, and returns questions instantly, escalating edge cases." },
      { title: "Retention forecasting", detail: "Predict churn and LTV so retention spend goes where it actually pays back." },
      { title: "Creative testing", detail: "Generate and rank ad and email variants to find winning creative faster." },
    ],
    outcome: "45% increase in repeat orders",
    caseStudySlug: "d2c-orders-lift",
  },
  {
    slug: "retail",
    name: "Retail",
    blurb: "Forecast demand, optimize inventory, and unify the customer experience.",
    applications: [
      { title: "Demand forecasting", detail: "Forecast SKU-level demand to cut both stockouts and overstock." },
      { title: "Inventory optimization", detail: "Rebalance stock across stores and warehouses automatically." },
      { title: "In-store assistants", detail: "Give staff and shoppers instant answers on stock, specs, and alternatives." },
      { title: "Dynamic pricing inputs", detail: "Feed demand and competitor signals into smarter pricing decisions." },
    ],
    outcome: "30% lower stockouts",
  },
  {
    slug: "fintech",
    name: "FinTech",
    blurb: "Detect risk in real time and automate compliance-heavy workflows.",
    applications: [
      { title: "Fraud detection", detail: "Score transactions in real time to block fraud without adding checkout friction." },
      { title: "KYC automation", detail: "Verify identity and documents in seconds, flagging only genuine exceptions." },
      { title: "Credit scoring", detail: "Augment underwriting with models that read more signal than rules can." },
      { title: "Support copilots", detail: "Draft accurate, compliant responses for agents to review and send." },
    ],
    outcome: "70% reduction in fraud losses",
    caseStudySlug: "fintech-fraud-reduction",
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    blurb: "Reduce admin load and speed up patient support, safely and compliantly.",
    applications: [
      { title: "Intake automation", detail: "Capture and structure patient information before the first interaction." },
      { title: "Patient support agents", detail: "Answer common questions and route urgent ones, with clinician oversight." },
      { title: "Documentation assist", detail: "Draft notes and summaries so clinicians spend less time typing." },
      { title: "Triage routing", detail: "Prioritize and route cases to the right team automatically." },
    ],
    outcome: "80% faster patient response",
    caseStudySlug: "healthcare-support-speed",
  },
  {
    slug: "saas",
    name: "SaaS",
    blurb: "Embed AI features, deflect support, and reduce churn with usage signals.",
    applications: [
      { title: "In-product copilots", detail: "Embed assistants that help users get value without opening a ticket." },
      { title: "Churn prediction", detail: "Spot at-risk accounts from usage signals before they cancel." },
      { title: "Support deflection", detail: "Resolve common issues in-app and cut ticket volume." },
      { title: "Onboarding automation", detail: "Guide new users to activation with contextual, automated nudges." },
    ],
    outcome: "2x activation rate",
  },
  {
    slug: "logistics",
    name: "Logistics",
    blurb: "Optimize routes, predict delays, and automate exception handling.",
    applications: [
      { title: "Route optimization", detail: "Plan routes that cut miles, fuel, and delivery time." },
      { title: "ETA prediction", detail: "Give customers accurate arrival windows and flag delays early." },
      { title: "Exception automation", detail: "Detect and resolve shipment exceptions before they escalate." },
      { title: "Document processing", detail: "Extract data from bills of lading, customs forms, and invoices automatically." },
    ],
    outcome: "25% lower delivery costs",
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    blurb: "Qualify leads around the clock and automate document-heavy deals.",
    applications: [
      { title: "Lead qualification agents", detail: "Qualify and book inbound leads around the clock." },
      { title: "Document automation", detail: "Generate and review contracts and disclosures in minutes." },
      { title: "Valuation models", detail: "Estimate value and rent from comparables and market signals." },
      { title: "Tenant support", detail: "Handle maintenance and leasing questions instantly." },
    ],
    outcome: "3x qualified leads",
  },
  {
    slug: "professional-services",
    name: "Professional Services",
    blurb: "Automate research, drafting, and back-office work to bill more hours.",
    applications: [
      { title: "Research agents", detail: "Gather and synthesize sources so billable hours go to judgment." },
      { title: "Drafting assistants", detail: "Produce first drafts of memos, proposals, and reports." },
      { title: "Knowledge search", detail: "Answer questions across your firm's documents and precedent." },
      { title: "Billing automation", detail: "Capture time and assemble invoices with less leakage." },
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
    client: "Lumen Goods",
    industry: "D2C",
    headline: "45% increase in repeat orders for a fast-growing D2C brand",
    summary:
      "We deployed personalized recommendations and a support assistant that turned one-time buyers into loyal customers.",
    metric: { value: "45%", label: "Repeat orders", direction: "up" },
    kpis: [
      { value: "+45%", label: "Repeat orders" },
      { value: "-38%", label: "Support tickets" },
      { value: "6 wks", label: "Time to launch" },
      { value: "4.7x", label: "ROI in year one" },
    ],
    challenge:
      "Strong acquisition but weak retention — buyers churned after a single purchase and support couldn't keep up with growth.",
    approach:
      "We audited the post-purchase journey, identified drop-off points, and prioritized recommendations plus support automation.",
    implementation:
      "A recommendation engine on product and email surfaces, paired with a knowledge-grounded support assistant connected to the helpdesk and order system.",
    results:
      "Repeat orders rose 45% within two quarters while support tickets fell 38%, paying back the engagement 4.7x in year one.",
  },
  {
    slug: "fintech-fraud-reduction",
    client: "Northwind Pay",
    industry: "FinTech",
    headline: "70% reduction in fraud losses with real-time scoring",
    summary:
      "A predictive scoring model flags risky transactions in milliseconds, cutting losses without adding friction.",
    metric: { value: "70%", label: "Fraud losses", direction: "down" },
    kpis: [
      { value: "-70%", label: "Fraud losses" },
      { value: "<80ms", label: "Decision latency" },
      { value: "-22%", label: "False positives" },
      { value: "24/7", label: "Coverage" },
    ],
    challenge:
      "Rule-based fraud checks were both too slow and too blunt — letting fraud through while blocking legitimate customers.",
    approach:
      "We engineered features from transaction history and built a real-time scoring pipeline with continuous evaluation.",
    implementation:
      "A model served behind a low-latency API integrated into the payment flow, with a review queue and feedback loop for analysts.",
    results:
      "Fraud losses dropped 70% while false positives fell 22%, all within an 80ms decision budget that kept checkout smooth.",
  },
  {
    slug: "healthcare-support-speed",
    client: "Carewell Clinics",
    industry: "Healthcare",
    headline: "80% faster patient support across a multi-clinic network",
    summary:
      "An intake and support assistant routes patients instantly and drafts responses for staff to approve.",
    metric: { value: "80%", label: "Faster response", direction: "up" },
    kpis: [
      { value: "80%", label: "Faster response" },
      { value: "-55%", label: "Admin time" },
      { value: "12k", label: "Patients/month" },
      { value: "HIPAA", label: "Compliant" },
    ],
    challenge:
      "Front-desk teams were overwhelmed, patients waited days for replies, and clinicians lost time to documentation.",
    approach:
      "We mapped intake and support flows, then designed a compliant assistant with human approval at every patient-facing step.",
    implementation:
      "A triage and drafting assistant integrated with the scheduling system, with strict guardrails and full audit logging.",
    results:
      "Patient response times improved 80% and administrative time dropped 55%, freeing staff to focus on care.",
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
  { value: 10, suffix: "x", note: "up to", label: "Operational efficiency" },
  { display: "24/7", label: "Automated workflows" },
  { value: 99, suffix: "%", label: "Process reliability" },
];

/* ----------------------------------------------------------------
   PROCESS
----------------------------------------------------------------- */
export const processSteps = [
  {
    no: "01",
    title: "Discover",
    description:
      "We learn your operations, data, and goals — then pinpoint where AI creates real, measurable leverage.",
  },
  {
    no: "02",
    title: "Strategize",
    description:
      "We prioritize use cases by ROI and risk, and shape a roadmap your team and your board can get behind.",
  },
  {
    no: "03",
    title: "Build",
    description:
      "We ship production-grade automations and AI features with evaluation, monitoring, and guardrails baked in.",
  },
  {
    no: "04",
    title: "Scale",
    description:
      "We measure impact, expand what works, and hand over a system your team can own and grow with confidence.",
  },
];

/* ----------------------------------------------------------------
   TESTIMONIALS
----------------------------------------------------------------- */
export const testimonials = [
  {
    quote:
      "StayClever didn't sell us hype. They found three workflows costing us a fortune and automated them in a month. The ROI was obvious by week six.",
    name: "Maya Chen",
    role: "Founder & CEO",
    company: "Lumen Goods",
  },
  {
    quote:
      "The fraud model paid for the entire engagement in the first quarter. What impressed me most was how carefully they handled false positives.",
    name: "David Osei",
    role: "Head of Risk",
    company: "Northwind Pay",
  },
  {
    quote:
      "They understood healthcare constraints from day one. Compliant, careful, and genuinely fast. Our staff actually trusts the system.",
    name: "Dr. Priya Nair",
    role: "Operations Director",
    company: "Carewell Clinics",
  },
  {
    quote:
      "We'd been burned by AI vendors before. StayClever shipped something real, measured it honestly, and handed it over cleanly.",
    name: "Tomás Rivera",
    role: "VP Engineering",
    company: "Vertex SaaS",
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
    title: "How to model AI ROI before you write a single line of code",
    category: "AI Strategy",
    excerpt:
      "A practical framework for sizing the business case of an AI initiative — so you fund the right ones and kill the rest early.",
    readTime: "8 min read",
    date: "May 18, 2026",
    author: "StayClever Team",
  },
  {
    slug: "automation-that-survives-scale",
    title: "Building workflow automation that survives 10x scale",
    category: "Automation",
    excerpt:
      "The architecture decisions that separate automations that break under load from ones that quietly compound value.",
    readTime: "6 min read",
    date: "May 9, 2026",
    author: "StayClever Team",
  },
  {
    slug: "agents-vs-copilots",
    title: "Agents vs. copilots: when autonomy actually earns its keep",
    category: "AI Agents",
    excerpt:
      "Not every task needs an autonomous agent. Here's the decision tree we use with clients to choose the right level of autonomy.",
    readTime: "7 min read",
    date: "April 28, 2026",
    author: "StayClever Team",
  },
  {
    slug: "d2c-ai-playbook",
    title: "The D2C AI playbook: retention beats acquisition",
    category: "Industry Trends",
    excerpt:
      "Where AI creates the highest-leverage wins for consumer brands — and the metrics that actually move the P&L.",
    readTime: "9 min read",
    date: "April 14, 2026",
    author: "StayClever Team",
  },
  {
    slug: "fraud-scoring-case",
    title: "Inside a 70% fraud reduction: what made the model work",
    category: "Case Studies",
    excerpt:
      "A behind-the-scenes look at the data, features, and guardrails behind one of our highest-impact FinTech projects.",
    readTime: "10 min read",
    date: "March 30, 2026",
    author: "StayClever Team",
  },
  {
    slug: "data-readiness-checklist",
    title: "The data readiness checklist every AI project needs",
    category: "AI Strategy",
    excerpt:
      "Before you train anything, run this checklist. It's the difference between a demo and a system you can trust.",
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
      "We measure success in business metrics — revenue, cost, time — not in model benchmarks or buzzwords.",
  },
  {
    title: "Pragmatic, not flashy",
    description:
      "We ship the smallest thing that creates value, then compound it. No science projects, no vendor lock-in.",
  },
  {
    title: "Safety by default",
    description:
      "Guardrails, human-in-the-loop, and observability come standard. Especially in regulated industries.",
  },
  {
    title: "You own the outcome",
    description:
      "We hand over clean systems, clear documentation, and the knowledge to run them. No permanent dependency.",
  },
];

export const timeline = [
  { year: "2021", title: "The thesis", text: "Founded on a simple belief: most businesses don't need more AI hype — they need fewer manual hours." },
  { year: "2022", title: "First automations", text: "Shipped early workflow automations for SMBs, proving ROI in weeks rather than quarters." },
  { year: "2023", title: "Going deeper", text: "Expanded into predictive analytics and custom AI as clients trusted us with harder problems." },
  { year: "2024", title: "Agents arrive", text: "Built our first production AI agents, moving from suggestions to completed work." },
  { year: "2026", title: "50+ projects", text: "Now partnering with startups, SMBs, and D2C brands across eight industries worldwide." },
];

export const team = [
  { name: "Founder & Principal", role: "AI Strategy" },
  { name: "Head of Engineering", role: "Custom AI & Agents" },
  { name: "Lead Data Scientist", role: "Predictive Analytics" },
  { name: "Automation Lead", role: "Workflow & Integrations" },
  { name: "Design & UX Lead", role: "Product & Interfaces" },
  { name: "Delivery Lead", role: "Client Success" },
];
