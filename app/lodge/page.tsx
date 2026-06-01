import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactSection from "@/components/sections/ContactSection";
import { rooms } from "../rooms/data";
import RoomDetail from "../rooms/[slug]/_components/RoomDetail";

export const metadata: Metadata = {
  title: "Lodge — Waerebo Lodge",
  description:
    "Comfortable highland rooms at Waerebo Lodge — the perfect basecamp to rest before and after your Waerebo trek.",
};

export default function LodgePage() {
  const featured = rooms[0];
  const otherRooms = rooms.slice(1);

  return (
    <>
      <Navbar />
      <main className="pt-16 lg:pt-20">
        <RoomDetail room={featured} otherRooms={otherRooms} />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
