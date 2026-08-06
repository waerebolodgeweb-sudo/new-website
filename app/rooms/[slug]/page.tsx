import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactSection from "@/components/sections/ContactSection";
import { rooms, getRoom } from "../data";
import RoomDetail from "./_components/RoomDetail";

type Params = Promise<{ slug: string }>;

// Pre-render every room page statically at build time (no API).
export function generateStaticParams() {
  return rooms.map((room) => ({ slug: room.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const room = getRoom(slug);

  if (!room) {
    return { title: "Room Not Found — Waerebo Lodge" };
  }

  return {
    title: `${room.title} — Waerebo Lodge`,
    description: room.description,
  };
}

export default async function RoomPage({ params }: { params: Params }) {
  const { slug } = await params;
  const room = getRoom(slug);

  if (!room) notFound();

  const otherRooms = rooms.filter((r) => r.slug !== slug);

  return (
    <>
      <Navbar />
      <main className="pt-20">
        <RoomDetail room={room} otherRooms={otherRooms} />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
