"use client";

import Image from "next/image";
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

function CaptionTile({ text, lang }: { text: Localized; lang: Lang }) {
  return (
    <div className="flex items-center rounded-[20px] bg-savana-200/60 p-6">
      <p className="text-sm leading-relaxed text-pale-savana-500">
        {text[lang]}
      </p>
    </div>
  );
}

function Photo({ src, className }: { src: string; className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-[20px] ${className ?? ""}`}>
      <Image
        src={src}
        alt=""
        fill
        sizes="(min-width: 1024px) 33vw, 100vw"
        className="object-cover transition-transform duration-500 hover:scale-105"
      />
    </div>
  );
}

function FeatureImage({
  desktop,
  mobile,
  caption,
  lang,
}: {
  desktop: string;
  mobile: string;
  caption: Localized;
  lang: Lang;
}) {
  return (
    <div className="relative h-[320px] overflow-hidden rounded-[24px] sm:h-[420px] lg:h-[520px]">
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
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
      <p className="absolute bottom-6 left-6 max-w-md text-lg font-semibold text-white [text-shadow:0_4px_8px_rgba(0,0,0,0.4)] lg:text-2xl">
        {caption[lang]}
      </p>
    </div>
  );
}

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
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <p className="mb-2 text-sm font-normal text-savana-600">
            {iconicHeader.eyebrow[lang]}
          </p>
          <h2 className="text-3xl leading-tight text-savana-800 lg:text-4xl">
            <span className="font-light">{iconicHeader.head1[lang]}</span>
            <span className="font-semibold">{iconicHeader.head2[lang]}</span>
          </h2>
        </div>
        <div className="flex flex-shrink-0 gap-2.5">
          <button
            onClick={prev}
            aria-label="Previous destination"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-savana-500 shadow-sm transition-colors hover:text-savana-800"
          >
            <IoChevronBack size={20} />
          </button>
          <button
            onClick={next}
            aria-label="Next destination"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-savana-500 shadow-sm transition-colors hover:text-savana-800"
          >
            <IoChevronForward size={20} />
          </button>
        </div>
      </div>

      <div className="flex gap-4 lg:gap-5">
        {/* Featured */}
        <div className="relative h-[300px] flex-1 overflow-hidden rounded-[20px] lg:h-[360px]">
          <Image
            src={`${featured.image}-Desktop.webp`}
            alt={featured.title}
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          <div className="absolute bottom-5 left-5 max-w-sm">
            <h3 className="text-xl font-semibold text-white">
              {featured.title}
            </h3>
            <p className="mt-1 text-sm text-white/85">{featured.caption[lang]}</p>
          </div>
        </div>

        {/* Rest — narrow cards, desktop only */}
        <div className="hidden gap-4 lg:flex">
          {rest.map((dest) => (
            <button
              key={dest.title}
              onClick={next}
              className="group relative h-[360px] w-[120px] overflow-hidden rounded-[20px]"
            >
              <Image
                src={`${dest.image}-Desktop.webp`}
                alt={dest.title}
                fill
                sizes="120px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <p className="absolute bottom-4 left-3 right-2 text-left text-sm font-semibold text-white">
                {dest.title}
              </p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function GalleryContent() {
  const { lang } = useLang();

  return (
    <>
      {/* Header */}
      <section className="bg-neutral-050 pt-10 pb-8 lg:pt-16">
        <div className="mx-auto max-w-[1512px] px-6 text-center lg:px-20">
          <h1 className="text-4xl font-semibold text-savana-800 lg:text-5xl">
            {galleryHeader.title[lang]}
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-base text-pale-savana-500">
            {galleryHeader.subtitle[lang]}
          </p>
        </div>
      </section>

      {/* Hero photo cluster */}
      <section className="bg-neutral-050 pb-14">
        <div className="mx-auto max-w-[1512px] px-6 lg:px-20">
          <div className="grid auto-rows-[140px] grid-cols-2 gap-4 sm:auto-rows-[180px] lg:grid-cols-4">
            <Photo src={heroPhotos[0]} className="row-span-2" />
            <Photo src={heroPhotos[1]} />
            <Photo src={heroPhotos[2]} className="row-span-2" />
            <Photo src={heroPhotos[3]} />
            <Photo src={heroPhotos[4]} />
            <Photo src={heroPhotos[5]} className="row-span-2" />
            <Photo src={heroPhotos[6]} />
          </div>
        </div>
      </section>

      {/* Iconic destinations carousel */}
      <section className="bg-savana-200/40 py-14 lg:py-16">
        <div className="mx-auto max-w-[1512px] px-6 lg:px-20">
          <IconicCarousel lang={lang} />
        </div>
      </section>

      {/* Bento grid A */}
      <section className="bg-neutral-050 pt-14">
        <div className="mx-auto max-w-[1512px] px-6 lg:px-20">
          <div className="grid auto-rows-[200px] grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-5">
            <Photo src={guestPhotos[0]} className="col-span-2 lg:col-span-1" />
            <CaptionTile text={captionTiles[0]} lang={lang} />
            <Photo src={guestPhotos[1]} />
            <CaptionTile text={captionTiles[1]} lang={lang} />
            <Photo src={guestPhotos[2]} />
            <Photo src={guestPhotos[3]} className="row-span-2" />
            <Photo src={guestPhotos[4]} className="col-span-2 lg:col-span-1" />
            <CaptionTile text={captionTiles[2]} lang={lang} />
          </div>
        </div>
      </section>

      {/* Feature — Mbaru Niang */}
      <section className="bg-neutral-050 py-14">
        <div className="mx-auto max-w-[1512px] px-6 lg:px-20">
          <FeatureImage
            desktop={featureMbaruNiang.desktop}
            mobile={featureMbaruNiang.mobile}
            caption={featureMbaruNiang.caption}
            lang={lang}
          />
        </div>
      </section>

      {/* Bento grid B */}
      <section className="bg-neutral-050 pb-14">
        <div className="mx-auto max-w-[1512px] px-6 lg:px-20">
          <div className="grid auto-rows-[200px] grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-5">
            <Photo src={guestPhotos[5]} />
            <Photo src={guestPhotos[6]} />
            <Photo src={guestPhotos[7]} className="row-span-2" />
            <CaptionTile text={captionTiles[3]} lang={lang} />
            <Photo src={guestPhotos[8]} />
            <Photo src={guestPhotos[9]} className="col-span-2 lg:col-span-1" />
            <Photo src={guestPhotos[10]} />
          </div>
        </div>
      </section>

      {/* Feature — Ikat weaving */}
      <section className="bg-neutral-050 pb-14">
        <div className="mx-auto max-w-[1512px] px-6 lg:px-20">
          <FeatureImage
            desktop={featureIkat.desktop}
            mobile={featureIkat.mobile}
            caption={featureIkat.caption}
            lang={lang}
          />
        </div>
      </section>

      {/* Bento grid C */}
      <section className="bg-neutral-050 pb-16">
        <div className="mx-auto max-w-[1512px] px-6 lg:px-20">
          <div className="grid auto-rows-[200px] grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-5">
            <Photo src={guestPhotos[11]} />
            <Photo src={guestPhotos[12]} className="col-span-2 lg:col-span-2" />
            <Photo src={guestPhotos[13]} />
            <Photo src={guestPhotos[14]} />
            <Photo src={guestPhotos[15]} />
          </div>
        </div>
      </section>
    </>
  );
}
