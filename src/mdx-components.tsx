import type { MDXComponents } from "mdx/types";
import { VideoEmbed } from "@/components/mdx/video-embed";
import { Callout } from "@/components/mdx/callout";
import { StatCard } from "@/components/mdx/stat-card";
import { BeforeAfter } from "@/components/mdx/before-after";
import { Quote } from "@/components/mdx/quote";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    VideoEmbed,
    Callout,
    StatCard,
    BeforeAfter,
    Quote,
  };
}
