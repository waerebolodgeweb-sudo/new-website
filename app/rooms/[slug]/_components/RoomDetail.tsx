"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { IconType } from "react-icons";
import {
  IoBedOutline,
  IoCafeOutline,
  IoCarSportOutline,
  IoChevronBack,
  IoChevronForward,
  IoClose,
  IoExpandOutline,
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
const MORE_ROOM_ORDER = [
  "standard-double",
  "standard-twin-2",
  "wooden-twin-1",
  "wooden-double",
  "deluxe-double-2",
  "deluxe-twin-1",
];

function RoomCard({ room }: { room: Room }) {
  const { t } = useLang();
  const cardTitle = room.cardTitle ?? room.title;
  const cardImage = room.cardImage ?? room.images[0];

  return (
    <div>
      <div className="flex w-full flex-col gap-4 rounded-3xl bg-white px-2 pt-2 pb-5 shadow-xl shadow-black/10">
        <div className="relative aspect-[7.62/4] w-full overflow-hidden rounded-[20px] bg-neutral-100">
          <Image
            src={cardImage}
            alt={cardTitle}
            fill
            sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-2 px-4">
          <h3 className="text-2xl leading-tight font-semibold text-black">
            {cardTitle}
          </h3>
          <div className="flex flex-wrap items-center gap-3 pb-2">
            {room.cardSpecs.map((spec, index) => {
              const Icon = CARD_SPEC_ICON[spec.key];
              const label =
                spec.key === "people"
                  ? t("cardSpec.people", spec.label.replace("Guests", "People"))
                  : t(`cardSpec.${spec.key}`, spec.label);

              return (
                <div key={spec.key} className="flex items-center gap-3">
                  {index > 0 && (
                    <span className="h-4 w-0.5 rounded-full bg-neutral-050" />
                  )}
                  <span className="flex items-center gap-1 text-sm font-semibold text-neutral-400">
                    <Icon size={18} className="text-neutral-400" />
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
            className="flex min-h-12 w-full items-center justify-center rounded-xl bg-savana-800 px-4 text-base font-medium text-white transition-colors hover:bg-savana-700"
          >
            {t("lodge.seeDetails")}
          </Link>
        </div>
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
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const thumbnailRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const previewThumbnailRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const { t } = useLang();

  const bookMessage = `Hello Waerebo Lodge!\n\nI'd like to book the "${room.title}".\n\nPlease share availability and pricing. Thank you!`;
  const bookLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    bookMessage
  )}`;
  const emailLink = `mailto:${BOOKING_EMAIL}?subject=${encodeURIComponent(
    `Booking ${room.title}`
  )}&body=${encodeURIComponent(bookMessage)}`;
  const orderedOtherRooms = [
    ...MORE_ROOM_ORDER.map((slug) =>
      otherRooms.find((otherRoom) => otherRoom.slug === slug)
    ).filter((otherRoom): otherRoom is Room => Boolean(otherRoom)),
    ...otherRooms.filter(
      (otherRoom) => !MORE_ROOM_ORDER.includes(otherRoom.slug)
    ),
  ].slice(0, 6);

  const showPreviousImage = useCallback(() => {
    setActiveImage((current) =>
      current === 0 ? room.images.length - 1 : current - 1
    );
  }, [room.images.length]);

  const showNextImage = useCallback(() => {
    setActiveImage((current) =>
      current === room.images.length - 1 ? 0 : current + 1
    );
  }, [room.images.length]);

  const openPreview = (imageIndex = activeImage) => {
    setActiveImage(imageIndex);
    setIsPreviewOpen(true);
  };

  useEffect(() => {
    if (!isPreviewOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsPreviewOpen(false);
      if (event.key === "ArrowLeft") showPreviousImage();
      if (event.key === "ArrowRight") showNextImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isPreviewOpen, showNextImage, showPreviousImage]);

  useEffect(() => {
    thumbnailRefs.current[activeImage]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [activeImage]);

  useEffect(() => {
    if (!isPreviewOpen) return;

    previewThumbnailRefs.current[activeImage]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [activeImage, isPreviewOpen]);

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

              <div className="relative">
                <button
                  type="button"
                  onClick={() => openPreview()}
                  aria-label="Open room image preview"
                  className="group relative block aspect-[7.62/4] w-full overflow-hidden rounded-lg bg-savana-200 text-left shadow-sm"
                >
                  <Image
                    src={room.images[activeImage]}
                    alt={room.title}
                    fill
                    priority
                    sizes="(min-width: 1024px) 55vw, 100vw"
                    className="object-cover"
                  />
                  <span className="absolute right-4 bottom-4 flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-savana-800 opacity-0 shadow-sm transition-opacity group-hover:opacity-100">
                    <IoExpandOutline size={18} />
                    {t("room.preview")}
                  </span>
                </button>

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
                <div className="mt-3 flex [scrollbar-width:none] gap-3 overflow-x-auto pb-1 [&::-webkit-scrollbar]:hidden">
                  {room.images.map((img, imageIndex) => (
                    <button
                      key={img}
                      ref={(element) => {
                        thumbnailRefs.current[imageIndex] = element;
                      }}
                      type="button"
                      onClick={() => setActiveImage(imageIndex)}
                      onDoubleClick={() => openPreview(imageIndex)}
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
                  {t("booking.via.whatsapp")}
                </a>
                <a
                  href={emailLink}
                  className="flex min-h-14 items-center justify-center gap-2 rounded-md border border-pale-savana-300 px-5 py-3 text-base font-semibold text-pale-savana-500 transition-colors hover:bg-white"
                >
                  <IoMailOutline size={20} />
                  {t("booking.via.email")}
                </a>
              </div>
            </div>

            <div className="pt-1">
              <h1 className="text-3xl leading-tight font-extrabold text-pale-savana-500 lg:text-4xl">
                {room.title}
              </h1>
              <p className="mt-3 max-w-xl text-base leading-relaxed font-medium text-pale-savana-300">
                {t(`rooms.${room.slug}.description`, room.description)}
              </p>

              <ul className="mt-8 divide-y divide-savana-200/70 border-b border-savana-200/70">
                {room.highlights.map((highlight) => {
                  const Icon = HIGHLIGHT_ICON[highlight.key];
                  return (
                    <li
                      key={highlight.key}
                      className="flex min-h-16 items-center gap-4 text-lg font-bold text-pale-savana-500"
                    >
                      <Icon size={22} className="flex-none text-savana-500" />
                      {t(
                        `rooms.${room.slug}.highlight.${highlight.key}`,
                        highlight.label
                      )}
                    </li>
                  );
                })}
              </ul>

              <section className="mt-10">
                <h2 className="text-2xl font-extrabold text-pale-savana-500">
                  {t("room.facility")}
                </h2>
                <div className="mt-5 grid grid-cols-2 gap-x-7 gap-y-4 sm:grid-cols-3">
                  {room.facilities.map((key) => {
                    const { icon: Icon, label } = FACILITY_META[key];
                    return (
                      <div
                        key={key}
                        className="flex items-center gap-2 text-sm font-bold text-pale-savana-300"
                      >
                        <Icon size={16} className="flex-none text-savana-500" />
                        {t(`facility.${key}`, label)}
                      </div>
                    );
                  })}
                </div>
              </section>

              <section className="mt-10">
                <h2 className="text-2xl font-extrabold text-pale-savana-500">
                  {t("room.diningArrangements")}
                </h2>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div className="flex min-h-12 items-center justify-center gap-2 rounded-md bg-savana-200 px-4 text-sm font-bold text-pale-savana-500">
                    <IoCafeOutline size={18} />
                    {t("room.breakfastIncluded")}
                  </div>
                  <div className="flex min-h-12 items-center justify-center gap-2 rounded-md bg-savana-200 px-4 text-sm font-bold text-pale-savana-500">
                    <IoFastFoodOutline size={18} />
                    {t("room.dinnerIncluded")}
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed font-bold text-red-400 italic">
                  {t("room.lunchNote")}
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
                      {t("room.latestReview")}
                    </h2>
                    <Link
                      href="/#testimonials"
                      className="text-sm font-medium text-pale-savana-300 transition-colors hover:text-savana-800"
                    >
                      {t("room.seeAll")}
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

      {orderedOtherRooms.length > 0 && (
        <section className="bg-savana-200 py-16 lg:py-24">
          <div className="mx-auto max-w-[1512px] px-6 lg:px-20">
            <h2 className="mb-12 text-center text-4xl leading-tight font-normal text-savana-800 lg:mb-16 lg:text-6xl">
              {t("room.discoverMore")}{" "}
              <span className="font-semibold">{t("room.roomOptions")}</span>
            </h2>
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {orderedOtherRooms.map((otherRoom) => (
                <RoomCard key={otherRoom.slug} room={otherRoom} />
              ))}
            </div>
            <div className="mt-16 flex justify-center">
              <Link
                href="/lodge"
                className="flex min-h-14 w-full max-w-[320px] items-center justify-center rounded-lg border border-savana-800 px-6 text-base font-medium text-savana-800 transition-colors hover:bg-savana-800 hover:text-white"
              >
                {t("room.seeAllRoom")}
              </Link>
            </div>
          </div>
        </section>
      )}

      {isPreviewOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${room.title} image preview`}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-4 py-5 backdrop-blur-sm"
        >
          <button
            type="button"
            aria-label="Close image preview"
            onClick={() => setIsPreviewOpen(false)}
            className="absolute top-5 right-5 z-20 grid h-12 w-12 place-items-center rounded-full bg-white/90 text-savana-800 shadow-lg transition-colors hover:bg-white"
          >
            <IoClose size={28} />
          </button>

          {room.images.length > 1 && (
            <>
              <button
                type="button"
                onClick={showPreviousImage}
                aria-label="View previous room image"
                className="absolute top-1/2 left-4 z-20 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-savana-800 shadow-lg transition-colors hover:bg-white lg:left-8"
              >
                <IoChevronBack size={28} />
              </button>
              <button
                type="button"
                onClick={showNextImage}
                aria-label="View next room image"
                className="absolute top-1/2 right-4 z-20 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-savana-800 shadow-lg transition-colors hover:bg-white lg:right-8"
              >
                <IoChevronForward size={28} />
              </button>
            </>
          )}

          <div className="flex h-full w-full max-w-6xl flex-col justify-center gap-4">
            <div className="relative min-h-0 flex-1 overflow-hidden rounded-2xl bg-black/40 shadow-2xl">
              <Image
                src={room.images[activeImage]}
                alt={room.title}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>

            {room.images.length > 1 && (
              <div className="mx-auto flex max-w-full [scrollbar-width:none] gap-3 overflow-x-auto rounded-2xl bg-black/25 p-2 [&::-webkit-scrollbar]:hidden">
                {room.images.map((img, imageIndex) => (
                  <button
                    key={img}
                    ref={(element) => {
                      previewThumbnailRefs.current[imageIndex] = element;
                    }}
                    type="button"
                    onClick={() => setActiveImage(imageIndex)}
                    aria-label={`Preview image ${imageIndex + 1}`}
                    className={`relative h-20 w-28 flex-none overflow-hidden rounded-xl border-2 transition-all sm:h-24 sm:w-36 ${
                      activeImage === imageIndex
                        ? "border-white opacity-100"
                        : "border-transparent opacity-60 hover:opacity-90"
                    }`}
                  >
                    <Image
                      src={img}
                      alt=""
                      fill
                      sizes="144px"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
