"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoFlag, IoPartlySunny } from "react-icons/io5";

const tabs = ["Trip", "Lodge", "Restaurant", "Transport"];

const trips = [
  {
    id: 1,
    title: "1 Day Trekking",
    duration: "1 Day",
    trekStart: "Trek start at Dintor",
    description:
      "A full-day adventure starting from Dintor. Trek through a lush forest to reach the traditional Waerebo village, experience a local welcome ceremony, enjoy authentic coffee, and return to the lodge by afternoon.",
    image: "/home/1-day-trekking.jpg",
  },
  {
    id: 2,
    title: "2D/1N Trekking",
    duration: "2 Days 1 Night",
    trekStart: "Trek start at Dintor",
    description:
      "Trek to the sky village and spend the night in a traditional communal cone-shaped house. Interact with locals, learn about daily activities like weaving and coffee pounding, and enjoy stargazing after dinner.",
    image: "/home/2d-1n-trekking.jpg",
  },
  {
    id: 3,
    title: "3D/2N Trekking",
    duration: "3 Days 2 Nights",
    trekStart: "Trek Start at Labuan Bajo",
    description:
      "A complete journey starting with a pickup in Labuan Bajo. Visit the beautiful Pleas Waterfall and Lembor rice fields, rest at Waerebo Lodge for a night, and embark on your overnight village trek the next day.",
    image: "/home/3d-2n-trekking.jpg",
  },
];

export default function JourneysSection() {
  const [activeTab, setActiveTab] = useState("Trip");

  return (
    <section
      id="journeys"
      className="bg-neutral-050 pt-0 pb-24 lg:pt-0 lg:pb-28"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 -mt-16 lg:-mt-24">
          <div className="overflow-hidden rounded-[2rem] border border-pale-green-100/50 bg-white p-6 shadow-[0_25px_80px_rgba(15,23,42,0.12)] lg:p-8">
            <p className="mb-2 text-sm font-semibold tracking-[0.2em] text-savana-600 uppercase md:text-base">
              The Adventure
            </p>
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <h2 className="text-3xl leading-tight text-neutral-900 lg:text-5xl">
                Curated Highland <span className="font-semibold">Journeys</span>
              </h2>

              <div className="flex gap-0 overflow-x-auto overflow-y-hidden border-b border-neutral-100">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`-mb-px border-b-2 px-5 pb-3 text-sm font-semibold whitespace-nowrap transition-colors ${
                      activeTab === tab
                        ? "border-savana-600 text-neutral-900"
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

      <div className="mx-auto mt-10 max-w-7xl px-4 sm:px-6 lg:px-8">
        {activeTab === "Trip" && (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {trips.map((trip) => (
              <div
                key={trip.id}
                className="overflow-hidden rounded-[2.25rem] bg-white p-2 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="relative h-72 rounded-[28px] lg:h-[320px]">
                  <Image
                    src={trip.image}
                    alt={trip.title}
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
                      {trip.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm font-semibold text-neutral-500">
                      <div className="flex items-center gap-2 text-sm text-neutral-400">
                        <IoPartlySunny className="h-5 w-5 text-neutral-200" />
                        <span>{trip.duration}</span>
                      </div>
                      <div className="flex h-2 w-2 items-center gap-2 rounded-full bg-neutral-200 text-sm" />
                      <div className="flex items-center gap-2 text-sm text-neutral-400">
                        <IoFlag className="h-5 w-5 text-neutral-200" />
                        <span>{trip.trekStart}</span>
                      </div>
                    </div>
                    <p className="line-clamp-3 text-sm leading-6 font-normal text-neutral-500">
                      {trip.description}
                    </p>
                  </div>

                  <Link
                    href="/trips"
                    className="mt-4 block w-full rounded-[12px] bg-[#453D18] px-4 py-3 text-center text-base font-medium text-white transition-colors hover:bg-[#5a5b3c]"
                  >
                    See Trip Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab !== "Trip" && (
          <div className="flex h-48 items-center justify-center rounded-2xl border-2 border-dashed border-pale-green-100/50 text-sm font-medium text-neutral-300">
            {activeTab} packages coming soon
          </div>
        )}
      </div>
    </section>
  );
}
