import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactSection from "@/components/sections/ContactSection";
import TripContent from "./_components/TripContent";

export const metadata: Metadata = {
  title: "Waerebo Trekking Programs — Waerebo Lodge",
  description:
    "Choose your Waerebo trekking program — 1 day, 2D/1N, 3D/2N, or the full 4-day Whitewater, Cave & Waerebo adventure.",
};

export default function TripsPage() {
  return (
    <>
      <Navbar />
      <main>
        <TripContent />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
