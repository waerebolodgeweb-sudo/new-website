"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
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
    image: "/home/1-day-trekking.jpg",
    meta: [
      { icon: IoPartlySunny, textKey: "journeys.trip1.meta0" },
      { icon: IoFlag, textKey: "journeys.trip1.meta1" },
    ],
    descKey: "journeys.trip1.desc",
  },
  {
    id: "2d1n",
    titleKey: "journeys.trip2.title",
    image: "/home/2d-1n-trekking.jpg",
    meta: [
      { icon: IoPartlySunny, textKey: "journeys.trip2.meta0" },
      { icon: IoFlag, textKey: "journeys.trip2.meta1" },
    ],
    descKey: "journeys.trip2.desc",
  },
  {
    id: "3d2n",
    titleKey: "journeys.trip3.title",
    image: "/home/3d-2n-trekking.jpg",
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
    image: "/transport/oto colt.jpg",
    descKey: "journeys.transport.oto.desc",
  },
  {
    id: "toyota-innova",
    title: "Toyota Innova",
    image: "/transport/toyota innova.jpg",
    descKey: "journeys.transport.innova.desc",
  },
];

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
      className="overflow-hidden rounded-[2.25rem] bg-white p-2 shadow-sm transition-shadow hover:shadow-md"
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
      <div className="relative aspect-[1.35] overflow-hidden rounded-[20px]">
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
  const [startIndex, setStartIndex] = useState(0);
  const visibleRooms = [...lodgeDefs, ...lodgeDefs].slice(
    startIndex,
    startIndex + 3
  );

  const goToPrevious = () => {
    setStartIndex((current) =>
      current === 0 ? lodgeDefs.length - 1 : current - 1
    );
  };

  const goToNext = () => {
    setStartIndex((current) => (current + 1) % lodgeDefs.length);
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={goToPrevious}
        aria-label="Previous rooms"
        className="absolute top-[42%] left-0 z-20 hidden h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full bg-white text-savana-500 shadow-[0_12px_35px_rgba(38,35,22,0.16)] transition-colors hover:text-savana-800 lg:flex"
      >
        <IoChevronBack size={28} />
      </button>
      <button
        type="button"
        onClick={goToNext}
        aria-label="Next rooms"
        className="absolute top-[42%] right-0 z-20 hidden h-14 w-14 translate-x-1/2 items-center justify-center rounded-full bg-white text-savana-500 shadow-[0_12px_35px_rgba(38,35,22,0.16)] transition-colors hover:text-savana-800 lg:flex"
      >
        <IoChevronForward size={28} />
      </button>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visibleRooms.map((def) => (
          <LodgeCard key={`${startIndex}-${def.slug}`} def={def} />
        ))}
      </div>

      <div className="mt-7 flex justify-center gap-1.5">
        {lodgeDefs.map((def, index) => (
          <button
            key={def.slug}
            type="button"
            aria-label={`Show ${def.title}`}
            onClick={() => setStartIndex(index)}
            className={`h-1.5 rounded-full transition-colors ${
              index === startIndex
                ? "w-12 bg-savana-800"
                : "w-6 bg-savana-800/25"
            }`}
          />
        ))}
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
              <h3 className="text-2xl leading-tight font-semibold text-neutral-900">
                {def.title}
              </h3>
              <p className="mt-3 line-clamp-3 min-h-[72px] text-base leading-6 font-normal text-neutral-500">
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

  return (
    <article className="overflow-hidden rounded-[32px] bg-white p-3 shadow-[0_14px_38px_rgba(38,35,22,0.18)]">
      <div className="grid min-h-[460px] gap-3 lg:grid-cols-[0.58fr_1fr]">
        <div className="flex flex-col px-5 py-7 lg:px-8 lg:py-10">
          <h3 className="text-3xl leading-tight font-semibold text-savana-800">
            Waerebo Lodge Restaurant
          </h3>
          <p className="mt-4 max-w-md text-lg leading-7 font-normal text-pale-savana-400">
            {t("journeys.restaurant.desc")}
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3">
            <div className="relative h-28 overflow-hidden rounded-2xl">
              <Image
                src="/restaurant/favourite%20menu.png"
                alt="Favourite menu at Waerebo Lodge Restaurant"
                fill
                className="object-cover"
                sizes="180px"
              />
            </div>
            <div className="relative h-28 overflow-hidden rounded-2xl">
              <Image
                src="/restaurant/Fresh%20Grilled%20Fish.jpg"
                alt="Fresh grilled fish at Waerebo Lodge Restaurant"
                fill
                className="object-cover"
                sizes="180px"
              />
            </div>
          </div>
          <Link
            href="/restaurant"
            className="mt-auto flex min-h-14 w-full max-w-[430px] items-center justify-center rounded-xl bg-savana-800 px-5 text-lg font-medium text-white transition-colors hover:bg-savana-700"
          >
            {t("journeys.seeRestaurantDetails")}
          </Link>
        </div>

        <div className="relative min-h-[320px] overflow-hidden rounded-[24px] lg:min-h-full">
          <Image
            src="/restaurant/hero-image.jpg"
            alt="Guests sharing a meal at Waerebo Lodge Restaurant"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 60vw, 100vw"
          />
          <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
            {[0, 1, 2, 3].map((item) => (
              <span
                key={item}
                className={`h-1 w-12 rounded-full ${
                  item === 1 ? "bg-white" : "bg-white/35"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function JourneysSection() {
  const [activeTab, setActiveTab] = useState<TabKey>("trip");
  const { t } = useLang();

  return (
    <section
      id="journeys"
      className="bg-neutral-050 pt-0 pb-24 lg:pt-0 lg:pb-28"
    >
      <div className="relative mx-auto max-w-[1512px] px-6 lg:px-10">
        <div className="relative z-10 -mt-16 lg:-mt-24">
          <div className="overflow-hidden rounded-[2rem] border border-pale-green-100/50 bg-white p-6 shadow-[0_25px_80px_rgba(15,23,42,0.12)] lg:p-8">
            <p className="mb-2 text-base font-normal text-savana-600">
              {t(`journeys.${activeTab}.eyebrow`)}
            </p>
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <h2 className="text-3xl leading-tight text-neutral-900 lg:text-5xl">
                {t(`journeys.${activeTab}.head`)}
                <span className="font-semibold">
                  {t(`journeys.${activeTab}.emph`)}
                </span>
              </h2>

              <div className="flex gap-0 overflow-x-auto overflow-y-hidden border-b border-neutral-100">
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
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-[1512px] px-6 lg:px-10">
        {activeTab === "trip" && (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {tripDefs.map((def) => (
              <Card
                key={def.id}
                def={def}
                href="/trips"
                labelKey="journeys.seeTripDetails"
              />
            ))}
          </div>
        )}

        {activeTab === "lodge" && <LodgePreview />}

        {activeTab === "restaurant" && <RestaurantPreview />}

        {activeTab === "transport" && <TransportPreview />}
      </div>
    </section>
  );
}
