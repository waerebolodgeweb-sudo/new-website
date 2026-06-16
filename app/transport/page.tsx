import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactSection from "@/components/sections/ContactSection";
import ServiceShowcase from "@/components/sections/ServiceShowcase";
import { transportShowcase } from "./data";

export const metadata: Metadata = {
  title: "Transport — Waerebo Lodge",
  description:
    "Effortless travel solutions for your mountain journey. From scenic overland transfers to quick rides to the Dintor terminal.",
};

export default function TransportPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 lg:pt-20">
        <ServiceShowcase
          {...transportShowcase}
          subtitleKey="transport.subtitle"
          buttonLabelKey="transport.bookLabel"
        />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
