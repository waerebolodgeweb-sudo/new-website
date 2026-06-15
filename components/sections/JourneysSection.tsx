"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { IconType } from "react-icons";
import {
  IoFlag,
  IoPartlySunny,
  IoPeopleOutline,
  IoBedOutline,
  IoArrowForwardOutline,
  IoLogoWhatsapp,
} from "react-icons/io5";
import { restaurantShowcase } from "@/app/restaurant/data";
import { transportShowcase } from "@/app/transport/data";

const tabs = ["Trip", "Lodge", "Restaurant", "Transport"] as const;
type Tab = (typeof tabs)[number];

/* Per-tab eyebrow + heading */
const headings: Record<Tab, { eyebrow: string; head: string; emph: string }> = {
  Trip: {
    eyebrow: "The Adventure",
    head: "Curated Highland ",
    emph: "Journeys",
  },
  Lodge: { eyebrow: "The Stay", head: "Rooms at the ", emph: "Lodge" },
  Restaurant: { eyebrow: "The Table", head: "A Taste of ", emph: "Flores" },
  Transport: { eyebrow: "On the Road", head: "Getting You ", emph: "There" },
};

interface CardMeta {
  icon: IconType;
  text: string;
}

interface JourneyCard {
  id: string;
  title: string;
  image: string;
  meta: [CardMeta, CardMeta];
  description: string;
}

const trips: JourneyCard[] = [
  {
    id: "1-day",
    title: "1 Day Trekking",
    image: "/home/1-day-trekking.jpg",
    meta: [
      { icon: IoPartlySunny, text: "1 Day" },
      { icon: IoFlag, text: "Trek start at Dintor" },
    ],
    description:
      "A full-day adventure starting from Dintor. Trek through a lush forest to reach the traditional Waerebo village, experience a local welcome ceremony, enjoy authentic coffee, and return to the lodge by afternoon.",
  },
  {
    id: "2d1n",
    title: "2D/1N Trekking",
    image: "/home/2d-1n-trekking.jpg",
    meta: [
      { icon: IoPartlySunny, text: "2 Days 1 Night" },
      { icon: IoFlag, text: "Trek start at Dintor" },
    ],
    description:
      "Trek to the sky village and spend the night in a traditional communal cone-shaped house. Interact with locals, learn about daily activities like weaving and coffee pounding, and enjoy stargazing after dinner.",
  },
  {
    id: "3d2n",
    title: "3D/2N Trekking",
    image: "/home/3d-2n-trekking.jpg",
    meta: [
      { icon: IoPartlySunny, text: "3 Days 2 Nights" },
      { icon: IoFlag, text: "Trek start at Labuan Bajo" },
    ],
    description:
      "A complete journey starting with a pickup in Labuan Bajo. Visit the beautiful Pleas Waterfall and Lembor rice fields, rest at Waerebo Lodge for a night, and embark on your overnight village trek the next day.",
  },
];

const lodges: JourneyCard[] = [
  {
    id: "twin-ac",
    title: "Twin Room (AC)",
    image: "/lodge/hero-1.jpg",
    meta: [
      { icon: IoPeopleOutline, text: "2 Person" },
      { icon: IoBedOutline, text: "AC · Hot Shower" },
    ],
    description:
      "Rest comfortably before your trek in a room with two single beds, air conditioning, and a hot shower — with serene views of the rice fields and mountains just outside your window.",
  },
  {
    id: "double-ac",
    title: "Double Room (AC)",
    image: "/lodge/hero-2.jpg",
    meta: [
      { icon: IoPeopleOutline, text: "2 Person" },
      { icon: IoBedOutline, text: "AC · Hot Shower" },
    ],
    description:
      "A spacious double room with a plush bed, air conditioning, and a private hot shower. The most relaxing way to unwind after the descent, with sweeping views of the highlands.",
  },
  {
    id: "family-ac",
    title: "Family Room (AC)",
    image: "/lodge/hero-3.jpg",
    meta: [
      { icon: IoPeopleOutline, text: "4 Person" },
      { icon: IoBedOutline, text: "AC · Hot Shower" },
    ],
    description:
      "Our largest room comfortably sleeps a family of four with a double bed and two singles, air conditioning, and a generous hot-water bathroom. Plenty of space to gather and relax.",
  },
];

function Card({
  card,
  href,
  label,
}: {
  card: JourneyCard;
  href: string;
  label: string;
}) {
  const Icon0 = card.meta[0].icon;
  const Icon1 = card.meta[1].icon;
  return (
    <div
      data-reveal
      className="overflow-hidden rounded-[2.25rem] bg-white p-2 shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="relative h-72 rounded-[28px] lg:h-[320px]">
        <Image
          src={card.image}
          alt={card.title}
          fill
          className="rounded-[28px] object-cover"
        />
        <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-slate-950/60 px-3 py-2 text-sm text-white">
          <span className="h-2.5 w-2.5 rounded-full bg-white" />
          <span className="font-normal">Available</span>
        </div>
      </div>
      <div className="p-5">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-neutral-900">
            {card.title}
          </h3>
          <div className="flex flex-wrap items-center gap-4 text-sm font-semibold text-neutral-500">
            <div className="flex items-center gap-2 text-sm text-neutral-400">
              <Icon0 className="h-5 w-5 text-neutral-300" />
              <span>{card.meta[0].text}</span>
            </div>
            <div className="flex h-2 w-2 items-center gap-2 rounded-full bg-neutral-200 text-sm" />
            <div className="flex items-center gap-2 text-sm text-neutral-400">
              <Icon1 className="h-5 w-5 text-neutral-300" />
              <span>{card.meta[1].text}</span>
            </div>
          </div>
          <p className="line-clamp-3 text-sm leading-6 font-normal text-neutral-500">
            {card.description}
          </p>
        </div>

        <Link
          href={href}
          className="mt-4 block w-full rounded-[12px] bg-savana-800 px-4 py-3 text-center text-base font-medium text-white transition-colors hover:bg-savana-700"
        >
          {label}
        </Link>
      </div>
    </div>
  );
}

type Showcase = typeof restaurantShowcase;

function ServicePreview({ data }: { data: Showcase }) {
  return (
    <div className="grid items-stretch gap-6 lg:grid-cols-2">
      {/* Hero image */}
      <div className="relative min-h-[300px] overflow-hidden rounded-[2rem] shadow-sm">
        <Image
          src={data.heroImage}
          alt={`${data.titleHead}${data.titleTail}`}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <h3 className="absolute right-6 bottom-6 left-6 text-2xl font-semibold text-white lg:text-3xl">
          {data.titleHead}
          <span className="text-pale-green-100">{data.titleTail}</span>
        </h3>
      </div>

      {/* Details */}
      <div className="flex flex-col">
        <p className="text-sm leading-relaxed text-neutral-500 lg:text-base">
          {data.subtitle}
        </p>

        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2">
          {data.thumbnails.map((thumb) => (
            <div
              key={thumb.src}
              className="relative h-24 overflow-hidden rounded-2xl shadow-sm lg:h-28"
            >
              <Image
                src={thumb.src}
                alt={thumb.alt}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={data.bookHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-[12px] bg-savana-800 px-5 py-3 text-base font-medium text-white transition-colors hover:bg-savana-700"
          >
            <IoLogoWhatsapp className="h-5 w-5" />
            {data.buttonLabel}
          </a>
          <Link
            href={data.href}
            className="inline-flex items-center gap-1.5 rounded-[12px] border border-pale-green-100 px-5 py-3 text-base font-medium text-neutral-900 transition-colors hover:bg-light-green-100"
          >
            View {data.titleTail}
            <IoArrowForwardOutline className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function JourneysSection() {
  const [activeTab, setActiveTab] = useState<Tab>("Trip");
  const h = headings[activeTab];

  return (
    <section
      id="journeys"
      className="bg-neutral-050 pt-0 pb-24 lg:pt-0 lg:pb-28"
    >
      <div className="relative mx-auto max-w-[1512px] px-6 lg:px-10">
        <div className="relative z-10 -mt-16 lg:-mt-24">
          <div className="overflow-hidden rounded-[2rem] border border-pale-green-100/50 bg-white p-6 shadow-[0_25px_80px_rgba(15,23,42,0.12)] lg:p-8">
            <p className="mb-2 text-base font-normal text-savana-600">
              {h.eyebrow}
            </p>
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <h2 className="text-3xl leading-tight text-neutral-900 lg:text-5xl">
                {h.head}
                <span className="font-semibold">{h.emph}</span>
              </h2>

              <div className="flex gap-0 overflow-x-auto overflow-y-hidden border-b border-neutral-100">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`-mb-px border-b-2 px-5 pb-3 text-sm md:text-lg font-semibold whitespace-nowrap transition-colors ${
                      activeTab === tab
                        ? "border-savana-600 border-b-4 text-neutral-900"
                        : "border-transparent text-neutral-300 hover:text-neutral-900"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-[1512px] px-6 lg:px-10">
        {activeTab === "Trip" && (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {trips.map((card) => (
              <Card
                key={card.id}
                card={card}
                href="/trips"
                label="See Trip Details"
              />
            ))}
          </div>
        )}

        {activeTab === "Lodge" && (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {lodges.map((card) => (
              <Card
                key={card.id}
                card={card}
                href="/lodge"
                label="See Lodge Details"
              />
            ))}
          </div>
        )}

        {activeTab === "Restaurant" && (
          <ServicePreview data={restaurantShowcase} />
        )}

        {activeTab === "Transport" && (
          <ServicePreview data={transportShowcase} />
        )}
      </div>
    </section>
  );
}
