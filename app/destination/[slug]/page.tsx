import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactSection from "@/components/sections/ContactSection";
import { destinations, getDestination } from "../data";
import DestinationDetail from "./_components/DestinationDetail";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return destinations.map((destination) => ({ slug: destination.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const destination = getDestination(slug);

  if (!destination) {
    return { title: "Destination Not Found — Waerebo Lodge" };
  }

  return {
    title: `${destination.name} — Waerebo Lodge`,
    description: destination.body1.en,
  };
}

export default async function DestinationPage({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;
  const destination = getDestination(slug);

  if (!destination) notFound();

  return (
    <>
      <Navbar />
      <main>
        <DestinationDetail destination={destination} />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
