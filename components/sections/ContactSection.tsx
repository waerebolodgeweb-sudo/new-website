"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  IoArrowForwardOutline,
  IoArrowUpOutline,
  IoLogoInstagram,
  IoLogoTiktok,
  IoLogoYoutube,
} from "react-icons/io5";
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
      setActiveDestination(
        (current) => (current + 1) % destinationSlides.length
      );
    }, 45000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section id="contact" className="bg-white py-10 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-[1512px] px-5 sm:px-6 lg:px-20">
        {/* Heading + contact info row */}
        <div className="mb-7 flex flex-col gap-6 sm:mb-10 sm:gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          <div className="lg:flex-1">
            <h2 className="mb-1 text-[28px] leading-tight font-bold text-savana-800 sm:mb-2 sm:text-4xl lg:text-6xl">
              {t("contact.heading")}
            </h2>
            <p className="max-w-[430px] text-[11px] leading-[1.45] text-pale-savana-300 sm:text-base sm:leading-relaxed sm:text-black">
              {t("contact.body")}
            </p>
          </div>

          <div className="flex flex-col gap-6 lg:gap-7">
            <div className="grid grid-cols-2 gap-x-5 gap-y-5 sm:gap-x-10 sm:gap-y-6">
              <div className="lg:order-1">
                <p className="mb-1 text-[11px] font-normal text-[#9B9529] sm:text-base">
                  {t("contact.phone")}
                </p>
                <a
                  href="tel:+6285239344046"
                  className="text-xs font-semibold text-green-400 transition-opacity hover:opacity-80 sm:text-xl"
                >
                  +6285 239 344 046
                </a>
              </div>
              <div className="lg:order-3">
                <p className="mb-1 text-[11px] font-normal text-[#9B9529] sm:text-base">
                  {t("contact.partner")}
                </p>
                <a
                  href="https://wa.me/6285339021145"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-green-400 transition-opacity hover:opacity-80 sm:gap-2 sm:text-xl"
                >
                  {t("contact.partnerCta")}
                  <IoArrowForwardOutline size={16} />
                </a>
              </div>
              <div className="lg:order-2">
                <p className="mb-1 text-[11px] font-normal text-[#9B9529] sm:text-base">
                  {t("contact.whatsapp")}
                </p>
                <a
                  href="https://wa.me/6285339021145"
                  className="text-xs font-semibold text-green-400 transition-opacity hover:opacity-80 sm:text-xl"
                >
                  +6285 339 021 145
                </a>
              </div>
              <div className="lg:order-4">
                <p className="mb-1 text-[11px] font-normal text-[#9B9529] sm:text-base">
                  {t("contact.email")}
                </p>
                <a
                  href="mailto:waerebolodge@gmail.com"
                  className="text-[11px] font-semibold break-all text-green-400 transition-opacity hover:opacity-80 sm:text-xl"
                >
                  waerebolodge@gmail.com
                </a>
              </div>
            </div>

            {/* Socials */}
            <div className="hidden items-center gap-10 lg:flex">
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
            className="group relative block h-[140px] w-full overflow-hidden rounded-xl shadow-sm sm:h-72 sm:rounded-[20px] lg:h-auto lg:flex-1"
          >
            {destinationSlides.map((slide, index) => (
              <span key={slide.slug} className="absolute inset-0">
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
              className="iconic-fade absolute bottom-3 left-3 text-sm font-semibold text-white [text-shadow:0_4px_8px_rgba(0,0,0,0.25)] sm:bottom-5 sm:left-5 sm:text-2xl"
            >
              {destinationSlides[activeDestination].name}
            </p>
          </Link>

          {/* 2x2 tile grid */}
          <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:w-[584px] lg:flex-shrink-0">
            <Link
              href="/trips"
              className="group relative flex h-[100px] flex-col justify-end gap-0.5 overflow-hidden rounded-xl bg-neutral-800 p-3 sm:h-[200px] sm:rounded-[20px] sm:p-5"
            >
              <IoArrowUpOutline
                size={20}
                className="absolute top-2 right-2 rotate-45 text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 sm:top-4 sm:right-4"
              />
              <p className="text-xs font-semibold text-white sm:text-2xl">
                {t("contact.tile.heartTitle")}
              </p>
              <p className="text-[8px] leading-tight text-white/90 italic sm:text-sm">
                {t("contact.tile.heartCaption")}
              </p>
            </Link>

            <Link
              href="/trips"
              className="group relative h-[100px] overflow-hidden rounded-xl sm:h-[200px] sm:rounded-[20px]"
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
              <p className="absolute bottom-3 left-3 text-sm font-semibold text-white [text-shadow:0_4px_8px_rgba(0,0,0,0.25)] sm:bottom-5 sm:left-5 sm:text-2xl">
                {t("contact.tile.trekking")}
              </p>
            </Link>

            <Link
              href="/lodge"
              className="group relative h-[100px] overflow-hidden rounded-xl sm:h-[200px] sm:rounded-[20px]"
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
              <p className="absolute bottom-3 left-3 text-sm font-semibold text-white [text-shadow:0_4px_8px_rgba(0,0,0,0.25)] sm:bottom-5 sm:left-5 sm:text-2xl">
                {t("contact.tile.exploreLodge")}
              </p>
            </Link>

            <a
              href="https://www.google.com/maps/@-8.8465902,120.3055812,17z"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative h-[100px] overflow-hidden rounded-xl sm:h-[200px] sm:rounded-[20px]"
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
              <div className="absolute bottom-3 left-3 sm:bottom-5 sm:left-5">
                <p className="text-sm font-semibold text-white [text-shadow:0_4px_8px_rgba(0,0,0,0.25)] sm:text-2xl">
                  {t("contact.tile.dintor")}
                </p>
                <p className="text-[8px] text-white/90 italic [text-shadow:0_4px_8px_rgba(0,0,0,0.25)] sm:text-sm">
                  {t("contact.tile.dintorCaption")}
                </p>
              </div>
            </a>
          </div>
        </div>
        <div className="mt-8 flex items-center justify-between gap-5 lg:hidden">
          <p className="max-w-[150px] text-xs leading-snug font-semibold text-savana-700">
            Follow us to get more updates &amp; information!
          </p>
          <div className="flex gap-2">
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-savana-200 text-savana-800"
            >
              <IoLogoYoutube size={19} />
            </a>
            <a
              href="https://www.instagram.com/waerebolodge.official"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-savana-200 text-savana-800"
            >
              <IoLogoInstagram size={19} />
            </a>
            <a
              href="https://www.tiktok.com/@waerebolodge.official"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-savana-200 text-savana-800"
            >
              <IoLogoTiktok size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
