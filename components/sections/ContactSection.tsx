"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoArrowForwardOutline, IoArrowUpOutline } from "react-icons/io5";
import { rooms } from "@/app/rooms/data";
import { destinationAssets, destinations } from "@/app/destination/data";
import { useLang } from "@/lib/i18n";

const lodgeThumbnailSlides = rooms.map((room) => ({
  src: room.cardImage ?? room.images[0],
  alt: room.cardTitle ?? room.title,
}));

const destinationSlides = destinations.map((destination) => ({
  slug: destination.slug,
  name: destination.name,
  ...destinationAssets(destination.stem),
}));

export default function ContactSection() {
  const { t } = useLang();
  const [activeLodgeSlide, setActiveLodgeSlide] = useState(0);
  const [activeDestination, setActiveDestination] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveLodgeSlide(
        (current) => (current + 1) % lodgeThumbnailSlides.length
      );
    }, 4500);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveDestination((current) => (current + 1) % destinationSlides.length);
    }, 45000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section id="contact" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1512px] px-6 lg:px-20">
        {/* Heading + contact info row */}
        <div className="mb-10 flex flex-col gap-8 lg:mb-10 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          <div className="lg:flex-1">
            <h2 className="mb-2 text-4xl leading-tight font-bold text-savana-800 lg:text-6xl">
              {t("contact.heading")}
            </h2>
            <p className="text-base leading-relaxed text-black">
              {t("contact.body")}
            </p>
          </div>

          <div className="flex flex-col gap-6 lg:gap-7">
            <div className="grid grid-cols-2 gap-6 sm:gap-10">
              <div>
                <p className="mb-1 text-base font-normal text-[#9B9529]">
                  {t("contact.phone")}
                </p>
                <a
                  href="tel:+6285239344046"
                  className="text-xl font-semibold text-green-400 transition-opacity hover:opacity-80"
                >
                  +6285 239 344 046
                </a>
              </div>
              <div>
                <p className="mb-1 text-base font-normal text-[#9B9529]">
                  {t("contact.whatsapp")}
                </p>
                <a
                  href="https://wa.me/6285339021145"
                  className="text-xl font-semibold text-green-400 transition-opacity hover:opacity-80"
                >
                  +6285 339 021 145
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 sm:gap-10">
              <div>
                <p className="mb-1 text-base font-normal text-[#9B9529]">
                  {t("contact.partner")}
                </p>
                <a
                  href="https://wa.me/6285339021145"
                  className="inline-flex items-center gap-2 text-xl font-semibold text-green-400 transition-opacity hover:opacity-80"
                >
                  {t("contact.partnerCta")}
                  <IoArrowForwardOutline size={20} />
                </a>
              </div>
              <div>
                <p className="mb-1 text-base font-normal text-[#9B9529]">
                  {t("contact.email")}
                </p>
                <a
                  href="mailto:waerebolodge@gmail.com"
                  className="text-xl font-semibold break-all text-green-400 transition-opacity hover:opacity-80"
                >
                  waerebolodge@gmail.com
                </a>
              </div>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-10">
              <a
                href="https://www.instagram.com/waerebolodge.official"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-semibold text-[#9B9529] transition-opacity hover:opacity-80"
              >
                Instagram
              </a>
              <a
                href="https://www.tiktok.com/@waerebolodge.official"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-semibold text-[#9B9529] transition-opacity hover:opacity-80"
              >
                Tik Tok
              </a>
            </div>
          </div>
        </div>

        {/* Image tile grid */}
        <div className="flex flex-col gap-5 lg:flex-row lg:items-stretch">
          {/* Large tile — destination slider (45s), click → destination page */}
          <Link
            href={`/destination/${destinationSlides[activeDestination].slug}`}
            className="group relative block h-72 w-full overflow-hidden rounded-[20px] shadow-sm lg:h-auto lg:flex-1"
          >
            {destinationSlides.map((slide, index) => (
              <span key={slide.slug}>
                <Image
                  src={slide.heroDesktop}
                  alt={slide.name}
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className={`hidden object-cover transition-all duration-1000 ease-out group-hover:scale-105 sm:block ${
                    index === activeDestination
                      ? "scale-100 opacity-100"
                      : "scale-105 opacity-0"
                  }`}
                />
                <Image
                  src={slide.heroMobile}
                  alt={slide.name}
                  fill
                  sizes="100vw"
                  className={`object-cover transition-all duration-1000 ease-out group-hover:scale-105 sm:hidden ${
                    index === activeDestination
                      ? "scale-100 opacity-100"
                      : "scale-105 opacity-0"
                  }`}
                />
              </span>
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <p
              key={destinationSlides[activeDestination].slug}
              className="iconic-fade absolute bottom-5 left-5 text-2xl font-semibold text-white [text-shadow:0_4px_8px_rgba(0,0,0,0.25)]"
            >
              {destinationSlides[activeDestination].name}
            </p>
          </Link>

          {/* 2x2 tile grid */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:w-[584px] lg:flex-shrink-0">
            <Link
              href="/trips"
              className="group relative flex h-[200px] flex-col justify-end gap-0.5 overflow-hidden rounded-[20px] bg-neutral-800 p-5"
            >
              <IoArrowUpOutline
                size={24}
                className="absolute top-4 right-4 rotate-45 text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
              <p className="text-2xl font-semibold text-white">
                {t("contact.tile.heartTitle")}
              </p>
              <p className="text-sm text-white/90 italic">
                {t("contact.tile.heartCaption")}
              </p>
            </Link>

            <Link
              href="/trips"
              className="group relative h-[200px] overflow-hidden rounded-[20px]"
            >
              <Image
                src="/homepage/Homepage-Footer-Waerebo-Lodge-Trip-Desktop.webp"
                alt={t("contact.tile.trekking")}
                fill
                sizes="(min-width: 1024px) 20vw, 50vw"
                className="hidden object-cover transition-transform duration-700 ease-out group-hover:scale-105 sm:block"
              />
              <Image
                src="/homepage/Homepage-Footer-Waerebo-Lodge-Trip-Mobile.webp"
                alt={t("contact.tile.trekking")}
                fill
                sizes="50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 sm:hidden"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-5 left-5 text-2xl font-semibold text-white [text-shadow:0_4px_8px_rgba(0,0,0,0.25)]">
                {t("contact.tile.trekking")}
              </p>
            </Link>

            <Link
              href="/lodge"
              className="group relative h-[200px] overflow-hidden rounded-[20px]"
            >
              {lodgeThumbnailSlides.map((slide, index) => (
                <Image
                  key={slide.src}
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  sizes="(min-width: 1024px) 20vw, 50vw"
                  className={`object-cover transition-[opacity,transform] duration-700 ease-out group-hover:scale-105 ${
                    index === activeLodgeSlide ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-5 left-5 text-2xl font-semibold text-white [text-shadow:0_4px_8px_rgba(0,0,0,0.25)]">
                {t("contact.tile.exploreLodge")}
              </p>
            </Link>

            <a
              href="https://www.google.com/maps/@-8.8465902,120.3055812,17z"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative h-[200px] overflow-hidden rounded-[20px]"
            >
              <Image
                src="/homepage/Homepage-Footer-Waerebo-Lodge-Location-Desktop.webp"
                alt={t("contact.tile.dintor")}
                fill
                sizes="(min-width: 1024px) 20vw, 50vw"
                className="hidden object-cover transition-transform duration-700 ease-out group-hover:scale-105 sm:block"
              />
              <Image
                src="/homepage/Homepage-Footer-Waerebo-Lodge-Location-Mobile.webp"
                alt={t("contact.tile.dintor")}
                fill
                sizes="50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 sm:hidden"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-5 left-5">
                <p className="text-2xl font-semibold text-white [text-shadow:0_4px_8px_rgba(0,0,0,0.25)]">
                  {t("contact.tile.dintor")}
                </p>
                <p className="text-sm text-white/90 italic [text-shadow:0_4px_8px_rgba(0,0,0,0.25)]">
                  {t("contact.tile.dintorCaption")}
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
