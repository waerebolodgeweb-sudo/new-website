"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import type { IconType } from "react-icons";
import { NewIcon, type NewIconName } from "@/components/icons/new-icons";
import {
  IoCalendar,
  IoCar,
  IoChevronBack,
  IoChevronForward,
  IoHome,
  IoLogoWhatsapp,
  IoMail,
  IoMailOutline,
  IoPeople,
  IoThumbsUp,
  IoTime,
} from "react-icons/io5";
import { type InfoCard, type SummaryIcon, type TripProgram } from "../data";
import { getTripPrograms } from "../localize";
import { useLang } from "@/lib/i18n";

const customFeatures: {
  titleKey: string;
  Icon?: IconType;
  iconName?: NewIconName;
}[] = [
  { titleKey: "trip.custom.feature.travelers", Icon: IoPeople },
  { titleKey: "trip.custom.feature.team", Icon: IoThumbsUp },
  { titleKey: "trip.custom.feature.flexible", Icon: IoCalendar },
  { titleKey: "trip.custom.feature.lodge", Icon: IoHome },
  { titleKey: "trip.custom.feature.village", iconName: "village" },
  { titleKey: "trip.custom.feature.authentic", iconName: "waterfalls" },
  { titleKey: "trip.custom.feature.meals", iconName: "lunch" },
  { titleKey: "trip.custom.feature.accommodation", Icon: IoCar },
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
  const { t } = useLang();

  return (
    <section
      className="relative min-h-[485px] overflow-hidden bg-savana-green-700 sm:min-h-[620px] lg:min-h-[650px]"
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
        <span>{t("trip.home")}</span>
        <span className="mx-2 text-white/40">/</span>
        <span className="font-semibold text-white">{program.title}</span>
      </div>

      <button
        type="button"
        onClick={onPrevious}
        aria-label={t("trip.previousPackage")}
        className="absolute top-1/2 left-4 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/18 text-white backdrop-blur-sm transition-colors hover:bg-white/30 sm:left-8 sm:h-11 sm:w-11"
      >
        <IoChevronBack size={22} />
      </button>
      <button
        type="button"
        onClick={onNext}
        aria-label={t("trip.nextPackage")}
        className="absolute top-1/2 right-4 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/18 text-white backdrop-blur-sm transition-colors hover:bg-white/30 sm:right-8 sm:h-11 sm:w-11"
      >
        <IoChevronForward size={22} />
      </button>

      <div className="absolute right-0 bottom-16 left-0 z-10 mx-auto max-w-[1512px] px-5 sm:bottom-24 sm:px-8 lg:px-32 xl:px-36">
        <h1
          id="trip-heading"
          className="max-w-[600px] text-[26px] leading-[1.22] font-semibold tracking-[-0.025em] text-white text-shadow-lg sm:text-4xl lg:max-w-[700px] lg:text-[42px] lg:leading-[1.12]"
        >
          {program.heroTitle}
        </h1>
      </div>
    </section>
  );
}

function ProgramSelector({
  programs,
  activeId,
  onSelect,
}: {
  programs: TripProgram[];
  activeId: string;
  onSelect: (id: string) => void;
}) {
  return (
    <div className="relative z-20 -mt-11 sm:-mt-14">
      <div className="mx-auto flex max-w-[1512px] snap-x snap-mandatory [scrollbar-width:none] gap-3 overflow-x-auto px-5 pb-3 sm:px-8 lg:max-w-[1224px] lg:gap-2 lg:overflow-visible lg:px-0 [&::-webkit-scrollbar]:hidden">
        {programs.map((program) => {
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
              className={`min-h-[86px] flex-none snap-center overflow-hidden rounded-xl px-4 py-3 text-left transition-[width,flex-basis,background-color,color,transform] duration-300 motion-reduce:transition-none lg:min-w-0 ${
                active
                  ? "w-[250px] bg-white text-savana-800 shadow-[0_5px_8px_rgba(38,35,22,0.16)] sm:w-[280px] lg:w-auto lg:max-w-[280px] lg:flex-[2_1_220px]"
                  : "w-[180px] max-w-[180px] bg-white/92 text-savana-800 shadow-sm hover:-translate-y-0.5 hover:bg-white lg:w-auto lg:flex-[1_1_140px]"
              }`}
            >
              <span className="mb-1 block truncate text-[14px] text-savana-700 italic">
                {program.duration}
              </span>
              <span
                className={`block text-xl leading-snug font-semibold ${
                  active ? "whitespace-normal" : "truncate"
                }`}
              >
                {program.title}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function SummaryItemIcon({ icon }: { icon: SummaryIcon }) {
  if (icon === "people") {
    return <IoPeople aria-hidden="true" size={24} className="flex-none" />;
  }
  if (icon === "thumbs-up") {
    return <IoThumbsUp aria-hidden="true" size={24} className="flex-none" />;
  }
  if (icon === "car") {
    return <IoCar aria-hidden="true" size={24} className="flex-none" />;
  }
  if (icon === "calendar") {
    return <IoCalendar aria-hidden="true" size={24} className="flex-none" />;
  }

  return (
    <NewIcon aria-hidden="true" name={icon} size={24} className="flex-none" />
  );
}

function getStopMetaIcon(meta: string): NewIconName | undefined {
  const normalized = meta.toLowerCase();

  if (/motorbike|motorcycle|ojek|bike|sepeda motor/.test(normalized))
    return "bike";
  if (/walk|trek|hiking|berjalan|jalan kaki/.test(normalized)) return "walk";
  if (/boat|perahu/.test(normalized)) return "boat";
  if (/car|vehicle|transfer|mobil|kendaraan/.test(normalized)) return "car";
  if (/breakfast|coffee|sarapan|kopi/.test(normalized)) return "breakfast";
  if (/lunch|makan siang/.test(normalized)) return "lunch";

  return undefined;
}

function StopMeta({ meta }: { meta: string }) {
  const items = meta
    .split("·")
    .map((item) => item.trim())
    .filter(Boolean);

  return (
    <div className="mt-2 flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-[11px] font-medium text-savana-600 sm:text-sm">
      {items.map((item, index) => {
        const icon = getStopMetaIcon(item);

        return (
          <div key={`${item}-${index}`} className="contents">
            {index > 0 && (
              <span
                aria-hidden="true"
                className="h-4 w-px flex-none bg-savana-200"
              />
            )}
            <span className="flex items-center gap-2">
              {icon ? (
                <NewIcon
                  aria-hidden="true"
                  name={icon}
                  size={18}
                  className="flex-none"
                />
              ) : (
                <IoTime aria-hidden="true" size={18} className="flex-none" />
              )}
              <span>{item}</span>
            </span>
          </div>
        );
      })}
    </div>
  );
}

function SummaryList({ program }: { program: TripProgram }) {
  return (
    <div className="mt-7 space-y-3">
      {program.summary.map((item) => (
        <div
          key={item.title}
          className="flex items-center gap-4 border-b border-savana-200 py-6 last:border-b-0 last:pb-0"
        >
          <span className="mt-0.5 text-savana-500">
            <SummaryItemIcon icon={item.icon} />
          </span>
          <div>
            <h3 className="text-base leading-snug font-semibold text-savana-800 sm:text-xl">
              {item.title}
            </h3>
            {item.description && (
              <p className="mt-0.5 text-[11px] leading-relaxed text-savana-800 sm:text-sm">
                {item.description}
              </p>
            )}
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
          className="flex gap-3 text-[11px] leading-relaxed text-savana-800 sm:text-sm"
        >
          <NewIcon
            aria-hidden="true"
            name="check"
            size={24}
            className="mt-1 flex-none text-savana-500"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function ParagraphList({ items }: { items: string[] }) {
  return (
    <div className="mt-4 space-y-4">
      {items.map((item) => (
        <p
          key={item}
          className="max-w-[72ch] text-[11px] leading-relaxed text-savana-800 sm:text-sm"
        >
          {item}
        </p>
      ))}
    </div>
  );
}

function HighlightedCardText({ card }: { card: InfoCard }) {
  const separator = card.separator ?? ", ";
  const content = `${card.title}${separator}${card.description}`;
  const emphasizedPhrases = card.emphasis ?? [card.title];

  if (emphasizedPhrases.length === 0) {
    return content;
  }

  const parts: { text: string; emphasized: boolean }[] = [];
  let cursor = 0;

  while (cursor < content.length) {
    const nextMatch = emphasizedPhrases
      .map((phrase) => ({ phrase, index: content.indexOf(phrase, cursor) }))
      .filter(({ index }) => index >= 0)
      .sort(
        (a, b) => a.index - b.index || b.phrase.length - a.phrase.length
      )[0];

    if (!nextMatch) {
      parts.push({ text: content.slice(cursor), emphasized: false });
      break;
    }

    if (nextMatch.index > cursor) {
      parts.push({
        text: content.slice(cursor, nextMatch.index),
        emphasized: false,
      });
    }

    parts.push({ text: nextMatch.phrase, emphasized: true });
    cursor = nextMatch.index + nextMatch.phrase.length;
  }

  return parts.map((part, index) =>
    part.emphasized ? (
      <strong
        key={`${part.text}-${index}`}
        className={
          card.emphasisTone === "danger"
            ? "font-semibold text-red-500"
            : "font-semibold text-savana-800"
        }
      >
        {part.text}
      </strong>
    ) : (
      <span key={`${part.text}-${index}`}>{part.text}</span>
    )
  );
}

function InfoCards({
  cards,
  variant = "default",
}: {
  cards: InfoCard[];
  variant?: "default" | "accommodation";
}) {
  return (
    <div
      className={`mt-4 grid gap-2 sm:gap-3 ${
        cards.length >= 3 ? "sm:grid-cols-3" : "sm:grid-cols-2"
      }`}
    >
      {cards.map((card) => (
        <div
          key={card.title}
          className={`rounded-lg px-4 py-3.5 text-[14px] leading-relaxed text-savana-800/80 sm:text-base ${
            variant === "accommodation"
              ? "border border-savana-200 bg-savana-200/25"
              : "bg-savana-200"
          }`}
        >
          <HighlightedCardText card={card} />
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
  const { t } = useLang();
  const [activeSection, setActiveSection] = useState("trip-summary");
  const navRef = useRef<HTMLElement>(null);
  const days = useMemo(
    () => Array.from(new Set(program.stops.map((stop) => stop.day))),
    [program.stops]
  );
  const singleDay = program.id === "one-day-trek";
  const whatsappMessage = encodeURIComponent(
    `${t("trip.message.book")} ${program.title}.`
  );
  const emailSubject = encodeURIComponent(
    `${t("trip.email.bookSubject")} — ${program.title}`
  );

  useEffect(() => {
    const sectionIds = [
      "trip-summary",
      "accommodation",
      "meals-dining",
      ...(singleDay
        ? ["itinerary-timeline", ...program.stops.map((stop) => stop.id)]
        : days.flatMap((day, dayIndex) => [
            `itinerary-day-${dayIndex + 1}`,
            ...program.stops
              .filter((stop) => stop.day === day)
              .map((stop) => stop.id),
          ])),
    ];
    let frame = 0;

    const updateActiveSection = () => {
      frame = 0;
      const activationLine = Math.min(180, window.innerHeight * 0.25);
      let nextSection = sectionIds[0];

      for (const sectionId of sectionIds) {
        const section = document.getElementById(sectionId);
        if (!section || section.getBoundingClientRect().top > activationLine) {
          break;
        }
        nextSection = sectionId;
      }

      setActiveSection((current) =>
        current === nextSection ? current : nextSection
      );
    };

    const scheduleUpdate = () => {
      if (frame) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateActiveSection);
    };

    scheduleUpdate();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, [days, program.id, program.stops, singleDay]);

  useEffect(() => {
    const nav = navRef.current;
    const activeLink = nav?.querySelector<HTMLElement>(
      `[data-section-id="${activeSection}"]`
    );
    if (!nav || !activeLink) return;

    const padding = 16;
    const navRect = nav.getBoundingClientRect();
    const linkRect = activeLink.getBoundingClientRect();
    const visibleTop = navRect.top + padding;
    const visibleBottom = navRect.bottom - padding;

    if (linkRect.top < visibleTop) {
      nav.scrollBy({
        top: linkRect.top - visibleTop,
        behavior: "smooth",
      });
    } else if (linkRect.bottom > visibleBottom) {
      nav.scrollBy({
        top: linkRect.bottom - visibleBottom,
        behavior: "smooth",
      });
    }
  }, [activeSection]);

  const sectionLinkClass = (sectionId: string, compact = false) =>
    `${compact ? "flex gap-2 text-xs leading-snug" : "block"} py-2 transition-colors hover:text-savana-600 ${
      activeSection === sectionId ? "text-savana-800" : "text-neutral-300"
    }`;

  const renderStopLinks = (stops: TripProgram["stops"]) => (
    <div className="mt-1.5 text-xs">
      {stops.map((stop) => (
        <a
          key={stop.id}
          href={`#${stop.id}`}
          data-section-id={stop.id}
          aria-current={activeSection === stop.id ? "location" : undefined}
          onClick={() => setActiveSection(stop.id)}
          className={sectionLinkClass(stop.id, true)}
        >
          <span aria-hidden="true">↳</span>
          <span className="min-w-0 truncate text-xs" title={stop.title}>
            {stop.title}
          </span>
        </a>
      ))}
    </div>
  );

  return (
    <aside className="hidden w-[360px] flex-none lg:block">
      <div className="sticky top-24 [scrollbar-width:thin] overflow-y-auto pb-3">
        <nav
          ref={navRef}
          aria-label={`${program.title}: ${t("trip.pageSections")}`}
          className="trip-sidebar-scrollbar h-[528px] max-h-[528px] overflow-y-auto rounded-xl bg-white px-5 py-5 shadow-[0_4px_8px_rgba(69,61,24,0.10)]"
        >
          <div className="space-y-2 text-base font-semibold">
            <a
              href="#trip-summary"
              data-section-id="trip-summary"
              aria-current={
                activeSection === "trip-summary" ? "location" : undefined
              }
              onClick={() => setActiveSection("trip-summary")}
              className={sectionLinkClass("trip-summary")}
            >
              {t("trip.summary")}
            </a>
            <a
              href="#accommodation"
              data-section-id="accommodation"
              aria-current={
                activeSection === "accommodation" ? "location" : undefined
              }
              onClick={() => setActiveSection("accommodation")}
              className={sectionLinkClass("accommodation")}
            >
              {t("trip.accommodation")}
            </a>
            <a
              href="#meals-dining"
              data-section-id="meals-dining"
              aria-current={
                activeSection === "meals-dining" ? "location" : undefined
              }
              onClick={() => setActiveSection("meals-dining")}
              className={sectionLinkClass("meals-dining")}
            >
              {t("trip.meals")}
            </a>
          </div>

          <div className="mt-4">
            {singleDay ? (
              <div>
                <a
                  href="#itinerary-timeline"
                  data-section-id="itinerary-timeline"
                  aria-current={
                    activeSection === "itinerary-timeline"
                      ? "location"
                      : undefined
                  }
                  onClick={() => setActiveSection("itinerary-timeline")}
                  className={`${sectionLinkClass("itinerary-timeline")} text-base font-semibold`}
                >
                  {t("trip.itinerary")}
                </a>
                {renderStopLinks(program.stops)}
              </div>
            ) : (
              days.map((day, dayIndex) => {
                const dayId = `itinerary-day-${dayIndex + 1}`;
                const dayStops = program.stops.filter(
                  (stop) => stop.day === day
                );
                return (
                  <div key={day}>
                    <a
                      href={`#${dayId}`}
                      data-section-id={dayId}
                      aria-current={
                        activeSection === dayId ? "location" : undefined
                      }
                      onClick={() => setActiveSection(dayId)}
                      className={`${sectionLinkClass(dayId)} text-base leading-snug font-semibold`}
                    >
                      {day}
                    </a>
                    {renderStopLinks(dayStops)}
                  </div>
                );
              })
            )}
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
            {t("trip.bookWhatsapp")}
          </a>
          <a
            href={`mailto:${email}?subject=${emailSubject}`}
            className="flex min-h-11 items-center justify-center gap-2 rounded-lg border border-savana-600 bg-white px-3 text-[11px] font-semibold text-savana-800 transition-colors hover:bg-savana-200"
          >
            <IoMail size={15} />
            {t("trip.bookEmail")}
          </a>
        </div>
      </div>
    </aside>
  );
}

function TripOverview({ program }: { program: TripProgram }) {
  const { t } = useLang();

  return (
    <section className="in-view px-5 pt-8 pb-14 sm:px-8 sm:pb-20 lg:px-0 lg:pt-0 lg:pb-14">
      <div id="trip-summary" className="scroll-mt-28">
        <div>
          <h2 className="text-[23px] leading-tight font-bold tracking-[-0.025em] text-savana-800 sm:text-3xl">
            {t("trip.summary")}
          </h2>
          <p className="mt-3 max-w-[65ch] text-[11px] leading-[1.75] text-savana-800 sm:text-sm">
            {program.overview}
          </p>
          <SummaryList program={program} />
        </div>

        <div className="mt-10 space-y-9">
          <div>
            <h2 className="text-xl font-bold text-savana-800">
              {t("trip.whatYouGet")}
            </h2>
            <BulletList items={program.experiences} />
          </div>
          <div>
            <h2 className="text-xl font-bold text-savana-800">
              {t("trip.travelersNotes")}
            </h2>
            <ParagraphList items={program.notes} />
          </div>
        </div>
      </div>

      <div className="mt-11 grid gap-10">
        <div id="accommodation" className="scroll-mt-28">
          <h2 className="text-2xl font-bold text-savana-800 sm:text-3xl">
            {t("trip.accommodation")}
          </h2>
          <InfoCards cards={program.accommodation} variant="accommodation" />
          {program.accommodationReminder && (
            <p className="mt-3 text-[10px] leading-relaxed text-savana-800 sm:text-xs">
              <span className="font-semibold text-red-500">
                *{t("trip.reminder")}
              </span>{" "}
              {program.accommodationReminder}
            </p>
          )}
        </div>
        <div id="meals-dining" className="scroll-mt-28">
          <h2 className="text-2xl font-bold text-savana-800 sm:text-3xl">
            {t("trip.meals")}
          </h2>
          <InfoCards cards={program.meals} />
          {program.mealsNote && (
            <p className="mt-3 max-w-[72ch] text-[10px] leading-relaxed text-savana-600 sm:text-xs">
              *{program.mealsNote}
            </p>
          )}
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
      className="my-1 h-[112px] sm:h-[150px] lg:h-[285px]"
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
  const { t } = useLang();
  const singleDay = program.id === "one-day-trek";
  const days = Array.from(new Set(program.stops.map((stop) => stop.day)));

  return (
    <section
      id={singleDay ? "itinerary-timeline" : undefined}
      className="in-view scroll-mt-28 px-5 pb-20 sm:px-8 sm:pb-28 lg:px-0"
    >
      {singleDay && (
        <h2 className="mb-10 text-[23px] leading-tight font-bold tracking-[-0.025em] text-savana-800 sm:mb-16 sm:text-3xl lg:mb-14">
          {t("trip.itinerary")}
        </h2>
      )}

      <div>
        {program.stops.map((stop, index) => {
          const newDay =
            index === 0 || program.stops[index - 1].day !== stop.day;
          const reverse = index % 2 === 1;
          const { label: dayLabel, route } = splitDay(stop.day);
          const dayIndex = days.indexOf(stop.day);

          return (
            <div key={stop.id}>
              {newDay && !singleDay && (
                <div
                  id={`itinerary-day-${dayIndex + 1}`}
                  className="mb-7 scroll-mt-28 sm:mb-10 lg:mb-12"
                >
                  <div className="flex items-center gap-3 lg:hidden">
                    <span className="text-xl font-semibold text-savana-800">
                      {t("trip.itineraryDay")} {dayLabel}
                    </span>
                    {/* <span className="h-px flex-1 bg-savana-200" /> */}
                  </div>
                  {route && (
                    <>
                      <p className="hidden text-xl font-semibold text-savana-800 lg:block">
                        {t("trip.itineraryDay")} {dayLabel}
                      </p>
                      <h3 className="mt-1 text-[28px] font-bold text-savana-800 lg:text-[32px]">
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
                <div className="relative h-[300px] w-full sm:h-[400px] lg:h-[260px] lg:w-1/2">
                  <Image
                    src={stop.image}
                    alt={stop.title}
                    fill
                    sizes="(min-width: 1024px) 380px, 90vw"
                    className="object-contain"
                  />
                </div>

                <div className="lg:w-1/2">
                  <h3 className="text-2xl leading-tight font-semibold tracking-[-0.015em] text-savana-800 sm:text-3xl">
                    {stop.title}
                  </h3>
                  <StopMeta meta={stop.meta} />
                  <p className="mt-3 max-w-[60ch] text-sm leading-[1.7] whitespace-pre-line text-savana-800">
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
  const { t } = useLang();
  const whatsappMessage = encodeURIComponent(t("trip.message.custom"));
  const emailSubject = encodeURIComponent(t("trip.email.customSubject"));

  return (
    <section className="in-view mx-auto max-w-[880px] px-5 pt-9 pb-20 sm:px-8 sm:pt-16 sm:pb-28 lg:max-w-[780px] lg:px-0 lg:pt-20 lg:pb-32">
      <div className="max-w-[670px]">
        <h2 className="text-[25px] leading-[1.08] font-bold tracking-[-0.03em] text-savana-800 sm:text-4xl">
          {t("trip.custom.heading")}
        </h2>
        <p className="mt-4 text-[11px] leading-[1.75] text-savana-800 sm:text-sm">
          {t("trip.custom.body")}
        </p>
      </div>

      <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {customFeatures.map(({ titleKey, Icon, iconName }) => (
          <div
            key={titleKey}
            className="flex min-h-[108px] flex-col items-center justify-center rounded-lg bg-[#DED6B133] px-3 py-4 text-center shadow-[0_2px_6px_rgba(69,61,24,0.10)]"
          >
            {iconName ? (
              <NewIcon
                aria-hidden="true"
                name={iconName}
                className="text-savana-500"
                size={25}
              />
            ) : (
              Icon && (
                <Icon
                  aria-hidden="true"
                  size={25}
                  className="text-savana-500"
                />
              )
            )}
            <h3 className="mt-2 text-[10px] leading-snug font-semibold text-savana-800 sm:text-xs">
              {t(titleKey)}
            </h3>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <h2 className="text-[21px] font-bold text-savana-800 sm:text-3xl">
          {t("trip.travelersNotes")}
        </h2>
        <p className="mt-2 text-[11px] leading-[1.75] text-savana-800 sm:text-sm">
          {t("trip.custom.notes1")}
        </p>
        <p className="mt-4 text-[11px] leading-[1.75] text-savana-800 sm:text-sm">
          {t("trip.custom.notes2")}
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
          {t("trip.custom.whatsapp")}
        </a>
        <a
          href={`mailto:${email}?subject=${emailSubject}`}
          className="flex min-h-12 items-center justify-center gap-2 rounded-lg border border-savana-800 px-5 py-3 text-center text-xs font-semibold text-savana-800 transition-colors hover:bg-savana-200 sm:text-sm"
        >
          <IoMailOutline size={18} />
          {t("trip.custom.email")}
        </a>
      </div>
    </section>
  );
}

function TripDetails({ program }: { program: TripProgram }) {
  return (
    <div className="mx-auto flex max-w-[1224px] flex-row gap-[68px] lg:px-4 lg:pt-16">
      <TripSidebar program={program} />
      <div className="min-w-0 flex-1">
        <TripOverview program={program} />
        <Itinerary program={program} />
      </div>
    </div>
  );
}

export default function TripContent() {
  const { lang } = useLang();
  const programs = useMemo(() => getTripPrograms(lang), [lang]);
  const [activeId, setActiveId] = useState(programs[0].id);
  const activeIndex = Math.max(
    0,
    programs.findIndex((program) => program.id === activeId)
  );
  const program = programs[activeIndex];

  const move = (direction: -1 | 1) => {
    const nextIndex =
      (activeIndex + direction + programs.length) % programs.length;
    setActiveId(programs[nextIndex].id);
  };

  return (
    <div className="bg-savana-50">
      <Hero
        program={program}
        onPrevious={() => move(-1)}
        onNext={() => move(1)}
      />
      <ProgramSelector
        programs={programs}
        activeId={activeId}
        onSelect={setActiveId}
      />

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
