import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactSection from "@/components/sections/ContactSection";
import SocialMediaSection from "@/components/sections/SocialMediaSection";
import GalleryContent from "./_components/GalleryContent";

export const metadata: Metadata = {
  title: "Gallery — Waerebo Lodge",
  description:
    "Captured moments in Flores — culture, nature, and unforgettable experiences at Waerebo Lodge and beyond.",
};

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 lg:pt-20">
        <GalleryContent />
        <SocialMediaSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
