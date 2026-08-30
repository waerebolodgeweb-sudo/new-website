"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, type MouseEvent } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import type { Swiper as SwiperClass } from "swiper";
import { A11y } from "swiper/modules";
import { Swiper, SwiperSlide, type SwiperRef } from "swiper/react";
import { NewIcon } from "@/components/icons/new-icons";
import { useLang } from "@/lib/i18n";
import "swiper/css";
import {
  captionTiles,
  featureIkat,
  featureMbaruNiang,
  galleryHeader,
  guestPhotos,
  heroPhotos,
  iconicDestinations,
  iconicHeader,
  type CaptionTileId,
  type Localized,
} from "../data";

type Lang = "en" | "id";

/* ────────────────────────────────────────────────
   Hero strip — exact figma columns (240/300/370),
   h537, gap 28, slow marquee, bleeds both edges
   ──────────────────────────────────────────────── */
interface HeroCol {
  w: string;
  center?: boolean;
  imgs: { i: number; h: string }[];
  pt?: string;
}

const heroCols: HeroCol[] = [
  {
    w: "w-[240px]",
    center: true,
    imgs: [{ i: 0, h: "h-[320px]" }],
  },
  {
    w: "w-[300px]",
    pt: "pt-[29px]",
    imgs: [
      { i: 1, h: "h-[240px]" },
      { i: 2, h: "h-[240px]" },
    ],
  },
  {
    w: "w-[370px]",
    center: true,
    imgs: [{ i: 3, h: "h-[440px]" }],
  },
  {
    w: "w-[300px]",
    imgs: [
      { i: 4, h: "h-[169px]" },
      { i: 5, h: "h-[340px]" },
    ],
  },
  {
    w: "w-[240px]",
    center: true,
    imgs: [{ i: 6, h: "h-[320px]" }],
  },
  {
    w: "w-[300px]",
    pt: "pt-[29px]",
    imgs: [
      { i: 7, h: "h-[240px]" },
      { i: 8, h: "h-[240px]" },
    ],
  },
  {
    w: "w-[370px]",
    center: true,
    imgs: [{ i: 9, h: "h-[440px]" }],
  },
  {
    w: "w-[300px]",
    imgs: [
      { i: 10, h: "h-[169px]" },
      { i: 11, h: "h-[340px]" },
    ],
  },
];

function HeroStrip() {
  return (
    <div className="relative h-[537px] overflow-hidden">
      <div className="flex w-max animate-[gallery-marquee_70s_linear_infinite] gap-7">
        {[0, 1].map((dup) => (
          <div
            key={dup}
            className="flex h-[537px] gap-7 pr-7"
            aria-hidden={dup === 1}
          >
            {heroCols.map((col, ci) => (
              <div
                key={ci}
                className={`flex flex-shrink-0 flex-col gap-7 ${col.w} ${
                  col.center ? "justify-center" : ""
                } ${col.pt ?? ""}`}
              >
                {col.imgs.map(({ i, h }) => (
                  <img
                    key={i}
                    src={heroPhotos[i]}
                    alt=""
                    loading={dup === 0 && i < 4 ? "eager" : "lazy"}
                    className={`w-full rounded-2xl object-cover ${h}`}
                  />
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────
   Bento grids — figma fixed grid: 4 units of 329px,
   gap 12. sq=1x1, wide=2x1, tall=1x2, big=2x2
   ──────────────────────────────────────────────── */
type Cell =
  | { kind: "photo"; index: number; span: "sq" | "wide" | "tall" | "big" }
  | { kind: "tile"; id: CaptionTileId };

const spanClass: Record<"sq" | "wide" | "tall" | "big", string> = {
  sq: "",
  wide: "col-span-2",
  tall: "row-span-2",
  big: "col-span-2 row-span-2",
};

/* Mobile (figma 393): 2-col grid, 20px gutters, 13px gap.
   full = 353x200, big = 353x353, half = 170x170 */
type MobileCell =
  | { kind: "photo"; index: number; size: "full" | "big" | "half" }
  | { kind: "tile"; id: CaptionTileId };

const mobileSizeClass: Record<"full" | "big" | "half", string> = {
  full: "col-span-2 aspect-[353/200]",
  big: "col-span-2 aspect-square",
  half: "aspect-square",
};

function BentoGrid({
  cells,
  mobileCells,
  lang,
}: {
  cells: Cell[];
  mobileCells: MobileCell[];
  lang: Lang;
}) {
  const [activePhoto, setActivePhoto] = useState<number | null>(null);

  return (
    <>
      {/* Mobile + tablet stack — figma frame 175/176/177 */}
      <div className="grid grid-cols-2 gap-[13px] lg:hidden">
        {mobileCells.map((cell, i) => {
          if (cell.kind === "photo") {
            const photo = guestPhotos[cell.index];
            const isActive = activePhoto === cell.index;

            return (
              <button
                type="button"
                key={i}
                aria-label={`${photo.title[lang]}. ${photo.caption[lang]}`}
                aria-pressed={isActive}
                onClick={() => setActivePhoto(isActive ? null : cell.index)}
                className={`group relative cursor-pointer overflow-hidden rounded-2xl text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-savana-600 ${mobileSizeClass[cell.size]}`}
              >
                <Image
                  src={photo.image}
                  alt={photo.title[lang]}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div
                  aria-hidden="true"
                  className={`absolute inset-x-0 bottom-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/60 to-transparent p-3 text-white transition-opacity duration-300 ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <p className="text-[10px] leading-3 font-medium text-white/90 sm:text-xs sm:leading-4">
                    {photo.title[lang]}
                  </p>
                  <p className="mt-1 text-[11px] leading-4 font-bold text-white sm:text-sm sm:leading-5">
                    {photo.caption[lang]}
                  </p>
                </div>
              </button>
            );
          }

          const tile = captionTiles[cell.id];

          return (
            <div
              key={cell.id}
              className="relative aspect-square overflow-hidden rounded-2xl p-3 sm:p-5"
            >
              <Image
                src={tile.image}
                alt=""
                fill
                sizes="50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,#DED6B1_30%,rgba(222,214,177,0.45)_100%)] backdrop-blur-[15px]" />
              <p className="relative z-10 text-[11px] leading-4 text-savana-800 sm:text-base sm:leading-6">
                {tile.caption[lang].map((segment, segmentIndex) =>
                  segment.strong ? (
                    <strong key={segmentIndex} className="font-extrabold">
                      {segment.text}
                    </strong>
                  ) : (
                    <span key={segmentIndex}>{segment.text}</span>
                  )
                )}
              </p>
            </div>
          );
        })}
      </div>

      {/* Desktop bento */}
      <div className="hidden auto-rows-[calc((min(100vw,1512px)-160px-36px)/4)] grid-cols-4 gap-3 lg:grid">
        {cells.map((cell, i) => {
          if (cell.kind === "photo") {
            const photo = guestPhotos[cell.index];
            const isActive = activePhoto === cell.index;
            const isCompact = cell.span === "sq";

            return (
              <button
                type="button"
                key={i}
                aria-label={`${photo.title[lang]}. ${photo.caption[lang]}`}
                aria-pressed={isActive}
                onClick={() => setActivePhoto(isActive ? null : cell.index)}
                className={`group relative cursor-pointer overflow-hidden rounded-[20px] text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-savana-600 ${spanClass[cell.span]}`}
              >
                <Image
                  src={photo.image}
                  alt={photo.title[lang]}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                />
                <div
                  aria-hidden="true"
                  className={`absolute inset-x-0 bottom-0 flex h-[100px] flex-col justify-end bg-gradient-to-t from-black/80 via-black/60 to-transparent p-3 text-white transition-[opacity,transform,backdrop-filter] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none xl:p-5 ${
                    isActive
                      ? "translate-y-0 opacity-100 backdrop-blur-[1px]"
                      : "translate-y-3 opacity-0 backdrop-blur-none group-hover:translate-y-0 group-hover:opacity-100 group-hover:backdrop-blur-[1px] group-focus-visible:translate-y-0 group-focus-visible:opacity-100 group-focus-visible:backdrop-blur-[1px]"
                  }`}
                >
                  <p
                    className={`${
                      isCompact
                        ? "text-[9px] leading-3 md:text-[10px] md:leading-4 xl:text-xs"
                        : "text-[10px] leading-4 md:text-xs xl:text-sm xl:leading-5"
                    } font-medium text-white/90`}
                  >
                    {photo.title[lang]}
                  </p>
                  <p
                    className={`${
                      isCompact
                        ? "text-[10px] leading-[14px] md:text-xs md:leading-4 xl:text-sm xl:leading-5"
                        : "text-xs leading-4 md:text-sm md:leading-5 xl:text-base xl:leading-6"
                    } mt-1 font-bold text-white`}
                  >
                    {photo.caption[lang]}
                  </p>
                </div>
              </button>
            );
          }

          const tile = captionTiles[cell.id];

          return (
            <div
              key={cell.id}
              className="relative flex flex-col items-start gap-3 overflow-hidden rounded-[20px] px-5 py-6 xl:px-6 xl:py-7"
            >
              <Image
                src={tile.image}
                alt=""
                fill
                sizes="(min-width: 1280px) 329px, 25vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,#DED6B1_30%,rgba(222,214,177,0.45)_100%)] backdrop-blur-[15px]" />
              <p className="relative z-10 text-sm leading-5 text-savana-800 xl:text-base xl:leading-6 2xl:text-lg 2xl:leading-7">
                {tile.caption[lang].map((segment, segmentIndex) =>
                  segment.strong ? (
                    <strong key={segmentIndex} className="font-extrabold">
                      {segment.text}
                    </strong>
                  ) : (
                    <span key={segmentIndex}>{segment.text}</span>
                  )
                )}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}

/* Figma Frame 175 — bento A: 6 photos + 3 tiles */
const bentoA: Cell[] = [
  { kind: "photo", index: 0, span: "wide" },
  { kind: "tile", id: "a1" },
  { kind: "photo", index: 1, span: "sq" },
  { kind: "tile", id: "a2" },
  { kind: "photo", index: 2, span: "sq" },
  { kind: "photo", index: 4, span: "tall" },
  { kind: "photo", index: 5, span: "sq" },
  { kind: "photo", index: 3, span: "wide" },
  { kind: "tile", id: "a3" },
];

/* Figma Frame 176 — bento B: 5 photos + 2 tiles */
const bentoB: Cell[] = [
  { kind: "photo", index: 6, span: "tall" },
  { kind: "tile", id: "b1" },
  { kind: "photo", index: 8, span: "big" },
  { kind: "photo", index: 7, span: "sq" },
  { kind: "photo", index: 9, span: "wide" },
  { kind: "photo", index: 10, span: "sq" },
  { kind: "tile", id: "b2" },
];

/* Figma Frame 177 — bento C: 5 photos + 2 tiles */
const bentoC: Cell[] = [
  { kind: "photo", index: 11, span: "sq" },
  { kind: "tile", id: "c1" },
  { kind: "photo", index: 12, span: "wide" },
  { kind: "photo", index: 13, span: "big" },
  { kind: "photo", index: 14, span: "sq" },
  { kind: "photo", index: 15, span: "tall" },
  { kind: "tile", id: "c2" },
];

/* Mobile counterparts — figma 393 frames 175/176/177 */
const bentoAMobile: MobileCell[] = [
  { kind: "photo", index: 0, size: "full" },
  { kind: "tile", id: "a1" },
  { kind: "photo", index: 1, size: "half" },
  { kind: "photo", index: 4, size: "big" },
  { kind: "photo", index: 3, size: "full" },
  { kind: "photo", index: 2, size: "half" },
  { kind: "tile", id: "a2" },
];

const bentoBMobile: MobileCell[] = [
  { kind: "tile", id: "b1" },
  { kind: "photo", index: 7, size: "half" },
  { kind: "photo", index: 8, size: "big" },
  { kind: "photo", index: 9, size: "full" },
  { kind: "photo", index: 10, size: "half" },
  { kind: "tile", id: "b2" },
];

const bentoCMobile: MobileCell[] = [
  { kind: "photo", index: 11, size: "half" },
  { kind: "tile", id: "c1" },
  { kind: "photo", index: 12, size: "full" },
  { kind: "photo", index: 13, size: "big" },
  { kind: "tile", id: "c2" },
  { kind: "photo", index: 14, size: "half" },
  { kind: "photo", index: 15, size: "big" },
];

/* ────────────────────────────────────────────────
   Full-bleed feature image — no rounding, radial
   shadow bottom-left, label + caption (figma 850h)
   ──────────────────────────────────────────────── */
function FeatureImage({
  desktop,
  mobile,
  label,
  caption,
  lang,
}: {
  desktop: string;
  mobile: string;
  label: Localized;
  caption: Localized;
  lang: Lang;
}) {
  return (
    <div className="relative h-[900px] w-full overflow-hidden sm:h-[600px] lg:h-[850px]">
      <Image
        src={desktop}
        alt=""
        fill
        sizes="100vw"
        className="hidden object-cover sm:block"
      />
      <Image
        src={mobile}
        alt=""
        fill
        sizes="100vw"
        className="object-cover sm:hidden"
      />
      {/* Radial shadow bottom-left */}
      <div className="absolute bottom-0 left-0 h-2/3 w-full bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,0,0,0.65)_0%,transparent_60%)]" />
      <div className="absolute bottom-12 left-5 max-w-md sm:bottom-10 sm:left-6 lg:bottom-16 lg:left-20">
        <p className="mb-1 text-sm text-white/80">{label[lang]}</p>
        <p className="text-base leading-6 font-semibold text-white sm:text-lg sm:leading-snug lg:text-2xl">
          {caption[lang]}
        </p>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────
   Iconic destinations — featured 592w + 5 narrow
   140x400 cards, gap 12 (figma exact)
   ──────────────────────────────────────────────── */
function IconicCarousel({ lang }: { lang: Lang }) {
  const [start, setStart] = useState(0);
  const startRef = useRef(0);
  const mobileSwiperRef = useRef<SwiperRef>(null);
  const desktopCardsRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const animationFrameRef = useRef<number | null>(null);
  const total = iconicDestinations.length;

  const animateTo = (nextIndex: number) => {
    startRef.current = nextIndex;

    if (window.innerWidth < 1024) {
      setStart(nextIndex);
      return;
    }

    if (animationFrameRef.current !== null) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    const cards = desktopCardsRef.current;
    const initialGrow = cards.map((card) =>
      card ? Number.parseFloat(getComputedStyle(card).flexGrow) : 1
    );
    cards.forEach((card, index) => {
      if (card) card.style.flexGrow = String(initialGrow[index]);
    });
    setStart(nextIndex);
    const activeGrow =
      window.innerWidth >= 1536
        ? 4.23
        : window.innerWidth >= 1280
          ? 3.85
          : 3.05;
    const targetGrow = cards.map((_, index) =>
      index === nextIndex ? activeGrow : 1
    );
    const duration = window.matchMedia("(prefers-reduced-motion: reduce)")
      .matches
      ? 360
      : 520;
    let startedAt: number | null = null;

    const tick = (now: number) => {
      startedAt ??= now;
      const progress = Math.min((now - startedAt) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);

      cards.forEach((card, index) => {
        if (!card) return;
        const grow =
          initialGrow[index] + (targetGrow[index] - initialGrow[index]) * eased;
        card.style.flexGrow = String(grow);
      });

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(tick);
        return;
      }

      cards.forEach((card) => card?.style.removeProperty("flex-grow"));
      animationFrameRef.current = null;
    };

    animationFrameRef.current = requestAnimationFrame(tick);
  };

  const prev = () => {
    if (window.innerWidth < 1024 && mobileSwiperRef.current) {
      mobileSwiperRef.current.swiper.slidePrev();
      return;
    }

    animateTo((startRef.current - 1 + total) % total);
  };

  const next = () => {
    if (window.innerWidth < 1024 && mobileSwiperRef.current) {
      mobileSwiperRef.current.swiper.slideNext();
      return;
    }

    animateTo((startRef.current + 1) % total);
  };

  const handleMobileSlideChange = (swiper: SwiperClass) => {
    startRef.current = swiper.realIndex;
    setStart(swiper.realIndex);
  };

  useEffect(
    () => () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    },
    []
  );

  const selectDestination = (
    event: MouseEvent<HTMLAnchorElement>,
    index: number
  ) => {
    if (index === startRef.current) return;

    event.preventDefault();
    animateTo(index);
  };

  return (
    <div>
      <div className="mb-6 flex items-end justify-between gap-4 lg:mb-12">
        <div>
          <p className="mb-1 text-sm font-normal text-savana-600 lg:mb-2">
            {iconicHeader.eyebrow[lang]}
          </p>
          <h2 className="text-2xl leading-tight text-savana-800 lg:text-4xl">
            <span className="font-light">{iconicHeader.head1[lang]}</span>
            <span className="font-semibold">{iconicHeader.head2[lang]}</span>
          </h2>
        </div>
        <div className="hidden flex-shrink-0 gap-5 lg:flex">
          <button
            onClick={prev}
            aria-label="Previous destination"
            className="carousel-chevron-overlay flex h-[52px] w-[52px] items-center justify-center transition-colors"
          >
            <IoChevronBack size={36} />
          </button>
          <button
            onClick={next}
            aria-label="Next destination"
            className="carousel-chevron-overlay flex h-[52px] w-[52px] items-center justify-center transition-colors"
          >
            <IoChevronForward size={36} />
          </button>
        </div>
      </div>

      <div className="relative -mr-5 lg:hidden">
        <Swiper
          ref={mobileSwiperRef}
          modules={[A11y]}
          loop
          grabCursor
          slidesPerView="auto"
          spaceBetween={12}
          speed={500}
          threshold={6}
          slidesOffsetAfter={20}
          onRealIndexChange={handleMobileSlideChange}
          className="!overflow-visible"
        >
          {iconicDestinations.map((dest, index) => (
            <SwiperSlide
              key={dest.slug}
              className="!h-auto !w-[calc(100%_-_28px)] max-w-[380px]"
            >
              <Link
                href={`/destination/${dest.slug}`}
                aria-current={index === start ? "true" : undefined}
                className="group relative block aspect-[340/520] w-full overflow-hidden rounded-[20px]"
              >
                <Image
                  src={`${dest.image}-Desktop.webp`}
                  alt={dest.title[lang]}
                  fill
                  sizes="(max-width: 640px) calc(100vw - 48px), 380px"
                  loading={index === start ? "eager" : "lazy"}
                  className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.025] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute right-5 bottom-5 left-5 text-left text-white">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full">
                    <NewIcon name={dest.icon} size={24} />
                  </div>
                  <h3 className="text-lg font-semibold underline-offset-4 group-hover:underline">
                    {dest.title[lang]}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-white/85">
                    {dest.caption[lang]}
                  </p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          type="button"
          onClick={prev}
          aria-label="Previous destination"
          className="carousel-chevron-overlay absolute top-1/2 -left-2 z-20 flex h-[52px] w-[52px] -translate-y-1/2 items-center justify-center transition-colors"
        >
          <IoChevronBack size={22} />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Next destination"
          className="carousel-chevron-overlay absolute top-1/2 right-4 z-20 flex h-[52px] w-[52px] -translate-y-1/2 items-center justify-center transition-colors"
        >
          <IoChevronForward size={22} />
        </button>
      </div>

      {/* Desktop accordion: the active card expands in its own position. */}
      <div className="hidden h-[400px] items-stretch gap-3 lg:flex">
        {iconicDestinations.map((dest, index) => {
          const isActive = index === start;

          return (
            <Link
              key={dest.slug}
              ref={(element) => {
                desktopCardsRef.current[index] = element;
              }}
              href={`/destination/${dest.slug}`}
              onClick={(event) => selectDestination(event, index)}
              aria-current={isActive ? "true" : undefined}
              aria-label={
                isActive
                  ? `Open ${dest.title[lang]}`
                  : `Feature ${dest.title[lang]}`
              }
              className={`group relative min-w-0 basis-0 overflow-hidden rounded-[20px] ${
                isActive ? "grow-[3.05] xl:grow-[3.85] 2xl:grow-[4.23]" : "grow"
              }`}
            >
              <Image
                src={`${dest.image}-Desktop.webp`}
                alt={dest.title[lang]}
                fill
                loading={isActive ? "eager" : "lazy"}
                sizes={
                  isActive
                    ? "(min-width: 1536px) 592px, (min-width: 1024px) 45vw, 380px"
                    : "140px"
                }
                className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.025] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t transition-colors duration-500 motion-reduce:transition-none ${
                  isActive
                    ? "from-black/80 via-black/20 to-transparent"
                    : "from-black/90 via-black/50 to-black/50"
                }`}
              />
              <div className="absolute right-3 bottom-4 left-3 text-left text-white">
                <div className="flex h-10 w-10 items-center justify-center rounded-full">
                  <NewIcon name={dest.icon} size={24} />
                </div>
                <h3
                  className={`font-semibold underline-offset-4 group-hover:underline ${
                    isActive ? "text-lg" : "text-sm text-white/70"
                  }`}
                >
                  {dest.title[lang]}
                </h3>
                <p
                  className={`mt-1 overflow-hidden text-white/80 transition-[max-height,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
                    isActive
                      ? "max-h-20 text-sm opacity-100"
                      : "line-clamp-2 max-h-8 text-[11px] leading-snug text-white/40 opacity-80"
                  }`}
                >
                  {dest.caption[lang]}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────── */

export default function GalleryContent() {
  const { lang } = useLang();

  return (
    <>
      {/* Header */}
      <section className="bg-savana-050 pt-[60px] pb-[60px]">
        <div className="mx-auto max-w-[1512px] px-5 text-center lg:px-20">
          <h1 className="text-4xl font-semibold text-savana-800 lg:text-5xl">
            {galleryHeader.title[lang]}
          </h1>
          <p className="mx-auto mt-2 max-w-2xl text-base text-pale-savana-500 lg:text-lg">
            {galleryHeader.subtitle[lang]}
          </p>
        </div>
      </section>

      {/* Hero photo strip — no bottom padding, flows straight into the band (figma) */}
      <section className="overflow-hidden bg-savana-050 pb-10">
        <HeroStrip />
      </section>

      {/* Iconic destinations — savana band */}
      <section className="overflow-hidden bg-savana-200 pt-[60px] pb-[120px] lg:py-[60px]">
        <div className="mx-auto max-w-[1512px] px-5 lg:px-20">
          <IconicCarousel lang={lang} />
        </div>
      </section>

      {/* Bento A */}
      <section className="bg-savana-050 pt-[120px]">
        <div className="mx-auto max-w-[1512px] px-5 lg:px-20">
          <BentoGrid cells={bentoA} mobileCells={bentoAMobile} lang={lang} />
        </div>
      </section>

      {/* Feature — Mbaru Niang (full bleed) */}
      <section className="bg-savana-050 py-5 sm:py-[60px] lg:py-[120px]">
        <FeatureImage
          desktop={featureMbaruNiang.desktop}
          mobile={featureMbaruNiang.mobile}
          label={featureMbaruNiang.label}
          caption={featureMbaruNiang.caption}
          lang={lang}
        />
      </section>

      {/* Bento B */}
      <section className="bg-savana-050">
        <div className="mx-auto max-w-[1512px] px-5 lg:px-20">
          <BentoGrid cells={bentoB} mobileCells={bentoBMobile} lang={lang} />
        </div>
      </section>

      {/* Feature — Ikat weaving (full bleed) */}
      <section className="bg-savana-050 py-5 sm:py-[60px] lg:py-[120px]">
        <FeatureImage
          desktop={featureIkat.desktop}
          mobile={featureIkat.mobile}
          label={featureIkat.label}
          caption={featureIkat.caption}
          lang={lang}
        />
      </section>

      {/* Bento C */}
      <section className="bg-savana-050 pb-[120px]">
        <div className="mx-auto max-w-[1512px] px-5 lg:px-20">
          <BentoGrid cells={bentoC} mobileCells={bentoCMobile} lang={lang} />
        </div>
      </section>
    </>
  );
}
