"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { LogoCloud as LogoCloudUI } from "@/components/ui/logo-cloud-4";

const logos = [
  {
    src: "https://svgl.app/library/n8n.svg",
    alt: "n8n",
  },
  {
    src: "https://cdn.simpleicons.org/modelcontextprotocol",
    alt: "MCP",
  },
  {
    src: "https://cdn.brandfetch.io/idNMs_nMA0/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1667563370508",
    alt: "Zapier",
  },
  {
    src: "https://svgl.app/library/openai_wordmark_light.svg",
    alt: "OpenAI",
  },
  {
    src: "https://svgl.app/library/slack.svg",
    alt: "Slack",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/1/12/Google_Drive_icon_%282020%29.svg",
    alt: "Google Drive",
  },
  {
    src: "https://svgl.app/library/claude-ai-wordmark-icon_light.svg",
    alt: "Claude AI",
  },
  {
    src: "https://svgl.app/library/vercel_wordmark.svg",
    alt: "Vercel",
  },
  {
    src: "https://svgl.app/library/notion.svg",
    alt: "Notion",
  },
  {
    src: "https://svgl.app/library/stripe_wordmark.svg",
    alt: "Stripe",
  },
  {
    src: "https://cdn.brandfetch.io/idWrWLZ_I5/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1676261446352",
    alt: "Intuit",
  },
  {
    src: "https://cdn.brandfetch.io/idK1CiIFAV/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1667650737306",
    alt: "Cal.com",
  },
];

export function LogoCloud() {
  return (
    <div className="mt-16">
      <BlurFade delay={0.6} inView>
        <div className="w-full">
          <h2 className="mb-5 text-center">
            <span className="font-black text-2xl text-primary tracking-tight md:text-3xl block">
              Tools & Integrations
            </span>
            <span className="block font-medium text-lg text-muted-foreground mt-1">
              Trusted tools we use
            </span>
          </h2>
          <LogoCloudUI logos={logos} />
        </div>
      </BlurFade>
    </div>
  );
}
