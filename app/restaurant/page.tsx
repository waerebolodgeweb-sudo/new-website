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
    src: "/restaurant/dining-hall.jpg",
    alt: "Open-air dining hall with guests sharing a long table",
  },
  {
    src: "/restaurant/chef.jpg",
    alt: "Isabela serving traditional Flores dishes to guests",
  },
  {
    src: "/restaurant/cuisine.jpg",
    alt: "A platter of freshly cooked local Flores cuisine",
  },
  {
    src: "/restaurant/shared-table.jpg",
    alt: "Guests sharing a meal overlooking the rice fields",
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
          heroImage="/restaurant/hero.jpg"
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
