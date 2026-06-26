import { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ContactPage } from "./contact-page";

export const metadata: Metadata = {
  title: "Contact — RosaAI",
  description:
    "Get in touch with RosaAI. Book a discovery call or reach out to discuss how we can help automate your business.",
  openGraph: {
    title: "Contact — RosaAI",
    description:
      "Get in touch with RosaAI. Book a discovery call or reach out to discuss how we can help automate your business.",
    type: "website",
    url: "https://rosaai.ca/contact",
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <ContactPage />
      <Footer />
    </>
  );
}
