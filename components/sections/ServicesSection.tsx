"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoAdd, IoRemove } from "react-icons/io5";
import { useLang } from "@/lib/i18n";

type ServiceId = "trip" | "lodge" | "restaurant" | "transport";

const serviceIds: ServiceId[] = ["trip", "lodge", "restaurant", "transport"];

const serviceHrefs: Record<ServiceId, string> = {
  trip: "/trips",
  lodge: "/lodge",
  restaurant: "/restaurant",
  transport: "/transport",
};

const serviceThumbs: Record<ServiceId, string> = {
  trip: "/trip/stop-1.jpg",
  lodge: "/lodge/hero-1.jpg",
  restaurant: "/restaurant/dining-hall.jpg",
  transport: "/home/contact-us.jpg",
};

export default function ServicesSection() {
  const [open, setOpen] = useState<ServiceId | "">( "lodge");
  const { t } = useLang();

  return (
    <section id="services" className="bg-neutral-050 py-20 lg:py-28">
      <div className="mx-auto max-w-[1512px] px-6 lg:px-10">
        {/* Heading row */}
        <div className="mb-12 flex flex-col gap-6 lg:mb-16 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <div className="lg:flex-1">
            <p className="mb-2 text-base font-normal text-savana-600">
              {t("services.eyebrow")}
            </p>
            <h2 className="text-3xl leading-none font-semibold text-savana-800 lg:text-4xl">
              {t("services.heading")}
            </h2>
          </div>
          <p className="max-w-xl text-base leading-relaxed font-normal text-pale-savana-600 lg:flex-1">
            {t("services.body")}
          </p>
        </div>

        {/* Content row: accordion + image */}
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Accordion */}
          <div className="flex flex-col">
            {serviceIds.map((id, i) => {
              const isOpen = open === id;
              return (
                <div
                  key={id}
                  data-reveal
                  className={i > 0 ? "border-t border-neutral-100" : ""}
                >
                  <button
                    onClick={() => setOpen(isOpen ? "" : id)}
                    className="flex w-full items-center justify-between gap-5 py-5 text-left"
                  >
                    <span className="text-xl font-semibold text-pale-savana-600">
                      {t(`services.${id}.label`)}
                    </span>
                    <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-grey-100/30 transition-colors">
                      {isOpen ? (
                        <IoRemove size={22} className="text-savana-800" />
                      ) : (
                        <IoAdd size={22} className="text-savana-800" />
                      )}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="flex flex-col-reverse gap-4 pb-8 lg:flex-row lg:items-start lg:gap-6">
                      <div className="flex flex-1 flex-col gap-6">
                        <p className="text-base leading-relaxed font-normal text-grey-400">
                          {t(`services.${id}.content`)}
                        </p>
                        <Link
                          href={serviceHrefs[id]}
                          className="inline-flex w-fit items-center justify-center rounded-xl bg-savana-800 px-5 py-3 text-base font-medium text-white transition-colors hover:bg-savana-700"
                        >
                          {t("services.learnMore")}
                        </Link>
                      </div>
                      <div className="relative h-48 w-full flex-shrink-0 overflow-hidden rounded-[20px] lg:h-40 lg:w-40">
                        <Image
                          src={serviceThumbs[id]}
                          alt={t(`services.${id}.label`)}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Large image — desktop only (mobile shows it inside the open item) */}
          <div className="relative hidden h-80 w-full overflow-hidden rounded-3xl shadow-sm lg:block lg:h-[504px]">
            <Image
              src="/home/our-services.jpg"
              alt="Waerebo Lodge"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
