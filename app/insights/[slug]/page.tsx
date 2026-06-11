import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { insights, type ContentBlock } from "@/lib/data";
import { site } from "@/lib/site";
import { Reveal } from "@/components/ui/Reveal";
import FinalCTA from "@/components/sections/FinalCTA";
import { ArrowLeft, ArrowUpRight, Clock } from "lucide-react";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return insights.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = insights.find((p) => p.slug === slug);
  if (!post) return {};

  const description = post.metaDescription ?? post.excerpt;
  const url = `${site.url}/insights/${post.slug}`;

  return {
    title: post.title,
    description,
    keywords: post.keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: post.title,
      description,
      url,
      siteName: site.name,
      publishedTime: new Date(post.date).toISOString(),
      authors: [post.author],
      images: [{ url: post.image, width: 1600, height: 900, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description,
      images: [post.image],
    },
  };
}

function Block({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "h2":
      return (
        <h2 className="mt-12 font-display text-2xl font-bold text-ink sm:text-3xl">
          {block.text}
        </h2>
      );
    case "p":
      return (
        <p className="mt-5 text-lg leading-relaxed text-ink/80">{block.text}</p>
      );
    case "ul":
      return (
        <ul className="mt-5 space-y-3">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-3 text-lg leading-relaxed text-ink/80">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote className="my-8 border-l-4 border-accent bg-accent-wash/50 py-4 pl-6 pr-4 font-display text-xl font-medium italic text-ink">
          {block.text}
        </blockquote>
      );
  }
}

export default async function InsightArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = insights.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = insights.filter((p) => p.slug !== post.slug).slice(0, 3);
  const url = `${site.url}/insights/${post.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription ?? post.excerpt,
    image: `${site.url}${post.image}`,
    datePublished: new Date(post.date).toISOString(),
    author: { "@type": "Organization", name: post.author },
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    articleSection: post.category,
    keywords: post.keywords?.join(", "),
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Insights", item: `${site.url}/insights` },
      { "@type": "ListItem", position: 2, name: post.title, item: url },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      {/* Header */}
      <header className="relative overflow-hidden bg-paper-warm pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="pointer-events-none absolute inset-0 opacity-40 blueprint-grid" />
        <div className="container-shell relative mx-auto max-w-3xl">
          <Link
            href="/insights"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink-muted transition-colors hover:text-accent"
          >
            <ArrowLeft className="h-4 w-4" />
            All insights
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-ink-muted">
            <span className="rounded-full bg-accent-wash px-3 py-1 font-semibold text-accent">
              {post.category}
            </span>
            <span>{post.date}</span>
            <span>·</span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              {post.readTime}
            </span>
          </div>
          <h1 className="display mt-5 text-4xl sm:text-5xl lg:text-[3.4rem]">
            {post.title}
          </h1>
          <p className="lead mt-6">{post.excerpt}</p>
        </div>

        <div className="container-shell relative mx-auto mt-12 max-w-4xl">
          <div className="relative aspect-[16/9] overflow-hidden rounded-4xl border border-paper-line bg-accent-wash shadow-card">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 56rem"
              className="object-cover"
            />
          </div>
        </div>
      </header>

      {/* Body */}
      <article className="bg-paper py-16 sm:py-20">
        <div className="container-shell mx-auto max-w-3xl">
          <Reveal>
            <div>
              {post.body.map((block, i) => (
                <Block key={i} block={block} />
              ))}
            </div>
          </Reveal>

          <div className="mt-14 border-t border-paper-line pt-8">
            <p className="text-sm text-ink-muted">
              Written by{" "}
              <span className="font-semibold text-ink">{post.author}</span>
            </p>
          </div>
        </div>
      </article>

      {/* Related */}
      <section className="bg-paper-warm py-16 sm:py-20">
        <div className="container-shell">
          <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
            Keep reading
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {related.map((p) => (
              <Link
                key={p.slug}
                href={`/insights/${p.slug}`}
                className="group flex flex-col overflow-hidden rounded-3xl border border-paper-line bg-white shadow-card transition-shadow duration-500 hover:shadow-card-hover"
              >
                <div className="relative h-36 overflow-hidden border-b border-paper-line bg-accent-wash">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 20rem"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-accent backdrop-blur">
                    {p.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-base font-bold leading-snug text-ink">
                    {p.title}
                  </h3>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-ink transition-colors group-hover:text-accent">
                    Read more
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
