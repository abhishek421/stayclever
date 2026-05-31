import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import InsightsList from "@/components/sections/InsightsList";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Practical perspectives on applied AI — strategy, automation, agents, industry trends, and case studies you can use this quarter.",
};

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        ghost="IDEAS"
        titleLines={["Practical thinking", "on applied AI"]}
        intro="No futurism. No hype cycles. Just perspectives you can act on in the next quarter."
      />
      <InsightsList />
      <FinalCTA />
    </>
  );
}
