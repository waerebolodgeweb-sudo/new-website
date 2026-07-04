"use client";

import Image from "next/image";
import { useState } from "react";
import {
  IoChevronBackOutline,
  IoChevronForwardOutline,
  IoPlay,
} from "react-icons/io5";
import { useLang } from "@/lib/i18n";

const videos = [
  {
    id: "Rp7MpKgdeWA",
    title: "Nic From Singapore",
    caption:
      "Taking a moment to soak in the golden rice terraces and coastal breeze at Dintor before hiking up to the sky village",
    url: "https://youtu.be/Rp7MpKgdeWA",
  },
  {
    id: "uT3myORIxcs",
    title: "Christophe & Jean - Franch",
    caption:
      "Sharing their Waerebo Lodge experience before continuing the journey through the heart of Flores.",
    url: "https://youtu.be/uT3myORIxcs",
  },
];

export default function GallerySection() {
  const [current, setCurrent] = useState(0);
  const { t } = useLang();
  const activeVideo = videos[current];

  const prev = () => setCurrent((c) => (c - 1 + videos.length) % videos.length);
  const next = () => setCurrent((c) => (c + 1) % videos.length);

  return (
    <section className="bg-neutral-050 py-16 lg:py-24">
      <div className="mx-auto max-w-[1920px]">
        <div className="ml-auto max-w-[1512px]">
          <div className="relative overflow-hidden rounded-l-3xl shadow-sm">
            <Image
              src="/home/bg-moment.jpg"
              alt=""
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 w-1/2 bg-gradient-to-r from-black/30 to-[#666666]/0 backdrop-blur-[2px]" />

            <div className="relative z-10 grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.85fr_1.5fr] lg:gap-10 lg:p-12">
              <div className="flex flex-col">
                <p className="mb-2 text-[11px] font-semibold tracking-wide text-cream-200">
                  {t("gallery.eyebrow")}
                </p>
                <h2 className="mb-8 text-3xl text-white lg:mb-10 lg:text-5xl">
                  <span className="font-light">{t("gallery.head1")}</span>
                  <span className="font-bold">{t("gallery.head2")}</span>
                </h2>
                <h3 className="mb-3 text-lg font-bold text-white lg:text-xl">
                  {activeVideo.title}
                </h3>
                <p className="mb-8 max-w-xs text-sm leading-relaxed text-white/80">
                  {activeVideo.caption}
                </p>
                <div className="mt-auto flex gap-3">
                  <button
                    onClick={prev}
                    aria-label="Previous video"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/50 text-white transition-colors hover:bg-white hover:text-neutral-900"
                  >
                    <IoChevronBackOutline size={20} />
                  </button>
                  <button
                    onClick={next}
                    aria-label="Next video"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-neutral-900 transition-colors hover:bg-cream-200"
                  >
                    <IoChevronForwardOutline size={20} />
                  </button>
                </div>
              </div>

              <div className="relative h-64 overflow-hidden sm:h-80 lg:h-[600px]">
                <div
                  className="flex h-full transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${current * 85}%)` }}
                >
                  {videos.map((video) => (
                    <div
                      key={video.id}
                      className="h-full w-[85%] flex-shrink-0 pr-4"
                    >
                      <a
                        href={video.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Watch ${video.title} on YouTube`}
                        className="group relative block h-full w-full overflow-hidden rounded-2xl shadow-lg"
                      >
                        <Image
                          src={`https://i.ytimg.com/vi/${video.id}/maxresdefault.jpg`}
                          alt={video.title}
                          fill
                          sizes="(min-width: 1024px) 900px, 85vw"
                          className="object-cover"
                        />
                        <span className="absolute inset-0 bg-black/5 transition-colors group-hover:bg-black/15" />
                        <span className="absolute top-1/2 left-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-savana-800 shadow-lg transition-transform group-hover:scale-105">
                          <IoPlay size={34} className="translate-x-0.5" />
                        </span>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
