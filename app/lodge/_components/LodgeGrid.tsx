"use client";

import { IoLogoWhatsapp } from "react-icons/io5";
import { useLang } from "@/lib/i18n";
import type { Room } from "../../rooms/data";
import LodgeCard from "./LodgeCard";

const LODGE_CARD_ORDER = [
  "standard-twin-1",
  "standard-double",
  "standard-twin-2",
  "wooden-twin-1",
  "wooden-twin-2",
  "wooden-twin-3",
  "wooden-double",
  "deluxe-double-1",
  "deluxe-double-2",
  "deluxe-twin-1",
  "deluxe-twin-2",
];

const WHATSAPP_NUMBER = "6285339567549";

export default function LodgeGrid({ rooms }: { rooms: Room[] }) {
  const { t } = useLang();
  const orderedRooms = [...rooms].sort(
    (first, second) =>
      LODGE_CARD_ORDER.indexOf(first.slug) -
      LODGE_CARD_ORDER.indexOf(second.slug)
  );

  return (
    <section className="bg-neutral-050 py-16 lg:py-24">
      <div className="mx-auto max-w-[1512px] px-6 lg:px-20">
        <div className="mb-12 text-center lg:mb-16">
          <p className="mb-2 text-3xl font-normal text-savana-800">
            {t("lodge.eyebrow")}
          </p>
          <h1 className="text-3xl leading-tight font-semibold text-savana-800 lg:text-5xl">
            {t("lodge.heading")}
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {orderedRooms.map((room) => (
            <LodgeCard key={room.slug} room={room} />
          ))}
        </div>
      </div>
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
          "Hello Waerebo Lodge!\n\nI'd like to book a room.\n\nPlease share availability and pricing. Thank you!"
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Book room via WhatsApp"
        className="fixed right-5 bottom-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_rgba(37,211,102,0.35)] transition-transform hover:scale-105 focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 lg:right-8 lg:bottom-8 lg:h-16 lg:w-16"
      >
        <IoLogoWhatsapp size={30} />
      </a>
    </section>
  );
}
