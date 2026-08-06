"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { NewIcon } from "@/components/icons/new-icons";
import { useLang } from "@/lib/i18n";
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
  const total = iconicDestinations.length;
  const prev = () => setStart((s) => (s - 1 + total) % total);
  const next = () => setStart((s) => (s + 1) % total);

  const featured = iconicDestinations[start];
  const rest = Array.from(
    { length: total - 1 },
    (_, i) => iconicDestinations[(start + 1 + i) % total]
  );

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
            className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-white text-savana-800 shadow-sm transition-colors hover:bg-savana-800 hover:text-white"
          >
            <IoChevronBack size={22} />
          </button>
          <button
            onClick={next}
            aria-label="Next destination"
            className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-white text-savana-800 shadow-sm transition-colors hover:bg-savana-800 hover:text-white"
          >
            <IoChevronForward size={22} />
          </button>
        </div>
      </div>

      <div className="flex items-stretch gap-3">
        {/* Featured — all images stacked, crossfade on change */}
        <div className="relative aspect-[340/560] w-[96%] max-w-[380px] flex-shrink-0 overflow-hidden rounded-[20px] lg:aspect-auto lg:h-[400px] lg:w-auto lg:max-w-none lg:flex-1">
          {iconicDestinations.map((dest, i) => (
            <Image
              key={dest.title}
              src={`${dest.image}-Desktop.webp`}
              alt={dest.title}
              fill
              sizes="(min-width: 1024px) 60vw, 380px"
              className={`object-cover transition-all duration-700 ease-out ${
                i === start ? "scale-100 opacity-100" : "scale-105 opacity-0"
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <Link
            href={`/destination/${featured.slug}`}
            key={featured.title}
            className="group iconic-fade absolute inset-0 z-10"
          >
            <div className="absolute bottom-5 left-5 max-w-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-full text-white backdrop-blur-sm">
                <NewIcon name={featured.icon} size={24} />
              </div>
              <h3 className="text-lg font-semibold text-white underline-offset-4 group-hover:underline">
                {featured.title}
              </h3>
              <p className="mt-1 text-sm text-white/85">
                {featured.caption[lang]}
              </p>
            </div>
          </Link>

          {/* Mobile arrows — overlaid on the featured card (figma) */}
          <button
            onClick={prev}
            aria-label="Previous destination"
            className="absolute top-1/2 -left-2 z-20 flex h-[52px] w-[52px] -translate-y-1/2 items-center justify-center rounded-full bg-white/25 text-white backdrop-blur-sm lg:hidden"
          >
            <IoChevronBack size={22} />
          </button>
          <button
            onClick={next}
            aria-label="Next destination"
            className="absolute top-1/2 right-0 z-20 flex h-[52px] w-[52px] -translate-y-1/2 items-center justify-center rounded-full bg-white/25 text-white backdrop-blur-sm lg:hidden"
          >
            <IoChevronForward size={22} />
          </button>
        </div>

        {/* 5 narrow cards — 160x560 mobile peek, 140x400 desktop.
            Card 4 & 5 disembunyikan di rentang lg/xl supaya featured tidak
            tergencet; full 5 kartu (figma 592w featured) muncul di 2xl. */}
        <div key={start} className="iconic-fade flex gap-3">
          {rest.map((dest, i) => (
            <Link
              key={dest.title}
              href={`/destination/${dest.slug}`}
              className={`group relative w-[160px] flex-shrink-0 overflow-hidden rounded-[20px] lg:h-[400px] lg:w-[140px] ${
                i === 3 ? "lg:hidden xl:block" : ""
              } ${i === 4 ? "lg:hidden 2xl:block" : ""}`}
            >
              <Image
                src={`${dest.image}-Desktop.webp`}
                alt={dest.title}
                fill
                sizes="140px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
              <div className="absolute right-2 bottom-4 left-3 text-left">
                <div className="flex h-10 w-10 items-center justify-center rounded-full text-white">
                  <NewIcon name={dest.icon} size={24} />
                </div>
                <p className="text-sm font-semibold text-white">{dest.title}</p>
                <p className="mt-0.5 line-clamp-2 text-[11px] leading-snug text-white/75">
                  {dest.caption[lang]}
                </p>
              </div>
            </Link>
          ))}
        </div>
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
      <section className="bg-neutral-050 pt-[60px] pb-[60px]">
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
      <section className="overflow-hidden bg-neutral-050">
        <HeroStrip />
      </section>

      {/* Iconic destinations — savana band */}
      <section className="overflow-hidden bg-savana-200 pt-[60px] pb-[120px] lg:py-[60px]">
        <div className="mx-auto max-w-[1512px] px-5 lg:px-20">
          <IconicCarousel lang={lang} />
        </div>
      </section>

      {/* Bento A */}
      <section className="bg-neutral-050 pt-[120px]">
        <div className="mx-auto max-w-[1512px] px-5 lg:px-20">
          <BentoGrid cells={bentoA} mobileCells={bentoAMobile} lang={lang} />
        </div>
      </section>

      {/* Feature — Mbaru Niang (full bleed) */}
      <section className="bg-neutral-050 py-5 sm:py-[60px] lg:py-[120px]">
        <FeatureImage
          desktop={featureMbaruNiang.desktop}
          mobile={featureMbaruNiang.mobile}
          label={featureMbaruNiang.label}
          caption={featureMbaruNiang.caption}
          lang={lang}
        />
      </section>

      {/* Bento B */}
      <section className="bg-neutral-050">
        <div className="mx-auto max-w-[1512px] px-5 lg:px-20">
          <BentoGrid cells={bentoB} mobileCells={bentoBMobile} lang={lang} />
        </div>
      </section>

      {/* Feature — Ikat weaving (full bleed) */}
      <section className="bg-neutral-050 py-5 sm:py-[60px] lg:py-[120px]">
        <FeatureImage
          desktop={featureIkat.desktop}
          mobile={featureIkat.mobile}
          label={featureIkat.label}
          caption={featureIkat.caption}
          lang={lang}
        />
      </section>

      {/* Bento C */}
      <section className="bg-neutral-050 pb-[120px]">
        <div className="mx-auto max-w-[1512px] px-5 lg:px-20">
          <BentoGrid cells={bentoC} mobileCells={bentoCMobile} lang={lang} />
        </div>
      </section>
    </>
  );
}
