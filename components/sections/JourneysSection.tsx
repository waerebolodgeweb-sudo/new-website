"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { IconType } from "react-icons";
import {
  IoFlag,
  IoPartlySunny,
  IoPeopleOutline,
  IoBedOutline,
  IoArrowForwardOutline,
  IoLogoWhatsapp,
} from "react-icons/io5";
import { restaurantShowcase } from "@/app/restaurant/data";
import { transportShowcase } from "@/app/transport/data";
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

const lodgeDefs: JourneyCardDef[] = [
  {
    id: "twin-ac",
    titleKey: "journeys.lodge1.title",
    image: "/lodge/hero-1.jpg",
    meta: [
      { icon: IoPeopleOutline, textKey: "journeys.lodge1.meta0" },
      { icon: IoBedOutline, textKey: "journeys.lodge1.meta1" },
    ],
    descKey: "journeys.lodge1.desc",
  },
  {
    id: "double-ac",
    titleKey: "journeys.lodge2.title",
    image: "/lodge/hero-2.jpg",
    meta: [
      { icon: IoPeopleOutline, textKey: "journeys.lodge2.meta0" },
      { icon: IoBedOutline, textKey: "journeys.lodge2.meta1" },
    ],
    descKey: "journeys.lodge2.desc",
  },
  {
    id: "family-ac",
    titleKey: "journeys.lodge3.title",
    image: "/lodge/hero-3.jpg",
    meta: [
      { icon: IoPeopleOutline, textKey: "journeys.lodge3.meta0" },
      { icon: IoBedOutline, textKey: "journeys.lodge3.meta1" },
    ],
    descKey: "journeys.lodge3.desc",
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

function ServicePreview({ showcaseKey }: { showcaseKey: "restaurant" | "transport" }) {
  const { t } = useLang();
  const data = showcaseKey === "restaurant" ? restaurantShowcase : transportShowcase;
  const subtitle = t(`${showcaseKey}.subtitle`);
  const buttonLabel = t(`${showcaseKey}.bookLabel`);
  const viewLabel = t(`${showcaseKey}.viewLabel`);

  return (
    <div className="grid items-stretch gap-6 lg:grid-cols-2">
      {/* Hero image */}
      <div className="relative min-h-[300px] overflow-hidden rounded-[2rem] shadow-sm">
        <Image
          src={data.heroImage}
          alt={`${data.titleHead}${data.titleTail}`}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <h3 className="absolute right-6 bottom-6 left-6 text-2xl font-semibold text-white lg:text-3xl">
          {data.titleHead}
          <span className="text-pale-green-100">{data.titleTail}</span>
        </h3>
      </div>

      {/* Details */}
      <div className="flex flex-col">
        <p className="text-sm leading-relaxed text-neutral-500 lg:text-base">
          {subtitle}
        </p>

        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2">
          {data.thumbnails.map((thumb) => (
            <div
              key={thumb.src}
              className="relative h-24 overflow-hidden rounded-2xl shadow-sm lg:h-28"
            >
              <Image src={thumb.src} alt={thumb.alt} fill className="object-cover" />
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={data.bookHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-[12px] bg-savana-800 px-5 py-3 text-base font-medium text-white transition-colors hover:bg-savana-700"
          >
            <IoLogoWhatsapp className="h-5 w-5" />
            {buttonLabel}
          </a>
          <Link
            href={data.href}
            className="inline-flex items-center gap-1.5 rounded-[12px] border border-pale-green-100 px-5 py-3 text-base font-medium text-neutral-900 transition-colors hover:bg-light-green-100"
          >
            {viewLabel}
            <IoArrowForwardOutline className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
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
                <span className="font-semibold">{t(`journeys.${activeTab}.emph`)}</span>
              </h2>

              <div className="flex gap-0 overflow-x-auto overflow-y-hidden border-b border-neutral-100">
                {tabKeys.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`-mb-px border-b-2 px-5 pb-3 text-sm md:text-lg font-semibold whitespace-nowrap transition-colors ${
                      activeTab === tab
                        ? "border-savana-600 border-b-4 text-neutral-900"
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

        {activeTab === "lodge" && (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {lodgeDefs.map((def) => (
              <Card
                key={def.id}
                def={def}
                href="/lodge"
                labelKey="journeys.seeLodgeDetails"
              />
            ))}
          </div>
        )}

        {activeTab === "restaurant" && (
          <ServicePreview showcaseKey="restaurant" />
        )}

        {activeTab === "transport" && (
          <ServicePreview showcaseKey="transport" />
        )}
      </div>
    </section>
  );
}
