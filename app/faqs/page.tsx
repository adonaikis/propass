import type { Metadata } from "next";
import FaqExplorer from "@/src/components/faqs/faq-explorer";
import FaqGuide from "@/src/components/faqs/faq-guide";
import FaqSupport from "@/src/components/faqs/faq-support";
import SiteAnimations from "@/src/components/site-animations";
import Footer from "@/src/layouts/footer";
import Header from "@/src/layouts/header";

export const metadata: Metadata = {
  title: "Questions fréquentes | Propass Hotel",
  description:
    "Retrouvez les réponses sur les réservations, les chambres et les services Propass.",
};

export default function FaqPage() {
  return (
    <SiteAnimations>
      <div className="min-h-screen bg-white pb-3">
        <Header />
        <main>
          <FaqExplorer />
          <FaqGuide />
          <FaqSupport />
        </main>
        <Footer />
      </div>
    </SiteAnimations>
  );
}
