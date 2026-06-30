import type { Metadata } from "next";
import SiteAnimations from "@/src/components/site-animations";
import GuestStories from "@/src/components/rooms/guest-stories";
import RoomBooking from "@/src/components/rooms/room-booking";
import RoomCatalog from "@/src/components/rooms/room-catalog";
import RoomHero from "@/src/components/rooms/room-hero";
import RoomServices from "@/src/components/rooms/room-services";
import SignatureStay from "@/src/components/rooms/signature-stay";
import Footer from "@/src/layouts/footer";
import Header from "@/src/layouts/header";

export const metadata: Metadata = {
  title: "Chambres & Suites | Propass Hotel",
  description:
    "Découvrez les chambres et suites Propass à Kinshasa, leurs services et disponibilités.",
};

export default function RoomsPage() {
  return (
    <SiteAnimations>
      <div className="min-h-screen bg-white pb-3">
        <Header />
        <main>
          <RoomHero />
          <RoomCatalog />
          <SignatureStay />
          <RoomServices />
          <GuestStories />
          <RoomBooking />
        </main>
        <Footer />
      </div>
    </SiteAnimations>
  );
}
