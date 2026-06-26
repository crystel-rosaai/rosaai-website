import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Terms of Service — RosaAI",
  description:
    "Terms of Service for RosaAI workflow automation, website design, and AI implementation services. Read our client agreement, payment terms, and policies.",
  openGraph: {
    title: "Terms of Service — RosaAI",
    description:
      "Terms of Service for RosaAI workflow automation, website design, and AI implementation services. Read our client agreement, payment terms, and policies.",
    type: "website",
    url: "https://rosaai.ca/terms",
  },
};

export default function TermsPage() {
  return (
    <>
    <Header />
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-6 pt-32 pb-20">
        <Link
          href="/"
          className="mb-8 inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold tracking-tight">Terms of Service</h1>
        <p className="mt-2 text-muted-foreground">
          Last updated: June 26, 2026
        </p>

        <div className="mt-10 space-y-8 text-foreground/80 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-foreground">
              1. Agreement to Terms
            </h2>
            <p className="mt-3">
              By accessing and using RosaAI&apos;s website and services, you
              agree to be bound by these Terms of Service. If you do not agree
              to these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              2. Services
            </h2>
            <p className="mt-3">
              RosaAI provides workflow automation, website design, and AI
              implementation services for businesses. The specific scope,
              deliverables, and pricing for each project will be outlined in a
              separate service agreement or proposal.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              3. Client Responsibilities
            </h2>
            <p className="mt-3">As a client, you agree to:</p>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>
                Provide accurate and complete information necessary for service
                delivery
              </li>
              <li>
                Respond to requests for feedback and approvals in a timely
                manner
              </li>
              <li>
                Ensure you have the rights to any content or data you provide to
                us
              </li>
              <li>Make payments according to agreed-upon terms</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              4. Intellectual Property
            </h2>
            <p className="mt-3">
              Upon full payment, you will own the deliverables created
              specifically for your project. RosaAI retains the right to use
              general knowledge, techniques, and non-proprietary components
              developed during the project. We may showcase anonymized versions
              of our work in our portfolio unless otherwise agreed.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              5. Payment Terms
            </h2>
            <p className="mt-3">
              Payment terms will be specified in your service agreement. Late
              payments may result in suspension of services. All prices are in
              Canadian dollars unless otherwise specified.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              6. Confidentiality
            </h2>
            <p className="mt-3">
              Both parties agree to keep confidential any proprietary
              information shared during the course of the engagement. This
              obligation survives the termination of the service agreement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              7. Limitation of Liability
            </h2>
            <p className="mt-3">
              RosaAI&apos;s total liability for any claims arising from our
              services shall not exceed the total fees paid by the client for
              the specific service in question. We are not liable for any
              indirect, incidental, or consequential damages.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              8. Termination
            </h2>
            <p className="mt-3">
              Either party may terminate a service agreement with 30 days
              written notice. Upon termination, the client is responsible for
              payment of all work completed up to the termination date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              9. Governing Law
            </h2>
            <p className="mt-3">
              These terms are governed by the laws of the Province of Alberta,
              Canada. Any disputes shall be resolved in the courts of Alberta.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              10. Contact
            </h2>
            <p className="mt-3">
              For questions about these terms, contact us at{" "}
              <a
                href="mailto:crystel@rosaai.ca"
                className="text-primary hover:underline"
              >
                crystel@rosaai.ca
              </a>{" "}
              or call (587) 804-2073.
            </p>
          </section>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}
