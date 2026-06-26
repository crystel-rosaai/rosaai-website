"use client";

import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";
import { PlusCard } from "@/components/ui/ruixen-bento-cards";
import { LightRays } from "@/components/ui/light-rays";

const cards = {
  it: {
    title: "15+ Years in IT",
    description:
      "Over 15 years working in infrastructure, software, automation, and AI — Crystel has seen what works (and what doesn't) across industries.",
  },
  qa: {
    title: "6+ Years in QA",
    description:
      "Six years in QA taught Crystel to think in details — every automation is tested thoroughly before it touches your business.",
  },
  business: {
    title: "Business-First Approach",
    description:
      "Technology is only useful if it fits how your business actually runs. Crystel starts every conversation by understanding your goals, your day-to-day, and where you're spending too much time. Then we build automations that slot into your workflow naturally — no disruption, just results you can measure.",
  },
  alberta: {
    title: "Based in Edmonton",
    description:
      "Based in Edmonton, Alberta. Crystel works with business owners across Strathcona County, Calgary, and the rest of the province — because local businesses deserve local support.",
  },
  ai: {
    title: "AI & Automation Expert",
    description:
      "From n8n workflow automation to AI chatbots, Crystel builds practical solutions that automate business processes and give you back the hours you need to grow.",
  },
  wibasc: {
    title: "Proud WIBASC Member",
    description:
      "As an active member of the Women In Business Association Strathcona County, Crystel is invested in the local business community — not just as a consultant, but as a neighbour.",
  },
};

export function Founder() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <LightRays
        count={5}
        color="rgba(76, 29, 149, 0.12)"
        blur={40}
        speed={16}
        length="80vh"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <BlurFade delay={0.1} inView>
          <div className="mx-auto max-w-2xl text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Meet the Founder
            </p>
          </div>
        </BlurFade>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 auto-rows-auto gap-4">
          {/* Row 1: Photo card (3 cols, 2 rows) + Business-First Approach (3 cols, 2 rows) */}
          <div className="lg:col-span-3 lg:row-span-2">
            <BlurFade delay={0.15} inView>
              <PlusCard
                title="Crystel Cortez"
                description="Founder & AI Consultant"
                className="h-full"
              >
                <div className="relative z-10 mb-4 aspect-[7/5] overflow-hidden rounded-lg">
                  <Image
                    src="/crystel.jpg"
                    alt="Crystel Cortez, Founder of RosaAI"
                    fill
                    className="object-cover object-top rounded-lg"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </PlusCard>
            </BlurFade>
          </div>

          <div className="lg:col-span-3 lg:row-span-2">
            <BlurFade delay={0.2} inView>
              <PlusCard
                title={cards.business.title}
                description={cards.business.description}
                className="h-full"
              />
            </BlurFade>
          </div>

          {/* Row 2: AI & Automation Expert (2 cols) + 15+ Years in IT (2 cols) + 6+ Years in QA (2 cols) */}
          <div className="lg:col-span-2">
            <BlurFade delay={0.25} inView>
              <PlusCard
                title={cards.ai.title}
                description={cards.ai.description}
              />
            </BlurFade>
          </div>

          <div className="lg:col-span-2">
            <BlurFade delay={0.3} inView>
              <PlusCard
                title={cards.it.title}
                description={cards.it.description}
              />
            </BlurFade>
          </div>

          <div className="lg:col-span-2">
            <BlurFade delay={0.35} inView>
              <PlusCard
                title={cards.qa.title}
                description={cards.qa.description}
              />
            </BlurFade>
          </div>

          {/* Row 3: Based in Alberta (3 cols) + Proud WIBASC Member (3 cols) */}
          <div className="lg:col-span-3">
            <BlurFade delay={0.35} inView>
              <PlusCard
                title={cards.alberta.title}
                description={cards.alberta.description}
              />
            </BlurFade>
          </div>

          <div className="lg:col-span-3">
            <BlurFade delay={0.4} inView>
              <PlusCard
                title={cards.wibasc.title}
                description={cards.wibasc.description}
              />
            </BlurFade>
          </div>
        </div>
      </div>
    </section>
  );
}
