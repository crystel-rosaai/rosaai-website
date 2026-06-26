"use client";

import { ScrollProgress } from "@/components/ui/scroll-progress";

export function ScrollProgressBar() {
  return (
    <ScrollProgress className="h-[2px] bg-gradient-to-r from-brand-purple via-brand-teal to-brand-magenta" />
  );
}
