"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoChevronDownOutline, IoArrowForwardOutline } from "react-icons/io5";

const services = [
  {
    id: "trip",
    label: "Waerebo Trip",
    href: "/trips",
    content:
      "Guided trekking packages to Wae Rebo village, ranging from day trips to multi-day immersive experiences with local guides and porters.",
  },
  {
    id: "lodge",
    label: "Lodge",
    href: "/lodge",
    content:
      "Comfortable accommodation in our highland lodge, featuring both AC and fan rooms with stunning mountain views and traditional Flores-inspired design.",
  },
  {
    id: "restaurant",
    label: "Restaurant",
    href: "/restaurant",
    content:
      "Fresh, locally sourced meals in our open-air restaurant. Traditional Manggarai cuisine and international dishes prepared by local chefs.",
  },
  {
    id: "transport",
    label: "Transport",
    href: "/transport",
    content:
      "Reliable door-to-door transportation from Ruteng or Labuan Bajo to Waerebo Lodge and back, with private and shared options available.",
  },
];

export default function ServicesSection() {
  const [open, setOpen] = useState<string>("trip");

  return (
    <section id="services" className="py-16 lg:py-24 bg-lodge-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left */}
          <div className="lg:w-5/12">
            <p className="text-[11px] font-semibold tracking-[0.2em] text-lodge-mid uppercase mb-4">
              Services
            </p>
            <h2 className="text-3xl lg:text-5xl font-bold text-lodge-dark mb-4 leading-tight">
              Everything You Need.
            </h2>
            <p className="text-lodge-neutral leading-relaxed mb-6 max-w-sm text-sm font-normal">
              We handle all the details so you can focus on the journey. From
              transport to meals, accommodation to guided treks — everything is
              under one roof.
            </p>
            <Link
              href="/trips"
              className="inline-flex px-6 py-3 border-2 border-lodge-green text-lodge-green text-sm font-semibold rounded-full hover:bg-lodge-green hover:text-white transition-colors mb-8"
            >
              Learn More
            </Link>
            <div className="relative h-52 lg:h-64 rounded-2xl overflow-hidden">
              <Image
                src="/home/our-services.jpg"
                alt="Lodge services"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right: Accordion */}
          <div className="lg:w-7/12 space-y-2 self-center">
            {services.map((s) => (
              <div
                key={s.id}
                className="border border-lodge-pale/50 rounded-2xl overflow-hidden bg-white"
              >
                <button
                  className="w-full flex items-center justify-between px-6 py-5 text-left group"
                  onClick={() => setOpen(open === s.id ? "" : s.id)}
                >
                  <span
                    className={`font-semibold text-sm transition-colors ${
                      open === s.id
                        ? "text-lodge-green"
                        : "text-lodge-dark group-hover:text-lodge-green"
                    }`}
                  >
                    {s.label}
                  </span>
                  <IoChevronDownOutline
                    size={18}
                    className={`text-lodge-mid transition-transform flex-shrink-0 ${
                      open === s.id ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {open === s.id && (
                  <div className="px-6 pb-5 border-t border-lodge-pale/30 pt-4">
                    {s.id === "lodge" && (
                      <div className="relative h-40 rounded-xl overflow-hidden mb-4">
                        <Image
                          src="/home/our-services-lodge.png"
                          alt="Waerebo Lodge room"
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <p className="text-sm text-lodge-neutral leading-relaxed font-normal mb-4">
                      {s.content}
                    </p>
                    <Link
                      href={s.href}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-lodge-green hover:underline"
                    >
                      View {s.label}
                      <IoArrowForwardOutline size={15} />
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
