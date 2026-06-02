"use client";

import { useState } from "react";
import Image from "next/image";
import { tripPrograms, type Stop } from "../data";
import BookingModal from "./BookingModal";

/* ── helpers ── */

const BLOCK_H = 320; // desktop px per stop block

function buildWindingPath(
  numStops: number,
  leftX: number,
  rightX: number,
  blockH: number
): string {
  if (numStops < 1) return "";

  const markers = Array.from({ length: numStops }, (_, i) => ({
    x: i % 2 === 0 ? leftX : rightX,
    y: i * blockH + blockH / 2,
  }));

  return markers
    .map(({ x, y }, i) => {
      if (i === 0) return `M ${x} ${y}`;
      const prev = markers[i - 1];
      const midY = (prev.y + y) / 2;
      return `C ${prev.x} ${midY} ${x} ${midY} ${x} ${y}`;
    })
    .join(" ");
}

/* split title so the word "Waerebo" (or last word) is highlighted */
function splitTitle(title: string): [string, string] {
  const idx = title.indexOf("Waerebo");
  if (idx > 0) return [title.slice(0, idx), title.slice(idx)];
  const words = title.split(" ");
  const last = words.pop() ?? "";
  return [words.join(" ") + " ", last];
}

/* ── shared text block for a stop ── */

function StopText({ stop }: { stop: Stop }) {
  return (
    <div className="flex flex-col justify-center">
      {stop.day && (
        <p className="text-[10px] font-bold text-green-200 uppercase tracking-[0.2em] mb-1.5">
          {stop.day}
        </p>
      )}
      <h3 className="text-xl lg:text-2xl font-bold text-neutral-900 mb-4 leading-tight">
        {stop.title}
      </h3>
      <dl className="space-y-2 mb-4">
        {stop.time && (
          <div className="flex gap-2 text-sm">
            <dt className="font-semibold text-neutral-900 min-w-[78px]">
              Time:
            </dt>
            <dd className="text-green-200 font-medium">{stop.time}</dd>
          </div>
        )}
        {stop.transport && (
          <div className="flex gap-2 text-sm">
            <dt className="font-semibold text-neutral-900 min-w-[78px]">
              Transport:
            </dt>
            <dd className="text-green-200 font-medium">{stop.transport}</dd>
          </div>
        )}
      </dl>
      <p className="text-sm text-neutral-300 leading-relaxed">
        {stop.description}
      </p>
    </div>
  );
}

function StopImage({ stop, className = "" }: { stop: Stop; className?: string }) {
  return (
    <div
      className={`relative w-full h-[220px] lg:h-[240px] rounded-3xl overflow-hidden shadow-md ${className}`}
    >
      <Image src={stop.image} alt={stop.title} fill className="object-cover" />
    </div>
  );
}

/* ── desktop winding timeline (alternating sides) ── */

function DesktopTimeline({ stops }: { stops: Stop[] }) {
  const totalH = stops.length * BLOCK_H;
  const LEFT_X = 490; // out of 1000 — runs through the centre gutter
  const RIGHT_X = 510;

  const pathD = buildWindingPath(stops.length, LEFT_X, RIGHT_X, BLOCK_H);

  return (
    <div className="relative hidden lg:block" style={{ height: totalH }}>
      <svg
        className="absolute inset-0 w-full pointer-events-none"
        viewBox={`0 0 1000 ${totalH}`}
        preserveAspectRatio="none"
        height={totalH}
        aria-hidden="true"
      >
        <path
          d={pathD}
          stroke="#AC983B"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
      </svg>

      {/* Marker dots */}
      {stops.map((_, i) => {
        const x = i % 2 === 0 ? LEFT_X : RIGHT_X;
        const y = i * BLOCK_H + BLOCK_H / 2;
        return (
          <div
            key={i}
            className="absolute z-10 w-4 h-4 rounded-full bg-savana-500 border-[3px] border-white shadow-md"
            style={{
              left: `${(x / 1000) * 100}%`,
              top: y,
              transform: "translate(-50%, -50%)",
            }}
          />
        );
      })}

      {/* Content blocks */}
      {stops.map((stop, i) => {
        const reversed = i % 2 === 1;
        return (
          <div
            key={stop.id}
            className="absolute w-full grid grid-cols-[1fr_8%_1fr] items-center"
            style={{ top: i * BLOCK_H, height: BLOCK_H }}
          >
            {reversed ? (
              <>
                <StopText stop={stop} />
                <div />
                <StopImage stop={stop} />
              </>
            ) : (
              <>
                <StopImage stop={stop} />
                <div />
                <StopText stop={stop} />
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}

/* ── mobile stacked timeline ── */

function MobileTimeline({ stops }: { stops: Stop[] }) {
  return (
    <div className="lg:hidden space-y-10">
      {stops.map((stop) => (
        <div key={stop.id}>
          <StopImage stop={stop} className="mb-5 !h-48" />
          <StopText stop={stop} />
        </div>
      ))}
    </div>
  );
}

/* ── main export ── */

export default function TripContent() {
  const [activeId, setActiveId] = useState("1-day");
  const [modalOpen, setModalOpen] = useState(false);

  const program = tripPrograms.find((p) => p.id === activeId) ?? tripPrograms[0];
  const [titleHead, titleTail] = splitTitle(program.title);

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative h-[70vh] min-h-[480px] flex items-center justify-center">
        <Image
          src={program.heroImage}
          alt={program.title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-5">
            {titleHead}
            <span className="text-pale-green-100">{titleTail}</span>
          </h1>
          <p className="text-white/80 text-sm lg:text-base max-w-2xl mx-auto leading-relaxed">
            {program.subtitle}
          </p>
        </div>
      </section>

      {/* ── Floating program selector ── */}
      <div className="relative z-30 max-w-4xl mx-auto px-4 sm:px-6 -mt-14 lg:-mt-16">
        <div className="bg-white rounded-3xl shadow-xl border border-pale-green-100/40 p-5 lg:p-6">
          <p className="text-sm font-bold text-neutral-900 mb-3 text-center lg:text-left">
            Choose your Program
          </p>
          <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
            {tripPrograms.map((p) => (
              <button
                key={p.id}
                onClick={() => setActiveId(p.id)}
                className={`px-4 py-2.5 text-xs font-semibold rounded-full whitespace-nowrap transition-colors ${
                  activeId === p.id
                    ? "bg-green-400 text-white"
                    : "bg-light-green-100 text-neutral-300 hover:text-neutral-900 hover:bg-pale-green-100/30"
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Itinerary ── */}
      <section className="bg-white py-14 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <DesktopTimeline stops={program.stops} />
          <MobileTimeline stops={program.stops} />
        </div>
      </section>

      {/* ── Book button ── */}
      <div className="flex justify-center pb-16 bg-white">
        <button
          onClick={() => setModalOpen(true)}
          className="px-10 py-4 bg-neutral-900 text-white font-bold text-sm rounded-full hover:bg-green-400 transition-colors shadow-lg tracking-wide"
        >
          Book The Trip
        </button>
      </div>

      {/* ── Booking modal ── */}
      <BookingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        programs={tripPrograms}
        defaultProgramId={activeId}
      />
    </>
  );
}
