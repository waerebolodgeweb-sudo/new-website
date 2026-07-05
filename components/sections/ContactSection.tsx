"use client";

import Image from "next/image";
import Link from "next/link";
import { IoArrowForwardOutline, IoArrowUpOutline } from "react-icons/io5";
import { useLang } from "@/lib/i18n";

export default function ContactSection() {
  const { t } = useLang();

  return (
    <section id="contact" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1512px] px-6 lg:px-10">
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
          {/* Large lodge image */}
          <div className="relative h-72 w-full overflow-hidden rounded-[20px] shadow-sm lg:h-auto lg:flex-1">
            <Image
              src="/home/about-3.jpg"
              alt={t("contact.tile.village")}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <p className="absolute bottom-5 left-5 text-2xl font-semibold text-white [text-shadow:0_4px_8px_rgba(0,0,0,0.25)]">
              {t("contact.tile.village")}
            </p>
          </div>

          {/* 2x2 tile grid */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:w-[584px] lg:flex-shrink-0">
            <Link
              href="/about"
              className="relative flex h-[200px] flex-col justify-end gap-0.5 overflow-hidden rounded-[20px] bg-neutral-800 p-5"
            >
              <IoArrowUpOutline
                size={24}
                className="absolute top-4 right-4 rotate-45 text-white"
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
              className="relative h-[200px] overflow-hidden rounded-[20px]"
            >
              <Image
                src="/home/contact-tiles/trekking-program.jpg"
                alt={t("contact.tile.trekking")}
                fill
                sizes="(min-width: 1024px) 20vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-5 left-5 text-2xl font-semibold text-white [text-shadow:0_4px_8px_rgba(0,0,0,0.25)]">
                {t("contact.tile.trekking")}
              </p>
            </Link>

            <Link
              href="/lodge"
              className="relative h-[200px] overflow-hidden rounded-[20px]"
            >
              <Image
                src="/home/contact-tiles/explore-lodge.jpg"
                alt={t("contact.tile.exploreLodge")}
                fill
                sizes="(min-width: 1024px) 20vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-5 left-5 text-2xl font-semibold text-white [text-shadow:0_4px_8px_rgba(0,0,0,0.25)]">
                {t("contact.tile.exploreLodge")}
              </p>
            </Link>

            <a
              href="https://www.google.com/maps/@-8.8465902,120.3055812,17z"
              target="_blank"
              rel="noopener noreferrer"
              className="relative h-[200px] overflow-hidden rounded-[20px]"
            >
              <iframe
                title="Map to Waerebo Lodge"
                src="https://www.google.com/maps?q=-8.8465902,120.3055812&z=15&output=embed"
                className="pointer-events-none absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
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
