"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  Zap,
  FileText,
  MessageSquare,
  ArrowRight,
} from "lucide-react";
import { motion } from "motion/react";
import { BlurFade } from "@/components/ui/blur-fade";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { Button } from "@/components/ui/button";
import { LogoCloud } from "@/components/sections/logo-cloud";
import { cn } from "@/lib/utils";

const showcaseItems = [
  {
    title: "Client Onboarding Automation",
    description:
      "A Strathcona County service business was spending hours on manual intake. We automated the full process — form to CRM to welcome email — saving them 10+ hours a week.",
    tags: ["n8n", "CRM", "Email"],
    icon: Zap,
    gradient: "from-brand-purple to-brand-teal",
    rotate: "-3deg",
  },
  {
    title: "Invoice Processing Pipeline",
    description:
      "An Edmonton business needed faster invoice turnaround. We built an AI-powered pipeline that reads invoices, matches them to POs, and routes for approval — no more manual data entry.",
    tags: ["AI", "OCR", "Automation"],
    icon: FileText,
    gradient: "from-brand-teal to-brand-magenta",
    rotate: "0deg",
  },
  {
    title: "Lead Qualification Bot",
    description:
      "An Alberta professional services firm wanted to capture leads after hours. We built an AI chatbot that qualifies inquiries 24/7, books meetings, and keeps their pipeline full.",
    tags: ["Chatbot", "Sales", "AI"],
    icon: MessageSquare,
    gradient: "from-brand-magenta to-brand-purple",
    rotate: "3deg",
  },
];


function WorkflowBeamDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="relative mx-auto flex h-32 w-full max-w-md items-center justify-between px-8"
    >
      <div
        ref={triggerRef}
        className="z-10 flex h-14 w-14 items-center justify-center rounded-2xl border bg-card shadow-sm"
      >
        <Zap className="h-6 w-6 text-brand-purple" />
      </div>
      <div
        ref={processRef}
        className="z-10 flex h-14 w-14 items-center justify-center rounded-2xl border bg-card shadow-sm"
      >
        <FileText className="h-6 w-6 text-brand-teal" />
      </div>
      <div
        ref={outputRef}
        className="z-10 flex h-14 w-14 items-center justify-center rounded-2xl border bg-card shadow-sm"
      >
        <MessageSquare className="h-6 w-6 text-brand-magenta" />
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={triggerRef}
        toRef={processRef}
        gradientStartColor="#4C1D95"
        gradientStopColor="#0D6B58"
        duration={4}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={processRef}
        toRef={outputRef}
        gradientStartColor="#0D6B58"
        gradientStopColor="#9333EA"
        duration={4}
        delay={1}
      />
    </div>
  );
}

function BounceCard({
  item,
  index,
}: {
  item: (typeof showcaseItems)[0];
  index: number;
}) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        rotate: item.rotate,
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }}
      className="group"
    >
      <Link href={`/automations#${item.title.toLowerCase().replace(/\s+/g, "-")}`}>
        <div className="relative h-full overflow-hidden rounded-2xl border border-border/60 bg-card transition-shadow duration-300 hover:shadow-xl hover:shadow-primary/10">
          <div
            className={cn(
              "flex h-36 items-center justify-center bg-gradient-to-br",
              item.gradient
            )}
          >
            <motion.div
              className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm"
              whileHover={{ y: -8, rotate: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <item.icon className="h-8 w-8 text-white" />
            </motion.div>
          </div>

          <div className="p-6">
            <h3 className="text-lg font-semibold tracking-tight group-hover:text-primary transition-colors">
              {item.title}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              {item.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-4 flex items-center text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
              View details <ArrowRight className="ml-1 h-3 w-3" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export function Showcase() {
  return (
    <section id="showcase" className="relative py-24 md:py-32 bg-muted/30">
      <div className="mx-auto max-w-6xl px-6">
        <BlurFade delay={0.1} inView>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Real Results
            </p>
            <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              See how we help Alberta businesses automate and grow
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Every workflow we build starts with understanding your day-to-day.
              Here are a few ways we&apos;ve helped business owners save time and
              stay focused on what matters.
            </p>
          </div>
        </BlurFade>

        <BlurFade delay={0.25} inView>
          <WorkflowBeamDemo />
        </BlurFade>

        <div className="mt-4 grid grid-cols-1 gap-8 md:grid-cols-3">
          {showcaseItems.map((item, index) => (
            <BlurFade key={item.title} delay={0.3 + index * 0.1} inView>
              <BounceCard item={item} index={index} />
            </BlurFade>
          ))}
        </div>

        <BlurFade delay={0.55} inView>
          <div className="mt-12 flex justify-center">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-xl px-8 text-base font-medium"
            >
              <Link href="/automations">
                View All Automations
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </BlurFade>

        <LogoCloud />
      </div>
    </section>
  );
}
