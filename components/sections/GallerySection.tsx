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
    <section className="relative py-16 lg:py-24 overflow-hidden">
      {/* Background */}
      <Image
        src="/home/bg-moment.jpg"
        alt=""
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-neutral-900/70" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="font-semibold tracking-[0.2em] text-white mb-2">
          The Experience
        </p>
        <h2 className="text-3xl lg:text-5xl mb-10 lg:mb-12">
          <span className="text-white">Moments </span>
          <span className="text-white font-semibold">Captured.</span>
        </h2>

        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-8 lg:gap-12 items-center">
          {/* Left — caption + controls */}
          <div>
            <h3 className="text-xl lg:text-2xl font-bold text-white mb-3">
              Smiles Before the Ascent
            </h3>
            <p className="text-neutral-000 text-sm leading-relaxed mb-8">
              Take a moment to soak in the joy that visitors and travelers share
              before the climb begins — the warmth of the highlands lingers long
              before the trek to the sky village.
            </p>
            <div className="flex gap-3">
              <button
                onClick={prev}
                aria-label="Previous photo"
                className="w-11 h-11 rounded-full border border-white/40 flex items-center justify-center text-white hover:bg-white hover:text-neutral-900 transition-colors"
              >
                <IoChevronBackOutline size={20} />
              </button>
              <button
                onClick={next}
                aria-label="Next photo"
                className="w-11 h-11 rounded-full border border-white/40 flex items-center justify-center text-white hover:bg-white hover:text-neutral-900 transition-colors"
              >
                <IoChevronForwardOutline size={20} />
              </button>
            </div>
          </div>

          {/* Right — active photo */}
          <div className="relative h-64 sm:h-80 lg:h-[420px] rounded-3xl overflow-hidden shadow-lg">
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
