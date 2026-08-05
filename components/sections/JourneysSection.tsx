"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { CSSProperties, TouchEvent } from "react";
import type { IconType } from "react-icons";
import {
  IoChevronBack,
  IoChevronForward,
  IoFlag,
  IoPartlySunny,
  IoPeopleOutline,
  IoBedOutline,
  IoSnowOutline,
  IoThermometerOutline,
  IoLeafOutline,
} from "react-icons/io5";
import { rooms, type Room } from "@/app/rooms/data";
import { useLang } from "@/lib/i18n";

type TabKey = "trip" | "lodge" | "restaurant" | "transport";
const tabKeys: TabKey[] = ["trip", "lodge", "restaurant", "transport"];
const MOBILE_SLIDE_DURATION_MS = 5000;
const DEFAULT_DESKTOP_SLIDE_DURATION_MS = 6000;
const TRIP_DESKTOP_SLIDE_DURATION_MS = 9000;
const LODGE_DESKTOP_SLIDE_DURATION_MS = 6000;

interface CardMetaDef {
  icon: IconType;
  textKey: string;
}

interface JourneyCardDef {
  id: string;
  titleKey: string;
  image: string;
  meta: [CardMetaDef, CardMetaDef];
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
    image:
      "/homepage/Homepage-Dropdown-Our-Services-Detail-Waerebo-Large-01-Trip.webp",
    meta: [
      { icon: IoPartlySunny, textKey: "journeys.trip1.meta0" },
      { icon: IoFlag, textKey: "journeys.trip1.meta1" },
    ],
    descKey: "journeys.trip1.desc",
  },
  {
    id: "2d1n",
    titleKey: "journeys.trip2.title",
    image: "/homepage/Homepage-Waerebo-Lodge-Background-Gallery-Desktop.webp",
    meta: [
      { icon: IoPartlySunny, textKey: "journeys.trip2.meta0" },
      { icon: IoFlag, textKey: "journeys.trip2.meta1" },
    ],
    descKey: "journeys.trip2.desc",
  },
  {
    id: "3d2n",
    titleKey: "journeys.trip3.title",
    image:
      "/homepage/Homepage-Dropdown-Our-Services-Detail-Waerebo-Small-01-Trip.webp",
    meta: [
      { icon: IoPartlySunny, textKey: "journeys.trip3.meta0" },
      { icon: IoFlag, textKey: "journeys.trip3.meta1" },
    ],
    descKey: "journeys.trip3.desc",
  },
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

function Card({
  def,
  href,
  labelKey,
}: {
  def: JourneyCardDef;
  href: string;
  labelKey: string;
}) {
  const { t } = useLang();
  const Icon0 = def.meta[0].icon;
  const Icon1 = def.meta[1].icon;
  return (
    <div
      data-reveal
      className="overflow-hidden rounded-2xl bg-white p-2 shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="relative h-72 rounded-[28px] lg:h-[320px]">
        <Image
          src={def.image}
          alt={t(def.titleKey)}
          fill
          className="rounded-[28px] object-cover"
        />
        <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-slate-950/60 px-3 py-2 text-sm text-white">
          <span className="h-2.5 w-2.5 rounded-full bg-white" />
          <span className="font-normal">{t("journeys.available")}</span>
        </div>
      </div>
      <div className="p-5">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-neutral-900">
            {t(def.titleKey)}
          </h3>
          <div className="flex flex-wrap items-center gap-4 text-sm font-semibold text-neutral-500">
            <div className="flex items-center gap-2 text-sm text-neutral-400">
              <Icon0 className="h-5 w-5 text-neutral-300" />
              <span>{t(def.meta[0].textKey)}</span>
            </div>
            <div className="flex h-2 w-2 items-center gap-2 rounded-full bg-neutral-200 text-sm" />
            <div className="flex items-center gap-2 text-sm text-neutral-400">
              <Icon1 className="h-5 w-5 text-neutral-300" />
              <span>{t(def.meta[1].textKey)}</span>
            </div>
          </div>
          <p className="line-clamp-3 text-sm leading-6 font-normal text-neutral-500">
            {t(def.descKey)}
          </p>
        </div>

        <Link
          href={href}
          className="mt-4 block w-full rounded-[12px] bg-savana-800 px-4 py-3 text-center text-base font-medium text-white transition-colors hover:bg-savana-700"
        >
          {t(labelKey)}
        </Link>
      </div>
    </div>
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

  return (
    <div className="relative">
      <SliderArrow
        direction="previous"
        onClick={goToPrevious}
        label="Previous trips"
      />
      <SliderArrow direction="next" onClick={goToNext} label="Next trips" />
      <div className="grid grid-cols-1 gap-6 px-11 md:grid-cols-2 xl:grid-cols-3 xl:px-0">
        {visibleTrips.map((def, index) => (
          <div
            key={`${activeIndex}-${def.id}`}
            className={`${index === 1 ? "hidden md:block" : ""} ${
              index === 2 ? "hidden xl:block" : ""
            }`}
          >
            <Card def={def} href="/trips" labelKey="journeys.seeTripDetails" />
          </div>
        ))}
      </div>

      <div className="mt-7">
        <SliderPagination
          items={tripDefs}
          activeIndex={activeIndex}
          onSelect={setActiveIndex}
          getLabel={(index) => t(tripDefs[index].titleKey)}
          duration={duration}
        />
      </div>
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
            <p className="mb-2 text-base font-normal text-savana-600">
              {t(`journeys.${activeTab}.eyebrow`)}
            </p>
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <h2 className="text-2xl leading-tight text-neutral-900 lg:text-4xl">
                {t(`journeys.${activeTab}.head`)}
                <span className="font-semibold">
                  {t(`journeys.${activeTab}.emph`)}
                </span>
              </h2>
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
