import Header from "@/src/layouts/header";
import Footer from "@/src/layouts/footer";
import SiteAnimations from "@/src/components/site-animations";
import AboutComfort from "@/src/sections/about-comfort";
import BestHotels from "@/src/sections/best-hotels";
import HospitalityExcellence from "@/src/sections/hospitality-excellence";
import Hero from "@/src/sections/hero";
import TrustedBooking from "@/src/sections/trusted-booking";

export default function Home() {
  return (
    <SiteAnimations>
      <div className="min-h-screen bg-white pb-3">
        <Header />
        <main>
          <Hero />
          <AboutComfort />
          <HospitalityExcellence />
          <BestHotels />
          <TrustedBooking />
        </main>
        <Footer />
      </div>
    </SiteAnimations>
  );
}
