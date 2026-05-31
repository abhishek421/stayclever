import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { caseStudies } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/services", "/industries", "/case-studies", "/about", "/insights", "/contact"];
  const base = routes.map((r) => ({
    url: `${site.url}${r}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: r === "" ? 1 : 0.8,
  }));
  const cs = caseStudies.map((c) => ({
    url: `${site.url}/case-studies/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));
  return [...base, ...cs];
}
