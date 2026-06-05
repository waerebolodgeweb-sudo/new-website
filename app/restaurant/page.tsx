import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactSection from "@/components/sections/ContactSection";
import ServiceShowcase from "@/components/sections/ServiceShowcase";

export const metadata: Metadata = {
  title: "Restaurant — Waerebo Lodge",
  description:
    "Taste the true flavors of Flores at our lodge restaurant. Curated local meals, trail-ready lunch boxes, and authentic Manggarai cuisine.",
};

const bookMessage = `Hello Waerebo Lodge! 🌿\n\nI'd like to book a table / meal at the Waerebo Lodge Restaurant.\n\nPlease share availability. Thank you!`;
const bookHref = `https://wa.me/6285339021145?text=${encodeURIComponent(
  bookMessage
)}`;

const thumbnails = [
  {
    src: "/about/tile-restaurant.jpg",
    alt: "Open-air dining hall",
  },
  {
    src: "/about/story-right.jpg",
    alt: "Mr. Martin — owner and local guide",
  },
  {
    src: "/about/story-mid.jpg",
    alt: "Traditional Flores cuisine",
  },
  {
    src: "/lodge/hero-3.jpg",
    alt: "Guests sharing a meal at the lodge",
  },
];

export default function RestaurantPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 lg:pt-20">
        <ServiceShowcase
          titleHead="Waerebo Lodge "
          titleTail="Restaurant"
          subtitle="Taste the true flavors of Flores at our lodge. Curated by our co-founder, our kitchen serves up comforting local meals, trail-ready lunch boxes, and authentic local dishes. We even love it when guests share recipes from their home countries."
          heroImage="/about/tile-restaurant.jpg"
          buttonLabel="Book Restaurant"
          bookHref={bookHref}
          thumbnails={thumbnails}
        />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
