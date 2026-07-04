"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { IconType } from "react-icons";
import {
  IoBedOutline,
  IoCafeOutline,
  IoCarSportOutline,
  IoChevronBack,
  IoChevronForward,
  IoFastFoodOutline,
  IoHeartOutline,
  IoLogoWhatsapp,
  IoMailOutline,
  IoManOutline,
  IoPeopleOutline,
  IoSnowOutline,
  IoSparklesOutline,
  IoSyncOutline,
  IoWaterOutline,
  IoWifiOutline,
} from "react-icons/io5";
import type { Room, FacilityKey, HighlightKey, CardSpecKey } from "../../data";
import { useLang } from "@/lib/i18n";

const HIGHLIGHT_ICON: Record<HighlightKey, IconType> = {
  capacity: IoPeopleOutline,
  couples: IoHeartOutline,
  bedroom: IoBedOutline,
  bathroom: IoWaterOutline,
};

const FACILITY_META: Record<FacilityKey, { icon: IconType; label: string }> = {
  wifi: { icon: IoWifiOutline, label: "Wifi" },
  ac: { icon: IoSnowOutline, label: "Air Conditioning" },
  fan: { icon: IoSyncOutline, label: "Fan" },
  shower: { icon: IoWaterOutline, label: "Shower" },
  hotShower: { icon: IoWaterOutline, label: "Hot Shower" },
  parking: { icon: IoCarSportOutline, label: "Free Parking" },
  westernToilet: { icon: IoManOutline, label: "Western Toilet" },
  mosquitoNet: { icon: IoSparklesOutline, label: "Mosquito Net" },
  washBasin: { icon: IoWaterOutline, label: "Wash Basin" },
  waterTub: { icon: IoWaterOutline, label: "Traditional Water Tub & Dipper" },
  towel: { icon: IoSparklesOutline, label: "Towel" },
  toothbrush: { icon: IoSparklesOutline, label: "Toothbrush" },
  soap: { icon: IoSparklesOutline, label: "Soap" },
  amenities: { icon: IoSparklesOutline, label: "Amenities" },
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
const BOOKING_EMAIL = "info@waerebolodge.com";

function RoomCard({ room }: { room: Room }) {
  const { t } = useLang();

  return (
    <div
      data-reveal
      className="flex flex-col overflow-hidden rounded-lg border border-savana-200/40 bg-white shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="relative h-44">
        <Image
          src={room.images[0]}
          alt={room.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
 
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="mb-2 text-sm font-bold text-pale-savana-500">
          {room.title}
        </h3>
        <div className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-medium text-pale-savana-300">
          {room.cardSpecs.map((spec) => {
            const Icon = CARD_SPEC_ICON[spec.key];
            return (
              <span key={spec.label} className="inline-flex items-center gap-1">
                <Icon size={13} className="text-savana-500" />
                {spec.label}
              </span>
            );
          })}
        </div>
        <Link
          href={`/rooms/${room.slug}`}
          className="mt-auto block w-full rounded-lg bg-savana-800 px-4 py-2.5 text-center text-xs font-semibold text-white transition-colors hover:bg-savana-700"
        >
          {t("room.seeLodgeDetails")}
        </Link>
      </div>
    </div>
  );
}

export default function RoomDetail({
  room,
  otherRooms,
}: {
  room: Room;
  otherRooms: Room[];
}) {
  const [activeImage, setActiveImage] = useState(0);
  const { t } = useLang();

  const bookMessage = `Hello Waerebo Lodge!\n\nI'd like to book the "${room.title}".\n\nPlease share availability and pricing. Thank you!`;
  const bookLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    bookMessage
  )}`;
  const emailLink = `mailto:${BOOKING_EMAIL}?subject=${encodeURIComponent(
    `Booking ${room.title}`
  )}&body=${encodeURIComponent(bookMessage)}`;

  const showPreviousImage = () => {
    setActiveImage((current) =>
      current === 0 ? room.images.length - 1 : current - 1
    );
  };

  const showNextImage = () => {
    setActiveImage((current) =>
      current === room.images.length - 1 ? 0 : current + 1
    );
  };

  return (
    <>
      <section className="bg-[#f8f6ef] py-7 text-pale-savana-500 lg:py-11">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(420px,0.75fr)] lg:gap-12">
            <div className="lg:sticky lg:top-28">
              <nav
                aria-label="Breadcrumb"
                className="mb-6 flex items-center gap-2 text-sm font-semibold"
              >
                <Link
                  href="/lodge"
                  className="text-pale-savana-200 transition-colors hover:text-savana-800"
                >
                  Lodge
                </Link>
                <span className="text-pale-savana-200">/</span>
                <span>{room.title}</span>
              </nav>

              <div className="relative aspect-[1.74] min-h-[260px] overflow-hidden rounded-lg bg-savana-200 shadow-sm">
                <Image
                  src={room.images[activeImage]}
                  alt={room.title}
                  fill
                  priority
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  className="object-cover"
                />
                {room.images.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={showPreviousImage}
                      aria-label="View previous room image"
                      className="absolute top-1/2 left-5 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-pale-savana-200/70 text-white shadow-sm transition-colors hover:bg-pale-savana-300"
                    >
                      <IoChevronBack size={24} />
                    </button>
                    <button
                      type="button"
                      onClick={showNextImage}
                      aria-label="View next room image"
                      className="absolute top-1/2 right-5 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-pale-savana-200/70 text-white shadow-sm transition-colors hover:bg-pale-savana-300"
                    >
                      <IoChevronForward size={24} />
                    </button>
                  </>
                )}
              </div>

              {room.images.length > 1 && (
                <div className="mt-3 flex gap-3 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                  {room.images.map((img, imageIndex) => (
                    <button
                      key={img}
                      type="button"
                      onClick={() => setActiveImage(imageIndex)}
                      aria-label={`View image ${imageIndex + 1}`}
                      className={`relative h-24 w-28 flex-none overflow-hidden rounded-lg border transition-all sm:w-32 ${
                        activeImage === imageIndex
                          ? "border-pale-savana-500 opacity-100"
                          : "border-transparent opacity-55 hover:opacity-85"
                      }`}
                    >
                      <Image
                        src={img}
                        alt=""
                        fill
                        sizes="128px"
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <a
                  href={bookLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-14 items-center justify-center gap-2 rounded-md bg-savana-800 px-5 py-3 text-base font-semibold text-white transition-colors hover:bg-savana-green-600"
                >
                  <IoLogoWhatsapp size={20} />
                  Book Via Whatsapp
                </a>
                <a
                  href={emailLink}
                  className="flex min-h-14 items-center justify-center gap-2 rounded-md border border-pale-savana-300 px-5 py-3 text-base font-semibold text-pale-savana-500 transition-colors hover:bg-white"
                >
                  <IoMailOutline size={20} />
                  Book Via Email
                </a>
              </div>
            </div>

            <div className="pt-1">
              <h1 className="text-3xl leading-tight font-extrabold text-pale-savana-500 lg:text-4xl">
                {room.title}
              </h1>
              <p className="mt-3 max-w-xl text-base leading-relaxed font-medium text-pale-savana-300">
                {room.description}
              </p>

              <ul className="mt-8 divide-y divide-savana-200/70 border-b border-savana-200/70">
                {room.highlights.map((highlight) => {
                  const Icon = HIGHLIGHT_ICON[highlight.key];
                  return (
                    <li
                      key={highlight.key}
                      className="flex min-h-16 items-center gap-4 text-lg font-bold text-pale-savana-500"
                    >
                      <Icon
                        size={22}
                        className="flex-none text-savana-500"
                      />
                      {highlight.label}
                    </li>
                  );
                })}
              </ul>

              <section className="mt-10">
                <h2 className="text-2xl font-extrabold text-pale-savana-500">
                  Room Facility
                </h2>
                <div className="mt-5 grid grid-cols-2 gap-x-7 gap-y-4 sm:grid-cols-3">
                  {room.facilities.map((key) => {
                    const { icon: Icon, label } = FACILITY_META[key];
                    return (
                      <div
                        key={key}
                        className="flex items-center gap-2 text-sm font-bold text-pale-savana-300"
                      >
                        <Icon
                          size={16}
                          className="flex-none text-savana-500"
                        />
                        {label}
                      </div>
                    );
                  })}
                </div>
              </section>

              <section className="mt-10">
                <h2 className="text-2xl font-extrabold text-pale-savana-500">
                  Dining Arrangements
                </h2>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div className="flex min-h-12 items-center justify-center gap-2 rounded-md bg-savana-200 px-4 text-sm font-bold text-pale-savana-500">
                    <IoCafeOutline size={18} />
                    Breakfast Included
                  </div>
                  <div className="flex min-h-12 items-center justify-center gap-2 rounded-md bg-savana-200 px-4 text-sm font-bold text-pale-savana-500">
                    <IoFastFoodOutline size={18} />
                    Dinner Included
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed font-bold text-red-400 italic">
                  *Lunch is not included in this package. However, it is
                  available for an additional charge.
                </p>
              </section>

              <section className="mt-11">
                <h2 className="text-2xl font-extrabold text-pale-savana-500">
                  {t("room.locations")}
                </h2>
                <div className="relative mt-4 h-40 w-full overflow-hidden rounded-lg bg-savana-200 shadow-sm">
                  <iframe
                    title={`${room.title} location map`}
                    src="https://www.google.com/maps?q=-8.8465902,120.3055812&z=17&output=embed"
                    className="absolute inset-0 h-full w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
              </section>

              {room.reviews.length > 0 && (
                <section className="mt-12">
                  <div className="mb-6 flex items-center justify-between gap-4">
                    <h2 className="text-2xl font-extrabold text-pale-savana-500">
                      Latest Review
                    </h2>
                    <Link
                      href="/#testimonials"
                      className="text-sm font-medium text-pale-savana-300 transition-colors hover:text-savana-800"
                    >
                      See all
                    </Link>
                  </div>
                  <div className="space-y-8">
                    {room.reviews.map((review) => (
                      <article
                        key={review.name}
                        className="grid grid-cols-[56px_1fr_auto] gap-x-4"
                      >
                        <div className="relative h-14 w-14 overflow-hidden rounded-full">
                          <Image
                            src={review.avatar}
                            alt={review.name}
                            fill
                            sizes="56px"
                            className="object-cover"
                          />
                        </div>
                        <div className="min-w-0">
                          <p className="text-base leading-tight font-extrabold text-neutral-800">
                            {review.name}
                          </p>
                          <p className="text-xs font-semibold text-neutral-200">
                            {review.location}
                          </p>
                          <p className="mt-4 text-sm leading-relaxed font-medium text-pale-savana-300">
                            <span className="mr-1 text-2xl leading-none font-extrabold text-pale-savana-500">
                              &ldquo;
                            </span>
                            {review.text}
                            <span className="ml-1 text-2xl leading-none font-extrabold text-pale-savana-500">
                              &rdquo;
                            </span>
                          </p>
                        </div>
                        <div className="pt-4 text-right text-3xl font-extrabold text-savana-500">
                          {review.rating}
                          <span className="ml-1 text-base font-semibold text-neutral-200">
                            /5
                          </span>
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
              )}
            </div>
          </div>
        </div>
      </section>

      {otherRooms.length > 0 && (
        <section className="bg-white py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-center text-2xl font-bold text-pale-savana-500 lg:mb-10 lg:text-3xl">
              {t("room.moreRooms")}{" "}
              <span className="text-savana-500">{t("room.toExplore")}</span>
            </h2>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {otherRooms.map((otherRoom) => (
                <RoomCard key={otherRoom.slug} room={otherRoom} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
