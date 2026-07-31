"use client";

import Image from "next/image";
import { useState } from "react";
import type { IconType } from "react-icons";
import {
  IoBedOutline,
  IoCalendarClearOutline,
  IoCarSportOutline,
  IoCheckmarkCircleOutline,
  IoChevronBackOutline,
  IoChevronForwardOutline,
  IoHomeOutline,
  IoLogoWhatsapp,
  IoMailOutline,
  IoMapOutline,
  IoPeopleOutline,
  IoRestaurantOutline,
  IoSparklesOutline,
  IoTrailSignOutline,
} from "react-icons/io5";
import { tripPrograms, type InfoCard, type TripProgram } from "../data";

const customFeatures: { title: string; Icon: IconType }[] = [
  { title: "Private & Group Travelers", Icon: IoPeopleOutline },
  { title: "Local Expert Team", Icon: IoMapOutline },
  { title: "Flexible Itinerary", Icon: IoCalendarClearOutline },
  { title: "Waerebo Lodge Package", Icon: IoHomeOutline },
  { title: "Waerebo Village Overnight Stay", Icon: IoBedOutline },
  { title: "Iconic & Authentic Experience", Icon: IoSparklesOutline },
  { title: "Breakfast, Meals, Dinner, etc.", Icon: IoRestaurantOutline },
  { title: "Personal Accommodation Pickup", Icon: IoCarSportOutline },
];

const whatsappNumber = "6285339021145";
const email = "waerebolodge@gmail.com";

function Hero({
  program,
  onPrevious,
  onNext,
}: {
  program: TripProgram;
  onPrevious: () => void;
  onNext: () => void;
}) {
  return (
    <section
      className="relative min-h-[485px] overflow-hidden bg-savana-green-700 sm:min-h-[620px] lg:min-h-[720px]"
      aria-labelledby="trip-heading"
    >
      <Image
        key={`${program.id}-mobile`}
        src={program.heroMobile}
        alt=""
        fill
        priority
        sizes="(max-width: 767px) 100vw, 1px"
        className="object-cover object-center md:hidden"
      />
      <Image
        key={`${program.id}-desktop`}
        src={program.heroDesktop}
        alt=""
        fill
        priority
        sizes="(min-width: 768px) 100vw, 1px"
        className="hidden object-cover object-center md:block"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/5 to-black/70" />

      <div className="absolute top-24 right-0 left-0 z-10 mx-auto max-w-[1512px] px-5 text-[11px] text-white/70 sm:top-28 sm:px-8 sm:text-sm lg:px-32 xl:px-36">
        <span>Home</span>
        <span className="mx-2 text-white/40">/</span>
        <span className="font-semibold text-white">{program.title}</span>
      </div>

      <button
        type="button"
        onClick={onPrevious}
        aria-label="Previous trip package"
        className="absolute top-1/2 left-4 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/18 text-white backdrop-blur-sm transition-colors hover:bg-white/30 sm:left-8 sm:h-11 sm:w-11"
      >
        <IoChevronBackOutline size={22} />
      </button>
      <button
        type="button"
        onClick={onNext}
        aria-label="Next trip package"
        className="absolute top-1/2 right-4 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/18 text-white backdrop-blur-sm transition-colors hover:bg-white/30 sm:right-8 sm:h-11 sm:w-11"
      >
        <IoChevronForwardOutline size={22} />
      </button>

      <div className="absolute right-0 bottom-16 left-0 z-10 mx-auto max-w-[1512px] px-5 sm:bottom-24 sm:px-8 lg:px-32 xl:px-36">
        <h1
          id="trip-heading"
          className="max-w-[600px] text-[26px] leading-[1.22] font-semibold tracking-[-0.025em] text-white text-shadow-lg sm:text-4xl lg:max-w-[1000px] lg:text-[44px] lg:leading-[1.12]"
        >
          {program.heroTitle}
        </h1>
      </div>
    </section>
  );
}

function ProgramSelector({
  activeId,
  onSelect,
}: {
  activeId: string;
  onSelect: (id: string) => void;
}) {
  return (
    <div className="relative z-20 -mt-11 sm:-mt-14">
      <div className="mx-auto flex max-w-[1512px] snap-x snap-mandatory [scrollbar-width:none] gap-3 overflow-x-auto px-5 pb-3 sm:px-8 lg:grid lg:max-w-[1260px] lg:grid-cols-6 lg:gap-2 lg:overflow-visible lg:px-0 [&::-webkit-scrollbar]:hidden">
        {tripPrograms.map((program) => {
          const active = program.id === activeId;
          return (
            <button
              key={program.id}
              type="button"
              aria-pressed={active}
              onClick={(event) => {
                onSelect(program.id);
                event.currentTarget.scrollIntoView({
                  behavior: window.matchMedia(
                    "(prefers-reduced-motion: reduce)"
                  ).matches
                    ? "auto"
                    : "smooth",
                  block: "nearest",
                  inline: "center",
                });
              }}
              className={`min-h-[86px] w-[210px] flex-none snap-center rounded-xl px-4 py-3 text-left transition-[background-color,color,transform] duration-300 sm:w-[250px] lg:w-auto lg:min-w-0 ${
                active
                  ? "bg-white text-savana-800 shadow-[0_5px_8px_rgba(38,35,22,0.16)]"
                  : "bg-white/92 text-pale-savana-300 shadow-sm hover:-translate-y-0.5 hover:bg-white"
              }`}
            >
              <span className="mb-1 block text-[10px] font-semibold text-savana-500">
                {program.duration}
              </span>
              <span className="block text-[13px] leading-snug font-semibold sm:text-sm">
                {program.title}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function SummaryList({ program }: { program: TripProgram }) {
  return (
    <div className="mt-7 space-y-4">
      {program.summary.map((item) => (
        <div key={item.title} className="flex items-start gap-3">
          <IoCheckmarkCircleOutline
            aria-hidden="true"
            size={20}
            className="mt-0.5 flex-none text-savana-500"
          />
          <div>
            <h3 className="text-[13px] leading-snug font-semibold text-savana-800 sm:text-sm">
              {item.title}
            </h3>
            <p className="mt-0.5 text-[11px] leading-relaxed text-pale-savana-300 sm:text-sm">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-3">
      {items.map((item) => (
        <li
          key={item}
          className="flex gap-3 text-[11px] leading-relaxed text-pale-savana-300 sm:text-sm"
        >
          <span className="mt-[7px] h-1.5 w-1.5 flex-none rounded-full bg-savana-500" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function InfoCards({ cards }: { cards: InfoCard[] }) {
  return (
    <div
      className={`mt-4 grid gap-2 sm:gap-3 ${
        cards.length >= 3 ? "sm:grid-cols-3" : "sm:grid-cols-2"
      }`}
    >
      {cards.map((card) => (
        <div
          key={card.title}
          className={`rounded-lg px-4 py-3.5 ${
            card.tone === "accent"
              ? "bg-savana-200 text-savana-800"
              : "bg-white text-pale-savana-400"
          }`}
        >
          <h3 className="text-[12px] leading-snug font-semibold sm:text-sm">
            {card.title}
          </h3>
          <p className="mt-1.5 text-[10px] leading-relaxed opacity-80 sm:text-xs">
            {card.description}
          </p>
        </div>
      ))}
    </div>
  );
}

function splitDay(day: string) {
  const [label, ...route] = day.split(" - ");
  return { label, route: route.join(" - ") };
}

function TripSidebar({ program }: { program: TripProgram }) {
  const days = Array.from(new Set(program.stops.map((stop) => stop.day)));
  const whatsappMessage = encodeURIComponent(
    `Hello Waerebo Lodge! I would like to book the ${program.title} trip.`
  );
  const emailSubject = encodeURIComponent(`Booking request — ${program.title}`);

  return (
    <aside className="hidden lg:block">
      <div className="sticky top-24 max-h-[calc(100vh-7rem)] [scrollbar-width:thin] overflow-y-auto pb-3">
        <nav
          aria-label={`${program.title} page sections`}
          className="rounded-xl bg-white px-5 py-5 shadow-[0_4px_8px_rgba(69,61,24,0.10)]"
        >
          <div className="space-y-3 text-sm font-semibold text-savana-800">
            <a href="#trip-summary" className="block hover:text-savana-500">
              Trip Summary
            </a>
            <a href="#accommodation" className="block hover:text-savana-500">
              Accommodation
            </a>
            <a href="#meals-dining" className="block hover:text-savana-500">
              Meals &amp; Dining
            </a>
          </div>

          <div className="mt-5 space-y-5">
            {days.map((day) => {
              const { label, route } = splitDay(day);
              const dayStops = program.stops.filter((stop) => stop.day === day);
              return (
                <div key={day}>
                  <p className="text-[11px] leading-snug font-semibold text-savana-600">
                    {label}
                    {route ? ` — ${route}` : ""}
                  </p>
                  <div className="mt-2 space-y-1.5">
                    {dayStops.map((stop) => (
                      <a
                        key={stop.id}
                        href={`#${stop.id}`}
                        className="flex gap-2 text-[10px] leading-snug text-pale-savana-300 transition-colors hover:text-savana-600"
                      >
                        <span aria-hidden="true" className="text-savana-300">
                          ↳
                        </span>
                        <span>{stop.title}</span>
                      </a>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </nav>

        <div className="mt-3 grid gap-2">
          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-11 items-center justify-center gap-2 rounded-lg bg-savana-800 px-3 text-[11px] font-semibold text-white transition-colors hover:bg-savana-700"
          >
            <IoLogoWhatsapp size={15} />
            Book Trip via WhatsApp
          </a>
          <a
            href={`mailto:${email}?subject=${emailSubject}`}
            className="flex min-h-11 items-center justify-center gap-2 rounded-lg border border-savana-600 bg-white px-3 text-[11px] font-semibold text-savana-800 transition-colors hover:bg-savana-200"
          >
            <IoMailOutline size={15} />
            Book Trip via Email
          </a>
        </div>
      </div>
    </aside>
  );
}

function TripOverview({ program }: { program: TripProgram }) {
  return (
    <section className="in-view px-5 pt-8 pb-14 sm:px-8 sm:pt-14 sm:pb-20 lg:px-0 lg:pt-16 lg:pb-14">
      <div id="trip-summary" className="scroll-mt-28">
        <div>
          <h2 className="text-[23px] leading-tight font-bold tracking-[-0.025em] text-savana-800 sm:text-3xl">
            Trip Summary
          </h2>
          <p className="mt-3 max-w-[65ch] text-[11px] leading-[1.75] text-pale-savana-300 sm:text-sm">
            {program.overview}
          </p>
          <SummaryList program={program} />
        </div>

        <div className="mt-10 space-y-9">
          <div>
            <h2 className="text-lg font-bold text-savana-800 sm:text-2xl">
              What You Get
            </h2>
            <BulletList items={program.experiences} />
          </div>
          <div>
            <h2 className="text-lg font-bold text-savana-800 sm:text-2xl">
              Travelers Notes
            </h2>
            <BulletList items={program.notes} />
          </div>
        </div>
      </div>

      <div className="mt-11 grid gap-10">
        <div id="accommodation" className="scroll-mt-28">
          <h2 className="text-lg font-bold text-savana-800 sm:text-2xl">
            Accommodation
          </h2>
          <InfoCards cards={program.accommodation} />
        </div>
        <div id="meals-dining" className="scroll-mt-28">
          <h2 className="text-lg font-bold text-savana-800 sm:text-2xl">
            Meals &amp; Dining
          </h2>
          <InfoCards cards={program.meals} />
        </div>
      </div>
    </section>
  );
}

function Connector({ index }: { index: number }) {
  const type = (index % 4) + 1;
  const direction = index % 2 === 0 ? "right" : "left";
  const mobile = `/Trip Package/Line/Type=${type}, Direction=${direction}, Device=Mobile.svg`;
  const desktop = `/Trip Package/Line/Type=${type}, Direction=${direction}, Device=Desktop.svg`;

  return (
    <div
      aria-hidden="true"
      className="my-1 h-[112px] sm:h-[150px] lg:h-[210px]"
    >
      <Image
        src={mobile}
        alt=""
        width={353}
        height={201}
        unoptimized
        className="h-full w-full object-contain lg:hidden"
      />
      <Image
        src={desktop}
        alt=""
        width={910}
        height={360}
        unoptimized
        className="hidden h-full w-full object-contain lg:block"
      />
    </div>
  );
}

function Itinerary({ program }: { program: TripProgram }) {
  return (
    <section className="in-view px-5 pb-20 sm:px-8 sm:pb-28 lg:px-0">
      <h2 className="mb-10 text-[23px] leading-tight font-bold tracking-[-0.025em] text-savana-800 sm:mb-16 sm:text-3xl lg:mb-14">
        Itinerary Timeline
      </h2>

      <div>
        {program.stops.map((stop, index) => {
          const newDay =
            index === 0 || program.stops[index - 1].day !== stop.day;
          const reverse = index % 2 === 1;
          const { label: dayLabel, route } = splitDay(stop.day);

          return (
            <div key={stop.id}>
              {newDay && (
                <div className="mb-7 scroll-mt-28 sm:mb-10 lg:mb-12">
                  <div className="flex items-center gap-3 lg:hidden">
                    <span className="text-xs font-semibold text-savana-500 sm:text-sm">
                      Journey {dayLabel}
                    </span>
                    <span className="h-px flex-1 bg-savana-200" />
                  </div>
                  {route && (
                    <>
                      <p className="hidden text-xs font-semibold text-savana-500 lg:block">
                        Itinerary {dayLabel}
                      </p>
                      <h3 className="mt-1 text-lg font-bold text-savana-800 sm:text-xl lg:text-2xl">
                        {route}
                      </h3>
                    </>
                  )}
                </div>
              )}

              <article
                id={stop.id}
                className={`flex scroll-mt-28 flex-col gap-4 lg:min-h-[280px] lg:items-center lg:gap-10 ${
                  reverse ? "lg:flex-row-reverse" : "lg:flex-row"
                }`}
              >
                <div className="relative h-[175px] w-full sm:h-[230px] lg:h-[260px] lg:w-1/2">
                  <Image
                    src={stop.image}
                    alt={stop.title}
                    fill
                    sizes="(min-width: 1024px) 380px, 90vw"
                    className="object-contain"
                  />
                </div>

                <div className="lg:w-1/2">
                  <h3 className="text-[17px] leading-tight font-semibold tracking-[-0.015em] text-savana-800 sm:text-2xl">
                    {stop.title}
                  </h3>
                  <div className="mt-2 flex items-center gap-2 text-[9px] font-medium text-savana-600 sm:text-xs">
                    <IoTrailSignOutline aria-hidden="true" size={14} />
                    <span>{stop.meta}</span>
                  </div>
                  <p className="mt-3 max-w-[60ch] text-[10px] leading-[1.7] text-pale-savana-300 sm:text-sm">
                    {stop.description}
                  </p>
                </div>
              </article>

              {index < program.stops.length - 1 && <Connector index={index} />}
            </div>
          );
        })}
      </div>
    </section>
  );
}

function CustomItinerary() {
  const whatsappMessage = encodeURIComponent(
    "Hello Waerebo Lodge! I would like to create a custom Flores and Waerebo itinerary."
  );
  const emailSubject = encodeURIComponent("Custom Waerebo itinerary request");

  return (
    <section className="in-view mx-auto max-w-[880px] px-5 pt-9 pb-20 sm:px-8 sm:pt-16 sm:pb-28 lg:max-w-[780px] lg:px-0 lg:pt-20 lg:pb-32">
      <div className="max-w-[670px]">
        <h2 className="text-[25px] leading-[1.08] font-bold tracking-[-0.03em] text-savana-800 sm:text-4xl">
          Looking for a more flexible trip?
        </h2>
        <p className="mt-4 text-[11px] leading-[1.75] text-pale-savana-300 sm:text-sm">
          We can help you create a private itinerary based on your travel dates,
          group size, interests, and preferred pace. Whether you want to combine
          Waerebo with waterfalls, rice fields, local villages, island trips, or
          a longer Flores overland journey, our team will shape the experience
          around you.
        </p>
      </div>

      <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {customFeatures.map(({ title, Icon }) => (
          <div
            key={title}
            className="flex min-h-[108px] flex-col items-center justify-center rounded-lg bg-white px-3 py-4 text-center shadow-[0_2px_6px_rgba(69,61,24,0.10)]"
          >
            <Icon aria-hidden="true" size={25} className="text-savana-500" />
            <h3 className="mt-2 text-[10px] leading-snug font-semibold text-savana-800 sm:text-xs">
              {title}
            </h3>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <h2 className="text-[21px] font-bold text-savana-800 sm:text-3xl">
          Travelers Notes
        </h2>
        <p className="mt-2 text-[11px] leading-[1.75] text-pale-savana-300 sm:text-sm">
          As this is a fully customized journey, physical requirements and
          available facilities depend on the final itinerary. Travel to Waerebo
          and the surrounding Flores region generally involves outdoor
          activities, changing climates, uneven roads, trekking, and basic
          village infrastructure with limited electricity.
        </p>
        <p className="mt-4 text-[11px] leading-[1.75] text-pale-savana-300 sm:text-sm">
          We recommend versatile clothing, comfortable walking or trekking
          shoes, a flashlight, sun protection, light rain gear, and personal
          essentials. Our team will provide a detailed packing list once your
          itinerary is finalized.
        </p>
      </div>

      <div className="mt-10 grid gap-3 sm:grid-cols-2">
        <a
          href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-12 items-center justify-center gap-2 rounded-lg bg-savana-800 px-5 py-3 text-center text-xs font-semibold text-white transition-colors hover:bg-savana-700 sm:text-sm"
        >
          <IoLogoWhatsapp size={18} />
          Create Custom Trip via WhatsApp
        </a>
        <a
          href={`mailto:${email}?subject=${emailSubject}`}
          className="flex min-h-12 items-center justify-center gap-2 rounded-lg border border-savana-800 px-5 py-3 text-center text-xs font-semibold text-savana-800 transition-colors hover:bg-savana-200 sm:text-sm"
        >
          <IoMailOutline size={18} />
          Create Custom Trip via Email
        </a>
      </div>
    </section>
  );
}

function TripDetails({ program }: { program: TripProgram }) {
  return (
    <div className="mx-auto max-w-[1180px] lg:grid lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-16 lg:px-12 xl:px-0">
      <TripSidebar program={program} />
      <div className="min-w-0">
        <TripOverview program={program} />
        <Itinerary program={program} />
      </div>
    </div>
  );
}

export default function TripContent() {
  const [activeId, setActiveId] = useState(tripPrograms[0].id);
  const activeIndex = Math.max(
    0,
    tripPrograms.findIndex((program) => program.id === activeId)
  );
  const program = tripPrograms[activeIndex];

  const move = (direction: -1 | 1) => {
    const nextIndex =
      (activeIndex + direction + tripPrograms.length) % tripPrograms.length;
    setActiveId(tripPrograms[nextIndex].id);
  };

  return (
    <div className="bg-savana-50">
      <Hero
        program={program}
        onPrevious={() => move(-1)}
        onNext={() => move(1)}
      />
      <ProgramSelector activeId={activeId} onSelect={setActiveId} />

      <div
        key={program.id}
        className="motion-safe:animate-[trip-content-in_500ms_cubic-bezier(0.22,1,0.36,1)]"
      >
        {program.custom ? (
          <CustomItinerary />
        ) : (
          <TripDetails program={program} />
        )}
      </div>
    </div>
  );
}
