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
export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string };

export type Insight = {
  slug: string;
  title: string;
  category: "AI Strategy" | "Automation" | "AI Agents" | "Industry Trends" | "Case Studies";
  excerpt: string;
  readTime: string;
  date: string;
  author: string;
  /** SEO meta description; falls back to excerpt when omitted. */
  metaDescription?: string;
  keywords?: string[];
  body: ContentBlock[];
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
    metaDescription:
      "A practical framework to estimate the ROI of an AI project before you spend a rupee building it — so you back the right ideas and drop the rest early.",
    keywords: ["AI ROI", "AI strategy", "AI business case", "is AI worth it", "AI project planning"],
    body: [
      {
        type: "p",
        text: "Most failed AI projects don't fail in the build. They fail in the decision to build at all. The idea sounded exciting, a vendor demo looked slick, and nobody stopped to ask the boring question: if this works perfectly, what does it actually save or earn us?",
      },
      {
        type: "p",
        text: "You can answer that question in an afternoon — long before you write a line of code or sign a contract. Here's the way we size up an AI idea with our clients, so the ones we back tend to pay for themselves.",
      },
      {
        type: "h2",
        text: "Start with the work, not the technology",
      },
      {
        type: "p",
        text: "Forget the word \"AI\" for a moment. Find one specific, repetitive task that costs you real money today. Customer emails that take three hours a day to answer. Invoices someone keys in by hand. Orders flagged for fraud one by one. AI is only worth it when it removes a cost you can already point to.",
      },
      {
        type: "p",
        text: "If you can't name the task and roughly what it costs, that's your answer for now: it's too early to build.",
      },
      {
        type: "h2",
        text: "Put a number on the prize",
      },
      {
        type: "p",
        text: "Estimate the annual value of solving it. You don't need a spreadsheet model — a back-of-the-envelope number is enough to make a decision. Multiply hours saved per week by a loaded hourly cost, or take the revenue you lose to the problem today.",
      },
      {
        type: "ul",
        items: [
          "Time saved: hours per week × weeks per year × cost per hour.",
          "Money recovered: errors, fraud, churn, or missed sales the system would prevent.",
          "Speed gained: faster replies or decisions that win deals you currently lose.",
        ],
      },
      {
        type: "p",
        text: "Be honest and a little conservative. If the prize is small even when you're optimistic, stop here — you've just saved yourself months.",
      },
      {
        type: "h2",
        text: "Estimate the real cost — including the boring parts",
      },
      {
        type: "p",
        text: "The build is rarely the expensive part. The cost that surprises people is everything around it: cleaning up data, connecting to the tools you already use, training the team, and keeping the thing running after launch. A useful rule of thumb is that ongoing care costs as much again over a year as the initial build.",
      },
      {
        type: "quote",
        text: "If a project only makes sense when you ignore the cost of running it, it doesn't make sense.",
      },
      {
        type: "h2",
        text: "Look for a payback inside a year",
      },
      {
        type: "p",
        text: "Divide the cost by the annual value. If the project pays for itself in under a year, it's usually worth a serious look. One to two years, only if it also unlocks something strategic. Longer than that, and you're betting on a future that may not arrive — drop it and find a better idea.",
      },
      {
        type: "h2",
        text: "Then de-risk it with the smallest possible test",
      },
      {
        type: "p",
        text: "Even a great-looking idea can hide a fatal flaw — messy data, a workflow that won't budge, a team that won't adopt it. So before the full build, run the cheapest test that could prove the idea wrong. A few weeks, a narrow slice of the work, real data. If it survives that, you build with confidence. If it doesn't, you've lost weeks instead of quarters.",
      },
      {
        type: "p",
        text: "That's the whole discipline: name the task, price the prize, price the work honestly, demand a fast payback, and prove it small before you build big. Do that, and the projects you green-light will be the ones worth finishing.",
      },
    ],
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
    metaDescription:
      "The design choices that decide whether your business automation breaks under growth or quietly saves you more every month. A practical guide for scaling teams.",
    keywords: ["business automation", "workflow automation", "scaling automation", "automation best practices"],
    body: [
      {
        type: "p",
        text: "There's a specific kind of pain that hits growing businesses. The automation that saved you ten hours a week at fifty orders a day starts silently dropping things at five hundred. Nobody notices until a customer does. The fix usually isn't more automation — it's automation built to survive growth in the first place.",
      },
      {
        type: "h2",
        text: "Why automations break when you grow",
      },
      {
        type: "p",
        text: "Most quick automations are built for the happy path — the version where every input is clean and nothing goes wrong. That works beautifully at low volume, because a human is quietly catching the exceptions you never see. Scale up, and the exceptions scale too. Suddenly there are too many for anyone to catch, and they slip through as silent failures.",
      },
      {
        type: "p",
        text: "The difference between automation that breaks and automation that holds isn't how clever it is. It's how it handles the messy edges.",
      },
      {
        type: "h2",
        text: "Design for the messy 20%, not the clean 80%",
      },
      {
        type: "p",
        text: "Before you automate a task, spend an hour listing everything that can go wrong with it. The duplicate order. The customer who replies in a different language. The payment that half-completes. These edge cases are where automation earns its keep — or quietly fails.",
      },
      {
        type: "ul",
        items: [
          "Decide what happens to anything the system can't handle — it should land in a clear queue, never vanish.",
          "Make every automated action reversible or logged, so a mistake can be found and undone.",
          "Set a threshold above which a human is asked to confirm, instead of letting the machine guess.",
        ],
      },
      {
        type: "h2",
        text: "Make failures loud, not silent",
      },
      {
        type: "p",
        text: "The most dangerous automation is the one that fails without telling anyone. Build in a simple alert when something doesn't complete, a daily count of what was processed versus what was skipped, and a place where stuck items wait for a human. You want to learn about a problem from a dashboard, not from an angry customer.",
      },
      {
        type: "quote",
        text: "Good automation doesn't just do the work. It tells you when it couldn't.",
      },
      {
        type: "h2",
        text: "Keep humans in the loop where it matters",
      },
      {
        type: "p",
        text: "Full automation is the right goal for low-risk, high-volume work. But for decisions with real consequences — refunds above a limit, anything touching a regulated process, messages that go out under your brand — keep a person in the loop. The system does the heavy lifting and proposes the action; the human approves it in one click. You get most of the speed with almost none of the risk.",
      },
      {
        type: "h2",
        text: "Build it to be handed over",
      },
      {
        type: "p",
        text: "An automation only one person understands is a liability waiting to happen. Document what it does in plain language, name an owner, and make sure someone other than the builder can pause it, fix it, or explain it. The automations that survive scale are the ones your team owns — not the ones they're afraid to touch.",
      },
      {
        type: "p",
        text: "Get these foundations right and automation stops being something you babysit. It becomes infrastructure — quietly saving you more every month as you grow, instead of more to worry about.",
      },
    ],
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
    metaDescription:
      "AI agents that act vs. copilots that suggest — a clear framework for choosing the right level of automation for each task in your business.",
    keywords: ["AI agents", "AI copilot", "agentic AI", "AI automation levels", "human in the loop"],
    body: [
      {
        type: "p",
        text: "There's a lot of noise right now about AI agents — systems that don't just answer questions but go off and do the work. It's genuinely powerful. It's also not always what you need. The trick is matching the level of help to the task, instead of reaching for the most autonomous option because it sounds impressive.",
      },
      {
        type: "h2",
        text: "Two different kinds of help",
      },
      {
        type: "p",
        text: "A copilot suggests. It drafts the email, summarizes the document, recommends the next step — and a human decides whether to use it. An agent acts. It takes a goal, makes its own decisions, and completes the task end to end: it doesn't just draft the reply, it sends it; it doesn't just flag the order, it processes the refund.",
      },
      {
        type: "p",
        text: "Both are useful. They're just suited to very different situations.",
      },
      {
        type: "h2",
        text: "When a copilot is the right call",
      },
      {
        type: "ul",
        items: [
          "The work needs judgment, taste, or context the AI can't fully see.",
          "Mistakes are expensive, public, or hard to undo.",
          "Your team is still building trust in the system.",
          "The task happens often enough to matter, but each instance is a little different.",
        ],
      },
      {
        type: "p",
        text: "A copilot keeps a human in control while removing the slow part — the blank page, the first draft, the research. For most knowledge work, this is where the biggest, safest wins are.",
      },
      {
        type: "h2",
        text: "When an agent earns its keep",
      },
      {
        type: "ul",
        items: [
          "The task is high-volume and repetitive — too much for a person to keep up with.",
          "The rules are clear enough that a wrong decision is rare and recoverable.",
          "Speed matters more than nuance — replies that must go out in seconds, around the clock.",
          "You can give the agent clear limits and a clean way to escalate what it can't handle.",
        ],
      },
      {
        type: "quote",
        text: "Give an agent the work that's too repetitive for a human and too risky to leave undone. Give a copilot everything that needs a human's judgment.",
      },
      {
        type: "h2",
        text: "The safe way to go from one to the other",
      },
      {
        type: "p",
        text: "You don't have to choose once and forever. The smart path is to start a task as a copilot and graduate it to an agent only after it earns trust. Let the system suggest for a few weeks while a human approves each action. Watch how often it's right. As confidence grows, hand it more autonomy on the easy cases and keep humans on the hard ones.",
      },
      {
        type: "p",
        text: "That's how you get the speed of automation without betting the business on it. The level of help isn't a fixed setting — it's a dial you turn up as the evidence comes in.",
      },
      {
        type: "h2",
        text: "The question to actually ask",
      },
      {
        type: "p",
        text: "Don't ask \"should we use an AI agent?\" Ask, for each task: what does a mistake here cost, and how often will it happen? When the answer is \"a lot\" or \"often,\" keep a human in the loop. When it's \"little\" and \"rarely,\" let the machine run. Get that match right and the technology almost takes care of itself.",
      },
    ],
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
    metaDescription:
      "Where AI gives D2C and consumer brands the biggest wins — retention, support, and the metrics that actually move your bottom line, not vanity numbers.",
    keywords: ["D2C AI", "ecommerce AI", "customer retention", "AI for consumer brands", "reduce churn"],
    body: [
      {
        type: "p",
        text: "Most D2C brands spend their AI budget on the wrong end of the funnel. They pour it into ads and acquisition — chasing the next customer — when the cheaper, more durable win is keeping the ones they already have. Acquisition costs keep climbing. Retention is where AI quietly compounds.",
      },
      {
        type: "h2",
        text: "Why retention is the better bet",
      },
      {
        type: "p",
        text: "A returning customer costs you almost nothing to reach, buys more often, and tells their friends. A small lift in repeat purchase rate flows almost straight to profit, because you've already paid to acquire them. AI is unusually good at exactly the work that drives retention — noticing who's about to drift away, and making the right offer at the right moment.",
      },
      {
        type: "quote",
        text: "It's far cheaper to keep a customer than to win a new one — and that's precisely the work AI does well.",
      },
      {
        type: "h2",
        text: "The four highest-value places to start",
      },
      {
        type: "p",
        text: "You don't need a grand AI strategy. You need a few well-chosen wins that pay for themselves and build trust for the next step.",
      },
      {
        type: "ul",
        items: [
          "Spot churn before it happens: flag customers whose behavior says they're slipping, and win them back while it's still cheap.",
          "Answer support instantly: handle the repetitive questions — where's my order, how do I return this — around the clock, and free your team for the ones that need a human.",
          "Personalize what each customer sees: recommend the next product based on what they actually buy, not a generic bestseller list.",
          "Forecast demand: predict what sells when, so you're not stuck with dead stock or sold out of your hero product.",
        ],
      },
      {
        type: "h2",
        text: "The numbers that actually matter",
      },
      {
        type: "p",
        text: "It's easy to get distracted by vanity metrics. Tie every AI project to a number that moves the bottom line:",
      },
      {
        type: "ul",
        items: [
          "Repeat purchase rate — the clearest signal that retention is working.",
          "Customer lifetime value — what a customer is worth over the whole relationship.",
          "Cost to serve — how much support each order costs you.",
          "Inventory turns — how efficiently your stock turns into cash.",
        ],
      },
      {
        type: "p",
        text: "If an AI project can't be tied to one of these, be suspicious of it.",
      },
      {
        type: "h2",
        text: "Start small, prove it, then expand",
      },
      {
        type: "p",
        text: "Pick the one of these where you feel the most pain right now. Run it on a slice of your customers, measure the lift against a group you left alone, and only scale what clearly works. A brand that nails churn-spotting and instant support will out-earn one that sprinkled AI across ten half-finished experiments.",
      },
      {
        type: "p",
        text: "The brands that win the next few years won't be the ones that spent the most on acquisition. They'll be the ones that used AI to make every customer they already have worth more.",
      },
    ],
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
    metaDescription:
      "A behind-the-scenes case study of how a fraud-scoring system cut fraud losses by 70% — the data, the safeguards, and the design choices that made it work.",
    keywords: ["fraud detection", "AI fraud scoring", "machine learning case study", "reduce fraud losses"],
    body: [
      {
        type: "p",
        text: "One of our most impactful projects cut a client's fraud losses by roughly 70% in a few months. It's tempting to tell that story as \"we added AI.\" The truth is more useful: the model was the easy part. What made it work was the design around it — the data, the safeguards, and the decision to keep humans in control.",
      },
      {
        type: "h2",
        text: "The problem",
      },
      {
        type: "p",
        text: "The client was reviewing suspicious transactions by hand. It was slow, it was inconsistent, and it didn't scale — as volume grew, more fraud slipped through simply because the team couldn't keep up. They didn't need a fancier model. They needed a way to catch more of the bad while bothering fewer of the good.",
      },
      {
        type: "h2",
        text: "Why we started with the data, not the algorithm",
      },
      {
        type: "p",
        text: "The single biggest lever wasn't the choice of model — it was getting the history clean and honest. We pulled together past transactions, carefully labelled which had turned out to be fraud, and made sure that label was accurate. A model is only as good as the examples it learns from, and most of the early work was unglamorous data cleanup.",
      },
      {
        type: "quote",
        text: "The model was a few weeks of work. Getting the data right was most of the project — and most of the result.",
      },
      {
        type: "h2",
        text: "Scoring, not blocking",
      },
      {
        type: "p",
        text: "We deliberately didn't build a system that blocks transactions on its own. Instead it gives each one a risk score and a short, plain-language reason. That choice mattered:",
      },
      {
        type: "ul",
        items: [
          "Low-risk transactions pass straight through, so good customers aren't punished.",
          "High-risk ones go to a human reviewer with the reasons already laid out, so the review is fast.",
          "The grey zone in the middle gets a lighter check instead of an outright block.",
        ],
      },
      {
        type: "p",
        text: "The team's time went where it mattered most, and legitimate customers stopped getting caught in the net.",
      },
      {
        type: "h2",
        text: "The safeguards that kept it honest",
      },
      {
        type: "p",
        text: "A fraud model that can't explain itself is dangerous. We built in a few non-negotiables: every score came with its reasons, every decision was logged, and a human made the final call on anything serious. We also watched for the model quietly getting worse as fraud patterns shifted, so it could be retrained before accuracy slipped.",
      },
      {
        type: "h2",
        text: "Why it actually stuck",
      },
      {
        type: "p",
        text: "Plenty of fraud models get built and then ignored because nobody trusts them. This one stuck because the reviewers trusted it — they could see why it flagged something, override it when it was wrong, and watch it get better over time. Trust, not accuracy alone, is what turned a good model into a 70% result.",
      },
      {
        type: "p",
        text: "The lesson travels well beyond fraud. The win came from clean data, a system that assists rather than overrules, and safeguards that let people trust it. Get those right and the AI does the rest.",
      },
    ],
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
    metaDescription:
      "A quick, practical checklist to know whether your data is actually ready for AI — before you spend on a project that a flashy demo can't save.",
    keywords: ["data readiness", "AI data quality", "data for machine learning", "AI checklist"],
    body: [
      {
        type: "p",
        text: "Almost every AI project that disappoints has the same root cause, and it isn't the model. It's the data. The demo looked great on a clean sample, then fell apart on the real thing. You can avoid most of that pain by running a five-minute check before you build anything.",
      },
      {
        type: "h2",
        text: "Do you have the data at all?",
      },
      {
        type: "p",
        text: "AI learns from examples. If the information you'd need to make the decision isn't being recorded anywhere — or lives only in someone's head — there's nothing to learn from yet. The first question isn't \"is our data good?\" It's \"do we even capture it?\" If the answer is no, your first project is to start collecting it.",
      },
      {
        type: "h2",
        text: "Is it accurate and consistent?",
      },
      {
        type: "ul",
        items: [
          "Does the same thing get recorded the same way every time, or does every person enter it differently?",
          "Are there obvious errors — impossible dates, duplicate records, empty fields where it matters?",
          "Can you trust what's there, or does everyone quietly know parts of it are wrong?",
        ],
      },
      {
        type: "p",
        text: "A model trained on messy data learns the mess. Garbage in, confident garbage out.",
      },
      {
        type: "h2",
        text: "Is it enough — and does it reflect reality?",
      },
      {
        type: "p",
        text: "You need a fair number of examples, and they need to look like the real world the system will face. A few dozen records won't teach a model much. And if your history only covers your easy cases, the system will be blindsided by the hard ones. The data should include the messy, the rare, and the awkward — not just the clean wins.",
      },
      {
        type: "quote",
        text: "The goal isn't perfect data. It's data that's honest about the world the AI has to work in.",
      },
      {
        type: "h2",
        text: "Can you actually get to it?",
      },
      {
        type: "p",
        text: "Data trapped in a system nobody can export from, or scattered across ten spreadsheets and three tools, is data you can't use yet. Before you build, make sure the information can be reached, joined together, and refreshed — otherwise you'll have a model that worked once and can't be kept alive.",
      },
      {
        type: "h2",
        text: "What to do if you fail the checklist",
      },
      {
        type: "p",
        text: "Failing isn't a reason to give up on AI — it's a cheaper, earlier project. Start capturing the missing data, clean up the worst of the mess, and connect the sources. That groundwork pays off for far more than the one project, and it's the difference between a demo that impresses and a system you can actually trust.",
      },
    ],
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
  { year: "2026", title: "Growing strong", text: "Now working with startups, small businesses, and D2C brands across eight industries worldwide." },
];

export const team = [
  { name: "Founder & Principal", role: "AI Strategy" },
  { name: "Head of Engineering", role: "Custom AI & Agents" },
  { name: "Lead Data Scientist", role: "Predictive Analytics" },
  { name: "Automation Lead", role: "Workflow & Integrations" },
  { name: "Design & UX Lead", role: "Product & Interfaces" },
  { name: "Delivery Lead", role: "Client Success" },
];
