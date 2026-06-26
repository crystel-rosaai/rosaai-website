"use client";

import { useState, type FormEvent } from "react";
import { Mail, MapPin, Loader2 } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID || "YOUR_FORM_ID";

const inquiryTypes = [
  "Workflow Automation",
  "Website Design",
  "AI Implementation",
  "General Inquiry",
  "Other",
];

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please try again or email us directly.");
      }
    } catch {
      setError("Something went wrong. Please try again or email us directly.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-6xl px-6 pt-32 pb-20">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />

        <div className="mt-6 grid grid-cols-1 gap-16 lg:grid-cols-5">
          {/* Info column */}
          <div className="lg:col-span-2">
            <BlurFade delay={0.15} inView>
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                Get in Touch
              </p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                Let&apos;s talk about your business
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Whether you&apos;re looking to automate a specific workflow,
                build a new website, or explore AI — we&apos;d love to hear from
                you.
              </p>
            </BlurFade>

            <BlurFade delay={0.25} inView>
              <div className="mt-10 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a
                      href="mailto:crystel@rosaai.ca"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      crystel@rosaai.ca
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">Edmonton, Alberta, Canada</p>
                  </div>
                </div>

                <div className="mt-8 rounded-xl bg-muted/50 p-4">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Response time:</span>{" "}
                    Within 1 business day
                  </p>
                </div>
              </div>
            </BlurFade>
          </div>

          {/* Form column */}
          <div className="lg:col-span-3">
            <BlurFade delay={0.2} inView>
              {submitted ? (
                <div className="flex min-h-[400px] flex-col items-center justify-center rounded-2xl border border-border/60 bg-card p-12 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Mail className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">Message sent!</h3>
                  <p className="mt-2 text-muted-foreground">
                    We&apos;ll get back to you within 1 business day.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="rounded-2xl border border-border/60 bg-card p-8"
                >
                  <h2 className="text-xl font-bold">Send us a message</h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Your information is never shared.
                  </p>

                  <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="mb-1.5 block text-sm font-medium"
                      >
                        First Name <span className="text-destructive">*</span>
                      </label>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                        placeholder="Jane"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="mb-1.5 block text-sm font-medium"
                      >
                        Last Name <span className="text-destructive">*</span>
                      </label>
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        required
                        className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-1.5 block text-sm font-medium"
                      >
                        Email Address <span className="text-destructive">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                        placeholder="jane@example.com"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="company"
                        className="mb-1.5 block text-sm font-medium"
                      >
                        Company Name
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                        placeholder="Acme Inc."
                      />
                    </div>
                  </div>

                  <div className="mt-5">
                    <label
                      htmlFor="inquiryType"
                      className="mb-1.5 block text-sm font-medium"
                    >
                      Inquiry Type <span className="text-destructive">*</span>
                    </label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      required
                      className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select an inquiry type
                      </option>
                      {inquiryTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="mt-5">
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-sm font-medium"
                    >
                      Message <span className="text-destructive">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary resize-none"
                      placeholder="Tell us about your project or question..."
                    />
                  </div>

                  {error && (
                    <p className="mt-4 text-sm text-destructive">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="mt-6 w-full rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </form>
              )}
            </BlurFade>
          </div>
        </div>
      </div>
    </div>
  );
}
