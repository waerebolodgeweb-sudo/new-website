"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoAdd } from "react-icons/io5";
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
  trip: "/home/our-services/trip/f20edc724b0e817b8db3b9dc030546c10d16ecb0.jpg",
  lodge:
    "/home/our-services/lodge/82ebccc56f4d43f058a2d3a1e812faef1bacd25e%20(1).jpg",
  restaurant:
    "/home/our-services/restaurant/3ec678255ed0c4e1b6975503f4a3a9496c310682.png",
  transport:
    "/home/our-services/transportation/922525baf8d0eee8d731639d9d31f1a71f298a3e.jpg",
};

const serviceHeroImages: Record<ServiceId, string> = {
  trip: "/home/our-services/trip/838a3e2b7aaed1c1c6b0629e63061b3711a8c3c8.jpg",
  lodge:
    "/home/our-services/lodge/1bb4723a9717c1c2d356c0670d5591e2abea24a2.png",
  restaurant:
    "/home/our-services/restaurant/61d8917f0d4f838c4dd8f68f982522f7df148c67.jpg",
  transport:
    "/home/our-services/transportation/64fe1a88bbc83d82b7725004b853abfd873b9b07.jpg",
};

export default function ServicesSection() {
  const [open, setOpen] = useState<ServiceId>("trip");
  const { t } = useLang();

  return (
    <section id="services" className="bg-savana-50 py-16 lg:py-24">
      <div className="mx-auto max-w-[1512px] px-6 lg:px-10">
        <div className="rounded-[28px] bg-[#f8f6ef] px-6 py-10 lg:rounded-[32px] lg:px-10 lg:py-20">
          <div className="mb-10 grid gap-6 lg:mb-14 lg:grid-cols-[1fr_1fr] lg:items-end">
            <div>
              <p className="mb-2 text-base font-normal text-savana-600">
                {t("services.eyebrow")}
              </p>
              <h2 className="text-4xl leading-tight font-normal text-savana-800 lg:text-5xl">
                <span className="font-bold">{t("services.headingStrong")}</span>{" "}
                {t("services.headingRest")}
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-relaxed font-normal text-neutral-900 lg:justify-self-end lg:text-center lg:text-lg">
              {t("services.body")}
            </p>
          </div>

          <div className="grid items-center gap-10 lg:grid-cols-[0.93fr_1fr] lg:gap-10">
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
                      onClick={() => setOpen(id)}
                      className="flex w-full items-center justify-between gap-5 py-5 text-left"
                    >
                      <span
                        className={`text-xl font-bold transition-colors lg:text-2xl ${
                          isOpen ? "text-savana-800" : "text-pale-savana-200"
                        }`}
                      >
                        {t(`services.${id}.label`)}
                      </span>
                      {!isOpen && (
                        <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-savana-200 text-savana-800 transition-colors lg:h-12 lg:w-12">
                          <IoAdd size={24} />
                        </span>
                      )}
                    </button>

                    {isOpen && (
                      <div className="mb-5 grid gap-5 rounded-3xl bg-white p-3 shadow-[0_16px_36px_rgba(38,35,22,0.12)] sm:grid-cols-[1fr_180px] sm:items-stretch lg:mb-6">
                        <div className="flex min-h-[152px] flex-col justify-between gap-6 px-2 py-2 sm:px-3">
                          <p className="text-base leading-relaxed font-normal text-neutral-500 lg:text-lg">
                            {t(`services.${id}.content`)}
                          </p>
                          <Link
                            href={serviceHrefs[id]}
                            className="inline-flex min-h-11 w-fit min-w-[150px] items-center justify-center rounded-lg bg-savana-800 px-6 text-base font-medium text-white transition-colors hover:bg-savana-700"
                          >
                            {t("services.learnMore")}
                          </Link>
                        </div>
                        <div className="relative h-44 overflow-hidden rounded-2xl sm:h-auto">
                          <Image
                            src={serviceThumbs[id]}
                            alt={t(`services.${id}.label`)}
                            fill
                            sizes="(min-width: 1024px) 180px, 100vw"
                            className="object-cover"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="relative h-80 w-full overflow-hidden rounded-3xl shadow-[0_18px_38px_rgba(38,35,22,0.16)] lg:h-[486px]">
              <Image
                key={open}
                src={serviceHeroImages[open]}
                alt={t(`services.${open}.label`)}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
