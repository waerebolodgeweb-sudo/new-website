"use client";

import Image from "next/image";
import type { ComponentType } from "react";
import {
  IoLogoWhatsapp,
  IoMailOutline,
  IoPeople,
  IoThumbsUp,
  IoCalendar,
  IoHome,
} from "react-icons/io5";
import { useLang } from "@/lib/i18n";
import { LunchIcon, VillageIcon } from "@/components/icons/new-icons";
type JourneyIcon = ComponentType<{
  className?: string;
  "aria-hidden"?: boolean | "true" | "false";
  size?: number;
}>;
interface TripFeatureDef {
  icon: JourneyIcon;
  labelKey: string;
}
const whatsappNumber = "6285339021145";
const email = "waerebolodge@gmail.com";

const customJourneyFeatures: TripFeatureDef[] = [
  { icon: IoPeople, labelKey: "journeys.custom.feature.private" },
  { icon: IoThumbsUp, labelKey: "journeys.custom.feature.team" },
  { icon: IoCalendar, labelKey: "journeys.custom.feature.flexible" },
  { icon: IoHome, labelKey: "journeys.custom.feature.lodge" },
  { icon: VillageIcon, labelKey: "journeys.custom.feature.village" },
  { icon: LunchIcon, labelKey: "journeys.custom.feature.meals" },
];

export default function CustomTrips() {
  const { t } = useLang();
  const whatsappMessage = encodeURIComponent(t("trip.message.custom"));
  const emailSubject = encodeURIComponent(t("trip.email.customSubject"));
  return (
    <section className="relative mt-10 min-h-[850px] overflow-hidden bg-pale-green-800 text-white md:min-h-[400px]">
      <Image
        src="/homepage/Waerebo-Lodge-Create-Itineraries-Banner-Homepage-Mobile-no-blur.webp"
        alt={t("journeys.custom.title")}
        fill
        sizes="(min-width: 1536px) 1352px, (min-width: 1024px) calc(100vw - 160px), calc(100vw - 48px)"
        className="block object-cover object-top md:hidden"
      />
      <Image
        src="/homepage/Waerebo-Lodge-Create-Itineraries-Banner-Homepage-Desktop-no-blur.webp"
        alt={t("journeys.custom.title")}
        fill
        sizes="(min-width: 1536px) 1352px, (min-width: 1024px) calc(100vw - 160px), calc(100vw - 48px)"
        className="hidden object-cover object-[50%_70%] md:block"
      />
      <div
        className="absolute inset-0 z-10 hidden w-[1000px] md:block"
        style={{
          background: "rgba(16, 19, 19, 0.6)",

          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",

          maskImage:
            "linear-gradient(270deg, transparent 0%, black 65%, black 100%)",
          WebkitMaskImage:
            "linear-gradient(270deg, transparent 0%, black 65%, black 100%)",

          pointerEvents: "none",
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 z-10 block h-[650px] sm:h-[500px] md:hidden"
        style={{
          background: "rgba(16, 19, 19, 0.6)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",

          maskImage:
            "linear-gradient(to top, black 0%, black 45%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to top, black 0%, black 45%, transparent 100%)",

          pointerEvents: "none",
        }}
      />
      <div className="absolute inset-x-0 bottom-0 z-10 mx-auto flex min-h-[520px] w-full max-w-[1512px] flex-col justify-end px-5 py-10 sm:min-h-[460px] md:relative md:min-h-[360px] md:justify-center md:py-9 lg:px-20">
        <h3 className="text-[24px] leading-tight font-semibold tracking-[-0.025em] text-balance sm:text-4xl">
          {t("journeys.custom.title")}
        </h3>
        <p className="mt-2 max-w-[56ch] text-[14px] leading-[1.45] text-pretty text-white/90 sm:text-base">
          {t("journeys.custom.desc")}
        </p>

        <div className="mt-6 grid max-w-[500px] grid-cols-2 gap-y-3 sm:grid-cols-3">
          {customJourneyFeatures.map(({ icon: Icon, labelKey }) => (
            <div key={labelKey} className="flex w-fit items-center gap-2.5">
              <Icon
                aria-hidden="true"
                className="h-6 w-6 flex-none text-savana-200"
                size={24}
              />
              <span className="text-[12px] leading-tight font-medium text-white/90">
                {t(labelKey)}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-5 sm:flex-row">
          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="button-light flex min-h-11 items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-center text-base font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:min-w-[192px]"
          >
            <IoLogoWhatsapp aria-hidden="true" className="h-5 w-5" />
            {t("journeys.custom.whatsapp")}
          </a>
          <a
            href={`mailto:${email}?subject=${emailSubject}`}
            className="button-outline-light flex min-h-11 items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-center text-base font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:min-w-[192px]"
          >
            <IoMailOutline aria-hidden="true" className="h-5 w-5" />
            {t("journeys.custom.email")}
          </a>
        </div>
      </div>
    </section>
  );
}
