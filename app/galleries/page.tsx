import type { Metadata } from "next";
import GalleryCta from "@/src/components/gallery/gallery-cta";
import GalleryGrid from "@/src/components/gallery/gallery-grid";
import GalleryHero from "@/src/components/gallery/gallery-hero";
import GalleryTeam from "@/src/components/gallery/gallery-team";
import SiteAnimations from "@/src/components/site-animations";
import Footer from "@/src/layouts/footer";
import Header from "@/src/layouts/header";

export const metadata: Metadata = {
  title: "Galerie | Propass Hotel",
  description:
    "Découvrez en images l'équipe, les chambres, la restauration et les espaces Propass.",
};

export default function GalleriesPage() {
  return (
    <SiteAnimations>
      <div className="min-h-screen bg-white pb-3">
        <Header />
        <main>
          <GalleryHero />
          <GalleryGrid />
          <GalleryTeam />
          <GalleryCta />
        </main>
        <Footer />
      </div>
    </SiteAnimations>
  );
}
