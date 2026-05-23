import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact DynoWeb",
  description:
    "Get in touch with the DynoWeb team about installation, billing, or product feedback. Email help@dynoweb.app.",
  alternates: { canonical: "/contact-us" },
  openGraph: {
    title: "Contact DynoWeb",
    description:
      "Get in touch with the DynoWeb team about installation, billing, or product feedback.",
    url: "https://www.dynoweb.app/contact-us",
  },
};

export default function ContactPage() {
  return <ContactForm />;
}
