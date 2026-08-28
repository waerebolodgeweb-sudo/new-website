"use client";

import Image from "next/image";
import Link from "next/link";
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

type Tile = { kind: "image"; key: TileKey; src: string } | { kind: "spacer" };

const aboutAsset = (file: string) => `/About%20Us/${file}`;

const tiles: Tile[] = [
  {
    kind: "image",
    key: "waerebo-village",
    src: aboutAsset("About-Us-Waerebo-Lodge-Explore-Our-Services-01.webp"),
  },
  { kind: "spacer" },
  {
    kind: "image",
    key: "pleas-waterfall",
    src: aboutAsset("About-Us-Waerebo-Lodge-Explore-Our-Services-03.webp"),
  },
  {
    kind: "image",
    key: "waerebo-lodge",
    src: aboutAsset("About-Us-Waerebo-Lodge-Explore-Our-Services-04.webp"),
  },
  { kind: "spacer" },
  {
    kind: "image",
    key: "hobbit-cave",
    src: aboutAsset("About-Us-Waerebo-Lodge-Explore-Our-Services-06.webp"),
  },
  {
    kind: "image",
    key: "waerebo-house",
    src: aboutAsset("About-Us-Waerebo-Lodge-Explore-Our-Services-07.webp"),
  },
  {
    kind: "image",
    key: "double-bed",
    src: aboutAsset("About-Us-Waerebo-Lodge-Explore-Our-Services-08.webp"),
  },
  {
    kind: "image",
    key: "nusa-molas",
    src: aboutAsset("About-Us-Waerebo-Lodge-Explore-Our-Services-09.webp"),
  },
  { kind: "spacer" },
  {
    kind: "image",
    key: "restaurant",
    src: aboutAsset("About-Us-Waerebo-Lodge-Explore-Our-Services-11.webp"),
  },
];

function ImageTile({ tileKey, src }: { tileKey: TileKey; src: string }) {
  const { t } = useLang();
  const label = t(`about.tile.${tileKey}`);
  return (
    <div
      data-reveal
      className="group bg-savana-300 relative aspect-[0.88] overflow-hidden rounded-xl shadow-[0_16px_32px_rgba(38,35,22,0.18)] lg:aspect-square lg:rounded-[22px]"
    >
      <Image
        src={src}
        alt={label}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      <p className="absolute right-3 bottom-3 left-3 text-sm leading-tight font-semibold text-white drop-shadow lg:text-base">
        {label}
      </p>
    </div>
  );
}

export default function OfferGrid() {
  const { t } = useLang();

  return (
    <section id="offer" className="bg-savana-200 py-12 lg:py-24">
      <div className="mx-auto max-w-[1512px] px-4 sm:px-6 lg:px-20">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-7">
          {/* Heading cell */}
          <div className="col-span-2 flex flex-col justify-center py-2 lg:col-span-1 lg:aspect-square">
            <p className="mb-3 text-[14px] font-medium text-savana-600 lg:text-base">
              {t("about.offer.eyebrow")}
            </p>
            <h2 className="mb-4 text-[28px] leading-tight font-normal text-savana-800 lg:text-[26px]">
              <span className="font-semibold">{t("about.offer.heading1")}</span>{" "}
              {t("about.offer.heading2")}
            </h2>
            <p className="mb-6 max-w-sm text-sm leading-relaxed font-medium text-pale-savana-300 lg:text-base">
              {t("about.offer.body")}
            </p>
          </div>

          {/* Tiles */}
          {tiles.map((tile, index) =>
            tile.kind === "spacer" ? (
              <div
                key={`spacer-${index}`}
                className="hidden rounded-[22px] bg-savana-800/10 lg:block lg:aspect-square"
              />
            ) : (
              <ImageTile key={tile.key} tileKey={tile.key} src={tile.src} />
            )
          )}
        </div>
      </div>
    </section>
  );
}
