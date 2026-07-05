import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactSection from "@/components/sections/ContactSection";

const bookMessage =
  "Hello Waerebo Lodge!\n\nI'd like to arrange transport for my trip.\n\nPlease share availability and options. Thank you!";
const bookHref = `https://wa.me/6285339021145?text=${encodeURIComponent(
  bookMessage
)}`;

const rides = [
  {
    title: "Oto Colt",
    description:
      "A traditional open-air truck that is perfect for large groups (up to 20 passengers) and cultural adventures.",
    image: "/transport/oto colt.jpg",
    alt: "Travelers boarding the Oto Colt transport truck",
  },
  {
    title: "Toyota Innova",
    description:
      "A comfortable and private journey. Ideal for couples, families, or small groups traveling with extra luggage.",
    image: "/transport/toyota innova.jpg",
    alt: "Toyota Innova private transport vehicle",
  },
];

export const metadata: Metadata = {
  title: "Transportation Services - Waerebo Lodge",
  description:
    "Book Waerebo Lodge transportation as part of your trip package or as a standalone private service.",
};

export default function TransportPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 lg:pt-20">
        <section className="bg-[#f8f6ef] py-12 lg:py-16">
          <div className="mx-auto max-w-[1512px] px-6 lg:px-10">
            <div className="mb-10 grid gap-6 lg:grid-cols-[1fr_520px] lg:items-center">
              <h1 className="text-5xl leading-tight font-semibold text-savana-800 lg:text-[56px]">
                Transportation Services
              </h1>
              <p className="max-w-xl text-base leading-relaxed font-medium text-neutral-700 lg:justify-self-end lg:text-center">
                Waerebo Lodge offers transportation services that can be booked
                either as part of your trip package or as a standalone service.
              </p>
            </div>

            <div className="overflow-hidden rounded-[36px] border-[8px] border-white bg-white shadow-xl shadow-black/10">
              <div className="grid gap-2 lg:grid-cols-[540px_1fr]">
                <div className="rounded-[28px] bg-savana-200 px-7 py-8 lg:px-8">
                  <h2 className="text-3xl leading-tight font-semibold text-savana-800">
                    Choose Your Ride
                  </h2>
                  <div className="mt-4 space-y-6 text-base leading-relaxed font-medium text-pale-savana-300">
                    <p>
                      Choose a vehicle that fits your travel style and group
                      size. For a comfortable, private journey, the Toyota
                      Innova is ideal for couples, families, and small groups
                      with luggage.
                    </p>
                    <p>
                      For an authentic local experience, we offer the Oto Colt,
                      a traditional Flores transport vehicle used for
                      generations. Fitting up to 20 passengers, it is perfect
                      for larger groups, community visits, and cultural
                      adventures.
                    </p>
                    <p>
                      All services operate on request and can be fully
                      customized to your itinerary. We can arrange airport
                      transfers, trips directly to Waerebo, or travel to other
                      destinations across Flores.
                    </p>
                  </div>
                </div>

                <div className="relative min-h-[320px] rounded-[28px] border-white bg-white lg:min-h-[440px]">
                  <Image
                    src="/transport/hero.jpg"
                    alt="Guests riding local transport to Waerebo Lodge"
                    fill
                    priority
                    sizes="(min-width: 1024px) 65vw, 100vw"
                    className="rounded-[28px] object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              {rides.map((ride) => (
                <article
                  key={ride.title}
                  className="grid gap-2 overflow-hidden rounded-[36px] border-[8px] border-white bg-white shadow-xl shadow-black/10 sm:grid-cols-[1fr_1.1fr]"
                >
                  <div className="relative min-h-[240px] sm:min-h-[220px]">
                    <Image
                      src={ride.image}
                      alt={ride.alt}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 45vw, 100vw"
                      className="rounded-[28px] object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center rounded-[28px] bg-savana-50 px-7 py-7">
                    <h2 className="text-3xl font-semibold text-savana-800">
                      {ride.title}
                    </h2>
                    <p className="mt-3 text-base leading-relaxed font-medium text-pale-savana-300">
                      {ride.description}
                    </p>
                    <a
                      href={bookHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-7 flex min-h-12 items-center justify-center rounded-lg bg-savana-800 px-6 text-base font-semibold text-white transition-colors hover:bg-savana-green-600"
                    >
                      Book Transport
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
