# StayClever

> Practical AI Consulting & Automation for Growing Businesses

The marketing website for **StayClever** — an AI consulting and automation studio that turns AI from a buzzword into real, measurable results. Editorial design, oversized typography, and a distinctive hand-drawn illustration identity.

🌐 [stayclever.in](https://stayclever.in) · ✉️ hello@stayclever.in

---

## About StayClever

StayClever is an **AI consulting and automation studio** built on a simple belief: most businesses don't need more AI hype — they need fewer wasted hours. We help **startups, small businesses, and D2C brands** use AI to automate everyday work, answer customers faster, cut costs, and grow — without the jargon.

Founded in **2021**, we now work with clients across **eight industries** worldwide. We judge ourselves on one thing: results we can put numbers to.

### How we work

We start with how your business actually runs, find the work that's quietly costing you, and remove it with the smallest amount of AI that does the job. Then we measure it, and build on what works. No science experiments, no vendor lock-in — we hand over clean, documented systems your team can own.

### What we do

| Service | What it delivers |
|---|---|
| **AI Strategy & Planning** | A prioritized 12-month plan with the expected return for each move, in 2–3 weeks. |
| **Workflow Automation & AI Agents** | Automate repetitive tasks and build agents that complete whole multi-step jobs end to end. |
| **AI Chat & Voice Assistants** | Assistants that answer customers in seconds — by chat or phone, around the clock. |
| **Recommendation Systems** | Engines trained on your catalog and customer behaviour that lift every order. |
| **Custom AI Solutions** | AI built around your unique process and your own data — fully owned by you. |

Our signature entry point is **"A Day With the Founder"** — a founder-led discovery day that maps your highest-value AI opportunities.

### What we believe

- **Outcomes over hype** — success is measured in money saved, time back, and revenue up.
- **Pragmatic, not flashy** — build the smallest thing that creates real value, then grow it.
- **Safety by default** — safety checks, human oversight, and clear records come standard.
- **You own the outcome** — clean, documented systems handed over to your team.

### Mission & vision

**Mission:** Help startups, small businesses, and D2C brands use AI to automate work, save time, cut costs, and grow — practically, and in ways you can measure.

**Vision:** A world where every business — not just the tech giants — has an AI advantage they own, understand, and can grow on their own terms.

---

## Tech stack

- **Next.js 15** (App Router) + **TypeScript**
- **TailwindCSS** (custom design system)
- **Framer Motion** — scroll reveals, staggers, magnetic buttons, counters, text reveals
- **GSAP + ScrollTrigger** — pinned horizontal "process" storytelling
- **Lenis** — smooth scroll
- **lucide-react** — icons
- Custom **hand-drawn SVG illustrations** (robot, human+AI collaboration, ecosystem, doodles)

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (all routes prerendered)
npm run start
```

## Project structure

```
app/                    # App Router pages
  page.tsx              # Home (hero, services, industries, process, testimonials, CTA)
  services/             # Services — problem/solution/benefits/use-cases/process
  industries/           # Per-industry AI applications
  case-studies/         # List + dynamic [slug] case studies (SSG)
  about/                # Story, mission/vision, values, timeline
  insights/             # Blog — filterable list + full [slug] articles (SSG, SEO)
  contact/              # Contact form + details
  sitemap.ts, robots.ts # SEO
components/
  layout/               # Navbar, Footer, Logo, SmoothScroll (Lenis)
  ui/                   # Reveal, TextReveal, Counter, MagneticButton, SectionHeading, PageHero
  illustrations/        # Robot, Collaboration, Ecosystem, FloatingIcons, Doodles
  sections/             # Home + shared page sections
lib/
  site.ts               # Nav, CTAs, contact info
  data.ts               # Services, industries, case studies, insights, values, timeline
public/
  insights/             # Blog cover images (one .png per article slug)
```

## Content

Most site content is data-driven from `lib/data.ts` — services, industries, case studies, and blog posts are typed arrays you can edit without touching components.

**Blog articles** live in the `insights` array. Each post has a `slug`, `title`, `category`, `excerpt`, `body` (structured content blocks), SEO `metaDescription` / `keywords`, and an `image` path. Article pages render at `/insights/<slug>` with full metadata, OpenGraph/Twitter cards, and `BlogPosting` + `BreadcrumbList` JSON-LD. Cover images go in `public/insights/<slug>.png` (recommended 1600×900).

## Design system

- **Type:** Playfair Display (editorial headings) + Inter (body)
- **Palette:** pure white paper, near-black ink `#0A0A0B`, accent blue `#2563EB`, light-blue chalk highlights
- **Motion:** subtle, sophisticated — no flashy startup animations. Respects `prefers-reduced-motion`.

## Notes

- The contact form is wired to a simulated submit (`components/sections/ContactForm.tsx`). Connect it to your CRM / API endpoint to go live.
- Core illustrations are hand-authored inline SVG — fully editable, no image assets to manage. Blog cover images are the only raster assets, under `public/insights/`.
