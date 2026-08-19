import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CreditsContent from "./_components/CreditsContent";

export const metadata: Metadata = {
  title: "Photo Credits — Waerebo Lodge",
  description:
    "Attribution for photography and imagery used across the Waerebo Lodge website.",
};

export default function CreditsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 lg:pt-20">
        <CreditsContent />
      </main>
      <Footer />
    </>
  );
}
