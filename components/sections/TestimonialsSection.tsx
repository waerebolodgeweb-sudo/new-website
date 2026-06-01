"use client";

import Image from "next/image";
import { useState } from "react";
import { IoStar } from "react-icons/io5";

const testimonials = [
  {
    id: 1,
    name: "al Garnier",
    rating: 5,
    text: "An absolutely magical experience. The lodge is the perfect place to rest before the trek — comfortable rooms, warm hospitality, and stunning scenery.",
    avatar: "https://placehold.co/80x80/27392A/ABBAA8?text=AG",
  },
  {
    id: 2,
    name: "Julia Kyryluck",
    rating: 5,
    text: "Staying here made our Wae Rebo trek so much easier. The staff arranged everything — guides, food, transport. Cannot recommend it enough!",
    avatar: "https://placehold.co/80x80/304534/ABBAA8?text=JK",
  },
  {
    id: 3,
    name: "Floros Marvelous",
    rating: 5,
    text: "The food was incredible, the beds comfortable, and the mountain air was refreshing. Waerebo Lodge is a hidden gem in Flores.",
    avatar: "https://placehold.co/80x80/5A7C61/F0E3D3?text=FM",
  },
  {
    id: 4,
    name: "Felina Margiati",
    rating: 5,
    text: "A truly authentic experience. The lodge blends seamlessly with its natural surroundings and the staff are exceptionally kind.",
    avatar: "https://placehold.co/80x80/73B07C/101313?text=FM",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  return (
    <section id="reviews" className="py-16 lg:py-24 bg-lodge-green overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-[11px] font-semibold tracking-[0.2em] text-lodge-pale uppercase mb-2">
          Travelers Review
        </p>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-10 gap-4">
          <h2 className="text-3xl lg:text-5xl font-bold">
            <span className="text-white">Word </span>
            <span className="text-lodge-pale">on the Trail.</span>
          </h2>
          <div className="flex gap-2 items-center">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to review ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current
                    ? "bg-white w-6"
                    : "bg-white/30 w-2 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              className={`rounded-2xl p-6 border transition-all duration-300 ${
                i === current
                  ? "bg-white/20 border-white/40"
                  : "bg-white/10 border-white/15"
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">{t.name}</p>
                  <div className="flex gap-0.5 mt-0.5">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <IoStar key={j} size={11} className="text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-white/75 text-sm leading-relaxed font-normal">
                {t.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
