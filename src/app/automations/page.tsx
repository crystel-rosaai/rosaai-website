import { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { AutomationsPage } from "./automations-page";

export const metadata: Metadata = {
  title: "Workflow Automation Examples | n8n & AI Automations — RosaAI",
  description:
    "Explore the workflow automations we've built for Alberta businesses. From client onboarding to invoice processing and lead qualification using n8n and AI.",
  openGraph: {
    title: "Workflow Automation Examples | n8n & AI Automations — RosaAI",
    description:
      "Explore the workflow automations we've built for Alberta businesses. From client onboarding to invoice processing and lead qualification using n8n and AI.",
    type: "website",
    url: "https://rosaai.ca/automations",
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <AutomationsPage />
      <Footer />
    </>
  );
}
