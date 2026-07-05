import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TransportContent from "./_components/TransportContent";

export const metadata: Metadata = {
  title: "Transportation Services - Waerebo Lodge",
  description:
    "Book Waerebo Lodge transportation as part of your trip package or as a standalone private service.",
};

export default function TransportPage() {
  return (
    <>
      <Navbar />
      <TransportContent />
      <Footer />
    </>
  );
}
