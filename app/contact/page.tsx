import type { Metadata } from "next";
import ContactDetails from "@/src/components/contact/contact-details";
import ContactForm from "@/src/components/contact/contact-form";
import ContactHero from "@/src/components/contact/contact-hero";
import ContactMap from "@/src/components/contact/contact-map";
import SiteAnimations from "@/src/components/site-animations";
import Footer from "@/src/layouts/footer";
import Header from "@/src/layouts/header";

export const metadata: Metadata = {
  title: "Contact | Propass Hotel",
  description:
    "Contactez Propass Hotel à Kinshasa, envoyez votre demande et consultez la carte interactive.",
};

export default function ContactPage() {
  return (
    <SiteAnimations>
      <div className="min-h-screen bg-white pb-3">
        <Header />
        <main>
          <ContactHero />
          <ContactDetails />
          <ContactForm />
          <ContactMap />
        </main>
        <Footer />
      </div>
    </SiteAnimations>
  );
}
