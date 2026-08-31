import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TransportContent from "./_components/TransportContent";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Transportation Services - Waerebo Lodge",
  description:
    "Book Waerebo Lodge transportation as part of your trip package or as a standalone private service.",
  path: "/transport",
  image: {
    url: "/transport/hero.jpg",
    alt: "Private transportation service from Waerebo Lodge",
  },
});

export default function TransportPage() {
  return (
    <>
      <Navbar />
      <TransportContent />
      <Footer />
    </>
  );
}
