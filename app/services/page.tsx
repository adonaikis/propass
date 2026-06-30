import type { Metadata } from "next";
import HostelService from "@/src/components/services/hostel-service";
import RestaurantService from "@/src/components/services/restaurant-service";
import ServiceProcess from "@/src/components/services/service-process";
import ServicesHero from "@/src/components/services/services-hero";
import TicketService from "@/src/components/services/ticket-service";
import SiteAnimations from "@/src/components/site-animations";
import Footer from "@/src/layouts/footer";
import Header from "@/src/layouts/header";

export const metadata: Metadata = {
  title: "Services | Propass Hotel",
  description:
    "Billets de voyage, restauration et auberge : découvrez les services Propass pensés pour les passagers.",
};

export default function ServicesPage() {
  return (
    <SiteAnimations>
      <div className="min-h-screen bg-white pb-3">
        <Header />
        <main>
          <ServicesHero />
          <TicketService />
          <RestaurantService />
          <HostelService />
          <ServiceProcess />
        </main>
        <Footer />
      </div>
    </SiteAnimations>
  );
}
