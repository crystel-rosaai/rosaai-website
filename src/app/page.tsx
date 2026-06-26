import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { ScrollProgressBar } from "@/components/layout/scroll-progress-bar";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Showcase } from "@/components/sections/showcase";
import { About } from "@/components/sections/about";
import { Founder } from "@/components/sections/founder";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/layout/footer";
import { OrganizationJsonLd, LocalBusinessJsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: "RosaAI — Workflow Automation, Website Design & AI Implementation",
  description:
    "RosaAI helps Alberta businesses automate workflows, build modern websites, and implement practical AI solutions. Based in Edmonton, Alberta, Canada.",
  openGraph: {
    title: "RosaAI — Workflow Automation, Website Design & AI Implementation",
    description:
      "RosaAI helps Alberta businesses automate workflows, build modern websites, and implement practical AI solutions. Based in Edmonton, Alberta, Canada.",
    type: "website",
    url: "https://rosaai.ca",
  },
};

export default function Home() {
  return (
    <>
      <OrganizationJsonLd />
      <LocalBusinessJsonLd />
      <ScrollProgressBar />
      <Header />
      <main>
        <Hero />
        <Services />
        <Showcase />
        <About />
        <Founder />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
