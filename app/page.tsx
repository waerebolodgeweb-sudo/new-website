import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import JourneysSection from "@/components/sections/JourneysSection";
import PurposeSection from "@/components/sections/PurposeSection";
import GuestExperienceSection from "@/components/sections/GuestExperienceSection";
import GallerySection from "@/components/sections/GallerySection";
import SocialMediaSection from "@/components/sections/SocialMediaSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import ContactSection from "@/components/sections/ContactSection";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero — no animation, already in viewport on load */}
        <HeroSection />
        <JourneysSection />
        <ScrollReveal variant="fadeUp">
          <PurposeSection />
        </ScrollReveal>
        <ScrollReveal variant="fadeUp">
          <ServicesSection />
        </ScrollReveal>
        <ScrollReveal variant="fadeIn" duration={900}>
          <GuestExperienceSection />
        </ScrollReveal>
        <ScrollReveal variant="fadeIn" duration={900}>
          <GallerySection />
        </ScrollReveal>
        <ScrollReveal variant="fadeUp">
          <SocialMediaSection />
        </ScrollReveal>
        <ScrollReveal variant="fadeIn" duration={900}>
          <ReviewsSection />
        </ScrollReveal>
        <ScrollReveal variant="fadeUp">
          <ContactSection />
        </ScrollReveal>
      </main>
      <Footer />
    </>
  );
}
