"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

const menuItems = [
  {
    title: "Fried Eggplant",
    description:
      "Eggplant slices fried to a golden crisp, served as a savory crunch to complete the main dish.",
    image: "/restaurant/Fried%20Eggplant.jpg",
  },
  {
    title: "Sautéed Greens",
    description:
      "Freshly picked, seasonal vegetables stir-fried with aromatic garlic and traditional spices.",
    image: "/restaurant/Saut%C3%A9ed%20Greens.jpg",
  },
  {
    title: "Fresh Grilled Fish",
    description:
      "Locally sourced fish, marinated in our signature blend of island spices and grilled to perfection.",
    image: "/restaurant/Fresh%20Grilled%20Fish.jpg",
  },
  {
    title: "Lodge Breakfast Plate",
    description:
      "A comforting start to your day featuring eggs, toast, sweet local bananas, and a warm cup of Waerebo coffee.",
    image: "/restaurant/Lodge%20Breakfast%20Plate.jpg",
  },
  {
    title: "Red Rice",
    description:
      "Nutritious, earthy, and grown in the region. The perfect pairing for rich, local flavors.",
    image: "/restaurant/Red-Rice.jpg",
  },
];

export default function DailyMenuSlider({ bookHref }: { bookHref: string }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(1);

  const scrollMenu = (direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;

    const card = track.querySelector<HTMLElement>("[data-menu-card]");
    const scrollAmount = (card?.offsetWidth ?? 300) + 24;
    const nextIndex = Math.min(
      menuItems.length - 1,
      Math.max(0, activeIndex + direction)
    );

    setActiveIndex(nextIndex);
    track.scrollBy({ left: direction * scrollAmount, behavior: "smooth" });
  };

  return (
    <section className="pt-20 text-center">
      <h2 className="text-5xl leading-tight font-normal text-savana-800">
        Savor Our <span className="font-semibold">Daily Menu</span>
      </h2>

      <div className="relative mt-10">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-36 bg-gradient-to-r from-[#f8f6ef] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-36 bg-gradient-to-l from-[#f8f6ef] to-transparent" />

        <button
          type="button"
          aria-label="Previous menu item"
          onClick={() => scrollMenu(-1)}
          className="absolute top-1/2 left-8 z-20 grid h-14 w-14 -translate-y-1/2 place-items-center rounded-full bg-white text-savana-500 shadow-lg transition-colors hover:text-savana-800"
        >
          <IoChevronBack size={28} />
        </button>
        <button
          type="button"
          aria-label="Next menu item"
          onClick={() => scrollMenu(1)}
          className="absolute top-1/2 right-8 z-20 grid h-14 w-14 -translate-y-1/2 place-items-center rounded-full bg-white text-savana-500 shadow-lg transition-colors hover:text-savana-800"
        >
          <IoChevronForward size={28} />
        </button>

        <div
          ref={trackRef}
          className="-mx-6 flex snap-x snap-mandatory [scrollbar-width:none] gap-6 overflow-x-auto scroll-smooth px-6 lg:-mx-10 lg:px-10 [&::-webkit-scrollbar]:hidden"
        >
          {menuItems.map((item) => (
            <article
              key={item.title}
              data-menu-card
              className="w-[300px] flex-none snap-center overflow-hidden rounded-2xl bg-white text-left shadow-xl shadow-black/10"
            >
              <div className="relative h-[250px]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="300px"
                  className="object-cover"
                />
              </div>
              <div className="px-5 py-5">
                <h3 className="text-2xl font-semibold text-neutral-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed font-medium text-neutral-400">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {menuItems.map((item, index) => (
            <span
              key={item.title}
              className={`h-1 w-12 rounded-full transition-colors ${
                index === activeIndex ? "bg-savana-800" : "bg-savana-200"
              }`}
            />
          ))}
        </div>
      </div>

      <a
        href={bookHref}
        target="_blank"
        rel="noopener noreferrer"
        className="mx-auto mt-8 flex min-h-14 w-full max-w-[300px] items-center justify-center rounded-lg bg-savana-800 px-6 text-base font-semibold text-white transition-colors hover:bg-savana-700"
      >
        Book Restaurant Now
      </a>
    </section>
  );
}
