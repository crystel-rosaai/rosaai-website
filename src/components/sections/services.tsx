"use client";

import { Workflow, Globe, Bot, ArrowRight } from "lucide-react";
import Link from "next/link";
import { BlurFade } from "@/components/ui/blur-fade";
import { MagicCard } from "@/components/ui/magic-card";
import { NumberTicker } from "@/components/ui/number-ticker";

const services = [
  {
    icon: Workflow,
    title: "Workflow Automation",
    description:
      "Tired of copying data between apps or chasing follow-ups manually? We build custom n8n automations for Alberta businesses that handle the repetitive work — so you can focus on your clients.",
    gradient: "from-brand-purple to-brand-teal",
    href: "#contact",
  },
  {
    icon: Globe,
    title: "Website Design",
    description:
      "Your website should work as hard as you do. We design modern, fast websites for Edmonton, Strathcona County, Calgary, and Alberta businesses — built to attract the right customers and make a strong first impression.",
    gradient: "from-brand-teal to-brand-magenta",
    href: "#contact",
  },
  {
    icon: Bot,
    title: "AI Implementation",
    description:
      "AI doesn't have to be overwhelming. Whether it's an AI chatbot for your small business or smarter document processing, we walk you through every step and build solutions that actually fit how you work.",
    gradient: "from-brand-magenta to-brand-purple",
    href: "#contact",
  },
];

const stats = [
  { value: 500, suffix: "+", label: "Hours Saved" },
  { value: 10, suffix: "+", label: "Automations Built" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <BlurFade delay={0.1} inView>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              How We Help
            </p>
            <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Tools and strategies that give you your time back
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              We start with education, not a sales pitch. Every solution we recommend is grounded in your real business needs.
            </p>
          </div>
        </BlurFade>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <BlurFade key={service.title} delay={0.2 + index * 0.1} inView>
              <MagicCard
                className="h-full rounded-2xl"
                gradientColor="rgba(76, 29, 149, 0.05)"
                gradientFrom="#4C1D95"
                gradientTo="#9333EA"
              >
                <div className="p-8">
                  <div
                    className={`mb-6 inline-flex rounded-xl bg-gradient-to-br ${service.gradient} p-3 text-white shadow-lg shadow-brand-purple/20`}
                  >
                    <service.icon className="h-6 w-6" />
                  </div>

                  <h3 className="text-xl font-semibold tracking-tight">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  <Link
                    href={service.href}
                    className="mt-6 inline-flex items-center text-sm font-medium text-primary transition-colors hover:text-primary/80"
                  >
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </MagicCard>
            </BlurFade>
          ))}
        </div>

        <BlurFade delay={0.5} inView>
          <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                  <NumberTicker value={stat.value} className="text-foreground" />
                  <span>{stat.suffix}</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
