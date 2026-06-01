"use client";

import Image from "next/image";
import { useState } from "react";

const tabs = ["Trip", "Lodge", "Restaurant", "Transport"];

const trips = [
  {
    id: 1,
    badge: "Featured",
    title: "1 Day Trekking",
    description:
      "A short but fulfilling trek to Wae Rebo, witnessing the iconic cone-shaped houses of the Manggarai people.",
    price: "IDR 350.000",
    image: "/home/1-day-trekking.jpg",
  },
  {
    id: 2,
    badge: "Popular",
    title: "2D/1N Trekking",
    description:
      "Spend a night in the village, experience the sunrise over the misty mountains and connect with local traditions.",
    price: "IDR 650.000",
    image: "/home/2d-1n-trekking.png",
  },
  {
    id: 3,
    badge: "Best Value",
    title: "3D/2N Trekking",
    description:
      "The ultimate immersive experience — hike in, sleep under the stars, and discover the heart of Wae Rebo at your own pace.",
    price: "IDR 950.000",
    image: "/home/3d-2n-trekking.jpg",
  },
];

export default function JourneysSection() {
  const [activeTab, setActiveTab] = useState("Trip");

  return (
    <section id="journeys" className="py-16 lg:py-24 bg-lodge-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-[11px] font-semibold tracking-[0.2em] text-lodge-mid uppercase mb-2">
          Curated Journeys
        </p>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
          <h2 className="text-3xl lg:text-5xl font-bold text-lodge-dark leading-tight">
            Curated Highland<br className="hidden lg:block" /> Journeys
          </h2>

          <div className="flex gap-0 border-b border-lodge-pale/50 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 pb-3 text-sm font-semibold whitespace-nowrap transition-colors border-b-2 -mb-px ${
                  activeTab === tab
                    ? "text-lodge-green border-lodge-green"
                    : "text-lodge-neutral border-transparent hover:text-lodge-dark"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {activeTab === "Trip" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trips.map((trip) => (
              <div
                key={trip.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative h-48 lg:h-52">
                  <Image
                    src={trip.image}
                    alt={trip.title}
                    fill
                    className="object-cover"
                  />
                  <span className="absolute top-3 left-3 bg-white/90 text-lodge-green text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">
                    {trip.badge}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-lodge-dark mb-2">
                    {trip.title}
                  </h3>
                  <p className="text-sm text-lodge-neutral leading-relaxed mb-5 font-normal">
                    {trip.description}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-lodge-pale/30">
                    <div>
                      <p className="text-[10px] text-lodge-neutral uppercase tracking-wide font-medium">
                        From
                      </p>
                      <p className="text-lodge-green font-bold text-sm">
                        {trip.price}
                      </p>
                    </div>
                    <button className="px-4 py-2 bg-lodge-dark text-white text-xs font-semibold rounded-full hover:bg-lodge-green transition-colors">
                      See Trip Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab !== "Trip" && (
          <div className="flex items-center justify-center h-48 rounded-2xl border-2 border-dashed border-lodge-pale/50 text-lodge-neutral text-sm font-medium">
            {activeTab} packages coming soon
          </div>
        )}
      </div>
    </section>
  );
}
