"use client";

import Image from "next/image";
import Link from "next/link";
import type { IconType } from "react-icons";
import {
  IoPeopleOutline,
  IoSnowOutline,
  IoSyncOutline,
  IoWaterOutline,
} from "react-icons/io5";
import type { Room, CardSpecKey } from "../../rooms/data";
import { useLang } from "@/lib/i18n";

const CARD_SPEC_ICON: Record<CardSpecKey, IconType> = {
  people: IoPeopleOutline,
  ac: IoSnowOutline,
  fan: IoSyncOutline,
  shower: IoWaterOutline,
  bed: IoPeopleOutline,
};

const WHATSAPP_NUMBER = "6285339567549";

export default function LodgeCard({ room }: { room: Room }) {
  const { t } = useLang();
  const cardTitle = room.cardTitle ?? room.title;
  const cardImage = room.cardImage ?? room.images[0];

  const bookMessage = `Hello Waerebo Lodge! 🌿\n\nI'd like to book the "${room.title}".\n\nPlease share availability and pricing. Thank you!`;
  const bookLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(bookMessage)}`;

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex w-full flex-col gap-4 rounded-3xl bg-white px-2 pt-2 pb-5 shadow-md">
        <div className="relative h-72 w-full overflow-hidden rounded-[20px] bg-neutral-100">
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
                  ? spec.label.replace("Guests", "People")
                  : spec.label;
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
          <a
            href={bookLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center rounded-xl bg-savana-800 px-4 py-3 text-base font-medium text-white transition-colors hover:bg-savana-700"
          >
            {t("lodge.bookNow")}
          </a>
        </div>
      </div>
      <Link
        href={`/rooms/${room.slug}`}
        className="text-base font-medium text-neutral-400 transition-colors hover:text-savana-800"
      >
        {t("lodge.seeDetails")}
      </Link>
    </div>
  );
}
