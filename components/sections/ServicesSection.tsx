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
    <section id="services" className="bg-slate-50 py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-10 sm:px-12 lg:px-8">
        {/* Top: Heading */}

        {/* Main: Accordion + Image */}
        <div className="flex flex-col items-start gap-16 lg:flex-row lg:gap-20">
          {/* Left: Accordion */}
          <div className="w-full space-y-3 lg:w-5/12">
            <div className="mb-16 max-w-2xl">
              <p className="mb-3 text-base font-normal tracking-wide text-savana-600">
                Our Services
              </p>
              <h2 className="mb-6 text-4xl leading-tight text-neutral-800">
                <span className="font-semibold">Everything</span> You Need.
              </h2>
            </div>
            {services.map((s) => (
              <div
                key={s.id}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
              >
                <button
                  className="group flex w-full items-center justify-between px-6 py-5 text-left"
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
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-slate-200">
                    <IoChevronDownOutline
                      size={16}
                      className={`text-neutral-600 transition-transform ${
                        open === s.id ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </button>
                {open === s.id && (
                  <div className="border-t border-slate-200 px-6 pt-4 pb-5">
                    {s.id === "lodge" && (
                      <div className="relative mb-4 h-40 overflow-hidden rounded-xl">
                        <Image
                          src="/home/our-services-lodge.png"
                          alt="Waerebo Lodge room"
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <p className="mb-4 text-base leading-relaxed font-normal text-neutral-700">
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
          <div className="flex w-full flex-col lg:w-7/12">
            <p className="mb-8 text-justify text-base leading-relaxed font-normal text-neutral-800">
              We handle the logistics so you can focus on the experience.
              Explore our services to make your journey to the Waerebo village
              adventurous, safe, and unforgettable.
            </p>
            <div className="relative h-80 flex-grow overflow-hidden rounded-3xl shadow-md lg:h-96">
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
