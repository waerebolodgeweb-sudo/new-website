"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";
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

function ServicePanel({
  isOpen,
  children,
}: {
  isOpen: boolean;
  children: ReactNode;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>();
  const [previousOpen, setPreviousOpen] = useState(isOpen);
  const [settled, setSettled] = useState(true);

  // Clip only while rolling; an open card's shadow can extend past the panel.
  // Reset before painting, including when a transition is interrupted.
  if (previousOpen !== isOpen) {
    setPreviousOpen(isOpen);
    setSettled(false);
  }

  useEffect(() => {
    const content = contentRef.current;
    if (!content) return;
    // Measure the full content, independent of the animated clipping box.
    // Both panels then interpolate actual pixels on the same timeline.
    const observer = new ResizeObserver(() => {
      setHeight(content.getBoundingClientRect().height);
    });
    observer.observe(content);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      inert={!isOpen}
      aria-hidden={!isOpen}
      style={{ height: isOpen ? height : 0 }}
      onTransitionEnd={(event) => {
        if (
          event.target === event.currentTarget &&
          event.propertyName === "height"
        ) {
          setSettled(true);
        }
      }}
      className={`transition-[height] duration-1000 ease-in-out motion-reduce:duration-200 ${isOpen && settled ? "overflow-visible" : "overflow-hidden"}`}
    >
      <div ref={contentRef} className="pb-5 lg:pb-6">
        {children}
      </div>
    </div>
  );
}

export default function ServicesSection() {
  const [open, setOpen] = useState<ServiceId | null>("trip");
  const [heroOpen, setHeroOpen] = useState<ServiceId>("trip");
  const requestedService = useRef<ServiceId>("trip");
  const loadedImages = useRef(new Set<ServiceId>());
  const { t } = useLang();

  function selectService(id: ServiceId) {
    requestedService.current = id;
    setOpen(id);
    if (loadedImages.current.has(id)) setHeroOpen(id);
  }

  return (
    <section
      id="services"
      className="bg-savana-50 py-16 [overflow-anchor:none] lg:py-24"
    >
      <div className="mx-auto w-full max-w-[1512px] px-5 lg:px-20">
        <div className="rounded-[28px] px-0 py-10 lg:rounded-[32px] lg:py-20">
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
            <p className="max-w-2xl text-sm leading-relaxed font-normal text-neutral-900 lg:justify-self-end lg:text-right lg:text-base">
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
                    className={i > 0 ? "border-t border-neutral-100" : ""}
                  >
                    <button
                      type="button"
                      onClick={() => selectService(id)}
                      aria-expanded={isOpen}
                      aria-controls={`service-${id}`}
                      className="flex w-full items-center justify-between gap-5 py-5 text-left"
                    >
                      <span
                        className={`text-xl font-bold transition-colors lg:text-2xl ${
                          isOpen ? "text-savana-800" : "text-pale-savana-200"
                        }`}
                      >
                        {t(`services.${id}.label`)}
                      </span>
                      <span
                        aria-hidden="true"
                        className={`relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-colors duration-300 motion-reduce:transition-none lg:h-12 lg:w-12 ${isOpen ? "text-savana-500" : "text-savana-800"}`}
                      >
                        <span className="absolute h-px w-[18px] bg-current" />
                        <span
                          className={`absolute h-[18px] w-px bg-current transition-transform duration-1000 ease-in-out motion-reduce:duration-200 ${isOpen ? "scale-y-0" : "scale-y-100"}`}
                        />
                      </span>
                    </button>

                    <ServicePanel isOpen={isOpen}>
                      <div
                        id={`service-${id}`}
                        className="flex min-h-[330px] flex-col-reverse rounded-3xl bg-white p-3 shadow-[0_16px_36px_rgba(38,35,22,0.12)] sm:min-h-[204px] sm:flex-row sm:items-stretch"
                      >
                        <div className="flex min-h-[152px] flex-col justify-between gap-6 px-2 py-2 sm:px-3">
                          <p className="line-clamp-3 text-sm leading-relaxed font-normal text-neutral-500 lg:text-base">
                            {t(`services.${id}.content`)}
                          </p>
                          <Link
                            href={serviceHrefs[id]}
                            className="button-primary inline-flex min-h-11 w-full min-w-[150px] items-center justify-center rounded-lg px-6 text-base font-medium transition-colors md:w-fit"
                          >
                            {t("services.learnMore")}{" "}
                            {t(`services.${id}.label`)}
                          </Link>
                        </div>
                        <div className="relative h-44 min-w-[180px] overflow-hidden rounded-2xl sm:h-auto">
                          <Image
                            src={serviceThumbs[id]}
                            alt={t(`services.${id}.label`)}
                            fill
                            sizes="(min-width: 1024px) 180px, 100vw"
                            className="hidden object-cover sm:block"
                          />
                          <Image
                            src={serviceHeroImages[id].mobile}
                            alt={t(`services.${id}.label`)}
                            fill
                            sizes="(min-width: 1024px) 180px, 100vw"
                            className="block object-cover md:hidden"
                          />
                        </div>
                      </div>
                    </ServicePanel>
                  </div>
                );
              })}
            </div>

            <div className="relative hidden h-80 w-full overflow-hidden rounded-3xl shadow-[0_18px_38px_rgba(38,35,22,0.16)] lg:block lg:h-[486px]">
              {serviceIds.map((id) => (
                <Image
                  key={id}
                  src={serviceHeroImages[id].desktop}
                  alt={t(`services.${id}.label`)}
                  aria-hidden={heroOpen !== id}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  onLoad={() => {
                    loadedImages.current.add(id);
                    if (requestedService.current === id) setHeroOpen(id);
                  }}
                  className={`object-cover transition-opacity duration-500 ease-in-out motion-reduce:duration-150 ${heroOpen === id ? "opacity-100" : "opacity-0"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
