import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactSection from "@/components/sections/ContactSection";
import ServiceShowcase from "@/components/sections/ServiceShowcase";

export const metadata: Metadata = {
  title: "Transport — Waerebo Lodge",
  description:
    "Effortless travel solutions for your mountain journey. From scenic overland transfers to quick rides to the Dintor terminal.",
};

const bookMessage = `Hello Waerebo Lodge! 🌿\n\nI'd like to arrange transport for my trip.\n\nPlease share availability and options. Thank you!`;
const bookHref = `https://wa.me/6285339021145?text=${encodeURIComponent(
  bookMessage
)}`;

const thumbnails = [
  {
    src: "/trip/stop-1.jpg",
    alt: "Trek stop on the way to Waerebo village",
  },
  {
    src: "/trip/stop-2.jpg",
    alt: "Group at the trailhead",
  },
  {
    src: "/home/contact-us.jpg",
    alt: "Scenic overland transfer",
  },
  {
    src: "/about/tile-nusa-molas.jpg",
    alt: "Local scenery on the route",
  },
];

export default function TransportPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 lg:pt-20">
        <ServiceShowcase
          titleHead="Waerebo Lodge "
          titleTail="Transport"
          subtitle="Effortless travel solutions for your mountain journey. We handle the driving so you can enjoy the view. From scenic overland transfers to quick rides to the Dintor terminal, we make sure you reach your trekking starting line on time and stress-free."
          heroImage="/trip/stop-1.jpg"
          buttonLabel="Book Transport"
          bookHref={bookHref}
          thumbnails={thumbnails}
        />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
