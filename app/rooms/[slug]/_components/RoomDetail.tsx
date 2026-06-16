"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { IconType } from "react-icons";
import {
  IoPeopleOutline,
  IoHeartOutline,
  IoBedOutline,
  IoWaterOutline,
  IoWifiOutline,
  IoSnowOutline,
  IoCarSportOutline,
  IoSparklesOutline,
  IoCafeOutline,
  IoMoonOutline,
  IoManOutline,
  IoSyncOutline,
  IoStar,
  IoLocationOutline,
  IoLogoWhatsapp,
} from "react-icons/io5";
import type { Room, FacilityKey, HighlightKey, CardSpecKey } from "../../data";
import { useLang } from "@/lib/i18n";

/* ── icon maps ── */

const HIGHLIGHT_ICON: Record<HighlightKey, IconType> = {
  capacity: IoPeopleOutline,
  couples: IoHeartOutline,
  bedroom: IoBedOutline,
  bathroom: IoWaterOutline,
};

const FACILITY_META: Record<FacilityKey, { icon: IconType; label: string }> = {
  wifi: { icon: IoWifiOutline, label: "WiFi" },
  ac: { icon: IoSnowOutline, label: "Air Conditioning" },
  hotShower: { icon: IoWaterOutline, label: "Hot Shower" },
  parking: { icon: IoCarSportOutline, label: "Free Parking" },
  amenities: { icon: IoSparklesOutline, label: "Towel, Toothbrush & Soap" },
  breakfast: { icon: IoCafeOutline, label: "Breakfast Included" },
  dinner: { icon: IoMoonOutline, label: "Dinner Included" },
  toilet: { icon: IoManOutline, label: "Bathroom" },
};

const CARD_SPEC_ICON: Record<CardSpecKey, IconType> = {
  people: IoPeopleOutline,
  ac: IoSnowOutline,
  fan: IoSyncOutline,
  shower: IoWaterOutline,
  bed: IoBedOutline,
};

const WHATSAPP_NUMBER = "6285339567549";

/* ── room card (used in "More Room to Explore") ── */

function RoomCard({ room }: { room: Room }) {
  const { t } = useLang();
  return (
    <div
      data-reveal
      className="flex flex-col overflow-hidden rounded-2xl border border-pale-green-100/30 bg-white shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="relative h-44">
        <Image
          src={room.images[0]}
          alt={room.title}
          fill
          className="object-cover"
        />
        <span className="absolute top-3 left-3 rounded-full bg-green-400 px-2.5 py-1 text-[10px] font-semibold text-white">
          {t("room.available")}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="mb-2 text-sm font-bold text-neutral-900">
          {room.title}
        </h3>
        <div className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-medium text-neutral-300">
          {room.cardSpecs.map((spec) => {
            const Icon = CARD_SPEC_ICON[spec.key];
            return (
              <span key={spec.label} className="inline-flex items-center gap-1">
                <Icon size={13} className="text-green-200" />
                {spec.label}
              </span>
            );
          })}
        </div>
        <Link
          href={`/rooms/${room.slug}`}
          className="mt-auto block w-full rounded-full bg-green-400 px-4 py-2.5 text-center text-xs font-semibold text-white transition-colors hover:bg-pale-green-500"
        >
          {t("room.seeLodgeDetails")}
        </Link>
      </div>
    </div>
  );
}

/* ── main ── */

export default function RoomDetail({
  room,
  otherRooms,
}: {
  room: Room;
  otherRooms: Room[];
}) {
  const [activeImage, setActiveImage] = useState(0);
  const { t } = useLang();

  const bookMessage = `Hello Waerebo Lodge! 🌿\n\nI'd like to book the "${room.title}".\n\nPlease share availability and pricing. Thank you!`;
  const bookLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    bookMessage
  )}`;

  const BookButton = ({ className = "" }: { className?: string }) => (
    <a
      href={bookLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex w-full items-center justify-center gap-2 rounded-full bg-green-400 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-green-400/20 transition-colors hover:bg-pale-green-500 ${className}`}
    >
      <IoLogoWhatsapp size={18} />
      {t("room.bookNow")}
    </a>
  );

  return (
    <>
      {/* ── Detail ── */}
      <section className="bg-white py-8 lg:py-14">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Left — gallery (sticky on desktop) */}
            <div className="self-start lg:sticky lg:top-28">
              <div className="relative h-64 w-full overflow-hidden rounded-2xl shadow-sm sm:h-80 lg:h-96">
                <Image
                  src={room.images[activeImage]}
                  alt={room.title}
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              {/* Thumbnails */}
              {room.images.length > 1 && (
                <div className="mt-3 grid grid-cols-4 gap-2.5">
                  {room.images.map((img, i) => (
                    <button
                      key={img}
                      onClick={() => setActiveImage(i)}
                      aria-label={`View image ${i + 1}`}
                      className={`relative h-16 overflow-hidden rounded-xl transition-all sm:h-20 ${
                        activeImage === i
                          ? "ring-2 ring-green-400 ring-offset-2"
                          : "opacity-70 hover:opacity-100"
                      }`}
                    >
                      <Image src={img} alt="" fill className="object-cover" />
                    </button>
                  ))}
                </div>
              )}

              {/* Book button — desktop, under gallery */}
              <BookButton className="mt-5 hidden lg:flex" />
            </div>

            {/* Right — info */}
            <div>
              <h1 className="mb-3 text-2xl font-bold text-neutral-900 lg:text-3xl">
                {room.title}
              </h1>
              <p className="mb-6 text-sm leading-relaxed text-neutral-300">
                {room.description}
              </p>

              {/* Highlights */}
              <ul className="mb-8 divide-y divide-pale-green-100/40 border-y border-pale-green-100/40">
                {room.highlights.map((h) => {
                  const Icon = HIGHLIGHT_ICON[h.key];
                  return (
                    <li
                      key={h.key}
                      className="flex items-center gap-3 py-3 text-sm font-medium text-neutral-900"
                    >
                      <Icon
                        size={18}
                        className="flex-shrink-0 text-green-400"
                      />
                      {h.label}
                    </li>
                  );
                })}
              </ul>

              {/* Other facility */}
              <h2 className="mb-4 text-base font-bold text-neutral-900">
                {t("room.otherFacility")}
              </h2>
              <div className="mb-8 grid grid-cols-2 gap-x-6 gap-y-3.5">
                {room.facilities.map((key) => {
                  const { icon: Icon, label } = FACILITY_META[key];
                  return (
                    <div
                      key={key}
                      className="flex items-center gap-2.5 text-sm text-neutral-300"
                    >
                      <Icon
                        size={16}
                        className="flex-shrink-0 text-green-400"
                      />
                      {label}
                    </div>
                  );
                })}
              </div>

              {/* Locations */}
              <h2 className="mb-4 text-base font-bold text-neutral-900">
                {t("room.locations")}
              </h2>
              <div className="relative mb-8 h-44 w-full overflow-hidden rounded-2xl shadow-sm">
                <iframe
                  title={`${room.title} location map`}
                  src="https://www.google.com/maps?q=-8.8465902,120.3055812&z=17&output=embed"
                  className="absolute inset-0 h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
                <a
                  href="https://www.google.com/maps/@-8.8465902,120.3055812,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-neutral-900 shadow-sm transition-colors hover:bg-white"
                >
                  <IoLocationOutline size={14} className="text-green-400" />
                  Waerebo Lodge, Flores
                </a>
              </div>

              {/* Reviews */}
              {room.reviews.length > 0 && (
                <>
                  <h2 className="mb-4 text-base font-bold text-neutral-900">
                    {t("room.review")}
                  </h2>
                  <div className="space-y-5">
                    {room.reviews.map((review) => (
                      <div key={review.name} className="flex gap-3">
                        <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-full">
                          <Image
                            src={review.avatar}
                            alt={review.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <p className="text-sm leading-tight font-bold text-neutral-900">
                                {review.name}
                              </p>
                              <p className="text-[11px] text-neutral-300">
                                {review.location}
                              </p>
                            </div>
                            <span className="inline-flex flex-shrink-0 items-center gap-1 text-sm font-bold text-green-400">
                              <IoStar size={13} />
                              {review.rating}/5
                            </span>
                          </div>
                          <p className="mt-1.5 text-xs leading-relaxed text-neutral-300">
                            {review.text}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {/* Book button — mobile, after detail */}
              <BookButton className="mt-8 flex lg:hidden" />
            </div>
          </div>
        </div>
      </section>

      {/* ── More Room to Explore ── */}
      {otherRooms.length > 0 && (
        <section className="bg-light-green-100 py-12 lg:py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <h2 className="mb-8 text-center text-2xl font-bold text-neutral-900 lg:mb-10 lg:text-3xl">
              {t("room.moreRooms")} <span className="text-green-400">{t("room.toExplore")}</span>
            </h2>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {otherRooms.map((r) => (
                <RoomCard key={r.slug} room={r} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
