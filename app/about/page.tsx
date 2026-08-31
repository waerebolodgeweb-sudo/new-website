import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactSection from "@/components/sections/ContactSection";
import StorySection from "./_components/StorySection";
import OfferGrid from "./_components/OfferGrid";
import HistorySection from "./_components/HistorySection";
import { LodgeDirectionMap } from "@/components/layout/Map";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "About Us — Waerebo Lodge",
  description:
    "The story behind Waerebo Lodge — built by Martin and Isabela Anggo to offer travelers a comfortable basecamp while giving back to the Waerebo community in the heart of Flores.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 lg:pt-20">
        <StorySection />
        <OfferGrid />
        <HistorySection />
        <LodgeDirectionMap />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
