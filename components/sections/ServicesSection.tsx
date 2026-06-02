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
  const [open, setOpen] = useState<string>("lodge");

  return (
    <section id="services" className="py-32 lg:py-40 bg-slate-50">
      <div className="max-w-7xl mx-auto px-10 sm:px-12 lg:px-8">
        {/* Top: Heading */}
       

        {/* Main: Accordion + Image */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-start">
          {/* Left: Accordion */}
          <div className="w-full lg:w-5/12 space-y-3">
           <div className="mb-16 max-w-2xl">
          <p className="text-base font-normal text-savana-600 mb-3 tracking-wide">
            Our Services
          </p>
          <h2 className="text-4xl text-neutral-800 mb-6 leading-tight">
            <span className="font-semibold">Everything</span> You Need.
          </h2>
        </div>
            {services.map((s) => (
              <div
                key={s.id}
                className="border border-slate-200 rounded-2xl overflow-hidden bg-white"
              >
                <button
                  className="w-full flex items-center justify-between px-6 py-5 text-left group"
                  onClick={() => setOpen(open === s.id ? "" : s.id)}
                >
                  <span
                    className={`text-lg font-semibold transition-colors ${
                      open === s.id
                        ? "text-neutral-900"
                        : "text-neutral-900 group-hover:text-neutral-700"
                    }`}
                  >
                    {s.label}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0">
                    <IoChevronDownOutline
                      size={16}
                      className={`text-neutral-600 transition-transform ${
                        open === s.id ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </button>
                {open === s.id && (
                  <div className="px-6 pb-5 border-t border-slate-200 pt-4">
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
                    <p className="text-base font-normal text-neutral-700 leading-relaxed mb-4">
                      {s.content}
                    </p>
                    <Link
                      href={s.href}
                      className="inline-flex items-center gap-1.5 text-base font-medium text-neutral-900 hover:text-neutral-700"
                    >
                      Learn More
                      <IoArrowForwardOutline size={16} />
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right: Description + Large Image */}
          <div className="w-full lg:w-7/12 flex flex-col">
            <p className="text-base font-normal text-neutral-800 text-justify leading-relaxed mb-8 ">
              We handle the logistics so you can focus on the experience. Explore our services to make your journey to the Waerebo village adventurous, safe, and unforgettable.
            </p>
            <div className="relative h-80 lg:h-96 rounded-3xl overflow-hidden shadow-md flex-grow">
              <Image
                src="/home/our-services.jpg"
                alt="Waerebo Lodge"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
