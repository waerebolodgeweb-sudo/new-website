"use client";

import Image from "next/image";
import { useState } from "react";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

const photos = [
  {
    src: "/home/moment-1.jpg",
    alt: "Smiles before the ascent to Wae Rebo",
  },
  {
    src: "/home/moment-2.jpg",
    alt: "Traditional cone-shaped houses of Wae Rebo",
  },
];

export default function GallerySection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + photos.length) % photos.length);
  const next = () => setCurrent((c) => (c + 1) % photos.length);

  return (
    <section className="relative overflow-hidden py-16 lg:py-24">
      {/* Background */}
      <Image src="/home/bg-moment.jpg" alt="" fill className="object-cover" />
      <div className="absolute inset-0 bg-neutral-900/70" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-2 font-semibold tracking-[0.2em] text-white">
          The Experience
        </p>
        <h2 className="mb-10 text-3xl lg:mb-12 lg:text-5xl">
          <span className="text-white">Moments </span>
          <span className="font-semibold text-white">Captured.</span>
        </h2>

        <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.6fr] lg:gap-12">
          {/* Left — caption + controls */}
          <div>
            <h3 className="mb-3 text-xl font-bold text-white lg:text-2xl">
              Smiles Before the Ascent
            </h3>
            <p className="mb-8 text-sm leading-relaxed text-neutral-000">
              Take a moment to soak in the joy that visitors and travelers share
              before the climb begins — the warmth of the highlands lingers long
              before the trek to the sky village.
            </p>
            <div className="flex gap-3">
              <button
                onClick={prev}
                aria-label="Previous photo"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:bg-white hover:text-neutral-900"
              >
                <IoChevronBackOutline size={20} />
              </button>
              <button
                onClick={next}
                aria-label="Next photo"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:bg-white hover:text-neutral-900"
              >
                <IoChevronForwardOutline size={20} />
              </button>
            </div>
          </div>

          {/* Right — active photo */}
          <div className="relative h-64 overflow-hidden rounded-3xl shadow-lg sm:h-80 lg:h-[420px]">
            <Image
              src={photos[current].src}
              alt={photos[current].alt}
              fill
              className="object-cover transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
