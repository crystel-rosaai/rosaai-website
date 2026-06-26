"use client";

import { ArrowRight } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { PulsatingButton } from "@/components/ui/pulsating-button";
import { BorderBeam } from "@/components/ui/border-beam";
import { useCalPopup } from "@/components/ui/cal-popup";

export function CTA() {
  const openCal = useCalPopup();

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <BlurFade delay={0.1} inView>
          <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card px-8 py-16 sm:px-16 md:py-24">
            <BorderBeam
              size={200}
              duration={8}
              colorFrom="#4C1D95"
              colorTo="#9333EA"
              borderWidth={1.5}
            />

            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Curious what automation could do for your business?
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                Let&apos;s have a conversation — no commitment, no pressure.
                We&apos;ll explore where workflow automation or AI could save you
                time, and you&apos;ll walk away with clear next steps whether we
                work together or not. That&apos;s how we do things at RosaAI.
              </p>
              <div className="mt-10 flex justify-center">
                <PulsatingButton
                  pulseColor="#4C1D95"
                  duration="2s"
                  className="rounded-xl px-8 py-3 text-base font-medium"
                  onClick={openCal}
                >
                  Book a Free Discovery Call
                  <ArrowRight className="ml-2 inline h-4 w-4" />
                </PulsatingButton>
              </div>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
