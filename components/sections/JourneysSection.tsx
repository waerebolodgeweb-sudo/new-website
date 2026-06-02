"use client";

import Image from "next/image";
import { useState } from "react";
import { IoFlag, IoPartlySunny } from "react-icons/io5";

const tabs = ["Trip", "Lodge", "Restaurant", "Transport"];

const trips = [
  {
    id: 1,
    badge: "Featured",
    title: "1 Day Trekking",
    description:
      "A full-day adventure starting from Dintor. Trek through a lush forest to reach the traditional Waerebo village, experience a local welcome ceremony, enjoy authentic coffee, and return to the lodge by afternoon.",
    price: "IDR 350.000",
    image: "/home/1-day-trekking.jpg",
  },
  {
    id: 2,
    badge: "Popular",
    title: "2D/1N Trekking",
    description:
      "Trek to the sky village and spend the night in a traditional communal cone-shaped house. Interact with locals, learn about daily activities like weaving and coffee pounding, and enjoy stargazing after dinner.",
    price: "IDR 650.000",
    image: "/home/2d-1n-trekking.png",
  },
  {
    id: 3,
    badge: "Best Value",
    title: "3D/2N Trekking",
    description:
      "A complete journey starting with a pickup in Labuan Bajo. Visit the beautiful Pleas Waterfall and Lembor rice fields, rest at Waerebo Lodge for a night, and embark on your overnight village trek the next day.",
    price: "IDR 950.000",
    image: "/home/3d-2n-trekking.jpg",
  },
];

export default function JourneysSection() {
  const [activeTab, setActiveTab] = useState("Trip");

  return (
    <section id="journeys" className="pt-0 lg:pt-0 pb-24 lg:pb-28 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="relative -mt-16 lg:-mt-24 z-10">
          <div className="overflow-hidden rounded-[2rem] border border-pale-green-100/50 bg-white p-6 shadow-[0_25px_80px_rgba(15,23,42,0.12)] lg:p-8">
          <p className="text-sm font-semibold tracking-[0.2em] md:text-base text-savana text-savana-600 mb-2">
            The Adventure
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="text-3xl lg:text-5xl text-neutral-900 leading-tight">
              Curated Highland <span className="font-semibold">Journeys</span>
            </h2>

            <div className="flex gap-0 border-b border-pale-green-100/50 overflow-x-auto overflow-y-hidden">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 pb-3 text-sm font-semibold whitespace-nowrap transition-colors border-b-2 -mb-px ${
                    activeTab === tab
                      ? "text-green-400 border-green-400"
                      : "text-neutral-300 border-transparent hover:text-neutral-900"
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        {activeTab === "Trip" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trips.map((trip) => (
              <div
                key={trip.id}
                className="bg-white p-2 rounded-[2.25rem] overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative h-72 lg:h-[320px] rounded-[28px]">
                  <Image
                    src={trip.image}
                    alt={trip.title}
                    fill
                    className="object-cover rounded-[28px]"
                  />
                  <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-slate-950/60 px-3 py-2 text-white text-sm">
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
                      <div className="flex items-center gap-2 text-neutral-400 text-sm">
                        <IoPartlySunny className="h-5 w-5 text-neutral-200" />
                        <span>1 Day</span>
                      </div>
                      <div className="flex rounded-full h-2 w-2 items-center gap-2 text-sm bg-neutral-200"/>
                      <div className="flex items-center gap-2 text-neutral-400 text-sm">
                        <IoFlag className="h-5 w-5 text-neutral-200" />
                        <span>Trek start at Dintor</span>
                      </div>
                    </div>
                    <p className="text-sm font-normal line-clamp-3 leading-6 text-neutral-500">
                      {trip.description}
                    </p>
                  </div>

                  <button className="mt-4 w-full rounded-[12px] bg-[#453D18] px-4 py-3 text-base font-medium text-white transition-colors hover:bg-[#5a5b3c]">
                    See Trip Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab !== "Trip" && (
          <div className="flex items-center justify-center h-48 rounded-2xl border-2 border-dashed border-pale-green-100/50 text-neutral-300 text-sm font-medium">
            {activeTab} packages coming soon
          </div>
        )}
      </div>
    </section>
  );
}
