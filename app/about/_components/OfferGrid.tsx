"use client";

import Image from "next/image";
import Link from "next/link";
import { IoArrowForwardOutline } from "react-icons/io5";
import { useLang } from "@/lib/i18n";

type TileKey =
  | "waerebo-village"
  | "pleas-waterfall"
  | "waerebo-lodge"
  | "hobbit-cave"
  | "waerebo-house"
  | "double-bed"
  | "nusa-molas"
  | "restaurant";

type Tile =
  | { kind: "image"; key: TileKey; src: string }
  | { kind: "quote" }
  | { kind: "spacer" };

const tiles: Tile[] = [
  { kind: "image", key: "waerebo-village", src: "/about/tile-waerebo-village.jpg" },
  { kind: "quote" },
  { kind: "image", key: "pleas-waterfall", src: "/about/tile-pleas-waterfall.jpg" },
  { kind: "image", key: "waerebo-lodge", src: "/about/tile-waerebo-lodge.jpg" },
  { kind: "spacer" },
  { kind: "image", key: "hobbit-cave", src: "/about/tile-hobbit-cave.jpg" },
  { kind: "image", key: "waerebo-house", src: "/about/tile-waerebo-house.jpg" },
  { kind: "image", key: "double-bed", src: "/about/tile-double-bed.jpg" },
  { kind: "image", key: "nusa-molas", src: "/about/tile-nusa-molas.jpg" },
  { kind: "spacer" },
  { kind: "image", key: "restaurant", src: "/about/tile-restaurant.jpg" },
];

function ImageTile({ tileKey, src }: { tileKey: TileKey; src: string }) {
  const { t } = useLang();
  const label = t(`about.tile.${tileKey}`);
  return (
    <div
      data-reveal
      className="group relative aspect-square overflow-hidden rounded-2xl shadow-sm"
    >
      <Image
        src={src}
        alt={label}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      <p className="absolute right-3 bottom-3 left-3 text-sm font-semibold text-white drop-shadow">
        {label}
      </p>
    </div>
  );
}

function QuoteCard() {
  const { t } = useLang();
  return (
    <div
      data-reveal
      className="relative flex aspect-square flex-col justify-end overflow-hidden rounded-2xl bg-neutral-900 p-5 lg:p-6"
    >
      <IoArrowForwardOutline
        size={22}
        className="absolute top-5 right-5 -rotate-45 text-pale-green-100"
      />
      <h3 className="mb-2 text-base font-bold text-cream-200 lg:text-lg">
        {t("about.offer.quote.heading")}
      </h3>
      <p className="text-[11px] leading-relaxed text-pale-green-100 lg:text-xs">
        {t("about.offer.quote.body")}
      </p>
    </div>
  );
}

export default function OfferGrid() {
  const { t } = useLang();

  return (
    <section id="offer" className="bg-white py-12 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-5">
          {/* Heading cell */}
          <div className="col-span-2 flex flex-col justify-center py-2 lg:col-span-1 lg:aspect-square">
            <p className="mb-3 text-[11px] font-semibold tracking-[0.2em] text-green-200 uppercase">
              {t("about.offer.eyebrow")}
            </p>
            <h2 className="mb-3 text-2xl leading-tight font-bold text-neutral-900 lg:text-3xl">
              {t("about.offer.heading1")}
              <br className="hidden lg:block" /> {t("about.offer.heading2")}
            </h2>
            <p className="mb-5 text-xs leading-relaxed text-neutral-300 lg:text-sm">
              {t("about.offer.body")}
            </p>
            <Link
              href="#contact"
              className="inline-flex w-fit rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-green-400"
            >
              {t("about.offer.cta")}
            </Link>
          </div>

          {/* Tiles */}
          {tiles.map((tile, i) =>
            tile.kind === "quote" ? (
              <QuoteCard key={i} />
            ) : tile.kind === "spacer" ? (
              <div key={i} className="hidden lg:block" />
            ) : (
              <ImageTile key={i} tileKey={tile.key} src={tile.src} />
            )
          )}
        </div>
      </div>
    </section>
  );
}
