"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { AuroraText } from "@/components/ui/aurora-text";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { DotPattern } from "@/components/ui/dot-pattern";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <DotPattern
        width={24}
        height={24}
        cr={1}
        className="absolute inset-0 -z-10 opacity-40 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_40%,black_30%,transparent_100%)]"
      />

      <div className="absolute inset-0 -z-10 opacity-25">
        <div className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-br from-brand-purple/20 via-brand-teal/10 to-brand-magenta/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6 pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="mx-auto max-w-3xl text-center">
          <BlurFade delay={0.1} inView>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/50 px-4 py-1.5 text-sm backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-teal opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-teal" />
              </span>
              <AnimatedShinyText shimmerWidth={80}>
                Now offering workflow automation
              </AnimatedShinyText>
            </div>
          </BlurFade>

          <BlurFade delay={0.2} inView>
            <h1 className="text-balance text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
              <span className="bg-gradient-to-br from-foreground via-foreground/90 to-muted-foreground bg-clip-text text-transparent">
                Automate.{" "}
              </span>
              <AuroraText
                colors={["#4C1D95", "#0D6B58", "#9333EA", "#4C1D95"]}
                speed={1.5}
              >
                Build.
              </AuroraText>{" "}
              <span className="bg-gradient-to-br from-foreground via-foreground/90 to-muted-foreground bg-clip-text text-transparent">
                Grow.
              </span>
            </h1>
          </BlurFade>

          <BlurFade delay={0.35} inView>
            <p className="mx-auto mt-8 max-w-xl text-pretty text-lg text-muted-foreground md:text-xl">
              You started your business to do what you love — not to drown in
              repetitive tasks. We help Alberta business owners save time and
              grow with workflow automation, modern websites, and practical AI.
              Proudly serving Edmonton, Strathcona County, Calgary, and across
              province.
            </p>
          </BlurFade>

          <BlurFade delay={0.5} inView>
            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="#contact">
                <ShimmerButton
                  background="var(--brand-purple)"
                  shimmerColor="rgba(255,255,255,0.3)"
                  shimmerSize="0.08em"
                  borderRadius="14px"
                  className="px-8 py-3 text-base font-medium shadow-lg shadow-brand-purple/25"
                >
                  Let&apos;s Talk — It&apos;s Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </ShimmerButton>
              </Link>
              <Button
                asChild
                size="lg"
                variant="ghost"
                className="rounded-xl px-8 text-base font-medium"
              >
                <Link href="#showcase">Explore What We Build</Link>
              </Button>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
