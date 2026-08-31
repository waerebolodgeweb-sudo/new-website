import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactSection from "@/components/sections/ContactSection";
import JsonLd from "@/components/JsonLd";
import { absoluteUrl, createMetadata, SITE_URL } from "@/lib/seo";
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

  return createMetadata({
    title: `${room.title} — Waerebo Lodge`,
    description: room.description,
    path: `/rooms/${room.slug}`,
    image: {
      url: room.cardImage ?? room.images[0],
      alt: room.title,
    },
  });
}

export default async function RoomPage({ params }: { params: Params }) {
  const { slug } = await params;
  const room = getRoom(slug);

  if (!room) notFound();

  const otherRooms = rooms.filter((r) => r.slug !== slug);
  const roomUrl = `${SITE_URL}/rooms/${room.slug}`;
  const roomJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HotelRoom",
        "@id": `${roomUrl}#room`,
        name: room.title,
        description: room.description,
        url: roomUrl,
        image: room.images.map(absoluteUrl),
        containedInPlace: { "@id": `${SITE_URL}/#lodge` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${roomUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Lodge",
            item: `${SITE_URL}/lodge`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: room.title,
            item: roomUrl,
          },
        ],
      },
    ],
  };

  return (
    <>
      <JsonLd data={roomJsonLd} />
      <Navbar />
      <main className="pt-20">
        <RoomDetail room={room} otherRooms={otherRooms} />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
