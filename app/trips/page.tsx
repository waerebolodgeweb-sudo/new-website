import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactSection from "@/components/sections/ContactSection";
import TripContent from "./_components/TripContent";

export const metadata: Metadata = {
  title: "Waerebo Trips & Itineraries — Waerebo Lodge",
  description:
    "Choose a one-day Waerebo trek, overnight village experience, Flores nature and culture journey, island escape, heritage route, or a custom itinerary.",
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
