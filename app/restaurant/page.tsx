import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactSection from "@/components/sections/ContactSection";
import ServiceShowcase from "@/components/sections/ServiceShowcase";
import { restaurantShowcase } from "./data";

export const metadata: Metadata = {
  title: "Restaurant — Waerebo Lodge",
  description:
    "Taste the true flavors of Flores at our lodge restaurant. Curated local meals, trail-ready lunch boxes, and authentic Manggarai cuisine.",
};

export default function RestaurantPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 lg:pt-20">
        <ServiceShowcase
          {...restaurantShowcase}
          subtitleKey="restaurant.subtitle"
          buttonLabelKey="restaurant.bookLabel"
        />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
