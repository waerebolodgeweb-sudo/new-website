"use client";

import Image from "next/image";
import Link from "next/link";
import type { ComponentType } from "react";
import { IoPeople } from "react-icons/io5";
import {
  ACIcon,
  DoubleBedIcon,
  FanIcon,
  HotWaterIcon,
} from "@/components/icons/new-icons";
import type { Room, CardSpecKey } from "../../rooms/data";
import { useLang } from "@/lib/i18n";

type CardIconProps = {
  size?: number;
  className?: string;
  color?: string;
};
type CardIcon = ComponentType<CardIconProps>;

const CARD_SPEC_ICON: Record<CardSpecKey, CardIcon> = {
  people: IoPeople,
  ac: ACIcon,
  fan: FanIcon,
  shower: HotWaterIcon,
  bed: DoubleBedIcon,
};

export default function LodgeCard({ room }: { room: Room }) {
  const { t } = useLang();
  const cardTitle = room.cardTitle ?? room.title;
  const cardImage = room.cardImage ?? room.images[0];

  return (
    <div className="flex w-full flex-col gap-4 rounded-3xl bg-white pb-5 shadow-md md:px-2 md:pt-2">
      <div className="relative aspect-[7.62/4] w-full overflow-hidden rounded-t-[20px] bg-neutral-100 md:rounded-[20px]">
        <Image
          src={cardImage}
          alt={cardTitle}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-2 px-4">
        <p className="text-2xl leading-tight font-semibold text-black">
          {cardTitle}
        </p>
        <div className="flex flex-wrap items-center gap-3 pb-2">
          {room.cardSpecs.map((spec, i) => {
            const Icon = CARD_SPEC_ICON[spec.key];
            const label =
              spec.key === "people"
                ? t("cardSpec.people", spec.label.replace("Guests", "People"))
                : t(`cardSpec.${spec.key}`, spec.label);
            return (
              <div key={spec.key} className="flex items-center gap-3">
                {i > 0 && (
                  <span className="h-4 w-0.5 rounded-full bg-neutral-050" />
                )}
                <span className="flex items-center gap-1 text-sm font-semibold text-neutral-400">
                  <Icon size={20} className="text-neutral-400" />
                  {label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="px-4">
        <Link
          href={`/rooms/${room.slug}`}
          className="flex w-full items-center justify-center rounded-xl bg-savana-800 px-4 py-3 text-base font-medium text-white transition-colors hover:bg-savana-700"
        >
          {t("lodge.seeDetails")}
        </Link>
      </div>
    </div>
  );
}
