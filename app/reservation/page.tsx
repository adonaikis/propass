import type { Metadata } from "next";
import ReservationBenefits from "@/src/components/reservation/reservation-benefits";
import ReservationConcierge from "@/src/components/reservation/reservation-concierge";
import ReservationFaq from "@/src/components/reservation/reservation-faq";
import ReservationFlow from "@/src/components/reservation/reservation-flow";
import ReservationHero from "@/src/components/reservation/reservation-hero";
import SiteAnimations from "@/src/components/site-animations";
import Footer from "@/src/layouts/footer";
import Header from "@/src/layouts/header";

export const metadata: Metadata = {
  title: "Réserver votre séjour | Propass Hotel",
  description:
    "Choisissez vos dates, votre chambre et envoyez votre demande de réservation Propass à Kinshasa.",
};

export default function ReservationPage() {
  return (
    <SiteAnimations>
      <div className="min-h-screen bg-white pb-3">
        <Header />
        <main>
          <ReservationHero />
          <ReservationFlow />
          <ReservationBenefits />
          <ReservationFaq />
          <ReservationConcierge />
        </main>
        <Footer />
      </div>
    </SiteAnimations>
  );
}
