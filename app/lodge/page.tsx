import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactSection from "@/components/sections/ContactSection";
import { rooms } from "../rooms/data";
import LodgeGrid from "./_components/LodgeGrid";
import { LodgeDirectionMap } from "@/components/layout/Map";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Lodge — Waerebo Lodge",
  description:
    "Comfortable highland rooms at Waerebo Lodge — the perfect basecamp to rest before and after your Waerebo trek.",
  path: "/lodge",
  image: {
    url: "/lodge/hero-1.jpg",
    alt: "Comfortable rooms at Waerebo Lodge in Flores",
  },
});

export default function LodgePage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 lg:pt-20">
        <LodgeGrid rooms={rooms} />
        <LodgeDirectionMap />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
