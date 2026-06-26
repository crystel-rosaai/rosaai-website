"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Zap,
  FileText,
  MessageSquare,
  Mail,
  Calendar,
  Database,
  BarChart3,
  ShoppingCart,
  Users,
  type LucideIcon,
} from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { cn } from "@/lib/utils";

interface Automation {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  icon: LucideIcon;
  gradient: string;
  metric: string;
  details: string[];
}

const automations: Automation[] = [
  {
    id: "client-onboarding-automation",
    title: "Client Onboarding",
    description: "Automated client intake from form to CRM to welcome email.",
    longDescription:
      "When a new client fills out the intake form, the automation captures their data, creates a CRM contact, sends a personalized welcome email sequence, creates a project in the project management tool, and notifies the team via Slack.",
    tags: ["n8n", "CRM", "Email", "Slack"],
    icon: Zap,
    gradient: "from-brand-purple to-brand-teal",
    metric: "5+ hrs/week saved",
    details: [
      "Auto-captures form submissions from website",
      "Creates contact in CRM with all fields mapped",
      "Sends personalized welcome email sequence",
      "Creates project folder and tasks automatically",
      "Notifies team via Slack with client details",
    ],
  },
  {
    id: "invoice-processing",
    title: "Invoice Processing",
    description: "AI-powered extraction, matching, and routing for invoices.",
    longDescription:
      "Uses OCR and AI to extract line items, amounts, and vendor details from PDF invoices. Automatically matches against open purchase orders, flags discrepancies, and routes to the appropriate approver based on amount thresholds.",
    tags: ["AI", "OCR", "Automation", "Accounting"],
    icon: FileText,
    gradient: "from-brand-teal to-brand-magenta",
    metric: "90% faster processing",
    details: [
      "OCR extracts data from PDF/image invoices",
      "AI categorizes line items and maps fields",
      "Auto-matches invoices to purchase orders",
      "Flags discrepancies for manual review",
      "Routes to approver based on amount thresholds",
    ],
  },
  {
    id: "lead-qualification",
    title: "Lead Qualification Bot",
    description: "24/7 conversational AI that qualifies and books leads.",
    longDescription:
      "An AI chatbot embedded on the website that engages visitors, asks qualifying questions, scores leads based on responses, and automatically books discovery calls for qualified prospects while syncing all data to the CRM.",
    tags: ["Chatbot", "Sales", "AI", "CRM"],
    icon: MessageSquare,
    gradient: "from-brand-magenta to-brand-purple",
    metric: "3x more qualified leads",
    details: [
      "AI chatbot engages visitors in real-time",
      "Asks qualifying questions based on your criteria",
      "Scores leads automatically using custom rules",
      "Books discovery calls for qualified prospects",
      "Syncs all conversation data to CRM",
    ],
  },
  {
    id: "email-campaigns",
    title: "Email Campaigns",
    description: "Behavior-triggered drip campaigns with personalization.",
    longDescription:
      "Multi-step email sequences that trigger based on specific user actions — sign-ups, page visits, or form submissions. Each email is personalized with dynamic content blocks and performance is tracked automatically.",
    tags: ["Email", "Marketing", "Automation"],
    icon: Mail,
    gradient: "from-brand-purple to-brand-teal",
    metric: "45% open rate",
    details: [
      "Behavior-triggered email sequences",
      "Dynamic content personalization",
      "A/B testing built into workflows",
      "Automatic performance tracking",
      "Smart send-time optimization",
    ],
  },
  {
    id: "appointment-scheduling",
    title: "Appointment Scheduling",
    description: "End-to-end booking with reminders and follow-ups.",
    longDescription:
      "Integrates with calendar systems to show real-time availability, sends SMS and email reminders, handles rescheduling automatically, and triggers post-appointment follow-up workflows.",
    tags: ["Scheduling", "SMS", "Calendar"],
    icon: Calendar,
    gradient: "from-brand-teal to-brand-magenta",
    metric: "80% fewer no-shows",
    details: [
      "Real-time calendar availability sync",
      "SMS + email reminders before appointments",
      "One-click rescheduling for clients",
      "Post-appointment follow-up workflows",
      "No-show detection and re-engagement",
    ],
  },
  {
    id: "data-sync",
    title: "Data Sync Pipeline",
    description: "Real-time sync between platforms, zero manual entry.",
    longDescription:
      "Keeps customer data, orders, and inventory in sync across CRM, e-commerce, and accounting platforms in real-time. Handles conflict resolution and provides a single source of truth.",
    tags: ["Integration", "Data", "Real-time"],
    icon: Database,
    gradient: "from-brand-magenta to-brand-purple",
    metric: "Zero manual entry",
    details: [
      "Bi-directional sync between platforms",
      "Real-time conflict resolution",
      "Single source of truth dashboard",
      "Error logging and auto-retry",
      "Custom field mapping rules",
    ],
  },
  {
    id: "reporting-dashboard",
    title: "Automated Reporting",
    description: "Weekly reports from multiple data sources to your inbox.",
    longDescription:
      "Aggregates data from Google Analytics, CRM, social media, and ad platforms into a unified dashboard. Generates PDF reports weekly and sends them to stakeholders.",
    tags: ["Analytics", "Reporting", "Dashboard"],
    icon: BarChart3,
    gradient: "from-brand-purple to-brand-teal",
    metric: "4 hrs/week saved",
    details: [
      "Multi-source data aggregation",
      "Automated PDF report generation",
      "Weekly email delivery to stakeholders",
      "Trend analysis and highlights",
      "Custom KPI tracking",
    ],
  },
  {
    id: "ecommerce-orders",
    title: "E-commerce Orders",
    description: "Order to fulfillment, fully automated with notifications.",
    longDescription:
      "Captures new orders, updates inventory, generates shipping labels, sends tracking notifications to customers, and triggers review request emails after delivery.",
    tags: ["E-commerce", "Fulfillment", "Notifications"],
    icon: ShoppingCart,
    gradient: "from-brand-teal to-brand-magenta",
    metric: "99% on-time delivery",
    details: [
      "Auto-captures orders from all channels",
      "Real-time inventory updates",
      "Shipping label generation",
      "Customer tracking notifications",
      "Post-delivery review requests",
    ],
  },
  {
    id: "hr-onboarding",
    title: "HR Onboarding",
    description: "New hire setup from docs to accounts to team intros.",
    longDescription:
      "When a new hire is confirmed, the workflow collects required documents, sets up email and tool accounts, assigns onboarding tasks, and schedules intro meetings.",
    tags: ["HR", "Onboarding", "Automation"],
    icon: Users,
    gradient: "from-brand-magenta to-brand-purple",
    metric: "From 2 days to 2 hours",
    details: [
      "Automated document collection",
      "System account provisioning",
      "Onboarding task assignment",
      "Team intro meeting scheduling",
      "Progress tracking dashboard",
    ],
  },
];

export function AutomationsPage() {
  const [selected, setSelected] = useState(automations[0]);

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-6xl px-6 pt-32 pb-20">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Automations" }]} />

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
                {automations.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSelected(item)}
                    className={cn(
                      "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-medium transition-all duration-150",
                      selected.id === item.id
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    )}
                  >
                    <item.icon className="h-4 w-4 shrink-0" />
                    <span className="truncate">{item.title}</span>
                  </button>
                ))}
              </div>
            </nav>
          </BlurFade>

          {/* Content */}
          <div className="min-w-0 flex-1" key={selected.id}>
            <BlurFade delay={0.1} inView>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div
                    className={cn(
                      "flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-md",
                      selected.gradient
                    )}
                  >
                    <selected.icon className="h-7 w-7" />
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

                {/* Placeholder for future image */}
                <div className="mt-4 rounded-2xl border border-dashed border-border/60 bg-muted/20 p-12 text-center text-sm text-muted-foreground">
                  Automation visual coming soon
                </div>
              </div>
            </BlurFade>
          </div>
        </div>
      </div>
    </div>
  );
}
