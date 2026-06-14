"use client";

import Image from "next/image";
import { useState } from "react";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

const photos = [
  {
    src: "/home/moment-1.jpg",
    title: "Smiles Before the Ascent",
    caption:
      "Taking a moment to soak in the golden rice terraces and coastal breeze at Dintor before hiking up to the sky village",
    alt: "Travelers smiling in the rice fields of Dintor",
  },
  {
    src: "/home/moment-2.jpg",
    title: "The Sky Village Awaits",
    caption:
      "The iconic cone-shaped Mbaru Niang houses of Wae Rebo, wrapped in morning mist high above the clouds",
    alt: "Traditional cone-shaped houses of Wae Rebo",
  },
  {
    src: "/home/moment-3.jpg",
    title: "Rooftops in the Clouds",
    caption:
      "Straw-thatched rooftops of the ancestral village — a living heritage perched on the mountain ridge",
    alt: "Wae Rebo village rooftops covered with straw",
  },
];

export default function GallerySection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + photos.length) % photos.length);
  const next = () => setCurrent((c) => (c + 1) % photos.length);

  return (
    <section className="bg-neutral-050 py-16 lg:py-24">
      <div className="mx-auto max-w-[1512px] px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-3xl shadow-sm">
          {/* Golden rice-terrace background */}
          <Image
            src="/home/bg-moment.jpg"
            alt=""
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-black/10" />

          <div className="relative z-10 grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.85fr_1.5fr] lg:gap-10 lg:p-12">
            {/* Left — heading, caption, controls */}
            <div className="flex flex-col">
              <p className="mb-2 text-[11px] font-semibold tracking-wide text-cream-200">
                The Experience
              </p>
              <h2 className="mb-8 text-3xl text-white lg:mb-10 lg:text-5xl">
                <span className="font-light">Moments </span>
                <span className="font-bold">Captured.</span>
              </h2>
              <h3 className="mb-3 text-lg font-bold text-white lg:text-xl">
                {photos[current].title}
              </h3>
              <p className="mb-8 max-w-xs text-sm leading-relaxed text-white/80">
                {photos[current].caption}
              </p>
              <div className="mt-auto flex gap-3">
                <button
                  onClick={prev}
                  aria-label="Previous photo"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/50 text-white transition-colors hover:bg-white hover:text-neutral-900"
                >
                  <IoChevronBackOutline size={20} />
                </button>
                <button
                  onClick={next}
                  aria-label="Next photo"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-neutral-900 transition-colors hover:bg-cream-200"
                >
                  <IoChevronForwardOutline size={20} />
                </button>
              </div>
            </div>

            {/* Right — filmstrip carousel (active photo + next peeking in) */}
            <div className="relative h-64 overflow-hidden sm:h-80 lg:h-[440px]">
              <div
                className="flex h-full transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${current * 85}%)` }}
              >
                {photos.map((photo) => (
                  <div
                    key={photo.src}
                    className="h-full w-[85%] flex-shrink-0 pr-4"
                  >
                    <div className="relative h-full w-full overflow-hidden rounded-2xl shadow-lg">
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
