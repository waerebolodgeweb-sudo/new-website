"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { useLang } from "@/lib/i18n";

const testimonials = [
  {
    id: 1,
    name: "al Garnier",
    rating: 5,
    text: "Wonderful place with an amazing view. Rooms are very simple, but perfectly clean with airco. The plus is the food and the atmosphere / kindness of this family-owned place",
    avatar:
      "/homepage/Homepage-Waerebo-Lodge-Profile-Picture-Google-Review-01-al-Garnier.webp",
  },
  {
    id: 2,
    name: "Julia Kyryluck",
    rating: 5,
    text: "A unique combination of mountains, rice fields and sea in 1 place! Plus, Martin, the owner, is a great storyteller! Highly recommended to visit :)",
    avatar:
      "/homepage/Homepage-Waerebo-Lodge-Profile-Picture-Google-Review-02-Julia-Kyryluck.webp",
  },
  {
    id: 3,
    name: "Flores Marvelous",
    rating: 5,
    text: "One Of The Best Place To Staying For Countryside Trip. not that hard to Find the Place, the View is Great and the Rooms are Great.",
    avatar:
      "/homepage/Homepage-Waerebo-Lodge-Profile-Picture-Google-Review-03-Flores-Marvelous.webp",
  },
  {
    id: 4,
    name: "Felina Margiati",
    rating: 5,
    text: "Nice place, it's in the middle of rice field but at the same time you can see the sea from here. Clean room, staff and owner are friendly. Electricity is out at 10PM, no mobile network, a perfect getaways.",
    avatar:
      "/homepage/Homepage-Waerebo-Lodge-Profile-Picture-Google-Review-04-Felina-Margiati.webp",
  },
];

export default function ReviewsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { t } = useLang();

  const scroll = (dir: number) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };

  useEffect(() => {
    const isDesktop = window.matchMedia("(min-width: 640px)").matches;
    const duration = isDesktop ? 15000 : 6000;
    const id = window.setInterval(() => {
      const el = scrollRef.current;
      if (!el) return;
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
      el.scrollTo({
        left: atEnd ? 0 : el.scrollLeft + el.clientWidth * 0.8,
        behavior: "smooth",
      });
    }, duration);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section id="reviews" className="bg-neutral-050 py-12 lg:py-24">
      <div className="mx-auto max-w-[1512px] px-6 lg:px-20">
        <div className="relative aspect-[1179/2352] sm:aspect-[2784/1530]">
          <Image
            src="/homepage/Homepage-Waerebo-Lodge-Background-Google-Reviews-Desktop.webp"
            alt=""
            fill
            className="hidden object-fill sm:block"
          />
          <Image
            src="/homepage/Homepage-Waerebo-Lodge-Background-Google-Reviews-Mobile.webp"
            alt=""
            fill
            className="object-fill sm:hidden"
          />

          <div className="absolute inset-0 z-10 px-[6%] pt-[7%] pb-[12%]">
            {/* Header */}
            <div className="mb-8 flex items-end justify-between gap-6 lg:mb-10">
              <div>
                <p className="mb-2 text-sm font-normal text-white/90 lg:text-base">
                  {t("testimonials.eyebrow")}
                </p>
                <h2 className="text-3xl leading-tight font-semibold text-white lg:text-5xl">
                  {t("testimonials.heading")}
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
              className="flex [scrollbar-width:none] gap-5 overflow-x-auto pb-1 [-ms-overflow-style:none] lg:gap-7 [&::-webkit-scrollbar]:hidden"
            >
              {testimonials.map((review) => (
                <div
                  key={review.id}
                  data-reveal
                  className="flex min-w-[270px] flex-1 flex-col gap-7 rounded-[32px] bg-black/30 p-5 pb-10 backdrop-blur-md sm:min-w-[290px] lg:gap-8"
                >
                  {/* Avatar + rating */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="relative h-[60px] w-[60px] flex-shrink-0 overflow-hidden rounded-full bg-white">
                      <Image
                        src={review.avatar}
                        alt={review.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex items-end gap-0.5">
                      <span className="text-3xl font-semibold text-white">
                        {review.rating}
                      </span>
                      <span className="pb-1 text-lg font-normal text-white/50">
                        /5
                      </span>
                    </div>
                  </div>

                  {/* Name + comment */}
                  <div>
                    <p className="mb-2 text-xl font-semibold text-white">
                      {review.name}
                    </p>
                    <p className="text-sm leading-relaxed font-medium text-white/90">
                      {review.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Chat-bubble triangle tail — desktop only (hidden on mobile per Figma) */}
      </div>
    </section>
  );
}
