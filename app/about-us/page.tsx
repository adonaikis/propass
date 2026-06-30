import type { Metadata } from "next";
import AboutCta from "@/src/components/about/about-cta";
import AboutExperience from "@/src/components/about/about-experience";
import AboutHero from "@/src/components/about/about-hero";
import AboutStory from "@/src/components/about/about-story";
import AboutValues from "@/src/components/about/about-values";
import SiteAnimations from "@/src/components/site-animations";
import Footer from "@/src/layouts/footer";
import Header from "@/src/layouts/header";

export const metadata: Metadata = {
  title: "À propos | Propass Hotel",
  description:
    "Découvrez l'histoire, les engagements et la vision de l'hospitalité selon Propass Hotel.",
};

export default function AboutPage() {
  return (
    <SiteAnimations>
      <div className="min-h-screen bg-white pb-3">
        <Header />
        <main>
          <AboutHero />
          <AboutStory />
          <AboutValues />
          <AboutExperience />
          <AboutCta />
        </main>
        <Footer />
      </div>
    </SiteAnimations>
  );
}
