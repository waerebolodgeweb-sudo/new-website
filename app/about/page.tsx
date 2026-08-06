import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactSection from "@/components/sections/ContactSection";
import StorySection from "./_components/StorySection";
import OfferGrid from "./_components/OfferGrid";
import HistorySection from "./_components/HistorySection";
import { LodgeDirectionMap } from "@/components/layout/Map";

export const metadata: Metadata = {
  title: "About Us — Waerebo Lodge",
  description:
    "The story behind Waerebo Lodge — built by Martin and Isabela Anggo to offer travelers a comfortable basecamp while giving back to the Waerebo community in the heart of Flores.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 lg:pt-20">
        <StorySection />
        <OfferGrid />
        <HistorySection />
        <ContactSection />
        <LodgeDirectionMap />
      </main>
      <Footer />
    </>
  );
}
