export const site = {
  name: "StayClever",
  tagline: "Practical AI Consulting & Automation for Growing Businesses",
  description:
    "StayClever helps startups, small businesses, and D2C brands use AI to automate everyday work, answer customers faster, cut costs, and grow — without the jargon. Start with a free AI plan.",
  url: "https://stayclever.ai",
  email: "hello@stayclever.ai",
  phone: "+1 (415) 555-0142",
  location: "San Francisco · Remote-first",
  cta: {
    primary: { label: "Book your free call", href: "/contact" },
    secondary: { label: "Let's Talk", href: "/contact" },
  },
  nav: [
    { label: "Services", href: "/services" },
    { label: "Industries", href: "/industries" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "About", href: "/about" },
    { label: "Insights", href: "/insights" },
    { label: "Contact", href: "/contact" },
  ],
  social: [
    { label: "LinkedIn", href: "#" },
    { label: "X / Twitter", href: "#" },
    { label: "GitHub", href: "#" },
  ],
};

export type NavItem = (typeof site.nav)[number];
