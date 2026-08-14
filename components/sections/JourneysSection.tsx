"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { CSSProperties, TouchEvent } from "react";
import type { IconType } from "react-icons";
import {
  IoBoatOutline,
  IoCalendarOutline,
  IoCarOutline,
  IoChevronBack,
  IoChevronForward,
  IoPeopleOutline,
  IoBedOutline,
  IoEarthOutline,
  IoHomeOutline,
  IoLogoWhatsapp,
  IoMapOutline,
  IoMailOutline,
  IoRestaurantOutline,
  IoSnowOutline,
  IoThermometerOutline,
  IoLeafOutline,
  IoWalkOutline,
  IoWaterOutline,
} from "react-icons/io5";
import { rooms, type Room } from "@/app/rooms/data";
import { useLang } from "@/lib/i18n";

type TabKey = "trip" | "lodge" | "restaurant" | "transport";
const tabKeys: TabKey[] = ["trip", "lodge", "restaurant", "transport"];
const MOBILE_SLIDE_DURATION_MS = 5000;
const DEFAULT_DESKTOP_SLIDE_DURATION_MS = 6000;
const TRIP_DESKTOP_SLIDE_DURATION_MS = 9000;
const LODGE_DESKTOP_SLIDE_DURATION_MS = 6000;
const whatsappNumber = "6285339021145";
const email = "waerebolodge@gmail.com";

interface TripFeatureDef {
  icon: IconType;
  labelKey: string;
}

interface JourneyCardDef {
  id: string;
  titleKey: string;
  durationKey: string;
  image: string;
  features: TripFeatureDef[];
  descKey: string;
}

interface LodgeCardDef {
  slug: string;
  title: string;
  image: string;
  meta: {
    icon: IconType;
    label: string;
  }[];
}

interface TransportCardDef {
  id: string;
  title: string;
  image: string;
  descKey: string;
}

const tripDefs: JourneyCardDef[] = [
  {
    id: "1-day",
    titleKey: "journeys.trip1.title",
    durationKey: "journeys.trip1.duration",
    image: "/Trip Package/Hero webp/Trip-Waerebo-Lodge-1D-0N-Hero-Desktop.webp",
    features: [
      { icon: IoHomeOutline, labelKey: "journeys.feature.villageVisit" },
      { icon: IoWalkOutline, labelKey: "journeys.feature.trekking" },
      { icon: IoRestaurantOutline, labelKey: "journeys.feature.lunch" },
    ],
    descKey: "journeys.trip1.desc",
  },
  {
    id: "2d1n",
    titleKey: "journeys.trip2.title",
    durationKey: "journeys.trip2.duration",
    image: "/Trip Package/Hero webp/Trip-Waerebo-Lodge-2D-1N-Hero-Desktop.webp",
    features: [
      { icon: IoHomeOutline, labelKey: "journeys.feature.villageStay" },
      { icon: IoWalkOutline, labelKey: "journeys.feature.trekking" },
      { icon: IoRestaurantOutline, labelKey: "journeys.feature.meals" },
    ],
    descKey: "journeys.trip2.desc",
  },
  {
    id: "3d2n",
    titleKey: "journeys.trip3.title",
    durationKey: "journeys.trip3.duration",
    image: "/Trip Package/Hero webp/Trip-Waerebo-Lodge-3D-2N-Hero-Desktop.webp",
    features: [
      { icon: IoHomeOutline, labelKey: "journeys.feature.villageStay" },
      { icon: IoWalkOutline, labelKey: "journeys.feature.trekking" },
      { icon: IoRestaurantOutline, labelKey: "journeys.feature.meals" },
      { icon: IoWaterOutline, labelKey: "journeys.feature.waterfalls" },
      { icon: IoLeafOutline, labelKey: "journeys.feature.riceFields" },
    ],
    descKey: "journeys.trip3.desc",
  },
  {
    id: "island-escape",
    titleKey: "journeys.trip4.title",
    durationKey: "journeys.trip4.duration",
    image:
      "/Trip Package/Hero webp/Trip-Waerebo-Lodge-4D-3N-Island-Escape-Hero-Desktop.webp",
    features: [
      { icon: IoHomeOutline, labelKey: "journeys.feature.villageStay" },
      { icon: IoWalkOutline, labelKey: "journeys.feature.trekking" },
      { icon: IoRestaurantOutline, labelKey: "journeys.feature.meals" },
      { icon: IoBoatOutline, labelKey: "journeys.feature.nucaMolas" },
      { icon: IoLeafOutline, labelKey: "journeys.feature.riceFields" },
    ],
    descKey: "journeys.trip4.desc",
  },
  {
    id: "flores-heritage",
    titleKey: "journeys.trip5.title",
    durationKey: "journeys.trip5.duration",
    image:
      "/Trip Package/Hero webp/Trip-Waerebo-Lodge-4D-3N-Flores-Hero-Desktop.webp",
    features: [
      { icon: IoHomeOutline, labelKey: "journeys.feature.villageStay" },
      { icon: IoWalkOutline, labelKey: "journeys.feature.trekking" },
      { icon: IoRestaurantOutline, labelKey: "journeys.feature.meals" },
      { icon: IoWaterOutline, labelKey: "journeys.feature.waterfalls" },
      { icon: IoLeafOutline, labelKey: "journeys.feature.riceFields" },
      { icon: IoEarthOutline, labelKey: "journeys.feature.cave" },
    ],
    descKey: "journeys.trip5.desc",
  },
];

const customJourneyFeatures: TripFeatureDef[] = [
  { icon: IoPeopleOutline, labelKey: "trip.custom.feature.travelers" },
  { icon: IoMapOutline, labelKey: "trip.custom.feature.team" },
  { icon: IoCalendarOutline, labelKey: "trip.custom.feature.flexible" },
  { icon: IoBedOutline, labelKey: "trip.custom.feature.lodge" },
  { icon: IoHomeOutline, labelKey: "trip.custom.feature.village" },
  { icon: IoLeafOutline, labelKey: "trip.custom.feature.authentic" },
  { icon: IoRestaurantOutline, labelKey: "trip.custom.feature.meals" },
  { icon: IoCarOutline, labelKey: "trip.custom.feature.accommodation" },
];

const roomSpecIcon: Record<Room["cardSpecs"][number]["key"], IconType> = {
  people: IoPeopleOutline,
  ac: IoSnowOutline,
  fan: IoLeafOutline,
  shower: IoThermometerOutline,
  bed: IoBedOutline,
};

const lodgeDefs: LodgeCardDef[] = rooms.map((room) => ({
  slug: room.slug,
  title: room.cardTitle ?? room.title,
  image: room.cardImage ?? room.images[0],
  meta: room.cardSpecs.map((spec) => ({
    icon: roomSpecIcon[spec.key],
    label: spec.label.replace("Guests", "People"),
  })),
}));

const transportDefs: TransportCardDef[] = [
  {
    id: "oto-colt",
    title: "Oto Colt",
    image: "/homepage/Homepage-Our-Services-Waerebo-Transport-Picture-01.webp",
    descKey: "journeys.transport.oto.desc",
  },
  {
    id: "toyota-innova",
    title: "Toyota Innova",
    image: "/homepage/Homepage-Our-Services-Waerebo-Transport-Picture-02.webp",
    descKey: "journeys.transport.innova.desc",
  },
];

const restaurantSliderImages = [
  {
    src: "/homepage/Homepage-Waerebo-Restaurant-Photo-Eating-Lunch-01.webp",
    alt: "Guests sharing lunch at Waerebo Lodge Restaurant",
  },
  {
    src: "/homepage/Homepage-Waerebo-Restaurant-Photo-Eating-Lunch-02.webp",
    alt: "Restaurant guests enjoying local food at Waerebo Lodge",
  },
  {
    src: "/homepage/Homepage-Waerebo-Restaurant-Photo-Eating-Lunch-03.webp",
    alt: "Home-cooked Flores meal at Waerebo Lodge Restaurant",
  },
  {
    src: "/homepage/Homepage-Waerebo-Restaurant-Photo-Eating-Lunch-04.webp",
    alt: "Dining table at Waerebo Lodge Restaurant",
  },
  {
    src: "/homepage/Homepage-Waerebo-Restaurant-Photo-Eating-Lunch-05.webp",
    alt: "Guests dining together in Waerebo Lodge Restaurant",
  },
  {
    src: "/homepage/Homepage-Waerebo-Restaurant-Photo-Eating-Lunch-06.webp",
    alt: "Lunch gathering at Waerebo Lodge Restaurant",
  },
];

function getVisibleSlides<T>(items: T[], activeIndex: number, count: number) {
  return [...items, ...items].slice(activeIndex, activeIndex + count);
}

function useAutoSlider(
  total: number,
  isActive = true,
  durations: { desktop?: number; mobile?: number } = {}
) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [duration, setDuration] = useState(
    durations.desktop ?? DEFAULT_DESKTOP_SLIDE_DURATION_MS
  );

  useEffect(() => {
    if (!isActive || total <= 1) return;

    const id = window.setTimeout(() => {
      setActiveIndex((current) => (current + 1) % total);
    }, duration);

    return () => window.clearTimeout(id);
  }, [activeIndex, duration, isActive, total]);

  useEffect(() => {
    const query = window.matchMedia("(min-width: 768px)");
    const updateDuration = () => {
      setDuration(
        query.matches
          ? (durations.desktop ?? DEFAULT_DESKTOP_SLIDE_DURATION_MS)
          : (durations.mobile ?? MOBILE_SLIDE_DURATION_MS)
      );
    };

    updateDuration();
    query.addEventListener("change", updateDuration);
    return () => query.removeEventListener("change", updateDuration);
  }, [durations.desktop, durations.mobile]);

  const goToPrevious = () => {
    setActiveIndex((current) => (current === 0 ? total - 1 : current - 1));
  };

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % total);
  };

  return { activeIndex, setActiveIndex, goToPrevious, goToNext, duration };
}

function SliderPagination({
  items,
  activeIndex,
  onSelect,
  getLabel,
  duration,
  tone = "dark",
}: {
  items: { id: string }[];
  activeIndex: number;
  onSelect: (index: number) => void;
  getLabel: (index: number) => string;
  duration: number;
  tone?: "dark" | "light";
}) {
  const baseClass = tone === "light" ? "bg-white/35" : "bg-savana-800/25";
  const fillClass = tone === "light" ? "bg-white" : "bg-savana-800";

  return (
    <div className="flex justify-center gap-2">
      {items.map((item, index) => (
        <button
          key={item.id}
          type="button"
          aria-label={getLabel(index)}
          onClick={() => onSelect(index)}
          className={`relative h-1.5 w-12 overflow-hidden rounded-full ${baseClass}`}
        >
          {index < activeIndex && (
            <span className={`absolute inset-0 ${fillClass}`} />
          )}
          {index === activeIndex && (
            <span
              key={activeIndex}
              className={`journey-pagination-fill absolute inset-y-0 left-0 ${fillClass}`}
              style={
                {
                  "--journey-slide-duration": `${duration}ms`,
                } as CSSProperties
              }
            />
          )}
        </button>
      ))}
    </div>
  );
}

function SliderArrow({
  direction,
  onClick,
  label,
}: {
  direction: "previous" | "next";
  onClick: () => void;
  label: string;
}) {
  const Icon = direction === "previous" ? IoChevronBack : IoChevronForward;

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={`absolute top-[43%] z-20 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white text-savana-500 shadow-[0_10px_28px_rgba(38,35,22,0.16)] transition-colors hover:text-savana-800 md:h-12 md:w-12 ${
        direction === "previous"
          ? "left-0 -translate-x-1/2 xl:-left-11"
          : "right-0 translate-x-1/2 xl:-right-11"
      }`}
    >
      <Icon size={24} />
    </button>
  );
}

function Card({ def }: { def: JourneyCardDef }) {
  const { t } = useLang();

  return (
    <article
      data-reveal
      className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white p-2 shadow-[0_4px_8px_rgba(69,61,24,0.14)] transition-transform duration-300 ease-out hover:-translate-y-1 motion-reduce:transform-none"
    >
      <div className="relative aspect-[1.72] overflow-hidden rounded-xl">
        <Image
          src={def.image}
          alt={t(def.titleKey)}
          fill
          sizes="(min-width: 1024px) 28vw, (min-width: 768px) 44vw, 82vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transform-none"
        />
        <span className="absolute top-3 left-3 rounded-md bg-neutral-900/60 px-2.5 py-1.5 text-[10px] font-medium text-white backdrop-blur-sm sm:text-xs">
          {t(def.durationKey)}
        </span>
      </div>

      <div className="flex flex-1 flex-col px-2 pt-3 pb-1 sm:px-3 sm:pt-4">
        <div className="flex-1">
          <h3 className="text-lg leading-tight font-semibold text-balance text-neutral-900 sm:text-xl">
            {t(def.titleKey)}
          </h3>

          <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-2 text-[10px] leading-tight font-medium text-neutral-500 sm:text-[11px]">
            {def.features.map(({ icon: Icon, labelKey }, index) => (
              <div key={labelKey} className="flex items-center gap-2">
                {index > 0 && <span className="h-3 w-px bg-neutral-100" />}
                <span className="flex items-center gap-1.5">
                  <Icon
                    aria-hidden="true"
                    className="h-3.5 w-3.5 flex-none text-neutral-300"
                  />
                  {t(labelKey)}
                </span>
              </div>
            ))}
          </div>

          <p className="mt-4 text-xs leading-5 text-pretty text-neutral-500 sm:text-sm sm:leading-6">
            {t(def.descKey)}
          </p>
        </div>

        <Link
          href="/trips"
          className="mt-5 flex min-h-11 w-full items-center justify-center rounded-lg bg-savana-800 px-3 py-2 text-center text-xs font-semibold text-white transition-colors hover:bg-savana-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-savana-800 sm:text-sm"
        >
          {t("journeys.seeTripDetails")}
        </Link>
      </div>
    </article>
  );
}

function LodgeCard({ def }: { def: LodgeCardDef }) {
  const { t } = useLang();

  return (
    <article className="rounded-[28px] bg-white p-3 shadow-[0_14px_38px_rgba(38,35,22,0.18)]">
      <div className="relative aspect-[7.62/4] overflow-hidden rounded-[20px]">
        <Image
          src={def.image}
          alt={def.title}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 33vw, 100vw"
        />
      </div>
      <div className="px-3 pt-5 pb-2">
        <h3 className="text-2xl leading-tight font-semibold text-neutral-900">
          {def.title}
        </h3>
        <div className="mt-3 flex flex-wrap items-center gap-3 text-sm font-medium text-neutral-400">
          {def.meta.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={`${def.slug}-${item.label}`}
                className="flex items-center gap-3"
              >
                {index > 0 && <span className="h-4 w-px bg-neutral-100" />}
                <span className="flex items-center gap-1.5">
                  <Icon className="h-4 w-4 text-neutral-200" />
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
        <Link
          href={`/rooms/${def.slug}`}
          className="mt-6 flex min-h-12 w-full items-center justify-center rounded-xl bg-savana-800 px-5 text-base font-medium text-white transition-colors hover:bg-savana-700"
        >
          {t("journeys.seeLodgeDetails")}
        </Link>
      </div>
    </article>
  );
}

function LodgePreview() {
  const { t } = useLang();
  const { activeIndex, setActiveIndex, goToPrevious, goToNext, duration } =
    useAutoSlider(lodgeDefs.length, true, {
      desktop: LODGE_DESKTOP_SLIDE_DURATION_MS,
      mobile: MOBILE_SLIDE_DURATION_MS,
    });
  const visibleRooms = getVisibleSlides(lodgeDefs, activeIndex, 3);

  return (
    <div className="relative">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        <SliderArrow
          direction="previous"
          onClick={goToPrevious}
          label="Previous rooms"
        />
        <SliderArrow direction="next" onClick={goToNext} label="Next rooms" />

        {visibleRooms.map((def, index) => (
          <div
            key={`${activeIndex}-${def.slug}`}
            className={`${index === 1 ? "hidden md:block" : ""} ${
              index === 2 ? "hidden xl:block" : ""
            }`}
          >
            <LodgeCard def={def} />
          </div>
        ))}
      </div>

      <div className="mt-7">
        <SliderPagination
          items={lodgeDefs.map((def) => ({ id: def.slug }))}
          activeIndex={activeIndex}
          onSelect={setActiveIndex}
          getLabel={(index) => `Show ${lodgeDefs[index].title}`}
          duration={duration}
        />
      </div>

      <Link
        href="/lodge"
        className="mx-auto mt-8 flex min-h-14 w-full max-w-[320px] items-center justify-center rounded-lg border border-savana-800 px-6 text-base font-medium text-savana-800 transition-colors hover:bg-savana-800 hover:text-white"
      >
        {t("journeys.discoverAllRoom")}
      </Link>
    </div>
  );
}

function TripSlider() {
  const { activeIndex, setActiveIndex, goToPrevious, goToNext, duration } =
    useAutoSlider(tripDefs.length, true, {
      desktop: TRIP_DESKTOP_SLIDE_DURATION_MS,
      mobile: MOBILE_SLIDE_DURATION_MS,
    });
  const visibleTrips = getVisibleSlides(tripDefs, activeIndex, 3);
  const { t } = useLang();
  const whatsappMessage = encodeURIComponent(t("trip.message.custom"));
  const emailSubject = encodeURIComponent(t("trip.email.customSubject"));

  return (
    <div className="mx-auto max-w-[1180px]">
      <div className="relative">
        <SliderArrow
          direction="previous"
          onClick={goToPrevious}
          label={t("trip.previousPackage")}
        />
        <SliderArrow
          direction="next"
          onClick={goToNext}
          label={t("trip.nextPackage")}
        />

        <div className="grid grid-cols-1 gap-5 px-8 md:grid-cols-2 lg:grid-cols-3 lg:px-0">
          {visibleTrips.map((def, index) => (
            <div
              key={`${activeIndex}-${def.id}`}
              className={`${index === 1 ? "hidden md:block" : ""} ${
                index === 2 ? "hidden lg:block" : ""
              }`}
            >
              <Card def={def} />
            </div>
          ))}
        </div>

        <div className="mt-6">
          <SliderPagination
            items={tripDefs}
            activeIndex={activeIndex}
            onSelect={setActiveIndex}
            getLabel={(index) => t(tripDefs[index].titleKey)}
            duration={duration}
          />
        </div>
      </div>

      <section className="mt-7 overflow-hidden rounded-2xl bg-white p-2 shadow-[0_4px_8px_rgba(69,61,24,0.14)]">
        <div className="grid gap-2 lg:grid-cols-[1.05fr_1fr]">
          <div className="relative min-h-64 overflow-hidden rounded-xl lg:min-h-[300px]">
            <Image
              src="/Trip Package/Hero webp/Trip-Waerebo-Lodge-Custom-Hero-Desktop.webp"
              alt={t("journeys.custom.title")}
              fill
              sizes="(min-width: 1024px) 38vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
            <div className="absolute right-0 bottom-0 left-0 p-5 text-white sm:p-6">
              <h3 className="text-xl leading-tight font-semibold text-balance sm:text-2xl">
                {t("journeys.custom.title")}
              </h3>
              <p className="mt-2 max-w-xl text-xs leading-5 text-pretty text-white/90 sm:text-sm">
                {t("journeys.custom.desc")}
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center p-2 sm:p-3">
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {customJourneyFeatures.map(({ icon: Icon, labelKey }) => (
                <div
                  key={labelKey}
                  className="flex min-h-20 flex-col items-center justify-center rounded-lg bg-savana-50 px-2 py-3 text-center"
                >
                  <Icon
                    aria-hidden="true"
                    className="h-5 w-5 flex-none text-savana-600"
                  />
                  <span className="mt-1.5 text-[9px] leading-tight font-semibold text-savana-800 sm:text-[10px]">
                    {t(labelKey)}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-2 grid gap-2 sm:grid-cols-2">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-11 items-center justify-center gap-2 rounded-lg bg-savana-800 px-4 py-2.5 text-center text-[11px] font-semibold text-white transition-colors hover:bg-savana-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-savana-800"
              >
                <IoLogoWhatsapp aria-hidden="true" className="h-4 w-4" />
                {t("journeys.custom.whatsapp")}
              </a>
              <a
                href={`mailto:${email}?subject=${emailSubject}`}
                className="flex min-h-11 items-center justify-center gap-2 rounded-lg border border-savana-700 px-4 py-2.5 text-center text-[11px] font-semibold text-savana-800 transition-colors hover:bg-savana-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-savana-800"
              >
                <IoMailOutline aria-hidden="true" className="h-4 w-4" />
                {t("journeys.custom.email")}
              </a>
            </div>
          </div>
        </div>
      </section>

      <Link
        href="/trips"
        className="mx-auto mt-7 flex min-h-12 w-full max-w-[280px] items-center justify-center rounded-lg border border-savana-700 px-6 text-sm font-semibold text-savana-800 transition-colors hover:bg-savana-800 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-savana-800"
      >
        {t("journeys.exploreAllTrips")}
      </Link>
    </div>
  );
}

function TransportPreview() {
  const { t } = useLang();

  return (
    <div>
      <div className="grid gap-6 lg:grid-cols-2">
        {transportDefs.map((def) => (
          <article
            key={def.id}
            className="rounded-[28px] bg-white p-3 shadow-[0_14px_38px_rgba(38,35,22,0.18)]"
          >
            <div className="relative aspect-[1.86] overflow-hidden rounded-[20px]">
              <Image
                src={def.image}
                alt={def.title}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
            <div className="px-3 pt-5 pb-2">
              <h3 className="text-xl leading-tight font-semibold text-neutral-900 md:text-2xl">
                {def.title}
              </h3>
              <p className="mt-3 line-clamp-3 min-h-[72px] text-sm leading-6 font-normal text-neutral-500 md:text-base">
                {t(def.descKey)}
              </p>
            </div>
          </article>
        ))}
      </div>

      <Link
        href="/transport"
        className="mx-auto mt-8 flex min-h-14 w-full max-w-[320px] items-center justify-center rounded-lg border border-savana-800 px-6 text-base font-medium text-savana-800 transition-colors hover:bg-savana-800 hover:text-white"
      >
        {t("journeys.seeTransportDetails")}
      </Link>
    </div>
  );
}

function RestaurantPreview() {
  const { t } = useLang();
  const { activeIndex, setActiveIndex, goToPrevious, goToNext, duration } =
    useAutoSlider(restaurantSliderImages.length, true, {
      desktop: DEFAULT_DESKTOP_SLIDE_DURATION_MS,
      mobile: MOBILE_SLIDE_DURATION_MS,
    });
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    const touch = event.touches[0];
    touchStartRef.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (!touchStartRef.current) {
      return;
    }

    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - touchStartRef.current.x;
    const deltaY = touch.clientY - touchStartRef.current.y;
    const isHorizontalSwipe =
      Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY);

    if (isHorizontalSwipe) {
      if (deltaX > 0) {
        goToPrevious();
      } else {
        goToNext();
      }
    }

    touchStartRef.current = null;
  };

  return (
    <div>
      <article className="overflow-hidden rounded-2xl bg-white p-3 shadow-[0_8px_18px_rgba(38,35,22,0.14)]">
        <div className="flex flex-col-reverse gap-3 lg:min-h-[436px] lg:flex-row lg:items-stretch">
          <div className="flex flex-col justify-center px-4 py-5 lg:w-[38%] lg:px-5 lg:py-8 xl:px-7">
            <h3 className="text-xl leading-tight font-semibold text-savana-800 md:text-2xl">
              Waerebo Lodge Restaurant
            </h3>
            <p className="mt-3 max-w-md text-sm leading-5 font-normal text-pale-savana-400 md:leading-6">
              {t("journeys.restaurant.desc")}
            </p>
            <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-5 font-normal text-pale-savana-400 marker:text-savana-800 md:leading-6">
              <li>{t("journeys.restaurant.meals")}</li>
              <li>{t("journeys.restaurant.personalized")}</li>
              <li>{t("journeys.restaurant.included")}</li>
            </ul>
          </div>

          <div
            className="relative mx-auto aspect-[7/4] w-full touch-pan-y overflow-hidden rounded-xl lg:mx-0 lg:aspect-auto lg:min-h-full lg:flex-1"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <Image
              src={restaurantSliderImages[activeIndex].src}
              alt={restaurantSliderImages[activeIndex].alt}
              fill
              className="object-cover object-center"
              sizes="(min-width: 1024px) 60vw, 100vw"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/45 to-transparent" />

            <button
              type="button"
              onClick={goToPrevious}
              aria-label="Previous restaurant image"
              className="absolute top-1/2 left-2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full text-white transition-colors hover:bg-black/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:left-3"
            >
              <IoChevronBack className="h-6 w-6" />
            </button>
            <button
              type="button"
              onClick={goToNext}
              aria-label="Next restaurant image"
              className="absolute top-1/2 right-2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full text-white transition-colors hover:bg-black/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:right-3"
            >
              <IoChevronForward className="h-6 w-6" />
            </button>

            <div className="absolute inset-x-6 bottom-3 z-10 md:inset-x-10 md:bottom-4">
              <SliderPagination
                items={restaurantSliderImages.map((item) => ({ id: item.src }))}
                activeIndex={activeIndex}
                onSelect={setActiveIndex}
                getLabel={(index) => `Show restaurant image ${index + 1}`}
                duration={duration}
                tone="light"
              />
            </div>
          </div>
        </div>
      </article>

      <Link
        href="/restaurant"
        className="mx-auto mt-8 flex min-h-14 w-full max-w-[320px] items-center justify-center rounded-lg border border-savana-800 px-6 text-base font-medium text-savana-800 transition-colors hover:bg-savana-800 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-savana-800"
      >
        {t("journeys.seeRestaurantDetails")}
      </Link>
    </div>
  );
}

export default function JourneysSection() {
  const [activeTab, setActiveTab] = useState<TabKey>("trip");
  const { t } = useLang();

  const tabBar = (className: string) => (
    <div
      className={`flex scrollbar-none items-center justify-center gap-0 overflow-x-auto overflow-y-hidden border-b border-neutral-100 ${className}`}
    >
      {tabKeys.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`-mb-px border-b-2 px-5 pb-3 text-sm font-semibold whitespace-nowrap transition-colors md:text-lg ${
            activeTab === tab
              ? "border-b-4 border-savana-600 text-neutral-900"
              : "border-transparent text-neutral-300 hover:text-neutral-900"
          }`}
        >
          {t(`journeys.tab.${tab}`)}
        </button>
      ))}
    </div>
  );

  return (
    <section
      id="journeys"
      className="relative z-30 bg-transparent pt-0 pb-24 lg:pt-0 lg:pb-28"
    >
      <div className="relative mx-auto max-w-[1312px] px-6 lg:px-20">
        <div className="relative z-40 -mt-24 lg:-mt-16">
          <div className="overflow-hidden rounded-2xl border border-pale-green-100/50 bg-white p-6 shadow-[0_25px_80px_rgba(15,23,42,0.12)]">
            <p
              className={`mb-2 font-normal text-savana-600 ${
                activeTab === "trip" ? "text-xs" : "text-base"
              }`}
            >
              {t(`journeys.${activeTab}.eyebrow`)}
            </p>
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <h2
                  className={`leading-tight text-balance text-neutral-900 ${
                    activeTab === "trip"
                      ? "text-xl lg:text-3xl"
                      : "text-2xl lg:text-4xl"
                  }`}
                >
                  {t(`journeys.${activeTab}.head`)}
                  <span className="font-semibold">
                    {t(`journeys.${activeTab}.emph`)}
                  </span>
                </h2>
              </div>
              {tabBar("hidden lg:flex")}
            </div>
          </div>
        </div>

        {tabBar("mt-8 lg:hidden")}
      </div>

      <div className="mx-auto mt-8 min-h-[680px] max-w-[1512px] px-6 md:min-h-[720px] lg:mt-10 lg:px-20">
        {activeTab === "trip" && <TripSlider />}

        {activeTab === "lodge" && <LodgePreview />}

        {activeTab === "restaurant" && <RestaurantPreview />}

        {activeTab === "transport" && <TransportPreview />}
      </div>
    </section>
  );
}
