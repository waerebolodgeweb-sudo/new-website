"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
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
    w: "w-[132px] lg:w-[240px]",
    center: true,
    imgs: [{ i: 0, h: "h-[176px] lg:h-[320px]" }],
  },
  {
    w: "w-[165px] lg:w-[300px]",
    pt: "pt-4 lg:pt-[29px]",
    imgs: [
      { i: 1, h: "h-[132px] lg:h-[240px]" },
      { i: 2, h: "h-[132px] lg:h-[240px]" },
    ],
  },
  {
    w: "w-[204px] lg:w-[370px]",
    center: true,
    imgs: [{ i: 3, h: "h-[242px] lg:h-[440px]" }],
  },
  {
    w: "w-[165px] lg:w-[300px]",
    imgs: [
      { i: 4, h: "h-[93px] lg:h-[169px]" },
      { i: 5, h: "h-[187px] lg:h-[340px]" },
    ],
  },
  {
    w: "w-[132px] lg:w-[240px]",
    center: true,
    imgs: [{ i: 6, h: "h-[176px] lg:h-[320px]" }],
  },
  {
    w: "w-[165px] lg:w-[300px]",
    pt: "pt-4 lg:pt-[29px]",
    imgs: [
      { i: 7, h: "h-[132px] lg:h-[240px]" },
      { i: 8, h: "h-[132px] lg:h-[240px]" },
    ],
  },
  {
    w: "w-[204px] lg:w-[370px]",
    center: true,
    imgs: [{ i: 9, h: "h-[242px] lg:h-[440px]" }],
  },
  {
    w: "w-[165px] lg:w-[300px]",
    imgs: [
      { i: 10, h: "h-[93px] lg:h-[169px]" },
      { i: 11, h: "h-[187px] lg:h-[340px]" },
    ],
  },
];

function HeroStrip() {
  return (
    <div className="relative h-[295px] overflow-hidden lg:h-[537px]">
      <div className="flex w-max animate-[gallery-marquee_70s_linear_infinite] gap-4 lg:gap-7">
        {[0, 1].map((dup) => (
          <div
            key={dup}
            className="flex h-[295px] gap-4 pr-4 lg:h-[537px] lg:gap-7 lg:pr-7"
            aria-hidden={dup === 1}
          >
            {heroCols.map((col, ci) => (
              <div
                key={ci}
                className={`flex flex-shrink-0 flex-col gap-4 lg:gap-7 ${col.w} ${
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
  | { kind: "tile"; index: number };

const spanClass: Record<"sq" | "wide" | "tall" | "big", string> = {
  sq: "",
  wide: "col-span-2",
  tall: "row-span-2",
  big: "col-span-2 row-span-2",
};

function BentoGrid({ cells, lang }: { cells: Cell[]; lang: Lang }) {
  return (
    <div className="grid grid-cols-2 gap-3 auto-rows-[calc((100vw-48px-12px)/2)] sm:auto-rows-[calc((100vw-48px-36px)/4)] lg:grid-cols-4 lg:auto-rows-[calc(min(100vw,1512px)/4.6)]">
      {cells.map((cell, i) =>
        cell.kind === "photo" ? (
          <div
            key={i}
            className={`relative overflow-hidden rounded-[20px] ${spanClass[cell.span]}`}
          >
            <Image
              src={guestPhotos[cell.index]}
              alt=""
              fill
              sizes="(min-width: 1024px) 25vw, 50vw"
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        ) : (
          <div
            key={i}
            className="flex items-center overflow-hidden rounded-[20px] bg-savana-200/60 p-5 lg:p-6"
          >
            <p className="text-xs leading-relaxed text-pale-savana-500 sm:text-sm">
              {captionTiles[cell.index][lang]}
            </p>
          </div>
        )
      )}
    </div>
  );
}

/* Figma Frame 175 — bento A: 6 photos + 3 tiles */
const bentoA: Cell[] = [
  { kind: "photo", index: 0, span: "wide" },
  { kind: "tile", index: 0 },
  { kind: "photo", index: 1, span: "sq" },
  { kind: "tile", index: 1 },
  { kind: "photo", index: 2, span: "sq" },
  { kind: "photo", index: 4, span: "tall" },
  { kind: "photo", index: 5, span: "sq" },
  { kind: "photo", index: 3, span: "wide" },
  { kind: "tile", index: 2 },
];

/* Figma Frame 176 — bento B: 5 photos + 2 tiles */
const bentoB: Cell[] = [
  { kind: "photo", index: 6, span: "tall" },
  { kind: "tile", index: 3 },
  { kind: "photo", index: 8, span: "big" },
  { kind: "photo", index: 7, span: "sq" },
  { kind: "photo", index: 9, span: "wide" },
  { kind: "photo", index: 10, span: "sq" },
  { kind: "tile", index: 4 },
];

/* Figma Frame 177 — bento C: 5 photos + 2 tiles */
const bentoC: Cell[] = [
  { kind: "photo", index: 11, span: "sq" },
  { kind: "tile", index: 5 },
  { kind: "photo", index: 12, span: "wide" },
  { kind: "photo", index: 13, span: "big" },
  { kind: "photo", index: 14, span: "sq" },
  { kind: "photo", index: 15, span: "tall" },
  { kind: "tile", index: 6 },
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
    <div className="relative h-[420px] w-full overflow-hidden sm:h-[600px] lg:h-[850px]">
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
      <div className="absolute bottom-10 left-6 max-w-md lg:bottom-16 lg:left-20">
        <p className="mb-1 text-sm text-white/80">{label[lang]}</p>
        <p className="text-lg leading-snug font-semibold text-white lg:text-2xl">
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
      <div className="mb-12 flex items-end justify-between gap-4">
        <div>
          <p className="mb-2 text-sm font-normal text-savana-600">
            {iconicHeader.eyebrow[lang]}
          </p>
          <h2 className="text-3xl leading-tight text-savana-800 lg:text-4xl">
            <span className="font-light">{iconicHeader.head1[lang]}</span>
            <span className="font-semibold">{iconicHeader.head2[lang]}</span>
          </h2>
        </div>
        <div className="flex flex-shrink-0 gap-5">
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

      <div className="flex gap-3">
        {/* Featured — all images stacked, crossfade on change */}
        <div className="relative h-[300px] flex-1 overflow-hidden rounded-[20px] lg:h-[400px]">
          {iconicDestinations.map((dest, i) => (
            <Image
              key={dest.title}
              src={`${dest.image}-Desktop.webp`}
              alt={dest.title}
              fill
              sizes="(min-width: 1024px) 592px, 100vw"
              className={`object-cover transition-all duration-700 ease-out ${
                i === start ? "scale-100 opacity-100" : "scale-105 opacity-0"
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <Link
            href={`/destination/${featured.slug}`}
            key={featured.title}
            className="iconic-fade absolute bottom-5 left-5 max-w-md"
          >
            <h3 className="text-lg font-semibold text-white underline-offset-4 hover:underline">
              {featured.title}
            </h3>
            <p className="mt-1 text-sm text-white/85">
              {featured.caption[lang]}
            </p>
          </Link>
        </div>

        {/* 5 narrow cards — 140x400, desktop only, re-animate on change */}
        <div key={start} className="iconic-fade hidden gap-3 lg:flex">
          {rest.map((dest) => (
            <button
              key={dest.title}
              onClick={next}
              className="group relative h-[400px] w-[140px] flex-shrink-0 overflow-hidden rounded-[20px]"
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
                <p className="text-sm font-semibold text-white">{dest.title}</p>
                <p className="mt-0.5 line-clamp-2 text-[11px] leading-snug text-white/75">
                  {dest.caption[lang]}
                </p>
              </div>
            </button>
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
      <section className="bg-neutral-050 pt-10 pb-10 lg:pt-[60px] lg:pb-[60px]">
        <div className="mx-auto max-w-[1512px] px-6 text-center lg:px-20">
          <h1 className="text-4xl font-semibold text-savana-800 lg:text-5xl">
            {galleryHeader.title[lang]}
          </h1>
          <p className="mx-auto mt-2 max-w-2xl text-base text-pale-savana-500 lg:text-lg">
            {galleryHeader.subtitle[lang]}
          </p>
        </div>
      </section>

      {/* Hero photo strip */}
      <section className="overflow-hidden bg-neutral-050 pb-10 lg:pb-[60px]">
        <HeroStrip />
      </section>

      {/* Iconic destinations — savana band */}
      <section className="bg-savana-200 py-[60px]">
        <div className="mx-auto max-w-[1512px] px-6 lg:px-20">
          <IconicCarousel lang={lang} />
        </div>
      </section>

      {/* Bento A */}
      <section className="bg-neutral-050 pt-[60px] lg:pt-[120px]">
        <div className="mx-auto max-w-[1512px] px-6 lg:px-20">
          <BentoGrid cells={bentoA} lang={lang} />
        </div>
      </section>

      {/* Feature — Mbaru Niang (full bleed) */}
      <section className="bg-neutral-050 py-[60px] lg:py-[120px]">
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
        <div className="mx-auto max-w-[1512px] px-6 lg:px-20">
          <BentoGrid cells={bentoB} lang={lang} />
        </div>
      </section>

      {/* Feature — Ikat weaving (full bleed) */}
      <section className="bg-neutral-050 py-[60px] lg:py-[120px]">
        <FeatureImage
          desktop={featureIkat.desktop}
          mobile={featureIkat.mobile}
          label={featureIkat.label}
          caption={featureIkat.caption}
          lang={lang}
        />
      </section>

      {/* Bento C */}
      <section className="bg-neutral-050 pb-[60px] lg:pb-[120px]">
        <div className="mx-auto max-w-[1512px] px-6 lg:px-20">
          <BentoGrid cells={bentoC} lang={lang} />
        </div>
      </section>
    </>
  );
}
