"use client";

import { useState } from "react";
import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { getIcon } from "@/lib/icon-map";
import { cn } from "@/lib/utils";
import type { AutomationData } from "@/lib/automations";

export function AutomationsPage({
  automations,
}: {
  automations: AutomationData[];
}) {
  const [selected, setSelected] = useState(automations[0]);

  if (automations.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <div className="mx-auto max-w-6xl px-6 pt-32 pb-20 text-center">
          <p className="text-muted-foreground">No automations found.</p>
        </div>
      </div>
    );
  }

  const SelectedIcon = getIcon(selected.icon);

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-6xl px-6 pt-32 pb-20">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Automations" },
          ]}
        />

        <BlurFade delay={0.15} inView>
          <div className="mt-6 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Our Automations
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Workflows that work while you sleep
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Every automation we build is designed to save real time, reduce
              errors, and let you focus on what matters most.
            </p>
          </div>
        </BlurFade>

        <div className="mt-12 flex flex-col gap-10 lg:flex-row">
          {/* Sidebar */}
          <BlurFade delay={0.2} inView>
            <nav className="w-full shrink-0 lg:w-64">
              <div className="sticky top-28 space-y-1 rounded-2xl border border-border/60 bg-card p-3">
                {automations.map((item) => {
                  const ItemIcon = getIcon(item.icon);
                  return (
                    <button
                      key={item.slug}
                      onClick={() => setSelected(item)}
                      className={cn(
                        "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-medium transition-all duration-150",
                        selected.slug === item.slug
                          ? "bg-primary text-primary-foreground shadow-sm"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      )}
                    >
                      <ItemIcon className="h-4 w-4 shrink-0" />
                      <span className="truncate">{item.title}</span>
                    </button>
                  );
                })}
              </div>
            </nav>
          </BlurFade>

          {/* Content */}
          <div className="min-w-0 flex-1" key={selected.slug}>
            <BlurFade delay={0.1} inView>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div
                    className={cn(
                      "flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-md",
                      selected.gradient
                    )}
                  >
                    <SelectedIcon className="h-7 w-7" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold tracking-tight">
                      {selected.title}
                    </h2>
                    <span className="mt-1 inline-block rounded-full bg-primary/10 px-3 py-0.5 text-sm font-semibold text-primary">
                      {selected.metric}
                    </span>
                  </div>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  {selected.longDescription}
                </p>

                <div className="flex flex-wrap gap-2">
                  {selected.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {selected.details.length > 0 && (
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                      How it works
                    </h3>
                    <ol className="mt-4 space-y-4">
                      {selected.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-4">
                          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                            {i + 1}
                          </span>
                          <span className="pt-0.5 text-foreground/80">
                            {detail}
                          </span>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}

                {selected.thumbnail && (
                  <div className="mt-4 overflow-hidden rounded-2xl border border-border/60">
                    <Image
                      src={selected.thumbnail}
                      alt={`${selected.title} automation workflow`}
                      width={800}
                      height={450}
                      className="w-full object-cover"
                    />
                  </div>
                )}

                {!selected.thumbnail && (
                  <div className="mt-4 rounded-2xl border border-dashed border-border/60 bg-muted/20 p-12 text-center text-sm text-muted-foreground">
                    Automation visual coming soon
                  </div>
                )}
              </div>
            </BlurFade>
          </div>
        </div>
      </div>
    </div>
  );
}
