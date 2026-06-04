import {
  Brain,
  Workflow,
  Bot,
  Sparkles,
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
    slug: "recommendation-system",
    index: "04",
    title: "Recommendation Systems",
    icon: Sparkles,
    tagline: "Show every customer what they're most likely to buy next.",
    proof: "Bigger baskets, more repeat buys",
    description:
      "We build recommendation engines trained on your own catalog and customer behaviour — the 'recommended for you', 'frequently bought together', and 'you might also like' that quietly lift every order.",
    problem:
      "In a big catalog, shoppers find the one thing they came for and leave — and generic 'related product' plugins push items nobody wants, so they earn almost nothing.",
    solution:
      "We build a recommender on your own sales and browsing data that shows each shopper the right products across your site, app, and email — and keeps learning from what they click and buy.",
    benefits: [
      "Bigger average order value",
      "More repeat purchases",
      "Less browsing, more buying",
      "Learns from every click and order",
    ],
    useCases: [
      "'Recommended for you' on your storefront",
      "'Frequently bought together' at checkout",
      "Personalized product emails",
      "Smarter search and category ranking",
    ],
    process: ["Learn your catalog and customers", "Train on your own data", "Roll out across site and email", "Tune from real results"],
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
  /** Use when an industry has more than one case study to link. */
  caseStudies?: { slug: string; label: string }[];
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
    caseStudySlug: "d2c-recommendation-engine",
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
    caseStudySlug: "retail-ai-roadmap",
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
    caseStudySlug: "saas-crm-rag-copilot",
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
    slug: "service-businesses",
    name: "Service Businesses",
    blurb: "From firms that bill by the hour to local shops that run on appointments — automate the busywork and the bookings.",
    applications: [
      { title: "Research & drafting agents", detail: "Produce first drafts of memos, proposals, and reports so your time goes to the thinking." },
      { title: "Document & billing automation", detail: "Pull data from invoices and statements and capture time, with less lost revenue." },
      { title: "WhatsApp & chat booking", detail: "Let customers book, reschedule, and ask questions on the channels they already use." },
      { title: "Reminders & slot back-fill", detail: "Cut no-shows with timely reminders, and offer freed-up slots to the next customer." },
    ],
    outcome: "20+ hours saved per week",
    caseStudies: [
      { slug: "professional-services-automation", label: "20+ hrs saved / week — CA firm" },
      { slug: "barbershop-whatsapp-booking", label: "35% fewer no-shows — barbershop" },
    ],
  },
];

/* ----------------------------------------------------------------
   CASE STUDIES
----------------------------------------------------------------- */
export type CaseStudy = {
  slug: string;
  client: string;
  industry: string;
  service: { slug: string; title: string };
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
  /* 01 — AI Strategy & Planning × Retail */
  {
    slug: "retail-ai-roadmap",
    client: "Regional grocery distributor (Rajasthan, India)",
    industry: "Retail",
    service: { slug: "ai-strategy-consulting", title: "AI Strategy & Planning" },
    headline: "A 12-month AI roadmap that turned guesswork into a ranked plan",
    summary:
      "A grocery distributor supplying hundreds of kirana stores across Rajasthan knew AI could help but couldn't say where to start. We mapped how the business actually runs, scored where AI would pay off, and shipped the top win: demand forecasting that cut stockouts.",
    metric: { value: "30%", label: "Fewer stockouts", direction: "down" },
    kpis: [
      { value: "3 wks", label: "Kickoff to plan" },
      { value: "11", label: "Initiatives ranked by ROI" },
      { value: "-30%", label: "Stockouts (first win)" },
      { value: "9 mo", label: "Payback on phase one" },
    ],
    challenge:
      "Demand swung hard with festivals, weddings, and the harvest season, and fast-moving staples and perishables sold out at some retailers while spoiling in other warehouses. Leadership knew AI could help, but the budget was stuck behind a single question — 'where do we even start?'",
    approach:
      "Over three weeks we walked their distribution centres and reviewed the sales and stock-movement data they already had, scored every opportunity on value versus effort, and built a 12-month plan with a return estimate for each move.",
    implementation:
      "We sequenced the roadmap into phases and started with the highest-value, lowest-risk win — a regional demand forecast wired into their existing inventory system, so each warehouse sees exactly what to stock and reroute ahead of festival and seasonal spikes instead of guessing.",
    results:
      "Leadership finally had one ranked list everyone agreed on. The first initiative cut stockouts 30% across the network and paid for itself in nine months — funding the next phase out of its own savings.",
  },
  /* 02 — Workflow Automation & AI Agents × Professional Services */
  {
    slug: "professional-services-automation",
    client: "Chartered accountancy firm (Jaipur, India)",
    industry: "Service Businesses",
    service: { slug: "workflow-automation", title: "Workflow Automation & AI Agents" },
    headline: "20+ hours a week back per accountant — without hiring anyone",
    summary:
      "Bank statements, receipts, and timesheets all ran on manual data entry across disconnected tools. We automated the predictable steps and added AI agents for the judgment work, so the firm bills more of the hours it actually works — especially through filing season.",
    metric: { value: "20+", label: "Hours saved / week", direction: "up" },
    kpis: [
      { value: "20+ hrs", label: "Saved per accountant / week" },
      { value: "3x", label: "Faster document processing" },
      { value: "-90%", label: "Lost billable time" },
      { value: "5 wks", label: "Time to launch" },
    ],
    challenge:
      "Accountants spent their highest-value hours keying in receipts, reconciling statements, and reconstructing timesheets — work that didn't bill but quietly ate the day, and turned every GST and audit deadline into overtime.",
    approach:
      "We mapped where time leaked between their accounting and document tools, automated the predictable steps — data extraction, reconciliations, time capture — and built AI agents for the parts that genuinely need a professional's judgment.",
    implementation:
      "A document agent pulls figures from invoices, receipts, and bank statements into their books, a drafting assistant produces first-pass tax computations and audit notes for review, and a billing agent captures time as work happens — all connected to the tools they already use, with an accountant signing off on every output.",
    results:
      "Each accountant got back more than 20 hours a week, document processing ran three times faster, and almost none of their billable time slipped through the cracks — the firm absorbed filing-season load without a single new hire.",
  },
  /* 03 — AI Chat & Voice Assistants × Local Services (barbershops) */
  {
    slug: "barbershop-whatsapp-booking",
    client: "Barbershop chain (Jaipur, India)",
    industry: "Service Businesses",
    service: { slug: "ai-chatbots-assistants", title: "AI Chat & Voice Assistants" },
    headline: "A WhatsApp agent that books appointments and cut no-shows 35%",
    summary:
      "Bookings ran on phone calls and walk-ins, so calls during a haircut went unanswered and empty chairs piled up at peak hours. A WhatsApp assistant now books, reschedules, and reminds customers around the clock — without anyone at the front desk.",
    metric: { value: "35%", label: "Fewer no-shows", direction: "down" },
    kpis: [
      { value: "24/7", label: "Bookings on WhatsApp" },
      { value: "-35%", label: "No-shows" },
      { value: "60%", label: "Bookings self-served" },
      { value: "<30s", label: "Reply, any hour" },
    ],
    challenge:
      "Calls during a haircut went straight to voicemail, evenings and Sundays were dead air, and forgotten appointments left chairs empty at the busiest hours — every missed booking was money walking past the door.",
    approach:
      "We met customers where they already are — on WhatsApp. We trained an assistant on each outlet's services, barbers, and timings, set clear rules for what it can confirm on its own, and connected it straight to the booking calendar.",
    implementation:
      "The assistant chats in Hindi or English over WhatsApp, books and reschedules into the right barber's calendar, sends a reminder the day before, and offers a freed-up slot to the next customer when someone cancels — passing anything unusual to the front desk.",
    results:
      "No-shows fell 35%, six in ten bookings now happen without a staff member lifting a finger, and the evening and Sunday enquiries that used to vanish turn into filled chairs.",
  },
  /* 04 — Recommendation Systems × D2C */
  {
    slug: "d2c-recommendation-engine",
    client: "D2C fashion brand (India)",
    industry: "D2C",
    service: { slug: "recommendation-system", title: "Recommendation Systems" },
    headline: "A recommendation engine that lifted average order value 28%",
    summary:
      "With a deep catalog, shoppers found one item and left. A recommendation engine trained on the brand's own sales and browsing data now surfaces the right products across site, app, and email — lifting basket size and repeat purchases.",
    metric: { value: "28%", label: "Higher order value", direction: "up" },
    kpis: [
      { value: "+28%", label: "Average order value" },
      { value: "+22%", label: "Repeat purchases" },
      { value: "35%", label: "Revenue from recommendations" },
      { value: "5 wks", label: "Time to launch" },
    ],
    challenge:
      "With hundreds of styles across the range, shoppers found the one item they came for and left. The generic 'related products' plugin pushed irrelevant items and rarely earned a second click.",
    approach:
      "We trained a recommender on the brand's own data — what gets viewed together, what sells together, and what each customer keeps coming back for — instead of relying on off-the-shelf rules.",
    implementation:
      "'Recommended for you' on the homepage, 'frequently bought together' at checkout, and personalized product emails — all powered by one engine that updates as customers click and buy, measured against a holdout group so every gain is real.",
    results:
      "Average order value rose 28%, repeat purchases climbed 22%, and recommendations now drive over a third of revenue — proven against a control group, not guessed.",
  },
  /* 05 — Custom AI Solutions × SaaS (RAG copilot in a CRM product) */
  {
    slug: "saas-crm-rag-copilot",
    client: "B2B CRM software company",
    industry: "SaaS",
    service: { slug: "custom-ai-solutions", title: "Custom AI Solutions" },
    headline: "A custom RAG copilot built into their CRM — 40% more daily active users",
    summary:
      "Their CRM held everything customers needed, but the answers were buried across accounts, notes, and tickets. We built a retrieval copilot into their product that answers in plain language from each customer's own data — and they own it outright.",
    metric: { value: "40%", label: "More daily active users", direction: "up" },
    kpis: [
      { value: "+40%", label: "Daily active users" },
      { value: "-50%", label: "Support tickets" },
      { value: "<2s", label: "Answer, with sources" },
      { value: "100%", label: "On their own stack" },
    ],
    challenge:
      "New users churned before they found value, and 'how do I…' tickets piled up — yet off-the-shelf chatbots couldn't safely touch private, per-customer CRM data or keep one company's records from leaking into another's.",
    approach:
      "We agreed on one goal — make the product easier to get value from — then designed a retrieval system that answers using each customer's own CRM data, with strict isolation between tenants and citations on every answer.",
    implementation:
      "A RAG copilot built into their app: it retrieves from each customer's accounts, notes, and history, answers with cited sources, respects every permission rule, and runs on their own infrastructure. We shipped a working version first, hardened it for production, and handed it over as fully theirs.",
    results:
      "Daily active users rose 40% as people got answers instead of digging, 'how do I' tickets fell by half, and the copilot became the feature their sales team now leads with — owned outright and running on their own stack.",
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
