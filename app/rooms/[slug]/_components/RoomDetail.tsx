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
  IoTvOutline,
  IoSnowOutline,
  IoCarSportOutline,
  IoSparklesOutline,
  IoCafeOutline,
  IoManOutline,
  IoSyncOutline,
  IoStar,
  IoLocationOutline,
  IoLogoWhatsapp,
} from "react-icons/io5";
import type {
  Room,
  FacilityKey,
  HighlightKey,
  CardSpecKey,
} from "../../data";

/* ── icon maps ── */

const HIGHLIGHT_ICON: Record<HighlightKey, IconType> = {
  capacity: IoPeopleOutline,
  couples: IoHeartOutline,
  bedroom: IoBedOutline,
  bathroom: IoWaterOutline,
};

const FACILITY_META: Record<FacilityKey, { icon: IconType; label: string }> = {
  wifi: { icon: IoWifiOutline, label: "Wifi" },
  tv: { icon: IoTvOutline, label: "TV" },
  ac: { icon: IoSnowOutline, label: "Air Conditioning" },
  parking: { icon: IoCarSportOutline, label: "Free Parking" },
  hairdryer: { icon: IoSparklesOutline, label: "Hair dryer" },
  water: { icon: IoWaterOutline, label: "Water" },
  breakfast: { icon: IoCafeOutline, label: "Breakfast" },
  toilet: { icon: IoManOutline, label: "Toilet" },
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
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-lodge-pale/30 flex flex-col">
      <div className="relative h-44">
        <Image src={room.images[0]} alt={room.title} fill className="object-cover" />
        <span className="absolute top-3 left-3 px-2.5 py-1 bg-lodge-green text-white text-[10px] font-semibold rounded-full">
          Available
        </span>
      </div>
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-sm font-bold text-lodge-dark mb-2">{room.title}</h3>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-lodge-neutral font-medium mb-4">
          {room.cardSpecs.map((spec) => {
            const Icon = CARD_SPEC_ICON[spec.key];
            return (
              <span key={spec.label} className="inline-flex items-center gap-1">
                <Icon size={13} className="text-lodge-mid" />
                {spec.label}
              </span>
            );
          })}
        </div>
        <Link
          href={`/rooms/${room.slug}`}
          className="mt-auto block w-full text-center px-4 py-2.5 bg-lodge-green text-white text-xs font-semibold rounded-full hover:bg-lodge-green-hover transition-colors"
        >
          See Lodge Details
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

  const bookMessage = `Hello Waerebo Lodge! 🌿\n\nI'd like to book the "${room.title}" (${room.price} / night).\n\nPlease share availability. Thank you!`;
  const bookLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    bookMessage
  )}`;

  const BookButton = ({ className = "" }: { className?: string }) => (
    <a
      href={bookLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-lodge-green text-white text-sm font-bold rounded-full hover:bg-lodge-green-hover transition-colors shadow-lg shadow-lodge-green/20 ${className}`}
    >
      <IoLogoWhatsapp size={18} />
      Book Room Now
    </a>
  );

  return (
    <>
      {/* ── Detail ── */}
      <section className="bg-white py-8 lg:py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left — gallery (sticky on desktop) */}
            <div className="lg:sticky lg:top-28 self-start">
              <div className="relative w-full h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-sm">
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
                <div className="grid grid-cols-4 gap-2.5 mt-3">
                  {room.images.map((img, i) => (
                    <button
                      key={img}
                      onClick={() => setActiveImage(i)}
                      aria-label={`View image ${i + 1}`}
                      className={`relative h-16 sm:h-20 rounded-xl overflow-hidden transition-all ${
                        activeImage === i
                          ? "ring-2 ring-lodge-green ring-offset-2"
                          : "opacity-70 hover:opacity-100"
                      }`}
                    >
                      <Image src={img} alt="" fill className="object-cover" />
                    </button>
                  ))}
                </div>
              )}

              {/* Book button — desktop, under gallery */}
              <BookButton className="hidden lg:flex mt-5" />
            </div>

            {/* Right — info */}
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold text-lodge-dark mb-3">
                {room.title}
              </h1>
              <p className="text-sm text-lodge-neutral leading-relaxed mb-6">
                {room.description}
              </p>

              {/* Highlights */}
              <ul className="divide-y divide-lodge-pale/40 border-y border-lodge-pale/40 mb-8">
                {room.highlights.map((h) => {
                  const Icon = HIGHLIGHT_ICON[h.key];
                  return (
                    <li
                      key={h.key}
                      className="flex items-center gap-3 py-3 text-sm text-lodge-dark font-medium"
                    >
                      <Icon size={18} className="text-lodge-green flex-shrink-0" />
                      {h.label}
                    </li>
                  );
                })}
              </ul>

              {/* Other facility */}
              <h2 className="text-base font-bold text-lodge-dark mb-4">
                Other Facility
              </h2>
              <div className="grid grid-cols-2 gap-x-6 gap-y-3.5 mb-8">
                {room.facilities.map((key) => {
                  const { icon: Icon, label } = FACILITY_META[key];
                  return (
                    <div
                      key={key}
                      className="flex items-center gap-2.5 text-sm text-lodge-neutral"
                    >
                      <Icon size={16} className="text-lodge-green flex-shrink-0" />
                      {label}
                    </div>
                  );
                })}
              </div>

              {/* Locations */}
              <h2 className="text-base font-bold text-lodge-dark mb-4">Locations</h2>
              <div className="relative h-44 w-full rounded-2xl overflow-hidden shadow-sm mb-8">
                <Image
                  src={room.mapImage}
                  alt={`${room.title} location map`}
                  fill
                  className="object-cover"
                />
                <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/90 text-lodge-dark text-xs font-semibold rounded-full shadow-sm">
                  <IoLocationOutline size={14} className="text-lodge-green" />
                  Waerebo Lodge, Flores
                </span>
              </div>

              {/* Reviews */}
              {room.reviews.length > 0 && (
                <>
                  <h2 className="text-base font-bold text-lodge-dark mb-4">Review</h2>
                  <div className="space-y-5">
                    {room.reviews.map((review) => (
                      <div key={review.name} className="flex gap-3">
                        <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                          <Image
                            src={review.avatar}
                            alt={review.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <p className="text-sm font-bold text-lodge-dark leading-tight">
                                {review.name}
                              </p>
                              <p className="text-[11px] text-lodge-neutral">
                                {review.location}
                              </p>
                            </div>
                            <span className="inline-flex items-center gap-1 text-sm font-bold text-lodge-green flex-shrink-0">
                              <IoStar size={13} />
                              {review.rating}/5
                            </span>
                          </div>
                          <p className="text-xs text-lodge-neutral leading-relaxed mt-1.5">
                            {review.text}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {/* Book button — mobile, after detail */}
              <BookButton className="flex lg:hidden mt-8" />
            </div>
          </div>
        </div>
      </section>

      {/* ── More Room to Explore ── */}
      {otherRooms.length > 0 && (
        <section className="bg-lodge-warm py-12 lg:py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl lg:text-3xl font-bold text-lodge-dark text-center mb-8 lg:mb-10">
              More Room <span className="text-lodge-green">to Explore</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
