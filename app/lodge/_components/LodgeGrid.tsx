"use client";

import { useLang } from "@/lib/i18n";
import type { Room } from "../../rooms/data";
import LodgeCard from "./LodgeCard";

export default function LodgeGrid({ rooms }: { rooms: Room[] }) {
  const { t } = useLang();

  return (
    <section className="bg-neutral-050 py-16 lg:py-24">
      <div className="mx-auto max-w-[1512px] px-6 lg:px-10">
        <div className="mb-12 text-center lg:mb-16">
          <p className="mb-2 text-base font-normal text-savana-600">
            {t("lodge.eyebrow")}
          </p>
          <h1 className="text-3xl leading-tight font-semibold text-savana-800 lg:text-5xl">
            {t("lodge.heading")}
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {rooms.map((room) => (
            <LodgeCard key={room.slug} room={room} />
          ))}
        </div>
      </div>
    </section>
  );
}
