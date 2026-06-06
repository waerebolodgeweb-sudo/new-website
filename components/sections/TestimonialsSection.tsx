"use client";

import Image from "next/image";
import { useRef } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

const testimonials = [
  {
    id: 1,
    name: "al Garnier",
    rating: 5,
    text: "Wonderful place with an amazing view. Rooms are very simple, but perfectly clean with airco. The plus is the food and the atmosphere / kindness of this family-owned place",
    avatar: "/home/review-1.jpg",
  },
  {
    id: 2,
    name: "Julia Kyryluck",
    rating: 5,
    text: "A unique combination of mountains, rice fields and sea in 1 place! Plus, Martin, the owner, is a great storyteller! Highly recommended to visit :)",
    avatar: "/home/review-2.jpg",
  },
  {
    id: 3,
    name: "Flores Marvelous",
    rating: 5,
    text: "One Of The Best Place To Staying For Countryside Trip. not that hard to Find the Place, the View is Great and the Rooms are Great.",
    avatar: "/home/review-3.jpg",
  },
  {
    id: 4,
    name: "Felina Margiati",
    rating: 5,
    text: "Nice place, it's in the middle of rice field but at the same time you can see the sea from here. Clean room, staff and owner are friendly. Electricity is out at 10PM, no mobile network, a perfect getaways.",
    avatar: "/home/review-4.jpg",
  },
];

export default function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: number) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <section id="reviews" className="bg-neutral-050 py-12 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[36px]">
          {/* Rice-field background + dark olive overlay */}
          <Image
            src="/home/bg-moment.jpg"
            alt=""
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#312805]/45" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-[#453D18]/60" />

          <div className="relative z-10 px-6 pt-16 pb-12 sm:px-8 lg:px-10 lg:pt-24 lg:pb-12">
            {/* Header */}
            <div className="mb-10 flex items-end justify-between gap-6 lg:mb-16">
              <div>
                <p className="mb-2 text-sm font-normal text-white/90 lg:text-base">
                  Travelers Review
                </p>
                <h2 className="text-3xl leading-tight font-semibold text-white lg:text-5xl">
                  Word on the Trail.
                </h2>
              </div>
              <div className="flex flex-shrink-0 items-center gap-2.5">
                <button
                  onClick={() => scroll(-1)}
                  aria-label="Previous reviews"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white text-white transition-colors hover:bg-white hover:text-green-400"
                >
                  <IoChevronBack size={20} />
                </button>
                <button
                  onClick={() => scroll(1)}
                  aria-label="Next reviews"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-green-400 transition-colors hover:bg-cream-200"
                >
                  <IoChevronForward size={20} />
                </button>
              </div>
            </div>

            {/* Review cards */}
            <div
              ref={scrollRef}
              className="flex gap-5 overflow-x-auto pb-1 lg:gap-7 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {testimonials.map((t) => (
                <div
                  key={t.id}
                  className="flex min-w-[270px] flex-1 flex-col gap-7 rounded-[32px] bg-black/30 p-5 pb-10 backdrop-blur-md sm:min-w-[290px] lg:gap-8"
                >
                  {/* Avatar + rating */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="relative h-[60px] w-[60px] flex-shrink-0 overflow-hidden rounded-full bg-white">
                      <Image
                        src={t.avatar}
                        alt={t.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex items-end gap-0.5">
                      <span className="text-3xl font-semibold text-white">
                        {t.rating}
                      </span>
                      <span className="pb-1 text-lg font-normal text-white/50">
                        /5
                      </span>
                    </div>
                  </div>

                  {/* Name + comment */}
                  <div>
                    <p className="mb-2 text-xl font-semibold text-white">
                      {t.name}
                    </p>
                    <p className="text-sm leading-relaxed font-medium text-white/90">
                      {t.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Chat-bubble tail — makes the card read like a speech bubble */}
        <div className="pl-8 sm:pl-12 lg:pl-[100px]">
          <div className="relative h-12 w-24 overflow-hidden rounded-b-[24px] sm:h-16 sm:w-28 lg:h-20 lg:w-[150px]">
            <Image
              src="/home/bg-moment.jpg"
              alt=""
              fill
              className="object-cover object-bottom"
            />
            <div className="absolute inset-0 bg-[#312805]/55" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#453D18]/85" />
          </div>
        </div>
      </div>
    </section>
  );
}
