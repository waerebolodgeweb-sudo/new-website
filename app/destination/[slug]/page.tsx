import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactSection from "@/components/sections/ContactSection";
import JsonLd from "@/components/JsonLd";
import { absoluteUrl, createMetadata, SITE_URL } from "@/lib/seo";
import { destinationAssets, destinations, getDestination } from "../data";
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

  const assets = destinationAssets(destination.stem);

  return createMetadata({
    title: `${destination.name.en} — Waerebo Lodge`,
    description: destination.body1.en,
    path: `/destination/${destination.slug}`,
    image: {
      url: assets.heroDesktop,
      alt: destination.heroTitle.en,
    },
  });
}

export default async function DestinationPage({ params }: { params: Params }) {
  const { slug } = await params;
  const destination = getDestination(slug);

  if (!destination) notFound();

  const assets = destinationAssets(destination.stem);
  const destinationUrl = `${SITE_URL}/destination/${destination.slug}`;
  const destinationJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TouristDestination",
        "@id": `${destinationUrl}#destination`,
        name: destination.name.en,
        description: destination.body1.en,
        url: destinationUrl,
        image: [assets.heroDesktop, ...assets.photos].map(absoluteUrl),
        address: destination.address.en,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${destinationUrl}#breadcrumb`,
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
            name: "Destinations",
            item: `${SITE_URL}/destination/waerebo-village`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: destination.name.en,
            item: destinationUrl,
          },
        ],
      },
    ],
  };

  return (
    <>
      <JsonLd data={destinationJsonLd} />
      <Navbar />
      <main>
        <DestinationDetail destination={destination} />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
