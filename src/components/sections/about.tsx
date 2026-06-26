"use client";

import Image from "next/image";
import { Workflow, Globe, Bot, Sparkles, Zap, Settings } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import { CheckCircle2 } from "lucide-react";

const values = [
  "We explain everything in plain language — no jargon, ever",
  "We focus on practical solutions that fit your business, not hype",
  "We measure our success by your results, not hours billed",
  "We build lasting partnerships with Alberta business owners, not one-off projects",
];

export function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div>
            <BlurFade delay={0.1} inView>
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                About RosaAI
              </p>
            </BlurFade>
            <BlurFade delay={0.2} inView>
              <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
                Your partner in AI consulting, right here in Alberta
              </h2>
            </BlurFade>
            <BlurFade delay={0.3} inView>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                We believe every business owner should understand what&apos;s
                possible before making decisions. That&apos;s why we lead with
                education, not sales pitches. Based in Edmonton, RosaAI helps
                businesses across Strathcona County, Calgary, and the rest of
                Alberta bridge the gap between complex technology and the
                real-world results you need.
              </p>
            </BlurFade>

            <BlurFade delay={0.4} inView>
              <ul className="mt-8 space-y-4">
                {values.map((value) => (
                  <li key={value} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-foreground/80">{value}</span>
                  </li>
                ))}
              </ul>
            </BlurFade>
          </div>

          <BlurFade delay={0.3} inView>
            <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-3xl border border-border/40 bg-gradient-to-br from-brand-purple/5 via-brand-teal/5 to-brand-magenta/5">
              <Image
                src="/logo-icon.png"
                alt="RosaAI"
                width={80}
                height={80}
                className="h-20 w-auto"
              />

              <OrbitingCircles radius={100} duration={25} speed={1}>
                <div className="flex h-10 w-10 items-center justify-center rounded-full border bg-card shadow-sm">
                  <Workflow className="h-5 w-5 text-brand-purple" />
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full border bg-card shadow-sm">
                  <Globe className="h-5 w-5 text-brand-teal" />
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full border bg-card shadow-sm">
                  <Bot className="h-5 w-5 text-brand-magenta" />
                </div>
              </OrbitingCircles>

              <OrbitingCircles radius={170} duration={35} speed={1} reverse>
                <div className="flex h-9 w-9 items-center justify-center rounded-full border bg-card/80 shadow-sm">
                  <Sparkles className="h-4 w-4 text-brand-purple/70" />
                </div>
                <div className="flex h-9 w-9 items-center justify-center rounded-full border bg-card/80 shadow-sm">
                  <Zap className="h-4 w-4 text-brand-teal/70" />
                </div>
                <div className="flex h-9 w-9 items-center justify-center rounded-full border bg-card/80 shadow-sm">
                  <Settings className="h-4 w-4 text-brand-magenta/70" />
                </div>
              </OrbitingCircles>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
