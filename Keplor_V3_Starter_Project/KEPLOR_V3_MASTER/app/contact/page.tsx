import type { Metadata } from "next";
import { PageHero } from "@/components/Sections";
import ContactForm from "./ContactForm";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="CONTACT"
        title="Start with the problem."
        description="Tell us what you’re trying to solve, what you’ve considered, and what a useful outcome would look like."
      />
      <section className="page-content" aria-labelledby="contact-heading">
        <div className="container">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
