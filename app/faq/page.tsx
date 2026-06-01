import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactSection from "@/components/sections/ContactSection";
import FaqContent from "./_components/FaqContent";

export const metadata: Metadata = {
  title: "FAQ — Waerebo Lodge",
  description:
    "Got questions? Answers about the Waerebo trek, the lodge, our restaurant, and transport.",
};

export default function FaqPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 lg:pt-20">
        <FaqContent />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
