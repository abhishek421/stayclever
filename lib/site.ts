export const site = {
  name: "StayClever",
  tagline: "AI Consulting & Automation That Drives Real Business Impact",
  description:
    "StayClever helps startups, SMBs, and D2C brands leverage practical AI to automate workflows, improve efficiency, reduce costs, and scale operations.",
  url: "https://stayclever.ai",
  email: "hello@stayclever.ai",
  phone: "+1 (415) 555-0142",
  location: "San Francisco · Remote-first",
  cta: {
    primary: { label: "Get AI Audit", href: "/contact" },
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
