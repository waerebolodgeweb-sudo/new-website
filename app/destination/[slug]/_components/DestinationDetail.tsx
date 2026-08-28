"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { useLang } from "@/lib/i18n";
import { destinationAssets, destinations, type Destination } from "../../data";

const labels = {
  breadcrumbHome: { en: "Home", id: "Beranda" },
  eyebrow: { en: "Iconic Destination", id: "Destinasi Ikonik" },
  discoverTrip: { en: "Discover Our Trips", id: "Lihat Trip Kami" },
  openMap: { en: "Open Location Map", id: "Buka Peta Lokasi" },
};

const AUTO_ADVANCE_MS = 45000;
const TOP_THRESHOLD = 120;

export default function DestinationDetail({
  destination: initial,
}: {
  destination: Destination;
}) {
  const { lang } = useLang();
  const initialIndex = Math.max(
    0,
    destinations.findIndex((d) => d.slug === initial.slug)
  );
  const [index, setIndex] = useState(initialIndex);

  const destination = destinations[index];
  const assets = destinationAssets(destination.stem);

  const prev = () =>
    setIndex((i) => (i - 1 + destinations.length) % destinations.length);
  const next = () => setIndex((i) => (i + 1) % destinations.length);

  /* Keep URL in sync without navigation */
  useEffect(() => {
    window.history.replaceState(null, "", `/destination/${destination.slug}`);
  }, [destination.slug]);

  /* Auto-advance every 45s — only while the page sits at the very top */
  useEffect(() => {
    const id = window.setInterval(() => {
      if (window.scrollY <= TOP_THRESHOLD) {
        setIndex((i) => (i + 1) % destinations.length);
      }
    }, AUTO_ADVANCE_MS);
    return () => window.clearInterval(id);
  }, []);

  return (
    <>
      {/* ── Hero slider ── */}
      <section className="relative h-svh max-h-[900px] min-h-[640px] w-full overflow-hidden sm:h-[600px] sm:max-h-none sm:min-h-0 lg:h-[720px]">
        {destinations.map((d, i) => {
          const a = destinationAssets(d.stem);
          return (
            <div
              key={d.slug}
              className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
                i === index ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
            >
              <Image
                src={a.heroDesktop}
                alt={d.heroTitle.en}
                fill
                priority={i === initialIndex}
                sizes="100vw"
                className={`hidden object-cover transition-transform duration-[1200ms] ease-out sm:block ${
                  i === index ? "scale-100" : "scale-105"
                }`}
              />
              <Image
                src={a.heroMobile}
                alt={d.heroTitle.en}
                fill
                priority={i === initialIndex}
                sizes="100vw"
                className={`object-cover transition-transform duration-[1200ms] ease-out sm:hidden ${
                  i === index ? "scale-100" : "scale-100 sm:scale-105"
                }`}
              />
            </div>
          );
        })}
        {/* Top scrim for navbar + bottom gradient */}
        <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-black/60 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black/70 to-transparent" />

        {/* Prev / Next slide */}
        <button
          onClick={prev}
          aria-label="Previous destination"
          className="carousel-chevron-overlay absolute top-1/2 left-3 flex h-10 w-10 -translate-y-1/2 items-center justify-center transition-colors sm:left-6 lg:left-10 lg:h-[52px] lg:w-[52px]"
        >
          <IoChevronBack size={22} />
        </button>
        <button
          onClick={next}
          aria-label="Next destination"
          className="carousel-chevron-overlay absolute top-1/2 right-3 flex h-10 w-10 -translate-y-1/2 items-center justify-center transition-colors sm:right-6 lg:right-10 lg:h-[52px] lg:w-[52px]"
        >
          <IoChevronForward size={22} />
        </button>

        <p className="absolute top-[68px] right-5 left-5 text-[11px] text-white/75 sm:top-24 sm:right-10 sm:left-10 sm:text-sm lg:top-auto lg:right-20 lg:bottom-[116px] lg:left-20">
          <Link href="/" className="hover:underline">
            {labels.breadcrumbHome[lang]}
          </Link>
          <span className="mx-2">/</span>
          <span className="font-medium text-white">
            {destination.name[lang]}
          </span>
        </p>

        <div
          key={destination.slug}
          className="iconic-fade absolute right-5 bottom-7 left-5 sm:right-10 sm:bottom-10 sm:left-10 lg:right-20 lg:bottom-12 lg:left-20 lg:flex lg:items-end lg:justify-between lg:gap-6"
        >
          <h1 className="max-w-[330px] text-[29px] leading-[1.08] font-semibold text-white sm:text-4xl lg:max-w-none lg:text-5xl">
            {destination.heroTitle[lang]}
          </h1>
          <div className="mt-3 flex gap-1.5 lg:mt-0 lg:mb-2">
            {destinations.map((d, i) => (
              <button
                key={d.slug}
                onClick={() => setIndex(i)}
                aria-label={d.heroTitle.en}
                className="h-1 flex-1 overflow-hidden rounded-full bg-white/30 sm:w-10 sm:flex-none lg:w-7"
              >
                <span
                  key={`${destination.slug}-${d.slug}`}
                  className={`block h-full rounded-full bg-white ${
                    i < index
                      ? "w-full"
                      : i === index
                        ? "journey-pagination-fill"
                        : "w-0"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Content — follows the active slide ── */}
      <section className="bg-savana-50 py-12 sm:py-[60px] lg:py-[120px]">
        <div className="mx-auto max-w-[1512px] px-5 sm:px-8 lg:px-20">
          <div
            key={destination.slug}
            className="iconic-fade flex flex-col gap-10 lg:gap-12 xl:flex-row xl:gap-[60px]"
          >
            {/* Mobile: one main image, then a staggered secondary pair. */}
            <div className="flex flex-1 flex-col gap-6 sm:flex-row sm:gap-4 lg:gap-5">
              <div className="w-full sm:w-[38%]">
                <div className="relative aspect-[226/255] w-full overflow-hidden rounded-[20px] shadow-[0_8px_16px_rgba(38,35,22,0.12)] sm:aspect-[321/400] sm:rounded-3xl sm:shadow-none">
                  <Image
                    src={assets.photos[0]}
                    alt={destination.name[lang]}
                    fill
                    sizes="(min-width: 1280px) 321px, (min-width: 640px) 38vw, calc(100vw - 40px)"
                    className="object-cover"
                  />
                </div>
                <div className="mt-4 hidden sm:block">
                  <p className="text-base font-semibold text-pale-savana-500">
                    {destination.name[lang]}
                  </p>
                  <p className="mt-1 text-sm text-pale-savana-300">
                    {destination.address[lang]}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-[1.22fr_0.88fr] items-start gap-5 sm:contents">
                <div className="flex w-full flex-col justify-center pt-10 sm:w-[31%] sm:pt-24 lg:pt-[192px]">
                  <div className="relative aspect-[193/243] w-full overflow-hidden rounded-[18px] shadow-[0_8px_16px_rgba(38,35,22,0.12)] sm:aspect-[263/300] sm:rounded-3xl sm:shadow-none">
                    <Image
                      src={assets.photos[1]}
                      alt=""
                      fill
                      sizes="(min-width: 1280px) 263px, (min-width: 640px) 31vw, 52vw"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="flex w-full flex-col sm:w-[31%] sm:pt-12 lg:pt-[96px]">
                  <div className="relative aspect-[140/200] w-full overflow-hidden rounded-[18px] shadow-[0_8px_16px_rgba(38,35,22,0.12)] sm:aspect-[263/300] sm:rounded-3xl sm:shadow-none">
                    <Image
                      src={assets.photos[2]}
                      alt=""
                      fill
                      sizes="(min-width: 1280px) 263px, (min-width: 640px) 31vw, 38vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Text column */}
            <div className="flex flex-col justify-center lg:max-w-3xl xl:w-[405px] xl:max-w-none xl:flex-shrink-0">
              <p className="mb-1 text-xs font-normal text-savana-600 sm:mb-2 sm:text-base">
                {labels.eyebrow[lang]}
              </p>
              <h2 className="mb-4 text-xl leading-tight font-semibold text-savana-800 sm:text-3xl sm:leading-none lg:text-4xl">
                {destination.heading[lang]}
              </h2>
              <p className="mb-4 text-[13px] leading-[1.55] text-pale-savana-500 sm:text-base sm:leading-relaxed">
                {destination.body1[lang]}
              </p>
              <p className="mb-5 text-[13px] leading-[1.55] text-pale-savana-500 sm:mb-8 sm:text-base sm:leading-relaxed">
                {destination.body2[lang]}
              </p>
              <div className="mb-5 sm:hidden">
                <p className="text-lg font-semibold text-pale-savana-500">
                  {destination.name[lang]}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-pale-savana-300">
                  {destination.address[lang]}
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/trips"
                  className="button-primary flex flex-1 items-center justify-center rounded-md px-5 py-3 text-sm font-medium transition-colors sm:rounded-xl sm:py-4 sm:text-base"
                >
                  {labels.discoverTrip[lang]}
                </Link>
                <a
                  href={destination.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-outline flex flex-1 items-center justify-center rounded-md px-5 py-3 text-sm font-medium transition-colors sm:rounded-xl sm:py-4 sm:text-base"
                >
                  {labels.openMap[lang]}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
