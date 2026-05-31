# StayClever

> AI Consulting & Automation That Drives Real Business Impact

A premium, enterprise-grade marketing website for **StayClever**, an AI consulting and automation studio. Editorial design, oversized typography, and a distinctive hand-drawn illustration identity — built to feel like a $25k+ agency site, not a generic SaaS template.

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
  page.tsx              # Home (9 sections)
  services/             # Services — problem/solution/benefits/use-cases/process
  industries/           # Per-industry AI applications
  case-studies/         # List + dynamic [slug] case studies (SSG)
  about/                # Story, mission/vision, values, timeline, team
  insights/             # Filterable blog layout
  contact/              # Form + AI Readiness Assessment teaser
  sitemap.ts, robots.ts # SEO
components/
  layout/               # Navbar, Footer, Logo, SmoothScroll (Lenis)
  ui/                   # Reveal, TextReveal, Counter, MagneticButton, SectionHeading, PageHero
  illustrations/        # Robot, Collaboration, Ecosystem, FloatingIcons, Doodles
  sections/             # Home + shared page sections
lib/
  site.ts               # Nav, CTAs, contact info
  data.ts               # Services, industries, case studies, insights, team, stats
```

## Design system

- **Type:** Playfair Display (editorial headings) + Inter (body)
- **Palette:** pure white paper, near-black ink `#0A0A0B`, accent blue `#2563EB`, light-blue chalk highlights
- **Motion:** subtle, sophisticated — no flashy startup animations. Respects `prefers-reduced-motion`.

## Notes

- The contact form is wired to a simulated submit (`components/sections/ContactForm.tsx`). Connect it to your CRM / API endpoint to go live.
- Illustrations are hand-authored inline SVG — fully editable, no image assets to manage.
# stayclever
