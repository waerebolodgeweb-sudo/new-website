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
  trip: "/homepage/Homepage-Dropdown-Our-Services-Detail-Waerebo-Small-01-Trip.webp",
  lodge:
    "/homepage/Homepage-Dropdown-Our-Services-Detail-Waerebo-Small-02-Lodge.webp",
  restaurant:
    "/homepage/Homepage-Dropdown-Our-Services-Detail-Waerebo-Small-03-Restaurant.webp",
  transport:
    "/homepage/Homepage-Dropdown-Our-Services-Detail-Waerebo-Small-04-Transport.webp",
};

const serviceHeroImages: Record<
  ServiceId,
  { desktop: string; mobile: string }
> = {
  trip: {
    desktop:
      "/homepage/Homepage-Dropdown-Our-Services-Detail-Waerebo-Large-01-Trip.webp",
    mobile:
      "/homepage/Homepage-Dropdown-Our-Services-Detail-Waerebo-Large-01-Trip-Mobile.webp",
  },
  lodge: {
    desktop:
      "/homepage/Homepage-Dropdown-Our-Services-Detail-Waerebo-Large-02-Lodge.webp",
    mobile:
      "/homepage/Homepage-Dropdown-Our-Services-Detail-Waerebo-Large-02-Lodge-Mobile.webp",
  },
  restaurant: {
    desktop:
      "/homepage/Homepage-Dropdown-Our-Services-Detail-Waerebo-Large-03-Restaurant.webp",
    mobile:
      "/homepage/Homepage-Dropdown-Our-Services-Detail-Waerebo-Large-03-Restaurant-Mobile.webp",
  },
  transport: {
    desktop:
      "/homepage/Homepage-Dropdown-Our-Services-Detail-Waerebo-Large-04-Transport.webp",
    mobile:
      "/homepage/Homepage-Dropdown-Our-Services-Detail-Waerebo-Large-04-Transport-Transport.webp",
  },
};

export default function ServicesSection() {
  const [open, setOpen] = useState<ServiceId>("trip");
  const { t } = useLang();

  return (
    <section id="services" className="bg-savana-50 py-16 lg:py-24">
      <div className="mx-auto max-w-[1512px] px-6 lg:px-20">
        <div className="rounded-[28px] bg-[#f8f6ef] px-6 py-10 lg:rounded-[32px] lg:px-20 lg:py-20">
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
            <div className="flex min-h-[610px] flex-col sm:min-h-[430px] lg:min-h-[496px]">
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
                      <div className="mb-5 grid min-h-[330px] gap-5 rounded-3xl bg-white p-3 shadow-[0_16px_36px_rgba(38,35,22,0.12)] sm:min-h-[204px] sm:grid-cols-[1fr_180px] sm:items-stretch lg:mb-6">
                        <div className="flex min-h-[152px] flex-col justify-between gap-6 px-2 py-2 sm:px-3">
                          <p className="line-clamp-3 text-base leading-relaxed font-normal text-neutral-500 lg:text-lg">
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
                key={`${open}-desktop`}
                src={serviceHeroImages[open].desktop}
                alt={t(`services.${open}.label`)}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="hidden object-cover sm:block"
              />
              <Image
                key={`${open}-mobile`}
                src={serviceHeroImages[open].mobile}
                alt={t(`services.${open}.label`)}
                fill
                sizes="100vw"
                className="object-cover sm:hidden"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
