import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import RestaurantContent from "./_components/RestaurantContent";

export const metadata: Metadata = {
  title: "Waerebo Lodge Restaurant",
  description:
    "Home-cooked Flores meals at Waerebo Lodge, open to guests and travelers passing through Dintor.",
};

export default function RestaurantPage() {
  return (
    <>
      <Navbar />
      <RestaurantContent />
      <Footer />
    </>
  );
}
