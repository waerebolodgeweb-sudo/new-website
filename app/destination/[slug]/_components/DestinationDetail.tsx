"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { useLang } from "@/lib/i18n";
import {
  destinationAssets,
  destinations,
  type Destination,
} from "../../data";

const labels = {
  breadcrumbHome: { en: "Home", id: "Beranda" },
  eyebrow: { en: "Iconic Destination", id: "Destinasi Ikonik" },
  discoverTrip: { en: "Discover Our Trip", id: "Lihat Trip Kami" },
  openMap: { en: "Open Map", id: "Buka Peta" },
};

const AUTO_ADVANCE_MS = 45000;
const TOP_THRESHOLD = 120;

export default function DestinationDetail({
  destination: initial,
}: {
  destination: Destination;
}) {
  const { lang } = useLang();
  const [index, setIndex] = useState(() =>
    Math.max(
      0,
      destinations.findIndex((d) => d.slug === initial.slug)
    )
  );

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
  const indexRef = useRef(index);
  indexRef.current = index;
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
      <section className="relative h-[480px] w-full overflow-hidden lg:h-[720px]">
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
                priority={i === 0}
                sizes="100vw"
                className={`hidden object-cover transition-transform duration-[1200ms] ease-out sm:block ${
                  i === index ? "scale-100" : "scale-105"
                }`}
              />
              <Image
                src={a.heroMobile}
                alt={d.heroTitle.en}
                fill
                priority={i === 0}
                sizes="100vw"
                className={`object-cover transition-transform duration-[1200ms] ease-out sm:hidden ${
                  i === index ? "scale-100" : "scale-105"
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
          className="absolute top-1/2 left-4 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-neutral-900 lg:left-10 lg:h-[52px] lg:w-[52px]"
        >
          <IoChevronBack size={22} />
        </button>
        <button
          onClick={next}
          aria-label="Next destination"
          className="absolute top-1/2 right-4 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-neutral-900 lg:right-10 lg:h-[52px] lg:w-[52px]"
        >
          <IoChevronForward size={22} />
        </button>

        {/* Breadcrumb + title */}
        <div className="absolute right-6 bottom-8 left-6 lg:right-20 lg:bottom-12 lg:left-20">
          <div key={destination.slug} className="iconic-fade">
            <p className="mb-2 text-sm text-white/80">
              <Link href="/" className="hover:underline">
                {labels.breadcrumbHome[lang]}
              </Link>
              <span className="mx-2">/</span>
              <span className="font-medium text-white">{destination.name}</span>
            </p>
            <div className="flex items-end justify-between gap-6">
              <h1 className="text-3xl leading-tight font-semibold text-white lg:text-5xl">
                {destination.heroTitle[lang]}
              </h1>
              {/* Pagination dots */}
              <div className="mb-2 hidden gap-1 lg:flex">
                {destinations.map((d, i) => (
                  <button
                    key={d.slug}
                    onClick={() => setIndex(i)}
                    aria-label={d.heroTitle.en}
                    className={`h-1 w-7 rounded-full transition-colors ${
                      i === index
                        ? "bg-white"
                        : "bg-white/35 hover:bg-white/60"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Content — follows the active slide ── */}
      <section className="bg-neutral-050 py-[60px] lg:py-[120px]">
        <div className="mx-auto max-w-[1512px] px-6 lg:px-20">
          <div
            key={destination.slug}
            className="iconic-fade flex flex-col gap-10 lg:flex-row lg:gap-[60px]"
          >
            {/* Photo collage — figma: 321/263/263, staggered */}
            <div className="flex flex-1 gap-4 lg:gap-5">
              <div className="w-[38%]">
                <div className="relative aspect-[321/400] w-full overflow-hidden rounded-3xl">
                  <Image
                    src={assets.photos[0]}
                    alt={destination.name}
                    fill
                    sizes="(min-width: 1024px) 321px, 38vw"
                    className="object-cover"
                  />
                </div>
                <div className="mt-4">
                  <p className="text-base font-semibold text-pale-savana-500">
                    {destination.name}
                  </p>
                  <p className="mt-1 text-sm text-pale-savana-300">
                    {destination.address}
                  </p>
                </div>
              </div>
              <div className="flex w-[31%] flex-col justify-center pt-24 lg:pt-[192px]">
                <div className="relative aspect-[263/300] w-full overflow-hidden rounded-3xl">
                  <Image
                    src={assets.photos[1]}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 263px, 31vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="flex w-[31%] flex-col pt-12 lg:pt-[96px]">
                <div className="relative aspect-[263/300] w-full overflow-hidden rounded-3xl">
                  <Image
                    src={assets.photos[2]}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 263px, 31vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Text column */}
            <div className="flex flex-col justify-center lg:w-[405px] lg:flex-shrink-0">
              <p className="mb-2 text-base font-normal text-savana-600">
                {labels.eyebrow[lang]}
              </p>
              <h2 className="mb-4 text-3xl leading-none font-semibold text-savana-800 lg:text-4xl">
                {destination.heading[lang]}
              </h2>
              <p className="mb-4 text-base leading-relaxed text-pale-savana-500">
                {destination.body1[lang]}
              </p>
              <p className="mb-8 text-base leading-relaxed text-pale-savana-500">
                {destination.body2[lang]}
              </p>
              <div className="flex gap-3">
                <Link
                  href="/trips"
                  className="flex flex-1 items-center justify-center rounded-xl bg-savana-800 px-5 py-4 text-base font-medium text-white transition-colors hover:bg-savana-700"
                >
                  {labels.discoverTrip[lang]}
                </Link>
                <a
                  href={destination.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center rounded-xl border border-savana-800 px-5 py-4 text-base font-medium text-savana-800 transition-colors hover:bg-savana-800 hover:text-white"
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
