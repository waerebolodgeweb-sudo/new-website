"use client";

import Image from "next/image";
import ContactSection from "@/components/sections/ContactSection";
import { useLang } from "@/lib/i18n";

const bookMessage =
  "Hello Waerebo Lodge!\n\nI'd like to arrange transport for my trip.\n\nPlease share availability and options. Thank you!";
const bookHref = `https://wa.me/6285339021145?text=${encodeURIComponent(
  bookMessage
)}`;

const rides = [
  {
    title: "Oto Colt",
    descriptionKey: "transport.oto.description",
    image: "/transport/Waerebo-Transport-Options-Oto-Colt.webp",
    alt: "Travelers boarding the Oto Colt transport truck",
  },
  {
    title: "Toyota Innova",
    descriptionKey: "transport.innova.description",
    image: "/transport/Waerebo-Transport-Options-Toyota-Innova.webp",
    alt: "Toyota Innova private transport vehicle",
  },
];

export default function TransportContent() {
  const { t } = useLang();

  return (
    <main className="pt-16 lg:pt-20">
      <section className="bg-[#f8f6ef] py-12 lg:py-16">
        <div className="mx-auto max-w-[1512px] px-6 lg:px-10">
          <div className="mb-10 grid gap-6 lg:grid-cols-[1fr_520px] lg:items-center">
            <h1 className="text-5xl leading-tight font-semibold text-savana-800 lg:text-[56px]">
              {t("transport.page.heading")}
            </h1>
            <p className="max-w-xl text-base leading-relaxed font-medium text-neutral-700 lg:justify-self-end lg:text-center">
              {t("transport.page.subtitle")}
            </p>
          </div>

          <div className="overflow-hidden rounded-[36px] border-[8px] border-white bg-white shadow-xl shadow-black/10">
            <div className="grid gap-2 lg:grid-cols-[540px_1fr]">
              <div className="rounded-[28px] bg-savana-200 px-7 py-8 lg:px-8">
                <h2 className="text-3xl leading-tight font-semibold text-savana-800">
                  {t("transport.choose.heading")}
                </h2>
                <div className="mt-4 space-y-6 text-base leading-relaxed font-medium text-pale-savana-300">
                  <p>{t("transport.choose.body1")}</p>
                  <p>{t("transport.choose.body2")}</p>
                  <p>{t("transport.choose.body3")}</p>
                </div>
              </div>

              <div className="relative min-h-[320px] rounded-[28px] border-white bg-white lg:min-h-[440px]">
                <Image
                  src="/transport/Waerebo-Transport-Photo-Oto-Colt-Main.webp"
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
                    {t(ride.descriptionKey)}
                  </p>
                  <a
                    href={bookHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 flex min-h-12 items-center justify-center rounded-lg bg-savana-800 px-6 text-base font-semibold text-white transition-colors hover:bg-savana-green-600"
                  >
                    {t("transport.bookLabel")}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  );
}
