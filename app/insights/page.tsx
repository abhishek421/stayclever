import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import InsightsList from "@/components/sections/InsightsList";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Insights — Practical AI Ideas You Can Use",
  description:
    "Clear, jargon-free advice on using AI in your business — strategy, automation, chatbots, and real case studies you can act on this quarter.",
};

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        ghost="IDEAS"
        titleLines={["Practical AI ideas", "you can use"]}
        intro="No futurism. No hype. Just clear, practical ideas you can put to work this quarter."
      />
      <InsightsList />
      <FinalCTA />
    </>
  );
}
