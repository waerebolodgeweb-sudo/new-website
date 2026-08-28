"use client";

import Image from "next/image";
import Link from "next/link";
import { IoArrowBackOutline, IoImagesOutline } from "react-icons/io5";
import Navbar from "@/components/layout/Navbar";
import { useLang } from "@/lib/i18n";

const copy = {
  eyebrow: { en: "Error 404", id: "Galat 404" },
  heading: { en: "Lost Above the Clouds", id: "Tersesat di Atas Awan" },
  body: {
    en: "The trail you followed doesn't lead anywhere. The page may have been moved, renamed, or is resting somewhere in the mist.",
    id: "Jalur yang Anda ikuti tidak menuju ke mana pun. Halaman ini mungkin telah dipindahkan, diganti nama, atau sedang beristirahat di balik kabut.",
  },
  home: { en: "Back to the Lodge", id: "Kembali ke Lodge" },
  gallery: { en: "Explore Our Gallery", id: "Jelajahi Galeri Kami" },
};

export default function NotFound() {
  const { lang } = useLang();

  return (
    <>
      <Navbar />
      <main className="relative flex min-h-screen items-center justify-center overflow-hidden">
        {/* Misty Mbaru Niang backdrop */}
        <Image
          src="/Gallery/Waerebo-Lodge-Gallery-Mbaru-Niang-House-Desktop.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="hidden object-cover sm:block"
        />
        <Image
          src="/Gallery/Waerebo-Lodge-Gallery-Mbaru-Niang-House-Mobile.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover sm:hidden"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/75" />

        {/* Content */}
        <div className="iconic-fade relative z-10 mx-auto max-w-2xl px-6 py-32 text-center">
          <p className="mb-3 text-sm font-semibold tracking-[0.25em] text-cream-200 uppercase">
            {copy.eyebrow[lang]}
          </p>
          <p className="text-[96px] leading-none font-bold text-white/95 [text-shadow:0_8px_30px_rgba(0,0,0,0.45)] sm:text-[140px]">
            404
          </p>
          <h1 className="mt-4 text-3xl leading-tight font-semibold text-white lg:text-4xl">
            {copy.heading[lang]}
          </h1>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-white/80">
            {copy.body[lang]}
          </p>

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/"
              className="button-light inline-flex items-center justify-center gap-2 rounded-xl px-6 py-4 text-base font-medium transition-colors"
            >
              <IoArrowBackOutline size={18} />
              {copy.home[lang]}
            </Link>
            <Link
              href="/gallery"
              className="button-outline-light inline-flex items-center justify-center gap-2 rounded-xl px-6 py-4 text-base font-medium transition-colors"
            >
              <IoImagesOutline size={18} />
              {copy.gallery[lang]}
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
