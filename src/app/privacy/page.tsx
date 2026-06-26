import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Privacy Policy — RosaAI",
  description:
    "Read the RosaAI privacy policy. Learn how we collect, use, and protect your personal information when you use our AI consulting and automation services.",
  openGraph: {
    title: "Privacy Policy — RosaAI",
    description:
      "Read the RosaAI privacy policy. Learn how we collect, use, and protect your personal information when you use our AI consulting and automation services.",
    type: "website",
    url: "https://rosaai.ca/privacy",
  },
};

export default function PrivacyPage() {
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

        <h1 className="text-4xl font-bold tracking-tight">Privacy Policy</h1>
        <p className="mt-2 text-muted-foreground">
          Last updated: June 26, 2026
        </p>

        <div className="mt-10 space-y-8 text-foreground/80 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-foreground">
              1. Information We Collect
            </h2>
            <p className="mt-3">
              At RosaAI, we collect information you provide directly to us, such
              as when you book a discovery call, fill out a contact form, or
              communicate with us via email. This may include your name, email
              address, phone number, business name, and any other information
              you choose to provide.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              2. How We Use Your Information
            </h2>
            <p className="mt-3">We use the information we collect to:</p>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>Provide, maintain, and improve our services</li>
              <li>Communicate with you about our services</li>
              <li>Send you technical notices and support messages</li>
              <li>Respond to your comments and questions</li>
              <li>Analyze usage patterns to improve user experience</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              3. Information Sharing
            </h2>
            <p className="mt-3">
              We do not sell, trade, or otherwise transfer your personal
              information to outside parties. We may share information with
              trusted third-party service providers who assist us in operating
              our website and conducting our business, so long as those parties
              agree to keep this information confidential.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              4. Data Security
            </h2>
            <p className="mt-3">
              We implement appropriate technical and organizational security
              measures to protect your personal information against unauthorized
              access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              5. Cookies and Tracking
            </h2>
            <p className="mt-3">
              Our website may use cookies and similar tracking technologies to
              enhance your browsing experience and analyze website traffic. You
              can control cookie settings through your browser preferences.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              6. Third-Party Services
            </h2>
            <p className="mt-3">
              Our website may contain links to third-party services such as
              Cal.com for scheduling and social media platforms. These services
              have their own privacy policies, and we are not responsible for
              their practices.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              7. Your Rights
            </h2>
            <p className="mt-3">
              You have the right to access, correct, or delete your personal
              information. To exercise these rights, please contact us at{" "}
              <a
                href="mailto:crystel@rosaai.ca"
                className="text-primary hover:underline"
              >
                crystel@rosaai.ca
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              8. Changes to This Policy
            </h2>
            <p className="mt-3">
              We may update this privacy policy from time to time. We will
              notify you of any changes by posting the new privacy policy on
              this page and updating the &quot;Last updated&quot; date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              9. Contact Us
            </h2>
            <p className="mt-3">
              If you have questions about this privacy policy, please contact
              us at{" "}
              <a
                href="mailto:crystel@rosaai.ca"
                className="text-primary hover:underline"
              >
                crystel@rosaai.ca
              </a>{" "}
              or call us at (587) 804-2073.
            </p>
          </section>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}
