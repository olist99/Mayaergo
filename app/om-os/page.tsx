import type { Metadata } from "next";
import AboutToggle from "@/components/AboutToggle";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Om os - Sikker Havn Ergoterapi",
  description: "Ergoterapeut med egen erfaring med autisme, angst og belastningsreaktioner (depression, angst, stress).",
};

export default function AboutPage() {
  return (
    <section className="bg-[var(--color-surface)]">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
        <h1 className="mb-8 font-display text-4xl font-semibold text-[var(--color-ink)]">Om os</h1>
        <AboutToggle
          mayaName={business.name}
          assistantName={business.assistantName}
          autorisationsId={business.autorisationsId}
        />
      </div>
    </section>
  );
}
