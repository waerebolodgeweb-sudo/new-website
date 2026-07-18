import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import JourneysSection from "@/components/sections/JourneysSection";
import PurposeSection from "@/components/sections/PurposeSection";
import GallerySection from "@/components/sections/GallerySection";
import MomentsSection from "@/components/sections/MomentsSection";
import VideoSection from "@/components/sections/VideoSection";
import ServicesSection from "@/components/sections/ServicesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero — no animation, already in viewport on load */}
        <HeroSection />

        <ScrollReveal variant="fadeUp">
          <JourneysSection />
        </ScrollReveal>

        <ScrollReveal variant="fadeUp">
          <PurposeSection />
        </ScrollReveal>

        <ScrollReveal variant="fadeIn" duration={900}>
          <GallerySection />
        </ScrollReveal>

        <ScrollReveal variant="fadeIn" duration={900}>
          <MomentsSection />
        </ScrollReveal>

        <ScrollReveal variant="fadeUp">
          <VideoSection />
        </ScrollReveal>

        <ScrollReveal variant="fadeUp">
          <ServicesSection />
        </ScrollReveal>

        <ScrollReveal variant="fadeIn" duration={900}>
          <TestimonialsSection />
        </ScrollReveal>

        <ScrollReveal variant="fadeUp">
          <ContactSection />
        </ScrollReveal>
      </main>
      <Footer />
    </>
  );
}
