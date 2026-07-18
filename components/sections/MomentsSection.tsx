"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { useLang } from "@/lib/i18n";

const G = "/Gallery";

const moments: { src: string; caption: { en: string; id: string } }[] = [
  {
    src: `${G}/Waerebo-Lodge-Gallery-Guest-Photo-01.webp`,
    caption: {
      en: "Experiencing a warm, heartfelt welcome ceremony from the local community.",
      id: "Merasakan upacara penyambutan yang hangat dari komunitas setempat.",
    },
  },
  {
    src: `${G}/Waerebo-Lodge-Gallery-Guest-Photo-07.webp`,
    caption: {
      en: "Learning about the history & heritage of the village from our guides.",
      id: "Belajar sejarah & warisan desa dari pemandu kami.",
    },
  },
  {
    src: `${G}/Waerebo-Lodge-Gallery-Guest-Photo-13.webp`,
    caption: {
      en: "Enjoying a scenic coastal boat ride along the Flores coastline.",
      id: "Menikmati perjalanan perahu menyusuri pesisir Flores.",
    },
  },
  {
    src: `${G}/Waerebo-Lodge-Gallery-Guest-Photo-19.webp`,
    caption: {
      en: "Sharing authentic coffee beneath a traditional house.",
      id: "Menikmati kopi asli di bawah rumah adat.",
    },
  },
  {
    src: `${G}/Waerebo-Lodge-Gallery-Guest-Photo-20.webp`,
    caption: {
      en: "Standing proud against the misty Mbaru Niang backdrop.",
      id: "Berpose dengan latar Mbaru Niang yang berkabut.",
    },
  },
  {
    src: `${G}/Waerebo-Lodge-Gallery-Guest-Photo-14.webp`,
    caption: {
      en: "Traditional coffee beans dried under the highland sun.",
      id: "Biji kopi tradisional dijemur di bawah matahari dataran tinggi.",
    },
  },
];

export default function MomentsSection() {
  const [current, setCurrent] = useState(0);
  const { t, lang } = useLang();
  const total = moments.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  useEffect(() => {
    const isDesktop = window.matchMedia("(min-width: 640px)").matches;
    const id = window.setInterval(
      () => setCurrent((c) => (c + 1) % total),
      isDesktop ? 6000 : 5000
    );
    return () => window.clearInterval(id);
  }, [total]);

  return (
    <section className="bg-neutral-050 py-16 lg:py-24">
      <div className="mx-auto max-w-[1920px]">
        <div className="relative mr-auto max-w-[1512px] overflow-hidden rounded-r-[32px] shadow-sm">
          {/* Golden rice-field background */}
          <Image
            src="/homepage/Homepage-Waerebo-Lodge-Background-Gallery-Desktop.webp"
            alt=""
            fill
            className="hidden object-cover sm:block"
          />
          <Image
            src="/homepage/Homepage-Waerebo-Lodge-Background-Gallery-Mobile.webp"
            alt=""
            fill
            className="object-cover sm:hidden"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/25 to-black/70" />

          <div className="relative z-10 p-6 sm:p-8 lg:p-12">
            {/* Header row */}
            <div className="mb-5 flex items-start justify-between gap-6">
              <div>
                <p className="mb-2 text-sm font-normal text-white/80">
                  {t("moments.eyebrow")}
                </p>
                <h2 className="text-4xl leading-none text-white lg:text-5xl">
                  <span className="font-light">{t("moments.head1")}</span>
                  <span className="font-bold">{t("moments.head2")}</span>
                </h2>
              </div>
              <div className="flex flex-shrink-0 gap-3 pt-2">
                <button
                  onClick={prev}
                  aria-label="Previous moment"
                  className="flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors hover:bg-white/15"
                >
                  <IoChevronBack size={22} />
                </button>
                <button
                  onClick={next}
                  aria-label="Next moment"
                  className="flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors hover:bg-white/15"
                >
                  <IoChevronForward size={22} />
                </button>
              </div>
            </div>

            {/* Progress-bar pagination */}
            <div className="mb-8 flex max-w-lg gap-2">
              {moments.map((m, i) => (
                <button
                  key={m.src}
                  onClick={() => setCurrent(i)}
                  aria-label={`Show moment ${i + 1}`}
                  className="h-1 flex-1 overflow-hidden rounded-full bg-white/25"
                >
                  <span
                    className={`block h-full rounded-full bg-white transition-all duration-500 ${
                      i === current ? "w-full" : "w-0"
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* Filmstrip — bleeds to band left edge */}
            <div className="-ml-6 overflow-hidden pl-6 sm:-ml-8 sm:pl-8 lg:-ml-12 lg:pl-12">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{
                  transform: `translateX(-${current * 40}%)`,
                }}
              >
                {moments.map((m, i) => {
                  const active = i === current;
                  return (
                    <button
                      key={m.src}
                      onClick={() => setCurrent(i)}
                      className="w-[80%] flex-shrink-0 pr-4 text-left sm:w-[52%] lg:w-[40%]"
                    >
                      <div
                        className={`relative h-56 overflow-hidden rounded-2xl transition-all duration-500 sm:h-72 lg:h-[420px] ${
                          active
                            ? "ring-2 ring-white"
                            : "opacity-70"
                        }`}
                      >
                        <Image
                          src={m.src}
                          alt={m.caption[lang]}
                          fill
                          sizes="(min-width: 1024px) 600px, 80vw"
                          className="object-cover"
                        />
                        {!active && (
                          <div className="absolute inset-0 bg-black/40" />
                        )}
                      </div>
                      <p
                        className={`mt-4 max-w-sm text-sm leading-relaxed transition-colors duration-500 lg:text-base ${
                          active ? "font-semibold text-white" : "text-white/50"
                        }`}
                      >
                        {m.caption[lang]}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
