import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import RestaurantContent from "./_components/RestaurantContent";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Waerebo Lodge Restaurant",
  description:
    "Home-cooked Flores meals at Waerebo Lodge, open to guests and travelers passing through Dintor.",
  path: "/restaurant",
  image: {
    url: "/restaurant/New folder (2)/hero.jpg",
    alt: "Home-cooked Flores meals at Waerebo Lodge Restaurant",
  },
});

export default function RestaurantPage() {
  return (
    <>
      <Navbar />
      <RestaurantContent />
      <Footer />
    </>
  );
}
