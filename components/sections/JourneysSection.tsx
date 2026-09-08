"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { ComponentType, CSSProperties, TouchEvent } from "react";
import type { Swiper as SwiperClass } from "swiper";
import { A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  IoChevronBack,
  IoChevronForward,
  IoBedOutline,
  IoThermometerOutline,
  IoPeople,
} from "react-icons/io5";
import { rooms, type Room } from "@/app/rooms/data";
import { useLang } from "@/lib/i18n";
import {
  ACIcon,
  BoatIcon,
  CaveIcon,
  FanIcon,
  LunchIcon,
  RiceIcon,
  VillageIcon,
  WalkIcon,
  WaterfallsIcon,
} from "@/components/icons/new-icons";

type TabKey = "trip" | "lodge" | "restaurant" | "transport";
type JourneyIcon = ComponentType<{
  className?: string;
  "aria-hidden"?: boolean | "true" | "false";
}>;
const tabKeys: TabKey[] = ["trip", "lodge", "restaurant", "transport"];
const MOBILE_SLIDE_DURATION_MS = 5000;
const DEFAULT_DESKTOP_SLIDE_DURATION_MS = 6000;
const TRIP_DESKTOP_SLIDE_DURATION_MS = 9000;
const LODGE_DESKTOP_SLIDE_DURATION_MS = 6000;
const JOURNEY_SLIDE_SPEED_MS = 500;

interface TripFeatureDef {
  icon: JourneyIcon;
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
    icon: JourneyIcon;
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
      { icon: VillageIcon, labelKey: "journeys.feature.villageVisit" },
      { icon: WalkIcon, labelKey: "journeys.feature.trekking" },
      { icon: LunchIcon, labelKey: "journeys.feature.lunch" },
    ],
    descKey: "journeys.trip1.desc",
  },
  {
    id: "2d1n",
    titleKey: "journeys.trip2.title",
    durationKey: "journeys.trip2.duration",
    image: "/Trip Package/Hero webp/Trip-Waerebo-Lodge-2D-1N-Hero-Desktop.webp",
    features: [
      { icon: VillageIcon, labelKey: "journeys.feature.villageStay" },
      { icon: WalkIcon, labelKey: "journeys.feature.trekking" },
      { icon: LunchIcon, labelKey: "journeys.feature.meals" },
    ],
    descKey: "journeys.trip2.desc",
  },
  {
    id: "3d2n",
    titleKey: "journeys.trip3.title",
    durationKey: "journeys.trip3.duration",
    image: "/Trip Package/Hero webp/Trip-Waerebo-Lodge-3D-2N-Hero-Desktop.webp",
    features: [
      { icon: VillageIcon, labelKey: "journeys.feature.villageStay" },
      { icon: WalkIcon, labelKey: "journeys.feature.trekking" },
      { icon: LunchIcon, labelKey: "journeys.feature.meals" },
      { icon: WaterfallsIcon, labelKey: "journeys.feature.waterfalls" },
      { icon: RiceIcon, labelKey: "journeys.feature.riceFields" },
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
      { icon: VillageIcon, labelKey: "journeys.feature.villageStay" },
      { icon: WalkIcon, labelKey: "journeys.feature.trekking" },
      { icon: LunchIcon, labelKey: "journeys.feature.meals" },
      { icon: BoatIcon, labelKey: "journeys.feature.nucaMolas" },
      { icon: RiceIcon, labelKey: "journeys.feature.riceFields" },
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
      { icon: VillageIcon, labelKey: "journeys.feature.villageStay" },
      { icon: WalkIcon, labelKey: "journeys.feature.trekking" },
      { icon: LunchIcon, labelKey: "journeys.feature.meals" },
      { icon: WaterfallsIcon, labelKey: "journeys.feature.waterfalls" },
      { icon: RiceIcon, labelKey: "journeys.feature.riceFields" },
      { icon: CaveIcon, labelKey: "journeys.feature.cave" },
    ],
    descKey: "journeys.trip5.desc",
  },
];

const roomSpecIcon: Record<Room["cardSpecs"][number]["key"], JourneyIcon> = {
  people: IoPeople,
  ac: ACIcon,
  fan: FanIcon,
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

  const goToSlide = (index: number) => {
    if (index === activeIndex) return;

    setActiveIndex(index);
  };

  return {
    activeIndex,
    goToSlide,
    goToPrevious,
    goToNext,
    duration,
  };
}

function useResponsiveSliderDuration(desktop: number) {
  const [duration, setDuration] = useState(desktop);

  useEffect(() => {
    const query = window.matchMedia("(min-width: 768px)");
    const updateDuration = () =>
      setDuration(query.matches ? desktop : MOBILE_SLIDE_DURATION_MS);

    updateDuration();
    query.addEventListener("change", updateDuration);
    return () => query.removeEventListener("change", updateDuration);
  }, [desktop]);

  return duration;
}

function useSwiperSlider(desktopDuration: number) {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const duration = useResponsiveSliderDuration(desktopDuration);

  const setSwiper = (swiper: SwiperClass) => {
    swiperRef.current = swiper;
  };

  const goToPrevious = () => {
    const swiper = swiperRef.current;
    if (swiper && !swiper.destroyed) swiper.slidePrev(JOURNEY_SLIDE_SPEED_MS);
  };

  const goToNext = () => {
    const swiper = swiperRef.current;
    if (swiper && !swiper.destroyed) swiper.slideNext(JOURNEY_SLIDE_SPEED_MS);
  };

  const goToSlide = (index: number) => {
    const swiper = swiperRef.current;
    if (swiper && !swiper.destroyed)
      swiper.slideToLoop(index, JOURNEY_SLIDE_SPEED_MS);
  };

  return {
    setSwiper,
    activeIndex,
    setActiveIndex,
    duration,
    goToPrevious,
    goToNext,
    goToSlide,
  };
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
      className={`carousel-chevron-light pointer-events-auto absolute top-[43%] z-20 grid h-11 w-11 -translate-y-1/2 place-items-center transition-colors md:h-12 md:w-12 ${
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
          className="button-primary mt-5 flex min-h-11 w-full items-center justify-center rounded-lg px-3 py-2 text-center text-xs font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-savana-800 sm:text-sm"
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
    <article className="rounded-2xl bg-white p-3 shadow-[0_14px_12px_rgba(38,35,22,0.10)]">
      <div className="relative aspect-[7.62/4] overflow-hidden rounded-[12px]">
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
          className="button-primary mt-6 flex min-h-12 w-full items-center justify-center rounded-xl px-5 text-base font-medium transition-colors"
        >
          {t("journeys.seeLodgeDetails")}
        </Link>
      </div>
    </article>
  );
}

function LodgePreview() {
  const { t } = useLang();
  const {
    setSwiper,
    activeIndex,
    setActiveIndex,
    goToSlide,
    goToPrevious,
    goToNext,
    duration,
  } = useSwiperSlider(LODGE_DESKTOP_SLIDE_DURATION_MS);

  return (
    <div className="relative">
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 z-10">
          <SliderArrow
            direction="previous"
            onClick={goToPrevious}
            label="Previous rooms"
          />
          <SliderArrow direction="next" onClick={goToNext} label="Next rooms" />
        </div>

        <Swiper
          onSwiper={setSwiper}
          modules={[A11y, Autoplay]}
          className="journey-card-swiper"
          style={{ paddingInline: 16 }}
          loop
          grabCursor
          speed={JOURNEY_SLIDE_SPEED_MS}
          slidesPerView={1}
          spaceBetween={24}
          threshold={8}
          autoplay={{
            delay: duration,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
          onRealIndexChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {lodgeDefs.map((def) => (
            <SwiperSlide key={def.slug} className="!h-auto">
              <LodgeCard def={def} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="mt-7">
        <SliderPagination
          items={lodgeDefs.map((def) => ({ id: def.slug }))}
          activeIndex={activeIndex}
          onSelect={goToSlide}
          getLabel={(index) => `Show ${lodgeDefs[index].title}`}
          duration={duration}
        />
      </div>

      <Link
        href="/lodge"
        className="button-outline mx-auto mt-8 flex min-h-14 w-full max-w-[320px] items-center justify-center rounded-lg px-6 text-base font-medium transition-colors"
      >
        {t("journeys.discoverAllRoom")}
      </Link>
    </div>
  );
}

function TripSlider() {
  const {
    setSwiper,
    activeIndex,
    setActiveIndex,
    goToSlide,
    goToPrevious,
    goToNext,
    duration,
  } = useSwiperSlider(TRIP_DESKTOP_SLIDE_DURATION_MS);
  const { t } = useLang();

  return (
    <div className="mx-auto max-w-[1512px]">
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-between px-6 md:px-8 lg:px-0">
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
        </div>

        <Swiper
          onSwiper={setSwiper}
          modules={[A11y, Autoplay]}
          className="journey-card-swiper"
          style={{ paddingInline: 20 }}
          loop
          grabCursor
          speed={JOURNEY_SLIDE_SPEED_MS}
          slidesPerView={1}
          spaceBetween={24}
          threshold={8}
          autoplay={{
            delay: duration,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
          onRealIndexChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {tripDefs.map((def) => (
            <SwiperSlide key={def.id} className="!h-auto">
              <Card def={def} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-6">
          <SliderPagination
            items={tripDefs}
            activeIndex={activeIndex}
            onSelect={goToSlide}
            getLabel={(index) => t(tripDefs[index].titleKey)}
            duration={duration}
          />
        </div>
      </div>

      <Link
        href="/trips"
        className="button-outline mx-auto mt-7 flex min-h-12 w-full max-w-[280px] items-center justify-center rounded-lg px-6 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-savana-800"
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
            className="rounded-2xl bg-white p-3 shadow-[0_14px_38px_rgba(38,35,22,0.18)]"
          >
            <div className="relative aspect-[1.86] overflow-hidden rounded-[12px]">
              <Image
                src={def.image}
                alt={def.title}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
            <div className="px-3 pt-5 pb-2">
              <h3 className="text-xl leading-tight font-semibold text-savana-800 md:text-2xl">
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
        className="button-outline mx-auto mt-8 flex min-h-14 w-full max-w-[320px] items-center justify-center rounded-lg px-6 text-base font-medium transition-colors"
      >
        {t("journeys.seeTransportDetails")}
      </Link>
    </div>
  );
}

function RestaurantPreview() {
  const { t } = useLang();
  const { activeIndex, goToSlide, goToPrevious, goToNext, duration } =
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
          <div className="flex flex-col justify-start px-4 py-5 lg:w-[38%] lg:px-5 lg:py-8 xl:px-7">
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
              className="carousel-chevron-overlay absolute top-1/2 left-2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:left-3"
            >
              <IoChevronBack className="h-6 w-6" />
            </button>
            <button
              type="button"
              onClick={goToNext}
              aria-label="Next restaurant image"
              className="carousel-chevron-overlay absolute top-1/2 right-2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:right-3"
            >
              <IoChevronForward className="h-6 w-6" />
            </button>

            <div className="absolute inset-x-6 bottom-3 z-10 md:inset-x-10 md:bottom-4">
              <SliderPagination
                items={restaurantSliderImages.map((item) => ({ id: item.src }))}
                activeIndex={activeIndex}
                onSelect={goToSlide}
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
        className="button-outline mx-auto mt-8 flex min-h-14 w-full max-w-[320px] items-center justify-center rounded-lg px-6 text-base font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-savana-800"
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
          className={`-mb-px px-5 pb-3 text-sm font-semibold whitespace-nowrap transition-colors md:text-lg ${
            activeTab === tab
              ? "border-b-2 border-savana-800 text-neutral-900"
              : "border-b-2 border-neutral-50 text-neutral-500 hover:text-neutral-900"
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
      className="relative z-30 overflow-x-clip bg-transparent pt-0 lg:pt-0"
    >
      <div className="relative mx-auto max-w-[1512px] px-6 lg:px-20">
        <div className="relative z-40 -mt-12.5 lg:-mt-16">
          <div className="overflow-hidden rounded-2xl bg-white p-6 shadow-[0_25px_80px_rgba(15,23,42,0.12)]">
            <p className={`text-xs font-normal text-savana-700`}>
              {t(`journeys.${activeTab}.eyebrow`)}
            </p>
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <h2
                  className={`text-xl leading-tight text-balance text-neutral-900 lg:text-3xl`}
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
